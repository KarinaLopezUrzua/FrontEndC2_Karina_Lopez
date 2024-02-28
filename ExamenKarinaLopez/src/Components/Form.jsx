import { useState } from "react";
import FormStyles from "../Styles/Form.module.css";
import Card from "./Card";


const Form = () => {
  let opcionesMateria = [
    { id: 1, nombre: "React" },
    { id: 2, nombre: "Angular" },
    { id: 3, nombre: "Vue" },
    { id: 4, nombre: "JavaScript" },
  ];

  const [formulario, setFormulario] = useState({
    nombre: "",
    apellido: "",
    direccion: "",
    materia: "",
  });

  const [err, setErr] = useState(false);

  const [show, setShow] = useState({ show: false, data: {} });

  //maneja los cambios en todos los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormulario({ ...formulario, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      //validacion donde nombre y apellido (primer input) tengan una longitud minima y son espacios en blanco al inicio)
      formulario.nombre.trim().length < 3 ||
      formulario.apellido.trim().length < 3 ||
      formulario.nombre.startsWith(" ") ||
      formulario.apellido.startsWith(" ") ||
      //validacion donde direccion (segundo input) contenga 6 caracteres
      formulario.direccion.length < 6
    ) {
      setErr(true);
    } else {
      setErr(false);
      setShow({
        show: true,
        data: {
          nombre: formulario.nombre,
          apellido: formulario.apellido,
          materia: formulario.materia,
        }
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="contenedorForm">
        <div className="cardForm">
          <div>
            <label className={FormStyles.labelForm}> 🔹 Nombre Completo</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formulario.nombre}
              onChange={handleChange}
              className={`${FormStyles.inputForm} ${FormStyles.inputNombre}`}
              placeholder="Nombre"
            />

            <input
              type="text"
              id="apellido"
              name="apellido"
              value={formulario.apellido}
              onChange={handleChange}
              className={FormStyles.inputForm}
              placeholder="Apellido"
            />
          </div>

          <div>
            <label className={FormStyles.labelForm}> 🔹 Dirección</label>
            <input
              type="text"
              id="direccion"
              name="direccion"
              value={formulario.direccion}
              onChange={handleChange}
              className={`${FormStyles.inputForm} ${FormStyles.direction}`}
              placeholder="Ejemplo: Dirección 103"
            />
          </div>

          <div>
            <label className={FormStyles.labelForm}> 🔹 Framework</label>
            <select
              id="materia"
              name="materia"
              value={formulario.materia}
              onChange={handleChange}
              className={`${FormStyles.inputForm} ${FormStyles.direction}`}
            >
              <option>Selecciona tu framework de JavaScript</option>
              {opcionesMateria.map((materia) => (
                <option key={materia.id} value={materia.nombre}>
                  {materia.nombre}
                </option>
              ))}
            </select>
          </div>

          <button type="submit" className={FormStyles.boton}>
            Enviar
          </button>
        </div>
        <div>
          {err && (
            <h4 className={FormStyles.errorMensaje}>
              {" "}
              ⚠️ Por favor chequea que la información sea correcta
            </h4>
          )}
        </div>
      </div>

      {show.show && <Card data={show.data} />}

    </form>
  );
};

export default Form;
