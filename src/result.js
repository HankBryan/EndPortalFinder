import "./css/app.scss";

export default function result(props) {
  return (
    <div>
      {props.submitted && <h4>Result</h4>}
      {props.submitted ? (
        props.parallel ? (
          <p className="results">
            The lines are parallel. Make sure you are not throwing the eye from
            the same place twice.
          </p>
        ) : (
          <div>
            <p className="results"> X: {props.intersect.x} </p>
            <p className="results"> Y: {props.intersect.y} </p>
          </div>
        )
      ) : (
        <p className="results">
          Enter the coordinates and then click Calculate to find the portal in
          your world.
        </p>
      )}
    </div>
  );
}
