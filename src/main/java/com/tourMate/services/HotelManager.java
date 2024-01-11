package com.tourMate.services;

import com.tourMate.dto.HotelDto;
import com.tourMate.entities.*;

import java.util.Date;
import java.util.List;

public interface HotelManager {
    public void createHotel(String hotelName, String hotelDescripiton, String hotelLocation, String hotelEDBS, Boolean parking, Boolean petFriendly, Boolean internetAvailable);
    public void createHotel(Hotels hotel, long userId);
    public List<Hotels> getHotels();
    public List<Hotels> getHotelsForUser(long userId);
    public List<Hotels> getHotelsByLocation(String hotelLocation);
    public void editHotel(long hotelId, String hotelName, String hotelDescripiton, String hotelLocation, String hotelEDBS, Boolean parking, Boolean petFriendly, Boolean internetAvailable);
    public void deleteHotel(long hotelId);
    public Hotels findHotelByID (long hotelId);
    public List<HotelsImages> getHotelImages(Hotels hotels);
    public void addHotelImage(Hotels hotel, String url);
    public void deleteHotelImage(long hotelImageId);
    public HotelsImages findHotelImageById(long hotelImageId);
    public List<HotelRoom> getRoomsOfHotel (long hotelId);
    public HotelRoom findRoomById (long hotelRoomId);
    public List<HotelRoomImages> getRoomImages(HotelRoom hotelRoom);
    public void createRoom(Hotels hotel, String hotelRoomDescription, String hotelRoomName, Boolean kitchenAvailable, Boolean airConditioning, Boolean balcony, double price);
    public void editRoom(long hotelRoomId, Hotels hotel, String hotelRoomDescription, String hotelRoomName, Boolean kitchenAvailable, Boolean airConditioning, Boolean balcony, double price);
    public void deleteRoom(long hotelRoomId);
    public List<HotelRoomAvailable> getRoomsAvailable(Long id);
    public void createRoomAvailible(HotelRoom hotelRoom, Date dateFrom, Date dateTo, int numberOfBeds);
    public void editRoomAvailible(long hotelRoomAvailableId, HotelRoom hotelRoom, Date dateFrom, Date dateTo, int numberOfBeds);
    public void editRoomAvailibleReservation(Long HotelRoomAvailableId, Long hotelRoomId, Date from, Date to, int numberOfBeds);
    public void deleteRoomAvailible(long hotelRoomAvailableId);
    public HotelRoomAvailable findAvailibleRoomById(long hotelRoomAvailableId);
    public List<HotelRoomAvailable> getRoomsAvailibility();
    public List<HotelRoomAvailable> getRoomsAvailibilityByHotel(Hotels hotel);
    public List<HotelDto> getRoomsAvailibilityByDateAndLocation(String hotelLocation, Date dateFrom, Date dateTo, int numberOfBeds);
    public void createReservation(Long userId, Long hotelRoomId, Long hotelRoomAvailableId, Date dateFrom, Date dateTo, Integer numberOfBeds);
    public void editReservation(long hotelRoomReservedId, User user, HotelRoom hotelRoom, Date dateFrom, Date dateTo, Integer numberOfBeds);
    public void deleteReservation(long hotelRoomReservedId);
    public HotelRoomReservations findReservationById(long hotelRoomReservedId);
    public List<HotelRoomReservations> findReservationByUser(User user);
    public List<HotelRoomReservations> findReservationByHotel(Hotels hotel);
    public List<HotelRoomReservations> getReservations();

}
