<script>
    import { slide } from "svelte/transition";
</script>

<svelte:head>
    <title>March 9, 2025</title>
</svelte:head>

<div
    in:slide={{ duration: 300, delay: 400 }}
    out:slide={{ duration: 300 }}
    class="border-accent border-7 rounded-[7vw] mt-10 mx-[15vw] w-[70vw] px-[3vw] py-[5vh]"
>
    <h1 class="text-center">
        <span class="serif font-extrabold text-5xl text-accent"
            >Trip Log: March 9, 2025</span
        >
    </h1>
    <br />
    <br />

    <div class="text-accent md:grid md:grid-cols-2 relative">
        <div class="md:col-start-2 justify-center items-center content-center">
            <enhanced:img
                alt="a (Q) train at Coney Island"
                src="/src/img_en/IMG_7672.jpeg"
                class="rounded-2xl md:rotate-30 w-[60%] md:w-[70%] md:pl-[7em] md:pt-10 mb-10 md:-mb-50"
            />
        </div>
        <div class="col-start-1">
            <span class="text-4xl font-bold mt-5">OBJECTIVES:</span>
            <ul class="list-disc ml-5 text-2xl font-medium indent-4">
                <li>Meet a couple friends</li>
                <li>See the R110B at NYTM</li>
            </ul>
            <span class="text-4xl font-bold mt-5 text-wrapped"
                >KEY LOCATIONS:</span
            >
            <ul class="list-disc ml-5 text-2xl font-medium indent-4">
                <li>NYC Transit Museum</li>
                <li>Raising Canes, Downtown Brooklyn</li>
                <li>Coney Island Station</li>
                <li>Newkirk Av. (shenanigans)</li>
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
                    <td>M8 9129</td>
                    <td>Fairfield-Black Rock</td>
                    <td>Grand Central</td>
                </tr>
                <tr>
                    <td>NYCTA</td>
                    <td>(4)</td>
                    <td>R142 1186</td>
                    <td>Grand Central</td>
                    <td>14th St.</td>
                </tr>
                <tr>
                    <td>NYCTA</td>
                    <td>(4)</td>
                    <td>R142 1136</td>
                    <td>14th St.</td>
                    <td>Borough Hall</td>
                </tr>
                <tr>
                    <td>NYCTA</td>
                    <td>(C)</td>
                    <td>R211A 4251</td>
                    <td>Jay St.</td>
                    <td>Hoyt-Schermerhorn</td>
                </tr>
                <tr>
                    <td>NYCTA</td>
                    <td>(G)</td>
                    <td>R211T 4053</td>
                    <td>Hoyt-Schermerhorn</td>
                    <td>7th Ave.</td>
                    <td><i>fuck you myles</i></td>
                </tr>
                <tr>
                    <td>NYCTA</td>
                    <td>(G)</td>
                    <td>R46 5722</td>
                    <td>7th Ave.</td>
                    <td>Church Ave.</td>
                </tr>
                <tr>
                    <td>NYCTA</td>
                    <td>(F)</td>
                    <td>R160A 9243</td>
                    <td>Church Ave.</td>
                    <td>Avenue J</td>
                </tr>
                <tr>
                    <td>NYCTA</td>
                    <td>(F)</td>
                    <td>R179 3292</td>
                    <td>Avnue J</td>
                    <td>Avenue X</td>
                </tr>
                <tr>
                    <td>NYCTA</td>
                    <td>(Q)</td>
                    <td>R46 5602</td>
                    <td>Avenue X</td>
                    <td>Coney Island</td>
                </tr>
                <tr>
                    <td>NYCTA</td>
                    <td>(Q)</td>
                    <td>R68A 5602</td>
                    <td>Coney Island</td>
                    <td>Sheepshead Bay</td>
                </tr>
                <tr>
                    <td>NYCTA</td>
                    <td>(Q)</td>
                    <td>R68A 5039</td>
                    <td>Sheepshead Bay</td>
                    <td>Newkirk Ave.</td>
                    <td><i>MUSTAAAAAAAAARD</i></td>
                </tr>
                <tr>
                    <td>NYCTA</td>
                    <td>(Q)</td>
                    <td>R68 2866</td>
                    <td>Newkirk Ave.</td>
                    <td>14th St.</td>
                </tr>
                <tr>
                    <td>NYCTA</td>
                    <td>(R)</td>
                    <td>R160A 8702</td>
                    <td>14th St.</td>
                    <td>Canal St.</td>
                </tr>
                <tr>
                    <td>NYCTA</td>
                    <td>(6)</td>
                    <td>R62A 2138</td>
                    <td>Canal St.</td>
                    <td>Grand Central</td>
                </tr>
                <tr>
                    <td>MNR</td>
                    <td>New Haven</td>
                    <td>M8 9377</td>
                    <td>Grand Central</td>
                    <td>Fairfield-Black Rock</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
