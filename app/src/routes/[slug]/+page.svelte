

<script lang="ts">
    export let data;
</script>

<div class="content">
    <svelte:component this={data.content} />
</div>
<style>
    ul {list-style-type: none; }
  </style>
  