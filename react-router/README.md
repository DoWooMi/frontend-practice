
<br>

## 📕 SPA 라우팅 과정


- SPA(Single Page Application) : 서버로부터 하나의 애플리케이션을 받아서 내부에서 url에 맞춰 보여주는 형식 (서버로부터 각각의 페이지를 요청하는 것과 차이)

1. 브라우저에 최초에 '/'경로로 요청을 하면, React Web App을 내려줌
2. 내려받은 React App에서 '/'경로에 맞는 컴포넌트를 보여줌
3. React App에서 다른 페이지로 이동하는 동작을 수행하면 **새로운 경로에 맞는 컴포넌트를 보여줌**


<br>
<br>
<br>

## 📙 Static 라우팅

- react-router-dom v6 업데이트 후 달라진 점 : https://kyung-a.tistory.com/36 참고

- react project에서 라우팅 패키지 설치(기본 내장된 패키지 아님)
   - ```npm i react-router-dom```
  
<br>
<br>
<br>

## 📒 Dynamic 라우팅

1. 지정된 경로 파라미터값을 전달하여 출력 (id, typeof)
- App.js에서 **경로값 설정 : /:파라미터값/***

2. 쿼리스트링값으로 파라미터값 전달하여 출력 (name=mark)
- const searchParam = useLocation()에서 searchParam의 search값이 ?name=mark확인

<br>
<br>
<br>


## 📗 JSX링크로 라우팅 이동

### Link Component
- 서버로부터 새로운 파일을 가져오는 것이 아니라 이미 가지고 있는 react view중에서 알맞는 view를 보여줌
   - 로딩 없이 빠르게 view 전환 가능
   - Link컴포넌트의 to속성 이용

### NavLink Component
- activeClassName, activeSyle 처럼 active 상태에 대한 스타일 지정 가능
- Route의 path처럼 동작하기 때문에 end(구: exact)가 있음
- v6 변경사항 (참고 : https://seungahhong.github.io/blog/2022/03/2022-03-12-react-router-v6/)

<br>
<br>
<br>

## 📘 JS로 라우팅 이동

#### 로그인 페이지 (LoginButton Component사용)
#### LoginButton Component
- navigate() : 페이지 이동
   - login버튼 클릭하면 1초 후에 "/"페이지로 이동


<br>

