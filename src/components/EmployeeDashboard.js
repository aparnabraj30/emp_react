// EmployeeDashboard.js
import React, { useEffect, useState } from 'react';
import TableView from './TableView';
import styled from 'styled-components';

const DashboardContainer = styled.div`
  text-align: left;
  padding-left: 20px;
  font-family: 'Times New Roman', Times, serif;
  font-size: 18px;
  letter-spacing: 0.5px;
`;




const EmployeeDashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <DashboardContainer>
      {/* <DashboardHeading>Employee Dashboard</DashboardHeading> */}
      <TableView data={data} />
    </DashboardContainer>
  );
};
export default EmployeeDashboard;
