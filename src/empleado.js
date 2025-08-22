function Empleado() {
  return (
    <div className="fon_card">
      <h2>Analista qa</h2>
      <p>
        <strong>Mi nombre es:</strong> {props.nombre}
      </p>
      <p>
        <strong>puesto:</strong> {props.puesto}
      </p>
      <p>
        <strong>departamento:</strong> {props.departamento}
      </p>
      <p>
        <strong>salario:</strong> {props.salario}
      </p>
      <p>
        <strong>Experiencia:</strong> {props.Experiencia}
      </p>
      <p>
        <strong>Activo:</strong> {props.activo}
      </p>
      <p>
        <strong>skilss:</strong> {props.skills}
      </p>
    </div>
  );
}

export default Empleado;
