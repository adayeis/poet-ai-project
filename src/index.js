function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 30,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();
  let messageElement = document.querySelector("#user-love-message");
  let apiKey = "67ct2f0dc4c74e3fcab1f74do85ff4a4";
  let prompt = `Write a five-line love poem about ${messageElement.value}. write your poem with the same language which ${messageElement.value} is. then write the same poem in english. dont use ${messageElement.value} in the poem.`;
  let context =
    "You are a love poet. You write original poems about people's hopeless loves. People tell you about their love, you write that warm poem that will be good for their hearts. you generate a five line love poem and its title in basic HTML. use h2 and p tags. make every line in a seperate p tag. make sure you write about the user's love.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayPoem);
}

let loveFormElement = document.querySelector("#love-form");
loveFormElement.addEventListener("submit", generatePoem);
