import React from "react";

// STYLING
import "../css-sheets/addNewForm.css";

function AddNew() {
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
              <input type="text" name="water frequency" />
              <label for="water frequency">Care Instructions</label>
            </div>

            <div class="input-box">
              <input type="text" name="sunlight" />
              <label for="sunlight">Description</label>
            </div>

            <div class="input-box">
              <input type="text" name="img" required="" />
              <label for="image">Image Link | URL Only</label>
            </div>

            <input type="submit" value="Submit" />
          </form>
          {/* END OF FORM  */}
        </div>
      </div>
    </main>
  );
}

export default AddNew;