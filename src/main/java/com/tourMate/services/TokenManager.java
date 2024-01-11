package com.tourMate.services;

import com.tourMate.entities.Token;

public interface TokenManager {
    public void saveToken(Token token);
    public Token getToken(String token);
    public void setConfirmedAt(String token);
}
