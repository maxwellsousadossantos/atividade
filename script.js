const perguntas = [
  {
    pergunta: "Qual é a função principal de um roteador?",
    alternativas: ["Armazenar dados", "Encaminhar pacotes", "Executar programas", "Exibir páginas"],
    correta: 1
  },
  {
    pergunta: "Qual dispositivo conecta computadores em uma rede local?",
    alternativas: ["Switch", "Impressora", "Monitor", "HD externo"],
    correta: 0
  },
  {
    pergunta: "Qual protocolo é usado para acessar páginas web?",
    alternativas: ["HTTP", "FTP", "SMTP", "DNS"],
    correta: 0
  },
  {
    pergunta: "O que significa IP?",
    alternativas: ["Internet Protocol", "Internal Program", "Integrated Process", "Input Port"],
    correta: 0
  },
  {
    pergunta: "Qual protocolo é usado para envio de e-mails?",
    alternativas: ["SMTP", "HTTP", "DNS", "FTP"],
    correta: 0
  },
  {
    pergunta: "Qual camada do modelo OSI trata da transmissão física?",
    alternativas: ["Camada Física", "Camada de Aplicação", "Camada de Rede", "Camada de Transporte"],
    correta: 0
  },
  {
    pergunta: "Qual protocolo traduz nomes de domínio em endereços IP?",
    alternativas: ["DNS", "HTTP", "FTP", "SMTP"],
    correta: 0
  },
  {
    pergunta: "Qual dispositivo divide uma rede em sub-redes?",
    alternativas: ["Roteador", "Switch", "Hub", "Servidor"],
    correta: 0
  },
  {
    pergunta: "Qual protocolo é usado para transferência de arquivos?",
    alternativas: ["FTP", "SMTP", "HTTP", "DNS"],
    correta: 0
  },
  {
    pergunta: "Qual porta padrão é usada pelo HTTPS?",
    alternativas: ["80", "21", "443", "25"],
    correta: 2
  },
  {
    pergunta: "Qual protocolo é usado para envio de mensagens instantâneas?",
    alternativas: ["XMPP", "HTTP", "FTP", "SMTP"],
    correta: 0
  },
  {
    pergunta: "Qual camada do modelo OSI garante entrega confiável?",
    alternativas: ["Transporte", "Rede", "Aplicação", "Física"],
    correta: 0
  },
  {
    pergunta: "Qual protocolo é usado para acesso remoto seguro?",
    alternativas: ["SSH", "Telnet", "FTP", "SMTP"],
    correta: 0
  },
  {
    pergunta: "Qual endereço identifica uma máquina em uma rede?",
    alternativas: ["MAC", "IP", "DNS", "URL"],
    correta: 1
  },
  {
    pergunta: "Qual protocolo é usado para envio de e-mails entre servidores?",
    alternativas: ["SMTP", "POP3", "IMAP", "HTTP"],
    correta: 0
  },
  {
    pergunta: "Qual protocolo é usado para receber e-mails?",
    alternativas: ["POP3", "SMTP", "FTP", "DNS"],
    correta: 0
  },
  {
    pergunta: "Qual protocolo permite sincronização de e-mails em múltiplos dispositivos?",
    alternativas: ["IMAP", "POP3", "SMTP", "FTP"],
    correta: 0
  },
  {
    pergunta: "Qual camada do modelo OSI define o formato dos dados?",
    alternativas: ["Apresentação", "Aplicação", "Rede", "Transporte"],
    correta: 0
  },
  {
    pergunta: "Qual protocolo é usado para comunicação sem conexão?",
    alternativas: ["UDP", "TCP", "HTTP", "FTP"],
    correta: 0
  },
  {
    pergunta: "Qual protocolo é usado para comunicação confiável?",
    alternativas: ["TCP", "UDP", "HTTP", "FTP"],
    correta: 0
  },
  {
    pergunta: "Qual dispositivo repete sinais em uma rede?",
    alternativas: ["Hub", "Switch", "Roteador", "Servidor"],
    correta: 0
  },
  {
    pergunta: "Qual tecnologia permite múltiplas redes virtuais em um switch?",
    alternativas: ["VLAN", "VPN", "DNS", "NAT"],
    correta: 0
  },
  {
    pergunta: "Qual protocolo é usado para acesso remoto a desktops?",
    alternativas: ["RDP", "SSH", "FTP", "HTTP"],
    correta: 0
  },
  {
    pergunta: "Qual técnica traduz endereços privados em públicos?",
    alternativas: ["NAT", "DNS", "DHCP", "ARP"],
    correta: 0
  },
  {
    pergunta: "Qual protocolo atribui endereços IP automaticamente?",
    alternativas: ["DHCP", "DNS", "NAT", "FTP"],
    correta: 0
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
