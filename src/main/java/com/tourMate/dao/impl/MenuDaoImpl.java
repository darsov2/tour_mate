package com.tourMate.dao.impl;

import com.tourMate.dao.MenuDao;
import com.tourMate.entities.Menu;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MenuDaoImpl implements MenuDao {

    @PersistenceContext
    EntityManager em;

    @Transactional
    @Override
    public void createMenu(String name, String ingredients, double price) {
        Menu menu = new Menu(name, ingredients, price);
        em.persist(menu);
    }

    @Transactional
    @Override
    public void deleteMenu(long menuId) {
        Menu menu = findMenuById(menuId);
        em.remove(menu);
    }

    @Override
    public List<Menu> getCreatedMenus() {
        return em.createQuery("from Menu order by menuId").getResultList();
    }

    @Override
    public Menu findMenuById(long menuId) {
        return em.find(Menu.class, menuId);
    }

    @Transactional
    @Override
    public void editMenu(long menuId, String name, String ingredients, double price) {
        Menu menu = findMenuById(menuId);
        menu.setName(name);
        menu.setIngredients(ingredients);
        menu.setPrice(price);
        em.persist(menu);
    }

}
