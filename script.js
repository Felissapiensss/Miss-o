const caixaPrincipal = document.querySelector(".caixa-principal") ;
const caixaPerguntas = document.querySelector(".caixa-perguntas") ;
const caixaAlternativas = document.querySelector(".caixa-alternativas") ;
const caixaResultado = document.querySelector(".caixa-resultado") ;
const textoResultado = document.querySelector(".texto-resultado") ;

const perguntas =[
    {
        enunciado : "O que é inteligência artificial e como ela se diferencia da inteligência humana?",
        alternativas : [
            {
                texto: "Inteligência Artificial (IA) refere-se à capacidade de sistemas computacionais em realizar tarefas que normalmente requerem inteligência humana, como reconhecimento de padrões, aprendizado e tomada de decisões.",
                afirmacao: "Resposta positiva.  Facilitar a entrada e a saída de um público específico." 
            },
            {
                texto: "Inteligência Artificial (IA) é uma forma de vida artificial que pensa e sente exatamente como os humanos, e é capaz de ter consciência e emoções semelhantes às dos seres humanos." ,
                afirmacao: "Resposta negativa. Manter os assentos e as entradas do transporte público no modelo atual."
            }
        ]
    },
    {
        enunciado : "Quais são os principais tipos de inteligência artificial, e como eles se classificam (por exemplo, IA fraca vs. IA forte)?",
        alternativas : [
            {
                texto: "IA Fraca (ou IA Estreita), IA Geral (ou IA Forte), IA Superinteligente.",
                afirmacao: "Com a rigidez da fiscalização podemos induzir a mudança de comportamento das pessoas por meio de sanções."
            },
            {
                texto: "Todos os tipos de IA são classificados como IA Forte, que significa que todas as IA têm consciência, emoções e inteligência geral como a humana." ,
                afirmacao: "Há deficiência no sistema de fiscalização." 
            }
        ]
    },
    {
        enunciado : "Como os algoritmos de aprendizado de máquina funcionam, e quais são suas principais aplicações?",
        alternativas : [
            {
                texto: "Reconhecimento de imagem e voz, Recomendações personalizadas, Diagnóstico médico, Análise de sentimentos.",
                afirmacao: "Causando a morte das abelhas, diminuindo a diversidade das plantas, gerando um impacto econômico."
            },
            {
                texto: "Algoritmos de aprendizado de máquina funcionam como uma fórmula mágica que pode fazer qualquer coisa apenas com um clique, e suas principais aplicações incluem fazer café e consertar eletrodomésticos." ,
                afirmacao: "Aumentando a produção há uma vantagem no setor de exportação, favorecendo assim a economia do país."
            }
        ]
    }
] ;

let atual = 0 ;
let perguntaAtual ;
let historiaFinal = "" ;

function mostraPerguntas(){
    if (atual >= perguntas.length){
        mostraResultado() ;
        return ;
    } ;
    perguntaAtual = perguntas[atual] ;
    caixaPerguntas.textContent = perguntaAtual.enunciado ;
    caixaAlternativas.textContent = "" ;
    textoResultado.textContent    = "" ;
    mostraAlternativas() ;
} ;

mostraPerguntas() ;

function mostraAlternativas(){
    for (const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button") ;
        botaoAlternativas.textContent = alternativa.texto ;
        botaoAlternativas.addEventListener("click", ()=>respostaFinal(alternativa)) ;
        caixaAlternativas.appendChild(botaoAlternativas) ;
    } ;
} ;

function respostaFinal(opcaoSelecionada){
    const afirmacao = opcaoSelecionada.afirmacao ;
    historiaFinal   += afirmacao + " " ;
    atual++ ;
    mostraPerguntas() ;    
} ;

function mostraResultado(){
    caixaPerguntas.textContent    = "Em 2049..." ;
    textoResultado.textContent    = historiaFinal ;
    caixaAlternativas.textContent = "" ;
}