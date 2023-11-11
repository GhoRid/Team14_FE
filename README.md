# 카카오 테크 캠퍼스 3단계 과제: 축팅

포토부스의 사진을 공유하고, 만남을 연결하는 서비스 **축팅**입니다.

<br />

## 🏁 시작하기

[배포 주소](https://k2bf481c846ffa.user-app.krampoline.com/)에 방문해보세요!

<br />

## 🧐 프로젝트 소개

개발 기간 : 2023년 9월 24일 ~ 2023년 11월 11일

카카오 테크 캠퍼스(이하 카테캠) 3단계 과제 수행 프로젝트 중 FE 개발을 다루고 있습니다.

기획부터 배포까지 서비스 개발에 필요한 전반적인 과정을 경험했습니다.

### 📝 기획

축팅은 네컷사진을 중심으로 한 만남의 플랫폼입니다.

남성 사용자가 많은 데이팅 앱 시장의 문제점을 해결하기 위해 여성 사용자가 많은 네컷사진 시장을 접목시켰습니다.

사용자는 네컷사진을 게시하고, 축팅의 재화인 폭죽을 사용하여 마음에 드는 상대의 인스타그램에 방문할 수 있습니다.

- [기획안 발표 자료(PowerPoint) 다운로드](https://drive.google.com/file/d/1NsLP3KFZE2CUSgwqEm7uGOyySQEIONOg/view?usp=sharing)

### 🎨 디자인

일관된 경험을 제공하기 위해 4배수 디자인을 적용했습니다.

서비스의 주요 타겟인 모바일 사용자를 위해 Thumb Zone을 고려했습니다.

행동을 유도하기 위해 Affordance에 대해 고민했습니다.

- [와이어프레임(Figma) 보러가기](https://www.figma.com/file/n1fenCQYDfghtHT2Qua0YL/kakao14WireBoard?type=design&node-id=0%3A1&mode=design&t=oSx3LovlAi3IIcv2-1)

### 💻 개발

⚙️ 기술 스택

```
Config
- npm

Development
- Create React App
- React Router
- React Modal
- Axios
- React Query
- Recoil
- Swiper
- egjs Infinite Grid
- Framer Motion
- Styled Components
```

🌲 폴더 구조

보다 빠르게 코드를 보실 수 있도록 약간의 설명과 함께 폴더 구조를 안내드립니다.

```
📦src
 ┣ 📂apis
 ┃ ┣ 📂api
 ┃ ┃ ┣ 📜post.js - 게시물 관련
 ┃ ┃ ┗ 📜user.js - 유저 관련
 ┃ ┗ 📜index.js - axios 인스턴스 생성 및 인터셉터 처리 등
 ┣ 📂auth
 ┃ ┣ 📂instagram
 ┃ ┃ ┗ 📜auth.js
 ┃ ┗ 📂kakao
 ┃ ┃ ┗ 📜auth.js
 ┣ 📂components - 공통 컴포넌트
 ┃ ┣ 📜Button.jsx
 ┃ ┣ 📜HeartLoader.jsx
 ┃ ┣ 📜IconButton.jsx - 아이콘 모양의 버튼
 ┃ ┣ 📜Layout.jsx - 화면 크기 지정
 ┃ ┣ 📜Modal.jsx
 ┃ ┣ 📜ModalButton.jsx - 모달에 사용하는 버튼으로 최적화
 ┃ ┣ 📜NavigationBar.jsx
 ┃ ┣ 📜Post.jsx - 게시물
 ┃ ┗ 📜PostInfos.jsx - 게시물에 담기는 닉네임, 해시태그 정보
 ┣ 📂layouts - 로그인 여부에 따른 래퍼
 ┃ ┗ 📜AuthLayout.jsx
 ┣ 📂pages
 ┃ ┣ 📂HomePage
 ┃ ┃ ┗ 📜HomePage.jsx - 홈 페이지
 ┃ ┣ 📂InstagramHandlerPage
 ┃ ┃ ┗ 📜InstagramHandlerPage.jsx - 인스타 연결 로직을 담은 페이지
 ┃ ┣ 📂KakaoHandlerPage
 ┃ ┃ ┗ 📜KakaoHandlerPage.jsx - 카카오 로그인 로직을 담은 페이지
 ┃ ┣ 📂MyDetailpage
 ┃ ┃ ┗ 📜MyDetailPage.jsx - MY 페이지의 게시물 상세 조회 페이지
 ┃ ┣ 📂MyPage
 ┃ ┃ ┣ 📂components - MY 페이지에 사용되는 컴포넌트
 ┃ ┃ ┃ ┣ 📜Card.jsx
 ┃ ┃ ┃ ┣ 📜InfoModal.jsx
 ┃ ┃ ┃ ┣ 📜InstaProfile.jsx
 ┃ ┃ ┃ ┣ 📜KaKaoProfile.jsx
 ┃ ┃ ┃ ┣ 📜MyInfos.jsx
 ┃ ┃ ┃ ┣ 📜SettingButton.jsx
 ┃ ┃ ┃ ┣ 📜Text.jsx
 ┃ ┃ ┃ ┗ 📜UploadButton.jsx
 ┃ ┃ ┗ 📜MyPage.jsx - MY 페이지
 ┃ ┣ 📂NotFoundPage
 ┃ ┃ ┗ 📜NotFoundPage.jsx - 경로를 설정하지 않은 모든 페이지(404)
 ┃ ┣ 📂PopDetailPage
 ┃ ┃ ┗ 📜PopDetailPage.jsx - 인기 페이지의 게시물 상세 조회 페이지
 ┃ ┣ 📂PopPage
 ┃ ┃ ┣ 📂components - 인기 페이지에 사용되는 컴포넌트
 ┃ ┃ ┃ ┗ 📜Card.jsx
 ┃ ┃ ┗ 📜PopPage.jsx - 인기 페이지
 ┃ ┣ 📂SettingPage
 ┃ ┃ ┣ 📂components - 설정 페이지에 사용되는 컴포넌트
 ┃ ┃ ┃ ┗ 📜ListItem.jsx
 ┃ ┃ ┗ 📜SettingPage.jsx - 설정 페이지
 ┃ ┣ 📂SkeletonPage - 스켈레톤 UI를 위한 페이지
 ┃ ┃ ┣ 📂components - 스켈레톤 UI에 사용되는 컴포넌트
 ┃ ┃ ┃ ┣ 📜SkeletonIcon.jsx
 ┃ ┃ ┃ ┗ 📜SkeletonInfos.jsx
 ┃ ┃ ┗ 📜SkeletonPage.jsx
 ┃ ┣ 📂UploadDonePage
 ┃ ┃ ┗ 📜UploadDonePage.jsx - 업로드 완료 페이지
 ┃ ┗ 📂UploadPage
 ┃ ┃ ┗ 📜UploadPage.jsx - 업로드 페이지
 ┣ 📂recoil
 ┃ ┣ 📂uploadContents
 ┃ ┃ ┗ 📜atom.js - 닉네임, 해시태그값을 담는 아톰
 ┃ ┗ 📂uploadImage
 ┃ ┃ ┗ 📜atom.js - File 객체를 담는 아톰
 ┣ 📂utils
 ┃ ┣ 📜convertToK.js
 ┃ ┣ 📜handleInstagramLogin.js
 ┃ ┣ 📜handleKaKaoLogin.js
 ┃ ┗ 📜preventScroll.js
 ┣ 📜App.js
 ┣ 📜index.js
 ┗ 📜theme.js - 색상 코드
```

🤔 개발 주안점

**사용자 경험**을 가장 중요하게 생각하고 프로젝트를 진행했습니다.

배포 주소에 방문하셔서 기능을 직접 확인하시면 더욱 흥미를 느끼실 것 같습니다.

대부분의 기능을 사용할 수 있지만, 인스타그램 연결은 등록된 개발자 계정으로만 수행할 수 있습니다.(노션 FE 테스트 보고서 비고란에 관련 내용 서술하였습니다.)

시각적인 이해를 돕기 위해 인스타그램 연결과 업로드(인스타그램 연결된 사용자만 업로드 가능) 과정은 gif로 첨부합니다.

<br />

1️⃣ 아름다운 유저 인터페이스 및 인터랙티브한 애니메이션 구현을 위해 노력했습니다.

```
홈
1. 사용자가 autoplay를 인지할 수 있도록 progress bar를 만들었습니다.
2. autoplay에 대한 pause, resume 애니메이션을 적용했습니다.
3. 주요 타겟인 모바일 사용자를 고려하여 페이지네이션이 아닌 무한스크롤을 적용했습니다.

인기
1. 화면의 재미를 위해 자유분방하지만 정갈한 느낌을 주는 masonry layout을 적용했습니다.
2. 게시물 상세 조회 시 확대 애니메이션을 적용했습니다.
3. 주요 타겟인 모바일 사용자를 고려하여 페이지네이션이 아닌 무한스크롤을 적용했습니다.

MY
1. 게시물 상세 조회 시 확대 애니메이션을 적용했습니다.
2. 사용자에게 상처가 될 수 있는 요소(좋아요 수, 인스타그램 방문자 수가 0인 경우)를 노출시키지 않도록 만들었습니다.
2. 주요 타겟인 모바일 사용자를 고려하여 페이지네이션이 아닌 무한스크롤을 적용했습니다.(내 게시물 전체 조회)

설정
1. 설정 페이지로 이동 시 슬라이드 애니메이션을 적용했습니다.

좋아요
1. 좋아요 애니메이션을 적용했습니다.
2. 게시물 화면의 어느 영역이라도 두번 클릭하면 좋아요를 요청할 수 있도록 만들었습니다.(상호작용을 촉진할 수 있다고 생각했습니다.)
3. 이미 좋아요된 게시물이라도 두번 클릭하는 것으로 좋아요 애니메이션을 반복해서 볼 수 있도록 만들었습니다.(게임처럼 재미 요소를 줄 수 있다고 생각했습니다.)

내비게이션 바
1. 사용자가 현재 페이지의 위치를 알 수 있도록 하이라이팅됩니다.
```

2️⃣ 상황에 따라 다른 로딩 화면을 적용했습니다.

```
1. 큰 단위의 로딩 화면은 서비스의 분위기를 북돋고자 하트 모양의 로딩 애니메이션을 적용했습니다.
2. 게시물의 로딩은 게시물의 윤곽을 미리 보여줄 수 있도록 스켈레톤 UI를 적용하였습니다.
```

3️⃣ 사용자를 자연스럽고 쉽게 유입하기 위해 노력했습니다.

```
1. 로그인없이 홈 페이지의 게시물을 볼 수 있게 하여 사용자의 흥미를 유발하고, 추가적인 행동을 원하는 경우 로그인을 하도록 만들었습니다.
2. 지루한 회원가입 절차를 제거하고 빠르게 서비스에 접근할 수 있도록 카카오 로그인을 사용했습니다.
```

4️⃣ 일관성을 지키기 위해 노력했습니다.

```
1. 읽기 편하도록 코드의 구조를 일관되게 가져가고자 노력했습니다.
2. 기본적인 파일, 함수명 등에 대한 컨벤션뿐만 아니라 스타일 관련 컨벤션도 정하여 통일성을 지키고자 노력했습니다.(감싸는 용도의 태그 Layout > Container > Box 순)
3. Styled-components의 ThemeProvider를 사용하여 색상 코드를 변수로 관리했습니다.
```

5️⃣ 컴포넌트의 재사용성을 고려했습니다.

```
1. 게시물과 스켈레톤 UI는 같은 골격 구조(Post.jsx)를 가집니다.
2. 홈, 인기, MY 페이지는 같은 골격 구조(Post.jsx)를 가집니다.
3. 버튼을 Button, IconButton, ModalButton으로 만들어 상황에 따라 적절히 사용했습니다.
```

6️⃣ 예외 상황을 고려했습니다.

```
1. 로그인 토큰이 만료되는 경우, axios의 interceptor를 활용하여 토큰을 다시 발급받을 수 있도록 만들었습니다.
2. 데이터 페칭 중 에러가 발생하는 경우, alert로 사용자에게 가이드를 제공하거나 다른 페이지로 리다이렉트되도록 만들었습니다.
3. 지정한 경로 이외에 다른 경로에 접근하는 경우, 404 페이지(NotFoundPage.jsx)로 이동하게 만들었습니다.
```

7️⃣ 시맨틱 구조를 갖도록 노력했습니다.

8️⃣ 버튼에 대한 접근성을 고려했습니다.

```
1. button에 title을 부여하여 Lighthouse의 Accessibility 점수를 83점에서 92점으로 올렸습니다.
```

9️⃣ favicon과 오픈그래프 태그에도 신경을 썼습니다.
