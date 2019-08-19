package com.univaq.disim.bioinfo;

import org.springframework.http.HttpStatus;

public class BusinessLayerException extends Exception {

    private HttpStatus httpStatus;
    private String message;

    public BusinessLayerException(HttpStatus httpStatus, String message){
        super(message);
        this.httpStatus = httpStatus;
        this.message = message;

    }

    public HttpStatus getHttpStatus() {
        return httpStatus;
    }

    public void setHttpStatus(HttpStatus httpStatus) {
        this.httpStatus = httpStatus;
    }

    @Override
    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
