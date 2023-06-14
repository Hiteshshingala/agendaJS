import express from 'express';
import { agendajs, runCrons } from './src/base/agenda';
import cors from 'cors';



export class App {
    app: express.Express;
    port: number;
  
    constructor(port: number = 3200) {
      this.app = express();
      this.port = port;
  
      console.info(`Initializing App Routes.`);
  
      this._init();
      this.initCronJobs();
  
  
    }
  
    private _init() {
      this._initApp();
    }
  
    private _initApp() {
      this.app.use(cors());
      const port = this.port;
      this.app.get('/', (request, response) => {
        response.send(`Hello! API is at 'http://localhost:${port}'`);
      });
    }
  

  
    private initCronJobs() {
        agendajs.on('ready', () => {
          runCrons();
        });
    }
  

  
    listen() {
      this.app.listen(this.port, () => {
        console.info(`server listening on port ${this.port}`);
      });
    }
  }

const _app = new App(3000);
_app.listen();