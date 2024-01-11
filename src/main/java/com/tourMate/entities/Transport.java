package com.tourMate.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import javax.validation.constraints.NotNull;
import java.util.Collection;

@Entity
@Table(name = "transport", schema = "public")
public class Transport {
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

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER, mappedBy = "transport")
    public Collection<TransportAvailible> getAvailableRoutes() {
        return availableRoutes;
    }

    public void setAvailableRoutes(Collection<TransportAvailible> availableRoutes) {
        this.availableRoutes = availableRoutes;
    }

    @JsonIgnore
    private Collection<TransportAvailible> availableRoutes;

    public Transport(String transportName, String carBrand, String carType, int carManufacturedYear, int noPassengers, int noBags, long embg, User owner, String carPlate) {

        this.transportName=transportName;
        this.carBrand=carBrand;
        this.carType=carType;
        this.carManufacturedYear=carManufacturedYear;
        this.noPassengers=noPassengers;
        this.noBags=noBags;
        this.EMBG=EMBG;
        this.owner=owner;
        this.carPlate=carPlate;
    }

    public Transport(String transportName, String carBrand, String carType, int carManufacturedYear, int noPassengers, int noBags, long embg, String carPlate) {

        this.transportName=transportName;
        this.carBrand=carBrand;
        this.carType=carType;
        this.carManufacturedYear=carManufacturedYear;
        this.noPassengers=noPassengers;
        this.noBags=noBags;
        this.EMBG=embg;
        this.carPlate=carPlate;
    }


    public Transport() {

    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "transport_id", unique = true, nullable = false)
    public long getTransportID() {
        return transportID;
    }

    public void setTransportID(long transportID) {
        this.transportID = transportID;
    }

    @Column(name="transport_name",unique = false,nullable = false)
    @NotNull
    public String getTransportName() {
        return transportName;
    }

    public void setTransportName(String transportName) {
        this.transportName = transportName;
    }

    @Column(name = "car_brand", unique = false, nullable = false)
    @NotNull
    public String getCarBrand() {
        return carBrand;
    }

    public void setCarBrand(String carBrand) {
        this.carBrand = carBrand;
    }
    
    @Column(name = "car_type", unique = false, nullable = false)
    @NotNull
    public String getCarType() {
        return carType;
    }

    public void setCarType(String carType) {
        this.carType = carType;
    }

    @Column(name = "car_manufactured_year", unique = false, nullable = false)
    @NotNull
    public int getCarManufacturedYear() {
        return carManufacturedYear;
    }

    public void setCarManufacturedYear(int carManufacturedYear) {
        this.carManufacturedYear = carManufacturedYear;
    }

    @Column(name = "no_passengers", unique = false, nullable = false)
    @NotNull
    public int getNoPassengers() {
        return noPassengers;
    }

    public void setNoPassengers(int noPassengers) {
        this.noPassengers = noPassengers;
    }

    @Column(name = "no_bags", unique = false, nullable = false)
    @NotNull
    public int getNoBags() {
        return noBags;
    }

    public void setNoBags(int noBags) {
        this.noBags = noBags;
    }

    @Column(name = "embg", unique = false, nullable = false)
    @NotNull
    public long getEMBG() {
        return EMBG;
    }

    public void setEMBG(long EMBG) {
        this.EMBG = EMBG;
    }

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "owner_id", unique = false, nullable = false, foreignKey = @ForeignKey(name = "fk_ref_od_prevoz_kon_korisnik"))
    public User getOwner() {
        return owner;
    }

    public void setOwner(User owner) {
        this.owner = owner;
    }

    @Column(name = "car_plate", unique = false, nullable = false)
    @NotNull
    public String getCarPlate() {
        return carPlate;
    }

    public void setCarPlate(String carPlate) {
        this.carPlate = carPlate;
    }
}
