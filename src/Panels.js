import { Col, Row } from "react-bootstrap"
import styled from "styled-components"

function Panels() {
  return (
    <BodyContent>
      <Row className="callouts">
        <Col xs={12}>
          <h1>Random Things</h1>
        </Col>
        <Col>
          <div className="text">
            <div className="title">AWS and Cloud Stuff</div>
            <div className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
          </div>
          <div style={{ backgroundImage: "url(https://images.unsplash.com/photo-1614812512064-267299572975?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80)" }} className="background">&nbsp;</div>
          <div className="gradient">&nbsp;</div>
        </Col>
        <Col>
          <div className="text">
            <div className="title">Social Networks</div>
            <div className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
          </div>
          <div style={{ backgroundImage: "url(https://images.unsplash.com/photo-1609349239672-b18c575bd312?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80)" }} className="background">&nbsp;</div>
          <div className="gradient">&nbsp;</div>
        </Col>
        <Col>
          <div className="text">
            <div className="title">Email Providers</div>
            <div className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
          </div>
          <div style={{ backgroundImage: "url(https://images.unsplash.com/photo-1589753345288-f86191e89ad7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=882&q=80)" }} className="background">&nbsp;</div>
          <div className="gradient">&nbsp;</div>
        </Col>
      </Row>
    </BodyContent>
  );
}

const BodyContent = styled.div`
  max-width: 1200px;
  margin: 0px auto;

  .callouts.row {
    margin: 20px;

    .col {
      min-height: 300px;
      margin: 10px;
      position: relative;
      border-radius: 8px;
      overflow: hidden;

      &:hover {
        .gradient {
          top: 0px !important;
          transition: all .3s !important;
        }
      }

      .gradient, .background, .text {
        position: absolute;

        &.text {
          left: 0px;
          bottom: 0px;
          right: 0px;
          top: 0px;
          text-align: center;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1;
          color: #fff;
          flex-direction: column;
          text-shadow: #000 1px 1px 3px;
          margin: 0px 30px;

          .title {
            font-size: 1.5em;
            font-weight: 600;
            margin-bottom: 10px;
          }

          .desc {
            font-size: 1.1em;
          }
        }

        &.background {
          left: 0px;
          bottom: 0px;
          right: 0px;
          top: 0px;
          background-size: cover;
          background-position: bottom center;
          z-index: 0;
        }

        &.gradient {
          left: 0px; 
          right: 0px;
          bottom: 0px;
          top: 50%;
          background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,1));
          z-index: 0;
          transition: all .5s;
        }
      }
    }
  }
`

export default Panels;
