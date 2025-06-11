package com.example.hotel.entity;

import jakarta.persistence.*;
import lombok.*;
import java.sql.Timestamp;
import java.time.LocalDate;
import java.util.Date;

@Entity
@Table(name = "users")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "uid", nullable = false, unique = true)
    private String uid;

    @Column(name = "pwd", nullable = false)
    private String pwd;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "email", nullable = false, unique = true)
    private String email;

    @Column(name = "phone")
    private String phone;

    @Column(name = "address")
    private String address;

    @Column(name = "detail")
    private String detail;

    @Enumerated(EnumType.STRING)
    @Column(name = "type", nullable = false)
    private UserType type;

    @Column(name = "zipcode", nullable = false)
    private String zipcode;

    @Temporal(TemporalType.DATE)
    @Column(name = "birthday", nullable = false)
    //private LocalDate birthday;
    private Date birthday;


    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "creattime", nullable = false, updatable = false)
    //private Timestamp creattime;
    private Date creattime;

    public enum UserType {
        customer, staff, withdrawal
    }
}

