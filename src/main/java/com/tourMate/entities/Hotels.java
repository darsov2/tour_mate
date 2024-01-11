package com.tourMate.entities;

import jakarta.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.ArrayList;
import java.util.Collection;

@Entity
@Table(name = "hotels",schema = "public")
public class Hotels {
    private long hotelId;
    private String hotelName;
    private String hotelDescripiton;
    private String hotelLocation;
    private String hotelEDBS;
    private Boolean parking;
    private Boolean petFriendly;
    private Boolean internetAvailable;
    private User owner;
    private Collection<HotelRoom> hotelRooms = new ArrayList<>();

    public Hotels(String hotelName, String hotelDescripiton, String hotelLocation, String hotelEDBS, Boolean parking, Boolean petFriendly, Boolean internetAvailable, User ownerId) {
        this.hotelName = hotelName;
        this.hotelDescripiton = hotelDescripiton;
        this.hotelLocation = hotelLocation;
        this.hotelEDBS = hotelEDBS;
        this.parking = parking;
        this.petFriendly = petFriendly;
        this.internetAvailable = internetAvailable;
        this.owner = ownerId;
    }

    public Hotels() {
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "hotel_id", unique = true, nullable = false)
    public long getHotelId(){return hotelId;}

    public void setHotelId(long hotelId){this.hotelId=hotelId;}

    @Column(name="hotel_name",unique = false,nullable = false)
    @NotNull
    public String getHotelName() {
        return hotelName;
    }

    public void setHotelName(String hotelName) {
        this.hotelName = hotelName;
    }

    @Column(name="hotel_description",unique = false,nullable = false)
    @NotNull
    public String getHotelDescripiton() {
        return hotelDescripiton;
    }

    public void setHotelDescripiton(String hotelDescripiton) {
        this.hotelDescripiton = hotelDescripiton;
    }

    @Column(name="hotel_location",unique = false,nullable = false)
    @NotNull
    public String getHotelLocation() {
        return hotelLocation;
    }

    public void setHotelLocation(String hotelLocation) {
        this.hotelLocation = hotelLocation;
    }

    @Column(name="hotel_edbs",unique = true,nullable = false)
    @NotNull
    public String getHotelEDBS() {
        return hotelEDBS;
    }

    public void setHotelEDBS(String hotelEDBS) {
        this.hotelEDBS = hotelEDBS;
    }

    @Column(name="hotel_parking",unique = false,nullable = false)
    @NotNull
    public Boolean getParking() {
        return parking;
    }

    public void setParking(Boolean parking) {
        this.parking = parking;
    }

    @Column(name="hotel_petfriendly",unique = false,nullable = false)
    @NotNull
    public Boolean getPetFriendly() {
        return petFriendly;
    }

    public void setPetFriendly(Boolean petFriendly) {
        this.petFriendly = petFriendly;
    }
    @Column(name="hotel_internet",unique = false, nullable = false)
    @NotNull
    public Boolean getInternetAvailable() {
        return internetAvailable;
    }

    public void setInternetAvailable(Boolean internetAvailable) {
        this.internetAvailable = internetAvailable;
    }

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER, mappedBy = "hotel")
    public Collection<HotelRoom> getHotelRooms() {
        return hotelRooms;
    }

    public void setHotelRooms(Collection<HotelRoom> hotelRooms) {
        this.hotelRooms = hotelRooms;
    }

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "owner_id", unique = false, nullable = false, foreignKey = @ForeignKey(name = "fk_ref_od_hotel_kon_user"))
    public User getOwner() {
        return owner;
    }

    public void setOwner(User ownerId) {
        this.owner = ownerId;
    }
}