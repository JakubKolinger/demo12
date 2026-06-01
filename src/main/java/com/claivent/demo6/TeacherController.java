package com.claivent.demo6;


import com.claivent.demo6.model.Teacher;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import java.util.List;

@Controller
public class TeacherController {
  private final TeacherServices teacherServices;

  public TeacherController(TeacherServices teacherServices) {this.teacherServices = teacherServices;}


  @GetMapping("/teachers")
    public String users (Model model)   {
        model.addAttribute("teachers", teacherServices.getTeachers());
        return "teachers"; // → templates/users.html
}

@CrossOrigin(origins = "http://localhost:4200")
  @GetMapping("/api/teachers")
  @ResponseBody
  public List<Teacher> teachersApi(){
    return teacherServices.getTeachers();
}



}
