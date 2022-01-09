<script lang="ts">
  import githubUrl from 'iconoir/icons/github-outline.svg';
  import linkedinUrl from 'iconoir/icons/linkedin.svg';
  import '../app.scss';
</script>

<main>
  <slot />
</main>

<footer>
  <p>
    <a href="https://linkedin.com/in/peterweichen" target="_blank"><img src={linkedinUrl} alt="GitHub" /></a>
    <a href="https://github.com/vcheeze" target="_blank"><img src={githubUrl} alt="LinkedIn" /></a>
		<span>or email me at <a href="mailto:peter.wei.chen212@gmail.com">peter.wei.chen212@gmail.com</a></span>
  </p>
</footer>

<style lang="scss">
	@import '../styles/theme.scss';
	
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		// padding: 1rem;
		width: 100%;
		// max-width: 1024px;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 40px;
		
		p {
			display: flex;

			a {
				margin-right: 0.5rem;
			}
		}
	}

	@media (min-width: 480px) {
		footer {
			padding: 40px 0;
		}
	}
</style>