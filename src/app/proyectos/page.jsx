import React from "react";
import { proyects } from "../data";

const Proyectos = () => {
  return (
    <div className="flex flex-wrap bg-colorOscuro m-2">
      {proyects.map(({ imagen, nombre, descripcion, visitame }, id) => (
        <div key={id} className="w-full md:w-1/3  p-4">
          <div className="bg-colorOscuro overflow-hidden rounded-lg  transition-transform transform hover:scale-105 ">
            <img src={`/${imagen}`} alt="" className="object-cover h-[300px] w-full" />
          </div>

          <h1 className=" text-white font-bold text-3xl p-2 ">{nombre}</h1>
          <p className=" text-white  ">{descripcion}</p>
          <a href={visitame} target="Blank" className="  text-colorVerde font-semibold flex items-center justify-end mt-2 pr-16  ">
            Visítame
          </a>
        </div>
      ))}
    </div>
  );
};

export default Proyectos;
