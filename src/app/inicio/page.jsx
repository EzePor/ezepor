import React from "react";

const Inicio = () => {
  return (
    <>
      <div className=" ">
        <div className="bg-colorOscuro rounded-3xl w-[90%] h-auto m-auto mt-5 flex flex-1 align-center justify-center  ">
          <div className=" ">
            <img
              src="./imagenes/fotoPerfil.jpg"
              alt="Ezequiel"
              className=" w-[450px] h-auto p-2 object-cover rounded-3xl"
            />
          </div>
          <div className="">
            <h1 className="text-colorVerde font-extrabold text-4xl m-auto p-6 ">
              Ezequiel Porchietto
            </h1>
            <p className="text-white text-lg m-auto p-4">
              ¡Hola! Soy un estudiante de tercer año de la Tecnicatura Superior
              en Desarrollo de Software en el Instituto Superior de Profesorado
              N°20, ubicado en la hermosa ciudad de San Justo, en la provincia
              de Santa Fe, Argentina.
            </p>
          </div>
        </div>
        <div className="bg-colorOscuro w-[90%] h-auto m-auto mt-5 rounded-3xl ">
          <p className="text-white text-lg mb-4  m-auto p-6">
            Desde que inicié mi camino en el mundo del desarrollo de software,
            he cultivado una mentalidad autodidacta que me ha permitido explorar
            y aprender más allá de las aulas. Mi experiencia académica me ha
            brindado una sólida base, pero mi verdadera pasión por la
            programación me impulsa a ir más allá, siempre en busca de nuevos
            conocimientos y desafíos. Me defino como una persona responsable,
            disciplinada, y confiable, comprometida con mi crecimiento tanto en
            el ámbito académico como en el personal. Aunque estoy en las etapas
            iniciales de mi carrera, mi entusiasmo y determinación me impulsan a
            superar cualquier obstáculo que se presente. Me considero un
            apasionado por el aprendizaje continuo, siempre con ganas de
            explorar nuevas tecnologías y tendencias en el mundo del desarrollo
            de software. Mi compromiso no solo radica en avanzar en mi carrera,
            sino también en evolucionar como individuo, creando un equilibrio
            entre el conocimiento técnico y el desarrollo personal. Estoy
            emocionado por lo que el futuro me depara y ansioso por seguir
            aprendiendo y creciendo en esta apasionante trayectoria. <br/>¡Bienvenido/a a mi espacio virtual,
            donde comparto mi viaje y logros mientras sigo construyendo mi
            camino en este fascinante campo!
          </p>
        </div>
      </div>
    </>
  );
};

export default Inicio;
