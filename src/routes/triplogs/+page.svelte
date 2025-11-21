<script>
    import { slide } from "svelte/transition";
</script>

<svelte:head>
    <title>watrmeln's excursions</title>
</svelte:head>

<div
    in:slide={{ duration: 300, delay: 400 }}
    out:slide={{ duration: 300 }}
    class="border-accent border-7 rounded-[7vw] mt-10 mx-[15vw] w-[70vw] px-[3vw] py-[5vh] text-center"
>
    <h1>
        <span class="font-extrabold text-5xl text-accent">Trip Logs</span>
    </h1>

    <br />

    <div class="grid grid-col gap-y-[2vh] justify-items-center items-center">
        <div>
            <span class="font-semibold text-4xl text-accent"
                ><i>what's <b>this?</b></i></span
            >
        </div>
        <div class="mx-2 md:mx-15">
            <span class="text-2xl text-accent font-medium">
                Sometimes I go places, and I log the different vehicles I ride.
                This page is a list of where I went, when, and how I got there.
            </span>
            <br />
            <br />
            <span class="font-extrabold text-2xl text-red-500">
                This page is <u>still under construction!</u> I am adding trips oldest
                to newest.
            </span>
        </div>
        <br />
        <a
            href="/triplogs/31624"
            class="w-[40vw] p-3 bg-accent rounded-full enter text-primary font-bold text-2xl items-center hover:bg-asurface hover:scale-110 transition-all duration-300 ease-out"
        >
            <span>March 16, 2024</span>
        </a>
        <a
            href="/triplogs/101224"
            class="w-[40vw] p-3 bg-accent rounded-full enter text-primary font-bold text-2xl items-center hover:bg-asurface hover:scale-110 transition-all duration-300 ease-out"
        >
            <span>October 12, 2024</span>
        </a>
        <a
            href="/triplogs/102624"
            class="w-[40vw] p-3 bg-accent rounded-full enter text-primary font-bold text-2xl items-center hover:bg-asurface hover:scale-110 transition-all duration-300 ease-out"
        >
            <span>October 26, 2024</span>
        </a>
        <a
            href="/triplogs/112324"
            class="w-[40vw] p-3 bg-accent rounded-full enter text-primary font-bold text-2xl items-center hover:bg-asurface hover:scale-110 transition-all duration-300 ease-out"
        >
            <span>November 23, 2024</span>
        </a>
        <a
            href="/triplogs/3925"
            class="w-[40vw] p-3 bg-accent rounded-full enter text-primary font-bold text-2xl items-center hover:bg-asurface hover:scale-110 transition-all duration-300 ease-out"
        >
            <span>March 9, 2025</span>
        </a>
        <a
            href="/triplogs/32225"
            class="w-[40vw] p-3 bg-accent rounded-full enter text-primary font-bold text-2xl items-center hover:bg-asurface hover:scale-110 transition-all duration-300 ease-out"
        >
            <span>March 22, 2025</span>
        </a>
        <a
            href="/triplogs/32229"
            class="w-[40vw] p-3 bg-accent rounded-full enter text-primary font-bold text-2xl items-center hover:bg-asurface hover:scale-110 transition-all duration-300 ease-out"
        >
            <span>March 29, 2025</span>
        </a>
        <a
            href="/triplogs/dc"
            class="w-[40vw] p-3 bg-accent rounded-full enter text-primary font-bold text-2xl items-center hover:bg-asurface hover:scale-110 transition-all duration-300 ease-out"
        >
            <span>my entire washington dc trip</span>
        </a>
    </div>
</div>
