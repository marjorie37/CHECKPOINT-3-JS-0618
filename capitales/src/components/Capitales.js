import React, { Component } from "react";
import {
  Container,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Col,
  CustomInput
} from "reactstrap";

class Capitales extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      lng: "",
      lat: "",
      pop: "",
      img: "",
      disponible: true
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.toggleChange = this.toggleChange.bind(this);
  }

  toggleChange() {
    this.setState({
      disponible: !this.state.disponible
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.add(this.state);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }
  render() {
    return (
      <div>
        <Container>
          <h1>Ajouter une capitale</h1>
          <form>
            <Form>
              <FormGroup row>
                <Label sm={{ size: 1, offset: 1 }} for="title">
                  Titre
                </Label>
                <Col sm={8}>
                  <Input
                    id="title"
                    type="text"
                    name="title"
                    placeholder="Entrez un titre"
                    value={this.state.title}
                    onChange={this.handleChange}
                    autoComplete="off"
                    required
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label sm={{ size: 1, offset: 1 }} for="decription">
                  Description
                </Label>
                <Col sm={8}>
                  <Input
                    id="description"
                    type="textarea"
                    name="description"
                    placeholder="Entrez une description"
                    value={this.state.description}
                    onChange={this.handleChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label sm={{ size: 1, offset: 1 }} for="lng">
                  Longitute
                </Label>
                <Col sm={8}>
                  <Input
                    id="lng"
                    type="number"
                    name="lng"
                    placeholder="Entrez la longitude"
                    value={this.state.lng}
                    onChange={this.handleChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label sm={{ size: 1, offset: 1 }} for="lat">
                  lat
                </Label>
                <Col sm={8}>
                  <Input
                    id="lat"
                    type="number"
                    name="lat"
                    placeholder="Entrez la latitude"
                    value={this.state.lat}
                    onChange={this.handleChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label sm={{ size: 1, offset: 1 }} for="pop">
                  population
                </Label>
                <Col sm={8}>
                  <Input
                    id="pop"
                    type="select"
                    name="pop"
                    placeholder="Entrez le nombre d'habitants"
                    value={this.state.pop}
                    onChange={this.handleChange}
                  >
                    <option>- de 1 million</option>
                    <option>1 à 8 millions</option>
                    <option>8 à 50 millions</option>
                    <option>50 à 80 millions</option>
                    <option>+ de 80 millions</option>
                  </Input>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label sm={{ size: 1, offset: 1 }} for="photoFile">
                  Photo
                </Label>
                <Col sm={8}>
                  <CustomInput
                    id="img"
                    onChange={this.handleChange}
                    value={this.state.photo}
                    type="file"
                    name="img"
                    placeholder="ajouter un photo"
                  />
                </Col>
                <FormText color="muted">Uploadez une photo</FormText>
              </FormGroup>
              <FormGroup check>
                <Label sm={{ size: 1, offset: 1 }} check>
                  Ville visible ?
                  <Col sm={8}>
                    <Input
                      id="disponible"
                      onChange={this.toggleChange}
                      checked={this.state.disponible}
                      type="checkbox"
                    />
                    Oui
                  </Col>
                </Label>
              </FormGroup>
              <FormGroup row>
                <Col sm={5} />
                <Col sm={7}>
                  {this.state.title.length < 3 ? (
                    <Button type="submit" color="secondary" size="lg" disabled>
                      Button
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      color="success"
                      size="lg"
                      onClick={e => this.handleSubmit(e)}
                    >
                      Valider
                    </Button>
                  )}
                </Col>
              </FormGroup>
            </Form>
          </form>
        </Container>
      </div>
    );
  }
}

export default Capitales;
