import React from "react";
import { Row, Input, Col, Button } from "antd";
import "antd/dist/antd.css";
import Header from "../../src/components/Header";
const LoginScreen = (props) => {
  return (
    <Col>
      <Header />
      <Col>
        <Row type="flex" justify="center">
          <h1 style={{ marginTop: 50, fontSize: 30 }}>Login</h1>
        </Row>
        <Row type="flex" justify="center" style={{ marginTop: 20 }}>
          <Input placeholder="Email" style={{ width: 300, height: 50 }} />
        </Row>
        <Row type="flex" justify="center" style={{ marginTop: 20 }}>
          <Input placeholder="Password" style={{ width: 300, height: 50 }} />
        </Row>
        <Row type="flex" justify="center" style={{ marginTop: 20 }}>
          <Button
            style={{
              backgroundColor: "black",
              color: "white",
              fontSize: 20,
              width: 300,
              height: 50,
            }}
          >
            Sign In
          </Button>
        </Row>
      </Col>
    </Col>
  );
};
export default LoginScreen;
