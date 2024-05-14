const {app} = require('./Services/todos');
const fs = require('fs')
const swaggerUi = require('swagger-ui-express')

const swaggerFile = JSON.parse(fs.readFileSync('./swagger/output.json'))

app.use('/api-doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.listen(3000,()=>{
    console.log("Server is running on PORT 3000")
})