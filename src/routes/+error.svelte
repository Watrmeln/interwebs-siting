<head>
    <title>watrmeln's error page</title>
</head>

<script>
	import { page } from '$app/state';
</script>

<div
    class="border-accent border-7 rounded-[7vw] mt-10 mx-[15vw] w-[70vw] px-[3vw] py-[5vh] inline-block text-center"
>
    <h1 class="">
        <span class="font-extrabold text-5xl text-accent">Woops!</span>
    </h1>

    <h2 class="my-10 text-accent text-2xl font-medium leading-[2rem]">
        {page.error.message}!!!
        <br />
        <br />
        you've stumbled across the page of nothingness
        <br />
        <a class="italic underline" href="/img/sandvich.mov">very nosy nosy</a>
    </h2>
</div>
