# 간단한 MBTI 테스트

React + Vite + Tailwind CSS로 만든 모바일 친화적인 MBTI 성격 테스트 웹 앱입니다.

## 기능

- 간단 테스트 (12문항) 및 정밀 테스트 (24문항)
- 모바일 반응형 디자인
- 다양한 공유 옵션:
  - URL 복사 (클립보드)
  - 카카오톡 공유
  - 네이티브 공유 (모바일)
- 세부 점수 및 성격 특성 확인
- 16가지 MBTI 유형 상세 설명

## 시작하기

### 설치

```bash
npm install
```

### 카카오톡 공유 설정 (선택사항)

카카오톡 공유 기능을 사용하려면:

1. [Kakao Developers](https://developers.kakao.com/)에서 앱 생성
2. JavaScript 키 발급
3. `.env.example` 파일을 `.env`로 복사
4. `.env` 파일에 발급받은 키 입력:
   ```
   VITE_KAKAO_APP_KEY=your_kakao_javascript_key_here
   ```

카카오톡 설정 없이도 URL 복사 및 네이티브 공유는 사용 가능합니다.

### 개발 서버 실행

```bash
npm run dev
```

### 빌드

```bash
npm run build
```

## 배포

### Netlify 배포

1. Netlify에 로그인
2. "New site from Git" 선택
3. GitHub 저장소 연결
4. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. (선택) 환경 변수 설정:
   - `VITE_KAKAO_APP_KEY`: 카카오 JavaScript 키
6. Deploy 클릭

### GitHub Pages 배포

1. `package.json`에서 homepage 필드 수정:
   ```json
   "homepage": "https://[username].github.io/[repository-name]"
   ```

2. GitHub Actions로 자동 배포 (이미 설정됨)
   - `.github/workflows/deploy.yml` 참조

3. 또는 수동 배포:
   ```bash
   npm run build
   npx gh-pages -d dist
   ```

## 기술 스택

- React 18
- Vite
- Tailwind CSS
- 순수 JavaScript (백엔드 없음)

## 라이센스

MIT
