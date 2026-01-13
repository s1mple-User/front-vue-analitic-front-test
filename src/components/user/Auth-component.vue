<script setup lang="ts">
import { ref } from 'vue';
import { Icon } from '@iconify/vue';
import ArchLogo from '../icons/ArchLogo.vue';


const mode = ref<'login' | 'register'>('login');
</script>

<template>
  <div class="min-h-screen w-full flex items-center justify-center p-4 overflow-hidden">
    <div 
      class="relative w-full max-w-[950px] min-h-[580px] flex rounded-[40px] border-2 border-gray-600 bg-gray-900 shadow-2xl overflow-hidden"
    >
        
      <div 
        :class="mode === 'login' ? 'translate-x-0' : 'translate-x-full'" 
        class="w-1/2 flex flex-col items-center gap-9 justify-center p-12 text-white z-20 transition-all duration-700 ease-in-out"
      >
      <router-link to="/">
        <div :class="mode === 'login' ? 'start-1' : 'end-1'"  class="flex items-center absolute top-1/12 "> <ArchLogo/></div>
        </router-link>
        <h2 class="text-4xl font-bold mb-2 tracking-widest uppercase">
          {{ mode === 'login' ? 'Sign' : 'Join' }} <span class="text-[#03e9f4]">{{ mode === 'login' ? 'In' : 'Us' }}</span>
        </h2>
        
        <div class="w-full max-w-[320px] flex flex-col gap-5">
          <input type="text" placeholder="Name" class="custom-input" />
          <input type="password" placeholder="Password" class="custom-input" />
          <input v-if="mode === 'register'" type="email" placeholder="Email" class="custom-input" />
        </div>

        <button class="neon-button-small mt-4">
          <span></span><span></span><span></span><span></span>
          {{ mode === 'login' ? 'LOGIN' : 'REGISTER' }}
        </button>
      </div>

      <div 
        :class="mode === 'login' ? 'translate-x-0' : '-translate-x-full border-r border-l-0'" 
        class="w-1/2 flex flex-col items-center gap-8 justify-center p-12 text-center text-white z-30
               bg-gradient-to-br from-gray-800 to-transparent border-l border-gray-700 transition-all duration-700 ease-in-out"
      >
        <Icon icon="lucide:dollar-sign" class="neon-smooth-bg absolute -right-10 -bottom-10 opacity-20 transition-transform duration-1000" 
              :class="mode === 'register' ? '-translate-x-[400px] rotate-12' : ''" />

        <h2 class="text-4xl font-bold font-serif text-amber-300">
          {{ mode === 'login' ? 'Hello, Friend' : 'Welcome Back!' }}
        </h2>
        <p class="text-gray-400 font-bold font-serif text-lg leading-relaxed">
          {{ mode === 'login' ? 'Enter your personal details and start journey with us' : 'To keep connected with us please login with your personal info' }}
        </p>    

        <button @click="mode = (mode === 'login' ? 'register' : 'login')" class="neon-effect mt-8">
          <span></span><span></span><span></span><span></span>
          {{ mode === 'login' ? 'SIGN UP' : 'SIGN IN' }}
        </button>
      </div>

    </div>
  </div>
</template>

<style scoped>
.neon-effect {   position: relative;
  display: inline-block;
  padding: 15px 40px;
  background: #03e9f4;
  font-size: 18px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden; 
  border-radius: 15px;
  transition: 0.5s;
  letter-spacing: 2px;
  font-weight: bold;
    box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4;
            }

.neon-effect:hover {   position: relative;
  display: inline-block;
  padding: 15px 40px;
  background: none;
  font-size: 18px;
  text-decoration: none;
    color: #03e9f4;
  border-radius: 15px;
  transition: 0.5s;
  letter-spacing: 2px;
  font-weight: bold;
    box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4;
            }

.neon-smooth-bg {
  color: #facc15; 
  font-size: 300px;
  filter: drop-shadow(0 0 20px rgba(250, 204, 21, 0.4));
}

.custom-input {
  width: 100%;

  border: 1px solid rgba(156, 163, 175, 0.3); /* gray-600 soft */
  border-radius: 15px;
  padding: 12px 20px;
  color: white;
  outline: none;
  transition: all 0.3s ease;
}

.custom-input:focus {
  border-color: #03e9f4;
  background: rgba(3, 233, 244, 0.05);
  box-shadow: 0 0 15px rgba(3, 233, 244, 0.2);
}

.social-btn {
  padding: 10px;

  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: white;
  font-size: 1.2rem;
  transition: 0.3s;
}

.social-btn:hover {
  border-color: #03e9f4;
  color: #03e9f4;
  box-shadow: 0 0 10px #03e9f4;
}

.neon-button, .neon-button-small {
  position: relative;
  display: inline-block;
  padding: 15px 40px;
  color: #03e9f4;
  font-size: 18px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden; 
  border-radius: 15px;
  transition: 0.5s;
  letter-spacing: 2px;
  background: transparent;
  font-weight: bold;
}

.neon-button-small:hover {
  background: #03e9f4;
  color: #050801;
  box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4;
}

/* Анимации линий из твоего кода */
.neon-button span, .neon-button-small span {
  position: absolute;
  display: block;
}

.neon-button span:nth-child(1), .neon-button-small span:nth-child(1) {
  top: 0; left: -100%; width: 100%; height: 2px;
  background: linear-gradient(90deg, transparent, #03e9f4);
  animation: btn-anim1 1s linear infinite;
}

@keyframes btn-anim1 { 0% { left: -100%; } 50%, 100% { left: 100%; } }

.neon-button span:nth-child(2), .neon-button-small span:nth-child(2) {
  top: -100%; right: 0; width: 2px; height: 100%;
  background: linear-gradient(180deg, transparent, #03e9f4);
  animation: btn-anim2 1s linear infinite;
  animation-delay: 0.25s; 
}

@keyframes btn-anim2 { 0% { top: -100%; } 50%, 100% { top: 100%; } }

/* Добавь остальные анимации btn-anim3 и btn-anim4 из своего кода сюда */
</style>