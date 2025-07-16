# Include - KAIST AI Club Website

<div align="center">
  <img src="public/logo.svg" alt="Include Logo" width="100" height="100">
  <h3>KAIST 동아리 Include 공식 웹사이트</h3>
  <p>인공지능 분야에 대해 동아리원끼리 서로 돕고 토의하며 성장해나가는 KAIST AI 동아리</p>
</div>

## 📖 About Include

Include는 **인공지능 분야**에 대해 동아리원끼리 서로 돕고 토의하며 성장해나가는 자유로운 분위기를 추구하는, AI 중심의 프로젝트와 AI 관련 다양한 학술 활동 및 교육을 진행하는 **KAIST 동아리**입니다.

### 🎯 주요 활동
- **Study & Competition**: ML 기초 스터디, DL 스터디, 논문 스터디, 각종 공모전 및 대회 참여
- **Project**: 동아리원들이 직접 기획하고 진행하는 AI 프로젝트
- **Regular Meeting**: 매주 수요일 7시 정모 및 세미나

## 🌐 Website Features

이 웹사이트는 Include 동아리의 공식 홈페이지로, 다음과 같은 정보를 제공합니다:

- 📋 동아리 소개 및 활동 안내
- 🔗 GitHub, 이메일, Notion 등 공식 채널 링크
- 📝 신입 동아리원 모집 정보
- 📱 반응형 디자인으로 모바일 친화적 UI

## 🛠 Tech Stack

- **Framework**: [Next.js 12](https://nextjs.org/) (React 17)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Deployment**: Vercel (권장)

## 🚀 Getting Started

### Prerequisites

- Node.js 14+ 
- npm 또는 yarn

### Installation

1. **저장소 클론**
   ```bash
   git clone https://github.com/kaist-include/kaist-include-web.git
   cd kaist-include-web
   ```

2. **의존성 설치**
   ```bash
   npm install
   # 또는
   yarn install
   ```

3. **개발 서버 실행**
   ```bash
   npm run dev
   # 또는
   yarn dev
   ```

4. **브라우저에서 확인**
   
   [http://localhost:3000](http://localhost:3000)에서 결과를 확인할 수 있습니다.

### Available Scripts

```bash
npm run dev      # 개발 서버 시작
npm run build    # 프로덕션 빌드
npm run start    # 프로덕션 서버 시작
npm run export   # 정적 파일 내보내기
npm run lint     # ESLint 실행
```

## 📁 Project Structure

```
kaist-include-web/
├── components/          # React 컴포넌트
│   ├── frontpage/      # 메인 페이지 컴포넌트
│   ├── header.tsx      # 헤더 컴포넌트
│   ├── footer.tsx      # 푸터 컴포넌트
│   └── image.tsx       # 이미지 컴포넌트
├── libs/               # 유틸리티 및 설정
│   └── config.ts       # 사이트 설정
├── pages/              # Next.js 페이지
│   ├── _app.tsx        # 앱 컴포넌트
│   └── index.tsx       # 메인 페이지
├── public/             # 정적 파일
│   ├── logo.svg        # Include 로고
│   ├── include.png     # 동아리 이미지
│   └── favicon.ico     # 파비콘
├── styles/             # 스타일 파일
└── tailwind.config.js  # Tailwind 설정
```

## ⚙️ Configuration

`libs/config.ts` 파일에서 사이트 설정을 관리합니다:

- **staff**: 현재 회장 정보
- **staffMail**: 동아리 연락처 이메일
- **github**: Include GitHub 조직 링크
- **recruit**: 모집 링크 (모집 중이 아닐 때는 `null`)

## 🎨 Design System

- **Primary Color**: Include 브랜드 컬러 (`incl-600`, `incl-200`)
- **Typography**: 시스템 폰트 스택 + `font-mono` for 브랜딩
- **Layout**: 최대 너비 5xl (1024px)로 중앙 정렬
- **Components**: 재사용 가능한 섹션 컴포넌트 구조

## 🤝 Contributing

Include 동아리원이라면 누구나 웹사이트 개선에 기여할 수 있습니다!

1. 이 저장소를 포크합니다
2. 새로운 기능 브랜치를 만듭니다 (`git checkout -b feature/amazing-feature`)
3. 변경사항을 커밋합니다 (`git commit -m 'Add some amazing feature'`)
4. 브랜치에 푸시합니다 (`git push origin feature/amazing-feature`)
5. Pull Request를 열어주세요

### 개발 가이드라인

- TypeScript와 ESLint 규칙을 준수해주세요
- 컴포넌트는 재사용 가능하도록 작성해주세요
- 반응형 디자인을 고려해주세요
- 접근성(a11y) 가이드라인을 따라주세요

## 📞 Contact

- **Email**: limepencil@kaist.ac.kr (2025 회장 신재영)
- **GitHub**: [kaist-include](https://github.com/kaist-include/)
- **Notion**: [Include 노션 페이지](https://include-kaist.notion.site/)

## 📄 License

이 프로젝트는 Include 동아리의 공식 웹사이트입니다.

---

<div align="center">
  <p>Made with ❤️ by <a href="https://github.com/kaist-include/">Include</a></p>
  <p>KAIST 동아리 Include © 2025</p>
</div>

