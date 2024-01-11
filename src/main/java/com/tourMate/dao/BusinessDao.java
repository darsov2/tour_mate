package com.tourMate.dao;

import com.tourMate.entities.Business;
import com.tourMate.entities.User;
import jakarta.transaction.Transactional;

import java.util.List;

public interface BusinessDao {

    @Transactional
    void createBusiness(Business business, long userId);
    public List<Business> getUnapprovedBusinessesOfUser(long userId);
    public void deleteBusiness(long businessId);
    public List<Business> getCreatedBusinesses();
    public Business findBusinessById (long businessId);

    @Transactional
    void editBusiness(long businessId, String name, String phone, String address, String edbs, User user, boolean approved);
    public boolean hasBusiness(long userId);

}
