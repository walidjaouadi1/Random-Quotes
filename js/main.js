Vue.createApp({
	el: "#app",
	data() {
		return {
			name: "walid",
			quotes,
			qt: quotes[0].quote,
		};
	},
	methods: {
		newQuote: function () {
			const num = Math.floor(Math.random() * quotes.length);
			console.log(quotes[0].par);
			this.qt = quotes[num].quote;
		},
	},
}).mount("#app");
