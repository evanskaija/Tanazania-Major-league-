const fs = require('fs');

let html = fs.readFileSync('nbc-premier-league.html', 'utf8');

// Find where #tab-overview closes or where news section finishes
const tabOverviewCloseTag = '</div><!-- /tab-panel overview -->';

// Let's create the 5 missing tab panels (#tab-fixtures, #tab-teams, #tab-transfers, #tab-history, #tab-news)

const tabFixturesHTML = `
      <!-- ================================================================
           TAB PANEL 2: FIXTURES & RESULTS
           ================================================================ -->
      <div class="tab-panel" id="tab-fixtures">
        <div style="margin-bottom: 2rem;">
          <!-- Official Match Center Search & Control Bar -->
          <div style="background: linear-gradient(145deg, rgba(10, 24, 52, 0.95), rgba(5, 12, 30, 0.98)); border: 1px solid rgba(255, 193, 7, 0.25); border-radius: 24px; padding: 1.5rem; box-shadow: 0 16px 40px rgba(0,0,0,0.6); margin-bottom: 2rem;">
            <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:1rem; margin-bottom:1.25rem;">
              <div style="display:flex; align-items:center; gap:0.75rem;">
                <span style="font-size:1.5rem;">📅</span>
                <div>
                  <h3 style="font-family:var(--font-heading); font-size:1.3rem; font-weight:900; color:#fff; margin:0;" data-en="Fixtures & Results" data-sw="Ratiba na Matokeo">Fixtures & Results</h3>
                  <span style="font-size:0.78rem; color:var(--text-muted);" data-en="Season 2025/26 — Official NBC Premier League Match Schedules" data-sw="Msimu wa 2025/26 — Ratiba Rasmi ya Mechi za NBC Premier League">Season 2025/26 — Official NBC Premier League Match Schedules</span>
                </div>
              </div>
              <div style="display:flex; align-items:center; gap:0.75rem;">
                <span class="badge-pill" style="background:rgba(255,193,7,0.15); border:1px solid rgba(255,193,7,0.4); color:var(--primary-gold); font-weight:800; padding:0.35rem 0.85rem; border-radius:20px; font-size:0.75rem;" data-en="Official Match Center" data-sw="Kituo Rasmi cha Mechi">Official Match Center</span>
              </div>
            </div>

            <!-- Search Bar Input -->
            <div style="position:relative; width:100%; max-width:480px; margin-bottom:1.25rem;">
              <input type="text" id="fixtureSearchInput" placeholder="Search team or venue..." data-en-placeholder="Search team or venue..." data-sw-placeholder="Tafuta timu au uwanja..." style="width:100%; background:rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.12); color:#fff; padding:0.75rem 1rem 0.75rem 2.8rem; border-radius:22px; font-size:0.88rem; outline:none; transition:all 0.3s ease;">
              <i class="fa-solid fa-magnifying-glass" style="position:absolute; left:1.1rem; top:50%; transform:translateY(-50%); color:var(--text-muted); font-size:0.9rem;"></i>
            </div>

            <!-- Round Filter Pills Bar -->
            <div id="fixtureFilterContainer" style="display:flex; gap:0.6rem; overflow-x:auto; padding-bottom:0.4rem; scrollbar-width:thin;">
              <button class="pill-filter-btn active" data-filter="all" style="background:linear-gradient(135deg, #d97706, #ffd700); color:#000; font-size:0.78rem; font-weight:800; padding:0.45rem 1rem; border-radius:20px; border:none; cursor:pointer; white-space:nowrap; transition:all 0.3s ease;" data-en="All Rounds" data-sw="Rundi Zote">All Rounds</button>
              <button class="pill-filter-btn" data-filter="upcoming" style="background:rgba(255,255,255,0.06); color:#cbd5e1; font-size:0.78rem; font-weight:800; padding:0.45rem 1rem; border-radius:20px; border:1px solid rgba(255,255,255,0.1); cursor:pointer; white-space:nowrap; transition:all 0.3s ease;" data-en="Upcoming" data-sw="Zinazofuata">Upcoming</button>
              <button class="pill-filter-btn" data-filter="completed" style="background:rgba(255,255,255,0.06); color:#cbd5e1; font-size:0.78rem; font-weight:800; padding:0.45rem 1rem; border-radius:20px; border:1px solid rgba(255,255,255,0.1); cursor:pointer; white-space:nowrap; transition:all 0.3s ease;" data-en="Completed (FT)" data-sw="Zilizokwisha (FT)">Completed (FT)</button>
              <button class="pill-filter-btn" data-filter="rd1-5" style="background:rgba(255,255,255,0.06); color:#cbd5e1; font-size:0.78rem; font-weight:800; padding:0.45rem 1rem; border-radius:20px; border:1px solid rgba(255,255,255,0.1); cursor:pointer; white-space:nowrap; transition:all 0.3s ease;">Rd 1–5</button>
              <button class="pill-filter-btn" data-filter="rd6-10" style="background:rgba(255,255,255,0.06); color:#cbd5e1; font-size:0.78rem; font-weight:800; padding:0.45rem 1rem; border-radius:20px; border:1px solid rgba(255,255,255,0.1); cursor:pointer; white-space:nowrap; transition:all 0.3s ease;">Rd 6–10</button>
              <button class="pill-filter-btn" data-filter="rd11-15" style="background:rgba(255,255,255,0.06); color:#cbd5e1; font-size:0.78rem; font-weight:800; padding:0.45rem 1rem; border-radius:20px; border:1px solid rgba(255,255,255,0.1); cursor:pointer; white-space:nowrap; transition:all 0.3s ease;">Rd 11–15</button>
              <button class="pill-filter-btn" data-filter="rd16-20" style="background:rgba(255,255,255,0.06); color:#cbd5e1; font-size:0.78rem; font-weight:800; padding:0.45rem 1rem; border-radius:20px; border:1px solid rgba(255,255,255,0.1); cursor:pointer; white-space:nowrap; transition:all 0.3s ease;">Rd 16–20</button>
            </div>
          </div>

          <!-- Fixture Cards Stack (2-Column Small Horizontal Boxes) -->
          <div class="round-matches-2col-grid" style="display:grid; grid-template-columns:repeat(2, minmax(0, 1fr)); gap:0.65rem; width:100%; box-sizing:border-box;">
            <!-- Featured Kariakoo Derby Match Card -->
            <div class="fixture-card-item" data-round="rd17" data-status="upcoming" style="background:linear-gradient(145deg, rgba(30,10,15,0.95), rgba(12,5,15,0.98)); border:1.5px solid rgba(239, 68, 68, 0.5); border-radius:24px; padding:1.6rem; box-shadow:0 16px 40px rgba(239, 68, 68, 0.15); transition:all 0.35s ease;">
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1rem; border-bottom:1px solid rgba(255,255,255,0.08); padding-bottom:0.75rem;">
                <span class="badge-pill" style="background:rgba(239,68,68,0.25); color:#f87171; border:1px solid rgba(239,68,68,0.4); font-size:0.72rem; font-weight:900;" data-en="🔥 KARIAKOO DERBY" data-sw="🔥 DERBY YA KARIAKOO">🔥 KARIAKOO DERBY</span>
                <span style="font-size:0.8rem; color:var(--primary-gold); font-weight:800;" data-en="Round 17 • UPCOMING" data-sw="Rundi 17 • INAYOFUATA">Round 17 • UPCOMING</span>
              </div>
              <div style="display:grid; grid-template-columns:1fr auto 1fr; align-items:center; gap:1rem; text-align:center;">
                <div style="display:flex; flex-direction:column; align-items:center; gap:0.5rem;">
                  <img src="images/yanga.jpg" alt="Yanga SC" style="width:52px; height:52px; border-radius:50%; border:2px solid var(--primary-gold); object-fit:cover;">
                  <strong style="color:#fff; font-size:1.05rem;">Young Africans SC</strong>
                  <span style="font-size:0.75rem; color:var(--text-muted);" data-en="Home • 1st (75 pts)" data-sw="Nyumbani • Wa 1 (Punti 75)">Home • 1st (75 pts)</span>
                </div>
                <div style="background:rgba(239,68,68,0.15); border:1px solid rgba(239,68,68,0.4); padding:0.6rem 1.25rem; border-radius:18px; color:#f87171; font-family:var(--font-heading); font-size:1.3rem; font-weight:900;">VS</div>
                <div style="display:flex; flex-direction:column; align-items:center; gap:0.5rem;">
                  <img src="images/simba.jpg" alt="Simba SC" style="width:52px; height:52px; border-radius:50%; border:2px solid #ef4444; object-fit:cover;">
                  <strong style="color:#fff; font-size:1.05rem;">Simba SC</strong>
                  <span style="font-size:0.75rem; color:var(--text-muted);" data-en="Away • 2nd (73 pts)" data-sw="Ugenini • Wa 2 (Punti 73)">Away • 2nd (73 pts)</span>
                </div>
              </div>
              <div style="margin-top:1.25rem; text-align:center; font-size:0.8rem; color:var(--text-muted);" data-en="📍 Benjamin Mkapa Stadium • Dar es Salaam" data-sw="📍 Uwanja wa Benjamin Mkapa • Dar es Salaam">
                <i class="fa-solid fa-location-dot" style="color:var(--primary-gold);"></i> Benjamin Mkapa Stadium • Dar es Salaam
              </div>
            </div>

            <!-- FT Match 1: Azam vs Singida -->
            <div class="fixture-card-item" data-round="rd16" data-status="completed" style="background:linear-gradient(145deg, rgba(10, 24, 52, 0.95), rgba(5, 12, 30, 0.98)); border:1px solid rgba(255,255,255,0.08); border-radius:24px; padding:1.4rem; transition:all 0.35s ease;">
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.85rem; border-bottom:1px solid rgba(255,255,255,0.06); padding-bottom:0.6rem;">
                <span class="badge-pill" style="background:rgba(56,189,248,0.15); color:#38bdf8; border:1px solid rgba(56,189,248,0.3); font-size:0.7rem; font-weight:800;" data-en="Round 16 • FT" data-sw="Rundi 16 • FT">Round 16 • FT</span>
                <span style="font-size:0.78rem; color:var(--text-muted);">Azam Complex Chamazi</span>
              </div>
              <div style="display:grid; grid-template-columns:1fr auto 1fr; align-items:center; gap:1rem; text-align:center;">
                <div style="display:flex; align-items:center; gap:0.75rem; justify-content:flex-end;">
                  <strong style="color:#fff; font-size:1rem;">Azam FC</strong>
                  <img src="images/azam.jpg" style="width:36px; height:36px; border-radius:50%; object-fit:cover;">
                </div>
                <div style="background:rgba(255,193,7,0.15); border:1px solid rgba(255,193,7,0.4); padding:0.4rem 1rem; border-radius:14px; color:var(--primary-gold); font-family:var(--font-heading); font-size:1.15rem; font-weight:900;">2 — 2</div>
                <div style="display:flex; align-items:center; gap:0.75rem;">
                  <img src="images/singida.jpg" style="width:36px; height:36px; border-radius:50%; object-fit:cover;">
                  <strong style="color:#fff; font-size:1rem;">Singida Black Stars</strong>
                </div>
              </div>
            </div>

            <!-- FT Match 2: Yanga vs Coastal Union -->
            <div class="fixture-card-item" data-round="rd15" data-status="completed" style="background:linear-gradient(145deg, rgba(10, 24, 52, 0.95), rgba(5, 12, 30, 0.98)); border:1px solid rgba(255,255,255,0.08); border-radius:24px; padding:1.4rem; transition:all 0.35s ease;">
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.85rem; border-bottom:1px solid rgba(255,255,255,0.06); padding-bottom:0.6rem;">
                <span class="badge-pill" style="background:rgba(34,197,94,0.15); color:#4ade80; border:1px solid rgba(34,197,94,0.3); font-size:0.7rem; font-weight:800;" data-en="Round 15 • FT" data-sw="Rundi 15 • FT">Round 15 • FT</span>
                <span style="font-size:0.78rem; color:var(--text-muted);">Benjamin Mkapa Stadium</span>
              </div>
              <div style="display:grid; grid-template-columns:1fr auto 1fr; align-items:center; gap:1rem; text-align:center;">
                <div style="display:flex; align-items:center; gap:0.75rem; justify-content:flex-end;">
                  <strong style="color:#fff; font-size:1rem;">Young Africans SC</strong>
                  <img src="images/yanga.jpg" style="width:36px; height:36px; border-radius:50%; object-fit:cover;">
                </div>
                <div style="background:rgba(34,197,94,0.15); border:1px solid rgba(34,197,94,0.4); padding:0.4rem 1rem; border-radius:14px; color:#4ade80; font-family:var(--font-heading); font-size:1.15rem; font-weight:900;">3 — 0</div>
                <div style="display:flex; align-items:center; gap:0.75rem;">
                  <img src="images/coastal-union.jpg" style="width:36px; height:36px; border-radius:50%; object-fit:cover;">
                  <strong style="color:#fff; font-size:1rem;">Coastal Union</strong>
                </div>
              </div>
            </div>

            <!-- FT Match 3: Simba vs JKT Tanzania -->
            <div class="fixture-card-item" data-round="rd14" data-status="completed" style="background:linear-gradient(145deg, rgba(10, 24, 52, 0.95), rgba(5, 12, 30, 0.98)); border:1px solid rgba(255,255,255,0.08); border-radius:24px; padding:1.4rem; transition:all 0.35s ease;">
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.85rem; border-bottom:1px solid rgba(255,255,255,0.06); padding-bottom:0.6rem;">
                <span class="badge-pill" style="background:rgba(239,68,68,0.15); color:#f87171; border:1px solid rgba(239,68,68,0.3); font-size:0.7rem; font-weight:800;" data-en="Round 14 • FT" data-sw="Rundi 14 • FT">Round 14 • FT</span>
                <span style="font-size:0.78rem; color:var(--text-muted);">Uhuru Stadium • Dar es Salaam</span>
              </div>
              <div style="display:grid; grid-template-columns:1fr auto 1fr; align-items:center; gap:1rem; text-align:center;">
                <div style="display:flex; align-items:center; gap:0.75rem; justify-content:flex-end;">
                  <strong style="color:#fff; font-size:1rem;">Simba SC</strong>
                  <img src="images/simba.jpg" style="width:36px; height:36px; border-radius:50%; object-fit:cover;">
                </div>
                <div style="background:rgba(239,68,68,0.15); border:1px solid rgba(239,68,68,0.4); padding:0.4rem 1rem; border-radius:14px; color:#f87171; font-family:var(--font-heading); font-size:1.15rem; font-weight:900;">1 — 0</div>
                <div style="display:flex; align-items:center; gap:0.75rem;">
                  <img src="images/jkt-tanzania.jpg" style="width:36px; height:36px; border-radius:50%; object-fit:cover;">
                  <strong style="color:#fff; font-size:1rem;">JKT Tanzania</strong>
                </div>
              </div>
            </div>

            <!-- Upcoming Match: Singida vs Azam FC -->
            <div class="fixture-card-item" data-round="rd18" data-status="upcoming" style="background:linear-gradient(145deg, rgba(10, 24, 52, 0.95), rgba(5, 12, 30, 0.98)); border:1px solid rgba(255,255,255,0.08); border-radius:24px; padding:1.4rem; transition:all 0.35s ease;">
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.85rem; border-bottom:1px solid rgba(255,255,255,0.06); padding-bottom:0.6rem;">
                <span class="badge-pill" style="background:rgba(34,197,94,0.15); color:#4ade80; border:1px solid rgba(34,197,94,0.3); font-size:0.7rem; font-weight:800;" data-en="Round 18 • UPCOMING" data-sw="Rundi 18 • INAYOFUATA">Round 18 • UPCOMING</span>
                <span style="font-size:0.78rem; color:var(--text-muted);">Liti Stadium • Singida</span>
              </div>
              <div style="display:grid; grid-template-columns:1fr auto 1fr; align-items:center; gap:1rem; text-align:center;">
                <div style="display:flex; align-items:center; gap:0.75rem; justify-content:flex-end;">
                  <strong style="color:#fff; font-size:1rem;">Singida Black Stars</strong>
                  <img src="images/singida.jpg" style="width:36px; height:36px; border-radius:50%; object-fit:cover;">
                </div>
                <div style="background:rgba(255,255,255,0.08); border:1px solid rgba(255,255,255,0.15); padding:0.4rem 1rem; border-radius:14px; color:#cbd5e1; font-family:var(--font-heading); font-size:1rem; font-weight:800;">VS</div>
                <div style="display:flex; align-items:center; gap:0.75rem;">
                  <img src="images/azam.jpg" style="width:36px; height:36px; border-radius:50%; object-fit:cover;">
                  <strong style="color:#fff; font-size:1rem;">Azam FC</strong>
                </div>
              </div>
            </div>

          </div>

          <!-- Official Partners Infinite Marquee Bar -->
          <div class="partners-section" style="margin-top:3rem; background:rgba(10, 24, 52, 0.6); border:1px solid rgba(255,193,7,0.2); border-radius:24px; padding:1.5rem 1rem; overflow:hidden;">
            <div style="text-align:center; font-size:0.75rem; color:var(--primary-gold); font-weight:900; text-transform:uppercase; letter-spacing:1px; margin-bottom:1rem;" data-en="OFFICIAL SPONSORS & BROADCAST PARTNERS" data-sw="WADHAMINI RASMI NA WASHIRIKA WA MATANGAZO">OFFICIAL SPONSORS & BROADCAST PARTNERS</div>
            <div class="partners-slider-track" style="display:flex; align-items:center; gap:3.5rem; width:max-content; animation:scroll-partners 25s linear infinite;">
              <span style="color:#fff; font-family:var(--font-heading); font-weight:900; font-size:1.1rem; display:flex; align-items:center; gap:0.5rem;"><i class="fa-solid fa-building-columns" style="color:var(--primary-gold);"></i> NBC Bank Title Sponsor</span>
              <span style="color:#fff; font-family:var(--font-heading); font-weight:900; font-size:1.1rem; display:flex; align-items:center; gap:0.5rem;"><i class="fa-solid fa-shield-halved" style="color:#22c55e;"></i> TFF Federation</span>
              <span style="color:#fff; font-family:var(--font-heading); font-weight:900; font-size:1.1rem; display:flex; align-items:center; gap:0.5rem;"><i class="fa-solid fa-trophy" style="color:#38bdf8;"></i> CRDB Bank Federation Cup</span>
              <span style="color:#fff; font-family:var(--font-heading); font-weight:900; font-size:1.1rem; display:flex; align-items:center; gap:0.5rem;"><i class="fa-solid fa-tv" style="color:#e11d48;"></i> Azam TV Broadcast</span>
              <span style="color:#fff; font-family:var(--font-heading); font-weight:900; font-size:1.1rem; display:flex; align-items:center; gap:0.5rem;"><i class="fa-solid fa-futbol" style="color:var(--primary-gold);"></i> Official Match Ball</span>
              <span style="color:#fff; font-family:var(--font-heading); font-weight:900; font-size:1.1rem; display:flex; align-items:center; gap:0.5rem;"><i class="fa-solid fa-award" style="color:#a855f7;"></i> First Division League</span>
            </div>
          </div>
        </div>
      </div><!-- /tab-panel fixtures -->

      <!-- ================================================================
           TAB PANEL 3: TEAMS
           ================================================================ -->
      <div class="tab-panel" id="tab-teams">
        <div style="margin-bottom:2rem;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1.5rem; flex-wrap:wrap; gap:1rem;">
            <div>
              <h2 style="font-family:var(--font-heading); font-size:1.6rem; font-weight:900; color:#fff;" data-en="NBC Premier League Clubs" data-sw="Klabu za NBC Premier League">NBC Premier League Clubs</h2>
              <span style="font-size:0.85rem; color:var(--text-muted);" data-en="16 Elite Clubs Competing for Tanzanian Glory" data-sw="Klabu 16 za Juu Zinazoshindania Heshima ya Tanzania">16 Elite Clubs Competing for Tanzanian Glory</span>
            </div>
            <input type="text" placeholder="Search club name or city..." data-en-placeholder="Search club name or city..." data-sw-placeholder="Tafuta klabu au mji..." style="background:rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.12); color:#fff; padding:0.6rem 1.2rem; border-radius:20px; font-size:0.85rem; outline:none; width:100%; max-width:320px;">
          </div>

          <!-- 16 Clubs Grid -->
          <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(260px, 1fr)); gap:1.5rem;">
            
            <!-- 1. Yanga SC -->
            <div class="widget-glass-card" style="background:linear-gradient(145deg, rgba(16, 36, 20, 0.95), rgba(6, 20, 12, 0.98)); border:1.5px solid rgba(34, 197, 94, 0.5); border-radius:20px; padding:1.4rem; text-align:center; transition:all 0.3s ease;">
              <img src="images/yanga.jpg" style="width:64px; height:64px; border-radius:50%; border:2px solid var(--primary-gold); margin-bottom:0.75rem; object-fit:cover;">
              <h3 style="font-family:var(--font-heading); font-size:1.15rem; font-weight:900; color:#fff; margin:0;">Young Africans SC</h3>
              <span style="font-size:0.75rem; color:var(--primary-gold); font-weight:800;">Wananchi • 30 League Titles</span>
              <div style="margin:1rem 0; font-size:0.78rem; color:var(--text-muted);">Benjamin Mkapa Stadium • Dar es Salaam</div>
              <div style="background:rgba(34,197,94,0.15); color:#4ade80; padding:0.4rem; border-radius:12px; font-weight:800; font-size:0.8rem;">1st Position • 75 PTS</div>
            </div>

            <!-- 2. Simba SC -->
            <div class="widget-glass-card" style="background:linear-gradient(145deg, rgba(35, 10, 15, 0.95), rgba(15, 5, 10, 0.98)); border:1.5px solid rgba(239, 68, 68, 0.5); border-radius:20px; padding:1.4rem; text-align:center; transition:all 0.3s ease;">
              <img src="images/simba.jpg" style="width:64px; height:64px; border-radius:50%; border:2px solid #ef4444; margin-bottom:0.75rem; object-fit:cover;">
              <h3 style="font-family:var(--font-heading); font-size:1.15rem; font-weight:900; color:#fff; margin:0;">Simba SC</h3>
              <span style="font-size:0.75rem; color:#f87171; font-weight:800;">Msimbazi Reds • 22 League Titles</span>
              <div style="margin:1rem 0; font-size:0.78rem; color:var(--text-muted);">Benjamin Mkapa Stadium • Dar es Salaam</div>
              <div style="background:rgba(239,68,68,0.15); color:#f87171; padding:0.4rem; border-radius:12px; font-weight:800; font-size:0.8rem;">2nd Position • 73 PTS</div>
            </div>

            <!-- 3. Azam FC -->
            <div class="widget-glass-card" style="background:linear-gradient(145deg, rgba(10, 24, 52, 0.95), rgba(5, 12, 30, 0.98)); border:1.5px solid rgba(56, 189, 248, 0.5); border-radius:20px; padding:1.4rem; text-align:center; transition:all 0.3s ease;">
              <img src="images/azam.jpg" style="width:64px; height:64px; border-radius:50%; border:2px solid #38bdf8; margin-bottom:0.75rem; object-fit:cover;">
              <h3 style="font-family:var(--font-heading); font-size:1.15rem; font-weight:900; color:#fff; margin:0;">Azam FC</h3>
              <span style="font-size:0.75rem; color:#38bdf8; font-weight:800;">Ice Cream Makers • 1 League Title</span>
              <div style="margin:1rem 0; font-size:0.78rem; color:var(--text-muted);">Azam Complex Chamazi • Dar es Salaam</div>
              <div style="background:rgba(56,189,248,0.15); color:#38bdf8; padding:0.4rem; border-radius:12px; font-weight:800; font-size:0.8rem;">3rd Position • 64 PTS</div>
            </div>

            <!-- 4. Singida Black Stars -->
            <div class="widget-glass-card" style="background:linear-gradient(145deg, rgba(20, 20, 30, 0.95), rgba(10, 10, 20, 0.98)); border:1px solid rgba(255, 193, 7, 0.3); border-radius:20px; padding:1.4rem; text-align:center; transition:all 0.3s ease;">
              <img src="images/singida.jpg" style="width:64px; height:64px; border-radius:50%; border:2px solid var(--primary-gold); margin-bottom:0.75rem; object-fit:cover;">
              <h3 style="font-family:var(--font-heading); font-size:1.15rem; font-weight:900; color:#fff; margin:0;">Singida Black Stars</h3>
              <span style="font-size:0.75rem; color:var(--primary-gold); font-weight:800;">Liti Warriors</span>
              <div style="margin:1rem 0; font-size:0.78rem; color:var(--text-muted);">Liti Stadium • Singida</div>
              <div style="background:rgba(255,193,7,0.15); color:var(--primary-gold); padding:0.4rem; border-radius:12px; font-weight:800; font-size:0.8rem;">4th Position • 50 PTS</div>
            </div>

            <!-- 5. TRA United -->
            <div class="widget-glass-card" style="background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.08); border-radius:20px; padding:1.4rem; text-align:center;">
              <img src="images/tra-united.jpg" style="width:64px; height:64px; border-radius:50%; margin-bottom:0.75rem; object-fit:cover;">
              <h3 style="font-family:var(--font-heading); font-size:1.1rem; font-weight:900; color:#fff; margin:0;">TRA United</h3>
              <div style="margin:0.75rem 0; font-size:0.78rem; color:var(--text-muted);">Mkwakwani Stadium • Tanga</div>
              <div style="background:rgba(255,255,255,0.06); color:#cbd5e1; padding:0.4rem; border-radius:12px; font-size:0.8rem;">5th Position • 43 PTS</div>
            </div>

            <!-- 6. JKT Tanzania -->
            <div class="widget-glass-card" style="background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.08); border-radius:20px; padding:1.4rem; text-align:center;">
              <img src="images/jkt-tanzania.jpg" style="width:64px; height:64px; border-radius:50%; margin-bottom:0.75rem; object-fit:cover;">
              <h3 style="font-family:var(--font-heading); font-size:1.1rem; font-weight:900; color:#fff; margin:0;">JKT Tanzania</h3>
              <div style="margin:0.75rem 0; font-size:0.78rem; color:var(--text-muted);">Major General Isamuhyo Stadium • Dodoma</div>
              <div style="background:rgba(255,255,255,0.06); color:#cbd5e1; padding:0.4rem; border-radius:12px; font-size:0.8rem;">6th Position • 42 PTS</div>
            </div>

            <!-- 7. Pamba Jiji -->
            <div class="widget-glass-card" style="background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.08); border-radius:20px; padding:1.4rem; text-align:center;">
              <img src="images/pamba-jiji.jpg" style="width:64px; height:64px; border-radius:50%; margin-bottom:0.75rem; object-fit:cover;">
              <h3 style="font-family:var(--font-heading); font-size:1.1rem; font-weight:900; color:#fff; margin:0;">Pamba Jiji</h3>
              <div style="margin:0.75rem 0; font-size:0.78rem; color:var(--text-muted);">CCM Kirumba Stadium • Mwanza</div>
              <div style="background:rgba(255,255,255,0.06); color:#cbd5e1; padding:0.4rem; border-radius:12px; font-size:0.8rem;">7th Position • 36 PTS</div>
            </div>

            <!-- 8. Coastal Union -->
            <div class="widget-glass-card" style="background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.08); border-radius:20px; padding:1.4rem; text-align:center;">
              <img src="images/coastal-union.jpg" style="width:64px; height:64px; border-radius:50%; margin-bottom:0.75rem; object-fit:cover;">
              <h3 style="font-family:var(--font-heading); font-size:1.1rem; font-weight:900; color:#fff; margin:0;">Coastal Union</h3>
              <div style="margin:0.75rem 0; font-size:0.78rem; color:var(--text-muted);">Mkwakwani Stadium • Tanga</div>
              <div style="background:rgba(255,255,255,0.06); color:#cbd5e1; padding:0.4rem; border-radius:12px; font-size:0.8rem;">8th Position • 36 PTS</div>
            </div>

          </div>
        </div>
      </div><!-- /tab-panel teams -->

      <!-- ================================================================
           TAB PANEL 4: TRANSFERS
           ================================================================ -->
      <div class="tab-panel" id="tab-transfers">
        <div style="margin-bottom:2rem;">
          <div style="background:linear-gradient(145deg, rgba(10, 24, 52, 0.95), rgba(5, 12, 30, 0.98)); border:1px solid rgba(255, 193, 7, 0.3); border-radius:24px; padding:1.75rem; box-shadow:0 16px 45px rgba(0,0,0,0.65);">
            <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid rgba(255,255,255,0.08); padding-bottom:1rem; margin-bottom:1.5rem; flex-wrap:wrap; gap:1rem;">
              <div>
                <h2 style="font-family:var(--font-heading); font-size:1.5rem; font-weight:900; color:#fff; margin:0;" data-en="2025/26 Official Transfer Window" data-sw="Dirisha Rasmi la Usajili 2025/26">2025/26 Official Transfer Window</h2>
                <span style="font-size:0.8rem; color:var(--text-muted);" data-en="All confirmed deals, contract renewals, and player movements in Tanzanian football." data-sw="Usajili wote uliothibitishwa, mkataba upya, na uhamisho wa wachezaji.">All confirmed deals, contract renewals, and player movements in Tanzanian football.</span>
              </div>
              <span class="badge-pill" style="background:rgba(34,197,94,0.15); border:1px solid rgba(34,197,94,0.4); color:#4ade80; font-weight:800; padding:0.4rem 1rem; border-radius:20px; font-size:0.78rem;" data-en="WINDOW OPEN" data-sw="DIRISHA WAZI">WINDOW OPEN</span>
            </div>

            <!-- Transfer Items List -->
            <div style="display:flex; flex-direction:column; gap:1rem;">
              
              <!-- Deal 1: Stephane Aziz Ki -->
              <div style="display:grid; grid-template-columns:auto 1fr auto; align-items:center; gap:1.2rem; background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.08); padding:1rem 1.25rem; border-radius:18px;">
                <img src="images/stephane-aziz-ki.png" style="width:50px; height:50px; border-radius:50%; border:2px solid var(--primary-gold); object-fit:cover;">
                <div>
                  <strong style="color:#fff; font-size:1.05rem; display:block;">Stephane Aziz Ki</strong>
                  <span style="font-size:0.78rem; color:var(--primary-gold); font-weight:700;">Young Africans SC ➔ Contract Extension (3 Years)</span>
                </div>
                <div style="text-align:right;">
                  <span style="background:rgba(255,193,7,0.15); color:var(--primary-gold); border:1px solid rgba(255,193,7,0.4); font-size:0.75rem; font-weight:800; padding:0.3rem 0.75rem; border-radius:14px;">RENEWAL</span>
                </div>
              </div>

              <!-- Deal 2: Jean Ahoua -->
              <div style="display:grid; grid-template-columns:auto 1fr auto; align-items:center; gap:1.2rem; background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.08); padding:1rem 1.25rem; border-radius:18px;">
                <img src="images/jean-ahoua.png" style="width:50px; height:50px; border-radius:50%; border:2px solid #ef4444; object-fit:cover;">
                <div>
                  <strong style="color:#fff; font-size:1.05rem; display:block;">Jean Ahoua</strong>
                  <span style="font-size:0.78rem; color:#f87171; font-weight:700;">ASEC Mimosas ➔ Simba SC</span>
                </div>
                <div style="text-align:right;">
                  <span style="background:rgba(239,68,68,0.15); color:#f87171; border:1px solid rgba(239,68,68,0.4); font-size:0.75rem; font-weight:800; padding:0.3rem 0.75rem; border-radius:14px;">CONFIRMED</span>
                </div>
              </div>

              <!-- Deal 3: Feisal Salum -->
              <div style="display:grid; grid-template-columns:auto 1fr auto; align-items:center; gap:1.2rem; background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.08); padding:1rem 1.25rem; border-radius:18px;">
                <img src="images/feisal-salum.jpg" style="width:50px; height:50px; border-radius:50%; border:2px solid #38bdf8; object-fit:cover;">
                <div>
                  <strong style="color:#fff; font-size:1.05rem; display:block;">Feisal Salum (Fei Toto)</strong>
                  <span style="font-size:0.78rem; color:#38bdf8; font-weight:700;">Azam FC ➔ Key Playmaker Renewal</span>
                </div>
                <div style="text-align:right;">
                  <span style="background:rgba(56,189,248,0.15); color:#38bdf8; border:1px solid rgba(56,189,248,0.4); font-size:0.75rem; font-weight:800; padding:0.3rem 0.75rem; border-radius:14px;">RENEWAL</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div><!-- /tab-panel transfers -->

      <!-- ================================================================
           TAB PANEL 5: SEASON HISTORY
           ================================================================ -->
      <div class="tab-panel" id="tab-history">
        <div style="margin-bottom:2rem;">
          <div style="background:linear-gradient(145deg, rgba(10, 24, 52, 0.95), rgba(5, 12, 30, 0.98)); border:1px solid rgba(255, 193, 7, 0.3); border-radius:24px; padding:1.75rem; box-shadow:0 16px 45px rgba(0,0,0,0.65);">
            <h2 style="font-family:var(--font-heading); font-size:1.5rem; font-weight:900; color:#fff; margin-bottom:1.25rem;" data-en="NBC Premier League Roll of Honor" data-sw="Orodha ya Mabingwa wa NBC Premier League">NBC Premier League Roll of Honor</h2>
            <div class="league-table-wrap">
              <table class="league-table">
                <thead>
                  <tr>
                    <th data-en="Season" data-sw="Msimu">Season</th>
                    <th data-en="Champion" data-sw="Bingwa">Champion</th>
                    <th data-en="Runner-up" data-sw="Mshindi wa Pili">Runner-up</th>
                    <th data-en="Top Scorer" data-sw="Mfungaji Bora">Top Scorer</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>2024/25</strong></td>
                    <td style="color:var(--primary-gold); font-weight:800;">Young Africans SC</td>
                    <td>Simba SC</td>
                    <td>Stephane Aziz Ki (21 Goals)</td>
                  </tr>
                  <tr>
                    <td><strong>2023/24</strong></td>
                    <td style="color:var(--primary-gold); font-weight:800;">Young Africans SC</td>
                    <td>Azam FC</td>
                    <td>Stephane Aziz Ki (21 Goals)</td>
                  </tr>
                  <tr>
                    <td><strong>2022/23</strong></td>
                    <td style="color:var(--primary-gold); font-weight:800;">Young Africans SC</td>
                    <td>Simba SC</td>
                    <td>Fiston Mayele (17 Goals)</td>
                  </tr>
                  <tr>
                    <td><strong>2021/22</strong></td>
                    <td style="color:var(--primary-gold); font-weight:800;">Young Africans SC</td>
                    <td>Simba SC</td>
                    <td>George Mpole (17 Goals)</td>
                  </tr>
                  <tr>
                    <td><strong>2020/21</strong></td>
                    <td style="color:#f87171; font-weight:800;">Simba SC</td>
                    <td>Young Africans SC</td>
                    <td>John Bocco (16 Goals)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div><!-- /tab-panel history -->

      <!-- ================================================================
           TAB PANEL 6: NEWS & MEDIA
           ================================================================ -->
      <div class="tab-panel" id="tab-news">
        <div style="margin-bottom:2rem;">
          <h2 style="font-family:var(--font-heading); font-size:1.6rem; font-weight:900; color:#fff; margin-bottom:1.5rem;" data-en="NBC Premier League News & Media" data-sw="Habari na Vyombo vya Habari vya NBC Premier League">NBC Premier League News & Media</h2>
          
          <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(300px, 1fr)); gap:1.5rem;">
            
            <!-- Article 1 -->
            <div class="widget-glass-card" style="background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.08); border-radius:20px; overflow:hidden;">
              <img src="images/kariakoo-derby-banner.png" style="width:100%; height:180px; object-fit:cover;">
              <div style="padding:1.25rem;">
                <span class="badge-pill" style="background:rgba(239,68,68,0.2); color:#f87171; font-size:0.7rem; font-weight:800;">MATCH PREVIEW</span>
                <h3 style="font-size:1.05rem; font-weight:800; color:#fff; margin:0.6rem 0 0.4rem;">Kariakoo Derby: Full Match Preview — Yanga SC vs Simba SC</h3>
                <p style="font-size:0.8rem; color:var(--text-muted); line-height:1.4;">Everything you need to know before the biggest match of the 2025/26 season at Benjamin Mkapa Stadium.</p>
                <a href="#" class="section-link" style="font-size:0.8rem;" data-en="Read Article →" data-sw="Soma Makala →">Read Article →</a>
              </div>
            </div>

            <!-- Article 2 -->
            <div class="widget-glass-card" style="background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.08); border-radius:20px; overflow:hidden;">
              <img src="images/clement-mzize.png" style="width:100%; height:180px; object-fit:cover;">
              <div style="padding:1.25rem;">
                <span class="badge-pill" style="background:rgba(34,197,94,0.2); color:#4ade80; font-size:0.7rem; font-weight:800;">PLAYER SPOTLIGHT</span>
                <h3 style="font-size:1.05rem; font-weight:800; color:#fff; margin:0.6rem 0 0.4rem;">Clement Mzize Fires Yanga To Matchday Victory</h3>
                <p style="font-size:0.8rem; color:var(--text-muted); line-height:1.4;">Stunning striking form keeps Young Africans clear at the top of the NBC Premier League table.</p>
                <a href="#" class="section-link" style="font-size:0.8rem;" data-en="Read Article →" data-sw="Soma Makala →">Read Article →</a>
              </div>
            </div>

          </div>
        </div>
      </div><!-- /tab-panel news -->
`;

// Insert the 5 tab panels right inside <main class="league-dashboard-sec"> right after #tab-overview closes!
const searchAnchor = '</div>\n\n      \n    </div>\n  </main>';
const searchAnchor2 = '</main>';

if (html.includes(searchAnchor)) {
  html = html.replace(searchAnchor, tabFixturesHTML + '\n    </div>\n  </main>');
  fs.writeFileSync('nbc-premier-league.html', html, 'utf8');
  console.log('Successfully appended all 5 missing tab panels (#tab-fixtures, #tab-teams, #tab-transfers, #tab-history, #tab-news) to nbc-premier-league.html!');
} else {
  // Append before </main>
  const mainCloseIndex = html.lastIndexOf('</main>');
  if (mainCloseIndex !== -1) {
    html = html.substring(0, mainCloseIndex) + tabFixturesHTML + '\n    </div>\n  </main>' + html.substring(mainCloseIndex + 7);
    fs.writeFileSync('nbc-premier-league.html', html, 'utf8');
    console.log('Appended tab panels before </main> successfully!');
  }
}
