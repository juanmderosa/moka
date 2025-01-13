import "../../styles/cursos.css";

interface DetalleCursoProps {
  cursoSeleccionado: {
    id: number;
    title: string;
    detalle: string;
    programa: string;
  };
}

export const DetalleCurso = ({ cursoSeleccionado }: DetalleCursoProps) => {
  return (
    <>
      <h4 className="selected-course-title">{cursoSeleccionado.title}</h4>
      <p className="selected-course-description">{cursoSeleccionado.detalle}</p>
      <p className="selected-course-description">{cursoSeleccionado.detalle}</p>
      <a
        className="button"
        href={`${cursoSeleccionado.programa}.pdf`}
        target="_blank"
        rel="noopener noreferrer"
        download={true}>
        Descargar programa
      </a>
    </>
  );
};
