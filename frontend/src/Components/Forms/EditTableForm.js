import React from "react";
import {Col, Container, Row, Table} from "react-bootstrap";
import AddTableForm from "./AddTableForm";
import useGet from "../Hooks/useGet";

const EditTableForm = (props) => {

    const {
        data,
        isLoading,
        setData,
        getData
    } = useGet(`/restaurant/table/${props.table.tableId}/availible`)

    !isLoading && console.log(data)

    const dateFormatter = (str) => {
        const inputDate = new Date(str);

        const options = {
            year: '2-digit',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            hour12: false,
        };

        return inputDate.toLocaleString('en-GB', options);

    }

    return (
        <>
            <Row>
                <Col>
                    <AddTableForm data={props.table}></AddTableForm>
                </Col>
                <Col>
                    <Container>
                        <Table>
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>Достапно од</th>
                                <th>Достапно до</th>
                                <th>Број на маси</th>
                            </tr>
                            </thead>
                            <tbody>
                            {!isLoading && data != null && data.map((avail, i) => {
                                return (<tr>
                                    <td>
                                        {i + 1}
                                    </td>
                                    <td>
                                        {dateFormatter(avail.hourFrom)}
                                    </td>
                                    <td>
                                        {dateFormatter(avail.hourTo)}
                                    </td>
                                    <td>
                                        {avail.numTables}
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

export default EditTableForm;