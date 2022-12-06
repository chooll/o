import React, {useState} from 'react';
import {Container, Row, Col, Form, Button, Alert} from "react-bootstrap";
import NavBar from "../components/NavBar";
import InputValidation from "../components/InputValidation";

const LoginPage = ({userData}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [alertVisible, setAlertVisible] = useState('none');

    const login = async () =>
    {
        if (email == null || password == null) {
            setAlertVisible('block');
        }
        else {
            await fetch(`http://localhost:5000/login?email=${email}&password=${password}`)
                .then (el => (el.json()))
                .then (el => console.log(el))
        }

    }

    return (
        <article className="login-page">
            <NavBar/>

            <Container className="p-5">
                <h1>Вход</h1>
                <Form>
                    <Form.Group className="pb-4" controlId="fromBasicEmail">
                        <Form.Label>Введите почту</Form.Label>
                        <InputValidation type="email" placeholder="Введите почту" value={email} setValue={setEmail}/>
                    </Form.Group>

                    <Form.Group className="pb-4" controlId="fromBasicPassword">
                        <Form.Label>Введите пароль</Form.Label>
                        <InputValidation type="password" placeholder="Введите пароль" value={password} setValue={setPassword}/>

                    </Form.Group>

                    <Form.Group className="pb-4" controlId="fromBasicCheck">
                        <Form.Check type="checkbox" label="Запомнить пароль?"/>
                    </Form.Group>

                    <Alert style={{"display": alertVisible}} key="danger" variant="danger"> Заполните все поля </Alert>

                    <Button onClick={login} className="mb-4 w-100" variant="success">
                        Войти
                    </Button>

                    <Button href="/reg" className="meb-4 w-100" variant="primary">
                        Зарегистрироваться
                    </Button>
                </Form>
            </Container>
        </article>
    );
};

export default LoginPage;