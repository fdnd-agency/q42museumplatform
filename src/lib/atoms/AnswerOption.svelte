<script>
	let { name, key, answer } = $props()
</script>

<label>
	<input type="radio" {name} value={key} />
	<span>{key}</span>
	{answer}
</label>
