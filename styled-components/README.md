<br>

## 📗 Styled Component 방식

- 스타일을 지원하는 라이브러리 (별도의 css모듈 사용하지 않아도 됨)

   - emotion 라이브러리
   - styled components
   
- styled components 설치
   - ```npm install styled-components```
   - ```npm install styled-components@5.3.10``` : 버전때문에 에러가 발생할 경우 버전5로 설치!
   
-  styled components 사용 (백틱기호안에서 사용-문자로 오타발견 어려움)
   - props사용시 ${표현식}으로 작성
 
<br>
<br>
<br>


## 📘 React Shadow

- 웹 컴포넌트 : 컴포넌트의 표준

   - **shadow DOM : 본래의 html에 영향을 주지 않는** 별도의 html덩어리
   
- react-shadow 설치
   ```npm i react-shadow```   
   
- root.div영역에만 스타일 적용 가능
   - 공통적으로 넣어야하는 스타일인 경우 반복적으로 넣어주어야 함
   - 외부와 내부가 차단되어서 값을 받아서 상대적인 표현시 제약 존재

  <br>
