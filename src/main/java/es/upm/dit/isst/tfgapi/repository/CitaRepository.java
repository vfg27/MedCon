package es.upm.dit.isst.tfgapi.repository;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import java.util.List;
import es.upm.dit.isst.tfgapi.model.Cita;

public interface CitaRepository extends CrudRepository<Cita, Integer> {
    List<Cita> findBySalaEspera(Integer salaEspera);
    List<Cita> findByRegistrada(Boolean registrada);
    List<Cita> findByAtendida(Boolean atendida);
    List<Cita> findBySalaEsperaAndRegistradaAndAtendidaAndSalaConsultaOrderByHoraProgramadaAsc(Integer salaEspera, Boolean registrada, Boolean atendida, Integer salaConsulta);
    List<Cita> findBySalaEsperaAndRegistradaAndAtendidaOrderByHoraInicioDesc(Integer salaEspera, Boolean registrada, Boolean atendida);
    Optional<Cita> findByDni(String dni);
    List<Cita> findBySalaConsultaAndAtendidaOrderByHoraProgramadaAsc(Integer salaConsulta, boolean atendida);
    List<Cita> findBySalaConsultaAndRegistradaAndAtendidaOrderByHoraInicioAsc(Integer salaConsulta,  boolean registrada, boolean atendida);
    void deleteByDni(String dni);
}
