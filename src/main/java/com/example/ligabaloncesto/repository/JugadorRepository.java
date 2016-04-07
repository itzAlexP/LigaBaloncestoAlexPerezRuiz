package com.example.ligabaloncesto.repository;

import com.example.ligabaloncesto.domain.Jugador;
import com.example.ligabaloncesto.domain.Equipo;

import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.query.Param;

import java.util.List;

/**
 * Spring Data JPA repository for the Jugador entity.
 */
public interface JugadorRepository extends JpaRepository<Jugador,Long> {

    List<Jugador> findByCanastasTotalesGreaterThanEqual(Integer canastas);
    @Query("select j from Jugador j, Equipo e where j.equipo = e.id and e.id =:idEquipo and j.canastasTotales>=:numCanastas")
    public List<Jugador> Ejercicio2 ( @Param("idEquipo") Long idEquipo, @Param("numCanastas") Integer numCanastas);
}
