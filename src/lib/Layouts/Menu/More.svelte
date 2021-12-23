<script>
    export let title = 'Ещё';
    export let items = [];
</script>

<div class="navbar-item has-dropdown is-hoverable">
    <!-- svelte-ignore a11y-missing-attribute -->
    <a class="navbar-link">{title}</a>
    <div class="navbar-dropdown">
        {#each items as {href, title}}
            <a class="navbar-item" href="{href}">{title}</a>
        {/each}
    </div>
</div>