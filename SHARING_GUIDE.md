# 공유 기능 사용 가이드

MBTI 테스트 결과를 친구들과 쉽게 공유할 수 있는 3가지 방법을 제공합니다.

## 1. URL 복사 (추천)

가장 간단하고 모든 플랫폼에서 사용 가능한 방법입니다.

**사용 방법:**
1. 결과 화면에서 "URL 복사" 버튼 클릭
2. 자동으로 클립보드에 복사됨
3. 원하는 곳에 붙여넣기 (카카오톡, 문자, 이메일 등)

**복사되는 내용:**
```
🎯 나의 MBTI는 ENFP! (스파크형)

✨ 주요 특성: 열정, 창의성, 상상력, 사교성

나도 테스트해보기 👉 [사이트 URL]
```

## 2. 카카오톡 공유

한국에서 가장 많이 사용하는 공유 방법입니다.

**설정 방법:**
1. [Kakao Developers](https://developers.kakao.com/) 접속
2. 로그인 후 "내 애플리케이션" 클릭
3. "애플리케이션 추가하기" 클릭
4. 앱 정보 입력 후 저장
5. "앱 키" 섹션에서 "JavaScript 키" 복사
6. 프로젝트의 `.env` 파일에 키 추가:
   ```
   VITE_KAKAO_APP_KEY=복사한_JavaScript_키
   ```
7. 앱 재시작

**사용 방법:**
- 결과 화면에서 "카카오톡" 버튼 클릭
- 공유할 친구 또는 채팅방 선택

**주의사항:**
- 카카오 개발자 계정이 필요합니다
- 플랫폼 설정에서 Web 플랫폼 URL을 등록해야 합니다
- 로컬 개발 시: `http://localhost:5173`
- 배포 후: 실제 배포 URL

## 3. 네이티브 공유 (모바일)

모바일 기기의 기본 공유 기능을 사용합니다.

**사용 방법:**
1. 결과 화면에서 "공유" 버튼 클릭
2. 기기의 공유 메뉴가 열림
3. 원하는 앱 선택 (카카오톡, 페이스북, 트위터, 문자 등)

**특징:**
- 모바일에서만 작동 (iOS, Android)
- 데스크톱에서는 자동으로 URL 복사로 대체됨
- 별도 설정 불필요

## 배포 시 환경 변수 설정

### Netlify
1. Site settings > Build & deploy > Environment
2. "Add a variable" 클릭
3. Key: `VITE_KAKAO_APP_KEY`
4. Value: 발급받은 JavaScript 키
5. Save

### GitHub Pages
GitHub Actions를 사용하는 경우:
1. Repository Settings > Secrets and variables > Actions
2. "New repository secret" 클릭
3. Name: `VITE_KAKAO_APP_KEY`
4. Secret: 발급받은 JavaScript 키
5. `.github/workflows/deploy.yml`에 환경 변수 추가 필요

## 트러블슈팅

### 카카오톡 공유가 작동하지 않는 경우

1. **JavaScript 키 확인**
   - `.env` 파일이 제대로 생성되었는지 확인
   - 키가 올바르게 입력되었는지 확인

2. **플랫폼 설정 확인**
   - Kakao Developers > 내 애플리케이션 > 플랫폼
   - Web 플랫폼이 추가되어 있는지 확인
   - 사이트 도메인이 정확한지 확인

3. **브라우저 콘솔 확인**
   - F12 또는 개발자 도구 열기
   - Console 탭에서 에러 메시지 확인

### URL 복사가 작동하지 않는 경우

1. **HTTPS 확인**
   - 클립보드 API는 HTTPS에서만 작동
   - 로컬 개발은 http://localhost 예외

2. **브라우저 권한**
   - 브라우저가 클립보드 접근을 허용하는지 확인

## 추가 공유 옵션 (향후 추가 가능)

관심이 있다면 다음 공유 방법도 추가할 수 있습니다:

- **이미지 다운로드**: html2canvas 라이브러리로 결과를 이미지로 저장
- **Twitter 공유**: Twitter Web Intent API 사용
- **Facebook 공유**: Facebook Share Dialog 사용
- **Instagram 스토리**: 이미지 생성 + 공유

원하시는 기능이 있으면 말씀해주세요!
