// TableView.js
import React from 'react';
import styled from 'styled-components';

const TableContainer = styled.div`
  max-width: 1000px;
  margin: 20px auto;
  font-family: 'Times New Roman', Times, serif;
  font-size: 18px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 5px;
`;

const Th = styled.th`
  border: 1px solid #ddd;
  padding: 12px;
  text-align: left;
  background-color: #03045e;
  color: white;
  font-family: 'Times New Roman', Times, serif;
  font-size: 18px;
  letter-spacing: 0.5px;
  height: 70px;
`;

const Td = styled.td`
  border: 1px solid #fff;
  padding: 15px;
  background-color: ${(props) => (props.isEven ? '#FFE5D8' : '#FBEEE6')};
`;

const TableView = ({ data }) => {
  return (
    <TableContainer>
      <Table>
        <thead>
          <tr>
            <Th>ID</Th>
            <Th>Name</Th>
            <Th>Email</Th>
          </tr>
        </thead>
        <tbody>
          {data.map((employee, index) => (
            <tr key={employee.id}>
              <Td isEven={index % 2 === 0}>{employee.id}</Td>
              <Td isEven={index % 2 === 0}>{employee.name}</Td>
              <Td isEven={index % 2 === 0}>{employee.email}</Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  );
};

export default TableView;
