package es.upm.dit.isst.tfgapi;

import static org.junit.jupiter.api.Assertions.assertEquals;

import static org.junit.jupiter.api.Assertions.assertFalse;

import static org.junit.jupiter.api.Assertions.assertNotEquals;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Optional;


import org.junit.jupiter.api.Test;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.boot.test.context.SpringBootTest;


import es.upm.dit.isst.tfgapi.model.Cita;

import es.upm.dit.isst.tfgapi.repository.CitaRepository;


@SpringBootTest

public class TestCitaService {

 

    @Autowired

    private CitaRepository repo;

 

    @Test

    final void testCita() throws ParseException {

        SimpleDateFormat formato = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss");

        Cita cita = new Cita();

        cita.setId(1);
        cita.setName("Eva Echevarria Leal");
        cita.setMotivo("Luxación de rodilla");
        cita.setHoraProgramada(formato.parse("2022-04-29 19:00:00"));
        cita.sethoraInicio(formato.parse("2022-04-29 19:02:00"));
        cita.setHora_fin_consulta(formato.parse("2022-04-29 19:04:00"));
        cita.setCodigo("111111");
        cita.setAtendida(true);
        cita.setRegistrada(true);
        cita.setDni("12345678A");
        cita.setSalaConsulta(1);
        cita.setSalaEspera(1);
        cita.setFoto("mujer.jpg");


       

        repo.save(cita);


        Optional<Cita> cita2 = repo.findById(1);

        assertEquals(cita2.get().getName(), cita.getName());

        assertEquals(cita2.get().getCodigo(), "111111");

        assertNotEquals(cita2.get().gethoraInicio(), "2022-04-30 19:02:00");

       

        cita.setName("Marta López Pérez");

        repo.save(cita);

        cita2 = repo.findById(1);

        assertNotEquals(cita2.get().getName(), "Eva Echevarria Leal");

               

        repo.delete(cita);

        cita2 = repo.findById(1);

        assertFalse(cita2.isPresent());


    }

}
