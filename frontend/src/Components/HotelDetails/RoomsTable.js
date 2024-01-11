import React from "react";
import Room from "./Room";
import Form from "react-bootstrap/Form";
import FaHotel from "react-icons/fa";
import {Button} from "react-bootstrap";
import useCreate from "../Hooks/useCreate";
import RoomRow from "./RoomRow";

const RoomsTable = (props) => {


    console.log(props.data[0].hotelRoomAvailableId)
    console.log([...Array(props.data[0].numberOfBeds).keys()])
    return (
        <>
            <table className="m-auto table table-hover table-responsive">
                <thead>
                <tr>
                    <th scope="col">Тип на соба</th>
                    <th scope="col">Цена</th>
                    <th scope="col">Колку единици?</th>
                    <th scope="col"></th>
                </tr>
                </thead>
                <tbody>
                {Array.from(new Set(props.data.map(x => x.hotelRoom))).map((room) => {
                    return (
                        <>
                            <RoomRow
                                availableId={props.data.filter(x => x.hotelRoom.hotelRoomId === room.hotelRoomId).
                                map(x => x.hotelRoomAvailableId)[0]}
                                data={props.data} room={room} from={props.from} to={props.to}/>
                        </>
                    );
                })}
                </tbody>
            </table>
        </>
    );
};

export default RoomsTable;
