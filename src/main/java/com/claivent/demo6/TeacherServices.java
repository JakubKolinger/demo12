package com.claivent.demo6;

import com.claivent.demo6.model.Teacher;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TeacherServices {

  public List<Teacher> getTeachers() {
    return List.of(
        new Teacher(4L, "Karel Barel",   "karel@example.com"),
        new Teacher(5L, "Petr Skála",  "petr@example.com"),
        new Teacher(6L, "Jan Zapletený", "jan.zap@example.com")
    );
  }
}
