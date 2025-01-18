gsap.registerPlugin(ScrollTrigger);

const imageContainer = document.querySelector('.image-container');
const layers = document.querySelectorAll('.image > *');

gsap.set(layers, { opacity: 0 });
gsap.set('#midori', { opacity: 1 });  // midori is always visible

ScrollTrigger.create({
  trigger: imageContainer,
  start: 'top top',
  end: '+=2000',
  pin: true,
  scrub: true,
  // markers: true, 
  onUpdate: (self) => {
    if (self.progress < 0.25) {
      gsap.to('#papa1', { opacity: 1 });
      gsap.to('#ball1, #ball2, #ball3, #papa2, #!, #!!', { opacity: 0 });
    } else if (self.progress >= 0.25 && self.progress < 0.5) { 
      gsap.to('#papa1, #ball1', { opacity: 1 }); 
      gsap.to('#ball2, #ball3, #papa2, #!, #!!', { opacity: 0 }); 
    } else if (self.progress >= 0.5 && self.progress < 0.75) {
      gsap.to('#papa1, #ball1, #ball2', { opacity: 1 }); 
      gsap.to('#ball3, #papa2, #!, #!!', { opacity: 0 }); 
    } else if (self.progress >= 0.75 && self.progress < 1) {
      gsap.to('#papa1, #ball1, #ball2, #ball3', { opacity: 1 });
      gsap.to('#papa2, #!, #!!', { opacity: 0 });
    } else {
      gsap.to('#papa1, #ball1, #ball2, #ball3, #papa2, #!, #!!', { opacity: 1 });
    }
  },
});