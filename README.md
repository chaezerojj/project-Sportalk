# ⚾project-Sportalk
### 코리아 IT 아카데미 - 정보처리기능사A 1조

### 📌 배포 링크
- 배포링크 넣기

### 🙌 팀원 구성 및 역할
- 진채영 ([@chaezerojj](https://github.com/chaezerojj))
- 권민현 ([@rnjsalsgus](https://github.com/rnjsalsgus))
- 최낙원 ([@96paradise](https://github.com/96paradise))
  
### 🌏 개발환경
#### Frontend
<img src="https://img.shields.io/badge/react-61dafb?style=for-the-badge&logo=react&logoColor=black" /> <img src="https://img.shields.io/badge/javascript-F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=white" /> <img src="https://img.shields.io/badge/css-1572B6.svg?style=for-the-badge&logo=css3&logoColor=white" />

#### Backend
<img src="https://img.shields.io/badge/springboot-6DB33F.svg?style=for-the-badge&logo=springboot&logoColor=white" />

#### Database
<img src="https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=springboot&logoColor=white" />

### 🔧 협업툴
<img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white" /> <img src="https://img.shields.io/badge/notion-000?style=for-the-badge&logo=notion&logoColor=white" />
  
## 📃 프로젝트 소개 

## 🪄상세 기능

## 🗂️ 디렉터리 구조
#### React
```
src
 ┣ api
 ┣ assets
 ┣ components
 ┃ ┗ boardDetail
 ┃ ┗ comment
 ┃ ┗ Footer
 ┃ ┗ Header
 ┃ ┗ myPageTab
 ┃ ┗ teamCategory
 ┣ constants
 ┃ ┗ index.js
 ┣ contexts
 ┣ models
 ┃ ┣ Post.js
 ┃ ┗ User.js
 ┣ pages
 ┃ ┣ board
 ┃ ┣ home
 ┃ ┣ login
 ┃ ┣ myPage
 ┃ ┃ ┣ comment
 ┃ ┃ ┣ likedPosts
 ┃ ┃ ┣ posts
 ┃ ┃ ┣ profile
 ┃ ┃ ┣ index.js
 ┃ ┃ ┗ index.Style.js
 ┃ ┣ signup
 ┃ ┣ sports
 ┃ ┃ ┣ calendar
 ┃ ┃ ┣ rank
 ┃ ┃ ┗ team
 ┃ ┃ ┃ ┗ teamInfo
 ┃ ┗ index.js
 ┣ proxy
 ┣ routes
 ┣ App.css
 ┣ App.js
 ┣ App.test.js
 ┣ index.css
 ┣ index.js
 ┣ logo.svg
 ┣ reportWebVitals.js
 ┣ setupTests.js
 ┗ 라이브러리.txt
```

#### SpringBoot
```
src
 ┣ main
 ┃ ┣ java
 ┃ ┃ ┗ com
 ┃ ┃ ┃ ┗ sportalk
 ┃ ┃ ┃ ┃ ┣ board
 ┃ ┃ ┃ ┃ ┃ ┣ Board.java
 ┃ ┃ ┃ ┃ ┃ ┣ BoardController.java
 ┃ ┃ ┃ ┃ ┃ ┣ BoardRepository.java
 ┃ ┃ ┃ ┃ ┃ ┗ BoardService.java
 ┃ ┃ ┃ ┃ ┣ comment
 ┃ ┃ ┃ ┃ ┃ ┣ Comment.java
 ┃ ┃ ┃ ┃ ┃ ┣ CommentController.java
 ┃ ┃ ┃ ┃ ┃ ┣ CommentRepository.java
 ┃ ┃ ┃ ┃ ┃ ┗ CommentService.java
 ┃ ┃ ┃ ┃ ┣ config
 ┃ ┃ ┃ ┃ ┃ ┣ CorsConfig.java
 ┃ ┃ ┃ ┃ ┃ ┣ CustomAccessDeniedHandler.java
 ┃ ┃ ┃ ┃ ┃ ┣ CustomAuthenticationFailureHandler.java
 ┃ ┃ ┃ ┃ ┃ ┣ CustomAuthenticationSuccessHandler.java
 ┃ ┃ ┃ ┃ ┃ ┣ JacksonConfig.java
 ┃ ┃ ┃ ┃ ┃ ┗ SecurityConfig.java
 ┃ ┃ ┃ ┃ ┣ likedposts
 ┃ ┃ ┃ ┃ ┃ ┣ LikedPostsController.java
 ┃ ┃ ┃ ┃ ┃ ┗ LikedPostsService.java
 ┃ ┃ ┃ ┃ ┣ mycomment
 ┃ ┃ ┃ ┃ ┃ ┣ MyCommentController.java
 ┃ ┃ ┃ ┃ ┃ ┗ MyCommentService.java
 ┃ ┃ ┃ ┃ ┣ mypost
 ┃ ┃ ┃ ┃ ┃ ┣ MyPostController.java
 ┃ ┃ ┃ ┃ ┃ ┗ MyPostService.java
 ┃ ┃ ┃ ┃ ┣ test
 ┃ ┃ ┃ ┃ ┃ ┗ TestController.java
 ┃ ┃ ┃ ┃ ┣ user
 ┃ ┃ ┃ ┃ ┃ ┣ dto
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ UserDto.java
 ┃ ┃ ┃ ┃ ┃ ┣ CustomUserDetailsService.java
 ┃ ┃ ┃ ┃ ┃ ┣ User.java
 ┃ ┃ ┃ ┃ ┃ ┣ UserController.java
 ┃ ┃ ┃ ┃ ┃ ┣ UserRepository.java
 ┃ ┃ ┃ ┃ ┃ ┗ UserService.java
 ┃ ┃ ┃ ┃ ┗ SportalkApplication.java
 ┃ ┗ resources
 ┃ ┃ ┗ application.properties
 ┗ test
 ┃ ┣ java
 ┃ ┃ ┗ com
 ┃ ┃ ┃ ┗ sportalk
 ┃ ┃ ┃ ┃ ┣ user
 ┃ ┃ ┃ ┃ ┃ ┣ UserControllerTest.java
 ┃ ┃ ┃ ┃ ┃ ┗ UserTest.java
 ┃ ┃ ┃ ┃ ┗ SportalkApplicationTest.java
 ┃ ┗ resources
```
