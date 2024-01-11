package com.tourMate.entities;

import jakarta.persistence.*;
import org.jetbrains.annotations.NotNull;

@Entity
@Table(name = "HotelsImages", schema = "public")

public class HotelsImages {
    private long hotelImageID;
    private Hotels hotel;
    private String url;

    public HotelsImages(Hotels hotel, String url) {
        this.hotel = hotel;
        this.url = url;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "image_id", unique = true, nullable = false)
    public long getHotelImageID() {
        return hotelImageID;
    }

    public void setHotelImageID(long hotelImageID) {
        this.hotelImageID = hotelImageID;
    }

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "hotel_id", unique = false, nullable = false, foreignKey = @ForeignKey(name = "fk_ref_od_hotelimg_kon_hotel"))
    public Hotels getHotel() {
        return hotel;
    }

    public void setHotel(Hotels hotel) {
        this.hotel = hotel;
    }

    @Column(name="image_url",unique = false,nullable = false)
    @NotNull
    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }
}
