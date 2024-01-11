package com.tourMate.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import javax.validation.constraints.NotNull;

@Entity
@Table(name = "restaurant_tables", schema = "public")
public class RestaurantsTable {
    private long tableId;
    @JsonIgnore
    private Restaurant restaurant;
    private int noSeats;

    public RestaurantsTable(Restaurant restaurant, int noSeats) {
        this.restaurant = restaurant;
        this.noSeats = noSeats;
    }

    public RestaurantsTable() {
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "table_id",unique = true,nullable = false)
    public long getTableId() {
        return tableId;
    }

    public void setTableId(long tableId) {
        this.tableId = tableId;
    }

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "restaurant_id", unique = false, nullable = false, foreignKey = @ForeignKey(name = "fk_ref_od_masi_kon_restorani"))
    public Restaurant getRestaurant() {
        return restaurant;
    }

    public void setRestaurant(Restaurant restaurant) {
        this.restaurant = restaurant;
    }

    @Column(name="no_seats",unique = false,nullable = false)
    @NotNull
    public int getNoSeats() {
        return noSeats;
    }

    public void setNoSeats(int noSeats) {

        this.noSeats = noSeats;
    }
}
