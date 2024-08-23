const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você acaba de receber uma notícia incrível: o Flamengo contratou um novo jogador estrela. Qual o seu primeiro pensamento?",
        alternativas: [
            {
                texto: "Isso é fantástico!",
                afirmacao: "Você ficou empolgado com a nova contratação e está ansioso para ver como ele contribuirá para a equipe."
            },
            {
                texto: "Isso é preocupante!",
                afirmacao: "Você ficou preocupado com o impacto que a contratação pode ter sobre a química do time e o desempenho dos jogadores atuais."
            }
        ]
    },
    {
        enunciado: "Após saber da nova contratação, o Flamengo organiza um evento para apresentar o jogador aos torcedores. Qual atitude você toma?",
        alternativas: [
            {
                texto: "Vai ao evento para ver de perto o novo jogador e mostrar seu apoio ao time.",
                afirmacao: "Você aproveitou a oportunidade para expressar seu apoio ao time e ficou animado em ver a nova estrela de perto."
            },
            {
                texto: "Acompanha o evento pela TV e espera para ver as análises dos especialistas sobre a contratação.",
                afirmacao: "Você preferiu analisar o impacto da contratação através da mídia e dos comentários dos especialistas antes de formar sua opinião."
            }
        ]
    },
    {
        enunciado: "Durante o evento, a diretoria do Flamengo faz um discurso sobre os planos futuros do time. Qual é a sua reação?",
        alternativas: [
            {
                texto: "Fica entusiasmado com os planos e acredita que o time está indo na direção certa.",
                afirmacao: "Você está otimista com as estratégias da diretoria e acredita que o Flamengo está se preparando para um futuro brilhante."
            },
            {
                texto: "Fica cético e prefere esperar para ver se os planos realmente se concretizam.",
                afirmacao: "Você decidiu aguardar para ver se os planos da diretoria se materializam antes de se empolgar demais."
            }
        ]
    },
    {
        enunciado: "Você é convidado para criar uma arte que representa sua paixão pelo Flamengo. O que faz?",
        alternativas: [
            {
                texto: "Cria uma arte utilizando técnicas tradicionais de pintura.",
                afirmacao: "Você decidiu expressar sua paixão pelo Flamengo com técnicas de pintura tradicionais, valorizando a arte manual e o trabalho criativo."
            },
            {
                texto: "Utiliza um software de design para criar uma arte digital do Flamengo.",
                afirmacao: "Você optou por criar uma arte digital, utilizando ferramentas modernas para capturar sua paixão pelo Flamengo de maneira inovadora e eficiente."
            }
        ]
    },
    {
        enunciado: "Você está participando de um grupo de torcedores do Flamengo para discutir o futuro do time. Qual é a sua contribuição?",
        alternativas: [
            {
                texto: "Compartilha sua visão sobre como o time pode melhorar e alcançar mais vitórias.",
                afirmacao: "Você contribuiu com ideias para melhorar o desempenho do time e aumentar o número de vitórias, mostrando seu entusiasmo e conhecimento sobre o Flamengo."
            },
            {
                texto: "Prefere ouvir as opiniões dos outros e usar as informações para formar sua própria visão.",
                afirmacao: "Você optou por ouvir e aprender com as opiniões dos outros torcedores antes de formar sua própria visão sobre o futuro do time."
            }
        ]
    },
];



let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
