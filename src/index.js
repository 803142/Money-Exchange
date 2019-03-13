module.exports = function makeExchange(currency) {
const change = {};
if (currency>=10000){
change={error: "You are rich, my friend! We don't have so much coins for exchange"}; 
}
else{

few=currency%50;
if (currency/50>=1){
    change[['H']]=((currency-few)/50);
    currency=few;
}
few=currency%25;
if (currency/25>=1){
    change['Q']=((currency-few)/25);
    currency=few;
}
few=currency%10;
if (currency/10>=1){
    change['D']=((currency-few)/10);

    currency=few;
}
few=currency%5;
if (currency/5>=1){
    change['N']=((currency-few)/5);

    currency=few;
}
if (currency>=1){
    change['P']=few;
}

}
return change;
}
