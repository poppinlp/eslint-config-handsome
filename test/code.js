const
	foo = 1,
	bar = [1, 2, 3],
	obj = {
		text: 'blablabla',
		bool: true
	},
	{ text, bool } = obj,
	f1 = () => {},
	f2 = p => console.log(p),
	f3 = (p1, ...args) => {
		console.log(args);
	};
