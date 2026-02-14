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
import * as db from "../../../../database";
import Link from "next/link";

export default function AssignmentEditor() {
  const { aid } = useParams();
  const assignments = db.assignments;
  const assignment = assignments.find(
    (assignment: any) => assignment._id === aid,
  );
  return (
    <div id="wd-assignments-editor" className="p-5">
      <Form.Group id="wd-name">
        <FormLabel>Assignment</FormLabel>
        <FormControl
          type="text"
          className="mb-3"
          defaultValue={assignment?.title}
        />
      </Form.Group>
      <Form.Group id="wd-description">
        <FormControl
          as="textarea"
          rows={3}
          defaultValue={assignment?.description}
        />
      </Form.Group>
      <Form.Group id="wd-points" as={Row} className="my-3">
        <FormLabel column sm={2}>
          Points
        </FormLabel>
        <Col sm={10}>
          <FormControl type="number" defaultValue={assignment?.points} />
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
              />
            </Form.Group>
            <Row xs={2}>
              <Form.Group id="wd-available-from">
                <FormLabel>Available From</FormLabel>
                <FormControl
                  type="date"
                  defaultValue={assignment?.availableDate}
                  id="wd-available-from"
                />
              </Form.Group>
              <Form.Group id="wd-available-until">
                <FormLabel>Until</FormLabel>
                <FormControl type="date" id="wd-available-until" />
              </Form.Group>
            </Row>
          </Container>
        </Col>
      </Form.Group>
      <Row>
        <Col>
          <Link
            href={`/courses/${assignment?.course}/assignments`}
            className="ms-2"
          >
            <Button variant="danger" className="float-end">
              Save
            </Button>
          </Link>
          <Link
            href={`/courses/${assignment?.course}/assignments`}
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
