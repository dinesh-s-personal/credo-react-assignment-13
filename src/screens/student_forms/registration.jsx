import React from "react";
import { Button, Col, Row } from "react-bootstrap";
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

    return <div>
        <Row>
            <Col>
                <h2>Student Registration Form</h2>
            </Col>
            <Col>
                <Button onClick={btnSave}>Save</Button>
            </Col>
            <Col>
                <Button onClick={btnBack}>Back</Button>
            </Col>
        </Row>
    </div>
}