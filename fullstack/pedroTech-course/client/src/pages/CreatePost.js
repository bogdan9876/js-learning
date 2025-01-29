import React from 'react'
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik"
import { useHistory } from 'react-router-dom'
import * as Yup from 'yup'

function CreatePost() {

  let history = useHistory()

  const initialValues = {
    title: "",
    postText: "",
    username: "",
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("You must input the title"),
    postText: Yup.string().required(),
    username: Yup.string().min(3).max(15).required()
  })

  const onSubmit = (data) => {
    axios.post("http://localhost:3001/posts", data).then((response) => {
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
          <label>Username: </label>
          <ErrorMessage name="username" component="span" />
          <Field
            id="inputCreatePost"
            name="username"
            placeholder="(Ex.John111...)" />
          <button type='submit'>Create Post</button>
        </Form>
      </Formik>
    </div>
  )
}

export default CreatePost