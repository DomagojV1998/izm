import React, { useState } from 'react';
import { Container, Form, Row, Col, Button, Alert } from 'react-bootstrap';
import axios from 'axios';

function Login() {
  const [formData, setFormData] = useState({
    korisnickoIme: '',
    lozinka: '',
  });

  const [status, setStatus] = useState({ message: '', type: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'https://wp1.edukacija.online/backend/wp-json/jwt-auth/v1/token',
        {
          username: formData.korisnickoIme,
          password: formData.lozinka,
        }
      );

      // Sačuvaj token u localStorage
      localStorage.setItem('token', response.data.token);

      setStatus({ message: 'Uspešno prijavljeni!', type: 'success' });
    } catch (error) {
      setStatus({ message: 'Neispravno korisničko ime ili lozinka.', type: 'danger' });
    }
  };

  return React.createElement(
    'section',
    { className: 'section bg-light' },
    React.createElement(
      Container,
      null,
      React.createElement('h2', { className: 'text-center mb-4' }, 'Prijava'),
      React.createElement(
        Row,
        { className: 'justify-content-center' },
        React.createElement(
          Col,
          { md: 6 },
          status.message &&
            React.createElement(Alert, { variant: status.type }, status.message),
          React.createElement(
            Form,
            { onSubmit: handleSubmit },
            React.createElement(Form.Group, { className: 'mb-3', controlId: 'korisnickoIme' },
              React.createElement(Form.Label, null, 'Korisničko ime'),
              React.createElement(Form.Control, {
                type: 'text',
                name: 'korisnickoIme',
                required: true,
                onChange: handleChange,
              })
            ),
            React.createElement(Form.Group, { className: 'mb-4', controlId: 'lozinka' },
              React.createElement(Form.Label, null, 'Lozinka'),
              React.createElement(Form.Control, {
                type: 'password',
                name: 'lozinka',
                required: true,
                onChange: handleChange,
              })
            ),
            React.createElement(
              'div',
              { className: 'text-center' },
              React.createElement(Button, { variant: 'primary', type: 'submit' }, 'Prijavi se')
            )
          )
        )
      )
    )
  );
}

export default Login;