    // AOS Animation
      AOS.init();
  


//navbar 

  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu-2");
  const openIcon = document.getElementById("menu-open-icon");
  const closeIcon = document.getElementById("menu-close-icon");

  
  menuToggle.addEventListener("click", (e) => {
    e.stopPropagation(); // prevent event bubbling
    mobileMenu.classList.toggle("hidden");
    openIcon.classList.toggle("hidden");
    closeIcon.classList.toggle("hidden");
  });

  document.addEventListener("click", (e) => {
    if (
      !mobileMenu.classList.contains("hidden") &&
      !mobileMenu.contains(e.target) &&
      !menuToggle.contains(e.target)
    ) {
      mobileMenu.classList.add("hidden");
      openIcon.classList.remove("hidden");
      closeIcon.classList.add("hidden");
    }
  });


  
// testimonials slider

    const cardsData = [
      {
        image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200',
        name: 'Briar Martin',
        handle: '@neilstellar',
        date: 'April 20, 2025',
        data:'nice Work! I am very satisfied.'
      },
      {
        image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200',
        name: 'Avery Johnson',
        handle: '@averywrites',
        date: 'May 10, 2025',
        data:'nice Work! I am very satisfied.'
      },
      {
        image: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&auto=format&fit=crop&q=60',
        name: 'Jordan Lee',
        handle: '@jordantalks',
        date: 'June 5, 2025',
        data:'Excellent service and support throughout the process.'
      },
      {
        image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=60',
        name: 'Avery Johnson',
        handle: '@averywrites',
        date: 'May 10, 2025',
        data:'nice Work! I am very satisfied.'
      },
    ];

    const row1 = document.getElementById('row1');
    const row2 = document.getElementById('row2');

    const createCard = (card) => `
      <div class="p-5 rounded-2xl mx-4 shadow-lg hover:shadow-blue-500/30 bg-[#1e293b] transition-all duration-300 w-72 shrink-0">
        <div class="flex gap-3 items-center">
          <img class="w-12 h-12 rounded-full border-2 border-blue-400" src="${card.image}" alt="User Image">
          <div class="flex flex-col">
            <div class="flex items-center gap-1">
              <p class="font-semibold text-white">${card.name}</p>
              <svg class="mt-0.5" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.555.72a4 4 0 0 1-.297.24c-.179.12-.38.202-.59.244a4 4 0 0 1-.38.041c-.48.039-.721.058-.922.129a1.63 1.63 0 0 0-.992.992c-.071.2-.09.441-.129.922a4 4 0 0 1-.041.38 1.6 1.6 0 0 1-.245.59 3 3 0 0 1-.239.297c-.313.368-.47.551-.56.743-.213.444-.213.96 0 1.404.09.192.247.375.56.743.125.146.187.219.24.297.12.179.202.38.244.59.018.093.026.189.041.38.039.48.058.721.129.922.163.464.528.829.992.992.2.071.441.09.922.129.191.015.287.023.38.041.21.042.411.125.59.245.078.052.151.114.297.239.368.313.551.47.743.56.444.213.96.213 1.404 0 .192-.09.375-.247.743-.56.146-.125.219-.187.297-.24.179-.12.38-.202.59-.244a4 4 0 0 1 .38-.041c.48-.039.721-.058.922-.129.464-.163.829-.528.992-.992.071-.2.09-.441.129-.922a4 4 0 0 1 .041-.38c.042-.21.125-.411.245-.59.052-.078.114-.151.239-.297.313-.368.47-.551.56-.743.213-.444.213-.96 0-1.404-.09-.192-.247-.375-.56-.743a4 4 0 0 1-.24-.297 1.6 1.6 0 0 1-.244-.59 3 3 0 0 1-.041-.38c-.039-.48-.058-.721-.129-.922a1.63 1.63 0 0 0-.992-.992c-.2-.071-.441-.09-.922-.129a4 4 0 0 1-.38-.041 1.6 1.6 0 0 1-.59-.245A3 3 0 0 1 7.445.72C7.077.407 6.894.25 6.702.16a1.63 1.63 0 0 0-1.404 0c-.192.09-.375.247-.743.56m4.07 3.998a.488.488 0 0 0-.691-.69l-2.91 2.91-.958-.957a.488.488 0 0 0-.69.69l1.302 1.302c.19.191.5.191.69 0z" fill="#38bdf8" />
              </svg>
            </div>
            <span class="text-xs text-slate-400">${card.handle}</span>
          </div>
        </div>
        <p class="text-sm pt-4 text-gray-300">${card.data}</p>
      </div>
    `;

    const renderCards = (target) => {
      const doubled = [...cardsData, ...cardsData];
      doubled.forEach(card => target.insertAdjacentHTML('beforeend', createCard(card)));
    };

    renderCards(row1);
    renderCards(row2);

// ======= Form submission configuration =======

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xvgvpvkz';

// Toast notification system
const toast = {
  element: document.getElementById('toast'),
  messageEl: document.getElementById('toast-message'),
  timeoutId: null,

  show(message, type = 'success') {
    if (this.timeoutId) clearTimeout(this.timeoutId);
    
    this.messageEl.textContent = message;
    this.element.className = `fixed bottom-4 right-4 flex items-center p-4 space-x-4 text-sm rounded-lg opacity-0 transition-all duration-300 translate-y-2 pointer-events-none z-50 ${type}`;
    
    // Force reflow to enable animation
    this.element.offsetHeight;
    this.element.classList.add('show');

    this.timeoutId = setTimeout(() => {
      this.element.classList.remove('show');
    }, 3000);
  }
};

// contact modal behavior
(function(){
  const openBtns = document.querySelectorAll('.open-contact-modal');
  const modal = document.getElementById('contact-modal');
  const overlay = document.getElementById('contact-modal-overlay');
  const closeBtn = document.getElementById('contact-modal-close');
  const cancelBtn = document.getElementById('contact-modal-cancel');
  const form = document.getElementById('contact-modal-form');

  if (!modal) return; // nothing to do

  const show = () => {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    // add small animation class to inner dialog
    const dialog = modal.querySelector('> div.relative');
    if (dialog) dialog.classList.add('modal-fade-in');
    // focus first field
    const first = modal.querySelector('input, textarea');
    if (first) first.focus();
  };

  const hide = () => {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  };

  openBtns.forEach(b => b.addEventListener('click', (e)=>{ e.preventDefault(); show(); }));

  if (overlay) overlay.addEventListener('click', hide);
  if (closeBtn) closeBtn.addEventListener('click', hide);
  if (cancelBtn) cancelBtn.addEventListener('click', hide);

  document.addEventListener('keydown', (e)=>{ if (e.key === 'Escape' && !modal.classList.contains('hidden')) hide(); });

  const submitToEndpoint = async (frm) => {
    if (!FORMSPREE_ENDPOINT || FORMSPREE_ENDPOINT.includes('yourFormId')) {
      toast.show('Please set up the form endpoint first.', 'error');
      return false;
    }

    const data = new FormData(frm);
    const payload = Object.fromEntries(data.entries());

    // Basic validation
    const requiredFields = ['name', 'email', 'phone', 'service', 'message'];
    for (const field of requiredFields) {
      if (!payload[field] || payload[field].trim() === '') {
        toast.show(`Please fill in your ${field}.`, 'error');
        const input = frm.querySelector(`[name="${field}"]`);
        if (input) input.focus();
        return false;
      }
    }

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (res.ok) {
        return true;
      }
      // attempt to parse error
      const err = await res.json().catch(()=>null);
      console.error('Submit error', err);
      return false;
    } catch (err) {
      console.error('Network error submitting form', err);
      return false;
    }
  };

  if (form) {
    form.addEventListener('submit', async (e)=>{
      e.preventDefault();
      const ok = await submitToEndpoint(e.target);
      if (ok) {
        e.target.reset();
        hide();
        toast.show('Thank you! We will contact you soon.');
      }
    });
  }

  // Also wire the contact section form (page form) to the same endpoint
  const pageForm = document.getElementById('contact-section-form');
  if (pageForm) {
    pageForm.addEventListener('submit', async (e)=>{
      e.preventDefault();
      const ok = await submitToEndpoint(e.target);
      if (ok) {
        e.target.reset();
        toast.show('Thank you! We will contact you soon.');
        // Scroll form into view to show it's reset
        pageForm.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
})();
  