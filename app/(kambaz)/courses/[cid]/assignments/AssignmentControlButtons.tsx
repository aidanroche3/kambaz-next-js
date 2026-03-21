import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../modules/GreenCheckmark";
import { BiTrash } from "react-icons/bi";
import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { setAssignments } from "./reducer";
import { useDispatch, useSelector } from "react-redux";
import * as client from "./client";
import { RootState } from "../../../store";

export default function AssignmentControlButtons({
  assignmentId,
}: {
  assignmentId: any;
}) {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const dispatch = useDispatch();
  const { assignments } = useSelector(
    (state: RootState) => state.assignmentReducer,
  );
  const onRemoveAssignment = async (assignmentId: string) => {
    await client.deleteAssignment(assignmentId);
    dispatch(
      setAssignments(assignments.filter((a: any) => a._id !== assignmentId)),
    );
  };
  return (
    <>
      <div className="float-end">
        <GreenCheckmark />
        <IoEllipsisVertical className="fs-4" />
        <BiTrash className="fs-4" onClick={() => setShowDeleteModal(true)} />
      </div>

      <Modal
        show={showDeleteModal}
        onHide={() => setShowDeleteModal(!showDeleteModal)}
      >
        <Modal.Header closeButton>
          <Modal.Title>Delete Assignment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to remofe this assignment?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
            No
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              onRemoveAssignment(assignmentId);
              setShowDeleteModal(false);
            }}
          >
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
