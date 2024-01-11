package com.tourMate.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import org.jetbrains.annotations.NotNull;
import org.springframework.boot.rsocket.server.RSocketServer;
import org.springframework.core.SpringVersion;

import java.util.Date;

@Entity
@Table(name = "transport_route", schema = "public")
public class TransportRoute {
    private long routeId;
    @JsonIgnore
    private TransportAvailible parentRoute;
    private String from;
    private String to;
    private double price;
    @Temporal(TemporalType.TIMESTAMP)
    private Date departure;
    @Temporal(TemporalType.TIMESTAMP)
    private Date arrival;
    private int freeSpace;
    private int order;

    public TransportRoute(TransportAvailible parentRoute, String from, String to, double price, Date departure, Date arrival, int freeSpace, int order) {
        this.parentRoute = parentRoute;
        this.from = from;
        this.to = to;
        this.price = price;
        this.departure = departure;
        this.arrival = arrival;
        this.freeSpace = freeSpace;
        this.order = order;
    }

    public TransportRoute(String from, String to, double price, Date departure, Date arrival, int freeSpace, int order) {
        this.from = from;
        this.to = to;
        this.price = price;
        this.departure = departure;
        this.arrival = arrival;
        this.freeSpace = freeSpace;
        this.order = order;
    }

    public TransportRoute(){
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="transport_route_id", unique = true, nullable = false)
    public long getRouteId() {
        return routeId;
    }

    public void setRouteId(long routeId) {
        this.routeId = routeId;
    }

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "transport_available_Id", unique = false, nullable = false, foreignKey = @ForeignKey(name = "fk_ref_od_popatni_ruti_kon_parent_ruti"))
    public TransportAvailible getParentRoute() {
        return parentRoute;
    }

    public void setParentRoute(TransportAvailible parentRoute) {
        this.parentRoute = parentRoute;
    }

    @Column(name = "from_location", unique = false, nullable = false)
    @NotNull
    public String getFrom() {
        return from;
    }

    public void setFrom(String from) {
        this.from = from;
    }

    @Column(name = "toLocation", unique = false, nullable = false)
    @NotNull
    public String getTo() {
        return to;
    }

    public void setTo(String to) {
        this.to = to;
    }

    @Column(name = "price", unique = false, nullable = false)
    @NotNull
    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    @Column(name = "date_departure", unique = false, nullable = false)
    @NotNull
    public Date getDeparture() {
        return departure;
    }

    public void setDeparture(Date departure) {
        this.departure = departure;
    }

    @Column(name = "date_arrival", unique = false, nullable = false)
    @NotNull
    public Date getArrival() {
        return arrival;
    }

    public void setArrival(Date arrival) {
        this.arrival = arrival;
    }

    @Column(name = "num_free_seats", unique = false, nullable = false)
    @NotNull
    public int getFreeSpace() {
        return freeSpace;
    }

    public void setFreeSpace(int freeSpace) {
        this.freeSpace = freeSpace;
    }

    @Column(name = "city_order", unique = false, nullable = false)
    @NotNull
    public int getOrder() {
        return order;
    }

    public void setOrder(int order) {
        this.order = order;
    }
}
