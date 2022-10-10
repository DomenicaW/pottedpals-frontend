import React, { Component } from "react";

// STYLING
import "../css-sheets/addNewForm.css";

// CLASS BASED COMPONENT
class AddNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      type: "",
      caretaking: "",
      description: "",
      img: "",
    };
  }

  handleChange = event => {
    const target = event.target;

    this.setState({ 
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    fetch(`${process.env.REACT_APP_BACKEND_URL}`, {
      method: "POST",
      body: JSON.stringify({
        name: this.state.name,
        type: this.state.type,
        caretaking: this.state.caretaking,
        description: this.state.description,
        img: this.state.img,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(res => res.json())
    
      .then(resJson => {
        this.props.handleAddPlant(resJson);
        this.setState({
          name: "",
          type: "",
          caretaking: "",
          description: "",
          img: "",
        });
      })
      .catch(error => console.error({ Error: error }));
  };

  render() {
    return (
      <main className="AddNewBody">
        <div className="form-box">
          <div className="add-box">
            <h2>Add Your Own Plant </h2>

            {/* START OF FORM  */}
            <form onSubmit={this.handleSubmit}>
              {/* INPUTS TO FILL IN FOR NEW POST-*/}
              <div className="input-box">
                <input
                  type="text"
                  name="name"
                  onChange={this.handleChange}
                  value={this.state.name}
                  placeholder="Add Plant Name"
                />
                <label htmlFor="name">Name</label>
              </div>

              <div className="input-box">
                <input type="text" name="type" onChange={this.handleChange} value={this.state.type} placeholder="Is your plant a succulent, house plant, flower or herb" />
                <label htmlFor="type">Type</label>
              </div>

              <div className="input-box">
                <input type="text" name="caretaking" onChange={this.handleChange} value={this.state.caretaking} placeholder="Add care-taking instructions" />
                <label htmlFor="caretaking">Care Instructions</label>
              </div>

              <div className="input-box">
                <input type="text" name="description" onChange={this.handleChange} value={this.state.description} placeholder="Plant description" />
                <label htmlFor="description">Description</label>
              </div>

              <div className="input-box">
                <input type="text" name="img" required="" onChange={this.handleChange} value={this.state.img} placeholder="Add image link" />
                <label htmlFor="img">Image Link | URL Only</label>
              </div>

              <input type="submit" value="Add Plant" />
            </form>
            {/* END OF FORM  */}
          </div>
        </div>
      </main>
    );
  }
}

export default AddNew;
