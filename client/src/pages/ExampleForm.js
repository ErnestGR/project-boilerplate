import React, { Component } from "react";
import API from "../utils/API";
import PropTypes from 'prop-types';
import QuestionList from "../components/Questions/QuestionList";

class ExampleForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      company: "",
      city: "",
      position: "",
      phone: "",
      email: "",
      how: ""
    };
  }

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    });
  };

  submitExample = event => {
    event.preventDefault();

    const name = this.state.name.trim();
    const city = this.state.city.trim();
    const company = this.state.company.trim();
    const position = this.state.position.trim();
    const phone = this.state.phone.trim();
    const email = this.state.email.trim();
    const how = this.state.how.trim();

    if (this.areInputsValid(name, city)) {
      API.saveExample({
        name,
        company,
        city,
        position,
        phone,
        email,
        how
      })
        .then(() => {
          this.props.history.push("/");
        })
        .catch(err => {
          console.log(err);
        });
    }
  };

  areInputsValid = (name, city) => {
    if (!name) {
      alert("Please fill out the name");
      return false;
    }

    if (!city) {
      alert("Please fill out the city");
      return false;
    }

    return true;
  };

  render() {
    const name = this.state.name;
    const city = this.state.city;
    const company = this.state.company;
    const position = this.state.position;
    const phone = this.state.phone;
    const email = this.state.email;
    const how = this.state.how;

    return (

      <div class="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div className="card text-white bg-secondary mb-3">
              <div className="card-header">Basic Info</div>
              <div className="card-body">
                <form className="" onSubmit={this.submitExample}>

                  <div className="form-group row">
                    <label
                      htmlFor="name"
                      class="col-sm-2 col-form-label">
                      Name:
          </label>
                    <div class="col-sm-10">
                      <input
                        className="form-control"
                        name="name"
                        type="text"
                        placeholder="name"
                        onChange={this.handleInputChange}
                        value={name} />
                    </div>
                  </div>

                  <div className="form-group row">
                    <label
                      htmlFor="company"
                      class="col-sm-2 col-form-label">
                      Company:
          </label>
                    <div class="col-sm-10">
                      <input
                        className="form-control"
                        name="company"
                        type="text"
                        placeholder="company"
                        onChange={this.handleInputChange}
                        value={company} />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label
                      htmlFor="city"
                      class="col-sm-2 col-form-label">
                      City:
          </label>
                    <div class="col-sm-10">
                      <input
                        className="form-control"
                        name="city"
                        placeholder="city"
                        onChange={this.handleInputChange}
                        value={city} />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label
                      htmlFor="position"
                      class="col-sm-2 col-form-label">
                      Position:
          </label>
                    <div class="col-sm-10">
                      <input
                        className="form-control"
                        name="position"
                        placeholder="position"
                        onChange={this.handleInputChange}
                        value={position} />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label
                      htmlFor="phone"
                      class="col-sm-2 col-form-label">
                      Phone:
          </label>
                    <div class="col-sm-10">
                      <input
                        className="form-control"
                        name="phone"
                        placeholder="phone"
                        onChange={this.handleInputChange}
                        value={phone} />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label
                      htmlFor="email"
                      class="col-sm-2 col-form-label">
                      Email:
          </label>
                    <div class="col-sm-10">
                      <input
                        className="form-control"
                        name="email"
                        placeholder="email"
                        onChange={this.handleInputChange}
                        value={email} />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label
                      htmlFor="how"
                      class="col-sm-2 col-form-label">
                      How did they hear about us:
          </label>
                    <div class="col-sm-10">
                      <input
                        className="form-control"
                        name="how"
                        placeholder="Facebook, phone, email, friend"
                        onChange={this.handleInputChange}
                        value={how} />
                    </div>
                  </div>

                  <button
                    className="btn btn-primary"
                    type="submit">
                    Submit
        </button>

                </form>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}


export default ExampleForm;
