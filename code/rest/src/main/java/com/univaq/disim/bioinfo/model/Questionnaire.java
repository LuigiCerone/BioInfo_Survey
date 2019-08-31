package com.univaq.disim.bioinfo.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.univaq.disim.bioinfo.model.section.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

@Document
public class Questionnaire {

    // id used by couchbase as meta fields
    @Id
    private String id = UUID.randomUUID().toString();

    @Field
    private String ownerUsername;

    @Field
    private A1 a1;

    @Field
    private A2 a2;

    @Field
    private B1 b1;

    @Field
    private B2 b2;

    @Field
    private B3 b3;

    @Field
    private E be;

    @Field
    private C1 c1;

    @Field
    private C2 c2;

    @Field
    private C3 c3;

    @Field
    private E ce;

    @Field
    private HashMap<Integer, D> d;

    @JsonIgnore
    private String _class;

    @Field
    private int numberOfMPM;

    public Questionnaire(){

    }

    public String getId() {
        return id;
    }


    public void setId(String id) {
        this.id = id;
    }

    public String getOwnerUsername() {
        return ownerUsername;
    }

    public void setOwnerUsername(String ownerUsername) {
        this.ownerUsername = ownerUsername;
    }

    public A1 getA1() {
        return a1;
    }

    public void setA1(A1 a1) {
        this.a1 = a1;
    }

    public A2 getA2() {
        return a2;
    }

    public void setA2(A2 a2) {
        this.a2 = a2;
    }

    public B1 getB1() {
        return b1;
    }

    public void setB1(B1 b1) {
        this.b1 = b1;
    }

    public B2 getB2() {
        return b2;
    }

    public void setB2(B2 b2) {
        this.b2 = b2;
    }

    public B3 getB3() {
        return b3;
    }

    public void setB3(B3 b3) {
        this.b3 = b3;
    }

    public E getBe() {
        return be;
    }

    public void setBe(E be) {
        this.be = be;
    }

    public C1 getC1() {
        return c1;
    }

    public void setC1(C1 c1) {
        this.c1 = c1;
    }

    public C2 getC2() {
        return c2;
    }

    public void setC2(C2 c2) {
        this.c2 = c2;
    }

    public C3 getC3() {
        return c3;
    }

    public void setC3(C3 c3) {
        this.c3 = c3;
    }

    public E getCe() {
        return ce;
    }

    public void setCe(E ce) {
        this.ce = ce;
    }

    public HashMap<Integer, D> getD() {
        return d;
    }

    public void setD(HashMap<Integer, D> d) {
        this.d = d;
    }

    public D addD(int key, D value) {
        return this.d.put(key, value);
    }

    public String get_class() {
        return _class;
    }

    public void set_class(String _class) {
        this._class = _class;
    }

    public int getNumberOfMPM() {
        return numberOfMPM;
    }

    public void setNumberOfMPM(int numberOfMPM) {
        this.numberOfMPM = numberOfMPM;
    }
}