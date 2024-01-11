package com.tourMate.dao.impl;

import com.tourMate.dao.RestaurantDao;
import com.tourMate.entities.*;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class RestaurantDaoImpl implements RestaurantDao {
    @PersistenceContext
    EntityManager em;

    @Override
    @Transactional
    public void createRestaurant(Restaurant restaurant, long userId) {
        User u = em.find(User.class, userId);
        Restaurant r = new Restaurant(restaurant.getRestaurantName(), restaurant.getRestaurantLocation(), restaurant.getCousineType(), restaurant.getRestaurantDescription(), restaurant.getRestaurantEdbs(), u);
        em.persist(r);
    }

    @Override
    public List<RestaurantsAvailible> getTablesByDateAndLocation(String restaurantLocation, Date hourFrom, Date hourTo, int noSeats){
        return em.createQuery("select hr from RestaurantsAvailible hr where hr.hourFrom <= :hourFrom and hr.hourTo >= :hourTo " +
                        "and hr.restaurantTable.restaurant.restaurantLocation LIKE :restaurantLocation and hr.restaurantTable.noSeats >= :noSeats")
                .setParameter("restaurantLocation", restaurantLocation)
                .setParameter("hourFrom", hourFrom)
                .setParameter("hourTo", hourTo)
                .setParameter("noSeats", noSeats)
                .getResultList();
    }

    @Override
    public void addRestaurantImage(Restaurant restaurant, String url){

    }

    @Transactional
    @Override
    public void removeRestaurantImage(long restaurantImageId){
        RestaurantImages restaurantImage = findRestaurantImageById(restaurantImageId);
        em.remove(restaurantImage);
    }

    @Transactional
    @Override
    public RestaurantImages findRestaurantImageById(long restaurantImageId){
        return em.find(RestaurantImages.class, restaurantImageId);
    }

    @Override
    public void deleteRestaurant(long restaurantID) {
        Restaurant r = findRestaurantByID(restaurantID);
        em.remove(r);
    }

    @Override
    public List<Restaurant> getRestaurants() {
        return em.createQuery("select r from Restaurant r order by r.restaurantID").getResultList();
    }

    @Override
    @Transactional
    public void addMenuToRestaurant(long restaurantId, Menu menu) {
        Restaurant r = findRestaurantByID(restaurantId);
        menu.setRestaurant(r);
        em.persist(menu);
    }

    @Override
    public Restaurant findRestaurantByID(long restaurantID) {
        return em.find(Restaurant.class, restaurantID);
    }

    @Override
    public List<RestaurantImages> getRestaurantImages(long restaurantID) {
        return em.createQuery("select ri from RestaurantImages ri where ri.restaurant.restaurantID = :restaurantID").setParameter("restaurantID", restaurantID).getResultList();
    }

    @Override
    @Transactional
    public void editRestaurant(long restaurantID, String restaurantName, String restaurantLocation, String cousineType, String restaurantDescription, String restaurantEdbs, User restaurantOwner) {
        Restaurant res = findRestaurantByID(restaurantID);
        res.setRestaurantName(restaurantName);
        res.setRestaurantLocation(restaurantLocation);
        res.setRestaurantEdbs(restaurantEdbs);
        res.setRestaurantDescription(restaurantDescription);
        res.setRestaurantOwner(restaurantOwner);
        res.setCousineType(cousineType);
        em.persist(res);
    }

    @Override
    public List<RestaurantsTable> getRestaurantTables(long restaurantID) {
        List<RestaurantsTable> restaurantsTables = getRestaurantTables(restaurantID);
        return restaurantsTables;
    }

    @Override
    public RestaurantsTable findTableById(long tableId) {
        return em.find(RestaurantsTable.class, tableId);
    }

    @Override
    @Transactional
    public void createTable(Restaurant restaurant, int noSeats) {
        RestaurantsTable resTable = new RestaurantsTable(restaurant, noSeats);
        em.persist(resTable);
    }

    @Override
    @Transactional
    public void editTable(Restaurant restaurant, long tableId, int noSeats) {
        RestaurantsTable resTable = findTableById(tableId);
        resTable.setRestaurant(restaurant);
        resTable.setNoSeats(noSeats);
        em.persist(resTable);
    }

    @Override
    @Transactional
    public void deleteTable(long tableId) {
        RestaurantsTable rt  = findTableById(tableId);
        em.persist(rt);
    }

    @Override
    public List<Restaurant> getRestaurantsByUser(long userId) {
        User u = em.find(User.class, userId);
        return em.createQuery("select r from Restaurant r where r.restaurantOwner = :u").setParameter("u", u).getResultList();
    }

    @Override
    @Transactional
    public void createTableAvailable(RestaurantsTable restaurantsTable, Date hourFrom, Date hourTo, int noSeats) {
        RestaurantsAvailible ra = new RestaurantsAvailible(restaurantsTable, hourFrom, hourTo, noSeats);
        em.persist(ra);
    }

    @Override
    public List<RestaurantsAvailible> getTablesAvailabilityById(Long id)
    {
        return em.createQuery("SELECT ra from RestaurantsAvailible ra WHERE ra.restaurantTable.id = :id").setParameter("id", id).getResultList();
    }

    @Override
    @Transactional
    public void createTableAvailable(RestaurantsTable restaurantsTable, Date hourFrom, Date hourTo){
        RestaurantsAvailible rta = new RestaurantsAvailible(restaurantsTable, hourFrom, hourTo);
        em.persist(rta);
    }

    @Override
    @Transactional
    public void editTableAvailable(long tableId, Restaurant restaurant, int noSeats) {
        RestaurantsTable rt = findTableById(tableId);
        rt.setRestaurant(restaurant);
        rt.setNoSeats(noSeats);
        em.persist(rt);
    }

    @Override
    @Transactional
    public void deleteTableAvailable(long tableId) {
        RestaurantsAvailible ra = findAvailableReservationByID(tableId);
        em.remove(ra);
    }

    @Override
    public List<RestaurantsAvailible> getTablesAvailability() {
        return em.createQuery("SELECT a from RestaurantsAvailible a ORDER BY a.restaurantAvailibleId").getResultList();
    }

    @Override
    public void createReservation(RestaurantsTable rt, Date hourFrom, Date hourTo, User user) {

    }

    @Override
    @Transactional
    public void editReservation(long restaurantsTableId, RestaurantsTable rt, Date hourFrom, Date hourTo, int noSeats, User user) {
        RestaurantReservations r = findReservationByID(restaurantsTableId);
        r.setTable(rt);
        r.setTimeFrom(hourFrom);
        r.setTimeTo(hourTo);
        r.setNoSeats(noSeats);
        r.setUser(user);
        em.persist(r);
    }

    @Override
    @Transactional
    public void deleteReservation(long restaurantsTableId) {
        RestaurantReservations r = findReservationByID(restaurantsTableId);
        em.remove(r);
    }

    @Override
    public RestaurantReservations findReservationByID(long tableId) {
        return em.find(RestaurantReservations.class, tableId);
    }

    @Override
    public RestaurantsAvailible findAvailableReservationByID(long availibleId) {
        return em.find(RestaurantsAvailible.class, availibleId);
    }

    @Override
    public List<RestaurantReservations> findReservationByUser(User user) {
        return em.createQuery("SELECT r from RestaurantReservations r where r.user = :user").setParameter("user", user).getResultList();
    }

    @Override
    public List<RestaurantReservations> findReservationByRestaurant(Restaurant restaurant) {
        return em.createQuery("select rr from RestaurantReservations rr where rr.table.restaurant = :rest").setParameter("rest", restaurant).getResultList();
    }

    @Override
    public List<RestaurantReservations> getReservations() {
        return em.createQuery("select r from Restaurant r order by r.restaurantName").getResultList();
    }

    @Override
    public List<Restaurant> searchByRestaurantName(String restaurantName) {
        return em.createQuery("select rt from RestaurantsTable rt where rt.restaurant.restaurantName = :restaurantName").setParameter("restaurantName", restaurantName).getResultList();
    }

    @Override
    public List<Restaurant> searchByRestaurantLocation(String restaurantLocation) {

        return em.createQuery("select rt from RestaurantsTable rt where rt.restaurant.restaurantLocation = :restaurantLocation").setParameter("restaurantLocation", restaurantLocation).getResultList();

    }

    @Override
    public List<RestaurantsTable> searchByNoSeats(int noSeats) {
        return em.createQuery("select rt from RestaurantsTable rt where rt.noSeats = noSeats").getResultList();
    }
}