package com.example.ParkingApp.controller;

import com.example.ParkingApp.model.Employee;
import com.example.ParkingApp.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping(value ="/employees")
public class EmployeeController {

    @Autowired
        EmployeeRepository employeeRepository;

    @GetMapping(value = "/all")
    public List<Employee> getAll() {
        return employeeRepository.findAll();
    }


//    @GetMapping("/employees/{id}")
//    public Employee show(@PathVariable String ){
//        int id = Integer.parseInt(employeeId);
//        return employeeRepository.findOne(id);
//    }
//
//
//    @PostMapping("/blog/search")
//    public List<Employee> search(@RequestBody Map<String, String> body){
//        String searchTerm = body.get("text");
//        return blogRespository.findByTitleContainingOrContentContaining(searchTerm, searchTerm);
//    }
//
//    public ResponseEntity<Employee> getEmployeeById(@PathVariable(value="id") Long empid
}
