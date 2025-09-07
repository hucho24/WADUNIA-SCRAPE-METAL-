

function buyingli(){
    const buy=document.getElementById("buying");
    if(buy.style.display=="none"){buy.style.display='block'}

    else{buy.style.display='none'}
    document.getElementById("storeli").style.display='none'

}
function storeli(){
    const buy=document.getElementById("storeopen");
    if(buy.style.display=="none"){buy.style.display='block'}

    else{buy.style.display='none'}
     document.getElementById("buying").style.display='none'
    document.getElementById("home").style.display='none'
    document.getElementById("storeli").style.display='none'
    

}

function home(){

     document.getElementById("home").style.display='block'
    document.getElementById("storeli").style.display='none'
    document.getElementById("buying").style.display='none'
}
function btn(){
    const menu=document.getElementById("menu")
    if(menu.style.margin=='4% -15%'){
        menu.style.margin='4% -3%'
    }
    else{menu.style.margin='4% -15%'}
}
function homecd(){
      document.getElementById("home").style.display='block'
        document.getElementById("storeopen").style.display='none'
}

