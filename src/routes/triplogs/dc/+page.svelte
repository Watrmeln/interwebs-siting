<script>
    import { slide } from "svelte/transition";
</script>

<svelte:head>
    <title>Washingtonnnnnnn</title>
</svelte:head>

<div
    in:slide={{ duration: 300, delay: 400 }}
    out:slide={{ duration: 300 }}
    class="border-accent border-7 rounded-[7vw] mt-10 mx-[15vw] w-[70vw] px-[3vw] py-[5vh]"
>
    <h1 class="text-center">
        <span class="serif font-extrabold text-5xl text-accent"
            >Trip Log: Washington DC</span
        >
    </h1>
    <br />
    <br />

    <div class="text-accent md:grid md:grid-cols-2 relative">
        <div class="md:col-start-2 justify-center items-center content-center">
            <enhanced:img
                alt="The US Capitol with flowers in the foreground"
                src="/src/img_en/IMG_8223.jpeg"
                class="rounded-2xl md:rotate-30 w-[60%] md:w-[70%] md:pl-[7em] md:pt-10 mb-10 md:-mb-50"
            />
        </div>
        <div class="col-start-1">
            <span class="text-4xl font-bold mt-5">OBJECTIVES:</span>
            <ul class="list-disc ml-5 text-2xl font-medium indent-4">
                <li>
                    This is an entire vaction's worth of logs. Nothing is off
                    the table.
                </li>
            </ul>
            <span class="text-4xl font-bold mt-5 text-wrapped"
                >KEY LOCATIONS:</span
            >
            <ul class="list-disc ml-5 text-2xl font-medium indent-4">
                <li>see above</li>
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
                    <td>M8 9163</td>
                    <td>Fairfield-Black Rock</td>
                    <td>GCT</td>
                </tr>
                <tr>
                    <td>Amtrak</td>
                    <td>NER</td>
                    <td>Amfleet I 82715</td>
                    <td>Penn Station</td>
                    <td>D.C. Union</td>
                </tr>
                <tr>
                    <td>WMATA</td>
                    <td>🔴</td>
                    <td>7K 7065</td>
                    <td>Union Station</td>
                    <td>DuPont Circle</td>
                </tr>
                <tr>
                    <td>WMATA</td>
                    <td>D6</td>
                    <td>XDE40 7162</td>
                    <td>21st/M St.</td>
                    <td>Columbus/Delaware</td>
                </tr>
                <tr>
                    <td>WMATA</td>
                    <td>42</td>
                    <td>DE35LFA 3754</td>
                    <td>Virginia/19th</td>
                    <td>Connecicut/L St.</td>
                </tr>
                <tr>
                    <td>WMATA</td>
                    <td>D6</td>
                    <td>NABI 42-BRT 8096</td>
                    <td>I/17th St.</td>
                    <td>Sibley Hospital</td>
                </tr>
                <tr>
                    <td>RideOn</td>
                    <td>23</td>
                    <td>Gillig LF 13-5045</td>
                    <td>Sibley Hospital</td>
                    <td>Friendship Hts.</td>
                </tr>
                <tr>
                    <td>WMATA</td>
                    <td>🔴</td>
                    <td>3K 3237</td>
                    <td>Takoma</td>
                    <td>Wheaton</td>
                    <td><i>like heights? come here!</i></td>
                </tr>
                <tr>
                    <td>WMATA</td>
                    <td>🔴</td>
                    <td>3K 3236</td>
                    <td>Wheaton</td>
                    <td>Metro Center</td>
                </tr>
                <tr>
                    <td>WMATA</td>
                    <td>🔵</td>
                    <td>7K 7034</td>
                    <td>Metro Center</td>
                    <td>Potomac Yard</td>
                </tr>
                <tr>
                    <td>WMATA</td>
                    <td>MW1</td>
                    <td>XN40 2990</td>
                    <td>Potomac Yard</td>
                    <td>Crystal City</td>
                </tr>
                <tr>
                    <td>WMATA</td>
                    <td>22A</td>
                    <td>XN40 3230</td>
                    <td>Eads/13th</td>
                    <td>Pentagon City</td>
                </tr>
                <tr>
                    <td>WMATA</td>
                    <td>🟡</td>
                    <td>7K 7742</td>
                    <td>Pentagon City</td>
                    <td>L'Enfant Plz.</td>
                </tr>
                <tr>
                    <td>WMATA</td>
                    <td>🟢</td>
                    <td>6K 6018</td>
                    <td>L'Enfant Plz.</td>
                    <td>Southern Ave.</td>
                </tr>
                <tr>
                    <td>WMATA</td>
                    <td>W1</td>
                    <td>Orion VII 3G 3066</td>
                    <td>Southern Ave.</td>
                    <td>Congress Hts.</td>
                    <td><i>i love orion raaagh (rest in peace)</i></td>
                </tr>
                <tr>
                    <td>WMATA</td>
                    <td>🟢</td>
                    <td>6K 6???</td>
                    <td>Congress Hts.</td>
                    <td>Archives</td>
                </tr>
                <tr>
                    <td>WMATA</td>
                    <td>32</td>
                    <td>XD40 4522</td>
                    <td>Archives</td>
                    <td>Penn/22nd.</td>
                </tr>
                <tr>
                    <td>WMATA</td>
                    <td>D6</td>
                    <td>XD40 4540</td>
                    <td>20th/M St.</td>
                    <td>Q/28th St.</td>
                </tr>
                <tr>
                    <td>WMATA</td>
                    <td>D6</td>
                    <td>XD40 4547</td>
                    <td>Q/31st St.</td>
                    <td>DuPont Circle</td>
                </tr>
                <tr>
                    <td>WMATA</td>
                    <td>🔴</td>
                    <td>3K 3118</td>
                    <td>DuPont Circle</td>
                    <td>Metro Center</td>
                </tr>
                <tr>
                    <td>WMATA</td>
                    <td>⚪</td>
                    <td>7K 7396</td>
                    <td>Metro Center</td>
                    <td>Smithsonian</td>
                </tr>
                <tr>
                    <td>WMATA</td>
                    <td>🔴</td>
                    <td>3K 3246</td>
                    <td>Gallery Place</td>
                    <td>Farragut North</td>
                </tr>
                <tr>
                    <td>WMATA</td>
                    <td>⚪</td>
                    <td>7K 7358</td>
                    <td>Farragut West</td>
                    <td>Greensboro</td>
                </tr>
                <tr>
                    <td>WMATA</td>
                    <td>⚪</td>
                    <td>7K 7521</td>
                    <td>Greensboro</td>
                    <td>Rosslyn</td>
                </tr>
                <tr>
                    <td>WMATA</td>
                    <td>🔵</td>
                    <td>7K 7261</td>
                    <td>Rosslyn</td>
                    <td>Arlington Cemetery</td>
                </tr>
                <tr>
                    <td>WMATA</td>
                    <td>🔵</td>
                    <td>7K 7677</td>
                    <td>Arlington Cemetery</td>
                    <td>Pentagon</td>
                    <td><i>there's a mcdonalds here</i></td>
                </tr>
                <tr>
                    <td>WMATA</td>
                    <td>🟡</td>
                    <td>6K 6078</td>
                    <td>Pentagon</td>
                    <td>L'Enfant Plz.</td>
                </tr>
                <tr>
                    <td>WMATA</td>
                    <td>🟡</td>
                    <td>7K 7546</td>
                    <td>L'Enfant Plz.</td>
                    <td>Gallery Place</td>
                </tr>
                <tr>
                    <td>WMATA</td>
                    <td>🔴</td>
                    <td>3K 3104</td>
                    <td>Gallery Place</td>
                    <td>Judiciary Sq.</td>
                </tr>
                <tr>
                    <td>WMATA</td>
                    <td>🔴</td>
                    <td>3K 3280</td>
                    <td>Judiciary Sq.</td>
                    <td>Farragut North</td>
                </tr>
                <tr>
                    <td>WMATA</td>
                    <td>⚪</td>
                    <td>7K 7733</td>
                    <td>Farragut West</td>
                    <td>L'Enfant Plz.</td>
                </tr>
                <tr>
                    <td>WMATA</td>
                    <td>🟢</td>
                    <td>7K 7305</td>
                    <td>L'Enfant Plz.</td>
                    <td>Navy Yard</td>
                </tr>
                <tr>
                    <td>WMATA</td>
                    <td>🟢</td>
                    <td>6K 6019</td>
                    <td>Navy Yard</td>
                    <td>L'Enfant Plz.</td>
                </tr>
                <tr>
                    <td>WMATA</td>
                    <td>🟡</td>
                    <td>6K 6078</td>
                    <td>L'Enfant Plz.</td>
                    <td>King St/Old Town</td>
                </tr>
                <tr>
                    <td>DASH</td>
                    <td>31</td>
                    <td>XE60 31-902</td>
                    <td>King St.</td>
                    <td>Braddock Rd.</td>
                </tr>
                <tr>
                    <td>DASH</td>
                    <td>104</td>
                    <td>Gillig LF HEV 35-232</td>
                    <td>Braddock Rd.</td>
                    <td>Pentagon</td>
                </tr>
                <tr>
                    <td>ART</td>
                    <td>42</td>
                    <td>Gillig LF CNG 35-5326</td>
                    <td>Pentagon</td>
                    <td>Virginia Sq.</td>
                </tr>
                <tr>
                    <td>WMATA</td>
                    <td>🟠</td>
                    <td>7K 7337</td>
                    <td>Virginia Sq.</td>
                    <td>Vienna</td>
                </tr>
                <tr>
                    <td>WMATA</td>
                    <td>🟠</td>
                    <td>7K 7356</td>
                    <td>Vienna</td>
                    <td>Metro Center</td>
                </tr>
                <tr>
                    <td>WMATA</td>
                    <td>🔴</td>
                    <td>3K 3210</td>
                    <td>Metro Center</td>
                    <td>NoMa</td>
                    <td><i>do not come here to eat you WILL be disappointed</i></td>
                </tr>
                <tr>
                    <td>WMATA</td>
                    <td>🔴</td>
                    <td>7K 7016</td>
                    <td>NoMa</td>
                    <td>Farragut North</td>
                </tr>
                <tr>
                    <td>WMATA</td>
                    <td>⚪</td>
                    <td>7K 7396</td>
                    <td>Smithsonian</td>
                    <td>Metro Center</td>
                </tr>
                <tr>
                    <td>WMATA</td>
                    <td>🔴</td>
                    <td>3K 3173</td>
                    <td>Metro Center</td>
                    <td>Union Station</td>
                </tr>
                <tr>
                    <td>Ddot</td>
                    <td>Streetcar</td>
                    <td>12 Trio 102</td>
                    <td>Union</td>
                    <td>Benning/Oklahoma</td>
                    <td>backtrack to H/8th St.</td>
                </tr>
                <tr>
                    <td>WMATA</td>
                    <td>D8</td>
                    <td>XD40 4498</td>
                    <td>K/8th St.</td>
                    <td>610 RI Ave.</td>
                    <td><i>metrobar yay</i></td>
                </tr>
                <tr>
                    <td>WMATA</td>
                    <td>🔴</td>
                    <td>3K 3215</td>
                    <td>Rhode Island Av.</td>
                    <td>Farragut North</td>
                </tr>
                <tr>
                    <td>WMATA</td>
                    <td>🔴</td>
                    <td>3K 3291</td>
                    <td>DuPont Circle</td>
                    <td>Gallery Place</td>
                    <td><i>👌cheeky nandos</i></td>
                </tr>
                <tr>
                    <td>WMATA</td>
                    <td>🔴</td>
                    <td>3K 3267</td>
                    <td>DuPont Circle</td>
                    <td>Union Station</td>
                </tr>
                <tr>
                    <td>Amtrak</td>
                    <td>Acela</td>
                    <td>LRC 3527</td>
                    <td>D.C. Union</td>
                    <td>Penn Sta.</td>
                </tr>
                <tr>
                    <td>NYCTA</td>
                    <td>(Q)</td>
                    <td>R46 6025</td>
                    <td>Herald Sq.</td>
                    <td>TSQ</td>
                </tr>
                <tr>
                    <td>NYCTA</td>
                    <td>(7)</td>
                    <td>R188 7426</td>
                    <td>TSQ</td>
                    <td>GCT</td>
                </tr>
                <tr>
                    <td>MNR</td>
                    <td>New Haven</td>
                    <td>M8 9377</td>
                    <td>GCT</td>
                    <td>Fairfield-Black Rock</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
