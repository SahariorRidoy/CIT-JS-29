
// Counter Section Script
const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const countNumber = document.querySelector("#count-number");
let count = 0;
const updateCount=(value) => {
    count += value;
    countNumber.innerText = count;
    if (count >= 10) {
        plus.setAttribute("disabled", true);
    } else {
        plus.removeAttribute("disabled");
    }
    if (count <=0) {
        minus.setAttribute("disabled", true);
    } else {
        minus.removeAttribute("disabled");
    }
}
plus.addEventListener('click', function() {
    updateCount(1);
});
minus.addEventListener('click', function() {
    updateCount(-1);
});



// Accordion Section Script
const accordion=document.querySelectorAll('.accordion');
let newArray=Array.from(accordion);
newArray.map((item)=>{
item.addEventListener('click',function(){
    item.classList.toggle('active');
    const showHide=item.nextElementSibling;
    if(showHide.style.display==='none'){
        showHide.style.display='block';
    }
    else{
        showHide.style.display='none'
    }
})
    
}
)


// Tabs Section Script
function openCity(evt,cityName){
const tabcontent=document.querySelectorAll('.tabcontent');
const makeArray=Array.from(tabcontent);
makeArray.map((item)=>{
    item.style.display='none';
})
 
const tablink=document.querySelectorAll('tablinks');
const linksArray=Array.from(tablink);
linksArray.map((item)=>{
    tablink.className=tablink.className.replace('active','');
})
document.getElementById(cityName).style.display='block';
evt.currentTarget.className+='';
}