import React, { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Landing from '../../Website/UserHome/Components/Landing/LearnLanding';
import '../../../App.css';
export default function User() {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [disable, setDisable] = useState(true);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://digitopia-project-backend.vercel.app/api/currentUser/${id}`)
      .then((response) => {
        setName(response.data.data.name);
        setEmail(response.data.data.email);
        setRole(response.data.data.role);
        setLoading(false);
        setDisable(false);
      })
      .catch(() => {
        setLoading(false);
        navigate('/dashboard/users/page/404', { replace: true });
      });
  }, [id, navigate]);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.put(
        `https://digitopia-project-backend.vercel.app/api/user/edit/${id}`,
        {
          name: name,
          email: email,
          role: role,
        }
      );
      navigate('/dashboard/users');
    } catch (error) {
      setLoading(false);
      console.error('Error submitting form:', error);
    }
  }

  return (
    <div className='container my-5'>
      {loading && <Landing />}
      <Form
        className='p-4 border rounded shadow-sm'
        onSubmit={handleSubmit}
        style={{ backgroundColor: 'var(--primary-bg)' }}>
        <h2 className='mb-4' style={{ color: 'var(--primary-text)' }}>
          Edit User
        </h2>

        <Form.Group className='mb-3'>
          <Form.Label
            style={{ fontWeight: 'bold', color: 'var(--secondary-text)' }}>
            User Name
          </Form.Label>
          <Form.Control
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
            type='text'
            placeholder='Name...'
            style={{
              border: '1px solid var(--border-color)',
              fontFamily: 'Montserrat, sans-serif',
              backgroundColor: 'var(--secondary-bg)',
              color: 'var(--primary-text)',
            }}
          />
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label
            style={{ fontWeight: 'bold', color: 'var(--secondary-text)' }}>
            Email
          </Form.Label>
          <Form.Control
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            type='email'
            placeholder='name@example.com'
            style={{
              border: '1px solid var(--border-color)',
              fontFamily: 'Montserrat, sans-serif',
              backgroundColor: 'var(--secondary-bg)',
              color: 'var(--primary-text)',
            }}
          />
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label
            style={{ fontWeight: 'bold', color: 'var(--secondary-text)' }}>
            Role
          </Form.Label>
          <Form.Select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            style={{
              border: '1px solid var(--border-color)',
              fontFamily: 'Montserrat, sans-serif',
              backgroundColor: 'var(--secondary-bg)',
              color: 'var(--primary-text)',
            }}>
            <option disabled value=''>
              Select Role
            </option>
            <option value='admin'>Admin</option>
            <option value='writer'>Writer</option>
          </Form.Select>
        </Form.Group>

        <Button
          disabled={disable}
          type='submit'
          className='btn'
          style={{
            backgroundColor: 'var(--main-color)',
            borderColor: 'var(--main-color)',
            color: 'var(--primary-text)',
            fontFamily: 'Montserrat, sans-serif',
            transition: 'var(--transition-speed)',
          }}>
          Save
        </Button>
      </Form>
    </div>
  );
}
