package es.upm.dit.isst.tfgapi.controller;

import java.net.URI;
import java.net.URISyntaxException;
import java.text.ParseException;
//import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
//import java.util.TimeZone;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
//import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.DeleteMapping;
//import org.springframework.security.access.annotation.Secured;
//import org.springframework.security.core.annotation.AuthenticationPrincipal;
//import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import es.upm.dit.isst.tfgapi.model.Cita;
//import es.upm.dit.isst.tfgapi.model.Paciente;
//import es.upm.dit.isst.tfgapi.model.TFG;
import es.upm.dit.isst.tfgapi.repository.CitaRepository;
//import es.upm.dit.isst.tfgapi.repository.TFGRepository;

@RestController

public class CitaController {

    private final CitaRepository citaRepository;
    public static final Logger log = LoggerFactory.getLogger(CitaController.class);

    public CitaController(CitaRepository t) {

        this.citaRepository = t;

    }


    @GetMapping("/citas")

    List<Cita> readAll() {

        return (List<Cita>) citaRepository.findAll();

    }

    @PostMapping("/citas")

    ResponseEntity<Cita> create(@RequestBody Cita newCita) throws URISyntaxException {

        System.out.println(newCita);

        //Paciente nuevo = new Paciente();
        //nuevo.setCipa(newCita.);

        Cita result = citaRepository.save(newCita);

        System.out.println(result);

        return ResponseEntity.created(new URI("/citas/" + result.getId())).body(result);

    }

    @GetMapping("/sala/{id}")

    List<Cita> read(@PathVariable Integer id) {


        return (List<Cita>) citaRepository.findBySalaEsperaAndRegistradaAndAtendidaOrderByHoraInicioDesc(id, true, true);

    }

    // CAMBIADO POR PABLO //
    @GetMapping("/cola/{id}/{sala}")

    List<Cita> readCola(@PathVariable Integer id, @PathVariable Integer sala) {


        return (List<Cita>) citaRepository.findBySalaEsperaAndRegistradaAndAtendidaAndSalaConsultaOrderByHoraProgramadaAsc(id, true, false, sala);

    }

    @GetMapping("/paciente/{id}")

    ResponseEntity<Cita> read(@PathVariable String id) {

        return citaRepository.findByDni(id).map(cita ->

        ResponseEntity.ok().body(cita)

        ).orElse(new ResponseEntity<Cita>(HttpStatus.NOT_FOUND));

    }

    @PutMapping("/paciente/{registrada}/{id}/{codigo}")

    ResponseEntity<Cita> update(@PathVariable String id, @PathVariable String registrada, @PathVariable String codigo) throws ParseException {

    Date hora_inicio_cita = new Date();
       
      return citaRepository.findByDni(id).map(cita -> {

        if(registrada.equals("registrada")){
            cita.setRegistrada(true);
            cita.setCodigo(codigo);
        } else if (registrada.equals("atendida")){
            cita.setAtendida(true);
            cita.sethoraInicio(hora_inicio_cita);
        }
        citaRepository.save(cita);

        return ResponseEntity.ok().body(cita);

      }).orElse(new ResponseEntity<Cita>(HttpStatus.NOT_FOUND));

    }

    
    @GetMapping("/lista/primeros/{salaConsulta}")

    List<Cita> listaPrimeros(@PathVariable Integer salaConsulta) {
        return (List<Cita>) citaRepository.findBySalaConsultaAndRegistradaAndAtendidaOrderByHoraInicioAsc(salaConsulta, true, true);
    }

    @GetMapping("/lista/segundos/{salaConsulta}")

    List<Cita> listaSegundos(@PathVariable Integer salaConsulta) {

        return (List<Cita>) citaRepository.findBySalaConsultaAndAtendidaOrderByHoraProgramadaAsc(salaConsulta, false);

    }

    @DeleteMapping("/cita/eliminar/{dni}")
    @Transactional
    public ResponseEntity<Cita> deleteCita(@PathVariable String dni) {

        citaRepository.deleteByDni(dni);
        
        return ResponseEntity.ok().body(null);
        
        }

}
