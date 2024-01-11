package com.tourMate.controllers;

import com.tourMate.dto.RouteListingDto;
import com.tourMate.dto.TransportDto;
import com.tourMate.dto.TransportListingDto;
import com.tourMate.entities.*;
import com.tourMate.services.TransportManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@CrossOrigin
@RestController
public class TransportController {
    @Autowired
    TransportManager transportManager;

    // TRANSPORT CRUD //
    @PostMapping(path = "/transport/add")
    public void add(@RequestBody Transport transport) {
        transportManager.createTransport(transport.getTransportName(), transport.getCarBrand(), transport.getCarType(), transport.getCarManufacturedYear(), transport.getNoPassengers(), transport.getNoBags(), transport.getEMBG(), new User(), transport.getCarPlate());

    }

    @GetMapping(path = "/transport")
    public List<Transport> showTransports() {
        return transportManager.getTransports();
    }

    @GetMapping(path = "/transport/user/{id}")
    public List<TransportDto> showTransportsForUser(@PathVariable(name = "id") long userId) {
        return transportManager.getTransportsByUser(userId);
    }

    @PostMapping(path = "/transport/edit")
    public void edit(@RequestBody Transport transport) {
        transportManager.editTransport(transport.getTransportID(), transport.getTransportName(), transport.getCarBrand(), transport.getCarType(), transport.getCarManufacturedYear(), transport.getNoPassengers(), transport.getNoBags(), transport.getEMBG(), transport.getOwner(), transport.getCarPlate());

    }

    @GetMapping(path = "/transport/{id}")
    public TransportDto getTransport(@PathVariable(name = "id") long transportId)
    {
        System.out.println("TUKA SUUUUUM");
        return transportManager.findTransportById(transportId);
    }

    @GetMapping(path = "/transport/delete")
    public ResponseEntity removeTransport(@RequestParam(name = "transportId") long transportId) {
        try {
            transportManager.deleteTransport(transportId);
            return new ResponseEntity(HttpStatus.OK);
        } catch (Exception exception) {
            return new ResponseEntity(HttpStatus.NOT_FOUND);
        }
    }

    // TANSPORT RESERVATION CRUDE //

    @PostMapping(path = "/transport/reservation/sadd")
    public void add(@RequestBody TransportReservation transportReservation) {
        transportManager.createTransportReservation(transportReservation.getTransport(), transportReservation.getDepartureLocation(), transportReservation.getArrivalLocation(), transportReservation.getDate(), transportReservation.getNoSeats(), transportReservation.getUser(), transportReservation.getDepartureHour());
    }

    @GetMapping(path = "/transport/reservations")
    public List<TransportReservation> showTransportReservations() {
        return transportManager.getTransportReservations();
    }

    @PostMapping(path = "/transport/reservations/edit")
    public void edit(@RequestBody TransportReservation transportReservation) {
        transportManager.editTransportReservation(transportReservation.getTransport(), transportReservation.getReservationID(), transportReservation.getDepartureLocation(), transportReservation.getArrivalLocation(), transportReservation.getDate(), transportReservation.getNoSeats(), transportReservation.getUser(), transportReservation.getDepartureHour());
    }

    @GetMapping(path = "/transport/reservations/delete")
    public ResponseEntity removeTransportReservation(@RequestParam(name = "transportReservationId") long transportReservationId) {
        try {
            transportManager.deleteTransportReservation(transportReservationId);
            return new ResponseEntity(HttpStatus.OK);
        } catch (Exception exception) {
            return new ResponseEntity(HttpStatus.NOT_FOUND);
        }
    }

    // TRANSPORT AVAILABLE CRUDE
    @PostMapping(path = "/transport/available/add")
    public void add(@RequestBody TransportAvailible transportAvailable, @RequestParam(name = "transportId") long transportId) {
        System.out.println("OREEEEEL");
        System.out.println("DVA ORLA");
        Transport t = transportManager.getTransportById(transportId);
        List<TransportRoute> routes = transportAvailable.getRoutes().stream().toList();
        routes.get(0).setDeparture(transportAvailable.getDate());
        transportAvailable.setTime(routes.get(routes.size() - 1).getArrival());
        routes.forEach(x -> x.setParentRoute(transportAvailable));
        transportAvailable.setTransport(t);
        transportManager.createTransportAvailable(transportAvailable.getTransport(), transportAvailable.getFrom(), transportAvailable.getTo(), transportAvailable.getDate(), transportAvailable.getFreeSpace(), transportAvailable.getTime(), routes);
    }

    @GetMapping(path = "/transport/available")
    public List<TransportReservation> showTransportAvailable() {
        return transportManager.getTransportReservations();
    }

    @GetMapping(path = "/transport/{id}/available")
    public List<RouteListingDto> showRoutesForTransport(@PathVariable(name = "id") long transportId) {
        List<RouteListingDto> bla = transportManager.getRoutesForTransport(transportId);
        return bla;
    }


    @PostMapping(path = "/transport/available/edit")
    public void edit(@RequestBody TransportAvailible transportAvailible) {
        transportManager.editTransportAvailable(transportAvailible.getTransport(), transportAvailible.getTransportAvailibleId(), transportAvailible.getFrom(), transportAvailible.getTo(), transportAvailible.getDate(), transportAvailible.getFreeSpace(), transportAvailible.getTime());
    }

    @GetMapping(path = "/transport/available/delete")
    public ResponseEntity removeTransportAvailable(@RequestParam(name = "transportAvailableId") long transportAvailableId)
    {
        try
        {
            transportManager.deleteTransportAvailable(transportAvailableId);
            return new ResponseEntity(HttpStatus.OK);
        }
        catch (Exception exception)
        {
            return new ResponseEntity(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping(path = "/transport/search")
    public List<TransportListingDto> searchAvailableTransport(@RequestParam(name = "from") String from, @RequestParam(name = "to") String to,
                                                              @RequestParam(name = "date") @DateTimeFormat(pattern = "yyyy-MM-dd") Date date){
        return transportManager.getTransportsAvailableByFilters(from, to, date);
    }
}