# pr.mfyuu.com

![Screenshot](https://storage.googleapis.com/zenn-user-upload/6f2e629aec87-20250815.png)

## Built with

- [Svelte 5](https://svelte.dev/)
- [SvelteKit](https://kit.svelte.dev/)
- [GitHub API](https://docs.github.com/en/rest)
- [Uno CSS](https://unocss.dev/)
- [unplugin-icons](https://github.com/unplugin/unplugin-icons)

## 🚀 Setup

```bash
# install dependencies
pnpm install
```

Then edit info in `vite.config.ts`.

```ts
const config = {
	// ...
	LINKS: {
		domain: `https://pr.mfyuu.com`, // The hostname of your site
		repo: 'https://github.com/mfyuu/pr.mfyuu.com', // GitHub repository name ( will be the link of octocat icon 🐱 )
		username: 'mfyuu', // GitHub username
		includeYourOwnPRs: 'true', // Include your own PRs 'true' or 'false'
	},
	// ...
};
export default config;
```

## 🔧 Development

```bash
pnpm dev
```

(Optional): To prevent rate limiting, you can pass your GitHub token as an environment variable:

```bash
GITHUB_TOKEN=(gh auth token) pnpm dev
```

## 📦 Build

```bash
# build for production
pnpm build
```

## ✨ Preview

```bash
pnpm preview
```

## 💻 Deploy

This repository supports deployment to Cloudflare Workers.

### Cloudflare Workers

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/mfyuu/pr.mfyuu.com)

Run the following command:

```bash
pnpm run deploy
```

## Inspired by

- [Anthony Fu](https://github.com/antfu)'s [releases.antfu.me](https://github.com/antfu/releases.antfu.me)
- [leonf-fong](https://github.com/leon-fong)'s [pr.leofong.me](https://github.com/leon-fong/prs)
- [atinux](https://github.com/atinux)'s [my-pull-requests](https://github.com/atinux/my-pull-requests)

## License

[MIT License](./LICENSE)
