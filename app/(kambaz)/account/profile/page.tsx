import Link from "next/link";
import {
  Col,
  Container,
  Form,
  FormControl,
  FormSelect,
  Row,
} from "react-bootstrap";
export default function Profile() {
  return (
    <Container id="wd-profile-screen">
      <Row>
        <Col md={4}>
          <h3>Profile</h3>
          <FormControl
            id="wd-username"
            defaultValue="username"
            placeholder="username"
            className="mb-2"
          />
          <FormControl
            defaultValue="123"
            placeholder="password"
            type="password"
            className="mb-2"
          />
          <FormControl
            defaultValue="First name"
            placeholder="First Name"
            id="wd-firstname"
            className="mb-2"
          />
          <FormControl
            defaultValue="Last name"
            placeholder="Last Name"
            id="wd-lastname"
            className="mb-2"
          />
          <FormControl
            defaultValue="2000-01-01"
            type="date"
            id="wd-dob"
            className="mb-2"
          />
          <FormControl
            defaultValue="user@gmail"
            type="email"
            id="wd-email"
            className="mb-2"
          />
          <FormSelect defaultValue="FACULTY" id="wd-role" className="mb-2">
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
          </FormSelect>
          <Link href="signin" className="btn btn-danger w-100 mb-2">
            Sign out
          </Link>
        </Col>
      </Row>
    </Container>
  );
}
