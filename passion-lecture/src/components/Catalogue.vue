<template>
  <div class="container">
    <h1>Bonjour</h1>
  </div>
</template>

<style scoped>
.container {
  display: flex;

  /* flex-start est le bon terme, pas "left" */

  justify-content: flex-start;

  align-items: flex-start;

  /* On s'assure que la div prend toute la largeur */

  width: 100%;

  /* Optionnel : si un parent force le text-align: center */

  text-align: left;

  margin: 0;

  padding: 20px; /* Un peu de padding pour pas que ça colle au bord */
}
</style>
