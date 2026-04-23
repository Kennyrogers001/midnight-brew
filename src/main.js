import './style.css';

document.querySelector('#app').innerHTML = `
  <div class="bg-fx"></div>
  <div class="particles" id="particles"></div>
  
  <header class="header">
    <div class="logo">MIDNIGHT BREW</div>
    <button id="antiGravBtn" class="btn-drift">Hover Me</button>
  </header>

  <main class="bento-container">
    <!-- Hero Box (Home) -->
    <div class="bento-item hero bento-large">
      <img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80" alt="Coffee Pour" class="bg-img" crossorigin="anonymous">
      <div class="content-overlay">
        <span class="badge">Artisan Roastery</span>
        <h1>Roast of the <br><span class="neon-text">Deep</span></h1>
        <p>Premium specialty coffee from the highlands to your cup. We find solace in the midnight steam.</p>
        <button class="btn-primary">Reserve a Seat</button>
      </div>
    </div>

    <!-- About Box (Spans 2 rows now to fix unwrapping) -->
    <div class="bento-item about gallery-tall">
      <h2 class="hand-text">Our Philosophy</h2>
      <p>We believe coffee is more than caffeine—it's a ritual that bridges the day and the night. Sourced ethically from Malaysian farmers, our beans undergo a meticulous roasting process designed to highlight the hidden notes of cocoa, berries, and smoke.</p>
      <a href="#" class="link">The Origins &rarr;</a>
    </div>

    <!-- Locations Tall -->
    <div class="bento-item gallery-tall img-only">
      <img src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=800&q=80" alt="Cafe Interior" class="bg-img" crossorigin="anonymous">
      <div class="scrim"></div>
      <h2 class="bottom-label">The Attic</h2>
    </div>

    <!-- Menu Box -->
    <div class="bento-item menu bento-wide">
      <div class="menu-content">
        <h2 class="hand-text">Midnight Signatures</h2>
        <ul class="menu-list">
          <li><span>Caramelized Moon</span> <span class="price">RM 16</span></li>
          <li><span>Espresso Nebula</span> <span class="price">RM 14</span></li>
          <li><span>Cloud 9 Cold Brew</span> <span class="price">RM 19</span></li>
        </ul>
      </div>
    </div>

    <!-- Roasts Wide -->
    <div class="bento-item bento-wide img-only">
      <img src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=80" alt="Roasted Beans" class="bg-img" crossorigin="anonymous">
      <div class="scrim"></div>
      <div class="content-overlay" style="padding: 20px;">
        <h2 style="font-size: 2.5rem;">The Roast Room</h2>
        <p style="margin-bottom: 0; max-width: 300px;">Small batches, big flavor. Fresh roasts every Tuesday.</p>
      </div>
    </div>

    <!-- Gallery 1 -->
    <div class="bento-item img-only">
      <img src="https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=600&q=80" alt="Specialty Coffee" class="bg-img" crossorigin="anonymous">
    </div>

    <!-- Review Section -->
    <div class="bento-item about">
      <h2 class="hand-text">Community</h2>
      <p>"The best spot in KL to get some deep work done at 2 AM. The espresso nebula is life-changing."</p>
      <span class="badge" style="background: transparent; border: 1px solid var(--accent-caramel); color: var(--accent-caramel);">— Ahmad W.</span>
    </div>

    <!-- Gallery 2 -->
    <div class="bento-item img-only">
      <img src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=600&q=80" alt="Latte Art Close-up" class="bg-img" crossorigin="anonymous">
      <div class="scrim"></div>
      <h2 class="center-label hand-text">The Feed</h2>
    </div>
  </main>

  <footer class="footer">
    <p>&copy; 2026 Midnight Brew KL. All rights reserved.</p>
  </footer>
`;

// Antigravity Simple Particle Effect & Floating Elements
const container = document.getElementById('particles');
for(let i=0; i<20; i++) {
  const p = document.createElement('div');
  p.className = 'particle';
  p.style.left = Math.random() * 100 + 'vw';
  p.style.top = Math.random() * 100 + 'vh';
  p.style.animationDuration = (Math.random() * 10 + 10) + 's';
  p.style.animationDelay = (Math.random() * 5) + 's';
  container.appendChild(p);
}

// Antigravity interactivity ("Simplicity of Google Antigravity")
const hoverBtn = document.getElementById('antiGravBtn');
const items = document.querySelectorAll('.bento-item');

hoverBtn.addEventListener('mouseenter', () => {
  items.forEach((item, i) => {
    item.style.transform = `translateY(-${Math.random() * 30 + 10}px) rotate(${Math.random() * 10 - 5}deg)`;
    item.style.boxShadow = '0 20px 40px rgba(188, 108, 37, 0.4)';
  });
});

hoverBtn.addEventListener('mouseleave', () => {
  items.forEach(item => {
    item.style.transform = ''; // reset to CSS defined transform
    item.style.boxShadow = '';
  });
});
