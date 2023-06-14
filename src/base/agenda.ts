import Agenda from 'agenda'
import { cronJobFunc1, cronJobFunc2, cronJobFunc3 } from '../functions/function';

const mongoURI: string = process.env.LOCALURL || 'mongodb://localhost:27017/test';

const agendaJS = new Agenda({ db: { address: mongoURI, collection: 'cron-jobs' } });

agendaJS.define('cronJobFunc1',
{ priority: 10, concurrency: 10 },
cronJobFunc1);

agendaJS.define('cronJobFunc2',
{ priority: 10, concurrency: 10 },
cronJobFunc2);

agendaJS.define('cronJobFunc3',
{ priority: 10, concurrency: 10 },
cronJobFunc3);

const _runCrons = async () => {
  await agendajs.every('*/1 * * * *', 'cronJobFunc1');
  await agendajs.every('*/2 * * * *', 'cronJobFunc2');
  await agendajs.every('*/3 * * * *', 'cronJobFunc3');
  await agendajs.start();
}

export const agendajs = agendaJS;
export const runCrons = _runCrons;