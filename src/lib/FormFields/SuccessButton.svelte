<script>
    export let disabled = true;
    export let title = title;
    export let sender = 'unknown';

    import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	function saySuccess() {
		dispatch('success', { sender });
	}
</script>

<div class="field">
    <p class="control">
        <button
            on:click={saySuccess}
            class="button is-success" 
            disabled={disabled}>
            {title}
        </button>
    </p>
</div>