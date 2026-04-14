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

function toggleCA(btn) {
  btn.classList.toggle('open');
  const body = btn.nextElementSibling;
  body.classList.toggle('open');
}

// ── Tab Nav background on scroll ──
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

// ── Promo Background Scrolling Images ──
(function () {
  const images = [
    { src: "/images/work/client1.jpg", href: "https://www.facebook.com/photo.php?fbid=1371732558079160&set=pb.100057272866727.-2207520000&type=3" },
    { src: "/images/work/client2.jpg", href: "https://www.facebook.com/photo.php?fbid=1360446125874470&set=pb.100057272866727.-2207520000&type=3" },
    { src: "/images/work/client4.jpg", href: "https://www.facebook.com/photo.php?fbid=1320226833229733&set=pb.100057272866727.-2207520000&type=3" },
    { src: "/images/work/client5.jpg", href: "https://www.facebook.com/photo.php?fbid=1385480286704387&set=pb.100057272866727.-2207520000&type=3" },
    { src: "/images/work/client6.jpg", href: "https://www.facebook.com/photo.php?fbid=1383769340208815&set=pb.100057272866727.-2207520000&type=3" },
    { src: "/images/work/client7.jpg", href: "https://www.facebook.com/photo.php?fbid=1374554551130294&set=pb.100057272866727.-2207520000&type=3" },
    { src: "/images/work/client8.jpg", href: "https://www.facebook.com/photo.php?fbid=1320405156545234&set=pb.100057272866727.-2207520000&type=3" },
  ];

  const track = document.getElementById("promoBgTrack");
  if (!track) return;

  const allImages = [...images, ...images];
  let loadedCount = 0;
  const totalCount = allImages.length;

  allImages.forEach(({ src, href }) => {
    const a = document.createElement("a");
    a.href = href;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.style.cssText = "flex-shrink:0; display:block; height:340px;";

    const img = document.createElement("img");
    img.src = src;
    img.alt = "";
    img.draggable = false;
    img.style.cssText = "height:100%; width:auto; object-fit:cover; border-radius:12px; opacity:0.75; filter:blur(1px) grayscale(20%);";

    img.onload = () => {
      loadedCount++;
      if (loadedCount === totalCount) {
        computeWidth();
        animate();
      }
    };

    // fallback in case image fails to load
    img.onerror = () => {
      loadedCount++;
      if (loadedCount === totalCount) {
        computeWidth();
        animate();
      }
    };

    a.appendChild(img);
    track.appendChild(a);
  });

  let position = 0;
  const speed = 0.6;
  let totalWidth = 0;

  function computeWidth() {
    totalWidth = 0;
    const links = track.querySelectorAll("a");
    const half = links.length / 2;
    for (let i = 0; i < half; i++) {
      totalWidth += links[i].offsetWidth + 16;
    }
  }

  function animate() {
    position -= speed;
    if (Math.abs(position) >= totalWidth) {
      position = 0;
    }
    track.style.transform = `translateX(${position}px)`;
    requestAnimationFrame(animate);
  }

  window.addEventListener("resize", () => {
    computeWidth();
  });
})();