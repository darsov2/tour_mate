package com.tourMate.services;
import com.tourMate.entities.Business;
import com.tourMate.entities.User;

import java.util.List;

public interface BusinessManager {
    public void createBusiness(Business business, long userId);
    public List<Business> getUnapprovedBusinessesOfUser(long userId);
    public void deleteBusiness(long businessId);
    public List<Business> getCreatedBusinesses();
    public Business findBusinessById (long businessId);
    public void editBusiness(long businessId, String name, String phone, String address, String edbs, User user, boolean approved);
    public boolean hasBusiness(long userId);
}
