//PATH , OS Modules 
//const path = require('path');
//const os = require('os');
//const pathObj = path.parse(__filename);
//const os1 = os.totalmem();
//console.log(`Total Mem: ${os1}`);
//console.log(`Free Mem: ${os.freemem()}`);


/* Event Module:
const logger = require('./yurka_modules/logger');
logger.on('logging',(arg)=>{
  console.log('logging was sent to..',arg);
});

logger.log('some message');
*/


//const http = require('http');
//const server = http.createServer((req,res)=>{
//  if(req.url === '/'){
//    res.write('Hello World');
//    res.end();
//  }
//  if(req.url === '/api/courses'){
//    res.write(JSON.stringify([1,2,3,4,5]));
//    res.end();
//  }
//});
//server.listen(3000);
//console.log('server has been started and listening on port 3000');
 

//const efileUrl = 'https://services.dps.ohio.gov/DETS/EnterpriseUser/Certificates/Print?certRangeId=49709&enterpriseId=1420&certType=Online%20Education%20Completion&certificateNo=OEC162451';
//const efileUrlOld = efileUrl.includes('services.dps.ohio.gov') ? efileUrl.substring((efileUrl.length - 1) - 9, 9) : null;
//console.log(efileUrl.substring(efileUrl.length - 9));
//console.log(Number(0.58) * 100);
//const kk = Number(0.58) * 100;

const { Employee } = require('./typescript/classes');

const ty = new Employee('Yurka',23);
ty.displayEmployee();



