const http = require('http');
const app = require('./app');
const PORT = process.env.PORT || 5000;

const server = http.createServer(app);

server.listen(PORT,()=>{
    console.log(`Server started on PORT: ${PORT}`);
});


/* 

Salats 

name - string
weight - double
ingredients - array
sauce - string
dietType - string
spicy - bool
expired_date - date

*/