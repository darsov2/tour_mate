package com.tourMate.dao;


import com.tourMate.entities.*;
import jakarta.transaction.Transactional;

import java.util.Date;
import java.util.List;

public interface HotelDao {
    public void createHotel(Hotels hotel, long userId);
    public void editHotel(long hotelId, String hotelName, String hotelDescripiton, String hotelLocation, String hotelEDBS, Boolean parking, Boolean petFriendly, Boolean internetAvailable);
    public void deleteHotel(long hotelId);
    public Hotels findHotelByID (long hotelId);
    public List<Hotels> getHotels();
    public List<Hotels> getHotelsForUser(long userId);
    public List<Hotels> getHotelsByLocation(String hotelLocation);

    public void addHotelImage(Hotels hotel, String url);
    public void deleteHotelImage(long hotelImageId);
    public HotelsImages findHotelImageById(long hotelImageId);
    public List<HotelsImages> getHotelImages(Hotels hotels);
    public List<HotelRoomImages> getRoomImages(HotelRoom hotelRoom);

    public void createRoom(Hotels hotel, String hotelRoomDescription, String hotelRoomName, Boolean kitchenAvailable, Boolean airConditioning, Boolean balcony, double price);
    public void editRoom(long hotelRoomId, Hotels hotel, String hotelRoomDescription, String HotelRoomName, Boolean kitchenAvailable, Boolean airConditioning, Boolean balcony, double price);
    public void deleteRoom(long hotelRoomId);
    public HotelRoom findRoomById (long hotelRoomId);
    public List<HotelRoom> getRoomsOfHotel (long hotelId);
    public List<HotelRoomAvailable> getRoomsAvailable(Long id);

    @Transactional
    public void createRoomAvailible(HotelRoom hotelRoom, Date dateFrom, Date dateTo, int numberOfBeds);
    public void editRoomAvailible(long hotelRoomAvailableId, HotelRoom hotelRoom, Date dateFrom, Date dateTo, int numberOfBeds);
    public void deleteRoomAvailible(long hotelRoomAvailableId);
    public HotelRoomAvailable findAvailibleRoomById(long hotelRoomAvailableId);
    public List<HotelRoomAvailable> getRoomsAvailibility();
    public List<HotelRoomAvailable> getRoomsAvailibilityByHotel(Hotels hotel);
    public List<HotelRoomAvailable> getRoomsAvailibilityByDateAndLocation(String hotelLocation, Date dateFrom, Date dateTo, int numberOfBeds);

    public void createReservation(User user, HotelRoom hotelRoom, Date dateFrom, Date dateTo, Integer numberOfBeds);
    public void editReservation(long hotelRoomReservedId, User user, HotelRoom hotelRoom, Date dateFrom, Date dateTo, Integer numberOfBeds);
    public void deleteReservation(long hotelRoomReservedId);
    public HotelRoomReservations findReservationById(long hotelRoomReservedId);
    public List<HotelRoomReservations> findReservationByUser(User user);
    public List<HotelRoomReservations> findReservationByHotel(Hotels hotel);
    public List<HotelRoomReservations> getReservations();

}
