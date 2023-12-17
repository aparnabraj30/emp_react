// EmployeeForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const FormContainer = styled.div`
  max-width: 400px;
  margin: 55px auto;
  padding: 30px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  font-family: 'Times New Roman', Times, serif;
  font-size: 18px;
  
`
const Heading = styled.h2`
  letter-spacing: 1.5px; 
  color: #03045e;
  text-align: center; /* Center the heading horizontally */
`;
const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 3px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  height: 40px;
  box-sizing: border-box;
`;

const Button = styled.button`
  background-color: #03045e;
  width: 150px;
  height: 40px;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: auto; /* Center the button horizontally */
  display: block;
  font-family: 'Times New Roman', Times, serif;
  font-size: 18px;
  text-align:center;
`;

const EmployeeForm = () => {
    const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    designation: '',
    location: '',
    salary: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.values(formData).some((value) => !value.trim())) {
        alert(`Fields can't be empty`);
        return; // Do not submit the form if any field is empty
      }
    // Handle form submission, you can send data to a server or perform other actions
    alert('Form submitted!');
    navigate('/')
  };

  return (
    
    <FormContainer>
      <Heading>Employee Form</Heading>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Name:</Label>
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label>Designation:</Label>
          <Input
            type="text"
            name="designation"
            value={formData.designation}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label>Location:</Label>
          <Input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label>Salary:</Label>
          <Input
            type="text"
            name="salary"
            value={formData.salary}
            onChange={handleChange}
          />
        </FormGroup>
        <Button type="submit">Submit</Button>
      </form>
    </FormContainer>
  );
};

export default EmployeeForm;
