const foo = 1;
const bar = [1, 2, 3];
const obj = {
	text: 'blablabla',
	bool: true,
};
const obj2 = { foo, bar };
const { text, bool } = obj;
const f1 = () => {
	return 1 + 1;
};
const f2 = p => p;
const f3 = (p1, ...args) => {
	return [p1, args];
};

if (foo) {
	f1();
}

// just a lowercase comment
if (bar) f1();

[foo, bar, obj, obj2, text, bool, f1, f2, f3].concat();

export default async () => {
	const api = () => new Promise(resolve => resolve());
	const res = await api();

	return res;
};

if (foo && bar && obj) f1();

if (foo && bar && obj) f1();
