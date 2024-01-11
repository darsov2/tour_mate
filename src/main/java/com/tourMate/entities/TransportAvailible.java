package com.tourMate.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;

import javax.validation.constraints.NotNull;
import java.util.Collection;
import java.util.Date;

@Entity
@Table(name = "transport_availible", schema = "public")
public class TransportAvailible {
    private long transportAvailibleId;
    @JsonIgnore
    private Transport transport;
    private String from;
    private String to;
    @Temporal(TemporalType.DATE)
    private Date date;
    private int freeSpace;
    @Temporal(TemporalType.TIME)
    private Date time;
    private Collection<TransportRoute> routes;

    public TransportAvailible(Transport transport, String from, String to, Date date, int freeSpace, Date time, Collection<TransportRoute> routes) {
        this.transport = transport;
        this.from = from;
        this.to = to;
        this.date = date;
        this.freeSpace = freeSpace;
        this.time = time;
        this.routes = routes;
    }


    public TransportAvailible(Transport transport, String from, String to, Date date, int freeSpace, Date time) {
        this.transport = transport;
        this.from = from;
        this.to = to;
        this.date = date;
        this.freeSpace = freeSpace;
        this.time = time;
    }

    public TransportAvailible() {
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="transport_available_id", unique = true,nullable = false)
    public long getTransportAvailibleId() {
        return transportAvailibleId;
    }

    public void setTransportAvailibleId(long transportAvailibleId) {
        this.transportAvailibleId = transportAvailibleId;
    }

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER, mappedBy = "parentRoute")
    public Collection<TransportRoute> getRoutes() {
        return routes;
    }

    public void setRoutes(Collection<TransportRoute> routes) {
        this.routes = routes;
    }

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "transport_id", unique = false, nullable = false, foreignKey = @ForeignKey(name = "fk_ref_od_transportavailable_kon_transport"))
    public Transport getTransport() {
        return transport;
    }

    public void setTransport(Transport transport) {
        this.transport = transport;
    }

    @Column(name="from_dest", unique = false, nullable = false)
    @NotNull
    public String getFrom() {
        return from;
    }

    public void setFrom(String from) {
        this.from = from;
    }

    @Column(name="to_dest", unique = false, nullable = false)
    @NotNull
    public String getTo() {
        return to;
    }

    public void setTo(String to) {
        this.to = to;
    }


    @Column(name="date", unique = false, nullable = false)
    @NotNull
    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    @Column(name="free_space", unique = false, nullable = false)
    @NotNull
    public int getFreeSpace() {
        return freeSpace;
    }

    public void setFreeSpace(int freeSpace) {
        this.freeSpace = freeSpace;
    }

    @Column(name="time", unique = false, nullable = false)
    @NotNull
    public Date getTime() {
        return time;
    }

    public void setTime(Date time) {
        this.time = time;
    }
}
