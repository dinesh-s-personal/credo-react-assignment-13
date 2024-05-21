import React from "react";
import { Alert, Button, Col, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "../../router/routes";

export const LoginPage = () => {

    const objNavigate = useNavigate();

    const [username, setUsername] = React.useState('');
    const [pwd, setPwd] = React.useState('');
    const [outputDtls, setOutput] = React.useState('');
    const [loginFailure, setLoginFailure] = React.useState(true);

    const onFormSubmit = (event) => {
        event.preventDefault();
    };

    const btnLogin = () => {
        setOutput(username === 'test@gmail.com' && pwd === '12345678' ? 
                                localStorage.setItem('loginStatus','Login successful') : 
                                localStorage.setItem('loginStatus','Login Failed. Try again!!!'));
        
        setUsername('');
        setPwd('');
        if (localStorage.getItem('loginStatus') === 'Login successful'){
            setLoginFailure(true);
            objNavigate(AppRoutes.students);
        }
        else{
            setOutput('Login unsuccessful. Try again!!!');
            setLoginFailure(false);
        }
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
                    <Form.Control type="text" placeholder="UserName" 
                        value={username} onChange={(e) => { setUsername(e.target.value) }}/>
                    </Col>
                </Form.Group>
            </Row>

            <Row>
                <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                    <Form.Label column sm={25}>
                    Password
                    </Form.Label>
                    <Col sm={25}>
                    <Form.Control type="password" placeholder="Password" 
                        value={pwd} onChange={(e) => {setPwd(e.target.value)}}/>
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

            {!loginFailure && <div>
            <br />
            <br />
            <Alert className='mb-3' variant={'danger'}>{outputDtls}</Alert> </div>}
        </Form>

        
    </div>
}