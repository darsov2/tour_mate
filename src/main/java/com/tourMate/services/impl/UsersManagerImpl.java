package com.tourMate.services.impl;

import com.tourMate.dao.UsersDao;
import com.tourMate.entities.User;
import com.tourMate.services.UsersManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class UsersManagerImpl implements UsersManager, UserDetailsService {

    @Autowired
    UsersDao usersDao;

    @Override
    public void createUser(String name, String surname, String email, Date birthDate, String address, String contact) {
        usersDao.createUser(name, surname, email, birthDate, address, contact);
    }

    @Override
    public void deleteUser(long userID) {
        usersDao.deleteUser(userID);
    }

    @Override
    public List<User> getCreatedUsers() {
        return usersDao.getCreatedUsers();
    }

    @Override
    public User findUserByID(long userID) {
        return usersDao.findUserByID(userID);
    }

    @Override
    public void editUser(long userID, String name, String surname, String email, Date birthDate, String address, String contact) {
        usersDao.editUser(userID, name, surname, email, birthDate, address, contact);
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return usersDao.findUserByUsername(username);
    }
}
