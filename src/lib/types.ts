export type PR = {
	repo: string;
	title: string;
	url: string;
	created_at: string;
	state: 'merged' | 'open' | 'closed';
	number: number;
	author: {
		username: string;
		avatar: string;
	};
};

export type User = {
	username: string;
	name: string;
	avatar: string;
};

export type Contributions = {
	user: User;
	prs: PR[];
};
