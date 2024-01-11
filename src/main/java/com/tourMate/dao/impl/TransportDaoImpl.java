package com.tourMate.dao.impl;

import com.tourMate.dao.TransportDao;
import com.tourMate.dto.RouteListingDto;
import com.tourMate.dto.TransportDto;
import com.tourMate.entities.*;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.Date;
import java.util.List;

@Service
public class TransportDaoImpl implements TransportDao {

    @PersistenceContext
    private EntityManager em;

    @Override
    @Transactional
    public void createTransport(String transportName, String carBrand, String carType, int carManufacturedYear, int noPassengers, int noBags, long EMBG, User owner, String carPlate) {
        User u = em.find(User.class, 1);
        Transport t=new Transport(transportName,carBrand,carType,carManufacturedYear,noPassengers,noBags,EMBG,u,carPlate);
        em.persist(t);
    }

    @Override
    @Transactional
    public void deleteTransport(long transportId) {
        Transport t=getTransportById(transportId);
        em.remove(t);
    }

    @Override
    public List<Transport> getTransports() {
        return em.createQuery("from Transport order by transportID").getResultList();
    }

    @Override
    public List<TransportDto> getTransportsByUser(long userId) {
        User u = em.find(User.class, userId);
        List<Transport> transports = em.createQuery("select t from Transport t where t.owner = :u").setParameter("u", u).getResultList();
        return transports.stream().map(x -> new TransportDto(
                x.getTransportID(),
                x.getTransportName(),
                x.getCarBrand(),
                x.getCarType(),
                x.getCarManufacturedYear(),
                x.getNoPassengers(),
                x.getNoBags(),
                x.getEMBG(),
                x.getOwner(),
                x.getCarPlate(),
                x.getAvailableRoutes().stream().map(y -> new RouteListingDto(
                        y.getTransportAvailibleId(),
                        y.getFrom(),
                        y.getTo(),
                        y.getDate(),
                        y.getFreeSpace(),
                        y.getTime(),
                        y.getRoutes()
                )).toList()
        )).toList();
    }

    @Override
    public List<RouteListingDto> getRoutesForTransport(long transportId) {
        Transport t = em.find(Transport.class, transportId);
        List<TransportAvailible> transportsAvailible = em.createQuery("select ta from TransportAvailible ta where ta.transport = :transport").setParameter("transport", t).getResultList();
        return transportsAvailible.stream().map(x -> new RouteListingDto(
                x.getTransportAvailibleId(),
                x.getFrom(),
                x.getTo(),
                x.getDate(),
                x.getFreeSpace(),
                x.getTime(),
                x.getRoutes()
        )).toList();
    }

    @Override
    public TransportDto findTransportById(long transportId) {
        Transport x = em.find(Transport.class,transportId);
        return new TransportDto(
                x.getTransportID(),
                x.getTransportName(),
                x.getCarBrand(),
                x.getCarType(),
                x.getCarManufacturedYear(),
                x.getNoPassengers(),
                x.getNoBags(),
                x.getEMBG(),
                x.getOwner(),
                x.getCarPlate(),
                x.getAvailableRoutes().stream().map(y -> new RouteListingDto(
                        y.getTransportAvailibleId(),
                        y.getFrom(),
                        y.getTo(),
                        y.getDate(),
                        y.getFreeSpace(),
                        y.getTime(),
                        y.getRoutes()
                )).toList());
    }

    public Transport getTransportById(long transportId)
    {
        return em.find(Transport.class, transportId);
    }

    @Override
    @Transactional
    public void editTransport(long transportID, String transportName, String carBrand, String carType, int carManufacturedYear, int noPassengers, int noBags, long EMBG, User owner, String carPlate) {
        Transport t=getTransportById(transportID);
        t.setTransportName(transportName);
        t.setCarBrand(carBrand);
        t.setCarType(carType);
        t.setCarManufacturedYear(carManufacturedYear);
        t.setNoPassengers(noPassengers);
        t.setNoBags(noBags);
        t.setEMBG(EMBG);
        t.setOwner(owner);
        t.setCarPlate(carPlate);
        em.persist(t);
    }

    @Override
    @Transactional
    public void createTransportReservation(Transport transport, String departureLocation, String arrivalLocation, Date date, Integer noSeats, User user, Date departureHour) {
        TransportReservation tr=new TransportReservation(transport,departureLocation,arrivalLocation,date,noSeats,user,departureHour);
        em.persist(tr);
    }

    @Override
    public TransportReservation findTransportReservationByID(long reservationID) {
        return em.find(TransportReservation.class,reservationID);
    }

    @Override
    public List<TransportReservation> getTransportReservations() {
        return em.createQuery("from TransportReservation order by reservationID").getResultList();
    }

    @Override
    public TransportAvailible findTransportAvailableByID(long reservationID) {
        return em.find(TransportAvailible.class,reservationID);
    }

    @Override
    public List<TransportRoute> getTransportsAvailableByFilters(String fromL, String toL, Date date) {
        System.out.println(fromL + " " + toL);
        return em.createQuery("select h from TransportRoute h where h.from = :froml and h.to = :tol").setParameter("froml", fromL).
                setParameter("tol", toL).getResultList();
    }

    @Override
    public List<TransportReservation> getTransportsReservationsByUserID(long userID) {
        return null;
    }

    @Override
    public List<TransportAvailible> getTransportsAvailable() {
        return em.createQuery("from TransportAvailible order by transportAvailibleId").getResultList();
    }

    @Override
    @Transactional
    public void createTransportAvailable(Transport transport, String departureLocation, String arrivalLocation, Date date, Integer noSeats, Date departureHour, Collection<TransportRoute> routes) {
        TransportAvailible ta=new TransportAvailible(transport,departureLocation,arrivalLocation,date,noSeats,departureHour);
        em.persist(ta);
        List<TransportRoute> routes1 = routes.stream().toList();
        routes.forEach(x -> {
            createTransportRoute(ta, x.getFrom(), x.getTo(), x.getPrice(), x.getDeparture(), x.getArrival(), x.getFreeSpace(), x.getOrder());
        });
    }

    @Override
    @Transactional
    public void editTransportReservation(Transport transport, long reservationID, String departureLocation, String arrivalLocation, Date date, Integer noSeats, User user, Date departureHour)
    {
        TransportReservation tr=findTransportReservationByID(reservationID);
        tr.setTransport(transport);
        tr.setDepartureLocation(departureLocation);
        tr.setArrivalLocation(arrivalLocation);
        tr.setDate(date);
        tr.setNoSeats(noSeats);
        tr.setUser(user);
        tr.setDepartureHour(departureHour);
        em.persist(tr);
    }

    @Override
    public void editTransportAvailable(Transport transport, long availableID, String departureLocation, String arrivalLocation, Date date, Integer noSeats, Date departureHour) {
        TransportAvailible ta=findTransportAvailableByID(availableID);
        ta.setTransport(transport);
        ta.setFrom(departureLocation);
        ta.setTo(arrivalLocation);
        ta.setDate(date);
        ta.setFreeSpace(noSeats);
        ta.setTime(departureHour);
        em.persist(ta);
    }

    @Override
    public TransportRoute findTransportRouteById(long transportRouteId){
        return em.find(TransportRoute.class, transportRouteId);
    }

    @Override
    @Transactional
    public void deleteTransportReservation(long reservationID) {
        TransportReservation tr=findTransportReservationByID(reservationID);
        em.remove(tr);
    }

    @Override
    @Transactional
    public void deleteTransportAvailable(long availableID) {
        TransportAvailible ta=findTransportAvailableByID(availableID);
        em.remove(ta);
    }

    @Override
    public void createTransportRoute(TransportAvailible parentRoute, String from, String to, double price, Date departure, Date arrival, int freeSpace, int order) {
        TransportRoute tr = new TransportRoute(parentRoute, from, to, price, departure, arrival, freeSpace, order);
        em.persist(tr);
    }

    @Override
    public void deleteTransportRoute(long transportRouteId) {
        TransportRoute tr = findTransportRouteById(transportRouteId);
        em.remove(tr);
    }

    @Override
    public void editTransportRoute(long transportRouteId, TransportAvailible parentRoute, String from, String to, double price, Date departure, Date arrival, int freeSpace, int order) {
        TransportRoute tr = findTransportRouteById(transportRouteId);
        tr.setParentRoute(parentRoute);
        tr.setFrom(from);
        tr.setTo(to);
        tr.setPrice(price);
        tr.setDeparture(departure);
        tr.setArrival(arrival);
        tr.setFreeSpace(freeSpace);
        tr.setOrder(order);
        em.persist(tr);

    }
}
