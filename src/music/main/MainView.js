import "../../css/mainView.css";
import { useSelector } from "react-redux";

import prettier from "./prettier.PNG";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import CardGroup from "react-bootstrap/CardGroup";

import Card from "react-bootstrap/Card";

const MainView = () => {
  const user = useSelector((state) => {
    console.log(state);
    return state.userSession;
  });

  console.log({ user });

  return (
    <>
      <div className="topColor" />
      <div className="mainHeader">
        <a id="goToReco" className="Topheader">
          Music_Reco
        </a>
      </div>

      <div style={{ margin: "30px 0 0 100px" }}>
        <Row>
          <Col>
            <Card style={{ float: "left", width: "500px" }}>
              <Card.Img variant="top" src={prettier} />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural lead-in to additional content. This
                  content is a little bit longer.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
          </Col>
          <Card style={{ float: "left", width: "500px" }}>
            <Card.Img variant="top" src={prettier} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>This card has supporting text below as a natural lead-in to additional content. </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card style={{ float: "left", width: "500px" }}>
            <Card.Img variant="top" src={prettier} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to additional content. This card
                has even longer content than the first to show that equal height action.
              </Card.Text>
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
