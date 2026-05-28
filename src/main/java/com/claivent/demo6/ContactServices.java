package com.claivent.demo6;
import com.claivent.demo6.model.contact;
import java.util.List;
import org.springframework.stereotype.Service;

@Service
public class ContactServices {

    public List<contact> getContacts() {
        return List.of(
                new contact("John Doe", "john.doe@example.us",   " +1 202-555-0143"),
                new contact("Jane Smith", "jane.smith@example.de",  " +49 151 5554321"),
                new contact("Pepa Vomáčka", "pepa.vomacka@example.cz", "+420 777 123 456")
        );
    }
}
