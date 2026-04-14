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
    { src: "/images/work/client9.jpg", href: "https://www.facebook.com/photo.php?fbid=1469150731670675&set=pb.100057272866727.-2207520000&type=3" },
    { src: "/images/work/client10.jpg", href: "https://www.facebook.com/photo.php?fbid=1419422496643499&set=pb.100057272866727.-2207520000&type=3" },
    { src: "/images/work/client11.jpg", href: "https://www.facebook.com/photo.php?fbid=1416797183572697&set=pb.100057272866727.-2207520000&type=3" },
    { src: "/images/work/client12.jpg", href: "https://www.facebook.com/photo.php?fbid=1416097313642684&set=pb.100057272866727.-2207520000&type=3" },
    { src: "/images/work/client13.jpg", href: "https://www.facebook.com/photo.php?fbid=1413399503912465&set=pb.100057272866727.-2207520000&type=3" },
    { src: "/images/work/client14.jpg", href: "https://www.facebook.com/photo.php?fbid=1376900800895669&set=pb.100057272866727.-2207520000&type=3" },
    { src: "/images/work/client15.jpg", href: "https://www.facebook.com/photo.php?fbid=1349293690323047&set=pb.100057272866727.-2207520000&type=3" },
    { src: "/images/work/client16.jpg", href: "https://www.facebook.com/photo.php?fbid=1444349160817499&set=pb.100057272866727.-2207520000&type=3" },
    { src: "/images/work/client17.jpg", href: "https://www.facebook.com/photo.php?fbid=1438377084748040&set=pb.100057272866727.-2207520000&type=3" },
    { src: "/images/work/client18.jpg", href: "https://www.facebook.com/photo.php?fbid=1438376921414723&set=pb.100057272866727.-2207520000&type=3" },
    { src: "/images/work/client19.jpg", href: "https://www.facebook.com/photo.php?fbid=1435093571743058&set=pb.100057272866727.-2207520000&type=3" },
    { src: "/images/work/client20.jpg", href: "https://www.facebook.com/photo.php?fbid=1435093755076373&set=pb.100057272866727.-2207520000&type=3" },
    { src: "/images/work/client21.jpg", href: "https://www.facebook.com/photo.php?fbid=1417925653459850&set=pb.100057272866727.-2207520000&type=3" },
    { src: "/images/work/client22.jpg", href: "https://www.facebook.com/photo/?fbid=1417926080126474&set=pb.100057272866727.-2207520000" },
    { src: "/images/work/client23.jpg", href: "https://www.facebook.com/photo.php?fbid=1431506402101775&set=pb.100057272866727.-2207520000&type=3" },
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
    a.style.cssText = "flex-shrink:0; display:block; height:600px;";

    const img = document.createElement("img");
    img.src = src;
    img.alt = "";
    img.draggable = false;
    img.style.cssText = "height:600px !important; width:auto; object-fit:cover; border-radius:12px; opacity:0.85; filter:grayscale(10%); flex-shrink:0;";

    img.onload = () => {
      loadedCount++;
      if (loadedCount === totalCount) {
        computeWidth();
        animate();
      }
    };

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
  const speed = 2;
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