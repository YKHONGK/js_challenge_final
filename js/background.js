const images = ["1.jpg", "2.jpg", "3.jfif", "4.jfif", "5.jpg", "6.jpg", "7.jpg"];

function randomBackgroundImage() {
    const randombgimage = images[Math.floor(Math.random() * images.length)];
    console.log(randombgimage);
    const stylebg = document.querySelector("head #bg");
    stylebg.innerText = `body { background-image: url('img/${randombgimage}'); background-repeat: no-repeat; background-attachment: fixed; background-size: 100% 100%;}`;
  }

function firstBackGround() {
    const newScript = document.createElement("style");
    newScript.id = "bg";
    const newContent = document.createTextNode(
      `body {background-image: url('img/1.jpg'); background-repeat: no-repeat; background-attachment: fixed; background-size: 100% 100%;}`
    );
    newScript.appendChild(newContent);
    const currentTitle = document.querySelector("title");
    document.head.insertBefore(newScript, currentTitle);
  }
  
firstBackGround();
setInterval(randomBackgroundImage, 10000);

