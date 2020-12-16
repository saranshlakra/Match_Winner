// Teams teams match, min 100 score is required for winning or draw
// template literals and ternary operator are also used


var dolphins, koalas, avgDolp, avgKoal,
D1 = 96,
D2 = 108,
D3 = 89,
K1 = 88,
K2 = 91,
K3 = 110; 

avgDolp = (D1+D2+D3)/3;
avgKoal = (K1+K2+K3)/3;
console.log(`avgKoal is ${avgKoal}
avgDolp is ${avgDolp}`
)
// let winner = (avgDolp > avgKoal) ? 'winner is Dolphins' : 'winner is Koalas'; //ternary operator
// console.log(winner);

if(avgKoal > avgDolp && avgKoal >= 100){
    console.log('Winner is Koalas');
}else if(avgDolp > avgKoal && avgDolp >= 100){
    console.log('Winner is Dolphins');
}else if( avgDolp && avgKoal >= 100 && avgKoal === avgKoal){
console.log("Draw");
}
else{
    console.log('Nobody wins');
}