package com.example.hotel.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
public class RegisterDto {
    private String uid;
    private String pwd;
    private String name;
    private String email;
    private String phone;
    private String address;
    private String detail;
    private String zipcode;
    private Date birthday;
}
