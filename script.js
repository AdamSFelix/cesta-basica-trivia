const food_list = [
 {id: 1,nome:"Arroz", fonteDe:"Carboidratos", processamento:"Minimamente processado", calPor100g:"125 calorias", cestaBasica:"Sim"},
 {id: 2,nome:"Feijão", fonteDe:"Ferro", processamento:"Minimamente processado", calPor100g:"70 calorias", cestaBasica:"Sim"},
 {id: 3,nome:"Macarrão", fonteDe:"Carboidratos", processamento:"Processado", calPor100g:"157 calorias", cestaBasica:"Sim"},
 {id: 4,nome:"Milho verde (enlatado)", fonteDe:"Fibras", processamento:"Processado", calPor100g:"64 calorias", cestaBasica:"Sim"},
 {id: 5,nome:"Sal", fonteDe:"Sódio", processamento:"Ultraprocessado", calPor100g:"0 calorias", cestaBasica:"Sim"},
 {id: 6,nome:"Açúcar", fonteDe:"Glicose", processamento:"Processado", calPor100g:"387 calorias", cestaBasica:"Sim"},
 {id: 7,nome:"Óleo de soja", fonteDe:"Gorduras ômega 3", processamento:"Processado", calPor100g:"884 calorias", cestaBasica:"Sim"},
 {id: 8,nome:"Vagem", fonteDe:"Magnésio", processamento:"Minimamente processado", calPor100g:"31 calorias", cestaBasica:"Não"},
 {id: 9,nome:"Molho de tomate", fonteDe:"Licopeno", processamento:"Ultraprocessado", calPor100g:"37 calorias", cestaBasica:"Sim"},
 {id: 10,nome:"Farinha de Trigo", fonteDe:"Carboidratos", processamento:"Minimamente processado", calPor100g:"364 calorias", cestaBasica:"Sim"},
 {id: 11,nome:"Batata", fonteDe:"Carboidratos", processamento:"In natura", calPor100g:"65 calorias", cestaBasica:"Não"},
 {id: 12,nome:"Farinha de Mandioca", fonteDe:"Manganês", processamento:"Minimamente processado", calPor100g:"357 calorias", cestaBasica:"Sim"},
 {id: 13,nome:"Biscoito Maisena", fonteDe:"Carboidratos", processamento:"Ultraprocessado", calPor100g:"19,4 calorias", cestaBasica:"Sim"},
 {id: 14,nome:"Chocolate em pó", fonteDe:"Vitamina B12", processamento:"Ultraprocessado", calPor100g:"228 calorias", cestaBasica:"Sim"},
 {id: 15,nome:"Mistura para bolo", fonteDe:"Açúcares", processamento:"Ultraprocessado", calPor100g:"419 calorias", cestaBasica:"Sim"},
 {id: 16,nome:"Refresco em pó", fonteDe:"Vitamina C", processamento:"Ultraprocessado", calPor100g:"37 calorias", cestaBasica:"Sim"},
 {id: 17,nome:"Sardinha", fonteDe:"Gorduras ômega 3", processamento:"Processado", calPor100g:"208 calorias", cestaBasica:"Sim"},
 {id: 18,nome:"Pão de forma", fonteDe:"Carboidratos", processamento:"Processado", calPor100g:"244 calorias", cestaBasica:"Sim"},
 {id: 19,nome:"Leite", fonteDe:"Cálcio", processamento:"Minimamente processado", calPor100g:"42 calorias", cestaBasica:"Sim"},
 {id: 20,nome:"Manteiga", fonteDe:"Gorduras", processamento:"Processado", calPor100g:"717 calorias", cestaBasica:"Sim"},
 {id: 21,nome:"Banana", fonteDe:"Vitaminas A, B e C", processamento:"In natura", calPor100g:"89 calorias", cestaBasica:"Sim"},
 {id: 22,nome:"Maçã", fonteDe:"Vitamina C", processamento:"In natura", calPor100g:"52 calorias", cestaBasica:"Não"},
 {id: 23,nome:"Alface", fonteDe:"Cálcio", processamento:"In natura", calPor100g:"15 calorias", cestaBasica:"Não"},
 {id: 24,nome:"Uva", fonteDe:"Vitaminas B e C", processamento:"In natura", calPor100g:"67 calorias", cestaBasica:"Não"},
 {id: 25,nome:"Tomate", fonteDe:"Vitaminas A, C e B", processamento:"In natura", calPor100g:"21 calorias", cestaBasica:"Não"},
 {id: 26,nome:"Couve", fonteDe:"Vitaminas A, B, C e K", processamento:"In natura", calPor100g:"32 calorias", cestaBasica:"Não"},
 {id: 27,nome:"Couve-flor", fonteDe:"Fósforo", processamento:"In natura", calPor100g:"25 calorias", cestaBasica:"Não"},
 {id: 28,nome:"Cenoura", fonteDe:"Vitamina A", processamento:"In natura", calPor100g:"41 calorias", cestaBasica:"Não"},
 {id: 29,nome:"Melão", fonteDe:"Vitaminas C e A", processamento:"In natura", calPor100g:"34 calorias", cestaBasica:"Não"},
 {id: 30,nome:"Frango", fonteDe:"Proteínas", processamento:"Minimamente processado", calPor100g:"239 calorias", cestaBasica:"Não"},
 {id: 31,nome:"Laranja", fonteDe:"Vitamina C", processamento:"In natura", calPor100g:"47 calorias", cestaBasica:"Não"},
 {id: 32,nome:"Manga", fonteDe:"Vitaminas A e C", processamento:"In natura", calPor100g:"60 calorias", cestaBasica:"Não"},
 {id: 33,nome:"Amendoim", fonteDe:"Vitaminas B e E", processamento:"Minimamente processado", calPor100g:"567 calorias", cestaBasica:"Não"},
 {id: 34,nome:"Limão", fonteDe:"Vitamina C", processamento:"In natura", calPor100g:"29 calorias", cestaBasica:"Não"},
 {id: 35,nome:"Coco", fonteDe:"Potássio", processamento:"In natura", calPor100g:"406 calorias", cestaBasica:"Não"},
 {id: 36,nome:"Iogurte", fonteDe:"Cálcio", processamento:"Processado", calPor100g:"159 calorias", cestaBasica:"Não"},
 {id: 37,nome:"Morango", fonteDe:"Magnésio", processamento:"In natura", calPor100g:"30 calorias", cestaBasica:"Não"},
 {id: 38,nome:"Ovo", fonteDe:"Proteínas (ou alergia)", processamento:"In natura", calPor100g:"155 calorias", cestaBasica:"Não"},
 {id: 39,nome:"Açaí", fonteDe:"Lipídios", processamento:"In natura", calPor100g:"60 calorias", cestaBasica:"Não"},
 {id: 40,nome:"Presunto", fonteDe:"Potássio", processamento:"Processado", calPor100g:"145 calorias", cestaBasica:"Não"},
 {id: 41,nome:"Linguiça", fonteDe:"Ferro", processamento:"Processado", calPor100g:"325 calorias", cestaBasica:"Não"},
 {id: 42,nome:"Filé Mignon", fonteDe:"Ferro", processamento:"Processado", calPor100g:"267 calorias", cestaBasica:"Não"},
 {id: 43,nome:"Amido de milho", fonteDe:"Vitaminas A, B e E", processamento:"Processado", calPor100g:"361 calorias", cestaBasica:"Não"},
 {id: 44,nome:"Mortadela", fonteDe:"Gorduras", processamento:"Processado", calPor100g:"311 calorias", cestaBasica:"Não"},
 {id: 45,nome:"Biscoito Cream Cracker", fonteDe:"Carboidratos", processamento:"Ultraprocessado", calPor100g:"504 calorias", cestaBasica:"Não"},
 {id: 46,nome:"Queijo", fonteDe:"Cálcio", processamento:"Processado", calPor100g:"431 calorias", cestaBasica:"Não"},
 {id: 47,nome:"Massa de pastel", fonteDe:"Carboidratos", processamento:"Minimamente processado", calPor100g:"310 calorias", cestaBasica:"Não"},
 {id: 48,nome:"Fubá", fonteDe:"Ferro", processamento:"Minimamente processado", calPor100g:"884 calorias", cestaBasica:"Não"},
 {id: 49,nome:"Costeleta de porco", fonteDe:"Vitaminas B1 e B3", processamento:"Processado", calPor100g:"231 calorias", cestaBasica:"Não"},
 {id: 50,nome:"Mel", fonteDe:"Ferro", processamento:"In natura", calPor100g:"304 calorias", cestaBasica:"Não"}]

const start_screen_name = 'start_screen'
const start_screen = document.getElementById(start_screen_name)
const game_screen = document.getElementById('game_screen')
const game_over_screen = document.getElementById('game_over_screen')

const qual_alimento_audio = 'audio/quem_e_esse_alimento.mp3'
const question_mark_url = 'images/question_mark.png'

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
  const isRight = answer.innerHTML === right_name
  answer.classList.add(isRight ? 'right' : 'wrong')
  score += isRight ? 1 : 0
  changeAnswerImage('images/foods/1.png')
  document.getElementById('score').innerHTML = score
  setTimeout(startRound, 3000)
}

function changeAnswerImage(url) {
  document.getElementById('question_mark_img').src = url
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
  changeAnswerImage(question_mark_url)
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
  tips_divs[0].innerHTML = answer.fonteDe
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
