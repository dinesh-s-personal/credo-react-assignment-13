import React from "react";
import { Button, Form, Col, Row, Stack } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "../../router/routes";

export const Registration = () => {
    const objNavigate = useNavigate();

    const btnSave = () => {
        objNavigate(AppRoutes.students);
    }

    const btnBack = () => {
        objNavigate(AppRoutes.students);
    }

    return (<div style={{margin: "10px"}}>
        <Stack direction="horizontal" gap={3}>
            <h2 className="me-auto">New Student Registration</h2>
            <Button onClick={btnSave} variant="primary">Save</Button>
            <Button onClick={btnBack} variant="outline-primary">Back</Button>
        </Stack>

        <br/>
        <br/>
        <br/>

        <div className="reg-form-container">
            <Form>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label column sm="4">Name</Form.Label>
                    <Col sm="8">
                        <Form.Control placeholder="Enter name" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label column sm="4">Gender</Form.Label>
                    <Col sm="8">
                        <Form.Control placeholder="Select Gender" />
                    </Col>
                </Form.Group>
            </Form>
        </div>

    </div>);
}