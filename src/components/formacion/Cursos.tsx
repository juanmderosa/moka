import { ListadoCursos } from "./ListadoCursos";
import "../../styles/cursos.css";
import { useState } from "react";
import { DetalleCurso } from "./DetalleCurso";
import { cursos } from "../../assets/cursos/cursos";

export const Cursos = () => {
  const [cursoSeleccionado, setCursoSeleccionado] = useState(cursos[0]);

  return (
    <section className="main-container">
      <article className="courses-container">
        <div className="title-container">
          <h2 className="cursos-title">Cursos</h2>
          <h3 className="cursos-subtitle">de formación Profesional</h3>
          <h4 className="cursos-select">
            Seleccioná el curso para conocer más acerca del mismo
          </h4>
        </div>
        <ListadoCursos
          cursos={cursos}
          setCursoSeleccionado={setCursoSeleccionado}
        />
      </article>
      <article className="detail-container">
        <DetalleCurso cursoSeleccionado={cursoSeleccionado} />
      </article>
    </section>
  );
};
