<svelte:head>
	<title>Регистрация пользователя</title>
</svelte:head>

<script>
	import { variables } from '$lib/variables';
	import RegisterForm from '$lib/Forms/RegisterForm.svelte';
	import { session } from '$app/stores';
	const url = `${variables.apiPath}/api/v1/user/register`;

	let user = undefined;
	let token = undefined;

	function successHandler(event) {
		const detail = event.detail;
		user = detail.user;
		token = detail.token;
		session.set({user, token});
	}
</script>

<section class="hero is-warning">
    <div class="hero-body">
      <p class="title">Добро пожаловать, {user ? user.login : "username"}</p>
      <p class="subtitle">{token ? "регистрация успешно завершена!" : "введите логин и пароль для регистрации"}</p>
    </div>
</section>

<br />

<div class="columns">
	<div class="column"></div>

	<div class="column">
		<RegisterForm url={url} on:success={successHandler}/>
	</div>
	
	<div class="column"></div>
</div>