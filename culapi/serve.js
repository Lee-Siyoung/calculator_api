const express = require('express');
const app = express();
const port = 3000;  // path 모듈 사용
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

// 서버 시작
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });


// -------------- 계산기 api
const Calculator={};
let nextID = 1;
// Create 계산기
app.post('/calculator/', (req, res)=>{
    const {name} = req.body;
    const Id = nextID++
    Calculator[Id]={
        Id,
        name,
        value:0
    };
    if(!Calculator[Id].name){
        delete Calculator[Id];
        res.status(404).json({error:"Calculator need name. {name : your name} "});
    }
    else{
        res.status(201).json(Calculator[Id]);
    }
});

// Read 계산기
app.get('/calculator/:id', (req,res)=>{
    const {id} = req.params;
    const cal = Calculator[id];
    if(!cal){
        res.status(404).json({error:"Calculator not found"});
    }
    else{
        res.status(200).json(cal);
    }
})

// Delete 계산기
app.delete('/calculator/:id', (req,res)=>{
    const {id} = req.params;
    if(!Calculator[id]){
        res.status(404).json({error:"Calculator not found"});
    }
    else{
        delete Calculator[id];
        res.sendStatus(204);
    }
})

// 덧셈 계산
app.post('/calculator/:id/add', (req,res)=>{
    const {id} = req.params;
    const {value1, value2}=req.body;
    if(!Calculator[id]){
        res.status(404).json({error:"Calculator not found"});
    }
    else if(!value1 || !value2){
        res.status(404).json({error:"need two value."});
    }
    else{
        Calculator[id].value=value1+value2;
        res.status(201).json(Calculator[id]);
    }
})

// 뺄셈 계산
app.post('/calculator/:id/sub', (req,res)=>{
    const {id} = req.params;
    const val = req.body;
    const {value1, value2}=req.body;
    if(!Calculator[id]){
        res.status(404).json({error:"Calculator not found"});
    }
    else if(!value1 || !value2 || Object.keys(val).length !==2){
        res.status(404).json({error:"need two value."});
    }
    else{
        Calculator[id].value=value1-value2;
        res.status(201).json(Calculator[id]);
    }
})

// 곱셈 계산
app.post('/calculator/:id/mul', (req,res)=>{
    const {id} = req.params;
    const {value1, value2}=req.body;
    if(!Calculator[id]){
        res.status(404).json({error:"Calculator not found"});
    }
    else if(!value1 || !value2){
        res.status(404).json({error:"need two value."});
    }
    else{
        Calculator[id].value=value1*value2;
        res.status(201).json(Calculator[id]);
    }
})

// 결과 조회
app.get('/calculator/:id/result', (req,res)=>{
    const {id} = req.params;
    if(!Calculator[id]){
        res.status(404).json({error:"Calculator not found"});
    }
    else{
        const result = Calculator[id].value;
        res.status(200).json({result});
    }
})
//----------