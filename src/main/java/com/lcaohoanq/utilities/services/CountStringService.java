package com.lcaohoanq.utilities.services;

import com.vaadin.flow.server.auth.AnonymousAllowed;
import com.vaadin.hilla.BrowserCallable;
import org.springframework.stereotype.Service;

@BrowserCallable
@AnonymousAllowed
@Service
public class CountStringService {

    public String count(String data) {
        if (data.isEmpty()) {
            return "Empty String";
        } else {
            return data.length() + " characters";
        }
    }
}
