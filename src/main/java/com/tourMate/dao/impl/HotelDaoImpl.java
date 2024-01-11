package com.tourMate.dao.impl;

import com.tourMate.dao.HotelDao;
import com.tourMate.entities.*;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class HotelDaoImpl implements HotelDao {

    @PersistenceContext
    EntityManager em;

    @Override
    @Transactional
    public void createHotel(Hotels hotel, long userId) {
        User u = em.find(User.class, userId);
        Hotels h = new Hotels(hotel.getHotelName(), hotel.getHotelDescripiton(), hotel.getHotelLocation(), hotel.getHotelEDBS(), hotel.getParking(), hotel.getPetFriendly(), hotel.getInternetAvailable(), u);
        em.persist(h);
    }

    @Override
    public List<Hotels> getHotels() {
        List<Hotels> hoteli = em.createQuery("select h from Hotels h order by h.hotelId").getResultList();
        System.out.println("OREEEEEEL");
        return hoteli;
        //return em.createQuery("select h from Hotels h order by h.hotelId").getResultList();
    }

    @Override
    public List<Hotels> getHotelsForUser(long userId) {
        User u = em.find(User.class, userId);
        return em.createQuery("select h from Hotels h where h.owner = :u").setParameter("u", u).getResultList();
    }

    @Override
    public List<Hotels> getHotelsByLocation(String hotelLocation) {
        return em.createQuery("select h from Hotels h where h.hotelLocation = hotelLocation").getResultList();
    }

    @Transactional
    @Override
    public void editHotel(long hotelId, String hotelName, String hotelDescripiton, String hotelLocation, String hotelEDBS, Boolean parking, Boolean petFriendly, Boolean internetAvailable) {
        Hotels hotel = findHotelByID(hotelId);
        hotel.setHotelName(hotelName);
        hotel.setHotelDescripiton(hotelDescripiton);
        hotel.setHotelLocation(hotelLocation);
        hotel.setHotelEDBS(hotelEDBS);
        hotel.setParking(parking);
        hotel.setPetFriendly(petFriendly);
        hotel.setInternetAvailable(internetAvailable);
        em.persist(hotel);
    }

    @Transactional
    @Override
    public void deleteHotel(long hotelId) {
        Hotels h = findHotelByID(hotelId);
        em.remove(h);
    }

    @Override
    public Hotels findHotelByID(long hotelId) {
        return em.find(Hotels.class, hotelId);
    }

    @Override
    public List<HotelsImages> getHotelImages(Hotels hotel) {
        return em.createQuery("select hi from HotelsImages hi where hi.hotel = :hotel").setParameter("hotel", hotel).getResultList();
    }

    @Override
    @Transactional
    public void addHotelImage(Hotels hotel, String url)
    {
        HotelsImages hotelsImages = new HotelsImages(hotel, url);
        em.persist(hotelsImages);
    }

    @Override
    @Transactional
    public HotelsImages findHotelImageById(long hotelImageId){
        return em.find(HotelsImages.class, hotelImageId);
    }

    @Override
    @Transactional
    public void deleteHotelImage(long hotelImageId){
        HotelsImages hotelsImages = findHotelImageById(hotelImageId);
        em.remove(hotelsImages);
    }

    @Override
    public List<HotelRoom> getRoomsOfHotel(long hotelId) {
        Hotels h = findHotelByID(hotelId);
        return em.createQuery("SELECT hr from HotelRoom hr where hr.hotel = :hotel").setParameter("hotel", h).getResultList();
    }

    @Override
    public List<HotelRoomAvailable> getRoomsAvailable(Long id) {
        return em.createQuery("SELECT hra from HotelRoomAvailable hra WHERE hra.hotelRoom.id = :hotelRoomId").setParameter("hotelRoomId", id).getResultList();
    }

    @Override
    public HotelRoom findRoomById(long hotelRoomId) {
        return em.find(HotelRoom.class, hotelRoomId);
    }

    @Override
    public List<HotelRoomImages> getRoomImages(HotelRoom hotelRoom) {
        return em.createQuery("select i.url from HotelRoomImages i where i.room = :hotelRoom").setParameter("hotelRoom", hotelRoom).getResultList();
    }

    @Transactional
    @Override
    public void createRoom(Hotels hotel, String hotelRoomDescription, String hotelRoomName, Boolean kitchenAvailable, Boolean airConditioning, Boolean balcony, double price) {
        HotelRoom hotelRoom = new HotelRoom(hotel, hotelRoomDescription, hotelRoomName, kitchenAvailable, airConditioning, balcony, price);
        em.persist(hotelRoom);
    }

    @Transactional
    @Override
    public void editRoom(long hotelRoomId, Hotels hotel, String hotelRoomDescription, String hotelRoomName, Boolean kitchenAvailable, Boolean airConditioning, Boolean balcony, double price) {
        HotelRoom hr = findRoomById(hotelRoomId);
        hr.setHotel(hotel);
        hr.setHotelRoomDescription(hotelRoomDescription);
        hr.setHotelRoomName(hotelRoomName);
        hr.setKitchenAvailable(kitchenAvailable);
        hr.setAirConditioning(airConditioning);
        hr.setBalcony(balcony);
        hr.setPrice(price);
        em.persist(hr);
    }

    @Transactional
    @Override
    public void deleteRoom(long hotelRoomId) {
        HotelRoom hr = findRoomById(hotelRoomId);
        em.remove(hr);
    }

    @Transactional
    @Override
    public void createRoomAvailible(HotelRoom hotelRoom, Date dateFrom, Date dateTo, int numberOfBeds) {
        HotelRoomAvailable hra = new HotelRoomAvailable(hotelRoom, dateFrom, dateTo, numberOfBeds);
        em.persist(hra);
    }

    @Transactional
    @Override
    public void editRoomAvailible(long hotelRoomAvailableId, HotelRoom hotelRoom, Date dateFrom, Date dateTo, int numberOfBeds) {
        HotelRoomAvailable hr = findAvailibleRoomById(hotelRoomAvailableId);
        hr.setHotelRoom(hotelRoom);
        hr.setDateFrom(dateFrom);
        hr.setDateTo(dateTo);
        hr.setNumberOfBeds(numberOfBeds);
        em.persist(hr);
    }

    @Transactional
    @Override
    public void deleteRoomAvailible(long hotelRoomAvailableId) {
        HotelRoomAvailable hra = findAvailibleRoomById(hotelRoomAvailableId);
        em.remove(hra);
    }

    @Override
    public HotelRoomAvailable findAvailibleRoomById(long hotelRoomAvailableId) {
        return em.find(HotelRoomAvailable.class, hotelRoomAvailableId);
    }

    @Override
    public List<HotelRoomAvailable> getRoomsAvailibility() {
        return em.createQuery("select hra from HotelRoomAvailable hra").getResultList();
    }

    @Override
    public List<HotelRoomAvailable> getRoomsAvailibilityByHotel(Hotels hotel) {
        return em.createQuery("select hr from HotelRoomAvailable hr where hr.hotelRoom.hotel = :hotel").setParameter("hotel", hotel).getResultList();
    }

    @Override
    public List<HotelRoomAvailable> getRoomsAvailibilityByDateAndLocation(String hotelLocation, Date dateFrom, Date dateTo, int numberOfBeds) {
        return em.createQuery("select hr from HotelRoomAvailable hr where hr.dateFrom <= :dateFrom and hr.dateTo >= :dateTo " +
                "and hr.hotelRoom.hotel.hotelLocation LIKE :hotelLocation and hr.numberOfBeds >= :numBeds")
                .setParameter("hotelLocation", hotelLocation)
                .setParameter("dateFrom", dateFrom)
                .setParameter("dateTo", dateTo)
                .setParameter("numBeds", numberOfBeds)
                .getResultList();
    }

    @Override
    @Transactional
    public void createReservation(User user, HotelRoom hotelRoom, Date dateFrom, Date dateTo, Integer numberOfBeds) {
        HotelRoomReservations r = new HotelRoomReservations(user, hotelRoom, dateFrom, dateTo, numberOfBeds);
        em.persist(r);
    }

    @Override
    @Transactional
    public void editReservation(long hotelRoomReservedId, User user, HotelRoom hotelRoom, Date dateFrom, Date dateTo, Integer numberOfBeds) {
        HotelRoomReservations hr = findReservationById(hotelRoomReservedId);
        hr.setUser(user);
        hr.setHotelRoom(hotelRoom);
        hr.setDateFrom(dateFrom);
        hr.setDateTo(dateTo);
        hr.setNumberOfBeds(numberOfBeds);
        em.persist(hr);

    }

    @Transactional
    @Override
    public void deleteReservation(long hotelRoomReservedId) {
        HotelRoomReservations r = findReservationById(hotelRoomReservedId);
        em.remove(hotelRoomReservedId);
    }

    @Override
    public HotelRoomReservations findReservationById(long hotelRoomReservedId) {
        return em.find(HotelRoomReservations.class, hotelRoomReservedId);
    }

    @Override
    public List<HotelRoomReservations> findReservationByUser(User user) {
        return em.createQuery("select hr from HotelRoomReservations hr where hr.user = :user").setParameter("user", user).getResultList();
    }

    @Override
    public List<HotelRoomReservations> findReservationByHotel(Hotels hotel) {
        List<HotelRoom> hotelRooms = getRoomsOfHotel(hotel.getHotelId());
        return em.createQuery("select hr from HotelRoomReservations hr where hr.hotelRoom in :hotelRooms").setParameter("hotelRooms", hotelRooms).getResultList();
    }

    @Override
    public List<HotelRoomReservations> getReservations() {
        return em.createQuery("select hr from HotelRoomReservations hr order by hr.user.name").getResultList();
    }
}