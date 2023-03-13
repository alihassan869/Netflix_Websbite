import React from 'react';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';
import axios from 'axios';
function Forget() {
  const { register, handleSubmit } = useForm();
  return (
    <>
      <div className="container py-5 mt-5" style={{ minHeight: '80vh' }}>
        <Form
          onSubmit={handleSubmit((data) => {
            if (data) {
              axios.post('http://localhost:250/Forget', data).then((res) => {
                alert(res.data.message);
              });
            }
          })}
        >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              {...register('email', { required: true })}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <button type="submit" className="py-2 bg-red-800 text-white w-full">
            Submit
          </button>
        </Form>
      </div>
    </>
  );
}

export default Forget;
