import { Row } from "react-bootstrap";
import DashboardItem from "./DashboardItem";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          <DashboardItem
            link={"/courses/1234/home"}
            imageRef={"/images/reactjs.jpg"}
            imageAlt={"reactjs"}
            courseTitle={"CS1234 React JS"}
            courseDescription={"Full Stack software developer"}
          />
          <DashboardItem
            link={"/courses/4530/home"}
            imageRef={"/images/softwareengineering.jpg"}
            imageAlt={"softwareengineering"}
            courseTitle={"CS4530 Fundamentals of Software Engineering"}
            courseDescription={"Join an agile team"}
          />
          <DashboardItem
            link={"/courses/3000/home"}
            imageRef={"/images/algorithms.jpg"}
            imageAlt={"algorithms"}
            courseTitle={"CS3000 Algorithms & Data"}
            courseDescription={"Learn computer algorithms and data structures"}
          />
          <DashboardItem
            link={"/courses/3200/home"}
            imageRef={"/images/databasedesign.jpg"}
            imageAlt={"databasedesign"}
            courseTitle={"CS3200 Database Design"}
            courseDescription={"Learn SQL and database design"}
          />
          <DashboardItem
            link={"/courses/4700/home"}
            imageRef={"/images/networks.jpg"}
            imageAlt={"networks"}
            courseTitle={"CS4700 Networks"}
            courseDescription={"Learn network fundamentals"}
          />
          <DashboardItem
            link={"/courses/4550/home"}
            imageRef={"/images/webdev.jpg"}
            imageAlt={"webdev"}
            courseTitle={"CS4550 Web Development"}
            courseDescription={"CS4550 Web Development"}
          />
          <DashboardItem
            link={"/courses/3500/home"}
            imageRef={"/images/ood.jpg"}
            imageAlt={"ood"}
            courseTitle={"CS3500 Object Oriented Design"}
            courseDescription={"Learn object oriented programming and design"}
          />
        </Row>
      </div>
    </div>
  );
}
