import React from "react";
import { Button, Stack } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "../../router/routes";

export const EditStudent = () => {
    const objNavigate = useNavigate();

    const btnSave = () => {
        objNavigate(AppRoutes.students);
    }

    const btnBack = () => {
        objNavigate(AppRoutes.students);
    }

    return <div style={{margin: "10px"}}>

        <Stack direction="horizontal" gap={3}>
            <h2 className="me-auto">Student Edit Form</h2>
            <Button onClick={btnSave} variant="primary">Save</Button>
            <Button onClick={btnBack} variant="outline-primary">Back</Button>
        </Stack>
    </div>
}