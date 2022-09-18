        //------dates functions-------
//generate random date
function randomDate(start, end) {
 return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
};
const futureDate=randomDate(new Date(2022,9,10),new Date(2023,1,1));
//presents expire date to the screen :
const year=futureDate.getFullYear();
const month=String(futureDate.getMonth() + 1).padStart(2, '0');
const day=String(futureDate.getDate()).padStart(2, '0');
document.querySelector(".expire-date").innerHTML=`the sale will begin at :${ day+ "/"+ month +"/"+year}`;
//counting down func:
const countDown=()=>{
    const today= new Date().getTime();
  const counter=futureDate.getTime()-today;
         if(counter<0){
         clearInterval(x);
        }
        if(counter===0){
           cat_btn();
            clearInterval(x);
        }
    //convert into year month hour from mil sec to "normal"
    const second=1000;
    const minute=second*60;
    const hour=minute*60;
    const day=hour*24;
    //calc the counter time
    const daycounter=Math.floor(counter/day);
    const hourcounter=Math.floor((counter%day)/hour);
    const minutecounter=Math.floor((counter%hour)/minute);
    const secoundcounter=Math.floor((counter%minute)/second);
   //to html file:
   document.querySelector('#days').innerHTML=daycounter;
   document.querySelector('#hours').innerHTML=hourcounter;
   document.querySelector('#minutes').innerHTML=minutecounter;
   document.querySelector('#seconds').innerHTML=secoundcounter;
};

//runs count func within 1 sec
let x =setInterval(function(){
countDown();
},1000);
    //-----------images-----------------
const images=new Array(20);         
//function that puts the pictures into an fixed array maybe dosent needed! 
const put_pic_into_arr =()=>{
   for(let i=0;i<images.length;i++){
    j=i+1;
    images[i]=`images/p${j}`;
   }   
};
put_pic_into_arr();
console.log(images);
//random picture choosing:
const imgAt=()=>{
var index=Math.ceil(Math.random()*20);
   let htmltag=`<img src="/images/p${index}.jpg">`;
document.querySelector('.product-img').innerHTML=htmltag;
}
imgAt();
//----------btn function------------------
const cat_btn=()=>{
document.querySelector(".btn-click-to-buy").innerHTML=`<button type="button" class="btn btn-primary" onclick="ShowBth()">  the sale begins now
</button>`;
};

//when the counter is 0 0 0 0 the btn shows
 let hidden=true;
const ShowBth=()=>{
    hidden=!hidden;
    if(hidden===false){
     let a=document.querySelector('.btn-click-to-buy').innerHTML=`<button type="button" hidden="hidden"/>`
    paypal.Buttons({
        style : {
            size:'mini',
            color: 'black',
            shape: 'pill'
        },
        createOrder: function (data, actions) {
            return actions.order.create({
                purchase_units : [{
                    amount: {
                        currency_code:'USD',
                        value: '0.1'
                    }
                }]
            });
        },
        onApprove: function (data, actions) {
            return actions.order.capture().then(function(details) {
                console.log(details)
                window.location.replace("")
            })
        },
        onCancel: function (data) {
            window.location.replace("")
        }
        }).render('.btn-click-to-buy');
      
   };
    hidden=!hidden;
}


















 