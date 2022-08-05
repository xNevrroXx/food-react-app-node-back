import {FormEvent, FormEventHandler, useEffect, useState} from "react";
import {FaSearch} from "react-icons/fa";
import {useNavigate} from "react-router-dom";

//styles
import {Form} from "./styled-components";

function Search() {
  const [input, setInput] = useState('');
  const navigate = useNavigate();

  const onSubmitHandler = (e: FormEvent) => {
    e.preventDefault();
    navigate('/searched/'+input);
  }

  return (
    <Form onSubmit={onSubmitHandler}>
      <FaSearch/>
      <input
        onChange={(e) => setInput(e.target.value)}
        type="text"
        value={input}
      />
    </Form>
  );
}

export default Search;