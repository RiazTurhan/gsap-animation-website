function animation(){

  var tl = gsap.timeline()

  tl.from('nav',{
  y:-100,
  duration:1,
  delay: 0.5,
  opacity:0
  })

  tl.from('nav h1',{
    y:-100,
    duration:1,
    stagger:1,
    opacity:0
  
    })


  tl.from('nav ul li',{
  y:-100,
  duration:0.5,
  stagger:1

  })

  tl.from('nav .sing',{
    y:-100,
    duration:0.5,
    stagger:1,
    opacity:0
  
    })

 
  tl.from('.left .text h1',{
  x:-200,
  duration:0.8,
  opacity: 0,
  stagger:1

  })  

  tl.from('.text span',{
    y:-200,
    duration:0.1,
    opacity: 0,
    delay:1,
    stagger:1
  
    })  

  tl.to('.line',{
  width:650,
  duration:1

  })

  
  tl.from('.bottom h2',{
    y:200,
    opacity: 0,
    stagger:1
  
    })  

  tl.from('.right img',{
    width:0,
  })


}

animation()


gsap.from('.page2 .text h1',{
  x:200,
  duration:0.8,
  opacity: 0,
  stagger:1,
  scrollTrigger:{
    trigger:'.right .text h1',
    scroller: 'body',
    scrub:true
  }

  })  

gsap.from('.page2 #box',{
  rotate: 180,
  duration: 1.5,
  delay:0.5,
  opacity:0,
  repeat: 2,
  yoyo:true,
  with:250,
  scrollTrigger:{
    trigger:'.page2, #box',
    scroller: 'body',
  }

})


let menuList = document.getElementById('#menuList')
menuList.style.maxWidth = '0px'

function toggoleMenu(){
  if(menuList.style.maxWidth = '0px'){
    menuList.style.maxWidth = '300px'
  }else{
    menuList.style.maxWidth = '0px'
  }
}

toggoleMenu()