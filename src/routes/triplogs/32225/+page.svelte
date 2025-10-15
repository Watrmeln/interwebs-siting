<script>
    import { slide } from "svelte/transition";
</script>

<svelte:head>
    <title>March 22, 2025</title>
</svelte:head>

<div
    in:slide={{ duration: 300, delay: 400 }}
    out:slide={{ duration: 300 }}
    class="border-accent border-7 rounded-[7vw] mt-10 mx-[15vw] w-[70vw] px-[3vw] py-[5vh]"
>
    <h1 class="text-center">
        <span class="serif font-extrabold text-5xl text-accent"
            >Trip Log: March 22, 2025</span
        >
    </h1>
    <br />
    <br />

    <div class="text-accent md:grid md:grid-cols-2 relative">
        <div class="md:col-start-2 justify-center items-center content-center">
            <enhanced:img
                alt="9th St. HBLR Station"
                src="/src/img_en/IMG_7856.jpeg"
                class="rounded-2xl md:rotate-30 w-[60%] md:w-[70%] md:pl-[7em] md:pt-10 mb-10 md:-mb-50"
            />
        </div>
        <div class="col-start-1">
            <span class="text-4xl font-bold mt-5">OBJECTIVES:</span>
            <ul class="list-disc ml-5 text-2xl font-medium indent-4">
                <li>Ride HBLR</li>
                <li>Get Paletas</li>
                <li>Bike around Inwood</li>
            </ul>
            <span class="text-4xl font-bold mt-5 text-wrapped"
                >KEY LOCATIONS:</span
            >
            <ul class="list-disc ml-5 text-2xl font-medium indent-4">
                <li>Paletas Morelia, Hoboken</li>
                <li>Inwood, Manhattan</li>
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
                    <td>M8 9513</td>
                    <td>Fairfield-Black Rock</td>
                    <td>Grand Central</td>
                </tr>
                <tr>
                    <td>PATH</td>
                    <td>🟦🟨</td>
                    <td>PA-5 5664</td>
                    <td>33rd St.</td>
                    <td>Newport</td>
                </tr>
                <tr>
                    <td>NJT Bus</td>
                    <td>126</td>
                    <td>XD60 20884</td>
                    <td>Hoboken</td>
                    <td>Washington/9th</td>
                </tr>
                <tr>
                    <td>HBLR</td>
                    <td>🟩</td>
                    <td>KSLRV 5006B</td>
                    <td>9th St.</td>
                    <td>Pavonia/Newport</td>
                </tr>
                <tr>
                    <td>HBLR</td>
                    <td>🟨</td>
                    <td>KSLRV 2033B</td>
                    <td>Pavonia/Newport</td>
                    <td>MLK Dr.</td>
                    <td><i>do NOT get off here</i></td>
                </tr>
                <tr>
                    <td>NJT Bus</td>
                    <td>119</td>
                    <td>XD60 20906</td>
                    <td>Jewett/JFK</td>
                    <td>PA Bus Term.</td>
                </tr>
                <tr>
                    <td>NYCTA</td>
                    <td>(A)</td>
                    <td>R211A 4400</td>
                    <td>42nd-PABT</td>
                    <td>Inwood-207th</td>
                </tr>
                <tr>
                    <td>NYCTA</td>
                    <td>(A)</td>
                    <td>R211A 4358</td>
                    <td>Dyckman St.</td>
                    <td>59th St.</td>
                </tr>
                <tr>
                    <td>NYCTA</td>
                    <td>(1)</td>
                    <td>R62A 2387</td>
                    <td>59th St.</td>
                    <td>28th St.</td>
                </tr>
                <tr>
                    <td>MNR</td>
                    <td>New Haven</td>
                    <td>M8 9300</td>
                    <td>Grand Central</td>
                    <td>Fairfield-Black Rock</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
