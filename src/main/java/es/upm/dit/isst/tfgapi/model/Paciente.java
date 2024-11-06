package es.upm.dit.isst.tfgapi.model;

import javax.persistence.Entity;
//import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "paciente")
public class Paciente {

    @Id
    private String cipa;
    private String dni;
    private String centroMedico;

    public Paciente(String cipa, String dni, String centroMedico) {
        this.cipa = cipa;
        this.dni = dni;
        this.centroMedico = centroMedico;
    }

    public Paciente(){}

    public String getCentroMedico() {
        return centroMedico;
    }

    public void setCentroMedico(String centroMedico) {
        this.centroMedico = centroMedico;
    }

    public String getCipa() {
        return cipa;
    }

    public void setCipa(String cipa) {
        this.cipa = cipa;
    }

    public String getDni() {
        return dni;
    }

    public void setDni(String dni) {
        this.dni = dni;
    }

    @Override
    public String toString() {
        return "Paciente [centroMedico=" + centroMedico + ", cipa=" + cipa + ", dni=" + dni + "]";
    }
 
    
}
