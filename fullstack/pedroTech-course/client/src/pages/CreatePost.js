import React, { useContext, useEffect } from 'react'
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik"
import { useHistory } from 'react-router-dom'
import { AuthContext } from "../helpers/AuthContext"
import * as Yup from 'yup'

function CreatePost() {
  const { authState } = useContext(AuthContext)
  let history = useHistory()

  const initialValues = {
    title: "",
    postText: "",
  };

  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      history.push("/login")
    }
  }, [])

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("You must input the title"),
    postText: Yup.string().required(),
  })

  const onSubmit = (data) => {
    axios.post("http://localhost:3001/posts", data,
      {
        headers: { accessToken: localStorage.getItem("accessToken") }
      }
    ).then((response) => {
      history.push('/')
    });
  }

  return (
    <div className="createPostPage">
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
        <Form className="formContainer">
          <label>Title: </label>
          <ErrorMessage name="title" component="span" />
          <Field
            id="inputCreatePost"
            name="title"
            placeholder="(Ex.John...)" />
          <label>Post: </label>
          <ErrorMessage name="postText" component="span" />
          <Field
            id="inputCreatePost"
            name="postText"
            placeholder="(Ex.Post...)" />
          <button type='submit'>Create Post</button>
        </Form>
      </Formik>
    </div>
  )
}

export default CreatePost