
import initParentsBlock from "./block_parents";
import { nodeBlocks } from "./node_block";
const date= new Date();
const json: JSON = JSON.parse('{"HOLA": "ASDASD"}')

const start=()=>{
    const nodeBlocks:nodeBlocks={
        blockParent:initParentsBlock.blockAdan.blockParent,
        blockMother:initParentsBlock.blockEva.blockParent,
        data:json,
        timeStamp:date,
        difficulty:1
    };
    console.log(nodeBlocks);
    return nodeBlocks;
    // return  nodeBlocks(json,blockEva,blockAdan,new Date,1)
 }
export{start} 