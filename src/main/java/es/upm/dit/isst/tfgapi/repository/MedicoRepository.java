package es.upm.dit.isst.tfgapi.repository;

//import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import java.util.List;
import es.upm.dit.isst.tfgapi.model.Medico;

public interface MedicoRepository extends CrudRepository<Medico, String> {
    List<Medico> findBySalaEspera(Integer salaEspera);
    List<Medico> findBySalaConsulta(Integer salaConsulta);
    List<Medico> findByEspecialidad(String especialidad);
    List<Medico> findByNombreMedico(String nombreMedico);
    List<Medico> findByUsername(String username);
}