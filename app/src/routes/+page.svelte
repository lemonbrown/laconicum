<script lang="ts">
    export let data;
</script>

<section>
	<!-- <ul class="posts">
		{#each data.posts as post}
			<li class="post">
				<a href="/{post.slug}" class="title">{post.title}</a>
				<p class="date has-text-grey">{new Date(post.date).toDateString()}</p>
			</li>
		{/each}
	</ul> -->

	{#each data.posts as post}
		<div class="block">
			<a href="/{post.slug}" class="title">{post.title}</a>

			<p class="date has-text-grey">{new Date(post.date).toDateString()}</p>

		</div>
	{/each}
</section>