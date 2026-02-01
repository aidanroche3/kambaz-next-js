import Link from "next/link";
import { Col, Container, FormControl, Row } from "react-bootstrap";
export default function Signin() {
  return (
    <Container id="wd-signin-screen">
      <Row>
        <Col md={4}>
          <h1>Sign in</h1>
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
          <Link
            id="wd-signin-btn"
            href="/account/profile"
            className="btn btn-primary w-100 mb-2"
          >
            Sign in
          </Link>
          <Link id="wd-signup-link" href="/account/signup">
            Sign up
          </Link>
        </Col>
      </Row>
    </Container>
  );
}
