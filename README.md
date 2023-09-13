# calculator_api
vue3로 계산기 restapi 서버 구현


# 서버 실행
```
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
```

READ 계산기
```
{
  METHOD : GET
  url : http://localhost:3000/calculator/id      // id는 CREATE에서 나온 ID
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
```

뺄셈계산
```
{
  METHOD : POST
  url : http://localhost:3000/calculator/id/sub      // id는 CREATE에서 나온 ID
  BODY : {"vaule1":3,"value2":5}
}
```

곱셈계산
```
{
  METHOD : POST
  url : http://localhost:3000/calculator/id/mul      // id는 CREATE에서 나온 ID
  BODY : {"vaule1":3,"value2":5}
}
```

결과 조회
```
{
  METHOD : GET
  url : http://localhost:3000/calculator/id/result      // id는 CREATE에서 나온 ID
}
```
