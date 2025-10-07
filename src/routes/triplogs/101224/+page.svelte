<script>
    import { slide } from "svelte/transition";
</script>

<svelte:head>
    <title>October 12, 2024</title>
</svelte:head>

<div
    in:slide={{ duration: 300, delay: 400 }}
    out:slide={{ duration: 300 }}
    class="border-accent border-7 rounded-[7vw] mt-10 mx-[15vw] w-[70vw] px-[3vw] py-[5vh]"
>
    <h1 class="text-center">
        <span class="serif font-extrabold text-5xl text-accent"
            >Trip Log: October 12, 2024</span
        >
    </h1>
    <br />
    <br />

    <div class="text-accent md:grid md:grid-cols-2 relative">
        <div class="md:col-start-2 justify-center items-center content-center">
            <enhanced:img
                alt="Track 15 at GCT"
                src="/src/img_en/IMG_5928.jpeg"
                class="rounded-2xl md:rotate-30 w-[60%] md:w-[70%] md:pl-[7em] md:pt-10 mb-10 md:-mb-50"
            />
        </div>
        <div class="col-start-1">
            <span class="text-4xl font-bold mt-5">OBJECTIVES:</span>
            <ul class="list-disc ml-5 text-2xl font-medium indent-4">
                <li>Work towards 100%ing the subway</li>
            </ul>
            <span class="text-4xl font-bold mt-5 text-wrapped"
                >KEY LOCATIONS:</span
            >
            <ul class="list-disc ml-5 text-2xl font-medium indent-4">
                <li>Coney Island</li>
                <li>Jamaica, Queens</li>
                <li>Blue Ribbon Fried Chicken</li>
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
                    <td>M8 9421</td>
                    <td>Fairfield-Black Rock</td>
                    <td>Grand Central</td>
                </tr>
                <tr>
                    <td>NYCTA</td>
                    <td>(S)42</td>
                    <td>R62A 1941</td>
                    <td>Grand Central</td>
                    <td>Times Square</td>
                </tr>
                <tr>
                    <td>NYCTA</td>
                    <td>(Q)</td>
                    <td>R46 6178</td>
                    <td>Times Square</td>
                    <td>Herald Square</td>
                </tr>
                <tr>
                    <td>NYCTA</td>
                    <td>(N)</td>
                    <td>R46 5737</td>
                    <td>Herald Square</td>
                    <td>Coney Island</td>
                    <td><i>ngl i have no idea what i did here</i></td>
                </tr>
                <tr>
                    <td>NYCTA</td>
                    <td>(D)</td>
                    <td>R68 2706</td>
                    <td>Coney Island</td>
                    <td>36th St.</td>
                </tr>
                <tr>
                    <td>NYCTA</td>
                    <td>(R)</td>
                    <td>R160A 9315</td>
                    <td>36th St.</td>
                    <td>4th/9th.</td>
                </tr>
                <tr>
                    <td>NYCTA</td>
                    <td>(F)</td>
                    <td>R160A 9332</td>
                    <td>4th/9th.</td>
                    <td>Jay St/MetroTech</td>
                </tr>
                <tr>
                    <td>NYCTA</td>
                    <td>(F)</td>
                    <td>R160A 9401</td>
                    <td>Jay St/MetroTech</td>
                    <td>West 8th St.</td>
                </tr>
                <tr>
                    <td>NYCTA</td>
                    <td>(F)</td>
                    <td>R160A 9782</td>
                    <td>West 8th St.</td>
                    <td>Jay St/MetroTech</td>
                    <td><i>i think i was looking for an R211</i></td>
                </tr>
                <tr>
                    <td>NYCTA</td>
                    <td>(C)</td>
                    <td>R179 3147</td>
                    <td>Jay St/MetroTech</td>
                    <td>Hoyt/Schermerhorn</td>
                </tr>
                <tr>
                    <td>NYCTA</td>
                    <td>(G)s</td>
                    <td>R160A 8682</td>
                    <td>Hoyt/Schermerhorn</td>
                    <td>Bedford/Nostrand</td>
                </tr>
                <tr>
                    <td>NYCTA</td>
                    <td>(G)</td>
                    <td>R160A 8916</td>
                    <td>Bedford/Nostrand</td>
                    <td>Broadway</td>
                </tr>
                <tr>
                    <td>NYCTA</td>
                    <td>(M)</td>
                    <td>R160A 9963</td>
                    <td>Met/Lorimer</td>
                    <td>Metropolitan Ave.</td>
                </tr>
                <tr>
                    <td>NYCTA</td>
                    <td>(M)</td>
                    <td>R160A 9963</td>
                    <td>Metropolitan Ave.</td>
                    <td>Myrtle/Broadway</td>
                </tr>
                <tr>
                    <td>NYCTA</td>
                    <td>(L)</td>
                    <td>R143 8299</td>
                    <td>Myrtle/Wyckoff</td>
                    <td>Broadway Junction</td>
                </tr>
                <tr>
                    <td>NYCTA</td>
                    <td>(J)</td>
                    <td>R160A 8570</td>
                    <td>Broadway Junction</td>
                    <td>Crescent St.</td>
                </tr>
                <tr>
                    <td>NYCTA</td>
                    <td>J90</td>
                    <td>LFSD 4G 8970</td>
                    <td>Crescent St.</td>
                    <td>Jamaica/Van Wyck</td>
                </tr>
                <tr>
                    <td>NYCTA</td>
                    <td>(E)</td>
                    <td>R160B (Alstom) 9207</td>
                    <td>Jamaica/Van Wyck</td>
                    <td>Jamaica Center</td>
                </tr>
                <tr>
                    <td>NYCTA</td>
                    <td>(E)</td>
                    <td>R160A 9662</td>
                    <td>Jamaica Center</td>
                    <td>Briarwood</td>
                </tr>
                <tr>
                    <td>NYCTA</td>
                    <td>(F)</td>
                    <td>R160B (Alstom) 9813</td>
                    <td>Briarwood</td>
                    <td>Jamaica/179th</td>
                </tr>
                <tr>
                    <td>NYCTA</td>
                    <td>(F)</td>
                    <td>R160A 9587</td>
                    <td>Jamaica/179th</td>
                    <td>2nd Ave.</td>
                </tr>
                <tr>
                    <td>NYCTA</td>
                    <td>(F)</td>
                    <td>R160B 8969</td>
                    <td>Delancey/Essex</td>
                    <td>47-50th Sts.</td>
                    <td>the operator overshot 42nd and bypassed</td>
                </tr>
                <tr>
                    <td>NYCTA</td>
                    <td>(D)</td>
                    <td>R68 2762</td>
                    <td>47-50th Sts.</td>
                    <td>42nd St.</td>
                </tr>
                <tr>
                    <td>MNR</td>
                    <td>New Haven</td>
                    <td>M8 9192</td>
                    <td>Grand Central</td>
                    <td>Fairfield-Black Rock</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
