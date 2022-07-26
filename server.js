const express = require('express');



const app = express();
const PORT = process.env.PORT || 5000


app.get('/api/customers', (req,res)=>{
    const customers = [
        {name:'john smith', occupation: 'Engineer'},
        {name:'Andrew James', occupation: 'Doctor'},
        {name:'Thomas Pieler', occupation: 'Administrator'},
        
        
    ]

    res.json(customers)
    
})

app.listen(PORT, ()=>console.log(`server running on port ${PORT}`))