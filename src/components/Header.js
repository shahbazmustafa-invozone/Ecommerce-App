import React from "react";
import { Row,Col} from "antd";
import "antd/dist/antd.css";
const Header = (props) => {
  return (
    <Col style={{height:30}}>
      <Row
        type="flex"
        justify="end"
        align="middle"
        style={{
          height: 30,
          backgroundColor: "black",
        }}
      >
        <h2
          style={{ color: "white", fontWeight: "bold", fontSize: 15 }}
          onClick={props.onClick}
        >
          LOG IN
        </h2>
        <h2
          style={{
            color: "white",
            fontWeight: "bold",
            fontSize: 15,
            marginLeft: 20,
            marginRight: 20,
          }}
        >
          .
        </h2>
        <h2
          style={{ color: "white", fontWeight: "bold", fontSize: 15 }}
          onClick={props.onClick2}
        >
          CREATE ACCOUNT
        </h2>
      </Row>
    </Col>
  );
};
export default Header;
