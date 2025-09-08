<script>
    import { slide } from "svelte/transition";
</script>

<svelte:head>
    <title>watrmeln's site changelog</title>
</svelte:head>

<div
    in:slide={{ duration: 300, delay: 400 }}
    out:slide={{ duration: 300 }}
    class="border-accent border-7 rounded-[7vw] mt-10 mx-[15vw] w-[70vw] px-[3vw] py-[5vh] inline-block text-center"
>
    <h1 class="">
        <span class="font-extrabold text-5xl text-accent">Site changelog!</span>
    </h1>
    <h2 class="my-10 text-accent text-2xl font-medium leading-[2rem]">
        Sometimes I update the site! Here's a log of what I did in each
        (somewhat major) update.
    </h2>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">

        <div
            class="p-10 rounded-[2rem] text-left border-accent border-5 rounded-[5vw] text-accent"
        >
            <span class="italic font-extrabold text-4xl">1.1</span>

            <li class="ml-5 font-medium text-xl">
                Added changelog (this) page
            </li>
            <li class="ml-5 font-medium text-xl">
                Added page transitioning (slidy bits!)
            </li>
            <li class="ml-5 font-medium text-xl">
                made embed redirect to custom domain instead of cloudflare workers page
            </li>
        </div>

        <div
            class="p-10 rounded-[2rem] text-left border-accent border-5 rounded-[5vw] text-accent"
        >
            <span class="italic font-extrabold text-4xl">1.04</span>

            <li class="ml-5 font-medium text-xl">
                Added error (404, etc) page and <i>the sandwich video</i> to the
                files
            </li>
        </div>

        <div
            class="p-10 rounded-[2rem] text-left border-accent border-5 rounded-[5vw] text-accent"
        >
            <span class="italic font-extrabold text-4xl">1.03</span>

            <li class="ml-5 font-medium text-xl">
                made jumblecube open the homepage
            </li>
            <li class="ml-5 font-medium text-xl">
                turned social links page into grid (thanks sam)
            </li>
        </div>

        <div
            class="p-10 rounded-[2rem] text-left border-accent border-5 rounded-[5vw] text-accent"
        >
            <span class="italic font-extrabold text-4xl">1.02</span>

            <li class="ml-5 font-medium text-xl">
                enabled embedding on social sites
            </li>
            <li class="ml-5 font-medium text-xl">
                added tapp card to portfolio
            </li>
            <li class="ml-5 font-medium text-xl">
                attempted to fix wrapping on footer
            </li>
        </div>

        <div
            class="p-10 rounded-[2rem] text-left border-accent border-5 rounded-[5vw] text-accent"
        >
            <span class="italic font-extrabold text-4xl">1.01</span>

            <li class="ml-5 font-medium text-xl">
                added a small piece of text to the social links page
            </li>
        </div>

            <div
            class="p-10 rounded-[2rem] text-left border-accent border-5 rounded-[5vw] text-accent"
        >
            <span class="italic font-extrabold text-4xl">1.0</span>

            <li class="ml-5 font-medium text-xl">
                released website @ watrmeln.dev :D
            </li>
        </div>

    </div>
</div>
