package com.lcaohoanq.utilities.views.hashingpwd;

import com.lcaohoanq.utilities.utils.PBKDF2;
import java.util.HashMap;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/pbkdf2")
public class PBKDF2View {

    @Autowired
    private PBKDF2 pbkdf2;

    @PostMapping("/hash")
    public Map<String, String> hashPassword(@RequestBody Map<String, String> request) {
        String password = request.get("password");
        String hashedPassword = pbkdf2.hash(password.toCharArray());
        Map<String, String> response = new HashMap<>();
        response.put("hashedPassword", hashedPassword);
        return response;
    }

}
