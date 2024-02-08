const perguntas = [
  {
    pergunta: "Qual é o campeão conhecido como 'O Invocador das Trevas'?",
    respostas: [
      "Veigar",
      "Swain",
      "Nocturne"
    ],
    correta: 1
  },
  {
    pergunta: "Qual destes campeões tem o título de 'O Herdeiro das Lâminas'?",
    respostas: [
      "Yasuo",
      "Zed",
      "Riven"
    ],
    correta: 2
  },
  {
    pergunta: "Qual é o campeão cujo título é 'A Canção do Crepúsculo'?",
    respostas: [
      "Sona",
      "Diana",
      "Ahri"
    ],
    correta: 1
  },
  {
    pergunta: "Qual destes campeões é conhecido como 'O Corvo de Ferro'?",
    respostas: [
      "Swain",
      "Fiddlesticks",
      "Talon"
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o título de Darius, o campeão que usa uma gigantesca machadinha?",
    respostas: [
      "O Artífice da Destruição",
      "O Grande General",
      "O Terror de Noxus"
    ],
    correta: 2
  },
  {
    pergunta: "Qual é o campeão que possui a habilidade 'Crescimento Descontrolado'?",
    respostas: [
      "Malphite",
      "Maokai",
      "Nautilus"
    ],
    correta: 1
  },
  {
    pergunta: "Qual destes campeões é conhecido como 'O Aspecto do Urso'?",
    respostas: [
      "Volibear",
      "Nunu & Willump",
      "Udyr"
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o título de Irelia, a campeã que utiliza lâminas como armas?",
    respostas: [
      "A Dançarina das Lâminas",
      "A Lâmina da Noite",
      "A Guardiã dos Ventos"
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o nome do campeão que é um poderoso mago e mestre do tempo?",
    respostas: [
      "Zilean",
      "Ekko",
      "Ryze"
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o título de Nasus, o guardião das areias?",
    respostas: [
      "O Devorador de Almas",
      "O Imortal",
      "O Guardião das Areias"
    ],
    correta: 2
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