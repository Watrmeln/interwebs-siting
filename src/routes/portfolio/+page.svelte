<script>
    import { slide } from "svelte/transition";
</script>

<svelte:head>
    <title>watrmeln's portfolio</title>
</svelte:head>

<div
    in:slide={{ duration: 300, delay: 400 }}
    out:slide={{ duration: 300 }}
    class="border-accent border-7 rounded-[7vw] mt-10 mx-[15vw] w-[70vw] px-[3vw] py-[5vh] inline-block text-center"
>
    <h1 class="leading-[4rem]">
        <span class="font-extrabold text-5xl text-accent">My Portfolio</span>
    </h1>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div
            class="p-8 rounded-4xl text-left"
            style="color:#f2e4cb;background:url(/img/ccbg.png) no-repeat center center;background-size:cover"
        >
            <img
                src="/img/cmtd_cropped.png"
                alt="CenterConnect"
                class="h-[70px]"
            />
            <h2 class="text-2xl font-bold my-3">CenterConnect</h2>
            <p class="text-xl leading-none">
                A fictional train-simulator game on Roblox. Created, Owned,
                coded, and partially built by me from 2022 to now.
            </p>
            <a
                href="https://www.roblox.com/games/83828967898096/CenterConnect-Heavy-Metro-Line-1-Train-Simulator"
                class="mt-3 inline-block"
            >
                Play &rarr;
            </a>
        </div>
        <div
            class="p-8 rounded-4xl text-left"
            style="background:#060f02; color:#f2e4cb; no-repeat center center;background-size:cover"
        >
            <img src="/img/scmd.png" alt="S-CMD" class="h-[70px]" />
            <h2 class="text-2xl font-bold my-3">S-CMD</h2>
            <p class="text-xl leading-none">
                Don't like explorer? Start up with S-CMD and choose between
                Command Prompt or Explorer! Created by me and AzureMations for
                Windows in 2023.
            </p>
            <a href="https://scmd.carrd.co/" class="mt-3 inline-block">
                Download &rarr;
            </a>
        </div>
        <div
            class="p-8 rounded-4xl text-left"
            style="background:url(/img/avelia.jpg); color:#f2e4cb; no-repeat center center;background-size:cover"
        >
            <img
                src="/img/rnrnr.png"
                alt="railsandrailsandrails typemark"
                class="h-[70px]"
            />
            <h2 class="text:xl md:text-2xl font-bold my-3">
                railsandrailsandrails
            </h2>
            <p class="text-xl leading-none">
                My transit videography project. Snappy editing meets music meet
                a manner of trains and buses. Produced from 2023 onwards. One
                work on display at the National Capital Trolley Museum!
            </p>
            <a href="https://youtube.com/@railsand" class="mt-3 inline-block">
                Watch &rarr;
            </a>
        </div>
        <div
            class="p-8 rounded-4xl text-left"
            style="background:url(/img/placeholderimage.png); color:#f2e4cb; no-repeat center center;background-size:cover"
        >
            <img
                src="/img/pentool.svg"
                alt="fountain pen icon"
                class="h-[70px]"
            />
            <h2 class="text:xl md:text-2xl font-bold my-3">Graphic Design</h2>
            <p class="text-xl leading-none">
                I'm currently trying to self-teach myself graphic design in
                paint.net and Illustrator. Scroll down for some of my selected
                works!
            </p>
        </div>
    </div>

    <div
        class="mt-10 flex flex-col md:flex-row items-center gap-10 justify-center"
    >
        <img
            src="/img/gdsection/hmc_v3_logoonly.png"
            alt="HMC Logo"
            class="w-20"
        />
        <img
            src="/img/gdsection/cmtd_cropped.png"
            alt="Centria Mass Transit District Logo"
            class="w-15"
        />
        <img
            src="/img/gdsection/jaunt_logo.png"
            alt="Jaunt logo, a fictional airline"
            class="w-20"
        />
        <img
            src="/img/gdsection/transitliton.png"
            alt="TransitLiton logo"
            class="w-20"
        />
        <br />
    </div>
    <div
        class="mt-10 grid grid-cols-1 md:grid-cols-3 items-center gap-10 justify-center text-center"
    >
        <img
            src="/img/gdsection/cmtd_staffonly.png"
            alt="Staff only sticker"
            class="w-50"
        />
        <img
            src="/img/gdsection/ziptrip.png"
            alt="redesigned GBT ziptrip transfer"
            class="w-50"
        />
        <img
            src="/img/gdsection/iliketrains-watermark.png"
            alt="i like trains pin"
            class="w-50"
        />
        <img
            src="/img/gdsection/cttbusstop.png"
            alt="conceptual CTTransit bus stop sign"
            class="w-50"
        />
        <img
            src="/img/gdsection/emgs-panel.png"
            alt="CMTD emergency instruction sticker"
            class="w-70"
        />
        <img
            src="/img/gdsection/line1strip.png"
            alt="CMTD line 1 stripmap"
            class="w-80"
        />
        <img
            src="/img/gdsection/newjerseymoment.png"
            alt="njt destruction"
            class="w-50"
        />
        <img
            src="/img/gdsection/myl.png"
            alt="metropolitan-alton-transit yellow line stripmap"
            class="w-100"
        />
        <img
            src="/img/gdsection/tlmap-01.png"
            alt="transitliton network map"
            class="w-150"
        />
        <img
            src="/img/gdsection/vtranmap.png"
            alt="vtran (minecraft server) network map"
            class="w-150"
        />
        <img
            src="/img/gdsection/thumbnail4.png"
            alt="railsandrailsandrails video thumbnail"
            class="w-150"
        />
        <img
            src="/img/gdsection/tapp-front.png"
            alt="fictional tapp farecard (this was before path did it haha)"
            class="w-100"
        />
        <img
            src="/img/gdsection/clplate.png"
            alt="fictional license plate for the province of centell"
            class="w-100"
        />
        <img
            src="/img/gdsection/halsonmap-01.png"
            alt="map for the fictional country of Halson"
            class="w-250"
        />
        <img
            src="/img/gdsection/ccmap-01.png"
            alt="map for CenterConnect's future plans (fictional again)"
            class="w-100"
        />
        <img
            src="/img/gdsection/hmcmap.png"
            alt="map of the hmc centell region services"
            class="w-80"
        />
    </div>
</div>
