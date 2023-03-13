import React from 'react';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
function Newpassword() {
  const histroy = useNavigate();
  const { token } = useParams();
  const { register, handleSubmit } = useForm();
  return (
    <>
      <div className="container py-5 mt-5" style={{ minHeight: '80vh' }}>
        <Form
          onSubmit={handleSubmit((data) => {
            if (data) {
              axios
                .post('http://localhost:250/Update', { data, token })
                .then((res) => {
                  alert(res.data.message);
                  histroy('/Login');
                });
            }
          })}
        >
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

          <button type="submit" className="py-2 bg-red-800 text-white w-full">
            UPDATE PASSWORD
          </button>
        </Form>
      </div>
    </>
  );
}

export default Newpassword;
