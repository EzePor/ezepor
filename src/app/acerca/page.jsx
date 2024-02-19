import React from "react";

const Acerca = () => {
  return (
    <div>
      <div className="flex p-5">
        <img src="./imagenes/softwares.png" alt="software" className="w-[300px] h-auto" />
        <div className="  m-auto p-4 hover:shadow-xl hover:bg-colorVerde hover:shadow-colorOscuro rounded-xl">
        <h2 className="text-4xl font-bold text-colorOscuro p-2 ">Conocimientos básicos obtenidos en :</h2>
        <h3 className="text-3xl font-semibold text-colorOscuro p-2">HTML, CSS, JAVASCRIPT,BOOSTRAP, REACT NATIVE, NEXT JS, TAILWIND CSS</h3>
        <h3 className="text-3xl font-semibold text-colorOscuro">C#, .NET MAUI C#, SQLSERVER, FIREBASE, MYSQL</h3>
        </div>
      </div>
      <div className="">
          <p className=" text-colorOscuro text-xl font-semibold m-8 p-6 ">
            Mi pasión por la programación se centra en el desarrollo web, donde
            busco lograr proyectos significativos e innovadores. Disfruto del
            diseño web y utilizo herramientas como Photoshop para dar vida a mis ideas. 
            Aunque aún no me especializo todavía en un lenguaje específico, he
            avanzado en varios y  he colaborado en proyectos importantes con mis
            compañeros. Mi enfoque está en el trabajo en equipo, y he
            contribuido en proyectos significativos en el instituto. Además, me
            dedico a la investigación continua y la ampliación de mis
            conocimientos en mi tiempo libre. Con un promedio superior a 9 y
            asistencia perfecta, demuestro mi compromiso y disciplina. Esta
            combinación de estudio y trabajo desde los 15 años ha fortalecido mi
            dedicación para superar desafíos y mejorar tanto personal como
            profesionalmente. Estoy emocionado por el futuro y ansío seguir
            avanzando en el desarrollo web. Html, CSS y Javascript fueron los primeros pasos y 
            ahora con React Next js Tailwind CSS la cabeza me vuela ..🤯
          </p>
        </div>
    </div>
  );
};

export default Acerca;
