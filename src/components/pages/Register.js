import React from 'react';
import Form from 'react-bootstrap/Form';
import Footer from '../Footer';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Header from '../Header';
function Register() {
  const histroy = useNavigate();
  const { register, handleSubmit } = useForm();

  return (
    <>
    <Header/>
      <div className="container py-5 mt-5" style={{ minHeight: '80vh' }}>
        <h4 className="text-red-800 text-center uppercase">Register Here</h4>
        <Form
          onSubmit={handleSubmit((data) => {
            if (data) {
              axios.post('http://localhost:250/Register', data).then((res) => {
                alert(res.data.message);
                histroy('/Login');
              });
            }
          })}
        >
          <Form.Group className="mb-3">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter a First name...."
              {...register('Fname', { required: 'This is required' })}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter a Last name...."
              {...register('Lname', { required: true })}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              {...register('email', { required: true })}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              {...register('password', { required: true })}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder=" Confirm Password"
              {...register('Cpassword', { required: true })}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label="Check me out"
              {...register('checkbox', { required: true })}
            />
          </Form.Group>
          <button type="submit" className="py-2 bg-red-800 text-white w-full">
            Register
          </button>
        </Form>
      </div>
      <Footer />
    </>
  );
}

export default Register;
