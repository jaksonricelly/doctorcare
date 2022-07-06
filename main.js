window.addEventListener(
  'scroll',
  onScroll
) /* Escutando o window para executar a função que seria chamada no body*/

onScroll()

function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()
  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section) {
  //verificar se a sessao passou da linnha
  //quais dados vou precisar?  Precisar saber qual é o topo e altura da sessão,  de cada sessão aliás

  const targetLine =
    scrollY +
    innerHeight /
      2 /*estabelece uma linha imaginário na tela para controle de navegação entre as sections*/

  const sectionTop = section.offsetTop /*calcula o top da sessão*/
  const sectionHeigth =
    section.offsetHeight /*calcula e define a altura da sesão*/
  // variável que guarda o valor boolean para verificar se top da função passou da linha alvo
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

  // variavel para saber a base da sessão onde ela termina
  const sectionEndAt = sectionTop + sectionHeigth

  // variavel que verificar se a base da session passou da linha alvo target
  const sectionEndPassedTargetLine = sectionEndAt <= targetLine

  //limites da sessão ou o seja o tempo tem que ter passado e o base não pode ter passado
  const sectionBoundaries =
    sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

  const sectionId = section.getAttribute('id')

  const menuElement = document.querySelector(
    `.menu a[href*=${sectionId}]`
  ) /*Pega o elemento do menu que tem o mesmo id da section capturado pela o section.getAttribute para isso ele comparar com o valor do atributo href e depos se true e adicionar a class active*/

  menuElement.classList.remove(
    'active'
  ) /*Caso já esteja ativo ele destivará, removerá class, e já inicia removendo por padrão*/
  if (sectionBoundaries) {
    /*Então se estivermos nos limite da seção de navegação atual, o if será executado*/
    menuElement.classList.add(
      'active'
    ) /*Nesse momento o 'active' é passado via a variavel menuElmente colocado no elemeento passado na query seletor*/
    console.log('Estamos na seção', section.getAttribute('id'))
  }
}

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 550) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add(
    'menu-expanded'
  ) /* função para adcionar a classe que abre o menu */
}

function closeMenu() {
  document.body.classList.remove(
    'menu-expanded'
  ) /* função para adcionar a classe que fecha o menu */
}

ScrollReveal({
  origin: 'top', //object literal nome e propriedade
  distance: '30px',
  duration: 1000
}).reveal(`
  #home, 
  #home img, 
  #home .numbers, 
  #services, 
  #services header, 
  #services .card,
  #about,
  #about header,
  #about content
  `) /*oScrollReveal aceita um objeto como parametro da função*/
/*criando um objeto da função*/
