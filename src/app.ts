import express, { Express } from 'express'

import { ChattyServer } from './setupServer'
import databaseConnection from './setupDatabase'
import { config } from './config'

class Application {
  public initialize(): void {
    this.loadConfig()
    databaseConnection()
    const app: Express = express()
    const server: ChattyServer = new ChattyServer(app)
    server.start()
  }

  private loadConfig(): void {
    config.validateConfig()
  }
}

// class Application {
//   initialize() {
//     const app = express()
//     const server = new ChattyServer(app)
//     server.start()
//   }
// }

const application: Application = new Application()
application.initialize()

// const application = new Application()
// application.initialize()
