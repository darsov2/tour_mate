package com.tourMate.services;

import com.tourMate.entities.User;

import java.util.Date;
import java.util.List;

public interface UsersManager {
    public void createUser(String name, String surname, String email, Date birthDate, String address, String contact);

    public void deleteUser(long userID);

    public List<User> getCreatedUsers();

    public User findUserByID(long userID);

    public void editUser(long userID, String name, String surname, String email, Date birthDate, String address, String contact);
}
