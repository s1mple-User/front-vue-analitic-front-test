<script setup lang="ts">
import { Icon } from '@iconify/vue';
import ArchLogo from '../icons/ArchLogo.vue';

</script>

<template>
  <div data-aos="fade-up" class=" rounded-[40px] border-gray-600  flex items-center justify-center border-2 h-[600px] bg-gray-900 opacity-95  px-25">
    <div class="absolute top-1/12 start-1 left-10 flex items-center gap-2">
      <ArchLogo/>
    </div>
    <div class="flex items-center">
    <div class="flex flex-col gap-7 ">
      <div class="pb-4">
      <h1 class="text-white text-5xl  font-bold w-[700px] font-serif">UNLOCK BUSINESS INTELLIGENCE</h1>
      <p class="text-gray-400 font-bold font-serif text-xl">Transform raw data into actionable insights with Ai-powered analytics</p>
      </div>
       <div class="flex items-center gap-4">
         <router-link to="/auth">
     <a href="#" class="neon-effect bg-[#03e9f4] text-black">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    START FREE 
      </a>
</router-link>

  <router-link to="/dashbord">
     <a href="#" class="neon-effect bg-[#03e9f4] text-black">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    DASHBORD 
      </a>
</router-link>

 <router-link to="/demo">
        <a href="#" class="neon-button">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    VIEW DEMO
      </a>
      </router-link>
       </div>

       <div class="flex items-center gap-5 text-gray-400 font-bold font-serif mt-14">
        <div class="flex items-center gap-2">
          <Icon icon="lucide:trending-up" class="bi-icon text-xl" />
          <span>Imovate Corp</span>
        </div>

        <div class="flex items-center gap-2">
       <Icon icon="lucide:network" class="bi-icon text-xl" />
      <span>Glctal Data Solutions</span>
        </div>

        <div class="flex items-center gap-2 ">
          <Icon icon="lucide:bar-chart-3" class="bi-icon text-xl" />
          <span>Fubre Insights</span>
        </div>
       </div>
    </div>
    <div >
      <Icon icon="lucide:dollar-sign" 
      class="neon-smooth" />
    </div>
    </div>
  </div>
</template>



<style scoped>

.neon-smooth {
  color: #facc15; 
  font-size: 350px;
  animation: smooth-neon-flicker 4s ease-in-out infinite;
  transition: color 0.3s ease;
  will-change: filter, opacity, transform; 
}

@keyframes smooth-neon-flicker {
  0%, 100% {
    opacity: 1;
    color: #facc15;
    transform: scale(1);
    filter: drop-shadow(0 0 25px rgba(250, 204, 21, 0.9)) 
            drop-shadow(0 0 60px rgba(250, 204, 21, 0.4));
  }
  30% {
    opacity: 0.9;
    color: #eab308; 
    transform: scale(0.99);
    filter: drop-shadow(0 0 15px rgba(234, 179, 8, 0.6)) 
            drop-shadow(0 0 35px rgba(234, 179, 8, 0.2));
  }
  35% {
    opacity: 0.98;
    color: #facc15;
    transform: scale(1);
    filter: drop-shadow(0 0 22px rgba(250, 204, 21, 0.85)) 
            drop-shadow(0 0 50px rgba(250, 204, 21, 0.35));
  }
  70% {
    opacity: 0.85;
    color: #ca8a04; 
    transform: scale(0.98);
    filter: drop-shadow(0 0 10px rgba(202, 138, 4, 0.5)) 
            drop-shadow(0 0 25px rgba(202, 138, 4, 0.15));
  }
  75% {
    opacity: 1;
    color: #facc15;
    transform: scale(1.01); 
    filter: drop-shadow(0 0 30px rgba(250, 204, 21, 1)) 
            drop-shadow(0 0 70px rgba(250, 204, 21, 0.5));
  }
}

.neon-effect {  box-shadow: 0 0 5px #03e9f4,
              0 0 25px #03e9f4,
              0 0 50px #03e9f4,
              0 0 200px #03e9f4;
   position: relative;
   
  display: inline-block;
  padding: 25px 30px;
  color: #050801;
  font-size: 24px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden; 
  border-radius: 30px;
  transition: 0.5s;
  letter-spacing: 4px;
            }

.neon-effect:hover {
  background: none;
  color: #03e9f4;
}

.neon-button {
  position: relative;
  display: inline-block;
  padding: 25px 30px;
  color: #03e9f4;
  font-size: 24px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden; 
  border-radius: 30px;
  transition: 0.5s;
  letter-spacing: 4px;
}

.neon-button:hover {
  background: #03e9f4;
  color: #050801;
  box-shadow: 0 0 5px #03e9f4,
              0 0 25px #03e9f4,
              0 0 50px #03e9f4,
              0 0 200px #03e9f4;
}

.neon-button span {
  position: absolute;
  display: block;
}

.neon-button span:nth-child(1) {
  top: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #03e9f4);
  animation: btn-anim1 1s linear infinite;
}

@keyframes btn-anim1 {
  0% { left: -100%; }
  50%, 100% { left: 100%; }
}

.neon-button span:nth-child(2) {
  top: -100%;
  right: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(180deg, transparent, #03e9f4);
  animation: btn-anim2 1s linear infinite;
  animation-delay: 0.25s; 
}

@keyframes btn-anim2 {
  0% { top: -100%; }
  50%, 100% { top: 100%; }
}

.neon-button span:nth-child(3) {
  bottom: 0;
  right: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(270deg, transparent, #03e9f4);
  animation: btn-anim3 1s linear infinite;
  animation-delay: 0.5s;
}

@keyframes btn-anim3 {
  0% { right: -100%; }
  50%, 100% { right: 100%; }
}

.neon-button span:nth-child(4) {
  bottom: -100%;
  left: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(360deg, transparent, #03e9f4);
  animation: btn-anim4 1s linear infinite;
  animation-delay: 0.75s;
}

@keyframes btn-anim4 {
  0% { bottom: -100%; }
  50%, 100% { bottom: 100%; }
}
</style>