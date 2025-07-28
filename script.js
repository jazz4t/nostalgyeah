function poke() {
  const responses = ["You poked Mira!", "Mira poked you back!", "You already poked!", "Try again later."];
  const rand = Math.floor(Math.random() * responses.length);
  document.getElementById('poke-response').innerText = responses[rand];
}
