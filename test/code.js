const
	foo = 1,
	bar = [1, 2, 3],
	obj = {
		text: 'blablabla',
		bool: true
	},
	{ text, bool } = obj,
	f1 = () => {
		console.log(1);
	},
	f2 = p => console.log(p),
	f3 = (p1, ...args) => {
		console.log(args);
	};

if (foo) {
	f1();
}

if (bar) f1();

console.log(foo, bar, obj, text, bool, f1, f2, f3);

export default async () => {
	const api = () => new Promise(resolve => resolve());
	const res = await api();

	return res;
};
