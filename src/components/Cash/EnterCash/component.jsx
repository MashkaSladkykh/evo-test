import React from "react";
import { Formik, Form, Field } from "formik";

const required = "This field is required";

const errorMessage = error => {
  return <div className="error">{error}</div>;
};

const validateCashAmount = value => {
    let error;
    if (!value) {
      error = required;
    }
    return error;
}

const EnterCash = ({ value, onChange, onClick}) => (
  <div className="enter-wrap">
     <Formik
        initialValues={{
        cashAmount: "",
        cashCurrency:"",
      }}
     >
      {({ errors, touched}) => (
        <div>
          <Form>
            <Field
              type="text"
              placeholder="Cash amount"
              name="cashAmount"
              onChange={onChange}
              value={value}
              validate={validateCashAmount}
            />
                {errors.cashAmount &&
                touched.cashAmount &&
                errorMessage(errors.cashAmount)}
            <Field name="cashCurrency" component="select">
                <option value="UAH">UAH</option>
                <option value="EUR">EUR</option>
                <option value="USD">USD</option>
            </Field>
            <button type="submit" onClick={onClick}>
                Add Cash
            </button>
           </Form>
         </div>
      )}
    </Formik>
  </div>
)

export default EnterCash;