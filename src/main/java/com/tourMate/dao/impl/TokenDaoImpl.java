package com.tourMate.dao.impl;

import com.tourMate.dao.TokenDao;
import com.tourMate.entities.Token;
import jakarta.persistence.Entity;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class TokenDaoImpl implements TokenDao {

    @PersistenceContext
    EntityManager em;
    @Override
    public void saveToken(Token token) {
        em.persist(token);
    }

    @Override
    public Token getToken(String token) {
        return (Token) em.createQuery("select t from Token t where t.token = :token").setParameter("token", token).getSingleResult();
    }

    @Override
    @Transactional
    public void setConfirmedAt(String token, LocalDateTime dateTime) {
        Token t = getToken(token);
        t.setConfirmedAt(LocalDateTime.now());
        em.persist(t);
    }
}
