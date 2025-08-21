<script lang='ts'>
	import type { PR } from '$lib/types.js';
	import { formatTimeAgo } from '@vueuse/core';

	import PullRequestIcon from '~icons/ph/git-pull-request-duotone';

	const { pr, count }: { pr: PR; count: number } = $props();

	const prURL = new URL(pr.repo, 'https://github.com/').toString();
	const prUserName = pr.repo.split('/').at(0) ?? '';
	const prRepoName = pr.repo.split('/').at(1) ?? '';
</script>

<div
	style:--stagger={count}
	flex='~ items-center gap-4'
	sliding-animation='~ delay-base'
>
	<div
		relative
		shrink-0
		size-12
	>
		<a
			aria-label="{prUserName}'s profile"
			block
			border='~ gray-200 dark:gray-800'
			href={prURL}
			overflow-hidden
			relative
			rounded-md
			shadow-sm
			size-full
			target='_blank'
		>
			<img
				alt={pr.repo}
				loading='lazy'
				size-full
				src='https://github.com/{prUserName}.png'
			/>
		</a>
		{#if pr.author?.username && pr.author.username !== prUserName}
			<a
				absolute
				aria-label="{pr.author.username}'s profile"
				bg='white dark:gray-900'
				border='2 white dark:gray-900'
				bottom--1
				href='https://github.com/{pr.author.username}'
				overflow-hidden
				right--1
				rounded-full
				shadow-sm
				size-6
				target='_blank'
			>
				<img
					alt={pr.author.username}
					loading='lazy'
					rounded-full
					size-full
					src={pr.author.avatar}
				/>
			</a>
		{/if}
	</div>

	<div
		flex='~ 1 justify-between'
		gap='2 lg:4'
		min-w-0
	>
		<div
			flex='~ col'
			gap-1
			min-w-0
		>
			<a
				flex='~ items-center gap-1'
				href={pr.url}
				target='_blank'
				text='gray-900 dark:white'
			>
				<span
					class={{
						mergedPR: pr.state === 'merged',
						openPR: pr.state === 'open',
					}}
					shrink-0
					size-5
				>
					<PullRequestIcon />
				</span>

				<span truncate>{pr.title}</span>

			</a>

			<a
				flex='~ gap-1'
				href={prURL}
				target='_blank'
			>
				<span op75>{prUserName}</span>
				<span op50>/</span>
				<span truncate>{prRepoName}</span>
			</a>
		</div>

		<div
			flex='~ col justify-between shrink-0'
			text-right
		>
			<a
				href={pr.url}
				target='_blank'
			>
				#{pr.number}
			</a>

			<time
				datatime={pr.created_at}
				text='sm gray-500 dark:gray-400'
			>
				{formatTimeAgo(new Date(pr.created_at))}
			</time>
		</div>
	</div>
</div>

<style>
a {
	--at-apply: hover:underline;
}
</style>
