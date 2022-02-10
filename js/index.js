const scrollMove = (e) => {
  window.scrollTo(0, 0);
}

const scrollMoveDown = (e) => {
  window.scrollTo(0, 9999);
}

const to_top = document.querySelector('.to_top');
to_top.addEventListener('click', scrollMove);

const to_bottom = document.querySelector('.to_bottom');
to_bottom.addEventListener('click', scrollMoveDown);