<script lang="ts">
    import { fly } from 'svelte/transition';
    import { cubicOut } from 'svelte/easing';
    import { onMount, onDestroy } from 'svelte';
    import RecipeGeneratorImg from '$lib/assets/ProjectImages/RecipeGenerator.png';
    import IPAImage from '$lib/assets/ProjectImages/IPA.png';
    import PlantFinderImg from '$lib/assets/ProjectImages/PlantFinder.png';
    import ClimateImage from '$lib/assets/ProjectImages/Climate.png';

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
            title: 'Climate Change Switzerland – Data Story',
            description:
                'Interactive Streamlit data story visualizing climate change trends in Switzerland. Hosted on a self-managed Ubuntu server with Apache reverse proxy, systemd service, Cloudflare Tunnel, and one-command GitHub deploy.',
            image: ClimateImage,
            link: 'https://climate-change-ch.dominik-dierberger.ch',
            github: 'https://github.com/Happtomato/Climate-Change-Switzerland-Data-Story',
            tags: ['Streamlit', 'Data Visualization', 'Climate Data', 'Python', 'Cloudflare Tunnel', 'Linux']
        },
        {
            title: 'Plant Finder',
            description:
                'SvelteKit app to browse plants and diseases via the Perenual API, with server-side SQLite caching, adapter-node, Apache reverse proxy, and a Cloudflare Tunnel.',
            image: PlantFinderImg,
            link: 'https://plants.dominik-dierberger.ch',
            github: 'https://github.com/Happtomato/PlantFinder',
            tags: ['SvelteKit', 'API', 'SQLite Cache', 'Adapter-Node', 'Cloudflare Tunnel', 'Tailwind']
        },
        {
            title: 'Recipe Generator',
            description:
                'AI-powered recipe tool where users input ingredients and get recipes via ChatGPT, with options to save and access via CLI or web interface.',
            image: RecipeGeneratorImg,
            github: 'https://github.com/Happtomato/diego_kurz_dominik_dierberger',
            tags: ['AI', 'CLI', 'Web App', 'OpenAI', 'Python']
        },
        {
            title: 'IPA Support Chatbot',
            description:
                'Final apprenticeship project integrating an AI-powered support chatbot with Svelte frontend and Flask/Azure backend.',
            image: IPAImage,
            github: 'https://github.com/Happtomato/IPA_SupportBot',
            tags: ['AI', 'Svelte', 'Flask', 'Azure', 'Chatbot']
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
        if (touchEndX < touchStartX - 50) next();
        if (touchEndX > touchStartX + 50) prev();
    }
</script>

<section id="projects" class="bg-deepblue px-6 sm:px-10 py-20">
    <div class="animate-fadeIn mx-auto max-w-7xl text-center">
        <h2
                class="relative z-20 mb-12 bg-gradient-to-r from-accentPink via-accentOrange to-accentYellow bg-clip-text text-4xl lg:text-5xl font-bold text-transparent"
        >
            Projects
        </h2>

        <!-- Add top margin so the absolute slide content sits comfortably below the title -->
        <div
                class="relative mt-8 md:mt-10 min-h-[640px] md:h-[560px] lg:h-[600px]"
                on:touchstart={handleTouchStart}
                on:touchend={handleTouchEnd}
        >
            {#key current}
                {#if projects && projects.length}
                    <div
                            class="absolute inset-0 z-10 flex items-center justify-center"
                            in:fly={{ x: dir === 'next' ? 300 : -300, duration: 400, easing: cubicOut }}
                            out:fly={{ x: dir === 'next' ? -300 : 300, duration: 400, easing: cubicOut }}
                    >
                        <div
                                class="bg-opacity-100 flex w-11/12 md:w-[94%] lg:w-[90%] flex-col items-center gap-6 rounded-2xl p-8 md:p-10 lg:p-12 shadow-2xl md:flex-row"
                                class:bg-darkblue={current % 2 === 0}
                                class:bg-lightblue={current % 2 !== 0}
                        >
                            <img
                                    src={projects[current].image}
                                    alt={projects[current].title}
                                    width="800"
                                    height="600"
                                    class="h-auto max-h-[200px] sm:max-h-[240px] md:max-h-[300px] lg:max-h-[340px] w-auto max-w-full rounded-xl object-contain shadow-lg shrink-0"
                            />

                            <div class="flex-1 text-left">
                                <h3 class="mb-3 text-2xl lg:text-3xl font-semibold">{projects[current].title}</h3>
                                <p class="mb-4 text-accentYellow/80">{projects[current].description}</p>

                                {#if projects[current].tags?.length}
                                    <div class="mb-5 flex flex-wrap gap-2">
                                        {#each projects[current].tags as tag}
                      <span
                              class="inline-flex items-center rounded-full border border-accentYellow/30 bg-black/10 px-3 py-1 text-sm tracking-tight text-accentYellow/90 backdrop-blur-sm transition hover:bg-accentYellow/10"
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
                                                class="rounded-lg bg-accentPink px-4 py-2 font-semibold text-deepblue transition hover:bg-accentOrange"
                                        >
                                            View Project
                                        </a>
                                    {/if}
                                    {#if projects[current].github}
                                        <a
                                                href={projects[current].github}
                                                target="_blank"
                                                class="inline-flex items-center gap-2 rounded-lg bg-accentOrange px-4 py-2 font-semibold text-deepblue transition hover:bg-accentPink"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.41 7.86 10.94.58.11.79-.25.79-.56v-2.02c-3.2.7-3.88-1.39-3.88-1.39-.53-1.33-1.3-1.68-1.3-1.68-1.07-.73.08-.72.08-.72 1.18.08 1.8 1.22 1.8 1.22 1.05 1.8 2.75 1.28 3.42.98.11-.76.41-1.28.74-1.57-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.47.11-3.07 0 0 .97-.31 3.18 1.18a11.08 11.08 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.6.23 2.78.11 3.07.74.8 1.19 1.83 1.19 3.09 0 4.43-2.69 5.41-5.25 5.7.42.36.8 1.1.8 2.22v3.29c0 .31.21.67.8.56A10.99 10.99 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
                                            </svg>
                                            GitHub
                                        </a>
                                    {/if}
                                </div>
                            </div>
                        </div>
                    </div>
                {/if}
            {/key}

            <!-- Controls -->
            <button
                    on:click={prev}
                    aria-label="Previous project"
                    class="absolute top-1/2 -left-7 md:-left-10 -translate-y-1/2 transform rounded-full bg-accentPink p-2 md:p-3 text-deepblue shadow transition-transform duration-200 hover:bg-accentOrange"
                    class:animate-bumpLeft={leftKick}
            >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            <button
                    on:click={next}
                    aria-label="Next project"
                    class="absolute top-1/2 -right-7 md:-right-10 -translate-y-1/2 transform rounded-full bg-accentPink p-2 md:p-3 text-deepblue shadow transition-transform duration-200 hover:bg-accentOrange"
                    class:animate-bumpRight={rightKick}
            >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                </svg>
            </button>
        </div>

        <div class="mt-8 flex justify-center gap-2">
            {#each projects as _, i}
                <button
                        on:click={() => (current = i)}
                        aria-label={`Go to project ${i + 1}`}
                        class="h-3 w-3 rounded-full transition"
                        class:bg-accentPink={i === current}
                        class:bg-accentOrange={i !== current}
                ></button>
            {/each}
        </div>
    </div>
</section>

<style></style>
