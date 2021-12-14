<svelte:head>
	<title>Регистрация пользователя</title>
</svelte:head>

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
		<div class="card">
			<div class="card-image">
			  <figure class="image is-4by3">
				<img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
			  </figure>
			</div>
			<div class="card-content">		  
			  <div class="content">
				<!-- field for login-->
				<div class="field">
					<div class="control">
						<label for="login-field" class="label">Имя пользователя</label>
						<input id="loging-field" class="input" type="text" placeholder="Введите имя пользователя">
                        <p class="help">Имя пользователя должно быть не меньше 4 символов</p>
                    </div>
				</div>
				<!-- field for password -->
				<div class="field">
					<div class="control">
						<label for="password-field" class="label">Пароль</label>
						<input id="password-field" class="input" type="password" placeholder="Введите пароль">
                        <p class="help">Пароль пользователя должен быть не меньше 6 символов</p>
					</div>
				</div>
                <!-- Repeat password field-->
                <div class="field">
					<div class="control">
						<input id="password-repeat-field" class="input" type="password" placeholder="Введите пароль">
                        <p class="help">Повторите введённый пароль пользователя</p>
					</div>
				</div>
				
				<div class="field">
					<p class="control">
					  <button class="button is-success">Регистрация</button>
					</p>
				</div>
			  </div>
			</div>
		</div>
	</div>
	
	<div class="column"></div>
</div>