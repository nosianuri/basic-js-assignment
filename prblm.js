 // 1:
function anaToVori(ana) {
    if(ana < 0){
        return 'please enter a positive number greater than 0'
    }
    var vori = ana / 16;
    return vori;
}
var ana = 32;
var vori = anaToVori(ana);
console.log(vori);


// 2:
function pandaCost(singaraQuantity, samusaQuantity, jilapiQuantity){
    const perSingaraPrice = 60;
    const perSamusaPrice = 10;
    const perJilapiPrice = 15;
    const singaraPriceQuantity = singaraQuantity * perSingaraPrice;
    const samusaPriceQuantity = samusaQuantity * perSamusaPrice;
    const jilapiPriceQuantity = jilapiQuantity * perJilapiPrice;
    const totalPrice = singaraPriceQuantity + samusaPriceQuantity + jilapiPriceQuantity;
    return totalPrice;
}
const selectFood = pandaCost(1,1,1);
console.log(selectFood);


// 3:
function picnicBudget(personNumber){
    if(personNumber < 0){
        return 'please enter a positive number greater than 0'
    }
    const perFirst100PersonCost = 5000 ;
    const perSecond100PersonCost = 4000;
    const perAll100PersonCost = 3000;
    
    if(personNumber <= 100) {
        const cost = personNumber * perFirst100PersonCost;
        return cost;
    }
    else if(personNumber <= 200) {
        const first100PicnicPerson = 100 * perFirst100PersonCost;
        const extraPersonCost = personNumber - 100;
        const second100PicnicPerson = extraPersonCost * perSecond100PersonCost;
        const totalPersonCost = first100PicnicPerson + second100PicnicPerson;
        return totalPersonCost;
    }
    else{
        const first100PicnicPerson = 100 * perFirst100PersonCost;
        const second100PicnicPerson = 100 * perSecond100PersonCost;
        const extraPersonCost = personNumber - 200;
        const all100PicnicPerson = extraPersonCost * perAll100PersonCost;
        const totalPersonCost = first100PicnicPerson + second100PicnicPerson + all100PicnicPerson;
        return totalPersonCost;

    }
   }
   
    const person = picnicBudget(45);
    console.log(person);
 
// 4:
const myFriendsName = ['nosia', 'nuri', 'mim', 'tiha'];
function oddFriend(name){
    let odd = '';
    for(let i = 0; i <myFriendsName[i].length; i++) {
        odd = odd + myFriendsName;
        if(myFriendsName[i].length % 2 == 1){
            

            return myFriendsName[i];
            
        }
        else{
         console.log('give a string name');
        }
    }
    
}

const isMyFriendsNameOdd = oddFriend(myFriendsName);
console.log(isMyFriendsNameOdd);
