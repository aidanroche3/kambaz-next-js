import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import NavigationLink from "./NavigationLink";
export default function KambazNavigation() {
  return (
    <div id="wd-kambaz-navigation">
      <ListGroup
        className="rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2"
        style={{ width: 110 }}
        id="wd-kambaz-navigation"
      >
        <ListGroupItem
          className="bg-black border-0 text-center"
          as="a"
          target="_blank"
          href="https://www.northeastern.edu/"
          id="wd-neu-link"
        >
          <img
            src="/images/NEU.png"
            width="75px"
            alt="Northeastern University"
          />
        </ListGroupItem>
        <NavigationLink
          linkName={"Account"}
          icon={<FaRegCircleUser className="fs-1" color="red" />}
        />
        <NavigationLink
          linkName={"Dashboard"}
          icon={<AiOutlineDashboard className="fs-1" color="red" />}
        />
        <NavigationLink
          linkName="Calendar"
          icon={<IoCalendarOutline className="fs-1" color="red" />}
        />
        <NavigationLink
          linkName="Inbox"
          icon={<FaInbox className="fs-1" color="red" size={"40px"} />}
        />
        <NavigationLink
          linkName="Labs"
          icon={<LiaBookSolid className="fs-1" color="red" size={"50px"} />}
        />
      </ListGroup>
    </div>
  );
}
