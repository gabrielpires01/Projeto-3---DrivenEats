let food = 0;
let foodName = '';
let drink = 0;
let drinkName = '';
let dessert = 0;
let dessertName = '';

let nome = '';
let adress = '';

const prices = [[17.90,15.90,14.90],[4.90,4.20,6.90],[7.90,8.90,10.90]];
let num = 0;
let num1 = 0;
let num2 = 0;

const selectFood = item => {
    if (num === 0) {
        if (item === "1"){
            const obj = document.getElementById('food1');
            obj.style.boxShadow = '0 0px 5px 1px rgb(116, 116, 116), inset 0px 0px 0px 5px #32B72F'
            obj.getElementsByTagName('ion-icon')[0].style.display = 'inline'
            num = 1
            food = prices[0][Number(item) -1]
            foodName = 'Frango Teriaky'
        } else if (item === "2") {
            const obj = document.getElementById('food2');
            obj.style.boxShadow = '0 0px 5px 1px rgb(116, 116, 116), inset 0px 0px 0px 5px #32B72F'
            obj.getElementsByTagName('ion-icon')[0].style.display = 'inline'
            num = 1
            food = prices[0][Number(item) -1]
            foodName = 'Frango Yin Yang'
        } else {
            const obj = document.getElementById('food3');
            obj.style.boxShadow = '0 0px 5px 1px rgb(116, 116, 116), inset 0px 0px 0px 5px #32B72F'
            obj.getElementsByTagName('ion-icon')[0].style.display = 'inline'
            num = 1
            food = prices[0][Number(item) -1]
            foodName = 'Frango Parmegiana'
        }
    } else {
        const obj1 = document.getElementById('food1');
        obj1.style.boxShadow = '0 0px 5px 1px rgb(116, 116, 116), inset 0px 0px 0px 0px #32B72F'
        obj1.getElementsByTagName('ion-icon')[0].style.display = 'none'
        const obj2 = document.getElementById('food2');
        obj2.style.boxShadow = '0 0px 5px 1px rgb(116, 116, 116), inset 0px 0px 0px 0px #32B72F'
        obj2.getElementsByTagName('ion-icon')[0].style.display = 'none'
        const obj3 = document.getElementById('food3');
        obj3.style.boxShadow = '0 0px 5px 1px rgb(116, 116, 116), inset 0px 0px 0px 0px #32B72F'
        obj3.getElementsByTagName('ion-icon')[0].style.display = 'none'
        num = 0
        food = 0
        selectFood(item)
    }

    if (dessert != 0 && food != 0 && drink != 0) {
        const select = document.getElementsByClassName('notdone')[0];
        select.style.display = 'none'
        const done = document.getElementsByClassName('done')[0];
        done.style.display = 'inline'
        const colorChange = document.getElementsByClassName('select')[0]
        colorChange.style.backgroundColor = '#32B72F'
    }
}
const selectDrink = item => {
    if (num1 === 0) {
        if (item === "1"){
            const obj = document.getElementById('drink1');
            obj.style.boxShadow = '0 0px 5px 1px rgb(116, 116, 116), inset 0px 0px 0px 5px #32B72F'
            obj.getElementsByTagName('ion-icon')[0].style.display = 'inline'
            num1 = 1
            drink = prices[1][Number(item) -1]
            drinkName = 'Coca gelada'
        } else if (item === "2") {
            const obj = document.getElementById('drink2');
            obj.style.boxShadow = '0 0px 5px 1px rgb(116, 116, 116), inset 0px 0px 0px 5px #32B72F'
            obj.getElementsByTagName('ion-icon')[0].style.display = 'inline'
            num1 = 1
            drink = prices[1][Number(item) -1]
            drinkName = 'Pepsi Gelada'
        } else {
            const obj = document.getElementById('drink3');
            obj.style.boxShadow = '0 0px 5px 1px rgb(116, 116, 116), inset 0px 0px 0px 5px #32B72F'
            obj.getElementsByTagName('ion-icon')[0].style.display = 'inline'
            num1 = 1
            drink = prices[1][Number(item) -1]
            drinkName = 'Suco Gelado'
        }
    } else {
        const obj1 = document.getElementById('drink1');
        obj1.style.boxShadow = '0 0px 5px 1px rgb(116, 116, 116), inset 0px 0px 0px 0px #32B72F'
        obj1.getElementsByTagName('ion-icon')[0].style.display = 'none'
        const obj2 = document.getElementById('drink2');
        obj2.style.boxShadow = '0 0px 5px 1px rgb(116, 116, 116), inset 0px 0px 0px 0px #32B72F'
        obj2.getElementsByTagName('ion-icon')[0].style.display = 'none'
        const obj3 = document.getElementById('drink3');
        obj3.style.boxShadow = '0 0px 5px 1px rgb(116, 116, 116), inset 0px 0px 0px 0px #32B72F'
        obj3.getElementsByTagName('ion-icon')[0].style.display = 'none'
        num1 = 0
        drink = 0
        selectDrink(item)
    }
    if (dessert != 0 && food != 0 && drink != 0) {
        const select = document.getElementsByClassName('notdone')[0];
        select.style.display = 'none'
        const done = document.getElementsByClassName('done')[0];
        done.style.display = 'inline'
        const colorChange = document.getElementsByClassName('select')[0]
        colorChange.style.backgroundColor = '#32B72F'
    }
}
const selectDessert = item => {
    if (num2 === 0) {
        if (item === "1"){
            const obj = document.getElementById('dessert1');
            obj.style.boxShadow = '0 0px 5px 1px rgb(116, 116, 116), inset 0px 0px 0px 5px #32B72F'
            obj.getElementsByTagName('ion-icon')[0].style.display = 'inline'
            num2 = 1
            dessert = prices[1][Number(item) -1]
            dessertName = 'Pudim'
        } else if (item === "2") {
            const obj = document.getElementById('dessert2');
            obj.style.boxShadow = '0 0px 5px 1px rgb(116, 116, 116), inset 0px 0px 0px 5px #32B72F'
            obj.getElementsByTagName('ion-icon')[0].style.display = 'inline'
            num2 = 1
            dessert = prices[1][Number(item) -1]
            dessertName = 'Brownie'
        } else {
            const obj = document.getElementById('dessert3');
            obj.style.boxShadow = '0 0px 5px 1px rgb(116, 116, 116), inset 0px 0px 0px 5px #32B72F'
            obj.getElementsByTagName('ion-icon')[0].style.display = 'inline'
            num2 = 1
            dessert = prices[1][Number(item) -1]
            dessertName = 'Petiet Gateau'
        }
    } else {
        const obj1 = document.getElementById('dessert1');
        obj1.style.boxShadow = '0 0px 5px 1px rgb(116, 116, 116), inset 0px 0px 0px 0px #32B72F'
        obj1.getElementsByTagName('ion-icon')[0].style.display = 'none'
        const obj2 = document.getElementById('dessert2');
        obj2.style.boxShadow = '0 0px 5px 1px rgb(116, 116, 116), inset 0px 0px 0px 0px #32B72F'
        obj2.getElementsByTagName('ion-icon')[0].style.display = 'none'
        const obj3 = document.getElementById('dessert3');
        obj3.style.boxShadow = '0 0px 5px 1px rgb(116, 116, 116), inset 0px 0px 0px 0px #32B72F'
        obj3.getElementsByTagName('ion-icon')[0].style.display = 'none'
        num2 = 0
        selectDessert(item)
    }
    if (dessert != 0 && food != 0 && drink != 0) {
        const select = document.getElementsByClassName('notdone')[0];
        select.style.display = 'none'
        const done = document.getElementsByClassName('done')[0];
        done.style.display = 'inline'
        const colorChange = document.getElementsByClassName('select')[0]
        colorChange.style.backgroundColor = '#32B72F'
    }
}

const closeOrder = () => {
    nome = prompt('Qual o seu nome?');
    adress = prompt('Qual seu Endereço?');

    const writeName = document.getElementsByClassName('name')[0];
    const writeAdress = document.getElementsByClassName('adress')[0];

    document.getElementsByClassName('dish')[0].innerHTML = foodName;
    document.getElementsByClassName('bavarage')[0].innerHTML = drinkName;
    document.getElementsByClassName('lastDish')[0].innerHTML = dessertName;
    document.getElementsByClassName('value1')[0].innerHTML = food.toFixed(2);
    document.getElementsByClassName('value2')[0].innerHTML = drink.toFixed(2);
    document.getElementsByClassName('value3')[0].innerHTML = dessert.toFixed(2);
    document.getElementsByClassName('total')[0].innerHTML = `R$ ${(food + drink + dessert).toFixed(2)}`;

    writeName.innerHTML = `Nome: ${name}`;
    writeAdress.innerHTML = `Endereço: ${adress}`;

    document.getElementsByClassName('confirm')[0].style.display = 'flex';
    document.getElementsByClassName('app')[0].style.opacity = '0.3';


}

const finalConfirm = () => {
    const str = `Olá, gostaria de fazer o pedido:
    - Prato: ${foodName}
    - Bebida: ${drinkName}
    - Sobremesa: ${dessertName}
    Total: R$  ${(food + drink + dessert).toFixed(2)}
    Nome: ${nome}
    Endereço: ${adress}`;
    
    const encoded = encodeURIComponent(str)
    const url= `https://wa.me/5521988560414?text=${encoded}`;
    window.open(url)
}

const cancelOrder = () => {
    document.getElementsByClassName('confirm')[0].style.display = 'none';
    document.getElementsByClassName('app')[0].style.opacity = '1';
}