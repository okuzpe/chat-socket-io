import { nodeBlocks } from "./node_block";


// export default class blockAdan{
//     blockEva=32999999;
//     data=JSON
//     timeStamp=new Date()
//     difficulty=2 
// }
// module.exports=new blockAdan;

const blockAdan:nodeBlocks={
    blockParent:33000000,
    blockMother:32999999,
    data:JSON,
    timeStamp:new Date(),
    difficulty:1 
}

const blockEva:nodeBlocks={
    blockParent:32999999,
    blockMother:33000000,
    data:JSON,
    timeStamp:new Date(),
    difficulty:1 
}


export default {blockAdan,blockEva}