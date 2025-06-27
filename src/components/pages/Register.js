import React, { useState } from 'react';
import { Container, Form, Row, Col, Button, Alert } from 'react-bootstrap';
import axios from 'axios';

function Register() {
  const [formData, setFormData] = useState({
    ime: '',
    prezime: '',
    email: '',
    datumRodjenja: '',
    korisnickoIme: '',
    lozinka: '',
    avatar: null,
  });

  const [status, setStatus] = useState({ message: '', type: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, avatar: e.target.files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append('ime', formData.ime);
    data.append('prezime', formData.prezime);
    data.append('email', formData.email);
    data.append('datumRodjenja', formData.datumRodjenja);
    data.append('korisnickoIme', formData.korisnickoIme);
    data.append('lozinka', formData.lozinka);
    if (formData.avatar) {
      data.append('avatar', formData.avatar);
    }

    try {
      await axios.post('https://wp1.edukacija.online/backend', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setStatus({ message: 'Registracija uspešna!', type: 'success' });
    } catch (error) {
      setStatus({ message: 'Greška prilikom registracije.', type: 'danger' });
    }
  };

  return React.createElement(
    'section',
    { className: 'section bg-light' },
    React.createElement(
      Container,
      null,
      React.createElement('h2', { className: 'text-center mb-4' }, 'Registracija'),
      React.createElement(
        Row,
        { className: 'justify-content-center' },
        React.createElement(
          Col,
          { md: 8 },
          status.message &&
            React.createElement(Alert, { variant: status.type }, status.message),
          React.createElement(
            Form,
            { onSubmit: handleSubmit },
            React.createElement(
              Row,
              { className: 'mb-3' },
              React.createElement(
                Col,
                { md: 6 },
                React.createElement(Form.Group, { controlId: 'ime' },
                  React.createElement(Form.Label, null, 'Ime'),
                  React.createElement(Form.Control, {
                    type: 'text',
                    name: 'ime',
                    required: true,
                    onChange: handleChange,
                  })
                )
              ),
              React.createElement(
                Col,
                { md: 6 },
                React.createElement(Form.Group, { controlId: 'prezime' },
                  React.createElement(Form.Label, null, 'Prezime'),
                  React.createElement(Form.Control, {
                    type: 'text',
                    name: 'prezime',
                    required: true,
                    onChange: handleChange,
                  })
                )
              )
            ),
            React.createElement(
              Row,
              { className: 'mb-3' },
              React.createElement(
                Col,
                { md: 6 },
                React.createElement(Form.Group, { controlId: 'email' },
                  React.createElement(Form.Label, null, 'Email'),
                  React.createElement(Form.Control, {
                    type: 'email',
                    name: 'email',
                    required: true,
                    onChange: handleChange,
                  })
                )
              ),
              React.createElement(
                Col,
                { md: 6 },
                React.createElement(Form.Group, { controlId: 'datumRodjenja' },
                  React.createElement(Form.Label, null, 'Datum rođenja'),
                  React.createElement(Form.Control, {
                    type: 'date',
                    name: 'datumRodjenja',
                    required: true,
                    onChange: handleChange,
                  })
                )
              )
            ),
            React.createElement(
              Row,
              { className: 'mb-3' },
              React.createElement(
                Col,
                { md: 6 },
                React.createElement(Form.Group, { controlId: 'korisnickoIme' },
                  React.createElement(Form.Label, null, 'Korisničko ime'),
                  React.createElement(Form.Control, {
                    type: 'text',
                    name: 'korisnickoIme',
                    required: true,
                    onChange: handleChange,
                  })
                )
              ),
              React.createElement(
                Col,
                { md: 6 },
                React.createElement(Form.Group, { controlId: 'lozinka' },
                  React.createElement(Form.Label, null, 'Lozinka'),
                  React.createElement(Form.Control, {
                    type: 'password',
                    name: 'lozinka',
                    required: true,
                    onChange: handleChange,
                  })
                )
              )
            ),
            React.createElement(
              Form.Group,
              { controlId: 'avatar', className: 'mb-4' },
              React.createElement(Form.Label, null, 'Avatar (slika)'),
              React.createElement(Form.Control, {
                type: 'file',
                name: 'avatar',
                accept: 'image/*',
                onChange: handleFileChange,
              })
            ),
            React.createElement(
              'div',
              { className: 'text-center' },
              React.createElement(Button, { variant: 'primary', type: 'submit' }, 'Registriraj se')
            )
          )
        )
      )
    )
  );
}

export default Register;