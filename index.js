const perguntas = [
    {
      pergunta: "Qual é a função do operador 'typeof' em JavaScript?",
      respostas: [
        "Retorna o tipo de dado de uma variável.",
        "Realiza uma comparação estrita de valores e tipos.",
        "Incrementa o valor de uma variável."
      ],
      correta: 0
    },
    {
      pergunta: "O que o método 'charAt()' faz em JavaScript?",
      respostas: [
        "Remove caracteres de uma string.",
        "Retorna o caractere em uma posição específica de uma string.",
        "Substitui caracteres em uma string."
      ],
      correta: 1
    },
    {
      pergunta: "Como se declara uma constante em JavaScript?",
      respostas: [
        "const myConst;",
        "let myConst;",
        "var myConst;"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a finalidade do comando 'break' em uma estrutura de repetição?",
      respostas: [
        "Encerrar a execução do programa.",
        "Sair antecipadamente de uma estrutura de repetição.",
        "Continuar para a próxima iteração."
      ],
      correta: 1
    },
    {
      pergunta: "O que é o DOM (Document Object Model) em JavaScript?",
      respostas: [
        "Uma linguagem de programação.",
        "Uma interface para manipular documentos HTML e XML.",
        "Um estilo de design para páginas da web."
      ],
      correta: 1
    },
    {
      pergunta: "O que o método 'toFixed()' faz em JavaScript?",
      respostas: [
        "Remove casas decimais de um número.",
        "Adiciona casas decimais a um número.",
        "Arredonda um número para um número específico de casas decimais."
      ],
      correta: 2
    },
    {
      pergunta: "Como se faz um comentário de várias linhas em JavaScript?",
      respostas: [
        "// Este é um comentário",
        "/* Este é um comentário */",
        "<!-- Este é um comentário -->"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o operador lógico 'OU' em JavaScript?",
      respostas: [
        "&",
        "|",
        "||"
      ],
      correta: 2
    },
    {
      pergunta: "O que é o evento 'click' em JavaScript?",
      respostas: [
        "Uma função para calcular cliques em uma página.",
        "Um tipo de dado primitivo.",
        "Uma interação do usuário ao clicar em um elemento HTML."
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a função do método 'splice()' em JavaScript?",
      respostas: [
        "Adicionar elementos em uma posição específica de um array.",
        "Remover elementos de um array em uma posição específica.",
        "Reverter a ordem dos elementos em um array."
      ],
      correta: 1
    }
  ];
  // document é um tipo de objeto existente nos navegadores e querySelector é uma função que busca um elemento html e atribui à uma variável 
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  // set é uma estrutura que armazena uma informação sem repeti-la se houver mudança na mesma posteriormente
  const corretas = new Set()
  
  //variavel recebe o total de perguntas usando função para determinar o tamanho do array na variavel/objeto perguntas 
  const totalDePerguntas = perguntas.length
  
  //recebe do DOM selecionado pelo query o conjunto acertos mas somente usa o dado  subconjunto span
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  //loop de repetição
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for(let respostas of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = respostas
      
      // entre as tags de dt no html ira selecionar o input e ira atribuir ao mesmo um nome e valor baseado no índices do array, recolhido dentro da constante/objeto perguntas.
      dt.querySelector('input').setAttribute('name','pergunta-'+ perguntas.indexOf(item))
      
      //usando o loop a função irá pegar o input e atualizar com valor com o índice de cada resposta.
      dt.querySelector('input').value = item.respostas.indexOf(respostas)
      
      //onchange faz com que na mudança de estado do input ele execute uma subrotina, onde compara a resposta do usuário com a correta e retorna um alerta para confirmação
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
        // deleta o item para nova consulta sempre        
        corretas.delete(item)
        if(estaCorreta) {
          corretas.add(item)
        }
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
  
  
      quizItem.querySelector('dl').appendChild(dt)
  
    }
  
    //Remove o "Resposta A"
    quizItem.querySelector('dl dt').remove()
    
    //Coloca a pergunta na tela
    quiz.appendChild(quizItem)
  
  }