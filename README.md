# RISE_WEB

라이즈 웹페이지 프로젝트입니다. Next.js와 TypeScript를 기반으로 구축되었습니다.

---
## Project Stack

- **Framework & Language**
    - Next.js (`11.0.1`)
    - React (`17.0.2`)
    - TypeScript (`4.3.5`)

- **Styling & UI**
    - styled-components (`5.3.0`)
    - react-icons (`4.2.0`)
    - react-lottie (`1.2.3`)
    - react-slick (`0.29.0`)
    - react-transition-group (`4.4.2`)
    - gsap (`3.7.1`)

- **Data Fetching & State**
    - axios (`0.21.1`)
    - mongoose (`5.13.7`)

- **Payments**
    - @tosspayments/payment-sdk (`1.1.0`)

- **Analytics & Monitoring**
    - @sentry/nextjs (`6.11.0`)
    - react-gtm-module (`2.0.11`)
    - @next/bundle-analyzer (`11.1.0`)

- **Development Tools**
    - ESLint (`7.32.0`)
    - Prettier (`2.3.2`)
    - TypeScript (`4.3.5`)

---
## Scripts

다음은 `package.json`에 정의된 스크립트 목록입니다. (`yarn [script]` 또는 `npm run [script]`로 실행)

- `yarn dev`: 개발 모드로 Next.js 애플리케이션을 시작합니다.
- `yarn build`: 프로덕션용으로 애플리케이션을 빌드합니다.
- `yarn start`: 빌드된 프로덕션 애플리케이션을 시작합니다.
- `yarn lint`: ESLint를 사용하여 코드 스타일 및 오류를 검사합니다.
- `yarn out`: 정적 HTML 파일로 애플리케이션을 내보냅니다. (`next export`)
- `yarn vercel-deploy`: Vercel 배포를 위해 빌드하고 내보냅니다. (`next build && next export`)
- `yarn bundle`: 번들 분석기를 활성화하여 프로덕션 빌드를 실행합니다. (`ANALYZE=true next build`)
