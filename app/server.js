const express = require('express')
const {sequelize} = require('./model/index.model') ; 

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) ;

// check connect
const checkConnectDB = () => {
    sequelize.authenticate().then(res => {
        console.log('Connect succes !') ;
    }).catch(err => console.log(err)) ; 
} ; 
checkConnectDB() ; 

const checkSync = () => {
    sequelize.sync({force:true}).then(res => {
        console.log('Sync success !') ;
    }).catch(err => {
        console.log('Sync fail !') ; 
        console.log(err) ; 
    })
}
checkSync() ; 