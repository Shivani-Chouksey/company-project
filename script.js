var tl=gsap.timeline({
   scrollTrigger:{
      trigger:" #first",
      start:"top top",
   pin:true,
   scrub:true
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
