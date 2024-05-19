import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "../../router/routes";

export const LoginPage = () => {

    const objNavigate = useNavigate();

    const onFormSubmit = (event) => {
        event.preventDefault();
    };

    const btnLogin = () => {
        localStorage.setItem('loginStatus','Login successful')
        objNavigate(AppRoutes.students);
    };

    return <div className="justify-content-md-center align-items-center row w-100 offset-md-4">
        <h2>Login Page</h2>

        <Form onSubmit={onFormSubmit}>
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalUserName">
                <Form.Label column sm={2}>
                UserName
                </Form.Label>
                <Col sm={3}>
                <Form.Control type="text" placeholder="UserName" />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                <Form.Label column sm={2}>
                Password
                </Form.Label>
                <Col sm={3}>
                <Form.Control type="password" placeholder="Password" />
                </Col>
            </Form.Group>

            <Button variant="primary" type="submit" onClick={btnLogin} block>Login</Button>
        </Form>
    </div>
}