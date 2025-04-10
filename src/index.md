---
layout: base.njk
title: QR Tonic - Home
---

<section>
  <div class="hero min-h-dvh bg-black relative overflow-hidden">
      <!-- Fallback Background Image -->
      <div id="fallback-bg" class="absolute inset-0 w-full h-full hidden">
        <img 
          src="https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg" 
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
        <source src="https://videos.pexels.com/video-files/3752507/3752507-hd_1920_1080_24fps.mp4" type="video/mp4">
      </video>
      <!-- Overlay for better text contrast -->
      <div class="absolute inset-0 bg-black/50"></div>
      
      <div class="hero-content text-center relative -top-20">
          <div class="max-w-2xl">
              <h1 class="text-4xl md:text-6xl font-bold text-white">Welcome message in here</h1>
              <p class="py-6 text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a hendrerit libero. In hac habitasse platea dictumst</p>
          </div>
      </div>
      <div class="absolute bottom-8 left-0 right-0">
          <div class="flex px-2 py-1 gap-4 justify-center rounded-lg bg-white/60 w-fit mx-auto">
              <button class="btn border-[#E52822] text-[#E52822] bg-transparent hover:bg-[#E52822] hover:text-white h-1 w-32 md:w-44">Prenota ora</button>
              <button class="btn bg-[#E52822] text-white border-none hover:bg-[#c41f1a] h-1 w-32 md:w-44">Menù</button>
          </div>
      </div>
  </div>
</section>


<section id="chi-siamo" class="min-h-screen relative overflow-hidden">
  <!-- Red Background -->
  <div class="absolute inset-0 z-0">
    <!-- Red full width on mobile, 70% on medium and up -->
    <div class="w-full md:w-[70%] h-full bg-[#E52822]"></div>
    <!-- Hidden on mobile, visible 30% on medium and up -->
    <div class="hidden md:block md:w-[30%] h-full bg-white"></div>
  </div>
  <!-- Content -->
  <div class="container mx-auto px-4 py-16 relative z-10">
    <div class="text-left mb-12">
      <h2 class="text-4xl md:text-6xl font-black uppercase mb-4 text-white">I nostri Eventi</h2>
      <p class="text-lg max-w-2xl text-white/90">Scopri tutte le nostre esperienze e tutti i servizi che facciamo all'interno della nostra attività.</p>
    </div>
    <div class="join join-vertical w-full gap-2">
      <!-- Tradition -->
      <div class="collapse bg-white rounded-xl shadow-lg">
        <input type="radio" name="who-we-are" checked="checked" /> 
        <div class="collapse-title text-2xl md:text-4xl font-black text-[#E52822]">
          Bar
        </div>
        <div class="collapse-content">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="flex">
              <p class="text-lg text-[#E52822]">Explore our top-notch services designed to meet your needs. Explore our top-notch services designed to meet your needs.</p>
            </div>
            <div class="h-full">
              <img src="https://placehold.co/800x600" alt="Bar" class="w-full h-full object-cover rounded-lg" />
            </div>
          </div>
        </div>
      </div>
      <!-- Culture -->
      <div class="collapse bg-white rounded-xl shadow-lg">
        <input type="radio" name="who-we-are" /> 
        <div class="collapse-title text-2xl md:text-4xl font-black text-[#E52822]">
          Ristorante
        </div>
        <div class="collapse-content">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="flex">
              <p class="text-lg text-[#E52822]">Explore our top-notch services designed to meet your needs. Explore our top-notch services designed to meet your needs.</p>
            </div>
            <div class="h-full">
              <img src="https://placehold.co/800x600" alt="Ristorante" class="w-full h-full object-cover rounded-lg" />
            </div>
          </div>
        </div>
      </div>
      <!-- Our Roots -->
      <div class="collapse bg-white rounded-xl shadow-lg">
        <input type="radio" name="who-we-are" /> 
        <div class="collapse-title text-2xl md:text-4xl font-black text-[#E52822]">
          Mixology
        </div>
        <div class="collapse-content">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="flex">
              <p class="text-lg text-[#E52822]">Explore our top-notch services designed to meet your needs. Explore our top-notch services designed to meet your needs.</p>
            </div>
            <div class="h-full">
              <img src="https://placehold.co/800x600" alt="Mixology" class="w-full h-full object-cover rounded-lg" />
            </div>
          </div>
        </div>
      </div>
      <!-- Party Hard -->
      <div class="collapse bg-white rounded-xl shadow-lg">
        <input type="radio" name="who-we-are" /> 
        <div class="collapse-title text-2xl md:text-4xl font-black text-[#E52822]">
          Party hard
        </div>
        <div class="collapse-content">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="flex">
              <p class="text-lg text-[#E52822]">Explore our top-notch services designed to meet your needs. Explore our top-notch services designed to meet your needs.</p>
            </div>
            <div class="h-full">
              <img src="https://placehold.co/800x600" alt="Party hard" class="w-full h-full object-cover rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="bg-black py-24">
  <div class="container mx-auto px-4">
    <h2 class="text-white text-4xl md:text-6xl font-bold mb-4">Cosa dicono di noi</h2>
    <p class="text-white text-xl mb-16">Qui trovi alcuni nei nostri commenti riportati sui nostri sociallllss</p>
  </div>
    
  <div class="grid grid-flow-col auto-cols-[80%] md:auto-cols-[45%] lg:auto-cols-[30%] overflow-x-auto gap-12">
    <div class="relative">
      <div class="bg-white rounded-2xl p-6">
        <div class="flex gap-6">
          <div class="w-16 h-16 bg-gray-200 rounded-full flex-shrink-0 flex items-center justify-center">
            <span class="text-xs">PHOTO</span>
          </div>
          <div class="flex flex-col">
            <h3 class="font-bold text-xl mb-2">Emily Johnson</h3>
            <p class="text-gray-700">I am amazed by the exceptional service provided by this company. They exceeded all my expectations!</p>
          </div>
        </div>
      </div>
      <div class="mt-1">
        <div class="bg-white rounded-2xl p-6 transform scale-y-[1] opacity-60" style="mask-image: linear-gradient(to bottom, black 20%, transparent 100%); -webkit-mask-image: linear-gradient(to bottom, black 20%, transparent 100%);">
          <div class="flex gap-6">
            <div class="w-16 h-16 bg-gray-200 rounded-full flex-shrink-0 flex items-center justify-center">
              <span class="text-xs">PHOTO</span>
            </div>
            <div class="flex flex-col">
              <h3 class="font-bold text-xl mb-2">Emily Johnson</h3>
              <p class="text-gray-700">I am amazed by the exceptional service provided by this company. They exceeded all my expectations!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="relative">
      <div class="bg-white rounded-2xl p-6">
        <div class="flex gap-6">
          <div class="w-16 h-16 bg-gray-200 rounded-full flex-shrink-0 flex items-center justify-center">
            <span class="text-xs">PHOTO</span>
          </div>
          <div class="flex flex-col">
            <h3 class="font-bold text-xl mb-2">Emily Johnson</h3>
            <p class="text-gray-700">I am amazed by the exceptional service provided by this company. They exceeded all my expectations!</p>
          </div>
        </div>
      </div>
      <div class="mt-1">
        <div class="bg-white rounded-2xl p-6 transform scale-y-[1] opacity-60" style="mask-image: linear-gradient(to bottom, black 20%, transparent 100%); -webkit-mask-image: linear-gradient(to bottom, black 20%, transparent 100%);">
          <div class="flex gap-6">
            <div class="w-16 h-16 bg-gray-200 rounded-full flex-shrink-0 flex items-center justify-center">
              <span class="text-xs">PHOTO</span>
            </div>
            <div class="flex flex-col">
              <h3 class="font-bold text-xl mb-2">Emily Johnson</h3>
              <p class="text-gray-700">I am amazed by the exceptional service provided by this company. They exceeded all my expectations!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="relative">
      <div class="bg-white rounded-2xl p-6">
        <div class="flex gap-6">
          <div class="w-16 h-16 bg-gray-200 rounded-full flex-shrink-0 flex items-center justify-center">
            <span class="text-xs">PHOTO</span>
          </div>
          <div class="flex flex-col">
            <h3 class="font-bold text-xl mb-2">Emily Johnson</h3>
            <p class="text-gray-700">I am amazed by the exceptional service provided by this company. They exceeded all my expectations!</p>
          </div>
        </div>
      </div>
      <div class="mt-1">
        <div class="bg-white rounded-2xl p-6 transform scale-y-[1] opacity-60" style="mask-image: linear-gradient(to bottom, black 20%, transparent 100%); -webkit-mask-image: linear-gradient(to bottom, black 20%, transparent 100%);">
          <div class="flex gap-6">
            <div class="w-16 h-16 bg-gray-200 rounded-full flex-shrink-0 flex items-center justify-center">
              <span class="text-xs">PHOTO</span>
            </div>
            <div class="flex flex-col">
              <h3 class="font-bold text-xl mb-2">Emily Johnson</h3>
              <p class="text-gray-700">I am amazed by the exceptional service provided by this company. They exceeded all my expectations!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="relative">
      <div class="bg-white rounded-2xl p-6">
        <div class="flex gap-6">
          <div class="w-16 h-16 bg-gray-200 rounded-full flex-shrink-0 flex items-center justify-center">
            <span class="text-xs">PHOTO</span>
          </div>
          <div class="flex flex-col">
            <h3 class="font-bold text-xl mb-2">Emily Johnson</h3>
            <p class="text-gray-700">I am amazed by the exceptional service provided by this company. They exceeded all my expectations!</p>
          </div>
        </div>
      </div>
      <div class="mt-1">
        <div class="bg-white rounded-2xl p-6 transform scale-y-[1] opacity-60" style="mask-image: linear-gradient(to bottom, black 20%, transparent 100%); -webkit-mask-image: linear-gradient(to bottom, black 20%, transparent 100%);">
          <div class="flex gap-6">
            <div class="w-16 h-16 bg-gray-200 rounded-full flex-shrink-0 flex items-center justify-center">
              <span class="text-xs">PHOTO</span>
            </div>
            <div class="flex flex-col">
              <h3 class="font-bold text-xl mb-2">Emily Johnson</h3>
              <p class="text-gray-700">I am amazed by the exceptional service provided by this company. They exceeded all my expectations!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="esperienze" class="bg-[#FFC0CB] py-16">
  <div class="container mx-auto px-4">
    <!-- Experience 1 -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24 items-center">
      <div>
        <h2 class="text-[#E52822] text-4xl md:text-6xl font-bold mb-6">EXPERIENCE 1</h2>
        <p class="text-[#E52822] text-xl">
          Explore a variety of activities offered by the restaurant, including special events, workshops, and promotions.Explore a variety of activities offered by the restaurant, including special events, workshops, and promotions.Explore a variety of activities offered by the restaurant, including special events, workshops, and promotions.
        </p>
      </div>
      <div>
        <img 
          src="https://images.unsplash.com/photo-1506354666786-959d6d497f1a?q=80&w=2940&auto=format&fit=crop"
          alt="Pizza with strawberries" 
          class="w-full rounded-2xl shadow-xl"
        />
      </div>
    </div>
    <!-- Experience 2 -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24 items-center">
      <div class="lg:order-2">
        <h2 class="text-[#E52822] text-4xl md:text-6xl font-bold mb-6">EXPERIENCE 2</h2>
        <p class="text-[#E52822] text-xl">
          Explore a variety of activities offered by the restaurant, including special events, workshops, and promotions.Explore a variety of activities offered by the restaurant, including special events, workshops, and promotions.Explore a variety of activities offered by the restaurant, including special events, workshops, and promotions.
        </p>
      </div>
      <div class="lg:order-1">
        <img 
          src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2940&auto=format&fit=crop"
          alt="Pepperoni pizza" 
          class="w-full rounded-2xl shadow-xl"
        />
      </div>
    </div>
    <!-- Experience 3 -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div>
        <h2 class="text-[#E52822] text-4xl md:text-6xl font-bold mb-6">EXPERIENCE 3</h2>
        <p class="text-[#E52822] text-xl">
          Explore a variety of activities offered by the restaurant, including special events, workshops, and promotions.Explore a variety of activities offered by the restaurant, including special events, workshops, and promotions.Explore a variety of activities offered by the restaurant, including special events, workshops, and promotions.
        </p>
      </div>
      <div>
        <img 
          src="https://images.unsplash.com/photo-1506354666786-959d6d497f1a?q=80&w=2940&auto=format&fit=crop"
          alt="Pizza with strawberries" 
          class="w-full rounded-2xl shadow-xl"
        />
      </div>
    </div>
  </div>
</section>