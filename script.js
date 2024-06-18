function baby() {
  console.log("heelo");
}

// minimenu
let bg = document.getElementById("wallpaper");
let minimenu = document.getElementById("minimenu");
bg.addEventListener("contextmenu", (e) => {
  console.log(e);
  minimenu.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  minimenu.style.visibility = "visible";
});
bg.addEventListener("dblclick", (e) => {
  console.log(e);
  minimenu.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  minimenu.style.visibility = "hidden";
});
bg.addEventListener("click", (e) => {
  folder.style.backgroundColor = "null";
});

// folder
let folders = document.querySelectorAll(".folder");
folders.forEach((folder) => {
  folder.addEventListener("click", () => {
    folder.style.backgroundColor = "blue";
  });
});
