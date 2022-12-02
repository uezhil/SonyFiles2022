import React from "react";
import PropTypes from "prop-types";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    // this.Submitted = this.Submitted.bind(this);
    // this.Changed = this.Changed.bind(this);
  }
  //Controlled Form 
  //HTML form data is wired with REact state
  //Onchange handler, Bind the event handler/function to the context/class
  //bind or class binding syntax = func=()=>{}

  Submitted = (event) => {
    console.log("Here's the first name" + this.state.value);
    event.preventDefault();
  };

  Changed = (event) => {
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <form onSubmit={this.Submitted}>
        <br />
        <br />
        First Name:
        <input
          type="text"
          value={this.state.value}
          onChange={this.Changed}
        ></input>
        <br /> <br />
        <input type="submit" value="Save" />
      </form>
      // <div>
      //   <h2>Get in touch {this.props.cid} </h2>
      //   <h2>Contact us for any queries</h2>
      //   <h3>Call @12346</h3>
      //   <h3>Mail us at reach@movies.com</h3>
      // </div>
    );
  }
}

Contact.defaultProps = {
  cid: 13243,
};

Contact.propTypes = {
  cid: PropTypes.number.isRequired,
};

export default Contact;
