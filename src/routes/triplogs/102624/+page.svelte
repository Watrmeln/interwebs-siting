<script>
    import { slide } from "svelte/transition";
</script>

<svelte:head>
    <title>October 26, 2024</title>
</svelte:head>

<div
    in:slide={{ duration: 300, delay: 400 }}
    out:slide={{ duration: 300 }}
    class="border-accent border-7 rounded-[7vw] mt-10 mx-[15vw] w-[70vw] px-[3vw] py-[5vh]"
>
    <h1 class="text-center">
        <span class="serif font-extrabold text-5xl text-accent"
            >Trip Log: October 26, 2024</span
        >
    </h1>
    <br />
    <br />

    <div class="text-accent md:grid md:grid-cols-2 relative">
        <div class="md:col-start-2 justify-center items-center content-center">
            <enhanced:img
                alt="Track 15 at GCT"
                src="/src/img_en/IMG_6186.jpeg"
                class="rounded-2xl md:rotate-30 w-[60%] md:w-[70%] md:pl-[7em] md:pt-10 mb-10 md:-mb-50"
            />
        </div>
        <div class="col-start-1">
            <span class="text-4xl font-bold mt-5">OBJECTIVES:</span>
            <ul class="list-disc ml-5 text-2xl font-medium indent-4">
                <li>Work towards 100%ing the subway, <i>again.</i></li>
                <li>Consume good pizza</li>
            </ul>
            <span class="text-4xl font-bold mt-5 text-wrapped"
                >KEY LOCATIONS:</span
            >
            <ul class="list-disc ml-5 text-2xl font-medium indent-4">
                <li>Nick's Pizza, Gun Hill Rd, The Bronx</li>
                <li>Moshulu Parkway</li>
                <li>the World Trade Center</li>
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
                    <td>M8 9299</td>
                    <td>Fairfield-Black Rock</td>
                    <td>Harlem-125th St.</td>
                </tr>
                <tr>
                    <td>NYCTA</td>
                    <td>M60+</td>
                    <td>LFSA 4G 5401</td>
                    <td>125th/Lenox</td>
                    <td>125th/Lexington</td>
                </tr>
                <tr>
                    <td>NYCTA</td>
                    <td>(5)</td>
                    <td>R142 6901</td>
                    <td>125th St.</td>
                    <td>Dyre Ave.</td>
                </tr>
                <tr>
                    <td>NYCTA</td>
                    <td>(5)</td>
                    <td>R142 6903</td>
                    <td>Dyre Ave.</td>
                    <td>Gun Hill Rd.</td>
                </tr>
                <tr>
                    <td>NYCTA</td>
                    <td>(5)</td>
                    <td>R142 6719</td>
                    <td>Gun Hill Rd.</td>
                    <td>Pelham Pkwy.</td>
                </tr>
                <tr>
                    <td>NYCTA</td>
                    <td>Bx12+</td>
                    <td>LFSA 4G 5482</td>
                    <td>Pelham/Williamsbridge</td>
                    <td>Westchester/Bruckner</td>
                </tr>
                <tr>
                    <td>NYCTA</td>
                    <td>(6)</td>
                    <td>R62A 2065</td>
                    <td>Pelham Bay Pk.</td>
                    <td>125th St.</td>
                </tr>
                <tr>
                    <td>NYCTA</td>
                    <td>(4)</td>
                    <td>R142 7147</td>
                    <td>125th St.</td>
                    <td>Woodlawn</td>
                </tr>
                <tr>
                    <td>NYCTA</td>
                    <td>(4)</td>
                    <td>R142A 7733</td>
                    <td>Woodlawn</td>
                    <td>Moshulu Pkwy.</td>
                </tr>
                <tr>
                    <td>NYCTA</td>
                    <td>(D)</td>
                    <td>R68 2621</td>
                    <td>Inwood-205th</td>
                    <td>145th St.</td>
                </tr>
                <tr>
                    <td>NYCTA</td>
                    <td>(3)</td>
                    <td>R62 1317</td>
                    <td>Lenox-148th</td>
                    <td>New Lots Ave.</td>
                </tr>
                <tr>
                    <td>NYCTA</td>
                    <td>(3)</td>
                    <td>R62 1317</td>
                    <td>New Lots Ave.</td>
                    <td>Franklin Ave.</td>
                </tr>
                <tr>
                    <td>NYCTA</td>
                    <td>(2)</td>
                    <td>R142 6941</td>
                    <td>Franklin Ave.</td>
                    <td>Flatbush Ave.</td>
                </tr>
                <tr>
                    <td>NYCTA</td>
                    <td>(2)</td>
                    <td>R142 7050</td>
                    <td>Flatbush Ave.</td>
                    <td>Franklin Ave.</td>
                </tr>
                <tr>
                    <td>NYCTA</td>
                    <td>(S)f</td>
                    <td>R68 2924</td>
                    <td>Botanic Garden</td>
                    <td>Franklin Ave. (C)</td>
                </tr>
                <tr>
                    <td>NYCTA</td>
                    <td>(C)</td>
                    <td>R179 3182</td>
                    <td>Franklin Ave.</td>
                    <td>Fulton St.</td>
                    <td><i>wanted to catch an ozone pk train here</i></td>
                </tr>
                <tr>
                    <td>NYCTA</td>
                    <td>(5)</td>
                    <td>R142 6763</td>
                    <td>Fulton St.</td>
                    <td>14th-Union Sq.</td>
                </tr>
                <tr>
                    <td>NYCTA</td>
                    <td>(4)</td>
                    <td>R142 1229</td>
                    <td>14th-Union Sq.</td>
                    <td>Grand Central</td>
                </tr>
                <tr>
                    <td>MNR</td>
                    <td>New Haven</td>
                    <td>M8 9378</td>
                    <td>Grand Central</td>
                    <td>Fairfield-Black Rock</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
