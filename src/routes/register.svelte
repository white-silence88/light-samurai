<svelte:head>
	<title>Регистрация пользователя</title>
</svelte:head>

<script>
	import RegisterForm from '$lib/Forms/RegisterForm.svelte';
</script>

<section class="hero is-warning">
    <div class="hero-body">
      <p class="title">Добро пожаловать, username</p>
      <p class="subtitle">введите логин и пароль для регистрации</p>
    </div>
</section>

<br />

<div class="columns">
	<div class="column"></div>

	<div class="column">
		<RegisterForm />
	</div>
	
	<div class="column"></div>
</div>