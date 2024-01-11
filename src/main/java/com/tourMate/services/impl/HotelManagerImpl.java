package com.tourMate.services.impl;

import com.tourMate.dao.HotelDao;
import com.tourMate.dao.UsersDao;
import com.tourMate.dto.HotelDto;
import com.tourMate.entities.*;
import com.tourMate.services.HotelManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.Duration;
import java.util.Collection;
import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
public class HotelManagerImpl implements HotelManager {

    @Autowired
    HotelDao hotelDao;
    @Autowired
    UsersDao usersDao;


    @Override
    public void createHotel(String hotelName, String hotelDescripiton, String hotelLocation, String hotelEDBS, Boolean parking, Boolean petFriendly, Boolean internetAvailable) {

    }

    @Override
    public void createHotel(Hotels hotels, long userId) {
        hotelDao.createHotel(hotels, userId);
    }


    @Override
    public List<Hotels> getHotels() {
        List<Hotels> hoteli = hotelDao.getHotels();
        return hotelDao.getHotels();
    }

    @Override
    public List<Hotels> getHotelsForUser(long userId) {
        return hotelDao.getHotelsForUser(userId);
    }

    @Override
    public List<Hotels> getHotelsByLocation(String hotelLocation) {
        return hotelDao.getHotelsByLocation(hotelLocation);
    }

    @Override
    public void editHotel(long hotelId, String hotelName, String hotelDescripiton, String hotelLocation, String hotelEDBS, Boolean parking, Boolean petFriendly, Boolean internetAvailable) {
        hotelDao.editHotel(hotelId, hotelName, hotelDescripiton, hotelLocation, hotelEDBS, parking, petFriendly, internetAvailable);
    }

    @Override
    public void deleteHotel(long hotelId) {
        hotelDao.deleteHotel(hotelId);
    }

    @Override
    public Hotels findHotelByID(long hotelId) {
      return hotelDao.findHotelByID(hotelId);
    }

    @Override
    public List<HotelsImages> getHotelImages(Hotels hotels) {
        return hotelDao.getHotelImages(hotels);
    }

    @Override
    public List<HotelRoom> getRoomsOfHotel(long hotelId) {
        return hotelDao.getRoomsOfHotel(hotelId);
    }

    @Override
    public HotelRoom findRoomById(long hotelRoomId) {
        return hotelDao.findRoomById(hotelRoomId);
    }

    @Override
    public List<HotelRoomImages> getRoomImages(HotelRoom hotelRoom) {
        return hotelDao.getRoomImages(hotelRoom);
    }

    @Override
    public void addHotelImage(Hotels hotel, String url)
    {
        hotelDao.addHotelImage(hotel, url);
    }

    @Override
    public void deleteHotelImage(long hotelImageId){
        hotelDao.deleteHotelImage(hotelImageId);
    }

    @Override
    public HotelsImages findHotelImageById(long hotelImageId) {
        return hotelDao.findHotelImageById(hotelImageId);
    }

    @Override
    public void createRoom(Hotels hotel, String hotelRoomDescription, String hotelRoomName, Boolean kitchenAvailable, Boolean airConditioning, Boolean balcony, double price) {
        hotelDao.createRoom(hotel, hotelRoomDescription, hotelRoomName, kitchenAvailable, airConditioning, balcony, price);
    }

    @Override
    public void editRoom(long hotelRoomId, Hotels hotel, String hotelRoomDescription, String hotelRoomName, Boolean kitchenAvailable, Boolean airConditioning, Boolean balcony, double price) {
        hotelDao.editRoom(hotelRoomId, hotel, hotelRoomDescription, hotelRoomName, kitchenAvailable, airConditioning, balcony, price);
    }

    @Override
    public void deleteRoom(long hotelRoomId) {
        hotelDao.deleteRoom(hotelRoomId);
    }

    @Override
    public List<HotelRoomAvailable> getRoomsAvailable(Long id) {
        return hotelDao.getRoomsAvailable(id);
    }

    @Override
    public void createRoomAvailible(HotelRoom hotelRoom, Date dateFrom, Date dateTo, int numberOfBeds) {
        hotelDao.createRoomAvailible(hotelRoom, dateFrom, dateTo, numberOfBeds);
    }

    @Override
    public void editRoomAvailible(long hotelRoomAvailableId, HotelRoom hotelRoom, Date dateFrom, Date dateTo, int numberOfBeds) {
        hotelDao.editRoomAvailible(hotelRoomAvailableId, hotelRoom, dateFrom, dateTo, numberOfBeds);
    }

    @Override
    public void editRoomAvailibleReservation(Long HotelRoomAvailableId, Long hotelRoomId, Date from, Date to, int numberOfBeds){
        HotelRoomAvailable roomAvailable = hotelDao.findAvailibleRoomById(HotelRoomAvailableId);
        roomAvailable.setNumberOfBeds(numberOfBeds-1);
        HotelRoom room = hotelDao.findRoomById(hotelRoomId);
        hotelDao.createRoomAvailible(room, roomAvailable.getDateFrom(), from, 1);
        hotelDao.createRoomAvailible(room, to, roomAvailable.getDateTo(), 1);
    }

    @Override
    public void deleteRoomAvailible(long hotelRoomAvailableId) {
        hotelDao.deleteRoomAvailible(hotelRoomAvailableId);
    }

    @Override
    public HotelRoomAvailable findAvailibleRoomById(long hotelRoomAvailableId) {
        return hotelDao.findAvailibleRoomById(hotelRoomAvailableId);
    }

    @Override
    public List<HotelRoomAvailable> getRoomsAvailibility() {
        return hotelDao.getRoomsAvailibility();
    }

    @Override
    public List<HotelRoomAvailable> getRoomsAvailibilityByHotel(Hotels hotel) {
       return hotelDao.getRoomsAvailibilityByHotel(hotel);
    }

    @Override
    public List<HotelDto> getRoomsAvailibilityByDateAndLocation(String hotelLocation, Date dateFrom, Date dateTo, int numberOfBeds) {
        long numberOfNights = Duration.between(dateFrom.toInstant(), dateTo.toInstant()).toDays();
        List<HotelRoomAvailable> roomsAvailible = hotelDao.getRoomsAvailibilityByDateAndLocation(hotelLocation, dateFrom, dateTo, numberOfBeds);
        Map<Hotels, List<HotelRoomAvailable>> roomsByHotels = roomsAvailible.stream().collect(Collectors.groupingBy(x -> x.getHotelRoom().getHotel()));
        List<HotelDto> hotelsList = roomsByHotels.keySet().stream()
                .map(x -> new HotelDto(
                        x.getHotelId(),
                        x.getHotelName(),
                        x.getHotelDescripiton(),
                        x.getHotelLocation(),
                        x.getHotelEDBS(),
                        x.getParking(),
                        x.getPetFriendly(),
                        x.getInternetAvailable(),
                        roomsByHotels.get(x).stream().mapToDouble(y -> y.getHotelRoom().getPrice()).min().getAsDouble() * numberOfNights,
                        roomsByHotels.get(x)
                )).toList();
        return hotelsList;
        //return hotelDao.getRoomsAvailibilityByDateAndLocation(hotelLocation, dateFrom, dateTo, numberOfBeds);
    }

    @Override
    public void createReservation(Long userId, Long hotelRoomId, Long hotelRoomAvailableId, Date dateFrom, Date dateTo, Integer numberOfBeds) {
        HotelRoom room = hotelDao.findRoomById(hotelRoomId);
        User user = usersDao.findUserByID(userId);
        hotelDao.createReservation(user, room, dateFrom, dateTo, numberOfBeds);
        editRoomAvailibleReservation(hotelRoomAvailableId, hotelRoomId, dateFrom, dateTo, numberOfBeds);
    }

    @Override
    public void editReservation(long hotelRoomReservedId, User user, HotelRoom hotelRoom, Date dateFrom, Date dateTo, Integer numberOfBeds) {
        hotelDao.editReservation(hotelRoomReservedId, user, hotelRoom, dateFrom, dateTo, numberOfBeds);
    }

    @Override
    public void deleteReservation(long hotelRoomReservedId) {
        hotelDao.deleteReservation(hotelRoomReservedId);
    }

    @Override
    public HotelRoomReservations findReservationById(long hotelRoomReservedId) {
        return hotelDao.findReservationById(hotelRoomReservedId);
    }

    @Override
    public List<HotelRoomReservations> findReservationByUser(User user) {
        return hotelDao.findReservationByUser(user);
    }

    @Override
    public List<HotelRoomReservations> findReservationByHotel(Hotels hotel) {
        return hotelDao.findReservationByHotel(hotel);
    }

    @Override
    public List<HotelRoomReservations> getReservations() {
        return hotelDao.getReservations();
    }
}
