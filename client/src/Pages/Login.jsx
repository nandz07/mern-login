import React from 'react';
import { Button, Form, Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { login } from '../features/user';
import { useNavigate } from 'react-router';

function Login() {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const loginUser = (e) => {
    e.preventDefault()
    dispatch(login({name:"nandakumar",id:"123",image:"/123"}))
    navigate('/')
  }
  return (
    <Container className='d-flex  justify-content-center align-items-center' style={{ minHeight: '100vh' }}>
      <Form className='border p-4 bg-success rounded' onSubmit={loginUser}>
        <h2 className='text-white'>Login</h2>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
          />
        </Form.Group>

        <Button variant="primary" type="submit" className='mt-3'>
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default Login;
