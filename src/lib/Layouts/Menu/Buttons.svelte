<script>
    export let items = [];
</script>

{#each items as {href, title}}
    <a class="navbar-item" href="{href}">{title}</a>
{/each}