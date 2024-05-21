import React from "react";
import { Alert, Button, Spinner, Stack, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "../../router/routes";
import { useGetAllStudentsQuery } from "../../redux/services/studentform";

export const StudentList = () => {

    const objNavigate = useNavigate();

    const {isLoading, isError, isSuccess, data} = useGetAllStudentsQuery(null, { refetchOnMountOrArgChange: true });

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

    return <div style={{margin: "10px"}}>

        <Stack direction="horizontal" gap={3}>
            <h2 className="me-auto">Student's detail</h2>
            <Button onClick={btnNewStudent} variant="primary">New Student</Button>
            <Button onClick={btnLogout} variant="outline-primary">Logout</Button>
            {/* <div className="vr" />
            <Button onClick={btnEdit} variant="outline-danger">Temp Edit</Button> */}
        </Stack>

        {isLoading && 
            <div className="justify-content-md-center align-items-center vh-100 d-flex">
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
        }

        {isError && 
            <div className="justify-content-md-center align-items-center vh-100 d-flex">
                <Alert variant={"danger"}>
                    Something went wrong, unable to fetch student details.
                </Alert>
            </div>
        }

        {isSuccess && <Table striped bordered hover style={{marginTop: "25px"}}>
            <thead>
                <tr>
                <th>Sl.no</th>
                <th>Name</th>
                <th>Gender</th>
                <th>DoB</th>
                <th>Address</th>
                <th>Languages Known</th>
                <th>Actions</th>
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
                        <td>
                            <Button variant="link" onClick={btnEdit}>Edit</Button>
                        </td>
                    </tr>
                })}
            </tbody>
        </Table>}
    </div>
}