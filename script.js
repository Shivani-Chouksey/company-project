var tl=gsap.timeline({
   scrollTrigger:{
      trigger:" #first",
      start:"top top",
   pin:true,
   scrub:true,
   stagger:1,
   end: "+=" + (window.innerHeight * 8)
},
})

tl.to("#text",{
   top:"50%",
   opacity:1,
   ease:Power1,
   duration:6
})
// 
tl.to("#two",{
   top:"0%",
   scale:1,
   ease:Power1,
   delay:.1,
   duration:6
},"same")
tl.to("#content",{
   scale:1,
   ease:Power1,
   delay:.1
},"same")
tl.to("#first-img",{
   scale:1,
   ease:Power1,
   duration:3,
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
   duration:3,
   delay:.5
})
tl.to("#enterp",{
   width:"100%",
   duration:3,
   ease:Expo.Inout
},"a")
tl.to("#limg",{
  left:"0%",
   ease:Power1,
   duration:3,
   delay:-.05
},"a")
tl.to("#first-img",{
  left:"20%",
   ease:Power1,
   delay:.2,
   duration:3
   
},"a")
tl.to("#excelp",{
   width:"100%",
   ease:Expo.Inout,
   delay:.4,
   duration:3,
   
},"b")
tl.to("#eimg",{
   left:"0%",
    ease:Power1,
    duration:3,
    delay:.3
 },"b")
 tl.to("#limg",{
   left:"20%",
    ease:Power1,
    delay:.4,
    duration:3,
    
 },"b")
tl.to("#passionp",{
   width:"100%",
   ease:Expo.Inout,
   delay:.4,
   duration:4,
   
},"c")
tl.to("#pimg",{
   left:"0%",
    ease:Power1,
    duration:3,
    delay:.3
 },"c")
 tl.to("#eimg",{
   left:"20%",
    ease:Power1,
    delay:.4,
    duration:3,
    
 },"c")

tl.to(".key-section-middle-content",{
   top:"0%",
   ease:Power1,
   delay:.5
},"d")

// .lp-key-data-media.array.forEach(element => {
   
// });

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
tl.to("#key-point-nine",{
   opacity:0,
   duration:-.1,
   delay:.7
},"e")
tl.to("#key-point-eight",{
   opacity:1,
   duration:-.1,
   delay:.7
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
   duration:-.1,

})
tl.to("#l-width",{
   height:"0%",
   opacity:1,
   duration:-.1,
})

tl.to("#l-width",{
   height:"100%",
   ease:Power1,
   delay:.7
},"f")
tl.to("#key-video2",{
   top:"0%",
   ease:Power1,
   delay:.7
},"f")
tl.to("#key-point-eight",{
   opacity:0,
   duration:-.1,
   delay:1.2
},"f")
tl.to("#key-point-seven",{
   opacity:1,
   duration:-.1,
   delay:1.2
},"f")
tl.to(".key-data-content2",{
   y:-280,
   ease:Power0,
   delay:.7
},"f")
tl.to(".key-data-content3",{
   y:-135,
   ease:Power0,
   delay:.7
},"f")
tl.to("#l-width",{
   opacity:0,
   ease:Power1,
   duration:-.1,

})
tl.to("#l-width",{
   height:"0%",
   opacity:1,
   duration:-.1,
})

tl.to("#l-width",{
   height:"100%",
   ease:Power1,
    delay:.7,
},"g")
tl.to("#key-video3",{
   top:"0%",
   ease:Power1,
    delay:.7,
},"g")
tl.to("#key-point-seven",{
   opacity:0,
   duration:-.1,
   delay:1.2
},"g")
tl.to("#key-point-six",{
   opacity:1,
   duration:-.1,
   delay:1.2
},"g")
tl.to(".key-data-content3",{
   y:-280,
   ease:Power0,
    delay:.7,
},"g")
tl.to(".key-data-content4",{
   y:-135,
   ease:Power0,
    delay:.7,
},"g")
tl.to("#l-width",{
   opacity:0,
   ease:Power1,
   duration:-.1,

})
tl.to("#l-width",{
   height:"0%",
   opacity:1,
   duration:-.1,
})

tl.to("#l-width",{
   height:"100%",
    delay:.7,
   ease:Power1,
},"h")
tl.to("#key-img",{
   top:"0%",
   ease:Power1,
    delay:.7,
},"h")
tl.to("#key-point-six",{
   opacity:0,
   duration:-.1,
   delay:1.2
},"h")
tl.to("#key-point-five",{
   opacity:1,
   duration:-.1,
   delay:1.2
},"h")
tl.to(".key-data-content4",{
   y:-270,
    delay:.7,
   ease:Power0,
},"h")
tl.to(".key-data-content5",{
   y:-135,
   ease:Power0,
    delay:.7,
},"h")

const tlt= gsap.timeline({
   scrollTrigger:{
      trigger:".view-id-news",
      start:"top top",
   pin:true,
   scrub:true,
   stagger:1,
   end: "+=" + (window.innerHeight * 5)
},
})

tlt.to(".coh-row-inner",{
   top:"0%",
   scale:.9,
   ease:Power0,
   duration:4
},"z")
tlt.to(".filter",{
   filter:"blur(5px)",
   opacity:0,
   ease:Power1,
   delay:.6
},"z")
tlt.to(".coh-row-inner",{
   top:"-100%",
   ease:Power0,
   // scale:.8,

   delay:.5,
   duration:4
},"o")
tlt.to(".lp-teaser-filter-see-more-container-button",{
   top:"25%",
   ease:Power0,
   duration:4,
   delay:.4
},"o")
// tlt.to(".lp-teaser-filter-see-more-container-button",{
//    top:"10%",
//    ease:Power0,
//    duration:4,
//    delay:1
// },"o")
// tlt.to(".lp-teaser-filter-see-more-container-button",{
//    top:"95%",
//    ease:Power0,
//    duration:7,
//    // delay:10
// })
// tlt.to(".lp-teaser-filter-see-more-container-button",{
//    top:"85%",
//    ease:Power0,
//    delay:4
// })
// tlt.to(".coh-row-inner",{
//    top:"-100%",
//    ease:Power0,
//    scale:.9,

//    delay:.1,
//    duration:4
// },"y")
// tlt.to(".lp-teaser-filter-see-more-container-button",{
//    top:"0%",
//    ease:Power0,
//    delay:.1
// },"y")























// var tm=gsap.timeline({
//    scrollTrigger:{
//       scroll:body,
//       trigger:"body",
//       start:"top top",
//       pinSpacing:"false",
//        pin:true,
  
//        scrub:true,
      //   stagger:1,
   // end: "+=" + (window.innerHeight * 20)
// }
// });
// tm.to(".filter",{
//    top:"50%",
   // filter:"blur(5px)",
   // opacity:1,
   // ease:Power1
// })
// tl2.from(".view-id-news",{
//    // top:"0%",
//    yparent:-100,
//    ease:Power1,
//    delay:8
// },"k")
// tl2.to(".coh-accordion-tabs",{
// y:-700,
// duration:3,
// ease:Power1,
// delay:-.5
// },"i")
// tl.to(".coh-accordion-tabs",{
// y:-600,
// duration:3,
// ease:Power1,
// delay:-.5
// },"i")
// tl2.to(".filter",{
//    top:"50%",
//    ease:Power1,
   // opacity:1,
   // delay:2,
// })
// gsap.to(".filter",{
//    scrollTrigger:{
//       scroll:body,
// trigger:".filter",
// start:"top 80%",
// markers:true,
// // stagger:1,
// scrub:true,
// // pin:true
//    },
//    top:"50%",
//    ease:Power1,
//    opacity:1,
//    // duration:6
// })

// tl2.to(".coh-row-inner",{
//    // top:"30%",
//    ease:Power1,
//    y:-1200,
//    // duration:8,
// delay:8,
// scale:1
// },)
// tl.to(".filter",{
// filter:"blur(5px)",
//    ease:Power1,
//    delay:5
// })