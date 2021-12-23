
  function mostrar(card)
   {
    let poster = card.getElementsByClassName('card-img')[0]
    let sinopsis = card.getElementsByClassName('description')[0]
    poster.classList.add('img-hide')
    sinopsis.classList.remove('description-hide')
  }
  
  function ocultar(card) 
  {
    let poster = card.getElementsByClassName('card-img')[0]
    let sinopsis = card.getElementsByClassName('description')[0]
    poster.classList.remove('img-hide')
    sinopsis.classList.add('description-hide')
  }