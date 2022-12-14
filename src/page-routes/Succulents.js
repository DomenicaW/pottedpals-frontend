import React, { Component } from "react";
import { Link, Outlet } from "react-router-dom";

// STYLING
import "../css-sheets/plantCard.css";

// COMPONENTS
import PlantCard from "../components/PlantCard.js";

// CLASS BASED COMPONENT
class Succulents extends Component {
  render() {
    // console.log ("PlantList at Succ", plantList)
    return (
      <>
        <h2 style={{ margintop: "1px" }}>SUCCULENTS</h2>
        <main>
          <div className="PlantList">
            <Link to="/succulent/1">Succlent 1</Link>
            <br />
            <Link to="/succulent/2">Succlent 2</Link>
            <br />
            <Link to="/succulent/3">
              <PlantCard
                image="Echeveria-elegans.jpeg"
                type="SUCCULENT"
                name="Echveria elgans"
                description="A popular succulent with variable species that forms compact rosettes of spoon-shaped pale bluish-greenish leaves. have only minor differences in the size a"
              />
            </Link>
            {/* <h1>Succulents</h1> */}
            <PlantCard
              image="Echeveria-elegans.jpeg"
              type="SUCCULENT"
              name="Echveria elgans"
              description="A popular succulent with variable species that forms compact rosettes of spoon-shaped pale bluish-greenish leaves. have only minor differences in the size a"
            />

            <PlantCard
              image="Blue-Euphorbia1.jpeg"
              type="SUCCULENT"
              name="Blue Euphorbia"
              description="A succulent shrub with numerous erect stems and edges covered with paired stiff spines and tiny, short-lived leaves. It grows up to 5 feet (1.5 m) and spreads by rhizomes."
            />

            <PlantCard
              image="prickly-pear.jpeg"
              type="SUCCULENT"
              name="Prickly Pear"
              description="A cactus that grows up to 6.6 feet tall as erect or spreading shrub with fleshy, dull green to grey-green stem segments. The edible fruits are purplish-red, egg-shaped."
            />

            <PlantCard
              image="Organ_pipe.jpeg"
              type="SUCCULENT"
              name="Organ Pipe Cactus"
              description="A cactus with several narrow stems that rise vertically, growing from a short trunk just above ground level. They rarely branch out but rather grow from the tip of the last growth."
            />
          </div>
        </main>
        <Outlet />
      </>
    );
  }
}

export default Succulents;
