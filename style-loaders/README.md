

<br>

## 📕 Style Loaders


- webpack.config.js에 많은 loader들이 설정되어 있음 => webpack에 대한 기능 이해와 create-react-app이 어떤 확장자를 어떻게 처리하는지 확인 가능
   - 정규표현식 영역은 어떤 loader를 사용할지를 선택하는 공간


<br>
<br>
<br>

## 📙 CSS, SASS module 방식

- module.css
   - ```import styles from "./App.module.css";```
   - 실제 작성한 코드를 변환 후 전역으로 추가
   - import한 styles객체가 원래 이름에 변경된 클래스 이름을 매칭하여 부여
   - {styles['클래스이름']} 이렇게 작성하면 알아서 매칭해서 고유의 이름 부여

 
<br>
