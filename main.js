'use strict'

const { db  } = require('./server/db')
const app = require('./server')
const PORT = process.env.PORT || 3000


async function startServer(){

	// await db.sync()

    console.log('db synced')
    
    app.listen(PORT, () => console.log(`hitting main and serving on port ${PORT}`))
}

startServer()