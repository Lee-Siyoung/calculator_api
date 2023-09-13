# calculator_api
vue3로 계산기 restapi 서버 구현

|Method|URL|설명|
|------|---|---|
|POST|/calculator|계산기 생성|
|GET|/calculator/:id|계산기 읽기|
|DELETE|/calculator/:id|계산기 삭제|
|POST|/calculator/:id/add|덧셈 계산|
|POST|/calculator/:id/sub|뺄셈 계산|
|POST|/calculator/:id/mul|곱셈 계산|
|GET|/calculator/:id/result|계산 확인|

# 서버 실행
```
npm install express

node serve.js
```

# restapi 간단 확인
글 확장 프로그램 talend API tester 설치 

## CRD restapi
  
CREATE 계산기
```
{
  METHOD : POST
  url : http://localhost:3000/calculator
  BODY : {"name":"cccc"}     // {"name" : "your name"}
}

-- 결과 값

{
  "Id": 1,
  "name": "cccc",
  "value": 0
}
```

READ 계산기
```
{
  METHOD : GET
  url : http://localhost:3000/calculator/id      // id는 CREATE에서 나온 ID
}

-- 결과 값

{
  "Id": 1,
  "name": "asaa",
  "value": 8
}
```

DELETE 계산기
```
{
  METHOD : DELETE
}
```
## 덧셈, 뺄셈, 곱셈, 결과 조회 api

덧셈계산
```
{
  METHOD : POST
  url : http://localhost:3000/calculator/id/add      // id는 CREATE에서 나온 ID
  BODY : {"vaule1":3,"value2":5}
}

-- 결과 값

{
  "Id": 1,
  "name": "asaa",
  "value": 8
}
```

뺄셈계산
```
{
  METHOD : POST
  url : http://localhost:3000/calculator/id/sub      // id는 CREATE에서 나온 ID
  BODY : {"vaule1":3,"value2":5}
}

-- 결과 값

{
  "Id": 1,
  "name": "asaa",
  "value": -2
}
```

곱셈계산
```
{
  METHOD : POST
  url : http://localhost:3000/calculator/id/mul      // id는 CREATE에서 나온 ID
  BODY : {"vaule1":3,"value2":5}
}

-- 결과 값

{
  "Id": 1,
  "name": "asaa",
  "value": 15
}
```

결과 조회
```
{
  METHOD : GET
  url : http://localhost:3000/calculator/id/result      // id는 CREATE에서 나온 ID
}

-- 결과 값
{
  "result": 8
}
```
