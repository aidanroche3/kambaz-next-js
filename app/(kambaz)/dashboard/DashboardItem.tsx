import Link from "next/link";
import {
  Col,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Button,
} from "react-bootstrap";

export default function DashboardItem({
  link,
  imageRef,
  imageAlt,
  courseTitle,
  courseDescription,
}: Readonly<{
  link: string;
  imageRef: string;
  imageAlt: string;
  courseTitle: string;
  courseDescription: string;
}>) {
  return (
    <Col className="wd-dashboard-course" style={{ width: "300px" }}>
      <Card>
        <Link
          href={link}
          className="wd-dashboard-course-link text-decoration-none text-dark"
        >
          <CardImg
            variant="top"
            src={imageRef}
            width="100%"
            height={160}
            alt={imageAlt}
          />
          <CardBody>
            <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
              {courseTitle}
            </CardTitle>
            <CardText
              className="wd-dashboard-course-description overflow-hidden"
              style={{ height: "100px" }}
            >
              {courseDescription}
            </CardText>
            <Button variant="primary"> Go </Button>
          </CardBody>
        </Link>
      </Card>
    </Col>
  );
}
