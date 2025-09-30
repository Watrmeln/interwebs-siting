import Particles, { particlesInit } from "@tsparticles/svelte";
import { loadSlim } from "@tsparticles/slim";

let particlesConfig = {
    fullScreen: {
        zIndex: 1,
    },
    particles: {
        color: {
            value: ["#FFFFFF", "#FFd700", "#4fbf00", "#0094ff", "#a53b3bff"],
        },
        move: {
            direction: "bottom",
            enable: true,
            outModes: {
                default: "out",
            },
            size: true,
            speed: {
                min: 1,
                max: 3,
            },
        },
        number: {
            value: 500,
            density: {
                enable: true,
                area: 800,
            },
        },
        opacity: {
            value: 1,
            animation: {
                enable: false,
                startValue: "max",
                destroy: "min",
                speed: 0.3,
                sync: true,
            },
        },
        rotate: {
            value: {
                min: 0,
                max: 360,
            },
            direction: "random",
            move: true,
            animation: {
                enable: true,
                speed: 60,
            },
        },
        tilt: {
            direction: "random",
            enable: true,
            move: true,
            value: {
                min: 0,
                max: 360,
            },
            animation: {
                enable: true,
                speed: 60,
            },
        },
        shape: {
            type: "polygon",
            options: {
                polygon: [
                    {
                        sides: 5,
                    },
                    {
                        sides: 6,
                    },
                ],
            },
        },
        size: {
            value: {
                min: 2,
                max: 4,
            },
        },
        roll: {
            darken: {
                enable: true,
                value: 30,
            },
            enlighten: {
                enable: true,
                value: 30,
            },
            enable: true,
            speed: {
                min: 15,
                max: 25,
            },
        },
        wobble: {
            distance: 30,
            enable: true,
            move: true,
            speed: {
                min: -15,
                max: 15,
            },
        },
    },
};

let onParticlesLoaded = (event) => {
    const particlesContainer = event.detail.particles;

    // you can use particlesContainer to call all the Container class
    // (from the core library) methods like play, pause, refresh, start, stop
};

void particlesInit(async (engine) => {
    // call this once per app
    // you can use main to customize the tsParticles instance adding presets or custom shapes
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //await loadFull(main);
    await loadSlim(engine);
});
