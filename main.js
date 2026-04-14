    function showTab(name, btn) {
      document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      document.getElementById('tab-' + name).classList.add('active');
      btn.classList.add('active');
      window.scrollTo(0, 0);
    }

    function toggleFaq(btn) {
      const ans = btn.nextElementSibling;
      const isOpen = ans.classList.contains('open');
      document.querySelectorAll('.faq-a').forEach(a => a.classList.remove('open'));
      document.querySelectorAll('.faq-q').forEach(b => b.classList.remove('open'));
      if (!isOpen) {
        ans.classList.add('open');
        btn.classList.add('open');
      }
    }

    // ── Promo Background Scrolling Images ──
(function () {
  // 🔧 REPLACE these paths with your actual past-client/work photos
  const images = [
    "/images/work/client1.jpg",
    "/images/work/client2.jpg",
    "/images/work/client4.jpg",
    "/images/work/client5.jpg",
    "/images/work/client6.jpg",
    "/images/work/client7.jpg",
    "/images/work/client8.jpg",
  ];

  const track = document.getElementById("promoBgTrack");
  if (!track) return;

  // Duplicate images to create a seamless infinite loop
  const allImages = [...images, ...images];

  allImages.forEach((src) => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = "";
    img.draggable = false;
    track.appendChild(img);
  });

  let position = 0;
  const speed = 0.6; // px per frame — adjust for faster/slower
  let totalWidth = 0;
  let animFrameId;

  function computeWidth() {
    // Wait for images to load to get real widths
    totalWidth = 0;
    const imgs = track.querySelectorAll("img");
    // Only measure the first half (original set)
    const half = imgs.length / 2;
    for (let i = 0; i < half; i++) {
      totalWidth += imgs[i].offsetWidth + 16; // 16 = gap
    }
  }

  function animate() {
    position -= speed;
    if (Math.abs(position) >= totalWidth) {
      position = 0; // seamless reset
    }
    track.style.transform = `translateX(${position}px)`;
    animFrameId = requestAnimationFrame(animate);
  }

  // Start after images have a chance to load
  window.addEventListener("load", () => {
    computeWidth();
    animate();
  });

  // Recompute on resize
  window.addEventListener("resize", () => {
    computeWidth();
  });
})();

function toggleCA(btn) {
  btn.classList.toggle('open');
  const body = btn.nextElementSibling;
  body.classList.toggle('open');
}
const tabNavWrap = document.querySelector('.tab-nav-wrap');

window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    tabNavWrap.style.background = 'transparent';
  } else {
    tabNavWrap.style.background = '#1f1e1e';
  }
});

// Set correct background on initial load
if (window.scrollY > 60) {
  tabNavWrap.style.background = 'transparent';
} else {
  tabNavWrap.style.background = '#1f1e1e';
}