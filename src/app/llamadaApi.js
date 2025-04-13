const videosElegidos = [
   'kN1XP-Bef7w', // html, Css
   'rbuYtrNUxg4',
   'OWKXEJN67FE',
   'XqFR2lqBYPs',
   'MJkdaVFHrto',
   'wZniZEbPAzk',
   'vz4z0RLcAyk',
   'jeQiN0gPIZw',
   'XZTt1NFDnDw',
   '8-RC-Q7Wtzc',
   'QBOUSrMqlSQ',
   'bNV6iw13Rnk',
   'rTtC6Q-71qg',
   'ivdTnPl1ND0',// Javascript
   'z95mZVUcJ-E',
   'xOinGb2MZSk',
   'EbMi1Qj4rVE',
   'N8Xt5rP_DUo',
   'Eh-s-n_6zNQ',
   'YfaiDc585Eo',
   'lVqHiTCIRQg',
   '6Jfk8ic3KVk', // React
   'rLoWMU4L_qE', 
   'ladwC6Lrs-M',
   '0C5yFwOYhAk',
   'Dl8x8EWXq8s',
   'oT-feDPuJmk',
   '_SPoSMmN3ZU', // next js
   'H_s-xM6Ii1g',
   'Ywj6YGgE5RI',
   '8binu_VIOMA',
   '4V7rfombLkc',
   '46uSqaUBOMw',
   'h5HQVHTpeHs', // Tailwind CSS
   '4Xv8AfEHOsI',
   'vwNklJxbsw0',
   'VcIQviqWDRs',
   'GAcq61I9IVM',
   'vwNklJxbsw0',
   '',
   '',
   '',
   '',
     // Agrega más IDs según sea necesario
];

const obtenerVideosElegidos = async () => {
  const apiKey = 'AIzaSyBAyZnpyHHHeANPkGjD9Ku-aXjq6z2_Gbo';
  const apiUrl = 'https://www.googleapis.com/youtube/v3/videos';
  const maxResults = 5; // Número de videos que deseas mostrar

  const videoIds = videosElegidos.join(',');

  const response = await fetch(
    `${apiUrl}?part=snippet&id=${videoIds}&maxResults=${maxResults}&key=${apiKey}`
  );

  const data = await response.json();

  return data.items;
  
};


// Llamada a la función y manejo de los resultados
obtenerVideosElegidos().then(videos => {
  console.log(videos);
  // Aquí puedes procesar los resultados y mostrarlos en tu portafolio
});

export default obtenerVideosElegidos;
