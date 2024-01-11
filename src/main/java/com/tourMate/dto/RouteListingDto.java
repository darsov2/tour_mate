package com.tourMate.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.tourMate.entities.Transport;
import com.tourMate.entities.TransportRoute;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

import java.util.Collection;
import java.util.Date;

public class RouteListingDto {
    private long transportAvailibleId;
    private String from;
    private String to;
    private Date date;
    private int freeSpace;
    private Date time;
    private Collection<String> routes;

    public RouteListingDto(long transportAvailibleId, String from, String to, Date date, int freeSpace, Date time, Collection<TransportRoute> routes) {
        this.transportAvailibleId = transportAvailibleId;
        this.from = from;
        this.to = to;
        this.date = date;
        this.freeSpace = freeSpace;
        this.time = time;
        this.routes = routes.stream().map(x -> x.getFrom()).distinct().skip(1).toList();
    }

    public long getTransportAvailibleId() {
        return transportAvailibleId;
    }

    public void setTransportAvailibleId(long transportAvailibleId) {
        this.transportAvailibleId = transportAvailibleId;
    }

    public String getFrom() {
        return from;
    }

    public void setFrom(String from) {
        this.from = from;
    }

    public String getTo() {
        return to;
    }

    public void setTo(String to) {
        this.to = to;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public int getFreeSpace() {
        return freeSpace;
    }

    public void setFreeSpace(int freeSpace) {
        this.freeSpace = freeSpace;
    }

    public Date getTime() {
        return time;
    }

    public void setTime(Date time) {
        this.time = time;
    }

    public Collection<String> getRoutes() {
        return routes;
    }

    public void setRoutes(Collection<String> routes) {
        this.routes = routes;
    }
}
