var tl=gsap.timeline({
   scrollTrigger:{
      trigger:" #first",
      start:"top top",
   pin:true,
   scrub:true,
   end: "+=" + (window.innerHeight * 3)
},
})

tl.to("#text",{
   top:"50%",
   opacity:1,
   ease:Power1
})
// 
tl.to("#two",{
   top:"0%",
   scale:1,
   ease:Power1,
   delay:.1
},"same")
tl.to("#content",{
   scale:1,
   ease:Power1,
   delay:.1
},"same")
tl.to("#first-img",{
   scale:1,
   ease:Power1,
   delay:.1
},"same")
tl.to("#text",{
   filter: "blur(8px)",
      ease:Power1,
      delay:-.5
   },)
tl.to("#carep",{
   width:"100%",
   ease:Power1,
   delay:.5
})
tl.to("#enterp",{
   width:"100%",
   ease:Expo.Inout
},"a")
tl.to("#limg",{
  left:"0%",
   ease:Power1,
   duration:1,
   delay:-.05
},"a")
tl.to("#first-img",{
  left:"20%",
   ease:Power1,
   delay:.2,
   
},"a")
tl.to("#excelp",{
   width:"100%",
   ease:Expo.Inout,
   delay:.4
   
},"b")
tl.to("#eimg",{
   left:"0%",
    ease:Power1,
    duration:1,
    delay:.3
 },"b")
 tl.to("#limg",{
   left:"20%",
    ease:Power1,
    delay:.4,
    
 },"b")
tl.to("#passionp",{
   width:"100%",
   ease:Expo.Inout,
   delay:.4
   
},"c")
tl.to("#pimg",{
   left:"0%",
    ease:Power1,
    duration:1,
    delay:.3
 },"c")
 tl.to("#eimg",{
   left:"20%",
    ease:Power1,
    delay:.4,
    
 },"c")

tl.to(".key-section-middle-content",{
   top:"0%",
   ease:Power1,
   delay:.5
},"d")
tl.to("#pimg",{
   top:"-20%",
    ease:Power1,
    delay:.5,
    
 },"d")
tl.to(".lp-key-data-items ",{
   top:"0%",
   ease:Power1,
   delay:1,
   scale:.9
})

tl.to("#key-first-screen-content-wrapper",{
   filter: "blur(8px)",
   opacity:0,
   ease:Power1,
   delay:-.5
})
tl.to("#l-width",{
   height:"100%",
   ease:Power1,
   delay:.5
},"e")
tl.to("#key-video",{
   top:"0%",
   ease:Power1,
   delay:.5
},"e")
tl.to(".key-data-content1",{
   y:-280,
   ease:Power0,
   delay:.5
},"e")
tl.to(".key-data-content2",{
   y:-135,
   ease:Power0,
   delay:.5
},"e")

tl.to("#l-width",{
   opacity:0,
   ease:Power1,

})
tl.to("#l-width",{
   height:"0%",
   ease:Power1,
})

tl.to("#l-width",{
   opacity:1,
   height:"100%",
   ease:Power1,
   delay:-.5
},"f")
tl.to("#key-video2",{
   top:"0%",
   ease:Power1,
   delay:-.5
},"f")
tl.to(".key-data-content2",{
   y:-280,
   ease:Power0,
   delay:-.5
},"f")
tl.to(".key-data-content3",{
   y:-135,
   ease:Power0,
   delay:-.5
},"f")
tl.to("#l-width",{
   opacity:0,
   ease:Power1,

})
tl.to("#l-width",{
   height:"0%",
   ease:Power1,
})

tl.to("#l-width",{
   opacity:1,
   height:"100%",
   ease:Power1,
   delay:-.5
},"g")
tl.to("#key-video3",{
   top:"0%",
   ease:Power1,
   delay:-.5
},"g")
tl.to(".key-data-content3",{
   y:-280,
   ease:Power0,
   delay:-.5
},"G")
tl.to(".key-data-content4",{
   y:-135,
   ease:Power0,
   delay:-.5
},"G")
tl.to("#l-width",{
   opacity:0,
   ease:Power1,

})
tl.to("#l-width",{
   height:"0%",
   ease:Power1,
})

tl.to("#l-width",{
   opacity:1,
   height:"100%",
   ease:Power1,
   delay:-.5
},"h")
tl.to("#key-img",{
   top:"0%",
   ease:Power1,
   delay:-.5
},"h")
tl.to(".key-data-content4",{
   y:-270,
   ease:Power0,
   delay:-.5
},"h")
tl.to(".key-data-content5",{
   y:-135,
   ease:Power0,
   delay:-.5
},"h")
