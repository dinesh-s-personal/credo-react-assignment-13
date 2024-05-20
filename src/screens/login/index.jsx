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

    return <div className="justify-content-center align-items-center vh-100 d-flex">
        <Form onSubmit={onFormSubmit} className="form-container">

            <Row>
                <h2>Provide your login credentials</h2>
            </Row>
            
            <Row>
                <Form.Group as={Row} className="mb-10" controlId="formHorizontalUserName">
                    <Form.Label column sm={25}>
                    UserName
                    </Form.Label>
                    <Col sm={25}>
                    <Form.Control type="text" placeholder="UserName" />
                    </Col>
                </Form.Group>
            </Row>

            <Row>
                <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                    <Form.Label column sm={25}>
                    Password
                    </Form.Label>
                    <Col sm={25}>
                    <Form.Control type="password" placeholder="Password" />
                    </Col>
                </Form.Group>
            </Row>

            <Row>
                <Form.Group as={Row} className="mb-3">
                    <Col sm={{ span: 10, offset: 5 }}>
                    <Button variant="primary" type="submit" onClick={btnLogin} block>Login</Button>
                    </Col>
                </Form.Group>
            </Row>
        </Form>
    </div>
}