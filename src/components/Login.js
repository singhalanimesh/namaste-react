import React from "react";
import { Form, Field, ErrorMessage, Formik } from "formik";
import * as Yup from "yup";

const Login = () => {
  return (
    <div className="bg-[#ffffee]">
      <Formik
        intialValues={{
          email: "",
          password: "",
        }}
        validationSchema={Yup.object({
          email: Yup.string().email("Invalid Email").required("Required"),
          password: Yup.string().min(8).required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
          <label htmlFor="email">Email: </label>
          <Field name="email" type="email" />
          <ErrorMessage name="email" />
          <p></p>
          <label htmlFor="password">Password: </label>
          <Field name="password" type="text" />
          <ErrorMessage name="password" />

          <button type="submit"> Submit </button>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
