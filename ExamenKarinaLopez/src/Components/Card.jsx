import React from "react";
import CardStyles from "../Styles/Card.module.css";


const Card = ({ data }) => {
  return (
    <>
      {data && (
        <div className="contenedorForm">
          <div className={CardStyles.cardResp}>
            <h2>
              Felicidades 🎉{" "}
              <span>
                {data.nombre} {data.apellido}
              </span>{" "}
              has quedado registrado para el parcial de: <span>{data.materia}</span>
            </h2>
          </div>
        </div>
      )}
    </>
  );
};
export default Card;
