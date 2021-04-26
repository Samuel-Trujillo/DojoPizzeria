function pizzaoven(crusttype,saucetype,cheese,toppings){
    var pizza= {};
    pizza.crusttype=crusttype;
    pizza.saucetype=saucetype;
    pizza.cheese=cheese;
    pizza.toppings=toppings;
    return pizza;
}
var p1 = pizzaoven("deep dish","traditional",["mozzarella"],["pepperoni","sausage"])
console.log(p1)

var p2 = pizzaoven("hand tossed","marinara",["mozzarella","feta"],["mushrooms","olives","onions"])
console.log(p2)

var p3= pizzaoven("thin crust","white sauce","mozzarella",["ham","pineapple"])
console.log(p3)

var p4= pizzaoven("gluten free","marinara","mozzarella",["jalapenos","black olives"])
console.log(p4)
