        //------dates functions-------
//choosing random dates
function randomDate(start, end) {
 return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
};
const futureDate=randomDate(new Date(2022,9,10),new Date(2023,1,1));
//print future date
//console.log("future" +" "+ futureDate.getTime()); 
//print expire date to the screen 
const  tempToday= new Date().getTime();
const year=futureDate.getFullYear()
const month=futureDate.getMonth()+1;
const day=futureDate.getDay()+1;
document.querySelector(".expire-date").innerHTML=`the sale will begin at :${ day+ "/"+ month +"/"+year}`;
//counting down func:
const countDown=()=>{
    const today= new Date().getTime();
    // console.log("today"+" " +today);
    const counter=futureDate.getTime()-today;
    // console.log("counter"+" "+counter);
         if(counter<0){
         clearInterval(x);
        }
        if(counter===0){
            ShowBth();
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
   //to html file
   document.querySelector('.days').innerHTML=daycounter;
   document.querySelector('.hours').innerHTML=hourcounter;
   document.querySelector('.minutes').innerHTML=minutecounter;
   document.querySelector('.seconds').innerHTML=secoundcounter;
  
};
//runs count func within 1 sec
let x =setInterval(function(){
countDown();
},1000);
    //-----------images-------------
const images=new Array(20);         
//function that puts the pictures into an fixed array maybe dosent needed! 
let a =()=>{
   for(let i=0;i<images.length;i++){
    j=i+1;
    images[i]=`images/p${j}`;
   }   
};
a();
console.log(images);
//random picture choosing
const imgAt=()=>{
var index=Math.ceil(Math.random()*20);

   var htmltag=`<img src="/images/p${index}.jpg">`;
   console.log(htmltag);

    document.querySelector('.product-img').innerHTML=htmltag;
}
imgAt();
//----------btn functions------------------
let hidden=true; 
var ShowBth=()=>{
   hidden=!hidden;
   if(hidden===false){
     document.querySelector('.btn btn-outline-primary').style.visibility = 'visible';
   }


}




























 