"use client";

import { useParams } from "next/navigation";
import {
  FormLabel,
  FormControl,
  FormSelect,
  Form,
  Row,
  Col,
  Container,
  Button,
} from "react-bootstrap";
import FormCheck from "react-bootstrap/esm/FormCheck";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../store";
import { addAssignment, updateAssignment } from "../reducer";
import { useState } from "react";

export default function AssignmentEditor() {
  const { aid } = useParams();
  const { cid } = useParams();
  const { assignments } = useSelector(
    (state: RootState) => state.assignmentReducer,
  );
  const dispatch = useDispatch();
  const isNewAssignment = assignments.every(
    (assignment) => assignment._id != aid,
  );

  const [assignment, setAssignment] = useState(
    assignments.find((assignment: any) => assignment._id === aid) ?? {
      _id: aid,
      course: cid,
      title: "New Assignment",
    },
  );

  return (
    <div id="wd-assignments-editor" className="p-5">
      <Form.Group id="wd-name">
        <FormLabel>Assignment</FormLabel>
        <FormControl
          type="text"
          className="mb-3"
          defaultValue={assignment?.title}
          onChange={(e) =>
            setAssignment({ ...assignment, title: e.target.value })
          }
        />
      </Form.Group>
      <Form.Group id="wd-description">
        <FormControl
          as="textarea"
          rows={3}
          defaultValue={assignment?.description}
          onChange={(e) =>
            setAssignment({ ...assignment, description: e.target.value })
          }
        />
      </Form.Group>
      <Form.Group id="wd-points" as={Row} className="my-3">
        <FormLabel column sm={2}>
          Points
        </FormLabel>
        <Col sm={10}>
          <FormControl
            type="number"
            defaultValue={assignment?.points}
            onChange={(e) =>
              setAssignment({ ...assignment, points: parseInt(e.target.value) })
            }
          />
        </Col>
      </Form.Group>
      <Form.Group id="wd-display-grade-as" as={Row} className="my-3">
        <FormLabel column sm={2}>
          Display Grade As
        </FormLabel>
        <Col sm={10}>
          <FormSelect>
            <option value="PERCENTAGE">Percentage</option>
            <option value="LETTER">Letter</option>
          </FormSelect>
        </Col>
      </Form.Group>
      <Form.Group id="wd-group" as={Row}>
        <FormLabel column sm={2}>
          Assignment Group
        </FormLabel>
        <Col sm={10}>
          <FormSelect>
            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
            <option value="QUIZZES">QUIZZES</option>
            <option value="EXAMS">EXAMS</option>
            <option value="PROJECTS">PROJECTS</option>
          </FormSelect>
        </Col>
      </Form.Group>
      <Form.Group id="wd-submission-type" as={Row} className="my-3">
        <FormLabel column sm={2}>
          Submission Type
        </FormLabel>
        <Col sm={10}>
          <Container>
            <FormSelect className="my-3">
              <option value="ONLINE">Online</option>
              <option value="PAPER">Paper</option>
            </FormSelect>
            <Form.Group>
              <FormLabel>Online Entry Options</FormLabel>
              <Form.Group id="wd-text-entry">
                <FormCheck
                  label="Text Entry"
                  type="checkbox"
                  defaultChecked={false}
                />
              </Form.Group>
              <Form.Group id="wd-website-url">
                <FormCheck
                  label="Website URL"
                  type="checkbox"
                  defaultChecked={false}
                />
              </Form.Group>
              <Form.Group id="wd-media-recordings">
                <FormCheck
                  label="Media Recordings"
                  type="checkbox"
                  defaultChecked={false}
                />
              </Form.Group>
              <Form.Group id="wd-student-annotation">
                <FormCheck
                  label="Student Annotation"
                  type="checkbox"
                  defaultChecked={false}
                />
              </Form.Group>
              <Form.Group id="wd-file-upload">
                <FormCheck
                  label="File Uploads"
                  type="checkbox"
                  defaultChecked={false}
                />
              </Form.Group>
            </Form.Group>
          </Container>
        </Col>
      </Form.Group>
      <Form.Group id="wd-assign" as={Row} className="my-3">
        <FormLabel column sm={2}>
          Assign
        </FormLabel>
        <Col sm={10}>
          <Container>
            <Form.Group id="wd-assign-to">
              <FormLabel>Assign To:</FormLabel>
              <FormControl
                type="text"
                defaultValue={"Everyone"}
                className="mb-3"
              />
            </Form.Group>
            <Form.Group id="wd-due-date">
              <FormLabel>Due</FormLabel>
              <FormControl
                type="date"
                defaultValue={assignment?.dueDate}
                className="mb-3"
                onChange={(e) => {
                  setAssignment({ ...assignment, dueDate: e.target.value });
                }}
              />
            </Form.Group>
            <Row xs={2}>
              <Form.Group id="wd-available-from">
                <FormLabel>Available From</FormLabel>
                <FormControl
                  type="date"
                  defaultValue={assignment?.availableFrom}
                  id="wd-available-from"
                  onChange={(e) => {
                    setAssignment({
                      ...assignment,
                      availableFrom: e.target.value,
                    });
                  }}
                />
              </Form.Group>
              <Form.Group id="wd-available-until">
                <FormLabel>Until</FormLabel>
                <FormControl
                  type="date"
                  id="wd-available-until"
                  defaultValue={assignment?.availableUntil}
                  onChange={(e) => {
                    setAssignment({
                      ...assignment,
                      availableUntil: e.target.value,
                    });
                  }}
                />
              </Form.Group>
            </Row>
          </Container>
        </Col>
      </Form.Group>
      <Row>
        <Col>
          <Link
            href={`/courses/${assignment?.course ?? cid}/assignments`}
            className="ms-2"
          >
            <Button
              variant="danger"
              className="float-end"
              onClick={() => {
                if (isNewAssignment) {
                  dispatch(addAssignment(assignment));
                } else {
                  dispatch(updateAssignment(assignment));
                }
              }}
            >
              Save
            </Button>
          </Link>
          <Link
            href={`/courses/${assignment?.course ?? cid}/assignments`}
            className="me-2"
          >
            <Button variant="secondary" className="float-end">
              Cancel
            </Button>
          </Link>
        </Col>
      </Row>
    </div>
  );
}
