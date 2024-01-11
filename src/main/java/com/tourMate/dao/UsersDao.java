package com.tourMate.dao;

import com.tourMate.entities.Role;
import com.tourMate.entities.User;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Date;
import java.util.List;

public interface UsersDao {

    public void createUser(String name, String surname, String email, Date birthDate, String address, String contact);

    public void deleteUser(long userID);

    public List<User> getCreatedUsers();

    public List<Role> getRoles();

    public User findUserByID(long userID);

    public void editUser(long userID, String name, String surname, String email, Date birthDate, String address, String contact);

    UserDetails findUserByUsername(String username);
}
