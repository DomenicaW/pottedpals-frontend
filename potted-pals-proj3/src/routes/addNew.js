import React from "react";

// STYLING
import "../css-sheets/addNewForm.css";

class AddNew extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      type: '',
      caretaking: '',
      description: '',
      img: ''
    }
  }
  
  render() {
  return (
    <main class="AddNewBody">
       <h3>How should this page be linked?</h3>
      <div class="form-box">
        <div class="add-box">
       
          <h2>Add Your Own Plant </h2>

          {/* START OF FORM  */}
          <form action="" method="">
            {/* INPUTS TO FILL IN FOR NEW POST-*/}
            <div class="input-box">
              <input type="text" name="name" />
              <label for="name">Name</label>
            </div>

            <div class="input-box">
              <input type="text" name="type" />
              <label for="type">Type</label>
            </div>

            <div class="input-box">
              <input type="text" name="caretaking" />
              <label for="caretaking">Care Instructions</label>
            </div>

            <div class="input-box">
              <input type="text" name="description" />
              <label for="description">Description</label>
            </div>

            <div class="input-box">
              <input type="text" name="img" required="" />
              <label for="img">Image Link | URL Only</label>
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