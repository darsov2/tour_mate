package com.tourMate.services;

import com.tourMate.entities.Menu;

import java.util.List;

public interface MenuManager {
    public void createMenu(String name, String ingredients, double price);
    public void deleteMenu(long menuId);
    public List<Menu> getCreatedMenus();
    public Menu findMenuById(long menuId);
    public void editMenu(long menuId, String name, String ingredients, double price);
}
