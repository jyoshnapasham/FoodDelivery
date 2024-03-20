import { restuarants } from './restuarants.js';
function displayRestuarants(){
    var restuarant=document.getElementById('restuarants');
    const restData= restuarants.filter((item)=>item.category=='restuarant');
    restData.map(item=>{
        var itemCard= document.createElement('div');
        itemCard.setAttribute('id','item-card')
        var cardTop= document.createElement('div');
        cardTop.setAttribute('id','card-top');
        var star= document.createElement('i');
        star.setAttribute('class','fa fa-star');
        star.setAttribute('id','rating');
        star.innerText= ' ' + item.rating;
        cardTop.appendChild(star);
        var anchor=document.createElement('a');
        anchor.href='index.html';
        var img= document.createElement('img');
        img.src=item.img;
        img.addEventListener('click', function() {
            window.location.href = 'index.html';
        });
        var itemName= document.createElement('p');
        itemName.setAttribute('id','item-name');
        itemName.innerText= item.name;
        itemCard.appendChild(cardTop);
        itemCard.appendChild(anchor);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        restuarant.appendChild(itemCard);
    })
}
displayRestuarants();
const resData=[...new Map(restuarants.map(item=>[item['category'],item])).values()];
console.log(resData);

document.getElementById('add-address').addEventListener('click',addAddress);

document.getElementById('m-add-address').addEventListener('click',addAddress);

function addAddress(){
    var address= prompt('Enter your address','');
    if(address.toLowerCase()=="hyderabad"){
        document.getElementById('add-address').innerText= ' ' + address;
    }
    else if(!address){
        alert("Invalid address")
    }
    else{
        alert("Sorry, No restuarants found")
    }
}