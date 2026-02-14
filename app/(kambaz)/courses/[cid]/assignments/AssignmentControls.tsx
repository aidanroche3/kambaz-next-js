import { Button, FormControl, InputGroup } from "react-bootstrap";
import { CiSearch } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";
export default function AssignmentControls() {
  return (
    <div id="wd-modules-controls" className="text-nowrap">
      <div className="float-start">
        <InputGroup>
          <CiSearch className="fs-2" />
          <FormControl
            id="wd-search-assignment"
            type="text"
            placeholder="Search"
          />
        </InputGroup>
      </div>
      <Button
        id="wd-add-assignment"
        variant="secondary"
        size="lg"
        className="me-1 float-end"
      >
        <FaPlus className=" me-2" style={{ bottom: "1px" }} />
        Assignment
      </Button>
      <Button
        id="wd-add-assignment-group"
        variant="danger"
        size="lg"
        className="me-1 float-end"
      >
        <FaPlus className=" me-2" style={{ bottom: "1px" }} />
        Group
      </Button>
    </div>
  );
}
