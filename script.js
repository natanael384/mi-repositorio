document.addEventListener("DOMContentLoaded", () => {
  let img1 = document.getElementById("img1");
  const btn1 = document.getElementById("btn1");
  let img2 = document.getElementById("img2");
  let img3 = document.getElementById("img3");
  const btn2 = document.getElementById("btn2");
  const btn3 = document.getElementById("btn3");

  btn1.addEventListener("mouseenter", () => {
    let personajes = ["Monkey D. Luffy", "meliodas", "Rengoku", "Naruto"];
    let random = personajes[Math.floor(Math.random() * personajes.length)];
    fetch(`https://api.jikan.moe/v4/characters?q=${random}`)
      .then((res) => res.json())
      .then((data) => {
        img1.src = data.data[0].images.jpg.image_url;
      });
  });
});

btn2.addEventListener("mouseenter", () => {
  let personajes = ["Monkey D. Luffy", "meliodas", "Rengoku", "Naruto"];
  let random = personajes[Math.floor(Math.random() * personajes.length)];
  fetch(`https://api.jikan.moe/v4/characters?q=${random}`)
    .then((res) => res.json())
    .then((data) => {
      img2.src = data.data[0].images.jpg.image_url;
    });
});

btn3.addEventListener("mouseenter", () => {
  let personajes = ["Monkey D. Luffy", "meliodas", "Rengoku"];
  let random = personajes[Math.floor(Math.random() * personajes.length)];
  fetch(`https://api.jikan.moe/v4/characters?q=${random}`)
    .then((res) => res.json())
    .then((data) => {
      img3.src = data.data[5].images.jpg.image_url;
    });
});



Notification.requestPermission().then((permiso)=>{
    if(permiso==="granted"){
        new Notification("hola insircunsiso")
    }
})
