<script lang="ts">
    export let data;
</script>

<section>

	{#each data.posts as post}
		<div class="block">
			<a href="/{post.slug}" class="title">{post.title}</a>

			<p class="date has-text-grey">{new Date(post.date).toDateString()}</p>

		</div>
	{/each}
</section>