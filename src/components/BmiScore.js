import "./BmiScore.css";
function BmiScore({ bmiNo, bmiName, changeWeight }) {
  console.log(changeWeight);
  return (
    <div className="score">
      <div className="title">
        <h3>Your BMI Score</h3>
      </div>
      <div className="result">{bmiNo}</div>
      <div className="messege">{bmiName}</div>
      {/* <div className='text'>"You need lose <b>7.05 kg"</b></div> */}
      {changeWeight.type === "positive" && (
        <div className="fs-4">
          "You need lose{" "}
          <span className="fw-bold">{changeWeight.wight} kg"</span>{" "}
        </div>
      )}
      {changeWeight.type === "negative" && (
        <div className="fs-4">
          "You need gain{" "}
          <span className="fw-bold">{changeWeight.wight} kg"</span>{" "}
        </div>
      )}
      {changeWeight.type === "normal" && (
        <div className="fs-4">"You weight is Normal,Good for you" </div>
      )}
    </div>
  );
}

export default BmiScore;
