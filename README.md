# caramella_toyproject

<details>
<summary>기능 명세서 초안</summary>

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

</details>

<details>
<summary>API 문서</summary>

### Login

- method `POST`
- URL `/login`

#### Request Header

```
POST /login HTTP/1.1
Content-Type: application/json
Host: localhost:3000
```

#### Request Body

```
{
   "email" : "Julia@gamil.com",
   "password" : password
}
```

#### Resonse Header

```
HTTP/1.1 200 OK
Authorization: Bearer {JWT Token}
Content-Type: application/json
```

#### Response Body

```
{
  "success" : true,
  "response" : "" ,
  "error" : null
}

{
  "success" : false,
  "response" : "" ,
  "error" : "일치하지 않는 ID와 PW입니다."
}

```

### 개선사항

- method `POST`
- URL `/improve`

#### Request Header

```
POST /improve HTTP/1.1
Content-Type: application/json
Host: localhost:3000
```

#### Request Body

```
{
   "message" : "string"
}
```

#### Resonse Header

```
HTTP/1.1 200 OK
Authorization: Bearer {JWT Token}
Content-Type: application/json
```

#### Response Body

```
{
  "success" : true,
  "response" : "" ,
  "error" : null
}

```

### 통합지원 / 네이버 웍스

- method `POST`
- URL `/combine/works`

#### Request Header

```
POST /combine/works HTTP/1.1
Content-Type: multipart/form-data
Host: localhost:3000
```

#### Request Body

```
FormData

name = "file"
filename = "example.png"
Content-Type : png,jpeg ...etc

------------

name = "requestDTO"
filename = "blob"
Content-Type : application/json

{
   "title" : "string",
   "message" : "string",
}

```

#### Resonse Header

```
HTTP/1.1 200 OK
Authorization: Bearer {JWT Token}
Content-Type: application/json
```

#### Response Body

```
{
  "success" : true,
  "response" : "" ,
  "error" : null
}

```

### 통합지원 / 신규 팀원

- method `POST`
- URL `/combine/newmember`

#### Request Header

```
POST /combine/newmember HTTP/1.1
Content-Type:  application/json
Host: localhost:3000
```

#### Request Body

```
{
    "fullName" : "string",
    "supervisor" : "string",
    "job" : "string",
    "startDate" : "0000-00-00",
    "employee" : "string",
    "location" : "string",
    "office" : boolean,
    "firstName" : "string",
    "lastName" : "string",
    "email" : "email",
    "phone" : "string",
    "service" : ["item1","item2",...]
}
```

#### Resonse Header

```
HTTP/1.1 200 OK
Authorization: Bearer {JWT Token}
Content-Type: application/json
```

#### Response Body

```
{
  "success" : true,
  "response" : "" ,
  "error" : null
}

```

### 자원관리 / 서버

- method `POST`
- URL `/source/server`

#### Request Header

```
POST /source/server HTTP/1.1
Content-Type:  application/json
Host: localhost:3000
```

#### Request Body

```
{
    "emergency" : "string",
    "sourceType" : "string",
    "systemRequire" : ["item1", "item2",...],
    "startDate" : "0000-00-00",
    "endDate" : "0000-00-00",
    "IP" : "string",
    "firewallRequire" : "string",
    "deployType" : "string",
    "summary" : "string",
    "etcRequire" : "string",
    "PUBKEY" : "string",
    "repository" : "string",
    "deployHelp" : boolean
}
```

#### Resonse Header

```
HTTP/1.1 200 OK
Authorization: Bearer {JWT Token}
Content-Type: application/json
```

#### Response Body

```
{
  "success" : true,
  "response" : "" ,
  "error" : null
}

```

### 자원관리 / DB

- method `POST`
- URL `/source/db`

#### Request Header

```
POST /source/db HTTP/1.1
Content-Type:  application/json
Host: localhost:3000
```

#### Request Body

```
{
    "emergency" : "string",
    "sourceType" : "string",
    "systemRequire" : ["item1", "item2",...],
    "startDate" : "0000-00-00",
    "endDate" : "0000-00-00",
    "IP" : "string",
    "summary" : "string",
    "etcRequire" : "string",
    "repository" : "string",
    "systemHelp" : boolean
}
```

#### Resonse Header

```
HTTP/1.1 200 OK
Authorization: Bearer {JWT Token}
Content-Type: application/json
```

#### Response Body

```
{
  "success" : true,
  "response" : "" ,
  "error" : null
}

```

### 자원관리 / SW 사용

- method `POST`
- URL `/source/sw`

#### Request Header

```

POST /source/sw HTTP/1.1
Content-Type: application/json
Host: localhost:3000

```

#### Request Body

```
{
    "user" : "string",
    "charge" : "string",
    "stored" : "string",
    "newRequire" : "string",
    "provider" : "string",
    "link" : "string",
    "version" : number,
    "license" : number,
    "startDate" : "0000-00-00",
    "usage" : "string",
    "righteousness" : "string",
    "fixedterm" : boolean
}
```

#### Resonse Header

```
HTTP/1.1 200 OK
Authorization: Bearer {JWT Token}
Content-Type: application/json
```

#### Response Body

```
{
  "success" : true,
  "response" : "" ,
  "error" : null
}
```

### 자원관리 / 기타

- method `POST`
- URL `/source/etc`

#### Request Header

```

POST /source/etc HTTP/1.1
Content-Type: application/json
Host: localhost:3000

```

#### Request Body

```
{
    "emergency" : "string",
    "message" : "string",
}
```

#### Resonse Header

```
HTTP/1.1 200 OK
Authorization: Bearer {JWT Token}
Content-Type: application/json
```

#### Response Body

```
{
  "success" : true,
  "response" : "" ,
  "error" : null
}
```

### 권한관리 / 서버

- method `POST`
- URL `/auth/server`

#### Request Header

```
POST /auth/server HTTP/1.1
Content-Type: application/json
Host: localhost:3000

```

#### Request Body

```

{
    "user" : "string",
    "IP" : "string",
    "Phone" : "010-0000-0000",
    "email" : email,
    "list" : [{
         "server" : "string",
         "require" : "string",
          "message" : "string"},
        {
         "server" : "string",
         "require" : "string",
         "message" : "string" }...],
    "etcRequire" : "string"
}

```

#### Resonse Header

```
HTTP/1.1 200 OK
Authorization: Bearer {JWT Token}
Content-Type: application/json

```

#### Response Body

```

{
  "success" : true,
  "response" : "" ,
  "error" : null
}

```

### 질문 / 요청

- method `POST`
- URL `/inquiry/require`

#### Request Header

```
POST /inquiry/require HTTP/1.1
Content-Type: multipart/form-data
Host: localhost:3000
```

#### Request Body

```
FormData

name = "file"
filename = "example.png"
Content-Type : png,jpeg ...etc

------------

name = "requestDTO"
filename = "blob"
Content-Type : application/json

{
   "summary" : "string",
   "message" : "string"
}

```

#### Resonse Header

```
HTTP/1.1 200 OK
Authorization: Bearer {JWT Token}
Content-Type: application/json
```

#### Response Body

```
{
  "success" : true,
  "response" : "" ,
  "error" : null
}
```

### 질문 / 요청

- method `POST`
- URL `/inquiry/ask`

#### Request Header

```
POST /inquiry/ask HTTP/1.1
Content-Type: multipart/form-data
Host: localhost:3000
```

#### Request Body

```
FormData

name = "file"
filename = "example.png"
Content-Type : png,jpeg ...etc

------------

name = "requestDTO"
filename = "blob"
Content-Type : application/json

{
   "message" : "string"
}

```

#### Resonse Header

```
HTTP/1.1 200 OK
Authorization: Bearer {JWT Token}
Content-Type: application/json
```

#### Response Body

```
{
  "success" : true,
  "response" : "" ,
  "error" : null
}
```

</details>
