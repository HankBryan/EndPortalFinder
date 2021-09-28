import "./css/app.scss";
import { state, useState } from "react";
import CoordinateInput from "./coordinateInput.js";

export default function App() {
  let [coordinate1, setCoordinate1] = useState();

  let onChangeC1 = (e) => setCoordinate1(e.target.value);
  return (
    <div>
      <h1>End Portal Finder</h1>
      <h2>How To Find the End Portal in Minecraft</h2>
      <p className="container">
        <p className="main">
          You will need at least two Eyes of Ender. These can be obtained by
          killing Endermen. <br></br>
          <br></br>
          1. Stand anywhere, record your location, and then throw the Eye of
          Ender. <br></br>
          2. Record the coordinates of the of the place where the eye landed. 3.
          Repeat this process for Starting Point 2 and Landing Point 2.{" "}
          <br></br>
          <br></br>
          These coordinates will form two lines that can be used to triangulate
          the location of the portal. The result may not be exact. Slight errors
          in the coordinates you punch in will make the results less accurate
          the further away the portal is, but you can use the location generated
          here to give an approximate location of the portal!
        </p>
      </p>
      <CoordinateInput></CoordinateInput>
    </div>
  );
}
