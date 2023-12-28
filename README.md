# caramella_toyproject

## 기능 명세서 초안

### 로그인 페이지

### 메인 페이지

1. 개발팀 요청

- navigation bar
  - 통합 지원 바로가기
    - 네이버 웍스 기능 요청
    - 신규 팀원 계정 생성
  - 자원 관리 바로가기
    - 서버 자원 할당 요청
    - DB 자원 할당 요청
    - SW 사용 / 도입 요청
    - 기타 자원 할당 요청
  - 권한 관리 바로가기
    - 서버 접근 권한 신규/ 변경 요청
  - 질문 바로가기
    - 요청 또는 인스던트 제출
    - 질문하기

2. 필독 문서

- Grid

3. 연차

- 연차 관련 페이지 바로가기

4. 개선사항 작성

- Input 창으로 바로 입력하기

### 필독 문서 페이지

### 통합 지원 페이지

1.  네이버 웍스 기능 요청

- 제목 (text)
- 제안 기능 (text)
- 관련 파일 첨부 (file)

2. 신규 팀원 계정 생성

- 신규 팀원 정보
  - Name (text)
  - Supervisor (text)
  - Job title (text)
  - Start date (date-string)
  - Employee type (select-string)
  - Location (text)
- 사무실 여부 (radio-boolean)
- 명함
  - First Name(text)
  - Last Name(text)
  - Job title(text)
  - Email(email)
  - Phone(string)
- 서비스 도움 (radio-string)

### 자원 관리 페이지

1. 서버 자원

- 긴급도 (radio-string)
- 자원 종류 (radio-string)
- 시스템 요구 사항 (select-string)
- 사용 예정일 (date-string)
- 사용 종료일 (date-string)
- 시스템 접속 IP (text)
- 방화벽 요청 사항 (text : default : TCP/80(HTTP),TCP/443(HTTPS),TCP/22(SSH) )
- 배포방식 (radio-string)
- 요약 (text)
- 기타 요구 사항(text)
- 서버 접속 PUB KEY (text)
- 프로젝트 저장소 url (text)
- 배포 도움 필요 여부 (radio-boolean)

2. DB 자원

- 긴급도 (radio-string)
- 자원 종류 (radio-string)
- 시스템 요구 사항 (text)
- 사용 예정일 (date-string)
- 사용 종료일 (date-string)
- 시스템 접속 IP (text)
- 요약 (text)
- 기타 요구 사항(text)
- 프로젝트 저장소 url (text)
- 설정 관련 도움 필요 여부 (radio-boolean)

3. SW 사용 요청

- 요청자 (text)
- 소프트웨어 금액 (text)
- 보유 소프트웨어 목록 (select-string)
- 신규 소프트웨어 요청 (text)
- SW/서비스 제공사 (text)
- version number (number)
- 소프트웨어 정보에 대한 url 링크 (text)
- 필요한 라이선스 개수 (number)
- 필요한 시기 (date-string)
- 해당 소프트웨어 사용 용도 (text)
- 신규 소프트웨어 요청 시, 해당 소프트웨어 도입의 정당성(text)
- 기간제 요금제인지 (radio-boolean)

4. 기타 자원 요청

- 긴급도 (radio-string)
- 설명 (text)

### 권한 관리 페이지

1. 서버 접근 권한 신규/변경 요청

- 신청자 정보
  - 이름 (text)
  - 서버 접근 IP (text)
  - Phone (string)
  - Email (email)
- 접근 권한 요청 리스트
  - 대상 서버 (select-string)
  - 요청 사항 (radio-string)
  - 필요 접근 권한 (text)
- 서약 (check-boolean)

### 질문 페이지

1. 요청 또는 인시던트 제출

- 요약 (text)
- 요청 세부 사항 (text)
- 관련 파일 첨부 (file)

2. 질문

- 질문 (text)
- 관련 파일 첨부 (file)

### 개인정보 관리 페이지

### 연차 페이지
