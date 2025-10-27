<script>
    import { slide } from "svelte/transition";
</script>

<svelte:head>
    <title>watrmeln's wonderful website on the world wide web</title>
</svelte:head>

<div
    in:slide={{ duration: 300, delay: 400 }}
    out:slide={{ duration: 300 }}
    class="border-accent border-7 rounded-[7vw] mt-10 mx-[15vw] w-[70vw] px-[3vw] py-[5vh] inline-block text-center"
>
    <h1 class="leading-[4rem]">
        <span class="font-semibold text-4xl text-accent">Hey! I'm </span>
        <i
            ><span class="font-black text-4xl text-accent tracking-wide"
                >Justin.</span
            ></i
        >
    </h1>
    <h2>
        <span class="font-medium text-xl text-accent tracking-tight">
            I’m a self-proclaimed “jack of at least 4 trades,” being <span
                class="font-semibold">Mass Transit, Urbanism, Music,</span
            >
            and <span class="font-semibold">Blåhajar</span>. I mostly go by
            <span class="font-semibold">Watrmeln</span>
            or <span class="font-semibold">Jumbleton</span>
            <span class="italic">(jumble for short)</span> across the web.
            <br /><br />
            I’m a bit of an overthinker, an amateur photographer, my camera roll is FLOODED with
            <span class="font-semibold">trains and buses</span>, and the
            occasional nature picture. I own 2 3D printers
            <i>(Ender 3 V2/Prusa MK4S)</i>, and also a tiny keyboard for
            experimenting with sounds. My blåhajar are named
            <span class="font-semibold">Finn and Tito.</span>
            I’ve also advocated for more
            <span class="font-semibold"
                >walkable spaces and bike infrastructure</span
            >
            within my community. My passion for urbanism has led me
            <span class="font-semibold">many places</span>, led me to make
            <span class="font-semibold">many things</span>, and led me to meet
            <span class="font-semibold">many people.</span>
        </span>
        <br /><br />
        <span class="text-accent text-2xl font-extrabold"> In Short, </span>
    </h2>
    <h1 class="serif font-bold text-4xl text-accent tracking-tight">
        16,
        <img
            class="h-13 inline"
            src="/img/autism moment.svg"
            alt="Austistic"
        /><img class="h-13 inline" src="/img/men.svg" alt="Male" /><span
            class="emoji">🚉📸🚲🖥🇺🇸</span
        >
    </h1>
</div>
