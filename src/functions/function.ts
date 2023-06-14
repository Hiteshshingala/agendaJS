const function1 = (done: any, job?: any) => {
    console.info("**************************************************");
    console.log('function1 job running', 'date-time', new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds());
    console.info("**************************************************");
    done();
};

const function2 = (done: any, job?: any) => {
    console.info("**************************************************");
    console.log('function2 job running', 'date-time', new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds());
    console.info("**************************************************");
    done();
};

const function3 = (done: any, job?: any) => {
    console.info("**************************************************");
    console.log('function3 job running', 'date-time', new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds());
    console.info("**************************************************");
    done();
};
  
export const cronJobFunc1 = function1;
export const cronJobFunc2 = function2;
export const cronJobFunc3 = function3;