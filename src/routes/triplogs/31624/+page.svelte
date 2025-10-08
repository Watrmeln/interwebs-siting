<script>
    import { slide } from "svelte/transition";
</script>

<svelte:head>
    <title>March 16, 2024</title>
</svelte:head>

<div
    in:slide={{ duration: 300, delay: 400 }}
    out:slide={{ duration: 300 }}
    class="border-accent border-7 rounded-[7vw] mt-10 mx-[15vw] w-[70vw] px-[3vw] py-[5vh]"
>
    <h1 class="text-center">
        <span class="serif font-extrabold text-5xl text-accent"
            >Trip Log: March 16, 2024</span
        >
    </h1>
    <br />
    <br />

    <div class="text-accent md:grid md:grid-cols-2 relative">
        <div class="md:col-start-2 justify-center items-center content-center">
            <enhanced:img
                alt="NJT Arrow 3 1306"
                src="/src/img_en/IMG_4488.JPG"
                class="rounded-2xl md:rotate-30 w-[80%] md:w-[90%] md:pl-[5em] md:pt-10 mb-10 md:-mb-50"
            />
        </div>
        <div class="col-start-1">
            <span class="text-4xl font-bold mt-5">OBJECTIVES:</span>
            <ul class="list-disc ml-5 text-2xl font-medium indent-4">
                <li>Ride NJT's Dinky</li>
                <li>Consume <span class="serif">叉燒</span></li>
            </ul>
            <span class="text-4xl font-bold mt-5 text-wrapped"
                >KEY LOCATIONS:</span
            >
            <ul class="list-disc ml-5 text-2xl font-medium indent-4">
                <li>Princeton, NJ</li>
                <li>Ming Wong Restaurant, Chinatown, Manhattan</li>
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
                    <td>MNR</td>
                    <td>New Haven</td>
                    <td>M8 9240</td>
                    <td>Fairfield Metro</td>
                    <td>Grand Central</td>
                </tr>
                <tr>
                    <td>NJT</td>
                    <td>NEC</td>
                    <td>MLV 7504</td>
                    <td>Penn Station</td>
                    <td>Princeton Junction</td>
                </tr>
                <tr>
                    <td>NJT</td>
                    <td>Dinky</td>
                    <td>Arrow III 1306</td>
                    <td>Princeton Junction</td>
                    <td>Princeton</td>
                    <td><i>Round Trip</i></td>
                </tr>
                <tr>
                    <td>NJT</td>
                    <td>NEC</td>
                    <td>MLV 7056</td>
                    <td>Princeton Junction</td>
                    <td>Penn Station</td>
                </tr>
                <tr>
                    <td>NYCTA</td>
                    <td>(F)</td>
                    <td>R160B 9037</td>
                    <td>Herald Square</td>
                    <td>Bway/Lafayette</td>
                </tr>
                <tr>
                    <td>NYCTA</td>
                    <td>(4)</td>
                    <td>R142 7161</td>
                    <td>Brookyln Bridge/City Hall</td>
                    <td>Grand Central</td>
                    <td><i>Raced R62A signed as a (7).</i></td>
                </tr>
                <tr>
                    <td>MNR</td>
                    <td>New Haven</td>
                    <td>M8 9368</td>
                    <td>Grand Central</td>
                    <td>Fairfield Metro</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
