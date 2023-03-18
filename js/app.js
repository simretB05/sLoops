// let upCounter = 0;
// while(upCounter <= 50) {
// console.log(upCounter);
// upCounter = upCounter + 1;
// }
// let downCounter = 0;
// while(downCounter >=-50) {
// console.log(downCounter);
// downCounter = downCounter - 1;
// }
// let evenCounter = 0;
// while(evenCounter < 100) {
// console.log(evenCounter);
// evenCounter = evenCounter+2;
// }
// let counter=0
// let users = [`simret`, `bob`, `laura`]
// users.push(`dave`)

// while ( counter < users.length )
// {
//     console.log( users[counter] )
//     counter =counter+1
// }
let counter1=0
let players = [`Joe`, `Carlos`, `Bren`]
let playersCondition =[true,false,false]
let playersPoint = [4, 6, 8]

while ( counter1 < players.length && counter1 < playersPoint.length && counter1 < playersCondition.length){
if( playersCondition[counter1]===false)
{
    console.log( players[counter1] + " points " + playersPoint[counter1] + " condition" + playersCondition[counter1] )
   
}
counter1 = counter1 + 1
}


for ( let counter1 = 0; counter1 < players.length && counter1<playersPoint.length & counter1<playersCondition.length; counter1= counter1+1)
if(playersCondition[counter1]==false){
    console.log(players[counter1] + " with point"+ playersPoint[counter1] + "with condition" +playersCondition[counter1] )  
    
}

let playersGroup = {
    players: [`Joe`, `Carlos`, `Bren`],
    playersCondition: [true, false, false],
    playersPoint :[4, 6, 8]
    

}

console.log( playersGroup[`players[1]`])
//  console.log(playersCondition.)
