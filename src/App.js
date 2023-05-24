import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Button, Table } from 'reactstrap';
import Student from './Student';


function App() {
  const listStudent = [
    {
      id: 1,
      firstName: 'john',
      lastName: 'doe',
      username: '@john dep'
    },

    {
      id: 2,
      firstName: 'john',
      lastName: 'doe',
      username: '@john dep'
    },
    {
      id: 3,
      firstName: 'john',
      lastName: 'doe',
      username: '@john dep'
    },
    {
      id: 4,
      firstName: 'john',
      lastName: 'doe',
      username: '@john dep'
    }

  ]
  return (
    <>
    <Button color="danger">Danger!</Button>
    <h1> Hello world</h1>
    <Table
>
  <thead>
    <tr>
      <th>
        #
      </th>
      <th>
        First Name
      </th>
      <th>
        Last Name
      </th>
      <th>
        Username
      </th>
    </tr>
  </thead>
  <tbody>
    {listStudent.map((Student, index) =>
      return (
        <Student 

      );
    )};   
  </tbody>
</Table>
    </>
    
  );
}

export default App;
