<template>
  <div class="container mx-auto p-4 text-white max-w-2xl mb-6 lg:mb-8 md:text-lg lg:text-xl py-10">
    <p>
      Piškvorky sú obľúbená a klasická hra pre dvoch hráčov, ktorá testuje logické myslenie a strategické plánovanie. Hrá sa na štvorcovom poli, kde hráči striedavo umiestňujú svoje symboly, obvykle krížiky a kolieska, s cieľom vytvoriť nepretržitú radu piatich svojich symbolov vertikálne, horizontálne alebo diagonálne.
    </p>
    <p class="mt-6">
      Hra začína, keď prvý hráč umiestni svoj symbol na ľubovoľné voľné miesto na hracej ploche. Dôležitou súčasťou hry je predvídanie ťahov súpera a blokovanie jeho pokusov o vytvorenie nepretržitej rady symbolov. Piškvorky sú vynikajúcou hrou na rozvoj strategického myslenia u hráčov všetkých vekových kategórií. Hra môže skončiť víťazstvom jedného z hráčov alebo remízou, ak sa zaplní celé hracie pole bez vytvorenia súvislej rady piatich symbolov.
    </p>
    <p class="mt-6">
      Vďaka svojej jednoduchosti a rýchlemu priebehu sú piškvorky obľúbenou voľbou pre krátke prestávky alebo ako zábava medzi priateľmi. Existujú rôzne verzie hry, líšiace sa veľkosťou hracieho poľa, čo umožňuje rýchlejšie hry alebo dlhšie a komplexnejšie partie. Piškvorky sú prístupné hráčom všetkých vekových skupín, čo ich robí ideálnou rodinnou hrou. V súčasnosti sú k dispozícii digitálne verzie piškvoriek, ktoré umožňujú hrať proti počítaču alebo online proti hráčom z celého sveta. Hra má svoje korene v antických civilizáciách, kde boli nájdené dôkazy o podobných hrách vyryté do skaly.
    </p>
    <p class="mt-6">
      Okrem zábavy slúžia piškvorky aj ako vzdelávací nástroj v matematike a informatike na výučbu algoritmov a umelú inteligenciu. Napriek svojej zdanlivej jednoduchosti, piškvorky ponúkajú hlboké strategické možnosti a sú príkladom toho, ako základné pravidlá môžu viesť k nekonečnému počtu herných situácií.
    </p>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";
import RegistrationModal from "../components/RegistrationModal.vue";

export default defineComponent({
  name: "App",
  components: {
    RegistrationModal,
  },
  data() {
    return {
      showModal: false,
    };
  },
});
</script>
