"use client";
import Link from "next/link";
import { redirect } from "next/navigation";
import { setCurrentUser } from "../reducer";
import { useDispatch } from "react-redux";
import { useState } from "react";
import * as db from "../../database";
import { Col, Container, FormControl, Button, Row } from "react-bootstrap";
export default function Signin() {
  const [credentials, setCredentials] = useState<any>({});
  const dispatch = useDispatch();
  const signin = () => {
    const user = db.users.find(
      (u: any) =>
        u.username === credentials.username &&
        u.password === credentials.password,
    );
    if (!user) return;
    dispatch(setCurrentUser(user));
    redirect("/dashboard");
  };

  return (
    <Container id="wd-signin-screen">
      <Row>
        <Col md={4}>
          <h1>Sign in</h1>
          <FormControl
            id="wd-username"
            placeholder="username"
            className="mb-2"
            defaultValue={credentials.username}
            onChange={(e) =>
              setCredentials({ ...credentials, username: e.target.value })
            }
          />
          <FormControl
            id="wd-password"
            placeholder="password"
            type="password"
            className="mb-2"
            defaultValue={credentials.password}
            onChange={(e) =>
              setCredentials({ ...credentials, password: e.target.value })
            }
          />
          <Button onClick={signin} id="wd-signin-btn" className="w-100">
            Sign in
          </Button>
          <Link id="wd-signup-link" href="/account/signup">
            Sign up
          </Link>
        </Col>
      </Row>
    </Container>
  );
}
