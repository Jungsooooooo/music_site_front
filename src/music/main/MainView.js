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
  const [mData, setMData] = useState([]);

  const user = useSelector((state) => {
    return state.userSession;
  });

  useEffect(()=>{
    getMData().then((res)=>{
      setMData(res.data)
    })
  },[])

  const getMData = () => {
    return axios.get("/api/musics",{headers:{Authorization:localStorage.getItem("jwtToken")}});
  }


  return (     
    <div>
     {mData.map((data,index)=>{
      return(
      <div>
      <Card key={index} style={{ float:"left", width: "18rem" }}>
      <Card.Body>
          <Card.Title>{data.title}</Card.Title>
          <Card.Text>추천1</Card.Text>
        </Card.Body>
        <Button variant="outline-primary">Primary</Button>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      </div>
      )
  })}
  </div>
  );
};

export default MainView;
