import React, { Component } from "react";

// STYLING
import "../css-sheets/addNewForm.css";

// CLASS BASED COMPONENT
class AddNew extends Component {
  render () {
    return (
      <main className="AddNewBody">
         <h3>How should this page be linked?</h3>
        <div className="form-box">
          <div className="add-box">
         
            <h2>Add Your Own Plant </h2>
  
            {/* START OF FORM  */}
            <form action="" method="">
              {/* INPUTS TO FILL IN FOR NEW POST-*/}
              <div className="input-box">
                <input type="text" name="name" />
                <label htmlFor="name">Name</label>
              </div>
  
              <div className="input-box">
                <input type="text" name="type" />
                <label htmlFor="type">Type</label>
              </div>
  
              <div className="input-box">
                <input type="text" name="caretaking" />
                <label htmlFor="caretaking">Care Instructions</label>
              </div>
  
              <div className="input-box">
                <input type="text" name="description" />
                <label htmlFor="description">Description</label>
              </div>
  
              <div className="input-box">
                <input type="text" name="img" required="" />
                <label htmlFor="img">Image Link | URL Only</label>
              </div>
  
              <input type="submit" value="Submit" />
            </form>
            {/* END OF FORM  */}
          </div>
        </div>
      </main>
    );


  }
 
}

export default AddNew;