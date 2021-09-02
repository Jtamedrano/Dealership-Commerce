import React from "react";
import { Row, Col } from "react-bootstrap";

const SquareGrid: React.FC = () => {
  return (
    <Row className="square-grid">
      <Col xs={5} className="square-grid__left">
        <div className="square-item">
          <div>
            <p>Welcome to Auto Dealer</p>
          </div>
        </div>
        <div className="square-item">
          <div>
            <p>I'M INTERESTED IN</p>
            <div className="inventory-form">Form will go here</div>
          </div>
        </div>
      </Col>
      <Col className="square-grid__right">
        <div className="square-item">
          <img src="/assets/yellow-ferrari.jpg" alt="Yellow Ferrari" />
        </div>
        <div className="square-item-group">
          <div className="square-item">SCHEDULE SERVICE</div>
          <div className="square-item">SPECIAL OFFERS & INCENTIVES</div>
          <div className="square-item">VALUE YOUR TRADE-IN</div>
        </div>
      </Col>
    </Row>
  );
};

export default SquareGrid;
