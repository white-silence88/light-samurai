<svelte:head>
	<title>Каталог</title>
</svelte:head>

<script>
	import Pagination from '$lib/Components/Pagination.svelte';
  import Breadcrumbs from '$lib/Components/Breadcrumbs.svelte';
</script>

<section class="hero is-info">
    <div class="hero-body">
      <p class="title">Каталог игр</p>
      <p class="subtitle">на этой странице вы можете найти что-то для себя</p>
    </div>
</section>

<br />
<Breadcrumbs />
<br />
<Pagination />
<br />