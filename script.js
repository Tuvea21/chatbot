const form = document.getElementById('chatForm');
const input = document.getElementById('userInput');
const chatBox = document.getElementById('chatBox');

const respostasBot = [
  "Oi! Como posso ajudar você hoje?",
  "Boa! Me conta mais.",
  "Hmmm... interessante!",
  "Desculpa, não entendi muito bem 😅",
  "Vamos mudar de assunto?",
  "Pode repetir por favor?",
  "Haha, essa foi boa!",
  "Sou só um script, mas gosto de conversar 😎",
  "Precisa de ajuda com algo?"
];

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const mensagem = input.value.trim();
  if (mensagem === '') return;

  mostrarMensagem(mensagem, 'user');
  input.value = '';

  setTimeout(() => {
    const resposta = respostasBot[Math.floor(Math.random() * respostasBot.length)];
    mostrarMensagem(resposta, 'bot');
  }, 600);
});

function mostrarMensagem(texto, classe) {
  const msg = document.createElement('div');
  msg.classList.add('message', classe);
  msg.textContent = texto;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}
