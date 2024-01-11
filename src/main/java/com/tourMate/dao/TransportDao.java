package com.tourMate.dao;

import com.tourMate.dto.RouteListingDto;
import com.tourMate.dto.TransportDto;
import com.tourMate.entities.*;


import java.util.Collection;
import java.util.Date;
import java.util.List;

public interface TransportDao {

    public void createTransport(String transportName, String carBrand, String carType, int carManufacturedYear, int noPassengers, int noBags, long EMBG, User owner, String carPlate);

    public void deleteTransport(long transportId);

    public void editTransport(long transportID, String transportName, String carBrand, String carType, int carManufacturedYear, int noPassengers, int noBags, long EMBG, User owner, String carPlate);

    public List<Transport> getTransports();
    public List<TransportDto> getTransportsByUser(long userId);

    public List<RouteListingDto> getRoutesForTransport(long transportId);
    public Transport getTransportById(long transportId);
    public TransportDto findTransportById (long transportId);

    public void createTransportReservation(Transport transport, String departureLocation, String arrivalLocation, Date date, Integer noSeats, User user, Date departureHour);

    public void editTransportReservation(Transport transport, long reservationID, String departureLocation, String arrivalLocation, Date date, Integer noSeats, User user, Date departureHour);

    public void deleteTransportReservation(long reservationID);

    public TransportReservation findTransportReservationByID(long reservationID);

    public List<TransportReservation> getTransportReservations();

    public List<TransportReservation> getTransportsReservationsByUserID(long userID);

    public void createTransportAvailable(Transport transport, String departureLocation, String arrivalLocation, Date date, Integer noSeats, Date departureHour, Collection<TransportRoute> routes);

    public void editTransportAvailable(Transport transport, long availableID, String departureLocation, String arrivalLocation, Date date, Integer noSeats, Date departureHour);

    public void deleteTransportAvailable(long availableID);

    public TransportAvailible findTransportAvailableByID (long reservationID);

    public List<TransportAvailible> getTransportsAvailable();

    public List<TransportRoute> getTransportsAvailableByFilters (String from,String to,Date date);

    public void createTransportRoute(TransportAvailible parentRoute, String from, String to, double price, Date departure, Date arrival, int freeSpace, int order);

    public void deleteTransportRoute(long transportRouteId);

    public void editTransportRoute(long transportRouteId, TransportAvailible parentRoute, String from, String to, double price, Date departure, Date arrival, int freeSpace, int order);

    public TransportRoute findTransportRouteById(long transportRouteId);
}
