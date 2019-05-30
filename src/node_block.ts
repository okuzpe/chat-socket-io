


// class nodeBlocks{
//     blockEva:Number
//     blockAdan:Number
//     data:JSON
//     timeStamp:Date
//     difficulty:number 

//     constructor(data:JSON, blockEva:number,blockAdan:number,timeStamp:Date,difficulty:number){
//         this.blockAdan=blockAdan
//         this.blockEva=blockEva
//         this.data=data
//         this.timeStamp=timeStamp
//         this.difficulty=difficulty
//     }
// }

export interface nodeBlocks{
    blockParent:number //apuntadores
    blockMother:number//apuntadores
    data:JSON
    timeStamp:Date
    difficulty:number 
}

// export interface parentBlock{
//     parentBlock:parentBlock
//     data:JSON
//     timeStamp:Date
//     difficulty:number 
// }

