package com.tourMate.dao;

import com.tourMate.entities.Token;
import jakarta.transaction.Transactional;

import java.time.LocalDateTime;
import java.util.Date;

public interface TokenDao {
    public void saveToken(Token token);
    public Token getToken(String token);
    @Transactional
    public void setConfirmedAt(String token, LocalDateTime dateTime);
}
