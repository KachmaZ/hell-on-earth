const swaggerAutogen = require('swagger-autogen');
const path = require('path')


const doc = {
    info: {
      title: 'Todo API',
      description: 'My todo API'
    },
    definitions: {
      Todo: {
        id: '1',
        text: 'test',
        done: false
      },
      Todos: [
        {
          $ref: '#/definitions/Todo'
        }
      ],
      Text: {
        text: 'test'
      },
      Changes: {
        changes: {
          text: 'test',
          done: true
        }
      }
    },
    host: 'localhost:3000',
    schemes: ['http']
   }
// path.join(__dirname, '/..', '/index.html')
// путь и название генерируемого файла
const outputFile = path.join(__dirname, 'output.json')
// массив путей к роутерам
const endpointsFiles = [path.join(__dirname, '../Services/todos.js')]

swaggerAutogen(/*options*/)(outputFile, endpointsFiles, doc).then(({ success }) => {
 console.log(`Generated: ${success}`)
})