import "./styles.css";
import Saludo from "./Saludo";
import Empleado from "./empleado";

function MiComponente() {
  return <h1>!soy un componente!</h1>;
}
const OtroComponente = () => {
  return <p>!Tambien soy un componente!</p>;
};

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <MiComponente />
      <MiComponente />
      <OtroComponente />
      <Saludo nono="Maria" />
      <Saludo nombre="gyjgyu" />
      <Empleado />
    </div>
  );
}
const empleados = [
  {
    id: 1,
    nombre: "Ana Garcia",
    puesto: "Desarrolladora Frontend",
    departamento: "Tecnologia",
    salario: "4500",
    Experiencia: "3 años",
    activo: true,
    skills: ["React", "JavaScript", "Css"],
  },
  {
    id: 2,
    nombre: "Carlos Lopez",
    puesto: "Diseñador ux",
    departamento: "Diseño",
    salario: "4000",
    Experiencia: "2 años",
    activo: true,
    skills: ["figma", "photoshop", "Ux research"],
  },
  {
    id: 3,
    nombre: "Maria Rodriguez",
    puesto: "Backend Developer ",
    departamento: "Tecnoloia",
    salario: "5000",
    Experiencia: "6 años",
    activo: false,
    skills: ["Node.js", "Python", "MongoDb"],
  },
  {
    id: 4,
    nombre: "Luis Martinez",
    puesto: "Marketing manager",
    departamento: "Marketing",
    salario: "4200",
    Experiencia: "6 años",
    activo: true,
    skills: ["SEO", "Google Ads", "Analitics"],
  },
  {
    id: 5,
    nombre: "Sofia Chen",
    puesto: "data scientist",
    departamento: "tecnologia",
    salario: "5500",
    Experiencia: "2 años",
    activo: true,
    skills: ["Python", "Machine Learning", "SQL"],
  },
];
