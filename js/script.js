// ================= LOCK AWAL =================
document.body.classList.add('lock-scroll');

// ================= BUKA UNDANGAN =================
function openInvitation() {
  document.getElementById('cover').style.display = 'none';

  const content = document.getElementById('content');
  content.style.display = 'flex';

  document.body.classList.remove('lock-scroll');

  document.getElementById('music').play();

  observeSections();
}

// ================= ANIMASI =================
function observeSections() {
  const sections = document.querySelectorAll('.section');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, { threshold: 0.2 });

  sections.forEach(section => observer.observe(section));
}

// ================= MUSIK =================
function toggleMusic() {
  const music = document.getElementById('music');
  music.paused ? music.play() : music.pause();
}

// ================= LIGHTBOX =================
document.querySelectorAll('.gallery img').forEach(img => {
  img.addEventListener('click', () => {
    document.getElementById('lightbox').style.display = 'flex';
    document.getElementById('lightbox-img').src = img.src;
  });
});

document.getElementById('lightbox').addEventListener('click', () => {
  document.getElementById('lightbox').style.display = 'none';
});

// ================= COUNTDOWN =================
const eventDate = new Date("Dec 12, 2026 10:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const d = eventDate - now;

  const days = Math.floor(d / (1000*60*60*24));
  const hours = Math.floor((d % (1000*60*60*24))/(1000*60*60));
  const minutes = Math.floor((d % (1000*60*60))/(1000*60));
  const seconds = Math.floor((d % (1000*60))/1000);

  document.getElementById("countdown").innerHTML =
    `${days} hari ${hours} jam ${minutes} menit ${seconds} detik`;
}, 1000);

// ================= SETTINGS =================
function toggleSettings() {
  const panel = document.getElementById('settings');
  panel.style.display = panel.style.display === 'block' ? 'none' : 'block';
}

function toggleDark() {
  document.body.classList.toggle('dark');
}

// ================= SWIPE =================
let startX = 0;
const slider = document.querySelector('.content');

slider.addEventListener('touchstart', e => {
  startX = e.touches[0].clientX;
});

slider.addEventListener('touchend', e => {
  let endX = e.changedTouches[0].clientX;
  let diff = startX - endX;

  const width = window.innerWidth;

  if (Math.abs(diff) > 50) {
    slider.scrollBy({
      left: diff > 0 ? width : -width,
      behavior: 'smooth'
    });
  }
});