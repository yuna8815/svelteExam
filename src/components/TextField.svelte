<script>
   /**
	 * @type {string}
	 */
    export let label;
    /**
	 * @type {any}
	 */
    export let model;
</script>

<div class="my-2">
  <label class="block text-sm font-medium text-gray-700">{label}</label>
  <div class="relative mt-1 rounded-md shadow-sm">
    <input bind:value={model} class="block w-full h-[32px] rounded-md border border-gray-300 px-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
  </div>
</div>