package com.tourMate.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import org.jetbrains.annotations.NotNull;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.GrantedAuthority;
//import org.springframework.security.core.authority.SimpleGrantedAuthority;
//import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.Collections;
import java.util.Date;

@Entity
@Table(name = "users", schema = "public")
public class User implements UserDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id", unique = true, nullable = false)
    private long userID;

    @Column(name = "name", unique = false, nullable = false)
    @NotNull
    private String name;

    @Column(name = "surname", unique = false, nullable = false)
    private String surname;

    @Column(name = "email", unique = true, nullable = false)
    @NotNull
    private String email;

    @Column(name = "password", unique = true, nullable = false)
    @NotNull
    private String password;

    @Column(name = "birth_date", unique = false, nullable = false)
    @NotNull
    private Date birthDate;

    @Column(name = "address", unique = false, nullable = false)
    private String address;

    @Column(name = "contact", unique = false, nullable = false)
    private String contact;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "role_id", unique = false, nullable = false, foreignKey = @ForeignKey(name = "fk_ref_od_user_kon_role"))
    private Role role;
    @Column(name = "locked", unique = false, nullable = false)
    boolean locked;

    @Column(name = "enabled", unique = false, nullable = false)
    boolean enabled;


    public User(@NotNull String name, String surname, @NotNull String email, @NotNull String password, @NotNull Date birthDate, String address, String contact, Role role) {
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.password = password;
        this.birthDate = birthDate;
        this.address = address;
        this.contact = contact;
        this.role = role;
    }

    public User(@NotNull String name, String surname, @NotNull String email, @NotNull String password, @NotNull Date birthDate, String address, String contact) {
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.password = password;
        this.birthDate = birthDate;
        this.address = address;
        this.contact = contact;
    }

    public User(long userID, @NotNull String name, String surname, @NotNull String email, @NotNull String password, @NotNull Date birthDate, String address, String contact, Role role, boolean locked, boolean enabled) {
        this.userID = userID;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.password = password;
        this.birthDate = birthDate;
        this.address = address;
        this.contact = contact;
        this.role = role;
        this.locked = locked;
        this.enabled = enabled;
    }

    public User() {
    }


    public long getUserID() {
        return userID;
    }

    public void setUserID(long userID) {
        this.userID = userID;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSurname() {
        return surname;
    }


    public void setSurname(String surname) {
        this.surname = surname;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }


    public Role getRole() {
        return role;
    }

    public boolean isEnabled() {
        return enabled;
    }

    @Override
    @JsonIgnore
    public Collection<? extends GrantedAuthority> getAuthorities() {
        SimpleGrantedAuthority authority = new SimpleGrantedAuthority(role.getRoleName());
        return Collections.singleton(authority);
    }

    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Date getBirthDate() {
        return birthDate;
    }

    public void setBirthDate(Date birthDate) {
        this.birthDate = birthDate;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getContact() {
        return contact;
    }

    public void setContact(String contact) {
        this.contact = contact;
    }

    public void setRole(Role role) {
        this.role = role;
    }

    public void setLocked(boolean locked) {
        this.locked = locked;
    }

    public void setEnabled(boolean enabled) {
        this.enabled = enabled;
    }
}
