package es.upm.dit.isst.tfgapi.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ProyController {
    
    @GetMapping("/userclass")
    public Boolean getUsers(HttpServletRequest request) {
    if (request.isUserInRole("ROLE_MEDICO")) {
        return true;
    }
    return false;
}

    @GetMapping("/username")
    public String username() {
       return SecurityContextHolder.getContext().getAuthentication().getName();
    }

}
