package com.tourMate.services.impl;

import com.tourMate.dao.TokenDao;
import com.tourMate.entities.Token;
import com.tourMate.services.TokenManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class TokenManagerImpl implements TokenManager {
    @Autowired
    TokenDao tokenDao;


    @Override
    public void saveToken(Token token) {
        tokenDao.saveToken(token);
    }

    @Override
    public Token getToken(String token) {
        return tokenDao.getToken(token);
    }
    
    @Override
    public void setConfirmedAt(String token) {
        tokenDao.setConfirmedAt(token, LocalDateTime.now());
    }
}
