import {Form} from "./styled-components";
import {FormEvent, FormEventHandler, useEffect, useState} from "react";
import {FaSearch} from "react-icons/fa";
import {InputHandler} from "concurrently";

function Search() {
  const [input, setInput] = useState('');

  const onSubmitHandler = (e: FormEvent) => {
    e.preventDefault();
  }

  return (
    <Form>
      <FaSearch/>
      <input onChange={(e) => setInput(e.target.value)} type="text" />
    </Form>
  );
}

export default Search;