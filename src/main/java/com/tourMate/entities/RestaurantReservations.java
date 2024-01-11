package com.tourMate.entities;

import jakarta.persistence.*;

import javax.validation.constraints.NotNull;
import java.util.Date;

@Entity
@Table(name = "restaurant_reservations", schema = "public")
public class RestaurantReservations {
    private long reservationId;
    private RestaurantsTable table;
    @Temporal(TemporalType.TIME)
    private Date timeFrom;
    @Temporal(TemporalType.TIME)
    private Date timeTo;
    private int noSeats;
    private User user;

    public RestaurantReservations(RestaurantsTable table, Date timeFrom, Date timeTo, int noSeats, User user) {
        this.table = table;
        this.timeFrom = timeFrom;
        this.timeTo = timeTo;
        this.noSeats = noSeats;
        this.user = user;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "restaurant_id",unique = true,nullable = false)
    public long getReservationId() {
        return reservationId;
    }

    public void setReservationId(long reservationId) {
        this.reservationId = reservationId;
    }

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "table_id", unique = false, nullable = false, foreignKey = @ForeignKey(name = "fk_ref_od_rezervacija_kon_masa"))
    public RestaurantsTable getTable() {
        return table;
    }

    public void setTable(RestaurantsTable table) {
        this.table = table;
    }

    @Column(name="time_from",unique = false,nullable = false)
    @NotNull
    public Date getTimeFrom() {
        return timeFrom;
    }

    public void setTimeFrom(Date timeFrom) {
        this.timeFrom = timeFrom;
    }

    @Column(name="time_to",unique = false,nullable = false)
    @NotNull
    public Date getTimeTo() {
        return timeTo;
    }

    @Column(name = "no_seats", unique = false, nullable = false)
    @NotNull
    public int getNoSeats() {
        return noSeats;
    }

    public void setNoSeats(int noSeats) {
        this.noSeats = noSeats;
    }

    public void setTimeTo(Date timeTo) {
        this.timeTo = timeTo;
    }

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", unique = false, nullable = false, foreignKey = @ForeignKey(name = "fk_ref_od_rezervacija_restoran_kon_korisnik"))
    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
