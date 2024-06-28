import "../../styles/cursos.css";

interface DetalleCursoProps {
  cursoSeleccionado: { id: number; title: string; detalle: string };
}

export const DetalleCurso = ({ cursoSeleccionado }: DetalleCursoProps) => {
  return (
    <>
      <h4 className="selected-course-title">{cursoSeleccionado.title}</h4>
      <p className="selected-course-description">{cursoSeleccionado.detalle}</p>
      <p className="selected-course-description">{cursoSeleccionado.detalle}</p>
    </>
  );
};
