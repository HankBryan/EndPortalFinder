import { state, useState } from "react";
import "./css/app.scss";
import Result from "./result.js";
import { GooeyButton } from "./GooeyB";

export default function coordinateInput(props) {
  let [sp1, setSp1] = useState({ x: null, y: null });
  let [lp1, setLp1] = useState({ x: null, y: null });
  let [sp2, setSp2] = useState({ x: null, y: null });
  let [lp2, setLp2] = useState({ x: null, y: null });
  let line1;
  let line2;
  let [parallel, setParallel] = useState(false);
  let [submitted, setSubmitted] = useState(false);
  let [intersect, setIntersect] = useState({ x: null, y: null });

  let coords = [sp1, lp1, sp2, lp2];

  let onChangeX = (editState) => (e) => {
    setSubmitted(false);
    editState((prevState) => ({
      ...prevState,
      x: e.target.value
    }));
  };
  let onChangeY = (editState) => (e) => {
    setSubmitted(false);
    editState((prevState) => ({
      ...prevState,
      y: e.target.value
    }));
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    let ready = { status: true, reason: null };
    coords.forEach((item) => {
      if (
        item.x === null ||
        item.y === null ||
        item.x === "" ||
        item.y === ""
      ) {
        ready = { status: false, reason: "blank fields" };
      }
      if (isNaN(item.x) || isNaN(item.y)) {
        ready = { status: false, reason: "invalid entry" };
      }
    });
    if (ready.status === false) {
      if (ready.reason === "blank fields") {
        alert("you must fill in all of the coordinates!");
        setSubmitted(false);
      }
      if (ready.reason === "invalid entry") {
        alert("entries must be numbers");
        setSubmitted(false);
      }
    } else {
      calculate1();
      calculate2();
      findIntersect();
      setSubmitted(true);
    }
  };

  let calculate1 = () => {
    let a = lp1.y - sp1.y;
    let b = sp1.x - lp1.x;
    let c = a * sp1.x + b * sp1.y;
    line1 = { a: a, b: b, c: c };
  };

  let calculate2 = () => {
    let a = lp2.y - sp2.y;
    let b = sp2.x - lp2.x;
    let c = a * sp2.x + b * sp2.y;
    line2 = { a: a, b: b, c: c };
  };

  let findIntersect = () => {
    let a1 = line1.a;
    let b1 = line1.b;
    let c1 = line1.c;

    let a2 = line2.a;
    let b2 = line2.b;
    let c2 = line2.c;

    let det = a1 * b2 - a2 * b1;
    if (det === 0) {
      setParallel(true);
    } else {
      let x = (b2 * c1 - b1 * c2) / det;
      let y = (a1 * c2 - a2 * c1) / det;
      setParallel(false);
      setIntersect({ x: x, y: y });
    }
  };
  return (
    <form>
      <h3>Starting Point 1</h3>
      <label>X</label>
      <input onChange={onChangeX(setSp1)}></input>
      <label>Y</label>
      <input onChange={onChangeY(setSp1)}></input>
      <h3>Landing Point 1</h3>
      <label>X</label>
      <input onChange={onChangeX(setLp1)}></input>
      <label>Y</label>
      <input onChange={onChangeY(setLp1)}></input>
      <h3>Starting Point 2</h3>
      <label>X</label>
      <input onChange={onChangeX(setSp2)}></input>
      <label>Y</label>
      <input onChange={onChangeY(setSp2)}></input>
      <h3>Landing Point 2</h3>
      <label>X</label>
      <input onChange={onChangeX(setLp2)}></input>
      <label>Y</label>
      <input onChange={onChangeY(setLp2)}></input>
      <br></br>

      <GooeyButton handleClick={handleSubmit}></GooeyButton>
      <Result
        submitted={submitted}
        parallel={parallel}
        intersect={intersect}
      ></Result>
    </form>
  );
}
