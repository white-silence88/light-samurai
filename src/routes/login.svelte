<svelte:head>
	<title>Авторизация</title>
</svelte:head>

<script>
	import { session } from '$app/stores';
	import LoginForm from '$lib/Forms/LoginForm.svelte';
	import { variables } from '$lib/variables';

	const url = `${variables.apiPath || 'http://localhost:8822'}/api/v1/user/login`;
	
	let user = undefined;
	let token = undefined;

	function successHandler(event) {
		const detail = event.detail;
		console.log(detail);
		user = detail.user;
		token = detail.token;
		session.set({ user, token });
	}
</script>

<section class="hero is-info bulma-block-mixin">
    <div class="hero-body">
      <p class="title">Добро пожаловать, {user ? user.login : "username"}</p>
      <p class="subtitle">{token ? "поздравляем! Вы успешно вошли": "введите логин и пароль, чтобы авторизироваться на ресурсе"}</p>
    </div>
</section>
<br />
<div class="columns">
	<div class="column"></div>

	<div class="column">
		<LoginForm on:success={successHandler} url={url}/>
	</div>
	
	<div class="column"></div>
</div>