import React, {useState} from "react";
import {Form, Button, Container, Row, Col} from "react-bootstrap";
import {GiConfirmed} from "react-icons/gi";
import useFormData from "../Hooks/useFormData";
import useCreateTrip from "../Hooks/Transport/useCreateTrip";
import {AiOutlinePlusCircle} from "react-icons/ai";
import useFormNested from "../useFormNested";

const AddTripForm = (props) => {
    const {createTrip} = useCreateTrip(props.transportId);
    console.log(props.transportId)
    const [wayPoints, setWayPoints] = useState([]);
    const [dependencies, setDependencies] = useState([]);
    const [routeCount, setRouteCount] = useState(0);
    const [showRouteCol, setRouteCol] = useState(false);
    let wayPointNames
    const findDependantRoutes = (routes, waypoints, i) => {

        const dependency = []
        console.log('OD fja')
        console.log(Object.values(waypoints))
        const objVal = Object.values(waypoints)
        const searchingRoute = Object.values(waypoints)[i]
        const fromIndex = routes.findIndex(x => searchingRoute.from === x)
        const toIndex = routes.findIndex(x => searchingRoute.to === x)
        for(let j = 0; j < objVal.length; j++)
        {
            const start = routes.findIndex(x => objVal[j].from === x)
            const end = routes.findIndex(x => objVal[j].to === x)
            if(start >= fromIndex && start < toIndex)
            {
                dependency.push(j)
            }
            else if(end >= toIndex && end < toIndex)
            {
                dependency.push(j)
            }
            else if(fromIndex >= start && fromIndex < end)
            {
                dependency.push(j)
            }
        }
        return dependency;
    }

    const {formData, onFormChange, onCheckBoxChange, setFormData} = useFormData(
        {
            transport: "",
            from: "",
            to: "",
            freeSpace: "",
            date: new Date().getDate(),
            time: new Date().getDate(),
            routeWaypointLocation: [],
        }
    );

    const {
        formData: routesFormData,
        onFormChange: routesFormChange,
        setFormData: routesSetFormData
    } = useFormNested({});

    const [routes, setRoutes] = useState([]);

    const newWaypoint = (
        <>
            <Form.Group className="mb-3" controlId="tripFrom">
                <Form.Label>Попатна дестинација</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Внесете го градот на поаѓање"
                    // value={formData.departureLocation}
                    // onChange={onFormChange}
                    name="routeWaypointLocation"
                />
            </Form.Group>
        </>
    );

    return (
        <>
            <Container
                className="rounded-5 m-5 my-auto mx-auto py-2 px-5"
                style={{backgroundColor: "#ffffff"}}
            >
                <Form>
                    <Row>
                        <Row>
                            <Form.Group className="mb-3" controlId="tripFrom">
                                <Form.Label>Дестинација на поаѓање</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Внесете го градот на поаѓање"
                                    value={formData.from}
                                    onChange={onFormChange}
                                    name="from"
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="tripTo">
                                <Form.Label>Дестинација на пристигање</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Внесете го градот на пристигање"
                                    value={formData.to}
                                    onChange={onFormChange}
                                    name="to"
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="tripDate">
                                <Form.Label>Датум и време на поаѓање</Form.Label>
                                <Form.Control
                                    type="datetime-local"
                                    placeholder="Внесете го датумот на поаѓање"
                                    value={formData.date}
                                    onChange={onFormChange}
                                    name="date"
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="tripRoute">
                                <Form.Label className="d-flex justify-content-between align-items-center">
                                    Попатни дестинации
                                    <AiOutlinePlusCircle
                                        onClick={() => {
                                            const wayPoints = document.getElementsByName(
                                                "routeWaypointLocation"
                                            );
                                            if (wayPoints.length == 0) {
                                                setFormData({
                                                    ...formData,
                                                    routeWaypointLocation: [formData.from],
                                                });
                                                setRouteCount((prev) => {
                                                    return prev + 1;
                                                });
                                                console.log(formData);
                                            }
                                            if (
                                                wayPoints.length == 0 ||
                                                wayPoints[wayPoints.length - 1].value.length > 0
                                            ) {
                                                setRouteCount((prevState) => {
                                                    return prevState + 1;
                                                });
                                                console.log(routeCount);
                                                setWayPoints((prevState) => {
                                                    return [...prevState, newWaypoint];
                                                });
                                            }
                                        }}
                                        id="add-route"
                                        size={30}
                                        color="#159895"
                                    ></AiOutlinePlusCircle>
                                </Form.Label>
                            </Form.Group>
                            {!showRouteCol && wayPoints}
                        </Row>
                        {showRouteCol && console.log(routes)}
                        {showRouteCol && console.log(routesFormData)}
                        {dependencies !== [] && console.log(dependencies)}
                        {(showRouteCol && dependencies !== []) && (
                            routes.map((route, i) => {
                                return (
                                    <Row>
                                        <Form.Group className="mb-3" controlId="tripTo" key={i}>
                                            <Row>
                                                {/*{console.log(findDependantRoutes(routesFormData, wayPointNames, i))}*/}
                                                <Col routeId={i}>
                                                    <Form.Label>Рута</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        placeholder="Внесете го градот на пристигање"
                                                        value={route.from + " - " + route.to}
                                                        disabled
                                                        onChange={routesFormChange}
                                                        name="arrivalLocation"
                                                    />
                                                </Col>
                                                <Col routeId={i} dependantRoutes={dependencies[i].join(',')}>
                                                    <Form.Label>Слободни места</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        placeholder="Внесете го бројот на слободни места"
                                                        value={routesFormData[i].freeSpace}
                                                        onChange={routesFormChange}
                                                        name="freeSpace"
                                                    />
                                                </Col>
                                                <Col routeId={i}>
                                                    <Form.Label>Време на пристигнување</Form.Label>
                                                    <Form.Control
                                                        type="datetime-local"
                                                        placeholder="Внесете го времето на пристигање"
                                                        value={routesFormData[i].arrival}
                                                        onChange={routesFormChange}
                                                        name="arrival"
                                                    />
                                                </Col>
                                                <Col routeId={i}>
                                                    <Form.Label>Цена</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        placeholder="Внесете ја цената за рутата"
                                                        value={routesFormData[i].price}
                                                        onChange={routesFormChange}
                                                        name="price"
                                                    />
                                                </Col>
                                            </Row>
                                        </Form.Group>
                                    </Row>)
                            })
                        )}
                    </Row>
                    <Row>
                        <Form.Group className="my-1 justify-content-center">
                            <Button
                                type="button"
                                style={{backgroundColor: "#159895"}}
                                size="md"
                                onClick={() => {
                                    document.getElementById("add-route").style.display = "none";

                                    const wayPoints = document.getElementsByName(
                                        "routeWaypointLocation"
                                    );
                                    wayPointNames = formData["routeWaypointLocation"];
                                    console.log(wayPointNames);
                                    for (let i = 0; i < routeCount - 1; i++) {
                                        wayPointNames.push(wayPoints[i].value);
                                    }
                                    wayPointNames.push(formData.to);

                                    setFormData({
                                        ...formData,
                                        routeWaypointLocation: wayPointNames,
                                    });

                                    let routesVar = [];
                                    let routesForm = {};
                                    let count = 0;
                                    for (let i = 0; i < wayPointNames.length; i++) {
                                        for (let j = i + 1; j < wayPointNames.length; j++) {
                                            routesForm = {
                                                ...routesForm, [count++]: {
                                                    from: wayPointNames[i],
                                                    to: wayPointNames[j],
                                                    price: 0,
                                                    departure: new Date().getDate(),
                                                    arrival: new Date().getDate(),
                                                    freeSpace: 0,
                                                    order: i
                                                }
                                            }

                                            routesVar.push({
                                                from: wayPointNames[i],
                                                to: wayPointNames[j],
                                                price: 0,
                                                departure: Date(),
                                                arrival: Date(),
                                                freeSpace: 0,
                                                order: i
                                            })
                                        }
                                    }

                                    for (let i = 0; i < Object.values(routesForm).length; i++) {
                                        console.log(findDependantRoutes(wayPointNames, routesForm, i))
                                        setDependencies(prevState => [...prevState, findDependantRoutes(wayPointNames, routesForm, i)])
                                    }
                                    console.log('VO STATEOOOO')
                                    console.log(dependencies)
                                    routesSetFormData(routesForm)
                                    setRoutes(routesVar)
                                    setRouteCol(true)
                                    props.setSize();
                                }}
                            >
                <span className="ikona my-1">
                  <GiConfirmed/>
                </span>
                                <span className="ikona mx-3">Заврши внес на рути</span>
                            </Button>
                        </Form.Group>
                        <Form.Group className="my-1 justify-content-center">
                            <Button
                                type="submit"
                                style={{backgroundColor: "#159895"}}
                                size="md"
                                onClick={(e) => {
                                    e.preventDefault();
                                    const dataToSend = {
                                        ...formData,
                                        routes: Object.values(routesFormData)
                                    }
                                    console.log(dataToSend)
                                    createTrip(dataToSend)
                                    props.refresh((prev) => {
                                        return prev + 1;
                                    })
                                }}
                            >
                <span className="ikona my-1">
                  <GiConfirmed/>
                </span>
                                <span className="ikona mx-3">Поднеси апликација</span>
                            </Button>
                        </Form.Group>
                    </Row>
                </Form>
            </Container>
        </>
    );
};

export default AddTripForm;
