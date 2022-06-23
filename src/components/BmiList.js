import "./BmiList.css";
function BmiList({ range, bmi }) {
  console.log(range);
  return (
    <div>
      <table>
        <tr>
          <th>Type</th>
          <th>BMI</th>
          <th>WEIGHT</th>
        </tr>
        <tr className={bmi < 18.5 ? "border border-danger border-3 " : ""}>
          <td>Underweight</td>
          <td> &lt; 18.5 </td>
          <td> &lt; {range.underWeight.low} kg</td>
        </tr>
        <tr
          className={
            18.5 < bmi && bmi < 24.9 ? "border border-danger border-3" : ""
          }
        >
          <td>Normal</td>
          <td>18.5-24.9</td>
          <td>{range.normal.low + " kg -" + range.normal.high + " kg"}</td>
        </tr>
        <tr
          className={
            24.9 < bmi && bmi < 29.9 ? "border border-danger border-3" : ""
          }
        >
          <td>Over Weight</td>
          <td>25-29.9 </td>
          <td>
            {range.overWeight.low + " kg -" + range.overWeight.high + " kg"}
          </td>
        </tr>
        <tr
          className={
            29.9 < bmi && bmi < 34.9 ? "border border-danger border-3" : ""
          }
        >
          <td>Obesity Class I</td>
          <td>30-34.9</td>
          <td>
            {range.obesityOne.low + " kg -" + range.obesityOne.high + " kg"}
          </td>
        </tr>
        <tr
          className={
            34.9 < bmi && bmi < 39.9 ? "border border-danger border-3" : ""
          }
        >
          <td>Obesity Class II</td>
          <td>35-39.9</td>
          <td>
            {range.obesityTwo.low + " kg -" + range.obesityTwo.high + " kg"}
          </td>
        </tr>
        <tr className={bmi > 39.9 ? "border border-danger border-3" : ""}>
          <td>Obesity Class III</td>
          <td> &gt; 40 </td>
          <td>&gt; {range.obesityThree.high + " kg"}</td>
        </tr>
      </table>
    </div>
  );
}

export default BmiList;

// function BmiList({ range, bmi }) {

//   return (
//     <div className="list text-center shadow-sm rounded">
//       <ul className="list-group ">
//         <li className= ">
//           <div className="row">
//             <div className="col-4 fw-bold">Type</div>
//             <div className="col-4 fw-bold">BMI</div>
//             <div className="col-4 fw-bold">WEIGHT</div>
//           </div>
//         </li>
//         <li
//           className={
//             bmi < 18.5
//               ? "border border-danger border-3"
//               : "
//           }
//         >
//           <div className="row">
//             <div className="col-4 ">Underweight</div>
//             <div className="col-4 ">&lt; 18.5</div>
//             <div className="col-4 ">&lt; {range.underWeight.low} kg</div>
//           </div>
//         </li>
//         <li
//           className={
//             18.5 < bmi && bmi < 24.9
//               ? "border border-danger border-3"
//               : "
//           }
//         >
//           <div className="row">
//             <div className="col-4 ">Normal</div>
//             <div className="col-4 ">18.5-24.9</div>
//             <div className="col-4 ">
//               {range.normal.low + " kg -" + range.normal.high + " kg"}{" "}
//             </div>
//           </div>
//         </li>
//         <li
//           className={
//             24.9 < bmi && bmi < 29.9
//               ? "border border-danger border-3"
//               : "
//           }
//         >
//           <div className="row">
//             <div className="col-4 ">Over Weight</div>
//             <div className="col-4 ">25-29.9</div>
//             <div className="col-4 ">
//               {range.overWeight.low + " kg -" + range.overWeight.high + " kg"}
//             </div>
//           </div>
//         </li>
//         <li
//           className={
//             29.9 < bmi && bmi < 34.9
//               ? "border border-danger border-3"
//               : "
//           }
//         >
//           <div className="row">
//             <div className="col-4 ">Obesity Class I</div>
//             <div className="col-4 ">30-34.9</div>
//             <div className="col-4 ">
//               {range.obesityOne.low + " kg -" + range.obesityOne.high + " kg"}
//             </div>
//           </div>
//         </li>
//         <li
//           className={
//             34.9 < bmi && bmi < 39.9
//               ? "border border-danger border-3"
//               : "
//           }
//         >
//           <div className="row">
//             <div className="col-4 ">Obesity Class II</div>
//             <div className="col-4 ">35-39.9</div>
//             <div className="col-4 ">
//               {range.obesityTwo.low + " kg -" + range.obesityTwo.high + " kg"}
//             </div>
//           </div>
//         </li>
//         <li
//           className={
//             bmi > 39.9
//               ? "border border-danger border-3"
//               : "
//           }
//         >
//           <div className="row">
//             <div className="col-4 ">Obesity Class III</div>
//             <div className="col-4 ">&gt; 40</div>
//             <div className="col-4 ">&gt; {range.obesityThree.high + " kg"}</div>
//           </div>
//         </li>
//       </ul>
//     </div>
//   );
// }

// export default BmiList;
