import { IoEllipsisVertical } from "react-icons/io5";
import { IoIosAdd } from "react-icons/io";
import { Badge } from "react-bootstrap";

export default function AssignmentHeaderControlButtons() {
  return (
    <div className="float-end">
      <Badge pill bg="light" className="text-black">
        40% of total
      </Badge>
      <IoIosAdd className="fs-4" />
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}
