"use client";
import Link from "next/link";
import { Col, Container, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { MdAssignmentAdd } from "react-icons/md";
import AssignmentControls from "./AssignmentControls";
import AssignmentHeaderControlButtons from "./AssignmentHeaderControlButtons";
import { useParams } from "next/navigation";
import { RootState } from "../../../store";
import { useSelector } from "react-redux";

export default function Assignments() {
  const { cid } = useParams();
  const { assignments } = useSelector(
    (state: RootState) => state.assignmentReducer,
  );

  return (
    <div id="wd-assignments">
      <AssignmentControls />
      <br />
      <br />
      <br />
      <br />
      <ListGroup className="rounded-0" id="wd-assignment-list">
        <ListGroupItem className="p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            <AssignmentHeaderControlButtons />
            Assignments
          </div>
          <ListGroup className="wd-lessons rounded-0">
            {assignments
              .filter((assignment: any) => assignment.course === cid)
              .map((assignment: any, index: number) => (
                <ListGroupItem key={index} className="wd-lesson p-3 ps-1">
                  <BsGripVertical className="me-2 fs-3 float-start" />
                  <MdAssignmentAdd
                    className="me-2 fs-3 float-start"
                    color="green"
                  />
                  <AssignmentControlButtons assignmentId={assignment._id} />
                  <Container>
                    <Link
                      href={`/courses/${cid}/assignments/${assignment._id}`}
                      className="wd-assignment-link text-black text-decoration-none"
                    >
                      {assignment.title}
                    </Link>
                    <p>
                      Multiple Modules | <b>Not available until </b> May 13 at
                      12:00am
                      <br></br>
                      <b>Due</b> May 20 at 11:59pm | 100 pts
                    </p>
                  </Container>
                </ListGroupItem>
              ))}
          </ListGroup>
        </ListGroupItem>
      </ListGroup>
    </div>
  );
}
