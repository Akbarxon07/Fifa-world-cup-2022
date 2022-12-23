let main_photo=[
    {
        text:'Argentina chempion and they will win Cup ',
        img:'https://digitalhub.fifa.com/transform/98e69640-0ba1-4e2c-8872-63d5f5e6d489/Netherlands-v-Argentina-Quarter-Final-FIFA-World-Cup-Qatar-2022?io=transform:fill,height:576,width:1440&quality=75'
    },
    {
        text:'Brazil go home',
        img:'https://digitalhub.fifa.com/transform/5ae555d0-32b6-4783-8889-ba1413995213/Croatia-v-Brazil-Quarter-Final-FIFA-World-Cup-Qatar-2022?io=transform:fill,height:576,width:1440&quality=75'
    },
    {
        text:'Argentina chempion and they will win Cup зработка,',
        img:'https://digitalhub.fifa.com/transform/cfed2db1-600a-4a47-99ea-8111694b1650/Leo-Messi-and-Luka-Modric-captains?io=transform:fill,height:576,width:1440&quality=75'
    },
]
let main_img=document.querySelector('.main-img')
let main_text=document.querySelector('.main-text')
let count=0

window.addEventListener('DOMContentLoaded',()=>{
    showweb()
    slide()
})

function showweb(){
    let rasm=main_photo[count].img
    main_img.style.backgroundImage=`url(${rasm})`
    main_text.textContent=main_photo[count].text
}

function slide(){
    count++
    if(count>main_photo.length-1){
        count=0
    }
    showweb()
}
setInterval(slide, 2000)

window.onload=()=>{
    let loader=document.querySelector('.loader')
    let loading=document.querySelector('.loading')
    loader.remove()
    loading.style.display='block'
}