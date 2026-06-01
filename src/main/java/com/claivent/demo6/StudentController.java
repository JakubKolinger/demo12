package com.claivent.demo6;


import com.claivent.demo6.model.Student;
import java.util.List;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class StudentController {
  private final StudentServices userServices;

  public StudentController(StudentServices userServices) {
    this.userServices = userServices;
  }


  @GetMapping("/students")
    public String users (Model model)   {
        model.addAttribute("students", userServices.getStudents());
        return "students"; // → templates/users.html
}

@CrossOrigin(origins = "http://localhost:4200")
  @GetMapping("/api/students")
  @ResponseBody
  public List<Student> usersApi(){
    return userServices.getStudents();
}



}
