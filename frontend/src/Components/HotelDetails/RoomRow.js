import React, {useState} from "react";
import Room from "./Room";
import Form from "react-bootstrap/Form";
import {Button} from "react-bootstrap";
import useCreate from "../Hooks/useCreate";
const RoomRow = (props) => {
    const {createEntity} = useCreate()
    const [getData, setData] = useState(0);
    const room = props.room
    console.log(props.data)
    return (
        <>
            <tr>
                <td>
                    <Room data={room}></Room>
                </td>
                <td>{room.price}$</td>
                <td>
                    <Form.Select aria-label="Default select example" name={'numberOfBeds'}
                    onChange={(e) => {
                        setData(e.target.value);
                    }}>
                        <option></option>
                        {[...Array(props.data.find(x => x.hotelRoom.hotelRoomId === room.hotelRoomId).numberOfBeds).keys()].map(x => {
                            return (
                                <option value={x+1}  >{x + 1}</option>
                            )
                        })}
                    </Form.Select>
                </td>
                <td>
                    <Button
                        onClick={() => {
                            createEntity('hotel/reserve', {
                                hotelRoomId: room.hotelRoomId,
                                userId: 1,
                                hotelRoomAvailableId: props.availableId,
                                from: props.from,
                                to: props.to,
                                numberOfBeds: getData
                            })
                        }}
                        className="m-2"
                        size="md"
                        style={{backgroundColor: "#159895"}}
                    >
                        Резервирај
                    </Button>
                </td>
            </tr>
        </>
    )
}

export default RoomRow