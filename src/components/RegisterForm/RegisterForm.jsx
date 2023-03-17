import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./RegisterForm.css";
import { useNavigate } from "react-router-dom";
const RegisterForm = () => {
  const initialValues = {
    userName: "",
    email: "",
    password: "",
    picturePath: null,
    friends: [],
    location: "",
    occupation: "",
  };
  const navigate = useNavigate();
  const register = async (values, onSubmitProps) => {
    // this allows us to send form info with image
    const formData = new FormData();
    for (let value in values) {
      formData.append(value, values[value]);
    }

    const savedUserResponse = await fetch(
      "http://localhost:3001/auth/register",
      {
        method: "POST",
        body: formData,
      }
    );
    const savedUser = await savedUserResponse.json();
    onSubmitProps.resetForm();

    if (savedUser) {
      console.log(savedUser);
      navigate("/")
    }
  };

  const validationSchema = Yup.object({
    userName: Yup.string().required("Username is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters long"),
    picturePath: Yup.mixed().required("Profile picture is required"),
  });

  const handleFormSubmit = (values, onSubmitProps) => {
    // handle submit logic here
    console.log(values);
    register(values, onSubmitProps);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleFormSubmit}
    >
      {(formik) => (
        <Form className="form">
          <div className="form-field">
            <label htmlFor="username">Username:</label>
            <Field
              type="text"
              id="userName"
              name="userName"
              className="form-input"
            />
            <ErrorMessage name="userName" />
          </div>

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

          <div className="form-field">
            <label htmlFor="profilePicture">Profile Picture:</label>
            <Field
              type="file"
              id="profilePicture"
              name="picturePath"
              className="form-input"
            />
            <ErrorMessage name="picturePath" />
          </div>

          <button type="submit" disabled={!formik.isValid}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default RegisterForm;
