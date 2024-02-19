"use client";
import { useEffect, useState } from 'react';
import obtenerVideosElegidos from '../llamadaApi.js';

const VideoYoutube = () => {

  const [videos, setVideos] = useState([]);
    useEffect(() => {
      const obtenerDatos = async ()=>{
        try{
        const datos = await obtenerVideosElegidos();
        setVideos(datos)
        console.log('Datos obtenidos:',datos)
      }catch(error){
        console.error('ERROR AL OBTENER DATOS', error);
      }
    };
      obtenerDatos();}
     ,[])
     return (
      <div className=' m-auto w-[95%] '>
        <h2 className='text-colorOscuro font-bold text-center text-4xl  '>Mis Videos de YouTube</h2>
        <div className='flex flex-wrap justify-around bg-colorOscuro m-2 '>
          {videos.length > 0 ? (
            videos.map((video) => (
              <div key={video.id} className=' w-full max-w-[450px] md:w-1/3 p-4  '>
                <div className='overflow-hidden rounded-lg transition-transform transform hover:scale-105 m-2 hover:shadow-md hover:shadow-white ' >
                <iframe 
                className='object-cover  '  
                  width="403"
                  height="213"
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.snippet.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                </div>
                <h2  className='text-white font-semibold'>{video.snippet.title}</h2>
                <p className="nombre_canal text-white text-lg ">{video.snippet.channelTitle}</p>
              </div>
            ))
          ) : (
            <p>No hay videos disponibles.</p>
          )}
        </div>
      </div>
    );   }

export default VideoYoutube
