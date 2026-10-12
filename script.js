/* 이 파일이 없어도 페이지 내용은 모두 보입니다. (보조 동작만 담당) */
(function () {
  'use strict';

  // 1) 아코디언: 같은 묶음 안에서 하나를 열면 나머지는 닫힘
  document.querySelectorAll('.timeline').forEach(function (group) {
    var items = group.querySelectorAll('details');
    items.forEach(function (item) {
      item.addEventListener('toggle', function () {
        if (!item.open) return;
        items.forEach(function (other) {
          if (other !== item) other.open = false;
        });
      });
    });
  });

  // 2) 스크롤 등장 효과 (지원 브라우저 + 모션 허용일 때만)
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if ('IntersectionObserver' in window && !reduce) {
    document.documentElement.classList.add('js-reveal');
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });
  }

  // 3) 주소 복사 버튼
  var copyBtn = document.getElementById('copy-address');
  var address = document.getElementById('address');
  var status = document.getElementById('copy-status');
  if (copyBtn && address && navigator.clipboard && navigator.clipboard.writeText) {
    copyBtn.hidden = false;
    copyBtn.addEventListener('click', function () {
      navigator.clipboard.writeText(address.textContent.trim()).then(function () {
        status.textContent = '주소를 복사했습니다.';
      }, function () {
        status.textContent = '복사하지 못했습니다. 주소를 길게 눌러 직접 복사해 주세요.';
      });
    });
  }
})();
