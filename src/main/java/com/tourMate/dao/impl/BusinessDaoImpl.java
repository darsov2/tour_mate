package com.tourMate.dao.impl;

import com.tourMate.dao.BusinessDao;
import com.tourMate.entities.Business;
import com.tourMate.entities.User;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BusinessDaoImpl implements BusinessDao {

    @PersistenceContext
    EntityManager em;

    @Transactional
    @Override
    public void createBusiness(Business business, long userId) {
        User u = em.find(User.class, userId);
        business.setUser(u);
        em.persist(business);
    }

    @Override
    public List<Business> getUnapprovedBusinessesOfUser(long userId) {
        User u = em.find(User.class, userId);
        return em.createQuery("SELECT b FROM Business b WHERE b.user = :user").setParameter("user", u).getResultList();
    }

    @Transactional
    @Override
    public void deleteBusiness(long businessId) {
        Business business = findBusinessById(businessId);
        em.remove(business);

    }

    @Override
    public boolean hasBusiness(long userId)
    {
        User u = em.find(User.class, userId);
        return Integer.parseInt(em.createQuery("SELECT COUNT(b) FROM Business b WHERE b.user = :user").setParameter("user", u).getSingleResult().toString()) > 0;
    }


    @Override
    public List<Business> getCreatedBusinesses() {
        return em.createQuery("from Business order by businessId").getResultList();
    }

    @Override
    public Business findBusinessById(long businessId) {
        return em.find(Business.class, businessId);
    }

    @Transactional
    @Override
    public void editBusiness(long businessId, String name, String phone, String address, String edbs, User user, boolean approved) {
        Business business = findBusinessById(businessId);
        business.setName(name);
        business.setPhone(phone);
        business.setAddress(address);
        business.setEdbs(edbs);
        business.setUser(user);
        business.setApproved(approved);
        em.persist(business);
    }
}
