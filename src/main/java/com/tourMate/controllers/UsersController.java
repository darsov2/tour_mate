package com.tourMate.controllers;

import com.tourMate.entities.Business;
import com.tourMate.entities.User;
import com.tourMate.services.BusinessManager;
import com.tourMate.services.UsersManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin
@RestController
public class UsersController {
    @Autowired
    UsersManager usersManager;
    @Autowired
    BusinessManager businessManager;

    @GetMapping(path = "/{id}/hasBusiness")
    public boolean hasBusinessRegistered(@PathVariable(value = "id") long userId)
    {
        return businessManager.hasBusiness(userId);
    }

    @PostMapping(path = "/business/add")
    public void addBusiness(@RequestBody Business business, @RequestParam(name = "userId") long userId)
    {
        System.out.println("userot e: " + userId);
        businessManager.createBusiness(business, userId);
    }

    @GetMapping(path = "/business/{id}/unapproved")
    public List<Business> getUnapprovedBusinesses(@PathVariable(name = "id") long userId)
    {
        return businessManager.getUnapprovedBusinessesOfUser(userId);
    }

    @PostMapping(path = "/register")
    public List<User> add(@RequestBody User user) {
        System.out.println(user.getName() + user.getSurname());
        usersManager.createUser(user.getName(), user.getSurname(), user.getEmail(), user.getBirthDate(), user.getAddress(), user.getContact());
        return usersManager.getCreatedUsers();
    }

    @GetMapping(path = "/user")
    public List<User> showUsers() {
        return usersManager.getCreatedUsers();
    }

    @GetMapping(value = "/username")
    @ResponseBody
    public String currentUserName(Authentication authentication) {
        return authentication.getName();
    }

    @GetMapping(value = "/principal")
    @ResponseBody
    public User currentUser(Authentication authentication) {
        return (User) authentication.getPrincipal();
    }
    @PostMapping(path = "/user/edit")
    public List<User> edit(@RequestBody User user)
    {
        System.out.println(user.getName() + " " + user.getSurname() + "id e " + user.getUserID());
        // long userID, String name, String surname, String email, Date birthDate, String address, String contact
        usersManager.editUser(user.getUserID(), user.getName(), user.getSurname(), user.getEmail(), user.getBirthDate(), user.getAddress(), user.getContact());
        return usersManager.getCreatedUsers();
    }

    @GetMapping(path = "/user/delete")
    public ResponseEntity remove(@RequestParam(name = "userId") long userId) {
        try
        {
            usersManager.deleteUser(userId);
            return new ResponseEntity(HttpStatus.OK);
        }
        catch (Exception exception)
        {
            return new ResponseEntity(HttpStatus.NOT_FOUND);
        }
    }
}

