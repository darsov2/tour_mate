package com.tourMate.entities;

import jakarta.persistence.*;
import org.jetbrains.annotations.NotNull;

@Entity
@Table(name = "business", schema = "public")
public class Business {

    private long businessId;
    private String name;
    private String phone;
    private String address;
    private String edbs;
    private User user;
    private boolean approved;

    public Business(String name, String phone, String address, String edbs, User user, boolean approved) {
        this.name = name;
        this.phone = phone;
        this.address = address;
        this.edbs = edbs;
        this.user = user;
        this.approved = approved;
    }

    public Business(String name, String phone, String address, String edbs, boolean approved) {
        this.name = name;
        this.phone = phone;
        this.address = address;
        this.edbs = edbs;
        this.approved = approved;
    }

    public Business() {

    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "business_id", unique = true, nullable = false)
    public long getBusinessId() {
        return businessId;
    }

    public void setBusinessId(long businessId) {
        this.businessId = businessId;
    }

    @Column(name = "name", unique = false, nullable = false)
    @NotNull
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Column(name = "phone", unique = false, nullable = false)
    @NotNull
    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    @Column(name = "address", unique = false, nullable = false)
    @NotNull
    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    @Column(name = "edbs", unique = false, nullable = false)
    @NotNull
    public String getEdbs() {
        return edbs;
    }

    public void setEdbs(String edbs) {
        this.edbs = edbs;
    }

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "owner_id", unique = false, nullable = false, foreignKey = @ForeignKey(name = "fk_ref_od_biznis_kon_korisnik"))
    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    @Column(name = "approved", unique = false, nullable = false)
    @NotNull
    public boolean isApproved() {
        return approved;
    }

    public void setApproved(boolean approved) {
        this.approved = approved;
    }
}
