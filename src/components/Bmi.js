import React from "react";

function Bmi() {
  return (
    <div>
      <h1>What is BMI</h1>
      <div>
        Body Mass Index (BMI) is a person’s weight in kilograms divided by the
        square of height in meters. A high BMI can indicate high body fatness.
        BMI screens for weight categories that may lead to health problems, but
        it does not diagnose the body fatness or health of an individual.
      </div>

      <h1>How do you calculate BMI?</h1>
      <div>
        Body Mass Index is a simple calculation using a person's height and
        weight. The formula is BMI = kg/m2 where kg is a person's weight in
        kilograms and m2 is their height in metres squared. A BMI of 25.0 or
        more is overweight, while the healthy range is 18.5 to 24.9. BMI applies
        to most adults 18-65 years.
      </div>

      <h1>What is a healthy BMI by age?</h1>
      <div>
        For adults, the healthy BMI range is from 18.5 to 24.9, regardless of
        age or gender, and anything over this means you are considered
        overweight for your height. The average BMI for women age 20 and older
        is 28.7.
      </div>
    </div>
  );
}

export default Bmi;
