<script>
  import TextField from '../components/TextField.svelte'

  /**
	 * @type {any}
	 */
  let DOCTOR_ID = null;
  /**
	 * @type {any}
	 */
  let DOCTOR_PW = null;

  function doLogin() {
    if(!DOCTOR_ID) {
      alert("아이디를 입력해주세요")
      return
    }
    if(!DOCTOR_PW) {
      alert("비밀번호를 입력해주세요")
      return
    }
    location.href = "/user/list"
  }
</script>

<main>
  <h1 class="text-center">관리자로 로그인</h1>

  <form class="w-[640px] m-auto">
    <TextField label={'아이디'} bind:model={DOCTOR_ID} />
    <TextField label={'비밀번호'} bind:model={DOCTOR_PW} />

    <button on:click={doLogin} class="w-full h-[32px] mt-3 rounded-md bg-primary text-white">로그인</button>
  </form>
</main>

<style>
</style>
