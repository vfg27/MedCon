package es.upm.dit.isst.tfgapi.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
//import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;



@Entity
public class Cita {
    
    @Id
    @GeneratedValue( strategy=GenerationType.AUTO )
    private Integer id;
    private String name;
    private String motivo;
    private String foto;
    @Column(columnDefinition = "boolean default false")
    private Boolean registrada;
    @Column(columnDefinition = "boolean default false")
    private Boolean atendida;
    private Date horaProgramada;
    private Date horaInicio;
    private Date hora_fin_consulta;
    @Column(length = 6)
    private String codigo;
    private Integer salaConsulta;
    private Integer salaEspera;
    @Column(length = 9, nullable=false, unique=true)
    private String dni;

    public Cita () { }

    public Cita(Integer id, Boolean registrada, Boolean atendida, Date horaProgramada, Date horaInicio,
            Date hora_fin_consulta, String codigo, Integer salaConsulta, Integer salaEspera, String dni, String name, String motivo, String foto) {
        this.id = id;
        this.registrada = registrada;
        this.atendida = atendida;
        this.horaProgramada = horaProgramada;
        this.horaInicio = horaInicio;
        this.hora_fin_consulta = hora_fin_consulta;
        this.codigo = codigo;
        this.salaConsulta = salaConsulta;
        this.salaEspera = salaEspera;
        this.dni = dni;
        this.name = name;
        this.motivo = motivo;
        this.foto=foto;
    }

    public String getMotivo() {
        return motivo;
    }

    public void setMotivo(String motivo) {
        this.motivo = motivo;
    }

    public String getFoto() {
        return foto;
    }

    public void setFoto(String foto) {
        this.foto = foto;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDni() {
        return dni;
    }

    public void setDni(String dni) {
        this.dni = dni;
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


    public Boolean getRegistrada() {
        return registrada;
    }


    public void setRegistrada(Boolean registrada) {
        this.registrada = registrada;
    }


    public Boolean getAtendida() {
        return atendida;
    }


    public void setAtendida(Boolean atendida) {
        this.atendida = atendida;
    }


    public Date getHoraProgramada() {
        return horaProgramada;
    }


    public void setHoraProgramada(Date horaProgramada) {
        this.horaProgramada = horaProgramada;
    }


    public Date gethoraInicio() {
        return horaInicio;
    }


    public void sethoraInicio(Date horaInicio) {
        this.horaInicio = horaInicio;
    }


    public Date getHora_fin_consulta() {
        return hora_fin_consulta;
    }


    public void setHora_fin_consulta(Date hora_fin_consulta) {
        this.hora_fin_consulta = hora_fin_consulta;
    }


    public String getCodigo() {
        return codigo;
    }


    public void setCodigo(String codigo) {
        this.codigo = codigo;
    }


    @Override
    public String toString() {
        return "Cita [atendida=" + atendida + ", codigo=" + codigo + ", hora_fin_consulta=" + hora_fin_consulta
                + ", horaInicio=" + horaInicio + ", horaProgramada=" + horaProgramada + ", id="
                + id + ", dni=" + dni + ", registrada=" + registrada + ", salaConsulta=" + salaConsulta
                + ", salaEspera=" + salaEspera + "]";
    }

}
