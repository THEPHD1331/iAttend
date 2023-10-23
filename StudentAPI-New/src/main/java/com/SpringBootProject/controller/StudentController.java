package com.SpringBootProject.controller;

import com.SpringBootProject.entity.Student;
import com.SpringBootProject.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class StudentController {

  StudentService employeeService;

    @Autowired
    public StudentController(StudentService employeeService) {
        this.employeeService = employeeService;
    }

    @GetMapping("/students") // Get All the employees
    public List<Student> findAllEmp(){
        return employeeService.findAll();
    }

    @GetMapping("/students/{rollNo}") // Get single employee by Id
    public Student getEmployee(@PathVariable int rollNo){

        Student empx= employeeService.findById(rollNo);

        if(empx==null){
            throw new RuntimeException("Student Id not Found - "+rollNo);
        }
        return empx;
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/students")  // Post request to add a new employee
    public Student addEmployee(@RequestBody Student employeeNew){

        return employeeService.save(employeeNew);
    }

    @PutMapping("/students") // Put request to update (overwrite) an employee
    public Student updateEmp(@RequestBody Student yoEmp){
        return employeeService.save(yoEmp);
    }

    @DeleteMapping("students/{rollNo}") // Delete request to delete an employee by Id
    public String deleteEmp(@PathVariable int rollNo){

        Student temp= employeeService.findById(rollNo);
        if(temp==null) {
            throw new RuntimeException("Employee Id not found - " + rollNo);
        }
        employeeService.deleteById(rollNo);

        return "Deleted Student Id: "+rollNo;
    }
}
