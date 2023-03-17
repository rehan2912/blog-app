import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./LoginForm.css";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/reducers/userLogin";
import { useNavigate } from "react-router-dom";
const LoginForm = () => {
  const navigate = useNavigate();
  
  const dispatch = useDispatch();
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const onSubmit = async (values) => {
    try {
      const user = await dispatch(login(values.email, values.password));
      if (user.user === null) {
        alert("error");
      } else {
        alert("successful");
        navigate('/home')
      }
    } catch (error) {
      console.error(error);
      alert("error");
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form className="form">
          <div className="form-field">
            <label htmlFor="email">Email:</label>
            <Field
              type="email"
              id="email"
              name="email"
              className="form-input"
            />
            <ErrorMessage name="email" />
          </div>

          <div className="form-field">
            <label htmlFor="password">Password:</label>
            <Field
              type="password"
              id="password"
              name="password"
              className="form-input"
            />
            <ErrorMessage name="password" />
          </div>

          <button type="submit" disabled={!formik.isValid}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
