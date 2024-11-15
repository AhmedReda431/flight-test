import AOS from "aos";
import "aos/dist/aos.css";


const globalAOS = AOS.init({
  // note: your options here
   startEvent: 'load'
})

// trigger when the Nuxt page is ready
window.onNuxtReady(() => {
   AOS.refresh()
})


export default ({ app }) => {
  app.AOS = new AOS.init({ 
    disable: window.innerWidth < 640,
    // offset: 200,
    offset: 200,
    duration: 600,
    easing: 'ease-in-out-cubic',
    once: false,
  }); // or any other options you need


};