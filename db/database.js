const mysql=require('mysql2');

const db=mysql.createConnection(
    {
        host:'127.0.0.1',
        user:'root',
        password:'1306',
        database:'user_database',
    }
);

db.connect((err)=>
{
    if(err)throw err;
    console.log('S-a conectat');
})

module.exports=db;