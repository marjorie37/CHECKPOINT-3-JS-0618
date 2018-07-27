import React, { Component } from "react";
import Capitales from "./Capitales";
import datas from "./datas.json";
import {
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Container,
  Row,
  Input
} from "reactstrap";
import ButtonRemove from "./ButtonRemove";

class CapitalesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: datas
    };
    this.handleData = this.handleData.bind(this);
    this.removeCity = this.removeCity.bind(this);
  }

  handleData(datas) {
    let cities = this.state.cities.concat(datas);
    this.setState({
      cities
    });

    //autre version :
    //const tab = [...this.state.datas, ...[state.titre]]
  }

  removeCity(city) {
    let cities = [...this.state.cities].filter(elt => elt.id !== city);
    this.setState({
      cities
    });
  }
  render() {
    return (
      <div>
        <Container>
          <h1 className="text-align">Les capitales</h1>
          <Row>
            <Col sm="12">
              <Label />
              <Input type="text" />
            </Col>
          </Row>
          <Row>
            {/* "{console.log(data)}" pour pouvoir faire des consoles log dans le render */}
            {this.state.cities.map(data => (
              <Col sm="3">
                <Card>
                  <CardBody>
                    <CardTitle>{data.title}</CardTitle>
                    <CardSubtitle>
                      population : {data.pop} habitants
                    </CardSubtitle>
                  </CardBody>
                  <CardImg width="100%" height="100px" src={data.img} alt="" />
                  <CardBody>
                    <CardText className="text-center">
                      {data.description}
                    </CardText>
                    <CardText className="text-center">
                      Latitude : {data.lat}
                    </CardText>
                    <CardText className="text-center">
                      Longitude : {data.lng}
                    </CardText>
                    <CardText className="text-center">
                      Longitude : {data.lng}
                    </CardText>
                    {data.disponible === true ? (
                      <CardText className="text-center">
                        Disponible : oui
                      </CardText>
                    ) : (
                      <CardText className="text-center">
                        Disponible : non
                      </CardText>
                    )}
                    <ButtonRemove removeCity={this.removeCity} id={data.id} />
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>
          <Capitales add={this.handleData} />
        </Container>
      </div>
    );
  }
}
export default CapitalesList;
