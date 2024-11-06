package es.upm.dit.isst.tfgapi.model;

import java.util.Date;

//import javax.persistence.Column;
import javax.persistence.Entity;
//import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;



@Entity
public class Medico {
    
    @Id
    @GeneratedValue( strategy=GenerationType.AUTO )
    private Integer id;
    private String nombreMedico;
    private Date horaInicio;
    private Integer salaConsulta;
    private Integer salaEspera;
    private String especialidad;
    private String imagenMedico;
    private String username;


    public Medico () { }

    public Medico(Integer id, String nombreMedico, Date horaInicio, Integer salaConsulta, Integer salaEspera, String especialidad, String imagenMedico, String username) {
        this.id = id;
        this.nombreMedico=nombreMedico;
        this.horaInicio = horaInicio;
        this.salaConsulta = salaConsulta;
        this.salaEspera = salaEspera;
        this.especialidad=especialidad;
        this.imagenMedico=imagenMedico;
        this.username = username;
    }



    public String getNombreMedico() {
        return nombreMedico;
    }

    public void setNombreMedico(String nombreMedico) {
        this.nombreMedico = nombreMedico;
    }

    public Integer getSalaConsulta() {
        return salaConsulta;
    }

    public void setSalaConsulta(Integer salaConsulta) {
        this.salaConsulta = salaConsulta;
    }

    public Integer getSalaEspera() {
        return salaEspera;
    }

    public void setSalaEspera(Integer salaEspera) {
        this.salaEspera = salaEspera;
    }

    public Integer getId() {
        return id;
    }


    public void setId(Integer id) {
        this.id = id;
    }


    public Date gethoraInicio() {
        return horaInicio;
    }


    public void sethoraInicio(Date horaInicio) {
        this.horaInicio = horaInicio;
    }



    public String getEspecialidad() {
        return especialidad;
    }


    public void setEspecialidad(String especialidad) {
        this.especialidad = especialidad;
    }


    public String getImagenMedico() {
        return imagenMedico;
    }


    public void setImagenMedico(String imagenMedico) {
        this.imagenMedico = imagenMedico;
    }

    public String getUsername() {
        return username;
    }


    public void setUsername(String username) {
        this.username = username;
    }


    @Override
    public String toString() {
        return "Medico [nombreMedico =" + nombreMedico + ", especialidad=" + especialidad + ", horaInicio=" + horaInicio + ", id="
                + id + ", salaConsulta=" + salaConsulta
                + ", salaEspera=" + salaEspera  + "]";
    }

}
