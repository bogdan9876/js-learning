import React from 'react'
import {Formik, Form, Field, ErrorMessage} from "formik"

function CreatePost() {
  return (
    <div className="createPostPage">
        <Formik>
            <Form className="formContainer">
                <label>Title: </label>
                <Field id="inputCreatePost" name="title" placeholder="(Ex.John...)" />
                <label>Post: </label>
                <Field id="inputCreatePost" name="postText" placeholder="(Ex.Post...)" />
                <label>Username: </label>
                <Field id="inputCreatePost" name="username" placeholder="(Ex.John111...)" />
                <button type='submit'>Create Post</button>
            </Form>
        </Formik>
    </div>
  )
}

export default CreatePost