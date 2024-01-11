package com.tourMate.entities;

import jakarta.persistence.*;

import javax.validation.constraints.NotNull;
import java.util.Date;

@Entity
@Table(name= "HotelRoomsAvailable", schema = "public")
public class HotelRoomAvailable {
    private long hotelRoomAvailableId;
    private HotelRoom hotelRoom;
    @Temporal(TemporalType.DATE)
    private Date dateFrom;
    @Temporal(TemporalType.DATE)
    private Date dateTo;
    private Integer numberOfBeds;

    public HotelRoomAvailable(HotelRoom hotelRoom, Date dateFrom, Date dateTo, Integer numberOfBeds) {
        this.hotelRoom = hotelRoom;
        this.dateFrom = dateFrom;
        this.dateTo = dateTo;
        this.numberOfBeds = numberOfBeds;
    }

    public HotelRoomAvailable(Date dateFrom, Date dateTo, Integer numberOfBeds) {
        this.dateFrom = dateFrom;
        this.dateTo = dateTo;
        this.numberOfBeds = numberOfBeds;
    }


    public HotelRoomAvailable() {
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="hotel_room_available_id", unique = true,nullable = false)
    public long getHotelRoomAvailableId() {
        return hotelRoomAvailableId;
    }

    public void setHotelRoomAvailableId(long hotelRoomAvailableId) {
        this.hotelRoomAvailableId = hotelRoomAvailableId;
    }

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "room_id", unique = false, nullable = false, foreignKey = @ForeignKey(name = "fk_ref_od_roomavailable_kon_room"))
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
