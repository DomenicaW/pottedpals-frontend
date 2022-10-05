import { useParams } from "react-router-dom";

function SucculentShow() {
  const { id } = useParams();
 
  return (
    <>
      <h3>Succulent Show Page {id} </h3>
      {/* <h2 name={props.name}></h2> */}
    </>
  );
}

export default SucculentShow;
