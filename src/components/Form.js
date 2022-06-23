import { useState } from "react";
import "./Form.css";
function Form({getData}) {
  
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [alert, setAlert] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    if (isNaN(weight) || isNaN(height)) {
      console.log("Not a Valid Input");
      setAlert(true);
    } else {
      getData(weight,height)
      setAlert(false);
      setHeight("")
      setWeight("")
      // console.log(weight);
      // console.log(height);
    }
  };
  // let alertMessege;
  // if (alert) {
  //   alertMessege = (
  //     <div>
  //       Please Enter a Valid Dates
  //     </div>
  //   );
  // } else {
  //   alertMessege = "";
  // }
  return (
    <div className="form">
      <h2>BMI Calculator</h2>
      <form onSubmit={onSubmit}>
        <div className="flex">
          <label className="label">
            Weight(kg) : <br />
            <input
              className="input-label"
              type="text"
              name="weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              required
            />
          </label>
          <br/>
          <label className="label">
            Height(m) : <br />
            <input
              className="input-label"
              type="text"
              name="height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              required
            />
          </label>
        </div>
        <br />
        <div>
          <input className="btn" type="submit" value="Get BMI" />
          
        </div>
        
        <div className="alert" role="alert">
         {alert?<div>Please Enter a Valid Dates</div>:""}
         {/* {alert&&<div>Please Enter a Valid Dates</div>} */}
       </div>
        
      </form>
      
    </div>
  );
}

export default Form;
