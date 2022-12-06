import React from 'react';
import {Form} from "react-bootstrap";

const InputValidation = ({placeholder, name, type, value, setValue}) => {

    const deleteAllSymbols = (value) => {
        return value.replace(/[^a-zA-Zа-яА-Я0-9@._]/ig, "");
    }

    const maskSymbols = (event) => {
        let symbols = deleteAllSymbols(event.target.value);
        setValue (symbols);
    }

    return (
        <Form.Control
            name={name}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={e => maskSymbols(e)}
        />
    );
};

export default InputValidation;