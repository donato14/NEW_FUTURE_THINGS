// 화살표 함수 정의 => 현재 화면에서 전체화면의 좌표 0,0 으로 이동한다.
const scrollMove = (e) => {
  window.scrollTo(0, 0);
}
// 화살표 함수 정의 => 현재 화면에서 전체화면의 좌표 0,9999 으로 이동한다.
const scrollMoveDown = (e) => {
  window.scrollTo(0, 9999);
}
// to_top 클래스에 클릭 이벤트를 설정하고 스크롤 이벤트 적용
const to_top = document.querySelector('.to_top');
to_top.addEventListener('click', scrollMove);
// to_bottom 클래스에 클릭 이벤트를 설정하고 스크롤 이벤트 적용
const to_bottom = document.querySelector('.to_bottom');
to_bottom.addEventListener('click', scrollMoveDown);



// 상세보기 버튼 토글
$(document).ready(function () {
  $('[data-toggle="tooltip"]').tooltip();
});
