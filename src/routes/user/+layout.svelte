<script>
  /** @type {import('./$types').LayoutLoad} */
  export let data;
</script>

<h1>Title</h1>
<p>{data.section[0].title}</p>

<main>
  <slot></slot>
</main>