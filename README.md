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
 ┃ ┗ index.js
 ┣ assets
 ┃ ┣ fonts
 ┃ ┃ ┣ DungGeunMo.woff
 ┃ ┃ ┣ DungGeunMo.woff2
 ┃ ┃ ┣ Pretendard-Black.subset.woff
 ┃ ┃ ┣ Pretendard-Black.subset.woff2
 ┃ ┃ ┣ Pretendard-Bold.subset.woff
 ┃ ┃ ┣ Pretendard-Bold.subset.woff2
 ┃ ┃ ┣ Pretendard-ExtraBold.subset.woff
 ┃ ┃ ┣ Pretendard-ExtraBold.subset.woff2
 ┃ ┃ ┣ Pretendard-ExtraLight.subset.woff
 ┃ ┃ ┣ Pretendard-ExtraLight.subset.woff2
 ┃ ┃ ┣ Pretendard-Light.subset.woff
 ┃ ┃ ┣ Pretendard-Light.subset.woff2
 ┃ ┃ ┣ Pretendard-Medium.subset.woff
 ┃ ┃ ┣ Pretendard-Medium.subset.woff2
 ┃ ┃ ┣ Pretendard-Regular.subset.woff
 ┃ ┃ ┣ Pretendard-Regular.subset.woff2
 ┃ ┃ ┣ Pretendard-SemiBold.subset.woff
 ┃ ┃ ┣ Pretendard-SemiBold.subset.woff2
 ┃ ┃ ┣ Pretendard-Thin.subset.woff
 ┃ ┃ ┗ Pretendard-Thin.subset.woff2
 ┃ ┗ images
 ┃ ┃ ┗ baseball-main.png
 ┣ components
 ┃ ┣ boardDetail
 ┃ ┃ ┣ boardDetail.js
 ┃ ┃ ┣ createBoard.js
 ┃ ┃ ┣ deleteButton.js
 ┃ ┃ ┣ editBoardPage.js
 ┃ ┃ ┣ EditButton.js
 ┃ ┃ ┣ likePosts.js
 ┃ ┃ ┗ modal.js
 ┃ ┣ comment
 ┃ ┃ ┣ index.js
 ┃ ┃ ┗ index.Style.js
 ┃ ┣ Footer
 ┃ ┃ ┣ index.js
 ┃ ┃ ┗ index.Style.js
 ┃ ┣ Header
 ┃ ┃ ┣ index.js
 ┃ ┃ ┗ index.Style.js
 ┃ ┣ myPageTab
 ┃ ┃ ┣ index.js
 ┃ ┃ ┗ index.Style.js
 ┃ ┗ teamCategory
 ┃ ┃ ┣ index.js
 ┃ ┃ ┗ index.Style.js
 ┣ constants
 ┃ ┗ index.js
 ┣ contexts
 ┃ ┣ AuthContext.js
 ┃ ┗ AuthProvider.js
 ┣ models
 ┃ ┣ Post.js
 ┃ ┗ User.js
 ┣ pages
 ┃ ┣ board
 ┃ ┃ ┣ index.js
 ┃ ┃ ┣ index.Style.js
 ┃ ┃ ┣ pagination.js
 ┃ ┃ ┣ searchBar.js
 ┃ ┃ ┗ sort.js
 ┃ ┣ home
 ┃ ┃ ┣ index.js
 ┃ ┃ ┗ index.Style.js
 ┃ ┣ login
 ┃ ┃ ┣ index.js
 ┃ ┃ ┗ Login.css
 ┃ ┣ myPage
 ┃ ┃ ┣ comment
 ┃ ┃ ┃ ┣ index.js
 ┃ ┃ ┃ ┗ index.Style.js
 ┃ ┃ ┣ likedPosts
 ┃ ┃ ┃ ┣ index.js
 ┃ ┃ ┃ ┗ index.Style.js
 ┃ ┃ ┣ posts
 ┃ ┃ ┃ ┣ index.js
 ┃ ┃ ┃ ┗ index.Style.js
 ┃ ┃ ┣ profile
 ┃ ┃ ┃ ┣ index.js
 ┃ ┃ ┃ ┗ index.Style.js
 ┃ ┃ ┣ index.js
 ┃ ┃ ┗ index.Style.js
 ┃ ┣ signup
 ┃ ┃ ┣ index.js
 ┃ ┃ ┗ Signup.css
 ┃ ┣ sports
 ┃ ┃ ┣ calendar
 ┃ ┃ ┃ ┣ Calendar.css
 ┃ ┃ ┃ ┣ index.js
 ┃ ┃ ┃ ┗ kboSchedule.js
 ┃ ┃ ┣ rank
 ┃ ┃ ┃ ┣ baseball.css
 ┃ ┃ ┃ ┗ index.js
 ┃ ┃ ┗ team
 ┃ ┃ ┃ ┣ teamInfo
 ┃ ┃ ┃ ┃ ┣ Doosan.css
 ┃ ┃ ┃ ┃ ┣ Doosan.js
 ┃ ┃ ┃ ┃ ┣ Hanhwa.css
 ┃ ┃ ┃ ┃ ┣ Hanhwa.js
 ┃ ┃ ┃ ┃ ┣ Kia.css
 ┃ ┃ ┃ ┃ ┣ Kia.js
 ┃ ┃ ┃ ┃ ┣ Kiwoom.css
 ┃ ┃ ┃ ┃ ┣ Kiwoom.js
 ┃ ┃ ┃ ┃ ┣ KT.css
 ┃ ┃ ┃ ┃ ┣ KT.js
 ┃ ┃ ┃ ┃ ┣ LG.css
 ┃ ┃ ┃ ┃ ┣ LG.js
 ┃ ┃ ┃ ┃ ┣ Lotte.css
 ┃ ┃ ┃ ┃ ┣ Lotte.js
 ┃ ┃ ┃ ┃ ┣ NC.css
 ┃ ┃ ┃ ┃ ┣ NC.js
 ┃ ┃ ┃ ┃ ┣ Samsung.css
 ┃ ┃ ┃ ┃ ┣ Samsung.js
 ┃ ┃ ┃ ┃ ┣ SSG.css
 ┃ ┃ ┃ ┃ ┗ SSG.js
 ┃ ┃ ┃ ┣ index.js
 ┃ ┃ ┃ ┗ index.Style.js
 ┃ ┗ index.js
 ┣ proxy
 ┃ ┗ setupProxy.js
 ┣ routes
 ┃ ┣ boardRouter.js
 ┃ ┣ commentRouter.js
 ┃ ┣ loginRouter.js
 ┃ ┗ signUpRouter.js
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
