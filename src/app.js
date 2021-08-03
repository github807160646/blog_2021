const express = require('express');

const app = express();

app.use(express.static('static',{
    extensions:['html','htm']
}));


app.listen(3000,()=>{
    console.log('服务启动成功');
})
