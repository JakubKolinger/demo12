package com.claivent.demo6;

import com.claivent.demo6.model.Student;
import java.util.List;
import org.springframework.stereotype.Service;

@Service
public class StudentServices {

  public List<Student> getStudents() {
    return List.of(
        new Student(1L, "Jan Novák",   "jan@example.com"),
        new Student(2L, "Petra Malá",  "petra@example.com"),
        new Student(3L, "Tomáš Vlček", "tomas@example.com")
    );
  }
}
