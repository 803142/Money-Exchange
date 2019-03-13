module.exports = function makeExchange(currency) {
  const change = {};
  const base = {"H":50,"Q":25,"D":10,"N":5,"P":1};

  let few = 0;
  let exchange = currency;

  if (exchange >= 10000){
    change.error = "You are rich, my friend! We don't have so much coins for exchange"; 
  }else {
    for(let key in base) {
      few = exchange%base[key];
      if (exchange/base[key] >= 1){
        change[key] = ((exchange-few)/base[key]);
        exchange = few;
       }
    }
  }
  return change;
}
