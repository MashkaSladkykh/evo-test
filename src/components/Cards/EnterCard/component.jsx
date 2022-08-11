import React from "react";
import { Formik, Form, Field } from "formik";

// Messages
const required = "This field is required";
const incorrectNumber = "Please, input 8 numbers";

// Error Component
const errorMessage = error => {
  return <div className="error">{error}</div>;
};

// Validation
const validateCardNumber = value => {
  let error;
  if (!value) {
    error = required;
  }else if(!/\d{8}/i.test(value)){
    error = incorrectNumber;
  } 
  return error;
};

const EnterCard = ({ value, onChange, onClick}) => (
  <div className="enter-wrap">
     <Formik
      initialValues={{
        cardNumber: "",
      }}
     >
      {({ errors, touched}) => (
        <div>
          <Form>
            <Field
              type="text"
              placeholder="Card number"
              name="cardNumber"
              onChange={onChange}
              value={value}
              validate={validateCardNumber}
            />
            {errors.cardNumber &&
              touched.cardNumber &&
              errorMessage(errors.cardNumber)}
               <button type="submit" onClick={onClick}>
                  Add Card
                </button>
           </Form>
         </div>
      )}
    </Formik>
  </div>
)

export default EnterCard;