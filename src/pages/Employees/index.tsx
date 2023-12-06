import { withAuthenticationRequired } from '@auth0/auth0-react'
import React, {useEffect, useState} from 'react'
import axios from 'axios';
import Table from '../../components/Table';
import SearchBar from '../../components/SearchBar';
import "./styles.scss";

export interface Employee {
  id : number;
  first_name : string;
  avatar : string;
  last_name : string;
  phone_number : string;
  position : string;
}

function Employees() {
  const [employees, setEmployees] = useState([])
  const [filteredEmployees, setFilteredEmployees] = useState([])

  const searchText = (text: string) => {

    const escpRegForPhone = (text :string) => {
      return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
    }

    const refinedTerm = escpRegForPhone(text);
    const searchRegex = new RegExp(refinedTerm, 'i'); 
    
      const filteredData = employees.filter(item =>
        Object.values(item).some((field:any) => searchRegex.test(field))
      );
    
    console.log(filteredData)
    setFilteredEmployees(prev => filteredData);
  }

  useEffect(()=>{
    axios.get('https://random-data-api.com/api/v2/users?size=100&response_type=json')
    
    .then(function (response : any) {
      // handle success
      const setData = response.data.map((item : any ) => {
        const {id, avatar, first_name, last_name, phone_number, employment} = item
        return {
          last_name,
          id,
          first_name,
          phone_number,
          avatar,
          position: employment.title
        }
      })
      setEmployees(setData)
      setFilteredEmployees(setData)
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
  },[])

  return (
    <section className='employees'>
      <SearchBar searchText={searchText}/>
      <Table employees={filteredEmployees}/>
    </section>
  )
}

export default withAuthenticationRequired(Employees)