<script>
    import { slide } from "svelte/transition";
</script>

<svelte:head>
    <title>November 23, 2024</title>
</svelte:head>

<div
    in:slide={{ duration: 300, delay: 400 }}
    out:slide={{ duration: 300 }}
    class="border-accent border-7 rounded-[7vw] mt-10 mx-[15vw] w-[70vw] px-[3vw] py-[5vh]"
>
    <h1 class="text-center">
        <span class="serif font-extrabold text-5xl text-accent"
            >Trip Log: November 23, 2024</span
        >
    </h1>
    <br />
    <br />

    <div class="text-accent md:grid md:grid-cols-2 relative">
        <div class="md:col-start-2 justify-center items-center content-center">
            <enhanced:img
                alt="Long Island City from the (N) el"
                src="/src/img_en/IMG_6509.jpeg"
                class="rounded-2xl md:rotate-30 w-[60%] md:w-[70%] md:pl-[7em] md:pt-10 mb-10 md:-mb-50"
            />
        </div>
        <div class="col-start-1">
            <span class="text-4xl font-bold mt-5">OBJECTIVES:</span>
            <ul class="list-disc ml-5 text-2xl font-medium indent-4">
                <li>Work towards 100%ing the subway, <i>again, <b>again.</b></i></li>
                <li>Visit a family friend</li>
                <li>Ride the LIRR</li>
            </ul>
            <span class="text-4xl font-bold mt-5 text-wrapped"
                >KEY LOCATIONS:</span
            >
            <ul class="list-disc ml-5 text-2xl font-medium indent-4">
                <li>Astoria, Queens</li>
                <li>Jamaica, Queens</li>
                <li>Broadway Junction</li>
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
                    <td>M8 9704</td>
                    <td>Fairfield-Black Rock</td>
                    <td>Grand Central</td>
                </tr>
                <tr>
                    <td>NYCTA</td>
                    <td>(6)</td>
                    <td>R62A 1703</td>
                    <td>Grand Central</td>
                    <td>59th/Lexington</td>
                </tr>
                <tr>
                    <td>NYCTA</td>
                    <td>(N)</td>
                    <td>R46 5797</td>
                    <td>59th/Lexington</td>
                    <td>Broadway</td>
                </tr>
                <tr>
                    <td>NYCTA</td>
                    <td>(R)</td>
                    <td>R160A 9524</td>
                    <td>Steinway St.</td>
                    <td>Jackson Hts.</td>
                </tr>
                <tr>
                    <td>NYCTA</td>
                    <td>(E)</td>
                    <td>R160B 9038</td>
                    <td>Jackson Hts.</td>
                    <td>Jamaica-Sutphin Blvd.</td>
                </tr>
                <tr>
                    <td>LIRR</td>
                    <td>ATL Shuttle</td>
                    <td>M9 9193</td>
                    <td>Jamaica</td>
                    <td>East New York</td>
                </tr>
                <tr>
                    <td>NYCTA</td>
                    <td>(A)</td>
                    <td>R46 6228</td>
                    <td>Broadway Jct.</td>
                    <td>Ozone Pk.</td>
                    <td><i>Round Trip, someone left a whole braid on this train.</i></td>
                </tr>
                <tr>
                    <td>NYCTA</td>
                    <td>(J)</td>
                    <td>R160A 8379</td>
                    <td>Broadway Jct.</td>
                    <td>Canal St.</td>
                </tr>
                <tr>
                    <td>NYCTA</td>
                    <td>(Q)</td>
                    <td>R46 5979</td>
                    <td>Canal St.</td>
                    <td>2nd/96th St.</td>
                    <td><i>as of this ride, i have completed the subway!</i></td>
                </tr>
                <tr>
                    <td>NYCTA</td>
                    <td>(Q)</td>
                    <td>R46 5979</td>
                    <td>2nd/96th St.</td>
                    <td>57th St.</td>
                </tr>
                <tr>
                    <td>NYCTA</td>
                    <td>(W)</td>
                    <td>R46 5810</td>
                    <td>57th St.</td>
                    <td>Broadway</td>
                </tr>
                <tr>
                    <td>NYCTA</td>
                    <td>(N)</td>
                    <td>R46 5610</td>
                    <td>Broadway</td>
                    <td>Times Square</td>
                </tr>
                <tr>
                    <td>NYCTA</td>
                    <td>(S)</td>
                    <td>R62A 1955</td>
                    <td>Times Square</td>
                    <td>Grand Central</td>
                </tr>
                <tr>
                    <td>MNR</td>
                    <td>New Haven</td>
                    <td>M8 9389</td>
                    <td>Grand Central</td>
                    <td>Fairfield-Black Rock</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
