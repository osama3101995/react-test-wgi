import React, {useState} from "react";
import "./styles.scss"
import Button from "../Button";

const SearchBar = (props : any) => {
  const [value, setValue] = useState('')
  return (
    <section className="searchbar">
        <input type="text" onChange={e=> setValue(e.currentTarget.value)}/>
        <Button onClick={()=>props.searchText(value)}>Filter</Button>
    </section>
  );
};

export default SearchBar;
