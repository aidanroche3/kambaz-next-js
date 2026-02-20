"use client";
import Link from "next/link";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import { CiSearch } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";
import { v4 as uuidv4 } from "uuid";
export default function AssignmentControls() {
  const newId = uuidv4();
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
      <Link href={`./assignments/${newId}`} suppressHydrationWarning>
        <Button
          id="wd-add-assignment"
          variant="secondary"
          size="lg"
          className="me-1 float-end"
        >
          <FaPlus className=" me-2" style={{ bottom: "1px" }} />
          Assignment
        </Button>
      </Link>
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
