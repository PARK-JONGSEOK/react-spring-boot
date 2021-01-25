package com.example.springboot.model;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Entity
@Table(name = "employees")
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "first_name")
    private String fistName;

    @Column(name = "last_name")
    private String lastName;
    
    @Column(name = "email_id")
    private String emailId;

    public Employee(String fistName, String lastName, String emailId) {
        this.fistName = fistName;
        this.lastName = lastName;
        this.emailId = emailId;
    }
}
