import  algorim from 'crypto-ts';
const hash=<T>(data:T)=>{
return    algorim.SHA256(JSON.stringify(data)).toString();
}