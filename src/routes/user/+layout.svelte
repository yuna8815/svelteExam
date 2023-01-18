<script>
  /** @type {import('./$types').LayoutLoad} */
  export let data;
</script>

<h1 class="font-bold">== {data.section[data.route]} ==</h1>

<main>
  <slot></slot>
</main>