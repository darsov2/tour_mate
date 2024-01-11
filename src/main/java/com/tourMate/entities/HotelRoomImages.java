package com.tourMate.entities;

import jakarta.persistence.*;
import org.jetbrains.annotations.NotNull;

@Entity
@Table(name = "hotel_room_images", schema = "public")
public class HotelRoomImages {
    private long imageID;
    private HotelRoom room;
    private String url;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "image_id", unique = true, nullable = false)
    public long getImageID() {
        return imageID;
    }

    public void setImageID(long imageID) {
        this.imageID = imageID;
    }

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "room_id", unique = false, nullable = false, foreignKey = @ForeignKey(name = "fk_ref_od_roomimg_kon_room"))
    public HotelRoom getRoom() {
        return room;
    }

    public void setRoom(HotelRoom room) {
        this.room = room;
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
