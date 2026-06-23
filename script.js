const perguntas = [
  {
    pergunta: "O que significa IoT?",
    alternativas: [
      "Internet of Technology",
      "Internet of Things",
      "Integrated Online Technology",
      "Interface of Technology"
    ],
    correta: 1
  },
  {
    pergunta: "Qual dispositivo é exemplo de IoT?",
    alternativas: ["Livro", "Smartwatch", "Caderno", "Calculadora"],
    correta: 1
  },
  {
    pergunta: "Qual componente coleta dados do ambiente?",
    alternativas: ["Sensor", "Monitor", "Teclado", "Mouse"],
    correta: 0
  },
  {
    pergunta: "HTML serve para:",
    alternativas: ["Estruturar páginas", "Banco de dados", "Servidor", "Rede"],
    correta: 0
  },
  {
    pergunta: "Qual tag cria um link?",
    alternativas: ["img", "a", "div", "link"],
    correta: 1
  },
  {
    pergunta: "Qual tag cria um parágrafo?",
    alternativas: ["h1", "span", "p", "br"],
    correta: 2
  },
  {
    pergunta: "CSS é usado para:",
    alternativas: ["Programar", "Estilizar", "Hospedar", "Armazenar"],
    correta: 1
  },
  {
    pergunta: "Propriedade para cor do texto:",
    alternativas: ["font-size", "background", "color", "border"],
    correta: 2
  },
  {
    pergunta: "Propriedade para fundo:",
    alternativas: ["background-color", "color", "font", "size"],
    correta: 0
  },
  {
    pergunta: "Seletor de ID:",
    alternativas: [".", "#", "*", "@"],
    correta: 1
  },
  {
    pergunta: "JavaScript serve para:",
    alternativas: ["Interatividade", "Estrutura", "Banco", "Rede"],
    correta: 0
  },
  {
    pergunta: "Função para mostrar mensagem:",
    alternativas: ["show", "popup", "alert", "print"],
    correta: 2
  },
  {
    pergunta: "Evento de clique:",
    alternativas: ["onmove", "onclick", "onchange", "onload"],
    correta: 1
  },
  {
    pergunta: "Como declarar variável?",
    alternativas: ["new", "create", "let", "string"],
    correta: 2
  },
  {
    pergunta: "parseInt() faz o quê?",
    alternativas: [
      "Converte para inteiro",
      "Cria texto",
      "Cria variável",
      "Mostra alerta"
    ],
    correta: 0
  },
  {
    pergunta: "Sensor de temperatura mede:",
    alternativas: ["Luz", "Som", "Temperatura", "Movimento"],
    correta: 2
  },
  {
    pergunta: "Atuador pode:",
    alternativas: [
      "Ligar lâmpada",
      "Medir temperatura",
      "Salvar dados",
      "Criar banco"
    ],
    correta: 0
  },
  {
    pergunta: "Qual tag cria botão?",
    alternativas: ["btn", "button", "click", "action"],
    correta: 1
  },
  {
    pergunta: "Centralizar texto:",
    alternativas: [
      "text-align:center",
      "align:center",
      "center:true",
      "font:center"
    ],
    correta: 0
  },
  {
    pergunta: "alert('Olá') faz:",
    alternativas: ["Cria botão", "Mostra mensagem", "Muda cor", "Fecha página"],
    correta: 1
  },
  {
    pergunta: "IoT depende de:",
    alternativas: ["Conectividade", "Caneta", "Livro", "Papel"],
    correta: 0
  },
  {
    pergunta: "Qual linguagem executa no navegador?",
    alternativas: ["Java", "C#", "JavaScript", "SQL"],
    correta: 2
  },
  {
    pergunta: "Qual tag insere imagem?",
    alternativas: ["img", "photo", "image", "src"],
    correta: 0
  },
  {
    pergunta: "Qual propriedade altera tamanho da fonte?",
    alternativas: ["font-size", "text-size", "size", "font"],
    correta: 0
  },
  {
    pergunta: "Qual linguagem estiliza páginas?",
    alternativas: ["HTML", "CSS", "PHP", "SQL"],
    correta: 1
  }
];

const quiz = document.getElementById("quizForm");

perguntas.forEach((q, index) => {
  let div = document.createElement("div");
  div.classList.add("questao");

  div.innerHTML = `
    <h3>${index + 1}. ${q.pergunta}</h3>
    ${q.alternativas
      .map(
        (alt, i) =>
          `<label>
    <input type="radio" name="q${index}" value="${i}">
    ${alt}
    </label>`
      )
      .join("")}
    `;

  quiz.appendChild(div);
});

document.getElementById("corrigir").addEventListener("click", () => {
  let pontos = 0;

  perguntas.forEach((q, index) => {
    const resposta = document.querySelector(`input[name="q${index}"]:checked`);

    if (resposta && Number(resposta.value) === q.correta) {
      pontos++;
    }
  });

  const percentual = ((pontos / perguntas.length) * 100).toFixed(1);

  document.getElementById("resultado").innerHTML = `
🏆 Nota: ${pontos}/${perguntas.length}<br>
📊 Aproveitamento: ${percentual}%
`;
});
