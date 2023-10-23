package com.SpringBootProject.service;

import com.SpringBootProject.dao.StudentRepository;
import com.SpringBootProject.entity.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StudentServiceImpl implements StudentService {

    StudentRepository studentRepo;

    @Autowired
    public StudentServiceImpl(StudentRepository empRepo){
        studentRepo=empRepo;
    }

    @Override
    public List<Student> findAll() {
        return studentRepo.findAll();
    }

    @Override
    public Student findById(int id) {
        Optional<Student> result = studentRepo.findById(id);
        Student theEmp=null;

        if(result.isPresent()){
            theEmp=result.get();
        }
        else{
            throw new RuntimeException("Did not find the Employee ID: "+ id);
        }

        return theEmp;
    }

    @Override
    public Student save(Student theEmp) {
        return studentRepo.save(theEmp);
    }

    @Override
    public void deleteById(int id) {
    studentRepo.deleteById(id);
    }
}
