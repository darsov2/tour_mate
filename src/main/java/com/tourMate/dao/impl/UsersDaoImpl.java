package com.tourMate.dao.impl;

import com.tourMate.dao.UsersDao;
import com.tourMate.entities.Role;
import com.tourMate.entities.User;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.transaction.Transactional;
import org.jetbrains.annotations.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class UsersDaoImpl implements UsersDao {

    @PersistenceContext
    EntityManager em;

    @Autowired
    PasswordEncoder passwordEncoder;

    @Transactional
    @Override
    public void createUser(String name, String surname, String email, Date birthDate, String address, String contact) {
        Role r = em.find(Role.class, 1);
        User user = new User(name, surname, email, passwordEncoder.encode("password"), birthDate, address, contact, r);
        em.persist(user);
    }

    @Transactional
    @Override
    public void deleteUser(long userID) {
        User u = findUserByID(userID);
        em.remove(u);
    }

    @Override
    public List<User> getCreatedUsers() {
        return em.createQuery("from User order by userID").getResultList();
    }

    @Override
    public List<Role> getRoles() {
        return em.createQuery("SELECT r from Role r ORDER BY r.id").getResultList();
    }

    @Override
    public User findUserByID(long userID) {
        return em.find(User.class, userID);
    }

    @Transactional
    @Override
    public void editUser(long userID, String name, String surname, String email, Date birthDate, String address, String contact) {
        User u = findUserByID(userID);
        u.setName(name);
        u.setSurname(surname);
        u.setEmail(email);
        u.setBirthDate(birthDate);
        u.setAddress(address);
        u.setContact(contact);
        em.persist(u);
    }

    @Override
    public UserDetails findUserByUsername(String username) {
        List<User> useri  = em.createQuery("SELECT u FROM User u WHERE u.email = :username").setParameter("username", username).getResultList();
        return (User) em.createQuery("SELECT u FROM User u WHERE u.email = :username").setParameter("username", username).getResultList().get(0);
    }



}
