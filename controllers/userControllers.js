const db=require('../db/database');

const getUsers=(req,res)=>
{
    db.query('SELECT * FROM users',(err,results)=>
    {
        if(err)
        {
            res.status(500).json({message:'Database error'});
            return;
        }
        res.status(200).json(results);
    }
    )
}

const addUser=(req,res)=>
{
    const {username,email}=req.body;
    db.query('INSERT INTO users (username,email) VALUES (?,?)',[username],[email],(err,results)=>
    {
        if(err)
        {
            res.status(500).json('Database error');
            return;
        }
        res.status(201).json({message:'User added succesfully', userId:result.insertedId});
    });
};

module.exports= {getUsers,addUser};
