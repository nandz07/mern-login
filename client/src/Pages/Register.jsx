import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'

function Register() {
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    file: null, // Initialize the file as null
  });

  const registerUser = (e) => {
    e.preventDefault();
    // You can access the data object here and send it to your backend for registration
  }

  return (
    <div>
      <Container className='d-flex justify-content-center align-items-center' style={{ minHeight: '100vh' }}>
        <Form className='border p-4 bg-success rounded' onSubmit={registerUser}>
          <h2 className='text-white'>Register</h2>

          <Form.Group controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Name"
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
            />
          </Form.Group>

          <Form.Group controlId="formBasicImage">
            <Form.Label>Image</Form.Label>
            <Form.Control
              type="file"
              placeholder="Image"
              onChange={(e) => setData({ ...data, file: e.target.files[0] })}
            />
          </Form.Group>

          <Button variant="primary" type="submit" className='mt-3'>
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  )
}

export default Register;
