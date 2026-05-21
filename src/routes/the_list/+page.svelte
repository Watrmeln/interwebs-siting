<script>
    import { slide } from "svelte/transition";
</script>

<svelte:head>
    <title>the list</title>
</svelte:head>

<div
    in:slide={{ duration: 300, delay: 400 }}
    out:slide={{ duration: 300 }}
    class="border-accent border-7 rounded-[7vw] mt-10 mx-[15vw] w-[70vw] px-[3vw] py-[5vh] inline-block text-center"
>
    <h1 class="">
        <span class="font-extrabold text-5xl text-accent">The List</span>
    </h1>
    <h2 class="mt-10 text-accent text-2xl font-semibold leading-[2rem]">
        A non-exhaustive list of anything I find interesting, fascinating,
        and/or exciting.
    </h2>
    <h3 class="text-accent mb-7">
        Inspired by <a href="https://www.tema.ru/eng/hate/"
            ><u>Artemy Lebedev.</u></a
        >
    </h3>

    <ul
        class="flex flex-col justify-center text-accent text-center text-xl font-medium tracking-tight leading-wide list-disc list-inside"
    >
        <li>Public Transportation</li>
        <li>Electric Multiple Units</li>
        <li>Trains in general</li>
        <li>Pedestrianised Spaces</li>
        <li>3D Printing</li>
        <li>Computers</li>
        <li>Graphic Design</li>
        <li>3D Modeling</li>
        <li>Coding</li>
        <li>Warm Lights</li>
        <li>The European Union</li>
        <li>Photography (Film & Digital)</li>
        <li>BLÅHAJ</li>
        <li>Cooking/Baking</li>
        <li>Transit Farecards</li>
        <li>Game Development</li>
        <li>Signage</li>
        <li>My profound lack of a social life</li>
        <li>The friends I somehow do have</li>
        <li>Cool rocks</li>
        <li>Modern electronic music</li>
        <li>The concept of electricity</li>
        <li>Blankets</li>
        <li>Rap music</li>
        <li>Boba (30% sugar, always.)</li>
        <li>Cherries</li>
        <li>Unsweetened iced tea</li>
        <li>Mint ice cream</li>
        <li>Helping people with things</li>
        <li>California</li>
        <li>New York City (my happy place)</li>
        <li>Fried Chicken (Hot & Normal)</li>
        <li>Goth Culture</li>
        <li>My family, for the most part</li>
        <li>VVVF Inverters & Motors</li>
        <li>New Haven</li>
        <li>Plants (greenery in general)</li>
        <li>The pins on my hat</li>
        <li>Vinyls</li>
        <li>Hands-on activities</li>
        <li>When you step outside and the temperature is the same as inside.</li>
        <li>Seeing things I normally couldn't</li>
        <li>Video Editing</li>
        <li>Motion Graphics (how do they do it?)</li>
        <li>Internet Rabbitholes</li>
        <li>Fixing things</li>
        <li>Beaches, in moderation</li>
        <li>Airplanes</li>
        <li>Long flights or train rides where I can listen to music</li>
        <li>Bose QuietComfort 35 II</li>
        <li>Brownies (the pastry, i should clarify)</li>
        <li>Fruity drinks</li>
        <li>Pink/Yellow sunsets</li>
        <li>Burgers</li>
        <li>Going new places</li>
        <li>Making pilgrimages to internet places</li>
        <li>Existentialism</li>
        And most importantly,
        <li class="font-bold">All that I cannot have.</li>
    </ul>
</div>
