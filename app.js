const express = require('express')
const app = express()

const port = PROCESS.ENV.PORT || 3000

app.get('/', (req, res) => {
  res.status(200).send('If status is okay this will show')
})


app.listen(port, console.log('unlike fat people i am running'))
