<script lang="ts">
    import { fly } from 'svelte/transition';
    import { cubicOut } from 'svelte/easing';
    import RecipeGeneratorImg from '$lib/assets/ProjectImages/RecipeGenerator.png';
    import IPAImage from '$lib/assets/ProjectImages/IPA.png';
    import PlantFinderImg from '$lib/assets/ProjectImages/PlantFinder.png';
    import ClimateImage from '$lib/assets/ProjectImages/Climate.png';
    import SteamTrendsImg from '$lib/assets/ProjectImages/SteamTrendsIMG.png';

    type Project = {
        title: string;
        description: string;
        image: string;
        link?: string;
        github?: string;
        tags?: string[];
    };

    const projects: Project[] = [
        {
            title: 'Steam Player Retention Dashboard',
            description:
                'DSPRO project at HSLU analyzing long-term video game player retention with Steam, SteamCharts, Steam news, and IGDB data. The system collects Steam games, filters active titles with at least 100 current players, stores monthly player history, and presents the results in an interactive Svelte data story. In the next project phase, the dashboard will be extended with an LLM-supported prognosis that considers update frequency, company context, community signals, and player activity trends.',
            image: SteamTrendsImg,
            link: 'https://steam-prediction.dominik-dierberger.ch/',
            //github: 'https://github.com/Happtomato/DSPRO',
            tags: [
                'SvelteKit',
                'Python',
                'FastAPI',
                'SQLite',
                'Steam Data',
                'SteamCharts',
                'IGDB',
                'Data Story',
                'LLM Planning'
            ]
        },
        {
            title: 'Climate Change Switzerland – Data Story',
            description:
                'Interactive Streamlit data story visualizing climate change trends in Switzerland. The project focuses on making climate data understandable through clear charts, explanations, and a guided narrative. It is hosted on a self-managed Ubuntu server with Apache reverse proxy, systemd service, Cloudflare Tunnel, and a one-command GitHub deployment workflow.',
            image: ClimateImage,
            link: 'https://climate-change-ch.dominik-dierberger.ch',
            github: 'https://github.com/Happtomato/Climate-Change-Switzerland-Data-Story',
            tags: [
                'Streamlit',
                'Data Visualization',
                'Climate Data',
                'Python',
                'Cloudflare Tunnel',
                'Linux',
                'Apache'
            ]
        },
        {
            title: 'Plant Finder',
            description:
                'SvelteKit application for browsing plants and plant diseases through the Perenual API. The app uses server-side SQLite caching to reduce unnecessary API calls and improve response times. It is deployed with adapter-node behind an Apache reverse proxy and exposed securely through a Cloudflare Tunnel.',
            image: PlantFinderImg,
            link: 'https://plants.dominik-dierberger.ch',
            github: 'https://github.com/Happtomato/PlantFinder',
            tags: [
                'SvelteKit',
                'API Integration',
                'SQLite Cache',
                'Adapter-Node',
                'Cloudflare Tunnel',
                'Tailwind',
                'Apache'
            ]
        },
        {
            title: 'Recipe Generator',
            description:
                'AI-powered recipe assistant where users enter available ingredients and receive recipe suggestions generated with ChatGPT. The project combines a web interface with CLI access and includes functionality for saving and reusing recipes. It was built as an experiment in practical AI integration for everyday use cases.',
            image: RecipeGeneratorImg,
            github: 'https://github.com/Happtomato/diego_kurz_dominik_dierberger',
            tags: ['AI', 'CLI', 'Web App', 'OpenAI', 'Python', 'Recipe Generation']
        },
        {
            title: 'IPA Support Chatbot',
            description:
                'Final apprenticeship project focused on an AI-powered support chatbot. The system combines a Svelte frontend with a Flask and Azure-based backend. It was designed to support users with automated answers while keeping the architecture understandable, maintainable, and suitable for a real support environment.',
            image: IPAImage,
            github: 'https://github.com/Happtomato/IPA_SupportBot',
            tags: ['AI', 'Svelte', 'Flask', 'Azure', 'Chatbot', 'Support Automation']
        }
    ];

    let current = 0;
    let dir: 'next' | 'prev' = 'next';
    let leftKick = false;
    let rightKick = false;

    function next() {
        dir = 'next';
        rightKick = true;
        current = (current + 1) % projects.length;
        setTimeout(() => (rightKick = false), 250);
    }

    function prev() {
        dir = 'prev';
        leftKick = true;
        current = (current - 1 + projects.length) % projects.length;
        setTimeout(() => (leftKick = false), 250);
    }

    let touchStartX = 0;
    let touchEndX = 0;

    function handleTouchStart(e: TouchEvent) {
        touchStartX = e.changedTouches[0].screenX;
    }

    function handleTouchEnd(e: TouchEvent) {
        touchEndX = e.changedTouches[0].screenX;

        if (touchEndX < touchStartX - 50) {
            next();
        }

        if (touchEndX > touchStartX + 50) {
            prev();
        }
    }
</script>

<section id="projects" class="bg-deepblue px-6 py-24 sm:px-10">
    <div class="animate-fadeIn mx-auto max-w-[92rem] text-center">
        <h2
                class="relative z-20 mb-14 bg-gradient-to-r from-accentPink via-accentOrange to-accentYellow bg-clip-text text-4xl font-bold text-transparent lg:text-6xl"
        >
            Projects
        </h2>

        <div
                class="relative mt-10 min-h-[780px] md:h-[700px] lg:h-[720px]"
                on:touchstart={handleTouchStart}
                on:touchend={handleTouchEnd}
        >
            {#key current}
                {#if projects.length}
                    <div
                            class="absolute inset-0 z-10 flex items-center justify-center"
                            in:fly={{ x: dir === 'next' ? 300 : -300, duration: 400, easing: cubicOut }}
                            out:fly={{ x: dir === 'next' ? -300 : 300, duration: 400, easing: cubicOut }}
                    >
                        <article
                                class="flex w-full max-w-7xl flex-col items-center gap-8 rounded-[2rem] p-8 shadow-2xl sm:p-10 md:flex-row md:p-12 lg:gap-12 lg:p-14"
                                class:bg-darkblue={current % 2 === 0}
                                class:bg-lightblue={current % 2 !== 0}
                        >
                            <img
                                    src={projects[current].image}
                                    alt={projects[current].title}
                                    width="900"
                                    height="650"
                                    class="h-auto max-h-[260px] w-auto max-w-full shrink-0 rounded-2xl object-contain shadow-xl sm:max-h-[300px] md:max-h-[380px] lg:max-h-[430px] lg:max-w-[48%]"
                            />

                            <div class="flex-1 text-left">
                                <h3 class="mb-4 text-3xl font-semibold leading-tight lg:text-4xl">
                                    {projects[current].title}
                                </h3>

                                <p class="mb-6 max-w-3xl text-base leading-8 text-accentYellow/85 lg:text-lg">
                                    {projects[current].description}
                                </p>

                                {#if projects[current].tags?.length}
                                    <div class="mb-7 flex flex-wrap gap-2.5">
                                        {#each projects[current].tags as tag (tag)}
                                            <span
                                                    class="inline-flex items-center rounded-full border border-accentYellow/30 bg-black/10 px-3.5 py-1.5 text-sm tracking-tight text-accentYellow/90 backdrop-blur-sm transition hover:bg-accentYellow/10"
                                            >
                                                {tag}
                                            </span>
                                        {/each}
                                    </div>
                                {/if}

                                <div class="flex flex-col gap-3 sm:flex-row">
                                    {#if projects[current].link}
                                        <a
                                                href={projects[current].link}
                                                target="_blank"
                                                rel="noreferrer"
                                                class="rounded-lg bg-accentPink px-5 py-3 font-semibold text-deepblue transition hover:bg-accentOrange"
                                        >
                                            View Project
                                        </a>
                                    {/if}

                                    {#if projects[current].github}
                                        <a
                                                href={projects[current].github}
                                                target="_blank"
                                                rel="noreferrer"
                                                class="inline-flex items-center gap-2 rounded-lg bg-accentOrange px-5 py-3 font-semibold text-deepblue transition hover:bg-accentPink"
                                        >
                                            <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    class="h-5 w-5"
                                                    viewBox="0 0 24 24"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                            >
                                                <path
                                                        d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.41 7.86 10.94.58.11.79-.25.79-.56v-2.02c-3.2.7-3.88-1.39-3.88-1.39-.53-1.33-1.3-1.68-1.3-1.68-1.07-.73.08-.72.08-.72 1.18.08 1.8 1.22 1.8 1.22 1.05 1.8 2.75 1.28 3.42.98.11-.76.41-1.28.74-1.57-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.47.11-3.07 0 0 .97-.31 3.18 1.18a11.08 11.08 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.6.23 2.78.11 3.07.74.8 1.19 1.83 1.19 3.09 0 4.43-2.69 5.41-5.25 5.7.42.36.8 1.1.8 2.22v3.29c0 .31.21.67.8.56A10.99 10.99 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"
                                                />
                                            </svg>
                                            GitHub
                                        </a>
                                    {/if}
                                </div>
                            </div>
                        </article>
                    </div>
                {/if}
            {/key}

            <button
                    on:click={prev}
                    aria-label="Previous project"
                    class="absolute -left-5 top-1/2 z-20 -translate-y-1/2 transform rounded-full bg-accentPink p-3 text-deepblue shadow transition-transform duration-200 hover:bg-accentOrange md:-left-12 md:p-4"
                    class:animate-bumpLeft={leftKick}
            >
                <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5 md:h-7 md:w-7"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        aria-hidden="true"
                >
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            <button
                    on:click={next}
                    aria-label="Next project"
                    class="absolute -right-5 top-1/2 z-20 -translate-y-1/2 transform rounded-full bg-accentPink p-3 text-deepblue shadow transition-transform duration-200 hover:bg-accentOrange md:-right-12 md:p-4"
                    class:animate-bumpRight={rightKick}
            >
                <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5 md:h-7 md:w-7"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        aria-hidden="true"
                >
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                </svg>
            </button>
        </div>

        <div class="mt-10 flex justify-center gap-2.5">
            {#each projects as _, i (i)}
                <button
                        on:click={() => (current = i)}
                        aria-label={`Go to project ${i + 1}`}
                        class="h-3.5 w-3.5 rounded-full transition"
                        class:bg-accentPink={i === current}
                        class:bg-accentOrange={i !== current}
                ></button>
            {/each}
        </div>
    </div>
</section>