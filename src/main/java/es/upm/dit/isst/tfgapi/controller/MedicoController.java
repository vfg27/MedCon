package es.upm.dit.isst.tfgapi.controller;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
//import java.util.TimeZone;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
//import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
//import org.springframework.security.core.annotation.AuthenticationPrincipal;
//import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import es.upm.dit.isst.tfgapi.model.Medico;
//import es.upm.dit.isst.tfgapi.model.Paciente;
//import es.upm.dit.isst.tfgapi.model.TFG;
import es.upm.dit.isst.tfgapi.repository.MedicoRepository;
@RestController

public class MedicoController {

    private final MedicoRepository medicoRepository;
    public static final Logger log = LoggerFactory.getLogger(MedicoController.class);

    public MedicoController(MedicoRepository t) {

        this.medicoRepository = t;

    }


    @GetMapping("/medicos")

    List<Medico> readAll() {

        return (List<Medico>) medicoRepository.findAll();

    }

    @PostMapping("/medicos")

    ResponseEntity<Medico> create(@RequestBody Medico newMedico) throws URISyntaxException {

        System.out.println(newMedico);

        //Paciente nuevo = new Paciente();
        //nuevo.setCipa(newCita.);

        Medico result = medicoRepository.save(newMedico);

        System.out.println(result);

        return ResponseEntity.created(new URI("/medicos/" + result.getId())).body(result);

    }

    @GetMapping("/medicos/{id}")

    List<Medico> read(@PathVariable Integer id) {


        return (List<Medico>) medicoRepository.findBySalaEspera(id);

    }

    @GetMapping("/medicos/username/{username}")

    List<Medico> readUsername(@PathVariable String username) {
        return (List<Medico>) medicoRepository.findByUsername(username);
    }

    }


