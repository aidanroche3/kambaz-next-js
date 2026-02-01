import Link from "next/link";
import { Col, Container, FormControl, Row } from "react-bootstrap";
export default function Signup() {
  return (
    <Container id="wd-signup-screen">
      <Row>
        <Col md={4}>
          <h1>Sign up</h1>
          <FormControl
            id="wd-username"
            placeholder="username"
            className="mb-2"
          />
          <FormControl
            id="wd-password"
            placeholder="password"
            type="password"
            className="mb-2"
          />
          <FormControl
            id="wd-verify-password"
            placeholder="verify password"
            type="password"
            className="mb-2"
          />
          <Link className="btn btn-primary w-100 mb-2" href="profile">
            Sign up
          </Link>
          <Link href="signin">Sign in</Link>
        </Col>
      </Row>
    </Container>
  );
}
