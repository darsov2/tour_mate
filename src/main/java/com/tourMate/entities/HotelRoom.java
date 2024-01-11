package com.tourMate.entities;

import jakarta.persistence.*;
import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.validation.constraints.NotNull;

@Entity
@Table(name="hotel_rooms", schema = "public")
public class HotelRoom {
    private long hotelRoomId;
    @JsonIgnore
    private Hotels hotel;
    private String hotelRoomDescription;
    @Enumerated(EnumType.STRING)
    private String hotelRoomName;
    private double price;
    private Boolean kitchenAvailable;
    private Boolean airConditioning;
    private Boolean balcony;

    public HotelRoom(long hotelRoomId, Hotels hotel, String hotelRoomDescription, String hotelRoomName, double price, Boolean kitchenAvailable, Boolean airConditioning, Boolean balcony) {
        this.hotelRoomId = hotelRoomId;
        this.hotel = hotel;
        this.hotelRoomDescription = hotelRoomDescription;
        this.hotelRoomName = hotelRoomName;
        this.price = price;
        this.kitchenAvailable = kitchenAvailable;
        this.airConditioning = airConditioning;
        this.balcony = balcony;
    }

    public HotelRoom(Hotels hotel, String hotelRoomDescription, String type,
                     Boolean kitchenAvailable, Boolean airConditioning, Boolean balcony, double price) {
        this.hotel = hotel;
        this.hotelRoomDescription = hotelRoomDescription;
        this.hotelRoomName = type;
        this.kitchenAvailable = kitchenAvailable;
        this.airConditioning = airConditioning;
        this.balcony = balcony;
        this.price = price;
    }

    public HotelRoom(String hotelRoomDescription, String type,
                     Boolean kitchenAvailable, Boolean airConditioning, Boolean balcony, double price) {
        this.hotel = hotel;
        this.hotelRoomDescription = hotelRoomDescription;
        this.hotelRoomName = type;
        this.kitchenAvailable = kitchenAvailable;
        this.airConditioning = airConditioning;
        this.balcony = balcony;
        this.price = price;
    }

    public HotelRoom() {

    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "room_id",unique = true,nullable = false)
    public long getHotelRoomId() {
        return hotelRoomId;
    }

    public void setHotelRoomId(long hotelRoomId) {
        this.hotelRoomId = hotelRoomId;
    }

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "hotel_id", unique = false, nullable = false, foreignKey = @ForeignKey(name = "fk_ref_od_room_kon_hotel"))
    public Hotels getHotel() {
        return hotel;
    }

    public void setHotel(Hotels hotelId) {
        this.hotel = hotelId;
    }

    @Column(name="hotel_room_description",unique = false,nullable = false)
    @NotNull
    public String getHotelRoomDescription() {
        return hotelRoomDescription;
    }

    public void setHotelRoomDescription(String hotelRoomDescription) {
        this.hotelRoomDescription = hotelRoomDescription;
    }

    @Column(name="hotel_room_price",unique = false,nullable = false)
    @NotNull
    public double getPrice() {
        return price;
    }

    @Column(name="hotel_room_name",unique = false,nullable = false)
    @NotNull
    public String getHotelRoomName() {
        return hotelRoomName;
    }


    public void setHotelRoomName(String name) {
        this.hotelRoomName = name;
    }
    public void setPrice(double type) {
        this.price = type;
    }
    @Column(name="hotel_room_kitchen",unique = false,nullable = false)
    @NotNull
    public Boolean getKitchenAvailable() {
        return kitchenAvailable;
    }

    public void setKitchenAvailable(Boolean kitchenAvailable) {
        this.kitchenAvailable = kitchenAvailable;
    }
    @Column(name="hotel_room_ac",unique = false,nullable = false)
    @NotNull
    public Boolean getAirConditioning() {
        return airConditioning;
    }

    public void setAirConditioning(Boolean airConditioning) {
        this.airConditioning = airConditioning;
    }
    @Column(name="hotel_room_balcony",unique = false,nullable = false)
    @NotNull
    public Boolean getBalcony() {
        return balcony;
    }

    public void setBalcony(Boolean balcony) {
        this.balcony = balcony;
    }
}
