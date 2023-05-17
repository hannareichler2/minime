document.querySelector(".container").addEventListener("click", function() {
  const images = [
    { src: "images/me.png", width: 130 },
    { src: "images/book.png", width: 50 },
    { src: "images/california.png", width: 500 },
    { src: "images/pan.png", width: 100 },
    { src: "images/flag.png", width: 200 },
    { src: "images/phone.png", width: 20 },
    { src: "images/piano.png", width: 500 },
    { src: "images/shoes.png", width: 70 },
    { src: "images/ski.png", width: 110 },
    { src: "images/yoga.png", width: 50 },
    { src: "images/camera.png", width: 40 }
  ];

  for (let i = 0; i < 72; i++) {
    const randomIndex = Math.floor(Math.random() * images.length);
    const img = new Image();
    img.src = images[randomIndex].src;
    img.style.width = `${images[randomIndex].width}px`;
    img.style.position = "absolute";
    img.style.left = `${Math.floor(Math.random() * 100)}%`;
    img.style.top = `${Math.floor(Math.random() * 100)}%`;
    document.body.appendChild(img);
  }

  const container2 = document.createElement("div");
  container2.className = "container2";
  container2.innerHTML = `
    <a href="me.html">
      <h1>CLICK HERE</h1>
    </a>
    <h2>TO GET TO KNOW ME</h2>
  `;
  document.body.insertBefore(container2, document.body.firstChild);
});
