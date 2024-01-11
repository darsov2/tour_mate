import React from "react";
import useGet from "../Hooks/useGet";
import {Col, Container, Row, Table} from "react-bootstrap";
import AddRoomForm from "./AddRoomForm";


const EditRoomForm = (props) => {

    console.log(props.room)

    const dateFormatter = (str) => {
        const inputDate = new Date(str);

        const options = {
            year: '2-digit',
            month: '2-digit',
            day: '2-digit'
        };

        return inputDate.toLocaleString('en-GB', options);
    }

    const {
        data,
        isLoading,
        setData,
        getData
    } = useGet(`/hotel/rooms/${props.room.hotelRoomId}/available`)

    !isLoading && console.log(data)

    return (
        <>
            <Row>
                <Col>
                    <AddRoomForm roomId={props.room.hotelRoomId} refresh={props.refresh} room={props.room}/>
                </Col>
                <Col>
                    <Container>
                        <Table>
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>Достапно од</th>
                                <th>Достапно до</th>
                                <th>Број на соби</th>
                            </tr>
                            </thead>
                            <tbody>
                            {!isLoading && data != null && data.map((avail, i) => {
                                return (<tr>
                                    <td>
                                        {i + 1}
                                    </td>
                                    <td>
                                        {dateFormatter(avail.dateFrom)}
                                    </td>
                                    <td>
                                        {dateFormatter(avail.dateTo)}
                                    </td>
                                    <td>
                                        {avail.numberOfBeds}
                                    </td>
                                </tr>)
                            })}
                            </tbody>
                        </Table>
                    </Container>
                </Col>
            </Row>
        </>
    )
}

export default EditRoomForm