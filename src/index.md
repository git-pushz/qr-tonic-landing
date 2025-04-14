---
layout: base.njk
title: QR Tonic - Home
---

<section>
  <div class="hero min-h-dvh bg-neutral relative overflow-hidden">
      <!-- Fallback Background Image -->
      <div id="fallback-bg" class="absolute inset-0 w-full h-full hidden">
        <img 
          src="{{ features.hero.background.fallback }}" 
          alt="Pizza background" 
          class="w-full h-full object-cover"
        />
      </div>
      <!-- Video Background -->
      <video 
        id="hero-video"
        class="absolute inset-0 w-full h-full object-cover opacity-50"
        autoplay 
        loop 
        muted 
        playsinline
        oncanplay="document.getElementById('fallback-bg').classList.add('hidden')"
        onerror="document.getElementById('fallback-bg').classList.remove('hidden')"
      >
        <source src="{{ features.hero.background.video }}" type="video/mp4">
      </video>
      <!-- Overlay for better text contrast -->
      <div class="absolute inset-0 bg-neutral/50"></div>
      
      <div class="hero-content text-center relative -top-20">
          <div class="max-w-2xl">
              <h1 class="text-4xl md:text-6xl font-bold text-base-100">{{ features.hero.title }}</h1>
              <p class="py-6 text-base-100">{{ features.hero.subtitle }}</p>
          </div>
      </div>
      <div class="absolute bottom-8 left-0 right-0">
          <div class="flex px-2 py-1 gap-4 justify-center rounded-lg bg-base-100/60 w-fit mx-auto">
              <button class="btn btn-outline btn-primary h-1 w-32 md:w-44">Prenota ora</button>
              <button class="btn btn-primary h-1 w-32 md:w-44">Menù</button>
          </div>
      </div>
  </div>
</section>

<section id="chi-siamo" class="min-h-screen relative overflow-hidden">
  <!-- Red Background -->
  <div class="absolute inset-0 z-0">
    <!-- Red full width on mobile, 70% on medium and up -->
    <div class="w-full md:w-[70%] h-full bg-primary"></div>
    <!-- Hidden on mobile, visible 30% on medium and up -->
    <div class="hidden md:block md:w-[30%] h-full bg-base-100"></div>
  </div>
  <!-- Content -->
  <div class="container mx-auto px-4 py-16 relative z-10">
    <div class="text-left mb-12">
      <h2 class="text-4xl md:text-6xl font-black uppercase mb-4 text-base-100">{{ features.whoWeAre.title }}</h2>
      <p class="text-lg max-w-2xl text-base-100/90">{{ features.whoWeAre.subtitle }}</p>
    </div>
    <div class="join join-vertical w-full gap-2">
      {% for trait in features.whoWeAre.businessTraits %}
      <div class="collapse bg-base-100 rounded-xl shadow-lg">
        <input type="radio" name="who-we-are" {% if loop.first %}checked="checked"{% endif %} /> 
        <div class="collapse-title text-2xl md:text-4xl font-black text-primary">
          {{ trait.title }}
        </div>
        <div class="collapse-content">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="flex">
              <p class="text-lg text-primary">{{ trait.text }}</p>
            </div>
            <div class="h-full">
              <img src="{{ trait.image }}" alt="{{ trait.title }}" class="w-full h-full object-cover rounded-lg" />
            </div>
          </div>
        </div>
      </div>
      {% endfor %}
    </div>
  </div>
</section>

<section class="bg-neutral py-24">
  <div class="container mx-auto px-4">
    <h2 class="text-base-100 text-4xl md:text-6xl font-bold mb-4">{{ features.testimonials.title }}</h2>
    <p class="text-base-100 text-xl mb-16">{{ features.testimonials.subtitle }}</p>
  </div>
    
  <div class="grid grid-flow-col auto-cols-[80%] md:auto-cols-[45%] lg:auto-cols-[30%] overflow-x-auto gap-12">
    {% for review in features.testimonials.reviews %}
    <div class="relative">
      <div class="bg-base-100 rounded-2xl p-6">
        <div class="flex gap-6">
          <div class="w-16 h-16 bg-base-200 rounded-full flex-shrink-0 flex items-center justify-center">
            <img src="{{ review.avatar }}" alt="{{ review.name }}" class="w-full h-full rounded-full object-cover" />
          </div>
          <div class="flex flex-col">
            <h3 class="font-bold text-xl mb-2">{{ review.name }}</h3>
            <p class="text-base-content">{{ review.text }}</p>
          </div>
        </div>
      </div>
      <div class="mt-1">
        <div class="bg-base-100 rounded-2xl p-6 transform scale-y-[1] opacity-60" style="mask-image: linear-gradient(to bottom, black 20%, transparent 100%); -webkit-mask-image: linear-gradient(to bottom, black 20%, transparent 100%);">
          <div class="flex gap-6">
            <div class="w-16 h-16 bg-base-200 rounded-full flex-shrink-0 flex items-center justify-center">
              <img src="{{ review.avatar }}" alt="{{ review.name }}" class="w-full h-full rounded-full object-cover" />
            </div>
            <div class="flex flex-col">
              <h3 class="font-bold text-xl mb-2">{{ review.name }}</h3>
              <p class="text-base-content">{{ review.text }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    {% endfor %}
  </div>
</section>

<section id="esperienze" class="bg-secondary py-16">
  <div class="container mx-auto px-4">
    {% for experience in features.experiences %}
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 {% if not loop.last %}mb-24{% endif %} items-center">
      <div {% if loop.index0 % 2 == 1 %}class="lg:order-2"{% endif %}>
        <h2 class="text-primary text-4xl md:text-6xl font-bold mb-6">{{ experience.title }}</h2>
        <p class="text-primary text-xl">{{ experience.text }}</p>
      </div>
      <div {% if loop.index0 % 2 == 1 %}class="lg:order-1"{% endif %}>
        <img 
          src="{{ experience.image }}"
          alt="{{ experience.title }}" 
          class="w-full rounded-2xl shadow-xl"
        />
      </div>
    </div>
    {% endfor %}
  </div>
</section>