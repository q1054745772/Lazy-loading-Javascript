var imslist = document.getElementsByTagName("img")
var wH = window.innerHeight
var st = document.documentElement.scrollTop
window.addEventListener("scroll",showImg)
function showImg(){
    for(let i=0;i<imslist.length;i++){
        if(imslist[i].getBoundingClientRect().top<wH+st){
            setTimeout(()=>{
                imslist[i].src = imslist[i].dataset.src,1000
            },500)
        }
    }
}


showImg()


console.log("2222")