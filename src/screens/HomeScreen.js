import React from "react";
import { Col } from "antd";
import "antd/dist/antd.css";
import Header from "../../src/components/Header";
import { useHistory } from "react-router-dom";

const HomeScreen = (props) => {
  let history = useHistory();
  return (
    <Col>
      <Header
        onClick={() => {
          history.push("/Login");
        }}
        onClick2={()=>{
          history.push("/Register");
        }}
      />
    </Col>
  );
};
export default HomeScreen;
