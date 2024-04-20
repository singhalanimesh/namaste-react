import React from "react";
import { Form, Field, ErrorMessage, Formik } from "formik";
import * as Yup from "yup";

const Login = () => {
  return (
    <div className="bg-[#ffffee] px-64 pt-10 h-screen">
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
          <label htmlFor="email" className="p-2 m-2 text-lg">Email: </label>
          <Field name="email" type="email"/>
          <ErrorMessage name="email" />
          <p className="p-2 m-2"></p>
          <label htmlFor="password" className="p-2 m-2 text-lg">Password: </label>
          <Field name="password" type="text" />
          <ErrorMessage name="password" />

          <button type="submit" className="px-2 m-2 rounded-lg bg-slate-200"> Submit </button>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
