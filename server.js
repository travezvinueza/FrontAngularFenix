let express = require('express')

let app = express()

app.use('/*',(req, resp) => {
    resp.sendFile(__dirname+'/dist/fuse/index.html')
});


app.listen(process.env.PORT || 8080)