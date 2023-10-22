# html-frame

html frame

## Simple HTTP Server 설치및 실행

```
// http-server
// live reload가 안됨. 개발시 불편함.

// 설치
npm install -g http-server

// 실행
http-server
```

## Live Server 설치및 실행

```
// http-server
// live reload가됨.

// 설치
npm install -g live-server

// 실행
live-server --port=8080 --browser=chrome
live-server --port=8080 --browser=chrome --open=./page --entry-file=./page/index.html
```

```text
--port=NUMBER- 사용할 포트를 선택하세요. 기본값: PORT env var 또는 8080
--host=ADDRESS- 바인딩할 호스트 주소를 선택하세요. 기본값: IP env var 또는 0.0.0.0("모든 주소")
--no-browser- 자동 웹 브라우저 실행을 억제합니다.
--browser=BROWSER- 시스템 기본값 대신 사용할 브라우저를 지정합니다.
--quiet | -q- 로깅 억제
--verbose | -V- 추가 로깅(모든 요청 기록, 모든 수신 IPv4 인터페이스 표시 등)
--open=PATH- 서버 루트 대신 PATH로 브라우저를 시작합니다.
--watch=PATH- 변경 사항만 감시하기 위한 쉼표로 구분된 경로 문자열(기본값: 모든 것을 감시)
--ignore=PATH- 무시할 쉼표로 구분된 경로 문자열( anymatch 호환 정의)
--ignorePattern=RGXP- 무시할 파일의 정규식(예: .*\.jade)( 더 이상 사용되지 않음--ignore )
--no-css-inject- 변경된 CSS를 삽입하는 대신 CSS 변경 시 페이지를 다시 로드합니다.
--middleware=PATH- 추가할 미들웨어 기능을 내보내는 .js 파일의 경로; middleware폴더 에 포함된 미들웨어를 참조하기 위한 경로나 확장자가 없는 이름일 수 있습니다.
--entry-file=PATH- 누락된 파일 대신 이 파일(서버 루트 상대)을 제공합니다(단일 페이지 앱에 유용함).
--mount=ROUTE:PATH- 정의된 경로 아래에서 경로 콘텐츠를 제공합니다(여러 정의 가능).
--spa- 요청을 /abc에서 /#/abc로 변환합니다(단일 페이지 앱에 편리함).
--wait=MILLISECONDS- (기본값 100ms) 다시 로드하기 전에 모든 변경 사항을 기다립니다.
--htpasswd=PATH- PATH에 있는 htpasswd 파일을 예상하여 http-auth를 활성화합니다.
--cors- 모든 출처에 대해 CORS 활성화(요청 출처 반영, 자격 증명이 있는 요청 지원)
--https=PATH- HTTPS 구성 모듈에 대한 PATH
--https-module=MODULE_NAME- 사용자 정의 HTTPS 모듈(예: spdy)
--proxy=ROUTE:URL- ROUTE에 대한 모든 요청을 URL로 프록시 처리
--help | -h- 간결한 사용법 힌트를 표시하고 종료합니다.
--version | -v- 버전 표시 및 종료
```