package com.springboot.characterCreator;

public interface CustomUserRepository {
    void partialUpdate(final String userId, final String fieldName, final Object fieldValue);
}
