import React, { Component } from "react";

// STYLING SHEETS
import "../css-sheets/App.css";
import "../css-sheets/plantCard.css";

// import App from "./App.js"

// CLASS BASED COMPONENT
class PlantCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // handleDelete = (id) => {
	// 	fetch(baseURL + id, {
	// 		method: 'DELETE',
	// 		credentials: "include"
	// 	}).then( res => {
	// 		const copyPlants = [...this.state.plants];
	// 		const findIndex = this.state.plants.findIndex(
	// 				(plant) => plant._id === id
	// 			);
	// 		 copyPlants.splice(findIndex, 1);
	// 		 this.setState({ plants: copyPlants });
	// 	})
	// }

  render() {
    // console.log("data", this.state);
    return (
      <div className="Card">
        <div className="ImgBox">
          <img src={this.props.img} alt="Plant card" />
        </div>

        <button>✕</button>

        <h5 className="PlantType"> {this.props.type} </h5>
        <h3 className="PlantName"> {this.props.name} </h3>
        <h5 className="PlantDescription"> {this.props.description}</h5>

        {/* <button onClick={() => this.handleDelete(plant._id)} >Delete</button> */}

      </div>

    );
  }
}

export default PlantCard;