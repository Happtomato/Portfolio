<script lang="ts">
    import { fly } from "svelte/transition";
    import { cubicOut } from "svelte/easing";
    import { onMount, onDestroy } from "svelte";
    import RecipeGeneratorImg from "$lib/assets/ProjectImages/RecipeGenerator.png";
    import IPAImage from "$lib/assets/ProjectImages/IPA.png";


    type Project = {
        title: string;
        description: string;
        image: string;
        link?: string;
        github?: string;
    };

    const projects: Project[] = [
        {
            title: "Recipe Generator",
            description: "AI-powered recipe tool where users input ingredients and get recipes via ChatGPT, with options to save and access via CLI or web interface.",
            image: RecipeGeneratorImg,
            github: "https://github.com/Happtomato/diego_kurz_dominik_dierberger"
        },
        {
            title: "IPA Support Chatbot",
            description: "Final apprentices hip project integrating an AI-powered support chatbot with Svelte frontend and Flask/Azure backend.",
            image: IPAImage,
            github: "https://github.com/Happtomato/IPA_SupportBot"
        },
        {
            title: "AI Translation System",
            description: "Built a multilingual AI translation pipeline with FastAPI.",
            image: "https://placehold.net/800x600",
            link: "https://example.com",
            github: "https://example.com"
        },
        {
            title: "IPA Support Chatbot",
            description: "Internal chatbot with automation features and Jira integration.",
            image: "https://placehold.co/800x600",
            link: "https://example.com",
            github: "https://example.com"
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

<section id="projects" class="py-20 px-10 bg-deepblue">
    <div class="max-w-5xl mx-auto text-center animate-fadeIn">
        <h2 class="text-4xl font-bold mb-10 bg-gradient-to-r from-accentPink via-accentOrange to-accentYellow bg-clip-text text-transparent">Projects</h2>

        <div class="relative h-[460px] md:h-[380px]" on:touchstart={handleTouchStart} on:touchend={handleTouchEnd}>
            {#key current}
              {#if projects && projects.length}
                <div class="absolute inset-0 flex items-center justify-center"
                     in:fly={{ x: dir === 'next' ? 300 : -300, duration: 400, easing: cubicOut }}
                     out:fly={{ x: dir === 'next' ? -300 : 300, duration: 400, easing: cubicOut }}>

                  <div class="w-full bg-opacity-100 p-8 rounded-2xl shadow-xl flex flex-col md:flex-row items-center gap-6"
                       class:bg-darkblue={(current % 2) === 0}
                       class:bg-lightblue={(current % 2) !== 0}>
                    <img
                      src={projects[current].image}
                      alt={projects[current].title}
                      width="800"
                      height="600"
                      class="rounded-xl shadow-lg object-contain max-w-full w-auto h-auto max-h-[320px] md:max-h-[300px]"
                    />
                    <div class="flex-1 text-left">
                      <h3 class="text-2xl font-semibold mb-2">{projects[current].title}</h3>
                      <p class="text-accentYellow/80 mb-4">{projects[current].description}</p>
                      <div class="flex flex-col sm:flex-row gap-3">
                        {#if projects[current].link}
                          <a href={projects[current].link} target="_blank"
                             class="bg-accentPink px-4 py-2 rounded-lg hover:bg-accentOrange transition text-deepblue font-semibold">
                            View Project
                          </a>
                        {/if}
                        {#if projects[current].github}
                          <a href={projects[current].github} target="_blank"
                             class="bg-accentOrange px-4 py-2 rounded-lg hover:bg-accentPink transition text-deepblue font-semibold inline-flex items-center gap-2">
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
                class="absolute top-1/2 -left-6 transform -translate-y-1/2 bg-accentPink text-deepblue hover:bg-accentOrange p-2 rounded-full shadow transition-transform duration-200"
                class:animate-bumpLeft={leftKick}
            >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
            </button>
            <button
                on:click={next}
                aria-label="Next project"
                class="absolute top-1/2 -right-6 transform -translate-y-1/2 bg-accentPink text-deepblue hover:bg-accentOrange p-2 rounded-full shadow transition-transform duration-200"
                class:animate-bumpRight={rightKick}
            >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                </svg>
            </button>
        </div>

        <!-- Dots -->
        <div class="flex justify-center mt-6 gap-2">
            {#each projects as _, i}
                <button on:click={() => (current = i)}
                        aria-label={`Go to project ${i + 1}`}
                        class="w-3 h-3 rounded-full transition"
                        class:bg-accentPink={i === current}
                        class:bg-accentOrange={i !== current}></button>
            {/each}
        </div>
    </div>
</section>
<style>

</style>