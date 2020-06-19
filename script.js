const bannerHead = document.querySelector('.left-wrapper h1');

let flag = false;

setInterval(function(){
    if(flag === false){
        bannerHead.innerHTML = "<span>Create </span> To Learn";
        flag = true;
    } else {
        bannerHead.innerHTML = "<span> Learn </span> To Create";
        flag = false;
    }
}, 3000);