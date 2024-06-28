import "../../styles/cursos.css";

interface ListadoCursosProps {
  cursos: { id: number; title: string; detalle: string }[];
  setCursoSeleccionado: React.Dispatch<
    React.SetStateAction<{
      id: number;
      title: string;
      detalle: string;
    }>
  >;
}

export const ListadoCursos = ({
  cursos,
  setCursoSeleccionado,
}: ListadoCursosProps) => {
  const handleSelected = (id: number) => {
    setCursoSeleccionado(cursos[id - 1]);
  };
  return (
    <ul className="ul-cursos">
      {cursos.map((curso) => (
        <li
          key={curso.id}
          className="li-cursos"
          onClick={() => handleSelected(curso.id)}>
          {curso.title}
        </li>
      ))}
    </ul>
  );
};
