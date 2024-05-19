import React, { useEffect } from "react";
import { Alert, Button, Col, Row, Spinner, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "../../router/routes";
import { useGetAllStudentsQuery } from "../../redux/services/studentform";

export const StudentList = () => {

    const objNavigate = useNavigate();

    const {isLoading, isError, isSuccess, data} = useGetAllStudentsQuery();

    const btnNewStudent = () => {
        objNavigate(AppRoutes.registration);
    }

    const btnLogout = () => {
        localStorage.removeItem('loginStatus')
        objNavigate(AppRoutes.login);
    }

    const btnEdit = () => {
        objNavigate('/edit-student/1');
    }

    const fetchAllStudents = () => {

    }

    useEffect(() => {
        fetchAllStudents();
    },[])

    return <div>
        <Row>
            <Col>
                <h2>Student List Page</h2>
            </Col>
            <Col>
                <Button onClick={btnNewStudent}>New Student</Button>
            </Col>
            <Col>
                <Button onClick={btnLogout}>Logout</Button>
            </Col>
            <Col>
                <Button onClick={btnEdit}>Temp Edit</Button>
            </Col>
        </Row>

        {isLoading && <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>}

        {isError && <Alert variant={"danger"}>
            Something went wrong, unable to fetch student details.
        </Alert>}

        {isSuccess && <Table striped bordered hover style={{marginTop: "25px"}}>
            <thead>
                <tr>
                <th>Sl.no</th>
                <th>Name</th>
                <th>Gender</th>
                <th>Dob</th>
                <th>Address</th>
                <th>Languages Known</th>
                </tr>
            </thead>
            <tbody>
                {data.map((student) => {
                    return <tr key={student.id}>
                        <td>{student.id}</td>
                        <td>{student.name}</td>
                        <td>{student.gender}</td>
                        <td>{student.dob}</td>
                        <td>{student.address}</td>
                        <td>{student.languages_known}</td>
                    </tr>
                })}
            </tbody>
        </Table>}
    </div>
}