package com.tourMate.services.impl;

import com.tourMate.dao.BusinessDao;
import com.tourMate.entities.Business;
import com.tourMate.entities.User;
import com.tourMate.services.BusinessManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;

@Service
public class BusinessManagerImpl implements BusinessManager {

    @Autowired
    BusinessDao businessDao;

    @Override
    public void createBusiness(Business business, long userId) {
        businessDao.createBusiness(business, userId);
    }

    @Override
    public List<Business> getUnapprovedBusinessesOfUser(long userId) {
        return businessDao.getUnapprovedBusinessesOfUser(userId);
    }

    @Override
    public void deleteBusiness(long businessId) {
        businessDao.deleteBusiness(businessId);

    }

    @Override
    public boolean hasBusiness(long userId){
        return businessDao.hasBusiness(userId);
    }

    @Override
    public List<Business> getCreatedBusinesses() {
        return businessDao.getCreatedBusinesses();
    }

    @Override
    public Business findBusinessById(long businessId) {
        return businessDao.findBusinessById(businessId);
    }

    @Override
    public void editBusiness(long businessId, String name, String phone, String address, String edbs, User user, boolean approved) {
        businessDao.editBusiness(businessId, name, phone, address, edbs, user, approved);
    }

}
