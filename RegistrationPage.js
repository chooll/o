import { React, useState } from 'react';
import {Button, Container, Form} from "react-bootstrap";
import NavBar from "../components/NavBar";

const RegistrationPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    return (
        <article className="registration_page">

            <NavBar/>

            <Container className="p-5">
                <h1>Регистрация</h1>
                <Form>
                    <Form.Group className="pb-4" controlId="fromBasicEmail">
                        <Form.Label>Введите почту</Form.Label>
                        <Form.Control value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="Введите почту"/>
                    </Form.Group>

                    <Form.Group className="pb-4" controlId="fromBasicEmail">
                        <Form.Label>Введите ваше имя</Form.Label>
                        <Form.Control type="text" placeholder="Введите имя"/>
                    </Form.Group>

                    <Form.Group className="pb-4" controlId="fromBasicPassword">
                        <Form.Label>Введите пароль</Form.Label>
                        <Form.Control value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Введите пароль"/>
                    </Form.Group>

                    <Form.Group className="pb-4" controlId="fromBasicPassword">
                        <Form.Check type="checkbox" label="Я принимаю все условия обработки данных"/>
                    </Form.Group>

                    <Button onClick={
                        async () => {
                            let formData = new FormData();
                            formData.append ('email', email);
                            formData.append ('password', password);
                            console.log(formData);

                            const res = await fetch ('http://localhost:5000/reg', {
                                method: 'POST',
                                body: formData
                            })

                            console.log (res.json())
                        
                        }
                    }
                    className="mb-4 w-100" variant="success">
                        Зарегистрироваться
                    </Button>

                </Form>
            </Container>

        </article>
    );
};

export default RegistrationPage;