<template>
  <transition name="modal">
    <div id="login-modal" class="overflow-x-hidden overflow-y-auto fixed h-modal sm:h-full top-4 left-0 right-0 md:inset-0 z-50 justify-center items-center flex" aria-modal="true" role="dialog" v-if="isVisible" @click="closeModal">
      <div class="overlay absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
      <div class="relative w-full max-w-md px-4 h-full sm:h-auto" @click.stop>
        <!-- Modal content -->
        <div class="bg-white rounded-lg shadow relative dark:bg-emerald-700">
          <div class="flex justify-end p-2">
            <button type="button" class="text-green-900 bg-transparent hover:bg-green-950 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-green-900 dark:hover:text-white" data-modal-toggle="authentication-modal" @click="closeModal">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>
          </div>
          <form class="space-y-6 px-6 lg:px-8 pb-4 sm:pb-6 xl:pb-8" action="#">
            <h3 class="text-xl font-medium text-gray-900 dark:text-white">Prihlásenie hráča</h3>
            <div>
              <label for="email" class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">E-mail</label>
              <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="môj@email.com" required="">
            </div>
            <div>
              <label for="password" class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Heslo</label>
              <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required="">
            </div>
            <div class="flex justify-between">
              <div class="flex items-start">
                <div class="flex items-center h-5">
                  <input id="remember" aria-describedby="remember" type="checkbox" class="bg-gray-50 border border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required="">
                </div>
                <div class="text-sm ml-3">
                  <label for="remember" class="font-medium text-gray-900 dark:text-gray-300">Zapamätať prihlásenie</label>
                </div>
              </div>
              <a href="#" class="text-sm text-emerald-950 hover:underline dark:text-emerald-950">zabudnuté heslo?</a>
            </div>
            <button type="submit" @click="login" class="w-full text-white bg-green-900 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-medium px-5 py-3.5 text-center dark:bg-green-900 dark:hover:bg-green-950 dark:focus:ring-blue-800">
              Začať hrať
            </button>
            <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
              Neregistrovaný? <a href="#" @click.prevent="openRegisterModal" class="text-blue-700 hover:underline dark:text-emerald-950" >Vytvoriť účet</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import {defineComponent, ref, onMounted, onBeforeUnmount} from 'vue';
import { useRouter } from 'vue-router'; // Import useRouter for programmatic navigation


export default defineComponent({
  name: 'LoginModal',
  props: {
    isVisible: Boolean,
  },
  emits: ['update:isVisible', 'openRegister'],
  methods: {
    openRegisterModal() {
      this.$emit('openRegister');
    }
  },
  setup(props, {emit}) {
    const username = ref('');
    const email = ref('');
    const password = ref('');
    const router = useRouter();


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

    function login() {
      router.push('/game');
    }

    return {username, email, password, closeModal, login};
  },
});
</script>
<style lang="scss">
.modal-enter-active, .modal-leave-active {
  transition: opacity 0.3s ease;
  .overlay {
    transition: opacity 0.4s ease;
  }
}
.modal-enter-from, .modal-leave-to {
  opacity: 0;
  .overlay {
    opacity: 0;
  }
}
</style>






