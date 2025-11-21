<script>
    import { slide } from "svelte/transition";
</script>

<svelte:head>
    <title>March 29, 2025</title>
</svelte:head>

<div
    in:slide={{ duration: 300, delay: 400 }}
    out:slide={{ duration: 300 }}
    class="border-accent border-7 rounded-[7vw] mt-10 mx-[15vw] w-[70vw] px-[3vw] py-[5vh]"
>
    <h1 class="text-center">
        <span class="serif font-extrabold text-5xl text-accent"
            >Trip Log: March 29, 2025</span
        >
    </h1>
    <br />
    <br />

    <div class="text-accent md:grid md:grid-cols-2 relative">
        <div class="md:col-start-2 justify-center items-center content-center">
            <enhanced:img
                alt="an M7a and Shoreliner at Ardsley-on-Hudson"
                src="/src/img_en/IMG_7984.jpg"
                class="rounded-2xl md:rotate-30 w-[60%] md:w-[70%] md:pl-[7em] md:pt-10 mb-10 md:-mb-50"
            />
        </div>
        <div class="col-start-1">
            <span class="text-4xl font-bold mt-5">OBJECTIVES:</span>
            <ul class="list-disc ml-5 text-2xl font-medium indent-4">
                <li>Visit a Family Friend</li>
                <li>Railfan at Ardsley</li>
            </ul>
            <span class="text-4xl font-bold mt-5 text-wrapped"
                >KEY LOCATIONS:</span
            >
            <ul class="list-disc ml-5 text-2xl font-medium indent-4">
                <li>Astoria, Queens</li>
                <li>Yonkers, NY</li>
                <li>Ardsley-on-Hudson Station</li>
            </ul>

            <span class="text-4xl font-bold mt-5 text-wrapped">VEHICLES</span>
        </div>
    </div>
    <div
        class="md:mt-30 max-w-[100%] text-accent tracking-tight font-medium text-left justify-center overflow-x-scroll md:overflow-x-clip"
    >
        <table
            class="border-spacing-1 table-auto border outline-3 border-solid border-accent border-separate"
        >
            <thead>
                <tr class="font-extrabold">
                    <th class="border border-accent rounded-md px-2">Company</th
                    >
                    <th class="border border-accent rounded-md px-2">Line</th>
                    <th class="border border-accent rounded-md px-2">Vehicle</th
                    >
                    <th class="border border-accent rounded-md px-2 pr-5"
                        >Start Point</th
                    >
                    <th class="border border-accent rounded-md px-2"
                        >End Point</th
                    >
                    <th class="border border-accent rounded-md px-2"
                        ><i>Remarks</i></th
                    >
                </tr>
            </thead>
            <tbody class="ml-2">
                <tr>
                    <td>NYCTA</td>
                    <td>(N)</td>
                    <td>R46 5853</td>
                    <td>Broadway</td>
                    <td>Queensboro Plz.</td>
                </tr>
                <tr>
                    <td>NYCTA</td>
                    <td>(7)</td>
                    <td>R188 7295</td>
                    <td>Queensboro Plz.</td>
                    <td>GCT</td>
                </tr>
                <tr>
                    <td>MNR</td>
                    <td>Hudson Line</td>
                    <td>SL4 6460</td>
                    <td>GCT</td>
                    <td>Yonkers</td>
                </tr>
                <tr>
                    <td>MNR</td>
                    <td>Hudson Line</td>
                    <td>M7A 4301</td>
                    <td>Yonkers</td>
                    <td>Ardsley-on-Hudson</td>
                </tr>
                <tr>
                    <td>MNR</td>
                    <td>Hudson Line</td>
                    <td>M7A 4042</td>
                    <td>Ardsley-on-Hudson</td>
                    <td>GCT</td>
                </tr>
                <tr>
                    <td>NYCTA</td>
                    <td>(7)</td>
                    <td>R188 7332</td>
                    <td>GCT</td>
                    <td>Queensboro Plz.</td>
                </tr>
                <tr>
                    <td>NYCTA</td>
                    <td>(N)</td>
                    <td>R46 5590</td>
                    <td>Queensboro Plz.</td>
                    <td>Broadway</td>
                </tr>
                <tr>
                    <td>NYCTA</td>
                    <td>Q104</td>
                    <td>LFSD 9235</td>
                    <td>Broadway/31</td>
                    <td>Broadway/37</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
