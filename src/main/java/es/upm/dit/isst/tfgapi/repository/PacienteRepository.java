package es.upm.dit.isst.tfgapi.repository;


import org.springframework.data.repository.CrudRepository;

import es.upm.dit.isst.tfgapi.model.Paciente;

public interface PacienteRepository extends CrudRepository<Paciente, Integer> {

}
