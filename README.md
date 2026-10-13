# [AX 키트 - 관리자·팀장] 수강 안내 페이지

2026년 10월 16일(금) 진행되는 「팀의 AI 전환을 이끄는 생성형 AI 기반 업무 혁신 리더십 실무」 과정의 수강생 안내 페이지입니다. 빌드 과정 없이 파일을 고치면 그대로 반영됩니다.

## 무엇을 어디서 고치나

| 고치려는 것 | 파일 | 위치 |
|---|---|---|
| 날짜·시간·총 시간 | `index.html` | ① Hero의 `facts`·`ticket`, ② `stats`, ⑥ 일정 카드, `<head>`의 description — **여러 곳에 반복되므로 모두 같이 고칩니다** |
| 장소 | `index.html` | ① Hero `ticket-list`, ⑥ 장소 카드(주소 문구와 지도 검색 링크), `<head>`의 og:description |
| Claude 계정 지원 문구 | `index.html` | ① Hero의 `support-badge`·`ticket` 지원 행, ④ `id="support"` 패널, `<head>`의 description — 지원 조건 등 세부는 확정된 내용만 추가합니다 |
| 모듈별 내용 | `index.html` | ⑤ `<div class="timeline">` 안의 `<details>` 5개, ③ `flow` 목록 |
| SafariON 링크, 카카오톡 채널 문의 링크 | `index.html` | ⑦ `id="materials"`의 카드 2개 (Hero 메모와 "교육 자료 보기" 링크가 이 위치를 가리킴) |
| 웹사이트 링크 | `index.html` | 맨 아래 `<footer>` |
| 색 | `styles.css` | 맨 위 `:root` 토큰 |
| 이미지 | `assets/` | 파일명은 영문 소문자. 바꾸면 `index.html`의 `src`도 같이 수정 |

## 수정 후 꼭 할 일

`index.html` 상단의 `styles.css?v=20261013-1`, `script.js?v=20261013-1`에서 마지막 숫자를 1씩 올립니다(예: `-2`). 올리지 않으면 방문자 브라우저에 예전 파일이 남아 있을 수 있습니다.

## 공개 페이지 주의 사항

이 저장소와 페이지는 누구나 볼 수 있습니다.

- SafariON은 링크만 연결합니다. 로그인 절차는 페이지 본문·이 문서에 적지 않고, 교육 사전 안내 PDF(`assets/course-guide.pdf`)로만 안내합니다.
- 수강생·직원의 이름, 이메일, 연락처가 보이는 화면 캡처는 올리지 않습니다. 캡처를 추가할 때는 브라우저 틀(프로필 표시)과 입력란 내용을 먼저 확인합니다.
- 교육 사전 안내 PDF는 `assets/course-guide.pdf`로 올라가 있고, 교육 자료 섹션의 GUIDE 카드에서 열립니다. 안내문을 바꾸려면 같은 파일명으로 교체합니다. 시간표 원본 파일은 저장소에 올리지 않습니다.

## 아직 넣지 않은 정보

자료에서 확인되지 않아 페이지에 넣지 않은 항목입니다. 확정되면 ⑥ 일정·장소 섹션에 카드를 추가하면 됩니다.

- 준비물, 주차, 식사 제공 여부
- 수료 기준, 교육비, 대상 조건, 정원, 주관기관

## 파일 구성

```
index.html   문구·구조·링크
styles.css   색 토큰·레이아웃·반응형
script.js    아코디언, 스크롤 등장 효과, 주소 복사 (없어도 내용은 모두 보임)
assets/      helloworldlabs-logo.png(헤더·푸터 로고), course-guide.pdf(교육 사전 안내)
.nojekyll    GitHub Pages가 파일을 그대로 서비스하도록 하는 빈 파일
```
