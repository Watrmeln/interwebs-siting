<script>
	let { children, data } = $props();
	import "../app.css";
	import favicon from "$lib/assets/iconbleton.ico";
	import { onMount } from "svelte";

	let jumbSrc = $state("/img/jumbcube.gif");

	let year = $state(0);

	const sillyQuotes = [
		"ask questions!! dont be self conscious",
		"the fitnessgram pacer te",
		"but i stay silly",
		"ned lamont",
		"BAD DEALS! CARS THAT BREAK DOWN!",
		"did you remember to thaw the chicken?",
		"First impressions are everything, so i've probably already messed up.",
		"BACCCCKKKKKKK DOOOOORRRR",
		"snyders sourdough hard pretzels......",
		"i.o.u. 1x flavor text",
		"rotate a cow in your mind. trust.",
		"you wouldn't put cocktail sausages in your smoke alarm...",
		"an absolute clownshow, admittedly",
		"i like food"
	];

	let quote = $state(0);

	onMount(() => {
		let dte = new Date();
		year = dte.getFullYear();
		const curMo = dte.getMonth();
		const curDay = dte.getDate();
		const isBday = (curMo === 9 && curDay === 27 && true) || false;
		jumbSrc = (isBday === true && "/img/partybleton.gif") || "/img/jumbcube.gif";
		const leng = sillyQuotes.length;
		quote = sillyQuotes[Math.floor(Math.random()*leng)];
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<meta content="watrmeln!!!" property="og:title" />
	<meta
		content="this is my website i think its pretty cool"
		property="og:description"
	/>
	<meta content="https://watrmeln.dev/" property="og:url" />
	<meta content={jumbSrc} property="og:image" />
	<meta content="#4FBF00" data-react-helmet="true" name="theme-color" />
</svelte:head>

<div
	class="bg-accent border-b-20 border-asurface text-primary rounded-b-[30%] min-h-[30vh] max-h-[50vh] md:rounded-b-[50%] md:min-h-[35vh] flex items-center justify-center py-[6vh] md:py-[10vh]"
>
	<div class="flex flex-col gap-3 items-center justify-center">
		<div class="flex flex-col md:flex-row items-center">
			<a href="/">
				<img
					id="spinJumb"
					class="h-40 pr-5 hover:scale-150 transition-transform duration-1000 ease-in-out"
					src={jumbSrc}
					alt="i be spinnin weeeeeeee"
				/>
			</a>
			<div class="text-center pr-5">
				<h1 class="text-5xl md:text-7xl leading-12">
					<span class="font-extrabold">Watrmeln</span>'s
				</h1>
				<h3 class="text-sm md:text-xl tracking-tight">
					wonderful website on the world wide web
				</h3>
			</div>
		</div>
		<div
			class="flex flex-row gap-3 md:gap-10 items-center justify-center pt-5 md:pt-0"
		>
			<a
				href="/"
				class="bg-primary flex items-center justify-center rounded-3xl md:rounded-xl p-2 md:py-2 md:px-16 hover:bg-psurface hover:scale-110 transition-all duration-300 ease-in-out"
			>
				<img class="h-9" src="/img/abt.svg" alt="About Me" />
			</a>
			<a
				href="/socials"
				class="bg-primary flex items-center justify-center rounded-3xl md:rounded-xl p-2 md:py-2 md:px-16 hover:bg-psurface hover:scale-110 transition-all duration-300 ease-in-out"
			>
				<img class="h-9" src="/img/social.svg" alt="Social Links" />
			</a>
			<a
				href="/portfolio"
				class="bg-primary flex items-center justify-center rounded-3xl md:rounded-xl p-2 md:py-2 md:px-16 hover:bg-psurface hover:scale-110 transition-all duration-300 ease-in-out"
			>
				<img class="h-9" src="/img/portfolio.svg" alt="Portfolio" />
			</a>
			<a
				href="/triplogs"
				class="bg-primary flex items-center justify-center rounded-3xl md:rounded-xl p-2 md:py-2 md:px-16 hover:bg-psurface hover:scale-110 transition-all duration-300 ease-in-out"
			>
				<img class="h-9" src="/img/trips.svg" alt="Trip Logs" />
			</a>
		</div>
	</div>
</div>

{@render children?.()}

<footer
	class="sticky -bottom-25 bg-accent min-h-16 border-t-5 border-asurface mt-20 py-4 flex flex-col items-center justify-center text-pretty"
>
	<span class="text-primary text-xl"
		>&copy;{year} Watrmeln/Justin S, site version
		<a class="underline" href="/changelog">1.3</a></span
	>
	<span class="text-primary text-sm">thanks for stopping in ;)</span>
	<span class="text-primary text-lg opacity-70"><i><b>
	<span class = "fancy lowercase">"{quote}"</span>
	</b></i></span>
</footer>
