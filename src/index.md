---
layout: base.njk
title: QR Tonic - Home
---

<section>
  <div class="hero min-h-screen bg-black">
      <div class="hero-content text-center">
          <div class="max-w-md">
              <h1 class="text-5xl font-bold text-white">Welcome message in here</h1>
              <p class="py-6 text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a hendrerit libero. In hac habitasse platea dictumst</p>
              <div class="flex gap-4 justify-center">
                  <button class="btn btn-ghost border border-white text-white hover:bg-white hover:text-black">Prenota ora</button>
                  <button class="btn bg-[#E52822] text-white border-none hover:bg-[#c41f1a]">Menù</button>
              </div>
          </div>
      </div>
  </div>
</section>


<section id="chi-siamo" class="min-h-screen relative overflow-hidden">
  <!-- Background Image -->
  <div class="absolute inset-0 z-0">
    <img 
      src="https://t4.ftcdn.net/jpg/02/55/57/33/360_F_255573369_NrbcMNYC1hz1xJigxCOCN8OXsxmtx0TB.jpg" 
      alt="Background" 
      class="w-full h-full object-cover blur-sm"
    />
    <div class="absolute inset-0 bg-base-200/80"></div>
  </div>

  <!-- Content -->
  <div class="container mx-auto px-4 py-16 relative z-10">
    <div class="text-center mb-12">
      <h2 class="text-4xl font-bold mb-4">Who We Are</h2>
      <p class="text-lg max-w-2xl mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
    <div class="join join-vertical w-full gap-2">
      <!-- Tradition -->
      <div class="collapse bg-base-100 border border-base-300">
        <input type="radio" name="who-we-are" checked="checked" /> 
        <div class="collapse-title text-xl font-medium">
          Tradition
        </div>
        <div class="collapse-content">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p class="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
            </div>
            <div class="aspect-video">
              <img src="https://placehold.co/800x600" alt="Tradition" class="w-full h-full object-cover rounded-lg" />
            </div>
          </div>
        </div>
      </div>
      <!-- Culture -->
      <div class="collapse bg-base-100 border border-base-300">
        <input type="radio" name="who-we-are" /> 
        <div class="collapse-title text-xl font-medium">
          Culture
        </div>
        <div class="collapse-content">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p class="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
            </div>
            <div class="aspect-video">
              <img src="https://placehold.co/800x600" alt="Culture" class="w-full h-full object-cover rounded-lg" />
            </div>
          </div>
        </div>
      </div>
      <!-- Our Roots -->
      <div class="collapse bg-base-100 border border-base-300">
        <input type="radio" name="who-we-are" /> 
        <div class="collapse-title text-xl font-medium">
          Our Roots
        </div>
        <div class="collapse-content">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p class="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
            </div>
            <div class="aspect-video">
              <img src="https://placehold.co/800x600" alt="Our Roots" class="w-full h-full object-cover rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="bg-black py-24">
  <div class="container mx-auto px-4">
    <h2 class="text-white text-6xl font-bold mb-4">Cosa dicono di noi</h2>
    <p class="text-white text-xl mb-16">Qui trovi alcuni nei nostri commenti riportati sui nostri sociallllss</p>
  </div>
    
  <div class="grid grid-flow-col auto-cols-[90%] md:auto-cols-[45%] lg:auto-cols-[30%] overflow-x-auto gap-12">
    <div class="bg-white rounded-2xl p-6">
      <div class="flex items-center gap-4 mb-4">
        <div class="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
          <span class="text-xs">PHOTO</span>
        </div>
        <h3 class="font-bold text-xl">Emily Johnson</h3>
      </div>
      <p class="text-gray-700">I am amazed by the exceptional service provided by this company. They exceeded all my expectations!</p>
    </div>
    <div class="bg-white rounded-2xl p-6">
      <div class="flex items-center gap-4 mb-4">
        <div class="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
          <span class="text-xs">PHOTO</span>
        </div>
        <h3 class="font-bold text-xl">Emily Johnson</h3>
      </div>
      <p class="text-gray-700">I am amazed by the exceptional service provided by this company. They exceeded all my expectations!</p>
    </div>
    <div class="bg-white rounded-2xl p-6">
      <div class="flex items-center gap-4 mb-4">
        <div class="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
          <span class="text-xs">PHOTO</span>
        </div>
        <h3 class="font-bold text-xl">Emily Johnson</h3>
      </div>
      <p class="text-gray-700">I am amazed by the exceptional service provided by this company. They exceeded all my expectations!</p>
    </div>
    <div class="bg-white rounded-2xl p-6">
      <div class="flex items-center gap-4 mb-4">
        <div class="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
          <span class="text-xs">PHOTO</span>
        </div>
        <h3 class="font-bold text-xl">Emily Johnson</h3>
      </div>
      <p class="text-gray-700">I am amazed by the exceptional service provided by this company. They exceeded all my expectations!</p>
    </div>
    <div class="bg-white rounded-2xl p-6">
      <div class="flex items-center gap-4 mb-4">
        <div class="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
          <span class="text-xs">PHOTO</span>
        </div>
        <h3 class="font-bold text-xl">Emily Johnson</h3>
      </div>
      <p class="text-gray-700">I am amazed by the exceptional service provided by this company. They exceeded all my expectations!</p>
    </div>
    <div class="bg-white rounded-2xl p-6">
      <div class="flex items-center gap-4 mb-4">
        <div class="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
          <span class="text-xs">PHOTO</span>
        </div>
        <h3 class="font-bold text-xl">Emily Johnson</h3>
      </div>
      <p class="text-gray-700">I am amazed by the exceptional service provided by this company. They exceeded all my expectations!</p>
    </div>
  </div>
</section>

<section id="esperienze" class="bg-[#FFC0CB] py-16">
  <div class="container mx-auto px-4">
    <!-- Experience 1 -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24 items-center">
      <div>
        <h2 class="text-[#E52822] text-6xl font-bold mb-6">EXPERIENCE 1</h2>
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
      <div class="order-2 lg:order-2">
        <h2 class="text-[#E52822] text-6xl font-bold mb-6">EXPERIENCE 2</h2>
        <p class="text-[#E52822] text-xl">
          Explore a variety of activities offered by the restaurant, including special events, workshops, and promotions.Explore a variety of activities offered by the restaurant, including special events, workshops, and promotions.Explore a variety of activities offered by the restaurant, including special events, workshops, and promotions.
        </p>
      </div>
      <div class="order-1 lg:order-1">
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
        <h2 class="text-[#E52822] text-6xl font-bold mb-6">EXPERIENCE 3</h2>
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