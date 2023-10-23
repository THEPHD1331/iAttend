package com.SpringBootProject.service;

import com.SpringBootProject.entity.Student;

import java.util.List;

public interface StudentService {

    public List<Student> findAll();
    Student findById(int id);
    Student save(Student theEmp);
    void deleteById(int id);
}
