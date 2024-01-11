package com.tourMate.entities;

import jakarta.persistence.*;
import org.jetbrains.annotations.NotNull;

import java.util.Date;

@Entity
@Table(name = "TransportReservation", schema = "public")
public class TransportReservation {
    private Transport transport;
    private long reservationID;
    private String departureLocation;
    private String arrivalLocation;
    @Temporal(TemporalType.DATE)
    private Date date;
    private Integer noSeats;
    private User user;
    @Temporal(TemporalType.TIME)
    private Date departureHour;

    public TransportReservation(Transport transport, String departureLocation, String arrivalLocation, Date date, Integer noSeats, User user, Date departureHour) {
        this.transport = transport;
        this.departureLocation = departureLocation;
        this.arrivalLocation = arrivalLocation;
        this.date = date;
        this.noSeats = noSeats;
        this.user = user;
        this.departureHour = departureHour;
    }

    public TransportReservation() {
    }

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "transport_id", unique = false, nullable = false, foreignKey = @ForeignKey(name = "fk_ref_od_rezervacii_kon_prevozi"))
    public Transport getTransport() {
        return transport;
    }

    public void setTransport(Transport transport) {
        this.transport = transport;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "transport_reservation_id", unique = true, nullable = false)
    public long getReservationID() {
        return reservationID;
    }

    public void setReservationID(long reservationID) {
        this.reservationID = reservationID;
    }

    @Column(name = "departure_location", unique = false, nullable = false)
    @NotNull
    public String getDepartureLocation() {
        return departureLocation;
    }

    public void setDepartureLocation(String departureLocation) {
        this.departureLocation = departureLocation;
    }

    @Column(name = "arrival_location", unique = false, nullable = false)
    @NotNull
    public String getArrivalLocation() {
        return arrivalLocation;
    }

    public void setArrivalLocation(String arrivalLocation) {
        this.arrivalLocation = arrivalLocation;
    }

    @Column(name = "date", unique = false, nullable = false)
    @NotNull
    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    @Column(name = "no_seats", unique = false, nullable = false)
    @NotNull
    public int getNoSeats() {
        return noSeats;
    }

    public void setNoSeats(int noSeats) {
        this.noSeats = noSeats;
    }

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", unique = false, nullable = false, foreignKey = @ForeignKey(name = "fk_ref_od_rezervacii_prevoz_kon_korisnici"))
    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    @Column(name = "departure_hour", unique = false, nullable = false)
    @NotNull
    public Date getDepartureHour() {
        return departureHour;
    }

    public void setDepartureHour(Date departureHour) {
        this.departureHour = departureHour;
    }
}
