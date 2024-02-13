<template>
  <transition name="modal">
    <div id="authentication-modal" class="overflow-x-hidden overflow-y-auto fixed h-modal sm:h-full top-4 left-0 right-0 md:inset-0 z-50 justify-center items-center flex" aria-modal="true" role="dialog" v-if="isVisible" @click="closeModal">
      <div class="absolute inset-0 bg-black bg-opacity-85"></div>

      <div class="relative w-full max-w-md px-4 h-full sm:h-auto" @click.stop>
        <!-- Modal content -->
        <div class="bg-white rounded-lg shadow relative dark:bg-blue-900">
          <div class="flex justify-end p-2">
            <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="authentication-modal" @click="closeModal">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>
          </div>
          <form class="space-y-6 px-6 lg:px-8 pb-4 sm:pb-6 xl:pb-8" action="#">
            <h3 class="text-xl font-medium text-gray-900 dark:text-white">Registrovať sa do hry</h3>
            <div>
              <label for="email" class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">E-mail</label>
              <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white bg-opacity-10 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="môj@email.com" required="">
            </div>
            <div>
              <label for="password" class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Heslo</label>
              <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required="">
            </div>
            <div>
              <label for="password-again" class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Heslo znova</label>
              <input type="password" name="password-again" id="password-again" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required="">
            </div>
            <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-bold rounded-lg text-base px-5 py-3.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Registrovať sa</button>
          </form>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import {defineComponent, ref, onMounted, onBeforeUnmount} from 'vue';

export default defineComponent({
  name: 'RegistrationModal',
  props: {
    isVisible: Boolean,
  },
  emits: ['update:isVisible'],
  setup(props, {emit}) {
    const username = ref('');
    const email = ref('');
    const password = ref('');

    function closeModal() {
      emit('update:isVisible', false);
    }

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        closeModal();
      }
    }

    onMounted(() => {
      window.addEventListener('keydown', handleKeyDown);
    });

    onBeforeUnmount(() => {
      window.removeEventListener('keydown', handleKeyDown);
    });

    function register() {
      // Implement registration logic here
      console.log("Registering:", username.value, email.value, password.value);
      closeModal();
    }

    return {username, email, password, closeModal, register};
  },
});
</script>
<style>
.modal-enter-active, .modal-leave-active {
  transition: opacity 0.5s ease;
}
.modal-enter-from, .modal-leave-to {
  opacity: 0;
}
</style>






