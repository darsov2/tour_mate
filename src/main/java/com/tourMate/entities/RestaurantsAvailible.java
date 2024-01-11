package com.tourMate.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import javax.validation.constraints.NotNull;
import java.util.Date;

@Entity
@Table(name = "restaurants_availible", schema = "public")
public class RestaurantsAvailible {
    private long restaurantAvailibleId;
    @JsonIgnore
    private RestaurantsTable restaurantTable;
    @Temporal(TemporalType.TIME)
    private Date hourFrom;
    @Temporal(TemporalType.TIME)
    private Date hourTo;
    private int numTables;

    //TODO geteri seteri za numPeople
    //TODO sredi vo dao i services

    public RestaurantsAvailible(RestaurantsTable restaurantTable, Date hourFrom, Date hourTo, int numTables) {
        this.restaurantTable = restaurantTable;
        this.hourFrom = hourFrom;
        this.hourTo = hourTo;
        this.numTables = numTables;
    }

    public RestaurantsAvailible(RestaurantsTable restaurantsTable, Date hourFrom, Date hourTo) {
        this.restaurantTable = restaurantsTable;
        this.hourFrom = hourFrom;
        this.hourTo = hourTo;
    }

    public RestaurantsAvailible() {

    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "restaurant_table_available_id", unique = true, nullable = false)
    public long getRestaurantAvailibleId() {
        return restaurantAvailibleId;
    }

    public void setRestaurantAvailibleId(long restaurantAvailibleId) {
        this.restaurantAvailibleId = restaurantAvailibleId;
    }

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "table_id", unique = false, nullable = false, foreignKey = @ForeignKey(name = "fk_ref_od_tableavailable_kon_table"))
    public RestaurantsTable getRestaurantTable() {
        return restaurantTable;
    }

    public void setRestaurantTable(RestaurantsTable restaurantTable) {
        this.restaurantTable = restaurantTable;
    }

    @Column(name = "hour_from", unique = false, nullable = false)
    @NotNull
    public Date getHourFrom() {
        return hourFrom;
    }

    public void setHourFrom(Date hourFrom) {
        this.hourFrom = hourFrom;
    }

    @Column(name = "hour_to", unique = false, nullable = false)
    @NotNull
    public Date getHourTo() {
        return hourTo;
    }

    public void setHourTo(Date hourTo) {
        this.hourTo = hourTo;
    }
}
