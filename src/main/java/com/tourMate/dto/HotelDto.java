package com.tourMate.dto;

import com.tourMate.entities.HotelRoom;
import com.tourMate.entities.HotelRoomAvailable;
import com.tourMate.entities.User;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

public class HotelDto {
    private long hotelId;
    private String hotelName;
    private String hotelDescripiton;
    private String hotelLocation;
    private String hotelEDBS;
    private Boolean parking;
    private Boolean petFriendly;
    private Boolean internetAvailable;
    private double totalPrice;
    private List<HotelRoomAvailable> hotelRooms;

    public HotelDto(long hotelId, String hotelName, String hotelDescripiton, String hotelLocation, String hotelEDBS, Boolean parking, Boolean petFriendly, Boolean internetAvailable, double totalPrice, List<HotelRoomAvailable> hotelRooms) {
        this.hotelId = hotelId;
        this.hotelName = hotelName;
        this.hotelDescripiton = hotelDescripiton;
        this.hotelLocation = hotelLocation;
        this.hotelEDBS = hotelEDBS;
        this.parking = parking;
        this.petFriendly = petFriendly;
        this.internetAvailable = internetAvailable;
        this.totalPrice = totalPrice;
        this.hotelRooms = hotelRooms;
    }

    public long getHotelId() {
        return hotelId;
    }

    public void setHotelId(long hotelId) {
        this.hotelId = hotelId;
    }

    public String getHotelName() {
        return hotelName;
    }

    public void setHotelName(String hotelName) {
        this.hotelName = hotelName;
    }

    public String getHotelDescripiton() {
        return hotelDescripiton;
    }

    public void setHotelDescripiton(String hotelDescripiton) {
        this.hotelDescripiton = hotelDescripiton;
    }

    public String getHotelLocation() {
        return hotelLocation;
    }

    public void setHotelLocation(String hotelLocation) {
        this.hotelLocation = hotelLocation;
    }

    public String getHotelEDBS() {
        return hotelEDBS;
    }

    public void setHotelEDBS(String hotelEDBS) {
        this.hotelEDBS = hotelEDBS;
    }

    public Boolean getParking() {
        return parking;
    }

    public void setParking(Boolean parking) {
        this.parking = parking;
    }

    public Boolean getPetFriendly() {
        return petFriendly;
    }

    public void setPetFriendly(Boolean petFriendly) {
        this.petFriendly = petFriendly;
    }

    public Boolean getInternetAvailable() {
        return internetAvailable;
    }

    public void setInternetAvailable(Boolean internetAvailable) {
        this.internetAvailable = internetAvailable;
    }

    public double getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(double totalPrice) {
        this.totalPrice = totalPrice;
    }

    public List<HotelRoomAvailable> getHotelRooms() {
        return hotelRooms;
    }

    public void setHotelRooms(List<HotelRoomAvailable> hotelRooms) {
        this.hotelRooms = hotelRooms;
    }
}
