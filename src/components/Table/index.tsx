import React, {useState} from "react";
import "./styles.scss";
import { Employee } from "../../pages/Employees";
import Button from "../Button";




const EmployeeRow = ({ employee }: { employee: Employee }) => {
    const {first_name, last_name, phone_number, position, avatar} = employee
  return (
    <tr>
      <td>{first_name}</td>
      <td>{last_name}</td>
      <td>{phone_number}</td>
      <td>{position}</td>
      <td>
        <img alt="avatar" height={50} width={50} src={avatar}/>
      </td>
    </tr>
  );
};


const Table = ({employees} : {employees : Employee[]}) => {




  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastEmployee = currentPage * itemsPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - itemsPerPage;
  const currentEmployees = employees.slice(
    indexOfFirstEmployee,
    indexOfLastEmployee
  );

  const totalPages = Math.ceil(employees.length / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };


  return (
    <section className="table-page">
      <div className="table-wrapper">
        <table className="fl-table">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Phone Number</th>
              <th>Position</th>
              <th>Avatar</th>
            </tr>
          </thead>
          <tbody>

          {currentEmployees.map(employee => <EmployeeRow key={employee.id} employee={employee}/>)}

          </tbody>
        </table>
        <div className="table-pagination-button">
          <Button onClick={handlePrevPage} disabled={currentPage === 1}>
            Prev
          </Button>
          <Button onClick={handleNextPage} disabled={currentPage === totalPages}>
            Next
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Table;
