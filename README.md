# 💻 blog-react
redux-toolkit을 사용해보며 공부하기 위해 만들어본 간단한 블로그입니다.

<br>
<br>

## 📚 사용 라이브러리
- react-redux & redux-toolkit
- json-server
- axios
- prop-types
- uuid

<br>
<br>

## 📦 주요 기능
- 로그인/로그아웃
  
  - 로그인 여부에 따라 헤더에 각각 'Login' 또는 'Logout'이 표기됩니다.
  - `store`를 통해 Login 상태를 모든 페이지와 공유합니다.
  - Login 정보를 `localStorge`에 저장하여 새로고침 또는 재방문 시에도 로그인 상태가 유지될 수 있도록 합니다.
    
<br>

- 게시글 CRUD

  - 로그인된 상태에서 게시글을 추가, 수정, 삭제할 수 있고, 비밀 글을 조회할 수 있습니다.
  - Admin 페이지에서 게시글을 추가할 수 있고, Title과 Body의 내용을 모두 입력하여야만 제출 가능합니다.
  - Publish 체크 여부에 따라 전체 공개/비밀 글 설정을 할 수 있습니다.
    
<br>

- 게시글 검색

    - 여러 게시글들 중 원하는 제목의 게시글을 검색할 수 있습니다.

<br>

- Toast Notification
    - 게시글 생성, 삭제 시 실행 결과에 대한 toast 형식 알림을 발생시킵니다.
    - 각 알림들을 `store`를 통해 관리하여 페이지 이동 시에도 알림이 유지됩니다.
    - 발생한 알림은 클릭하면 사라지고, 클릭하지 않을 시 5초가 경과하면 자동으로 사라집니다.

 <br>
 <br>

 ## 🪛 설치 및 실행 가이드
 - 개발 환경
    - node  v18.16.0
    - npm  v9.5.1
      
  <br>
  
  - 실행 방법
      - 프로젝트 clone 
        
        ```
          $ git clone https://github.com/KimByeongHwa/blog-react.git
          $ cd blog-react
        ```
      - 프로젝트 실행

         ```
          $ npm i
          $ npm start
        ```
        
      - json-server 연동 - port 번호는 실행 중인 웹앱과 겹치지 않는 포트 번호로 설정(예시는 3001로 설정)
        
        ```
          $ npm install -g json-server
          $ json-server ./db.json --port 3001
        ```
