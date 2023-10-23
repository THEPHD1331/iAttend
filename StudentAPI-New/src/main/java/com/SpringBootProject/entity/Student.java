package com.SpringBootProject.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "students_new")
@Data
public class Student {

    @Id
    @Column(name = "rollNo")
    private int rollNo;
    @Column(name="name")
    private String name;
    @Column(name = "attendance")
    private String attendance;
    @Column(name = "date")
    private String date;


}
