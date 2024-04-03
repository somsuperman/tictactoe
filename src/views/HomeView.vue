<template>
  <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
    <router-link to="/about" class="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700" role="alert">
      <span class="text-xs bg-amber-400 rounded-full text-black px-4 py-1.5 mr-3 font-bold">Novinka</span>
      <span class="text-sm font-medium">teraz si zahráš aj on-line</span>
    </router-link>
    <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white tracking-wider">Piškôrky</h1>
    <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">zahrajte si túto známu hru on-line proti reálnym hráčom a prekonajte všetky rekordy</p>
    <div class="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-8">
      <a href="#" @click="openModal" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-600 hover:bg-blue-900  focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
        Registrovať sa
        <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
        </svg>
      </a>
      <a href="#" @click="openLoginModal" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 bg-green-700 rounded-lg  hover:bg-green-900focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:focus:ring-gray-800">
        Prihlásiť sa
      </a>
    </div>
    <div class="flex sm:mt-28 mx-10">
      <LogoCarousel />
    </div>
  </div>
  <RegistrationModal :isVisible="isModalVisible" @update:isVisible="isModalVisible = $event" />

  <LoginModal :isVisible="isLoginModalVisible" @update:isVisible="isLoginModalVisible = $event" @openRegister="openRegisterModal" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import RegistrationModal from '../components/RegistrationModal.vue';
import LoginModal from '../components/LoginModal.vue';
import LogoCarousel from '../components/LogoCarousel.vue';

export default defineComponent({
  components: {
    RegistrationModal,
    LoginModal,
    LogoCarousel
  },
  setup() {
    const isModalVisible = ref(false);
    const isLoginModalVisible = ref(false);

    function openModal() {
      isModalVisible.value = true;
    }

    function openLoginModal() {
      isLoginModalVisible.value = true;
    }

    function openRegisterModal() {
      console.log(99)
      isModalVisible.value = true;
      isLoginModalVisible.value = false;
    }

    return { isModalVisible, isLoginModalVisible, openModal, openLoginModal, openRegisterModal };
  },
});
</script>
