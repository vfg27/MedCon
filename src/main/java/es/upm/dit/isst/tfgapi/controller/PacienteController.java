package es.upm.dit.isst.tfgapi.controller;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
//import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import es.upm.dit.isst.tfgapi.model.Paciente;
//import es.upm.dit.isst.tfgapi.model.TFG;
import es.upm.dit.isst.tfgapi.repository.PacienteRepository;
//import es.upm.dit.isst.tfgapi.repository.TFGRepository;

@RestController

public class PacienteController {

    private final PacienteRepository pacienteRepository;
    public static final Logger log = LoggerFactory.getLogger(PacienteController.class);

    public PacienteController(PacienteRepository t) {

        this.pacienteRepository = t;

    }

    @GetMapping("/pacientes")

    List<Paciente> readAll() {

        return (List<Paciente>) pacienteRepository.findAll();

    }

    @PostMapping("/pacientes")

    ResponseEntity<Paciente> create(@RequestBody Paciente newPaciente) throws URISyntaxException {

        Paciente result = pacienteRepository.save(newPaciente);

        return ResponseEntity.created(new URI("/pacientes/" + result.getCipa())).body(result);

    }

}

