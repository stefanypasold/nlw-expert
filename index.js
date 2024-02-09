const perguntas = [
    {
      pergunta: "Qual é a função do método 'charAt()' em JavaScript?",
      respostas: [
        "Retorna o primeiro índice de uma substring encontrada em uma string.",
        "Retorna o caractere na posição especificada de uma string.",
        "Retorna o número de caracteres em uma string.",
      ],
      correta: 1
    },
    {
      pergunta: "Qual declaração é usada para criar uma variável em JavaScript?",
      respostas: [
        "var",
        "int",
        "let",
      ],
      correta: 0
    },
    {
      pergunta: "Qual desses métodos JavaScript é usado para remover o último elemento de um array e retorna o elemento removido?",
      respostas: [
        "pop()",
        "shift()",
        "splice()",
      ],
      correta: 0
    },
    {
      pergunta: "Como você chama uma função chamada 'myFunction'?",
      respostas: [
        "chamar myFunction()",
        "call myFunction()",
        "myFunction()",
      ],
      correta: 2
    },
    {
      pergunta: "O que o método 'toFixed()' faz em JavaScript?",
      respostas: [
        "Retorna o número de casas decimais de um número.",
        "Arredonda um número para o inteiro mais próximo.",
        "Formata um número usando notação científica.",
      ],
      correta: 0
    },
    {
      pergunta: "O que 'NaN' representa em JavaScript?",
      respostas: [
        "Not a Name",
        "Not a Null",
        "Not a Number",
      ],
      correta: 2
    },
    {
      pergunta: "Qual operador é usado para atribuição de valores em JavaScript?",
      respostas: [
        "=",
        "==",
        "+=",
      ],
      correta: 0
    },
    {
      pergunta: "Qual método JavaScript é usado para selecionar elementos HTML por sua classe?",
      respostas: [
        "getElementByClass()",
        "selectElementsByClass()",
        "getElementsByClassName()",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é o resultado de 5 + '3' em JavaScript?",
      respostas: [
        "8",
        "53",
        "Erro",
      ],
      correta: 1
    },
    {
      pergunta: "Qual método JavaScript é usado para arredondar um número para o inteiro mais próximo?",
      respostas: [
        "Math.round()",
        "Math.floor()",
        "Math.ceil()",
      ],
      correta: 0
    },
  ];
  
const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

// loop ou laço de repetição
for (const item of perguntas) {
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.pergunta

  for (let resposta of item.respostas) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.correta

      corretas.delete(item)
      if (estaCorreta) {
        corretas.add(item)
      }

      mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
    }
    quizItem.querySelector('dl').appendChild(dt)
  }


  quizItem.querySelector('dl dt').remove()


  // coloca a pergunta na tela
  quiz.appendChild(quizItem)
}