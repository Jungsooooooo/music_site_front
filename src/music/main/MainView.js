import "../../css/mainView.css";
import { useSelector } from "react-redux";
import axios from "axios";
import { useEffect, useState } from "react";

import music1 from "./music1.jpg";
import music2 from "./music2.jpg";
import music3 from "./music3.jpg";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Button } from "react-bootstrap-buttons";

import Card from "react-bootstrap/Card";


const MainView = () => {
  const [mData, setMData] = useState("");

  const user = useSelector((state) => {
    return state.userSession;
  });

  useEffect(()=>{
    getMData().then((res)=>{
      setMData(res.data);
      console.log(mData);
    })
  },[])

  const getMData = () => {
    return axios.get("/api/musics",{headers:{Authorization:localStorage.getItem("jwtToken")}});
  }

  return (
    <>
      <div style={{ margin: "30px 0 0 100px" }}>
        <Row>
          <Col>
            <Card style={{ float: "left", width: "500px" }}>
              <Card.Img variant="top" src={music1} className="mainImage" />
              <Card.Body>
                <Card.Title>음악 추천 1</Card.Title>
                <Card.Text>추천1</Card.Text>
              </Card.Body>
              <Button variant="outline-primary">Primary</Button>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
          </Col>
          <Card style={{ float: "left", width: "500px" }}>
            <Card.Img variant="top" src={music2} className="mainImage" />
            <Card.Body>
              <Card.Title>음악 추천 2</Card.Title>
              <Card.Text>추천2</Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card style={{ float: "left", width: "500px" }}>
            <Card.Img variant="top" src={music3} className="mainImage" />
            <Card.Body>
              <Card.Title>음악 추천 3</Card.Title>
              <Card.Text>추천3</Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </Row>
      </div>
    </>
  );
};

export default MainView;
