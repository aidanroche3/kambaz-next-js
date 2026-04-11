"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Row,
  Col,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Button,
  FormControl,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setCourses } from "../courses/reducer";
import { setEnrollments } from "./reducer";
import { RootState } from "../store";
import * as client from "../courses/client";
import * as enrollmentClient from "../dashboard/client";

type User = {
  _id: string;
  name: string;
  email: string;
};

export default function Dashboard() {
  const { courses } = useSelector((state: RootState) => state.coursesReducer);
  const { currentUser } = useSelector(
    (state: RootState) => state.accountReducer,
  ) as { currentUser: User | null };
  const { enrollments } = useSelector(
    (state: RootState) => state.enrollmentReducer,
  );
  const dispatch = useDispatch();
  const [course, setCourse] = useState<any>({
    _id: "0",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    image: "/images/reactjs.jpg",
    description: "New Description",
  });
  const [showAllEnrollments, setShowAllEnrollments] = useState(false);
  const [allCourses, setAllCourses] = useState<any[]>([]);

  const fetchAllCourses = async () => {
    try {
      const data = await client.fetchAllCourses();
      setAllCourses(data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchCourses = async () => {
    try {
      const data = await client.findMyCourses();
      dispatch(setCourses(data));
    } catch (error) {
      console.error(error);
    }
  };

  const fetchEnrollments = async () => {
    try {
      const data = await enrollmentClient.fetchEnrollments();
      dispatch(setEnrollments(data));
    } catch (error) {
      console.error(error);
    }
  };

  const onAddNewCourse = async () => {
    const newCourse = await client.createCourse(course);
    dispatch(setCourses([...courses, newCourse]));
    await fetchAllCourses();
  };

  const onDeleteCourse = async (courseId: string) => {
    await client.deleteCourse(courseId);
    dispatch(setCourses(courses.filter((c) => c._id !== courseId)));
    await fetchAllCourses();
  };

  const onUpdateCourse = async () => {
    await client.updateCourse(course);
    dispatch(setCourses(courses.map((c) => (c._id === course._id ? course : c))));
    await fetchAllCourses();
  };

  const onEnroll = async (courseId: string) => {
    await enrollmentClient.enrollInCourse(courseId, currentUser!._id);
    await fetchCourses();
    await fetchEnrollments();
  };

  const onUnenroll = async (courseId: string) => {
    await enrollmentClient.unenrollFromCourse(courseId, currentUser!._id);
    await fetchCourses();
    await fetchEnrollments();
  };

  useEffect(() => {
    fetchAllCourses();
    if (currentUser) {
      fetchCourses();
      fetchEnrollments();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser]);

  const coursesToShow = showAllEnrollments ? allCourses : courses;

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h5>
        Enrollments
        <button
          className="btn btn-primary float-end me-2"
          id="wd-enrollments-click"
          onClick={() => setShowAllEnrollments(!showAllEnrollments)}
        >
          {showAllEnrollments ? "Show My Enrollments" : "Show All Courses"}
        </button>
      </h5>
      <br />
      <h5>
        New Course
        <button
          className="btn btn-primary float-end"
          id="wd-add-new-course-click"
          onClick={onAddNewCourse}
        >
          {" "}
          Add{" "}
        </button>
        <button
          className="btn btn-warning float-end me-2"
          onClick={onUpdateCourse}
          id="wd-update-course-click"
        >
          Update{" "}
        </button>
      </h5>
      <br />
      <FormControl
        value={course.name}
        className="mb-2"
        onChange={(e) => setCourse({ ...course, name: e.target.value })}
      />
      <FormControl
        value={course.description}
        onChange={(e) => setCourse({ ...course, description: e.target.value })}
      />
      <hr />
      <h2 id="wd-dashboard-published">Published Courses ({coursesToShow.length})</h2>
      <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {coursesToShow.map((course, index) => (
            <Col
              key={index}
              className="wd-dashboard-course"
              style={{ width: "300px" }}
            >
              <Card>
                <Link
                  href={
                    enrollments.some(
                      (enrollment: any) =>
                        enrollment.user === currentUser?._id &&
                        enrollment.course === course._id,
                    )
                      ? `/courses/${course._id}/home`
                      : ""
                  }
                  className="wd-dashboard-course-link text-decoration-none text-dark"
                >
                  <CardImg
                    variant="top"
                    src={"/images/reactjs.jpg"}
                    width="100%"
                    height={160}
                    alt={"reactjs"}
                  />
                  <CardBody className="card-body">
                    <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                      {course.name}
                    </CardTitle>
                    <CardText
                      className="wd-dashboard-course-description overflow-hidden"
                      style={{ height: "100px" }}
                    >
                      {course.description}
                    </CardText>
                    <Button variant="primary"> Go </Button>
                    <Button
                      onClick={(event) => {
                        event.preventDefault();
                        onDeleteCourse(course._id);
                      }}
                      className="btn btn-danger float-end"
                      id="wd-delete-course-click"
                    >
                      Delete
                    </Button>
                    <Button
                      id="wd-edit-course-click"
                      onClick={(event) => {
                        event.preventDefault();
                        setCourse(course);
                      }}
                      className="btn btn-warning me-2 float-end"
                    >
                      Edit
                    </Button>
                    {enrollments.some(
                      (enrollment: any) =>
                        enrollment.user === currentUser?._id &&
                        enrollment.course === course._id,
                    ) ? (
                      <Button
                        id="wd-unenroll-click"
                        onClick={(event) => {
                          event.preventDefault();
                          onUnenroll(course._id);
                        }}
                        className="btn btn-danger me-2 float-end"
                      >
                        Unenroll
                      </Button>
                    ) : (
                      <Button
                        id="wd-enroll-click"
                        onClick={(event) => {
                          event.preventDefault();
                          onEnroll(course._id);
                        }}
                        className="btn btn-success me-2 float-end"
                      >
                        Enroll
                      </Button>
                    )}
                  </CardBody>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
