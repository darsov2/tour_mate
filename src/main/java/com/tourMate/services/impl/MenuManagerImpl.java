package com.tourMate.services.impl;

import com.tourMate.entities.Menu;
import com.tourMate.services.MenuManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.tourMate.dao.MenuDao;

import java.util.List;

@Service
public class MenuManagerImpl implements MenuManager {

    @Autowired
    MenuDao menuDao;

    @Override
    public void createMenu(String name, String ingredients, double price) {
        menuDao.createMenu(name, ingredients, price);
    }

    @Override
    public void deleteMenu(long menuId) {
        menuDao.deleteMenu(menuId);
    }

    @Override
    public List<Menu> getCreatedMenus() {
        return menuDao.getCreatedMenus();
    }

    @Override
    public Menu findMenuById(long menuId) {
        return menuDao.findMenuById(menuId);
    }

    @Override
    public void editMenu(long menuId, String name, String ingredients, double price) {
        menuDao.editMenu(menuId, name, ingredients, price);
    }
}
