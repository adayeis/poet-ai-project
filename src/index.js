function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "Your love poem will be here!",
    autoStart: true,
    delay: 30,
    cursor: "",
  });
}

let loveFormElement = document.querySelector("#love-form");
loveFormElement.addEventListener("submit", generatePoem);
