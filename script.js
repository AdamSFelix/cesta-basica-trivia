const food_list = [
    {id: 1,nome:"Arroz", classificacao:"Carboidratos", processamento:"Mínimo", calPor100g:"125 calorias", cestaBasica:"Sim"},
    {id: 2,nome:"Feijão", classificacao:"Proteinas", processamento:"Mínimo", calPor100g:"70 calorias", cestaBasica:"Sim"},
    {id: 3,nome:"Macarrão", classificacao:"Carboidratos", processamento:"Mínimo", calPor100g:"157 calorias", cestaBasica:"Sim"},
    {id: 4,nome:"Milho verde", classificacao:"Carboidratos", processamento:"Processado", calPor100g:"64 calorias", cestaBasica:"Sim"},
    {id: 5,nome:"Sal", classificacao:"Sais minerais", processamento:"Ultraprocessado", calPor100g:"0 calorias", cestaBasica:"Sim"},
    {id: 6,nome:"Açúcar", classificacao:"Açúcares", processamento:"Processado", calPor100g:"387 calorias", cestaBasica:"Sim"},
    {id: 7,nome:"Óleo", classificacao:"Gorduras", processamento:"Processado", calPor100g:"884 calorias", cestaBasica:"Sim"},
    {id: 8,nome:"Café", classificacao:"Não classificado", processamento:"Processado", calPor100g:"0 calorias", cestaBasica:"Sim"},
    {id: 9,nome:"Molho", classificacao:"Gorduras", processamento:"Processado", calPor100g:"37 calorias", cestaBasica:"Sim"},
    {id: 10,nome:"Trigo", classificacao:"Carboidratos", processamento:"Processado", calPor100g:"364 calorias", cestaBasica:"Sim"},
    {id: 11,nome:"Vinagre", classificacao:"Gorduras", processamento:"Processado", calPor100g:"18 calorias", cestaBasica:"Sim"},
    {id: 12,nome:"Farinha Mandioca", classificacao:"Carboidratos", processamento:"Processado", calPor100g:"357 calorias", cestaBasica:"Sim"},
    {id: 13,nome:"Biscoito Maisena", classificacao:"Carboidratos", processamento:"Ultraprocessado", calPor100g:"19,4 calorias", cestaBasica:"Sim"},
    {id: 14,nome:"Chocolate em pó", classificacao:"Açúcares", processamento:"Ultraprocessado", calPor100g:"228 calorias", cestaBasica:"Sim"},
    {id: 15,nome:"Mistura para bolo", classificacao:"Açúcares", processamento:"Ultraprocessado", calPor100g:"419 calorias", cestaBasica:"Sim"},
    {id: 16,nome:"Refresco", classificacao:"Açúcares", processamento:"Ultraprocessado", calPor100g:"37 calorias", cestaBasica:"Sim"},
    {id: 17,nome:"Sardinha", classificacao:"Proteinas", processamento:"Processado", calPor100g:"208 calorias", cestaBasica:"Sim"},
    {id: 18,nome:"Pão de forma", classificacao:"Carboidratos", processamento:"Processado", calPor100g:"244 calorias", cestaBasica:"Sim"},
    {id: 19,nome:"Leite", classificacao:"Proteínas", processamento:"Mínimo", calPor100g:"42 calorias", cestaBasica:"Sim"},
    {id: 20,nome:"Manteiga", classificacao:"Proteínas", processamento:"Processado", calPor100g:"717 calorias", cestaBasica:"Sim"},
    {id: 21,nome:"Banana", classificacao:"Carboidratos", processamento:"In natura", calPor100g:"89 calorias", cestaBasica:"Sim"},
    {id: 22,nome:"Maçã", classificacao:"Vitaminas", processamento:"In natura", calPor100g:"52 calorias", cestaBasica:"Não"},
    {id: 23,nome:"Alface", classificacao:"Vitaminas", processamento:"In natura", calPor100g:"15 calorias", cestaBasica:"Não"},
    {id: 24,nome:"Uva", classificacao:"Vitaminas", processamento:"In natura", calPor100g:"67 calorias", cestaBasica:"Não"},
    {id: 25,nome:"Tomate", classificacao:"Vitaminas", processamento:"In natura", calPor100g:"21 calorias", cestaBasica:"Não"},
    {id: 26,nome:"Couve", classificacao:"Vitaminas", processamento:"In natura", calPor100g:"32 calorias", cestaBasica:"Não"},
    {id: 27,nome:"Couve-flor", classificacao:"Vitaminas", processamento:"In natura", calPor100g:"25 calorias", cestaBasica:"Não"},
    {id: 28,nome:"Cenoura", classificacao:"Vitaminas", processamento:"In natura", calPor100g:"41 calorias", cestaBasica:"Não"},
    {id: 29,nome:"Melão", classificacao:"Vitaminas", processamento:"In natura", calPor100g:"34 calorias", cestaBasica:"Não"}
  ]
  
  const start_screen_name = 'start_screen'
  const start_screen = document.getElementById(start_screen_name)
  const game_screen = document.getElementById('game_screen')
  const game_over_screen = document.getElementById('game_over_screen')
  
  const qual_alimento_audio = "audio/quem_e_esse_alimento.mp3"
  
  const rounds_number = 5
  let round = 0
  let score = 0
  let answer_index
  let playable = true
  
  window.addEventListener('load', () => {
    loadStartScreen()
  
    forEachClassElement('food_answer', answer => {
      answer.addEventListener('click', ({target}) => {
        playable && checkAnswer(target)
      })
    })
  });
  
  function checkAnswer(answer) {
    right_name = food_list.find(food => food.id === answer_index).nome
    playable = false
    answer.classList.add(answer.innerHTML === right_name ? 'right' : 'wrong')
    score += answer.innerHTML === right_name ? 1 : 0
    document.getElementById('score').innerHTML = score
    setTimeout(startRound, 3000)
  }
  
  function loadStartScreen() {
    showScreen(start_screen_name)
  }
  
  function showScreen(screen_id) {
    forEachClassElement('screen', screen => {
      screen.style.display = screen.getAttribute('id') === screen_id ? 'block' : 'none'
    });
  }
  
  function playAudio(url) {
    audio = new Audio(url)
    audio.volume = 0.6
    audio.play()
  }
  
  function startGame() {
    showScreen('game_screen')
    resetScoreAndRound()
    startRound()
  }
  
  function startRound() {
    playable = true
    forEachClassElement('food_answer', answer => {
      answer.classList.remove('right', 'wrong')
    })
    if (round === rounds_number) {
      endGame()
    } else {
      round++
      document.getElementById('round').innerHTML = round
      playAudio(qual_alimento_audio)
      shuffleList()
      buildGameScreen()
    }
  }
  
  function endGame() {
    document.getElementById('final_score').innerHTML = score
    showScreen('game_over_screen')
    let message
    switch (true) {
      case score === 0:
        message = 'Tente mais uma vez, você não vai conseguir fazer pior do que isso.'
        break;
      case score <= 3:
        message = 'Tente mais uma vez, pelo menos sua pontuação não foi zero.'
        break;
      case score === 4:
        message = 'Quase lá, segundo lugar é o primeiro perdedor.'
        break;
      case score === 5:
        message = 'EXCELENTE, você conseguiu a pontuação máxima em um joguinho sobre cesta básica. Vai poder contar essa história para seus netos 🙄'
        break;
      default:
        break;
    }
    document.getElementById('final_message').innerHTML = message
  }
  
  function buildGameScreen() {
    const options = [...food_list].splice(0, 4)
    const right_answer = options[0]
    answer_index = right_answer.id
    buildTips(right_answer)
    const answers = options.map(food => food.nome)
    answers.sort(() => 0.5 - Math.random())
    buildAnswers(answers)
  }
  
  function buildTips(answer) {
    tips_divs = document.getElementsByClassName('food_tip')
    tips_divs[0].innerHTML = answer.classificacao
    tips_divs[1].innerHTML = answer.processamento
    tips_divs[2].innerHTML = answer.calPor100g
    tips_divs[3].innerHTML = answer.cestaBasica
  }
  
  function buildAnswers(names) {
    forEachClassElement('food_answer', (answer, index) => {
      answer.innerHTML = names[index]
    })
  }
  
  function shuffleList() {
    food_list.sort(() => 0.5 - Math.random())
  }
  
  function resetScoreAndRound() {
    round = 0
    score = 0
  }
  
  function forEachClassElement(className, callback) {
    [].forEach.call(document.getElementsByClassName(className), callback)
  }
  