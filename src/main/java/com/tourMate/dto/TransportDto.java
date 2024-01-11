package com.tourMate.dto;

import com.tourMate.entities.User;

import java.util.Collection;

public class TransportDto {
    private long transportID;
    private String transportName;
    private String carBrand;
    private String carType;
    private int carManufacturedYear;
    private int noPassengers;
    private int noBags;
    private long EMBG;
    private User owner;
    private String carPlate;
    private Collection<RouteListingDto> availableRoutes;

    public TransportDto(long transportID, String transportName, String carBrand, String carType, int carManufacturedYear, int noPassengers, int noBags, long EMBG, User owner, String carPlate, Collection<RouteListingDto> availableRoutes) {
        this.transportID = transportID;
        this.transportName = transportName;
        this.carBrand = carBrand;
        this.carType = carType;
        this.carManufacturedYear = carManufacturedYear;
        this.noPassengers = noPassengers;
        this.noBags = noBags;
        this.EMBG = EMBG;
        this.owner = owner;
        this.carPlate = carPlate;
        this.availableRoutes = availableRoutes;
    }

    public long getTransportID() {
        return transportID;
    }

    public void setTransportID(long transportID) {
        this.transportID = transportID;
    }

    public String getTransportName() {
        return transportName;
    }

    public void setTransportName(String transportName) {
        this.transportName = transportName;
    }

    public String getCarBrand() {
        return carBrand;
    }

    public void setCarBrand(String carBrand) {
        this.carBrand = carBrand;
    }

    public String getCarType() {
        return carType;
    }

    public void setCarType(String carType) {
        this.carType = carType;
    }

    public int getCarManufacturedYear() {
        return carManufacturedYear;
    }

    public void setCarManufacturedYear(int carManufacturedYear) {
        this.carManufacturedYear = carManufacturedYear;
    }

    public int getNoPassengers() {
        return noPassengers;
    }

    public void setNoPassengers(int noPassengers) {
        this.noPassengers = noPassengers;
    }

    public int getNoBags() {
        return noBags;
    }

    public void setNoBags(int noBags) {
        this.noBags = noBags;
    }

    public long getEMBG() {
        return EMBG;
    }

    public void setEMBG(long EMBG) {
        this.EMBG = EMBG;
    }

    public User getOwner() {
        return owner;
    }

    public void setOwner(User owner) {
        this.owner = owner;
    }

    public String getCarPlate() {
        return carPlate;
    }

    public void setCarPlate(String carPlate) {
        this.carPlate = carPlate;
    }

    public Collection<RouteListingDto> getAvailableRoutes() {
        return availableRoutes;
    }

    public void setAvailableRoutes(Collection<RouteListingDto> availableRoutes) {
        this.availableRoutes = availableRoutes;
    }
}
