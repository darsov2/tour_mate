package com.tourMate.entities;

import jakarta.persistence.*;

import javax.validation.constraints.NotNull;
import java.util.Date;

@Entity
@Table(name= "HotelRoomsReserved", schema = "public")
public class HotelRoomReservations {
    private long hotelRoomReservedId;
    private User user;
    private HotelRoom hotelRoom;
    @Temporal(TemporalType.DATE)
    private Date dateFrom;
    @Temporal(TemporalType.DATE)
    private Date dateTo;
    private Integer numberOfBeds;

    public HotelRoomReservations(User user, HotelRoom hotelRoom, Date dateFrom, Date dateTo, Integer numberOfBeds) {
        this.user = user;
        this.hotelRoom = hotelRoom;
        this.dateFrom = dateFrom;
        this.dateTo = dateTo;
        this.numberOfBeds = numberOfBeds;
    }

    public HotelRoomReservations() {

    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="hotel_room_reserved_id", unique = true,nullable = false)
    public long getHotelRoomReservedId() {
        return hotelRoomReservedId;
    }

    public void setHotelRoomReservedId(long hotelRoomAvailableId) {
        this.hotelRoomReservedId = hotelRoomAvailableId;
    }

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "room_id", unique = false, nullable = false, foreignKey = @ForeignKey(name = "fk_ref_od_roomres_kon_room"))
    public HotelRoom getHotelRoom() {
        return hotelRoom;
    }

    public void setHotelRoom(HotelRoom hotelRoomId) {
        this.hotelRoom = hotelRoomId;
    }

    @Column(name="date_from", unique = false, nullable = false)
    @NotNull
    public Date getDateFrom() {
        return dateFrom;
    }

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", unique = false, nullable = false, foreignKey = @ForeignKey(name = "fk_ref_od_roomres_kon_user"))
    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public void setDateFrom(Date dateFrom) {
        this.dateFrom = dateFrom;
    }
    @Column(name="date_to", unique = false, nullable = false)
    @NotNull
    public Date getDateTo() {
        return dateTo;
    }

    public void setDateTo(Date dateTo) {
        this.dateTo = dateTo;
    }

    @Column(name="number_of_beds", unique = false, nullable = false)
    @NotNull
    public Integer getNumberOfBeds() {
        return numberOfBeds;
    }

    public void setNumberOfBeds(Integer numberOfBeds) {
        this.numberOfBeds = numberOfBeds;
    }
}

