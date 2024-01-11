package com.tourMate.services.impl;


import com.tourMate.dao.TransportDao;
import com.tourMate.dto.RouteListingDto;
import com.tourMate.dto.TransportDto;
import com.tourMate.dto.TransportListingDto;
import com.tourMate.entities.*;
import com.tourMate.services.TransportManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
import java.util.stream.DoubleStream;

@Service
public class TransportManagerImpl implements TransportManager {
    @Autowired
    TransportDao transportDao;

    @Override
    public void createTransport(String transportName, String carBrand, String carType, int carManufacturedYear, int noPassengers, int noBags, long EMBG, User owner, String carPlate) {
        transportDao.createTransport(transportName, carBrand, carType, carManufacturedYear, noPassengers, noBags, EMBG, owner, carPlate);
    }

    @Override
    public void deleteTransport(long transportId) {
        transportDao.deleteTransport(transportId);
    }

    @Override
    public List<Transport> getTransports() {
       return transportDao.getTransports();
    }

    @Override
    public List<TransportDto> getTransportsByUser(long userId) {
        return transportDao.getTransportsByUser(userId);
    }

    @Override
    public List<RouteListingDto> getRoutesForTransport(long transportId) {
        return transportDao.getRoutesForTransport(transportId);
    }

    @Override
    public TransportDto findTransportById(long transportId) {
        return transportDao.findTransportById(transportId);
    }

    @Override
    public void editTransport(long transportID, String transportName, String carBrand, String carType, int carManufacturedYear, int noPassengers, int noBags, long EMBG, User owner, String carPlate) {
        transportDao.editTransport(transportID, transportName, carBrand, carType, carManufacturedYear, noPassengers, noBags, EMBG, owner, carPlate);
    }

    @Override
    public void createTransportReservation(Transport transport, String departureLocation, String arrivalLocation, Date date, Integer noSeats, User user, Date departureHour) {
        transportDao.createTransportReservation(transport, departureLocation, arrivalLocation, date, noSeats, user, departureHour);
    }

    @Override
    public TransportReservation findTransportReservationByID(long reservationID) {
       return transportDao.findTransportReservationByID(reservationID);
    }

    @Override
    public List<TransportReservation> getTransportReservations() {
      return  transportDao.getTransportReservations();
    }

    @Override
    public TransportAvailible findTransportAvailableByID(long reservationID) {return transportDao.findTransportAvailableByID(reservationID);
    }

    @Override
    public Transport getTransportById(long transportId) {
        return transportDao.getTransportById(transportId);
    }

    @Override
    public List<TransportListingDto> getTransportsAvailableByFilters(String from, String to, Date date) {
        List<TransportRoute> transportAvailable = transportDao.getTransportsAvailableByFilters(from, to, date);
        Map<TransportAvailible, List<TransportRoute>> transportsByTransporter = transportAvailable.stream().collect(Collectors.groupingBy(x -> x.getParentRoute()));
        List<TransportListingDto> transportList = transportsByTransporter.keySet().stream().toList().stream()
                .map(x -> new TransportListingDto(
                            x.getTransportAvailibleId(),
                            x.getFrom(),
                            x.getTo(),
                            x.getDate(),
                            x.getFreeSpace(),
                            x.getTime(),
                            transportsByTransporter.get(x).stream().mapToDouble(y -> y.getPrice()).min().getAsDouble(),
                            x.getRoutes(),
                            x.getTransport()
                    )).collect(Collectors.toList());
        return transportList;
    }

    @Override
    public List<TransportReservation> getTransportsReservationsByUserID(long userID) {
        return transportDao.getTransportsReservationsByUserID(userID);
    }

    @Override
    public List<TransportAvailible> getTransportsAvailable() {
        return transportDao.getTransportsAvailable();
    }

    @Override
    public void createTransportAvailable(Transport transport, String departureLocation, String arrivalLocation, Date date, Integer noSeats, Date departureHour, Collection<TransportRoute> routes) {
        transportDao.createTransportAvailable(transport, departureLocation, arrivalLocation, date, noSeats, departureHour, routes);
    }

    @Override
    public void editTransportReservation(Transport transport, long reservationID, String departureLocation, String arrivalLocation, Date date, Integer noSeats, User user, Date departureHour) {
        transportDao.editTransportReservation(transport, reservationID, departureLocation, arrivalLocation, date, noSeats, user, departureHour);
    }

    @Override
    public void editTransportAvailable(Transport transport, long availableID, String departureLocation, String arrivalLocation, Date date, Integer noSeats, Date departureHour) {
        transportDao.editTransportAvailable(transport, availableID, departureLocation, arrivalLocation, date, noSeats, departureHour);
    }

    @Override
    public void deleteTransportReservation(long reservationID) {
        transportDao.deleteTransportReservation(reservationID);
    }

    @Override
    public void deleteTransportAvailable(long availableID) {
        transportDao.deleteTransportAvailable(availableID);
    }

    @Override
    public void createTransportRoute(TransportAvailible parentRoute, String from, String to, double price, Date departure, Date arrival, int freeSpace, int order){
        transportDao.createTransportRoute(parentRoute, from, to, price, departure, arrival, freeSpace, order);
    }

    @Override
    public void deleteTransportRoute(long transportRouteId){
        transportDao.deleteTransportRoute(transportRouteId);
    }

    @Override
    public void editTransportRoute(long transportRouteId, TransportAvailible parentRoute, String from, String to, double price, Date departure, Date arrival, int freeSpace, int order){
        transportDao.editTransportRoute(transportRouteId, parentRoute, from, to, price, departure, arrival, freeSpace, order);
    }


}


