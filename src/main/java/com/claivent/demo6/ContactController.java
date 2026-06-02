package com.claivent.demo6;


import com.claivent.demo6.model.contact;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import java.util.List;

@Controller
public class ContactController {
    private final ContactServices contactServices;

    public ContactController(ContactServices contactServices) {
        this.contactServices = contactServices;
    }


    @GetMapping("/api/contacts")
    public String contacts (Model model)   {
        model.addAttribute("contacts", contactServices.getContacts());
        return "contacts"; // → templates/contacts.htmll
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/contacts")
    @ResponseBody
    public List<contact> contactsApi(){
        return contactServices.getContacts();
    }



}
