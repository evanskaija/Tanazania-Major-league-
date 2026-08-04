// ==========================================================================
// NBC PREMIER LEAGUE — UEFA/AWWWARDS-LEVEL GSAP & LENIS SCROLL ANIMATION SUITE
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {

  // -------------------------------------------------------------
  // LIGHTWEIGHT NATIVE 60FPS SMOOTH SCROLLING ENGINE
  // -------------------------------------------------------------

  // -------------------------------------------------------------
  // 15. VERTICAL RIGHT SCROLL PROGRESS BAR & CUSTOM CURSOR
  // -------------------------------------------------------------
  const progressBar = document.getElementById('scroll-progress-bar');
  const customCursor = document.getElementById('custom-cursor');

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    if (progressBar) {
      progressBar.style.height = `${Math.min(100, Math.max(0, scrollPercent))}%`;
    }
  });

  // -------------------------------------------------------------
  // NBC PREMIER LEAGUE DASHBOARD INTERACTIVE HANDLERS
  // -------------------------------------------------------------
  // 1. Table Search Filter
  const searchInput = document.getElementById('tableSearchInput');
  const standingsTable = document.getElementById('standingsTable');
  if (searchInput && standingsTable) {
    searchInput.addEventListener('input', (e) => {
      const term = e.target.value.toLowerCase();
      const rows = standingsTable.querySelectorAll('tbody tr');
      rows.forEach(row => {
        const teamText = row.textContent.toLowerCase();
        row.style.display = teamText.includes(term) ? '' : 'none';
      });
    });
  }

  // -------------------------------------------------------------
  // 2. INTERACTIVE MATCH ROUNDS SELECTOR & FIXTURE ENGINE (ROUNDS 1 - 30)


  // Database of NBC Premier League Teams
  const nbcTeams = {
    yanga: { name: 'Young Africans', crest: 'images/yanga.jpg', stadium: 'Benjamin Mkapa Stadium • Dar es Salaam' },
    simba: { name: 'Simba SC', crest: 'images/simba.jpg', stadium: 'Benjamin Mkapa Stadium • Dar es Salaam' },
    azam: { name: 'Azam FC', crest: 'images/azam.jpg', stadium: 'Azam Complex • Chamazi, Dar es Salaam' },
    singida: { name: 'Singida BS', crest: 'images/singida.jpg', stadium: 'Liti Stadium • Singida' },
    tra: { name: 'TRA United', crest: 'images/tra-united.jpg', stadium: 'Jamhuri Stadium • Dodoma' },
    jkt: { name: 'JKT Tanzania', crest: 'images/jkt-tanzania.jpg', stadium: 'Major Gen. Isamuhyo Stadium • Dar es Salaam' },
    pamba: { name: 'Pamba Jiji', crest: 'images/pamba-jiji.jpg', stadium: 'CCM Kirumba Stadium • Mwanza' },
    coastal: { name: 'Coastal Union', crest: 'images/costal-union.jpg', stadium: 'Mkwakwani Stadium • Tanga' },
    dodoma: { name: 'Dodoma Jiji', crest: 'images/dodoma-jiji.jpg', stadium: 'Jamhuri Stadium • Dodoma' },
    namungo: { name: 'Namungo FC', crest: 'images/namungo-fc.jpg', stadium: 'Majaliwa Stadium • Ruangwa' },
    mashujaa: { name: 'Mashujaa FC', crest: 'images/mashujaa-fc.jpg', stadium: 'Lake Tanganyika Stadium • Kigoma' },
    fountain: { name: 'Fountain Gate', crest: 'images/fauntaingate.jpg', stadium: 'Tanzanite Kwaraa Stadium • Manyara' },
    prisons: { name: 'Tanzania Prisons', crest: 'images/tanzania-prison.jpg', stadium: 'Sokoine Stadium • Mbeya' },
    mbeya: { name: 'Mbeya City', crest: 'images/mbeya-city.jpg', stadium: 'Sokoine Stadium • Mbeya' },
    mtibwa: { name: 'Mtibwa Sugar', crest: 'images/mtibwa-suger.jpg', stadium: 'Manungu Stadium • Turiani' },
    kmc: { name: 'KMC FC', crest: 'images/kmc.jpg', stadium: 'KMC Complex • Mwenge, Dar es Salaam' }
  };

  // Pre-configured authentic match pairings for all 30 rounds
  const roundsData = {
    1: [
      { home: nbcTeams.yanga, away: nbcTeams.kmc, score: '5 - 0', status: 'FT', date: 'Sat, 15 Aug 2025' },
      { home: nbcTeams.simba, away: nbcTeams.mtibwa, score: '3 - 0', status: 'FT', date: 'Sun, 16 Aug 2025' },
      { home: nbcTeams.azam, away: nbcTeams.tanzania, score: '2 - 1', status: 'FT', date: 'Sun, 16 Aug 2025' },
      { home: nbcTeams.singida, away: nbcTeams.coastal, score: '1 - 0', status: 'FT', date: 'Mon, 17 Aug 2025' }
    ],
    2: [
      { home: nbcTeams.tra, away: nbcTeams.yanga, score: '0 - 2', status: 'FT', date: 'Fri, 22 Aug 2025' },
      { home: nbcTeams.dodoma, away: nbcTeams.simba, score: '1 - 2', status: 'FT', date: 'Sat, 23 Aug 2025' },
      { home: nbcTeams.namungo, away: nbcTeams.azam, score: '0 - 1', status: 'FT', date: 'Sat, 23 Aug 2025' },
      { home: nbcTeams.pamba, away: nbcTeams.jkt, score: '1 - 1', status: 'FT', date: 'Sun, 24 Aug 2025' }
    ],
    3: [
      { home: nbcTeams.yanga, away: nbcTeams.jkt, score: '1 - 1', status: 'FT', date: 'Sat, 12 Sep 2025' },
      { home: nbcTeams.simba, away: nbcTeams.singida, score: '2 - 1', status: 'FT', date: 'Sat, 12 Sep 2025' },
      { home: nbcTeams.mashujaa, away: nbcTeams.fountain, score: '1 - 0', status: 'FT', date: 'Sun, 13 Sep 2025' },
      { home: nbcTeams.prisons, away: nbcTeams.mbeya, score: '0 - 0', status: 'FT', date: 'Sun, 13 Sep 2025' }
    ],
    4: [
      { home: nbcTeams.azam, away: nbcTeams.simba, score: '0 - 0', status: 'FT', date: 'Fri, 18 Sep 2025' },
      { home: nbcTeams.kmc, away: nbcTeams.yanga, score: '0 - 3', status: 'FT', date: 'Sat, 19 Sep 2025' },
      { home: nbcTeams.coastal, away: nbcTeams.mtibwa, score: '2 - 0', status: 'FT', date: 'Sun, 20 Sep 2025' }
    ],
    5: [
      { home: nbcTeams.yanga, away: nbcTeams.prisons, score: '2 - 0', status: 'FT', date: 'Sat, 26 Sep 2025' },
      { home: nbcTeams.simba, away: nbcTeams.kmc, score: '1 - 0', status: 'FT', date: 'Sun, 27 Sep 2025' },
      { home: nbcTeams.pamba, away: nbcTeams.tra, score: '2 - 1', status: 'FT', date: 'Sun, 27 Sep 2025' }
    ],
    6: [
      { home: nbcTeams.singida, away: nbcTeams.yanga, score: '0 - 1', status: 'FT', date: 'Sat, 03 Oct 2025' },
      { home: nbcTeams.azam, away: nbcTeams.dodoma, score: '3 - 1', status: 'FT', date: 'Sun, 04 Oct 2025' },
      { home: nbcTeams.mashujaa, away: nbcTeams.namungo, score: '1 - 1', status: 'FT', date: 'Sun, 04 Oct 2025' }
    ],
    7: [
      { home: nbcTeams.simba, away: nbcTeams.pamba, score: '4 - 0', status: 'FT', date: 'Fri, 16 Oct 2025' },
      { home: nbcTeams.yanga, away: nbcTeams.mashujaa, score: '3 - 1', status: 'FT', date: 'Sat, 17 Oct 2025' },
      { home: nbcTeams.fountain, away: nbcTeams.coastal, score: '0 - 2', status: 'FT', date: 'Sun, 18 Oct 2025' }
    ],
    8: [
      { home: nbcTeams.jkt, away: nbcTeams.simba, score: '0 - 1', status: 'FT', date: 'Sat, 24 Oct 2025' },
      { home: nbcTeams.mtibwa, away: nbcTeams.yanga, score: '0 - 2', status: 'FT', date: 'Sat, 24 Oct 2025' },
      { home: nbcTeams.azam, away: nbcTeams.tra, score: '2 - 0', status: 'FT', date: 'Sun, 25 Oct 2025' }
    ],
    9: [
      { home: nbcTeams.yanga, away: nbcTeams.coastal, score: '3 - 0', status: 'FT', date: 'Wed, 28 Oct 2025' },
      { home: nbcTeams.simba, away: nbcTeams.tabora || nbcTeams.tra, score: '3 - 1', status: 'FT', date: 'Thu, 29 Oct 2025' },
      { home: nbcTeams.mbeya, away: nbcTeams.kmc, score: '2 - 1', status: 'FT', date: 'Thu, 29 Oct 2025' }
    ],
    10: [
      { home: nbcTeams.azam, away: nbcTeams.yanga, score: '1 - 2', status: 'FT', date: 'Sat, 07 Nov 2025' },
      { home: nbcTeams.namungo, away: nbcTeams.simba, score: '0 - 2', status: 'FT', date: 'Sun, 08 Nov 2025' },
      { home: nbcTeams.singida, away: nbcTeams.prisons, score: '3 - 1', status: 'FT', date: 'Sun, 08 Nov 2025' }
    ],
    11: [
      { home: nbcTeams.simba, away: nbcTeams.mashujaa, score: '2 - 0', status: 'FT', date: 'Sat, 21 Nov 2025' },
      { home: nbcTeams.yanga, away: nbcTeams.pamba, score: '4 - 0', status: 'FT', date: 'Sun, 22 Nov 2025' },
      { home: nbcTeams.dodoma, away: nbcTeams.azam, score: '0 - 2', status: 'FT', date: 'Sun, 22 Nov 2025' }
    ],
    12: [
      { home: nbcTeams.prisons, away: nbcTeams.simba, score: '0 - 1', status: 'FT', date: 'Sat, 05 Dec 2025' },
      { home: nbcTeams.fountain, away: nbcTeams.yanga, score: '0 - 4', status: 'FT', date: 'Sun, 06 Dec 2025' },
      { home: nbcTeams.coastal, away: nbcTeams.azam, score: '1 - 1', status: 'FT', date: 'Sun, 06 Dec 2025' }
    ],
    13: [
      { home: nbcTeams.yanga, away: nbcTeams.singida, score: '2 - 0', status: 'FT', date: 'Sat, 19 Dec 2025' },
      { home: nbcTeams.simba, away: nbcTeams.tra, score: '3 - 0', status: 'FT', date: 'Sun, 20 Dec 2025' },
      { home: nbcTeams.kmc, away: nbcTeams.mtibwa, score: '1 - 0', status: 'FT', date: 'Sun, 20 Dec 2025' }
    ],
    14: [
      { home: nbcTeams.azam, away: nbcTeams.singida, score: '2 - 1', status: 'FT', date: 'Sat, 09 Jan 2026' },
      { home: nbcTeams.mbeya, away: nbcTeams.yanga, score: '0 - 3', status: 'FT', date: 'Sun, 10 Jan 2026' },
      { home: nbcTeams.jkt, away: nbcTeams.simba, score: '0 - 2', status: 'FT', date: 'Sun, 10 Jan 2026' }
    ],
    15: [
      { home: nbcTeams.yanga, away: nbcTeams.namungo, score: '1 - 0', status: 'FT', date: 'Sat, 23 Jan 2026' },
      { home: nbcTeams.simba, away: nbcTeams.coastal, score: '2 - 0', status: 'FT', date: 'Sun, 24 Jan 2026' },
      { home: nbcTeams.pamba, away: nbcTeams.azam, score: '0 - 2', status: 'FT', date: 'Sun, 24 Jan 2026' }
    ],
    16: [
      { home: nbcTeams.simba, away: nbcTeams.fountain, score: '4 - 1', status: 'FT', date: 'Sat, 06 Feb 2026' },
      { home: nbcTeams.yanga, away: nbcTeams.dodoma, score: '2 - 0', status: 'FT', date: 'Sun, 07 Feb 2026' },
      { home: nbcTeams.azam, away: nbcTeams.kmc, score: '3 - 0', status: 'FT', date: 'Sun, 07 Feb 2026' }
    ],
    17: [
      { home: nbcTeams.yanga, away: nbcTeams.simba, score: '2 - 1', status: 'FT', date: 'Sun, 15 Feb 2026' },
      { home: nbcTeams.azam, away: nbcTeams.singida, score: '1 - 0', status: 'FT', date: 'Sat, 14 Feb 2026' },
      { home: nbcTeams.coastal, away: nbcTeams.jkt, score: '1 - 1', status: 'FT', date: 'Sun, 15 Feb 2026' },
      { home: nbcTeams.prisons, away: nbcTeams.mashujaa, score: '2 - 0', status: 'FT', date: 'Mon, 16 Feb 2026' }
    ],
    18: [
      { home: nbcTeams.kmc, away: nbcTeams.simba, score: '0 - 2', status: 'LIVE 78\'', date: 'Today, 16:00 EAT' },
      { home: nbcTeams.yanga, away: nbcTeams.tra, score: 'VS', status: '19:00 EAT', date: 'Today, 19:00 EAT' },
      { home: nbcTeams.singida, away: nbcTeams.azam, score: 'VS', status: 'UPCOMING', date: 'Tomorrow, 16:00 EAT' },
      { home: nbcTeams.dodoma, away: nbcTeams.pamba, score: 'VS', status: 'UPCOMING', date: 'Tomorrow, 19:00 EAT' }
    ],
    19: [
      { home: nbcTeams.simba, away: nbcTeams.yanga, score: 'VS', status: 'UPCOMING', date: 'Sat, 28 Feb 2026' },
      { home: nbcTeams.azam, away: nbcTeams.coastal, score: 'VS', status: 'UPCOMING', date: 'Sun, 01 Mar 2026' },
      { home: nbcTeams.jkt, away: nbcTeams.prisons, score: 'VS', status: 'UPCOMING', date: 'Sun, 01 Mar 2026' }
    ],
    20: [
      { home: nbcTeams.yanga, away: nbcTeams.azam, score: 'VS', status: 'UPCOMING', date: 'Sat, 07 Mar 2026' },
      { home: nbcTeams.simba, away: nbcTeams.singida, score: 'VS', status: 'UPCOMING', date: 'Sun, 08 Mar 2026' },
      { home: nbcTeams.mashujaa, away: nbcTeams.kmc, score: 'VS', status: 'UPCOMING', date: 'Sun, 08 Mar 2026' }
    ],
    21: [
      { home: nbcTeams.coastal, away: nbcTeams.yanga, score: 'VS', status: 'UPCOMING', date: 'Sat, 14 Mar 2026' },
      { home: nbcTeams.mtibwa, away: nbcTeams.simba, score: 'VS', status: 'UPCOMING', date: 'Sun, 15 Mar 2026' },
      { home: nbcTeams.namungo, away: nbcTeams.azam, score: 'VS', status: 'UPCOMING', date: 'Sun, 15 Mar 2026' }
    ],
    22: [
      { home: nbcTeams.yanga, away: nbcTeams.fountain, score: 'VS', status: 'UPCOMING', date: 'Sat, 21 Mar 2026' },
      { home: nbcTeams.simba, away: nbcTeams.dodoma, score: 'VS', status: 'UPCOMING', date: 'Sun, 22 Mar 2026' },
      { home: nbcTeams.azam, away: nbcTeams.mbeya, score: 'VS', status: 'UPCOMING', date: 'Sun, 22 Mar 2026' }
    ],
    23: [
      { home: nbcTeams.pamba, away: nbcTeams.yanga, score: 'VS', status: 'UPCOMING', date: 'Sat, 04 Apr 2026' },
      { home: nbcTeams.singida, away: nbcTeams.simba, score: 'VS', status: 'UPCOMING', date: 'Sun, 05 Apr 2026' },
      { home: nbcTeams.kmc, away: nbcTeams.azam, score: 'VS', status: 'UPCOMING', date: 'Sun, 05 Apr 2026' }
    ],
    24: [
      { home: nbcTeams.yanga, away: nbcTeams.prisons, score: 'VS', status: 'UPCOMING', date: 'Sat, 11 Apr 2026' },
      { home: nbcTeams.simba, away: nbcTeams.jkt, score: 'VS', status: 'UPCOMING', date: 'Sun, 12 Apr 2026' },
      { home: nbcTeams.tra, away: nbcTeams.azam, score: 'VS', status: 'UPCOMING', date: 'Sun, 12 Apr 2026' }
    ],
    25: [
      { home: nbcTeams.mashujaa, away: nbcTeams.yanga, score: 'VS', status: 'UPCOMING', date: 'Sat, 18 Apr 2026' },
      { home: nbcTeams.simba, away: nbcTeams.namungo, score: 'VS', status: 'UPCOMING', date: 'Sun, 19 Apr 2026' },
      { home: nbcTeams.azam, away: nbcTeams.mtibwa, score: 'VS', status: 'UPCOMING', date: 'Sun, 19 Apr 2026' }
    ],
    26: [
      { home: nbcTeams.yanga, away: nbcTeams.singida, score: 'VS', status: 'UPCOMING', date: 'Sat, 25 Apr 2026' },
      { home: nbcTeams.prisons, away: nbcTeams.simba, score: 'VS', status: 'UPCOMING', date: 'Sun, 26 Apr 2026' },
      { home: nbcTeams.coastal, away: nbcTeams.azam, score: 'VS', status: 'UPCOMING', date: 'Sun, 26 Apr 2026' }
    ],
    27: [
      { home: nbcTeams.jkt, away: nbcTeams.yanga, score: 'VS', status: 'UPCOMING', date: 'Sat, 02 May 2026' },
      { home: nbcTeams.simba, away: nbcTeams.mbeya, score: 'VS', status: 'UPCOMING', date: 'Sun, 03 May 2026' },
      { home: nbcTeams.azam, away: nbcTeams.mashujaa, score: 'VS', status: 'UPCOMING', date: 'Sun, 03 May 2026' }
    ],
    28: [
      { home: nbcTeams.yanga, away: nbcTeams.dodoma, score: 'VS', status: 'UPCOMING', date: 'Sat, 09 May 2026' },
      { home: nbcTeams.fountain, away: nbcTeams.simba, score: 'VS', status: 'UPCOMING', date: 'Sun, 10 May 2026' },
      { home: nbcTeams.singida, away: nbcTeams.azam, score: 'VS', status: 'UPCOMING', date: 'Sun, 10 May 2026' }
    ],
    29: [
      { home: nbcTeams.simba, away: nbcTeams.coastal, score: 'VS', status: 'UPCOMING', date: 'Sat, 16 May 2026' },
      { home: nbcTeams.namungo, away: nbcTeams.yanga, score: 'VS', status: 'UPCOMING', date: 'Sun, 17 May 2026' },
      { home: nbcTeams.azam, away: nbcTeams.tra, score: 'VS', status: 'UPCOMING', date: 'Sun, 17 May 2026' }
    ],
    30: [
      { home: nbcTeams.yanga, away: nbcTeams.azam, score: 'VS', status: 'FINAL DAY', date: 'Sun, 24 May 2026' },
      { home: nbcTeams.simba, away: nbcTeams.singida, score: 'VS', status: 'FINAL DAY', date: 'Sun, 24 May 2026' },
      { home: nbcTeams.kmc, away: nbcTeams.jkt, score: 'VS', status: 'FINAL DAY', date: 'Sun, 24 May 2026' },
      { home: nbcTeams.pamba, away: nbcTeams.coastal, score: 'VS', status: 'FINAL DAY', date: 'Sun, 24 May 2026' }
    ]
  };

  // -------------------------------------------------------------
  // 2. INTERACTIVE MATCH ROUNDS SELECTOR & FIXTURE ENGINE (ROUNDS 1 - 30)
  // -------------------------------------------------------------
  const roundPills = document.querySelectorAll('.round-pill-btn');
  
  function getSelectedRoundVal() {
    return document.getElementById('selectedRoundVal') || document.getElementById('tclSelectedRoundVal') || document.getElementById('fdlSelectedRoundVal') || document.getElementById('eflSelectedRoundVal') || document.getElementById('wplSelectedRoundVal');
  }

  function getRoundMatchesContainer() {
    return document.getElementById('roundMatchesDisplayContainer') || document.getElementById('tclRoundMatchesDisplayContainer') || document.getElementById('fdlRoundMatchesDisplayContainer') || document.getElementById('eflRoundMatchesDisplayContainer') || document.getElementById('wplRoundMatchesDisplayContainer');
  }

  function renderRoundMatches(roundNum) {
    const targetContainer = getRoundMatchesContainer();
    const targetDisplay = getSelectedRoundVal();

    if (!targetContainer) return;

    if (targetDisplay) {
      targetDisplay.textContent = `ROUND ${roundNum}`;
    }

    const matches = roundsData[roundNum] || roundsData[17];

    let html = `<div class="round-matches-2col-grid" style="display:grid; grid-template-columns:repeat(2, minmax(0, 1fr)); gap:0.65rem; width:100%; box-sizing:border-box;">`;

    matches.forEach(m => {
      const isLive = m.status.includes('LIVE');
      const isFT = m.status === 'FT';
      const badgeStyle = isLive 
        ? 'background:rgba(239,68,68,0.2); color:#f87171; border:1px solid rgba(239,68,68,0.5);'
        : (isFT ? 'background:rgba(34,197,94,0.15); color:#4ade80; border:1px solid rgba(34,197,94,0.4);' : 'background:rgba(0,212,255,0.15); color:#38bdf8; border:1px solid rgba(0,212,255,0.4);');

      let homeScore = '-';
      let awayScore = '-';
      if (m.score && m.score.includes('-')) {
        const parts = m.score.split('-').map(s => s.trim());
        homeScore = parts[0] || '-';
        awayScore = parts[1] || '-';
      } else if (m.score && m.score.includes('—')) {
        const parts = m.score.split('—').map(s => s.trim());
        homeScore = parts[0] || '-';
        awayScore = parts[1] || '-';
      } else if (m.score) {
        homeScore = m.score;
        awayScore = '';
      }

      html += `
        <div class="match-fixture-card" style="background:linear-gradient(145deg, rgba(10, 24, 52, 0.95), rgba(5, 12, 30, 0.98)); border:1px solid rgba(255, 255, 255, 0.08); border-radius:14px; padding:0.65rem 0.75rem; transition:all 0.3s ease; box-shadow:0 8px 24px rgba(0,0,0,0.5); width:100%; box-sizing:border-box; min-width:0; overflow:hidden;">
          <!-- Header: Round Date & Status -->
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.5rem; font-size:0.68rem; color:var(--text-muted); border-bottom:1px solid rgba(255,255,255,0.06); padding-bottom:0.35rem; min-width:0;">
            <span style="font-weight:800; color:var(--primary-gold); letter-spacing:0.3px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">ROUND ${roundNum} • ${m.date}</span>
            <span style="padding:0.12rem 0.4rem; border-radius:10px; font-weight:800; font-size:0.63rem; flex-shrink:0; ${badgeStyle}">
              ${m.status}
            </span>
          </div>

          <!-- Teams Stack (2-Row Clean Layout) -->
          <div style="display:flex; flex-direction:column; gap:0.4rem; margin-bottom:0.5rem;">
            <!-- Home Team Row -->
            <div style="display:flex; justify-content:space-between; align-items:center; min-width:0;">
              <div style="display:flex; align-items:center; gap:0.45rem; min-width:0; flex:1;">
                <img src="${m.home.crest}" width="22" height="22" style="border-radius:50%; border:1px solid rgba(255,255,255,0.2); object-fit:cover; flex-shrink:0;">
                <strong style="color:#fff; font-size:0.8rem; font-family:var(--font-heading); white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${m.home.name}</strong>
              </div>
              <span style="font-family:var(--font-heading); font-size:0.85rem; font-weight:900; color:${isFT ? '#4ade80' : (isLive ? '#f87171' : '#67e8f9')}; background:rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.1); padding:0.1rem 0.4rem; border-radius:6px; min-width:22px; text-align:center; flex-shrink:0;">
                ${homeScore}
              </span>
            </div>

            <!-- Away Team Row -->
            <div style="display:flex; justify-content:space-between; align-items:center; min-width:0;">
              <div style="display:flex; align-items:center; gap:0.45rem; min-width:0; flex:1;">
                <img src="${m.away.crest}" width="22" height="22" style="border-radius:50%; border:1px solid rgba(255,255,255,0.2); object-fit:cover; flex-shrink:0;">
                <strong style="color:#fff; font-size:0.8rem; font-family:var(--font-heading); white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${m.away.name}</strong>
              </div>
              <span style="font-family:var(--font-heading); font-size:0.85rem; font-weight:900; color:${isFT ? '#4ade80' : (isLive ? '#f87171' : '#67e8f9')}; background:rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.1); padding:0.1rem 0.4rem; border-radius:6px; min-width:22px; text-align:center; flex-shrink:0;">
                ${awayScore}
              </span>
            </div>
          </div>

          <!-- Stadium Location Footer -->
          <div style="font-size:0.65rem; color:var(--text-muted); border-top:1px solid rgba(255,255,255,0.06); padding-top:0.35rem; display:flex; align-items:center; gap:0.3rem; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">
            📍 ${m.home.stadium}
          </div>
        </div>
      `;
    });

    html += `</div>`;
    targetContainer.innerHTML = html;
  }

  // Bind round buttons click events
  roundPills.forEach(pill => {
    pill.addEventListener('click', () => {
      roundPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');

      const roundNum = pill.getAttribute('data-round') || pill.textContent.replace(/\D/g, '') || '17';
      renderRoundMatches(parseInt(roundNum, 10));
    });
  });

  // Initial render on page load for default active round (ROUND 17)
  const activePill = document.querySelector('.round-pill-btn.active');
  const defaultRound = activePill ? (activePill.getAttribute('data-round') || '17') : '17';
  renderRoundMatches(parseInt(defaultRound, 10));

  // -------------------------------------------------------------
  // LEAGUE DASHBOARD TAB ENGINE & ROUTER
  // -------------------------------------------------------------
  window.switchLeagueTab = function(targetTabId, updateUrl = true) {
    if (!targetTabId) return;

    const cleanId = String(targetTabId).replace('#', '').replace('tab-', '').toLowerCase();
    const validTabs = ['overview', 'fixtures', 'teams', 'transfers', 'history', 'news'];

    if (!validTabs.includes(cleanId)) return;

    const activeBtns = document.querySelectorAll('.league-tab-btn');
    const activePanels = document.querySelectorAll('.tab-panel');
    const heroSecs = document.querySelectorAll('.league-hero');

    // If page has no tab panels (e.g. main index.html page), do not manipulate tab panels
    if (activePanels.length === 0) return;

    // Show Hero Section ONLY on Overview tab for subpages
    heroSecs.forEach(hero => {
      hero.style.display = (cleanId === 'overview') ? 'block' : 'none';
    });

    // Update active button state & auto-scroll active button on mobile
    activeBtns.forEach(btn => {
      const btnTab = (btn.getAttribute('data-tab') || btn.getAttribute('data-tab-trigger') || '').replace('tab-', '').toLowerCase();
      if (btnTab === cleanId) {
        btn.classList.add('active');
        try {
          btn.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
        } catch (e) {}
      } else {
        btn.classList.remove('active');
      }
    });

    // Update active tab panel display with entrance animation
    activePanels.forEach(panel => {
      if (panel.id === `tab-${cleanId}`) {
        panel.classList.add('active');
        panel.style.display = 'block';
        panel.style.opacity = '1';
        if (typeof gsap !== 'undefined') {
          gsap.fromTo(panel, { opacity: 0, y: 25 }, { opacity: 1, y: 0, duration: 0.45, ease: 'power2.out' });
        }
      } else {
        panel.classList.remove('active');
        panel.style.display = 'none';
      }
    });

    // Smoothly scroll directly to the active tab panel with full offset clearance
    const tabsNav = document.querySelector('.league-tabs-nav');
    const targetPanel = document.getElementById(`tab-${cleanId}`);

    setTimeout(() => {
      const header = document.querySelector('.navbar');
      const navbarHeight = header ? header.offsetHeight : 72;
      const tabsHeight = tabsNav ? tabsNav.offsetHeight : 54;
      const totalHeaderOffset = navbarHeight + tabsHeight + 24;

      const scrollElement = targetPanel || tabsNav;
      if (scrollElement) {
        const elementPosition = scrollElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - totalHeaderOffset;
        window.scrollTo({
          top: Math.max(0, offsetPosition),
          behavior: 'smooth'
        });
      }
    }, 40);

    // Update URL state for direct linking & browser history
    if (updateUrl && window.history) {
      const newUrl = `${window.location.pathname}#tab-${cleanId}`;
      window.history.pushState(null, '', newUrl);
    }
  };

  // Global Click Delegate for Navigation Tabs & Anchors
  document.addEventListener('click', (e) => {
    const tabBtn = e.target.closest('.league-tab-btn, [data-tab-trigger]');
    if (tabBtn) {
      e.preventDefault();
      const target = tabBtn.getAttribute('data-tab') || tabBtn.getAttribute('data-tab-trigger');
      if (target) {
        window.switchLeagueTab(target, true);
      }
      return;
    }

    const link = e.target.closest('a[href*="#"]');
    if (!link) return;

    const href = link.getAttribute('href');
    if (!href || href === '#' || href.startsWith('javascript:')) return;

    const hashPart = href.includes('#') ? href.split('#')[1] : '';
    if (!hashPart) return;

    const cleanHash = hashPart.replace('tab-', '').toLowerCase();
    const validTabs = ['overview', 'fixtures', 'teams', 'transfers', 'history', 'news'];

    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const linkPath = href.split('#')[0].split('/').pop();

    if (linkPath && linkPath !== currentPath && !currentPath.includes(linkPath) && !(currentPath === '' && linkPath === 'index.html')) {
      return;
    }

    if (validTabs.includes(cleanHash) && document.querySelector('.tab-panel')) {
      e.preventDefault();
      window.switchLeagueTab(cleanHash, true);
    } else {
      const targetEl = document.getElementById(hashPart);
      if (targetEl) {
        e.preventDefault();
        const header = document.querySelector('.navbar');
        const headerOffset = header ? (header.offsetHeight + 12) : 80;
        const elementPosition = targetEl.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: Math.max(0, offsetPosition),
          behavior: 'smooth'
        });
      }
    }
  });

  function handleInitialHash() {
    if (!document.querySelector('.tab-panel')) return;
    const hash = window.location.hash.replace('#', '').replace('tab-', '').toLowerCase();
    const validTabs = ['overview', 'fixtures', 'teams', 'transfers', 'history', 'news'];
    if (validTabs.includes(hash)) {
      window.switchLeagueTab(hash, false);
    } else {
      window.switchLeagueTab('overview', false);
    }
  }

  window.addEventListener('popstate', handleInitialHash);
  window.addEventListener('hashchange', handleInitialHash);
  handleInitialHash();

  // Interactive Search for Fixtures Tab
  const fixtureSearchInput = document.getElementById('fixtureSearchInput');
  if (fixtureSearchInput) {
    fixtureSearchInput.addEventListener('input', (e) => {
      const term = e.target.value.toLowerCase();
      document.querySelectorAll('.fixture-card-item').forEach(card => {
        const text = card.textContent.toLowerCase();
        card.style.display = text.includes(term) ? 'flex' : 'none';
      });
    });
  }

  // Interactive Filter Pills for Fixtures Tab
  const fixturePills = document.querySelectorAll('#fixtureFilterContainer .round-pill-btn');
  fixturePills.forEach(pill => {
    pill.addEventListener('click', () => {
      fixturePills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      const filter = pill.getAttribute('data-filter');
      
      document.querySelectorAll('.fixture-card-item').forEach(card => {
        if (filter === 'all') {
          card.style.display = 'flex';
        } else if (filter === 'upcoming' || filter === 'completed') {
          card.style.display = (card.getAttribute('data-status') === filter) ? 'flex' : 'none';
        } else {
          card.style.display = 'flex';
        }
      });
    });
  });

  // Interactive Game Title Filter Pills Handler (All Game Titles, EA SPORTS FC 26, eFootball 2026, eFootball Mobile)
  const gameTitlePills = document.querySelectorAll('.game-title-pill');
  gameTitlePills.forEach(pill => {
    pill.addEventListener('click', () => {
      const selectedGame = pill.getAttribute('data-game');

      gameTitlePills.forEach(p => {
        if (p.getAttribute('data-game') === selectedGame) {
          p.classList.add('active');
          p.style.background = 'linear-gradient(135deg, #0284c7, #38bdf8)';
          p.style.color = '#fff';
          p.style.border = 'none';
          p.style.boxShadow = '0 4px 15px rgba(6,182,212,0.4)';
        } else {
          p.classList.remove('active');
          p.style.background = 'rgba(255,255,255,0.06)';
          p.style.color = '#cbd5e1';
          p.style.border = '1px solid rgba(255,255,255,0.12)';
          p.style.boxShadow = 'none';
        }
      });

      // Filter competition sections (Group Stage + Q/Finals to Grand Finals Bracket) and cards
      document.querySelectorAll('.efl-comp-section, .efl-comp-card').forEach(sec => {
        const titleAttr = (sec.getAttribute('data-game-title') || '').toLowerCase();
        if (selectedGame === 'all') {
          sec.style.display = '';
        } else {
          sec.style.display = titleAttr.includes(selectedGame) ? '' : 'none';
        }
      });
    });
  });

  // Interactive Search for Teams Tab
  const teamSearchInput = document.getElementById('teamSearchInput');
  if (teamSearchInput) {
    teamSearchInput.addEventListener('input', (e) => {
      const term = e.target.value.toLowerCase();
      document.querySelectorAll('.team-card-box').forEach(box => {
        const text = box.textContent.toLowerCase();
        box.style.display = text.includes(term) ? 'block' : 'none';
      });
    });
  }



  // -------------------------------------------------------------
  // HEADER MEGA DROPDOWN CLICK & OUTSIDE CLICK HANDLERS
  // -------------------------------------------------------------
  const navDropdownLinks = document.querySelectorAll('.nav-item > .nav-link');
  navDropdownLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const parentItem = link.parentElement;
      const hasDropdown = parentItem.querySelector('.mega-dropdown');
      if (hasDropdown) {
        e.preventDefault();
        document.querySelectorAll('.nav-item.open').forEach(item => {
          if (item !== parentItem) item.classList.remove('open');
        });
        parentItem.classList.toggle('open');
      }
    });
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-item')) {
      document.querySelectorAll('.nav-item.open').forEach(item => {
        item.classList.remove('open');
      });
    }
  });

  // -------------------------------------------------------------
  // DUAL LANGUAGE TRANSLATION HANDLER (ENG ↔ SWA)
  // -------------------------------------------------------------
  const langBtns = document.querySelectorAll('.lang-btn');
  const translatableElements = document.querySelectorAll('[data-en][data-sw]');

  function applyLanguage(lang) {
    const currentTranslatables = document.querySelectorAll('[data-en][data-sw]');
    currentTranslatables.forEach(el => {
      if (el.querySelector('[data-en][data-sw]')) {
        return; // Skip parent containers that have translatable child elements to avoid duplicate text
      }
      const text = (lang === 'sw') ? el.getAttribute('data-sw') : el.getAttribute('data-en');
      if (text) {
        const childIcon = el.querySelector('i, svg, .badge-pill, .icon');
        if (childIcon) {
          let textNodeFound = false;
          el.childNodes.forEach(node => {
            if (node.nodeType === Node.TEXT_NODE && node.nodeValue.trim().length > 0) {
              node.nodeValue = text + " ";
              textNodeFound = true;
            }
          });
          if (!textNodeFound) {
            el.insertBefore(document.createTextNode(text + " "), childIcon);
          }
        } else {
          el.textContent = text;
        }
      }
    });

    // Update Search Input Placeholders
    document.querySelectorAll('[data-en-placeholder][data-sw-placeholder]').forEach(input => {
      const ph = (lang === 'sw') ? input.getAttribute('data-sw-placeholder') : input.getAttribute('data-en-placeholder');
      if (ph) input.placeholder = ph;
    });

    localStorage.setItem('nbc_language', lang);

    document.querySelectorAll('.lang-btn').forEach(btn => {
      const isSwaBtn = btn.id.includes('swa') || btn.textContent.trim().toUpperCase() === 'SWA';
      const isEngBtn = btn.id.includes('eng') || btn.textContent.trim().toUpperCase() === 'ENG';
      if (lang === 'sw') {
        btn.classList.toggle('active', isSwaBtn);
      } else {
        btn.classList.toggle('active', isEngBtn);
      }
    });
  }

  // Bind all language switcher buttons globally
  document.addEventListener('click', (e) => {
    const langBtn = e.target.closest('.lang-btn');
    if (langBtn) {
      e.preventDefault();
      const isSwa = langBtn.id.includes('swa') || langBtn.textContent.trim().toUpperCase() === 'SWA';
      applyLanguage(isSwa ? 'sw' : 'en');
    }
  });

  const savedLang = localStorage.getItem('nbc_language') || 'en';
  if (savedLang === 'sw') applyLanguage('sw');

  // -------------------------------------------------------------
  // MOBILE SLIDE-OUT DRAWER ENGINE — FIXED FOR ALL MOBILE DEVICES
  // -------------------------------------------------------------

  function openMobileMenu() {
    const drawer = document.getElementById('mobile-drawer');
    const overlay = document.getElementById('mobile-drawer-overlay');
    document.querySelectorAll('.mobile-toggle-btn, #mobile-menu-toggle').forEach(b => b.classList.add('active'));
    if (drawer) drawer.classList.add('active');
    if (overlay) overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    const drawer = document.getElementById('mobile-drawer');
    const overlay = document.getElementById('mobile-drawer-overlay');
    document.querySelectorAll('.mobile-toggle-btn, #mobile-menu-toggle').forEach(b => b.classList.remove('active'));
    if (drawer) drawer.classList.remove('active');
    if (overlay) overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  function navigateTo(href) {
    if (!href || href === '#' || href.startsWith('javascript')) return;
    // For hash-only links on the same page, just scroll
    if (href.startsWith('#')) {
      const target = document.querySelector(href);
      if (target) target.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    window.location.href = href;
  }

  // Highlight active page link
  function highlightActiveMobileLink() {
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
      link.classList.remove('active');
      const href = link.getAttribute('href');
      if (!href) return;
      const linkPath = href.split('#')[0].split('/').pop();
      if (linkPath === currentPath || (currentPath === '' && linkPath === 'index.html')) {
        if (currentPath === 'index.html' || currentPath === '') {
          if (linkPath === 'index.html' && (!href.includes('#') || href.includes('#hero'))) {
            link.classList.add('active');
          }
        } else {
          link.classList.add('active');
        }
      }
    });
  }

  highlightActiveMobileLink();

  // Close on Escape
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMobileMenu(); });

  // ---- Single unified click/touch handler for the entire document ----
  let _lastMobileNavTime = 0;

  function handleMobileDrawerEvent(e) {
    const now = Date.now();

    // 1. Hamburger toggle
    const toggleBtn = e.target.closest('.mobile-toggle-btn, #mobile-menu-toggle');
    if (toggleBtn) {
      if (e.cancelable) e.preventDefault();
      if (now - _lastMobileNavTime < 300) return;
      _lastMobileNavTime = now;
      const drawer = document.getElementById('mobile-drawer');
      if (drawer && drawer.classList.contains('active')) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
      return;
    }

    // 2. Close button or overlay
    const closeBtn = e.target.closest('#mobile-menu-close, .mobile-drawer-close');
    const isOverlay = e.target.matches('#mobile-drawer-overlay, .mobile-drawer-overlay');
    if (closeBtn || isOverlay) {
      if (e.cancelable) e.preventDefault();
      if (now - _lastMobileNavTime < 300) return;
      _lastMobileNavTime = now;
      closeMobileMenu();
      return;
    }

    // 3. Submenu accordion toggle (buttons only, NOT anchor links)
    const submenuToggle = e.target.closest('.mobile-submenu-toggle');
    if (submenuToggle && submenuToggle.tagName === 'BUTTON') {
      if (e.cancelable) e.preventDefault();
      if (now - _lastMobileNavTime < 300) return;
      _lastMobileNavTime = now;
      const parentItem = submenuToggle.closest('.mobile-has-submenu');
      if (parentItem) {
        const isOpen = parentItem.classList.contains('open');
        document.querySelectorAll('.mobile-has-submenu.open').forEach(item => {
          if (item !== parentItem) item.classList.remove('open');
        });
        parentItem.classList.toggle('open', !isOpen);
      }
      return;
    }

    // 4. Navigation links — close then navigate
    const navLink = e.target.closest('a.mobile-nav-link, a.mobile-sub-link');
    if (navLink) {
      const href = navLink.getAttribute('href');
      if (e.cancelable) e.preventDefault();
      if (now - _lastMobileNavTime < 300) return;
      _lastMobileNavTime = now;
      closeMobileMenu();
      setTimeout(() => {
        navigateTo(href);
      }, 80);
      return;
    }
  }

  document.addEventListener('click', handleMobileDrawerEvent);

  // Mobile Footer Accordion Toggles
  document.querySelectorAll('.footer-accordion-toggle').forEach(toggle => {
    toggle.addEventListener('click', (e) => {
      e.preventDefault();
      const parentCol = toggle.closest('.footer-accordion-col');
      if (parentCol) {
        document.querySelectorAll('.footer-accordion-col.active').forEach(col => {
          if (col !== parentCol) col.classList.remove('active');
        });
        parentCol.classList.toggle('active');
      }
    });
  });

  // -------------------------------------------------------------
  // STATS COUNTER ANIMATION ENGINE (Counts Up from 0)
  // -------------------------------------------------------------
  const animateCounters = () => {
    const counters = document.querySelectorAll('.stat-number[data-target]');
    counters.forEach(counter => {
      const target = +counter.getAttribute('data-target');
      const speed = 120;
      const updateCount = () => {
        const count = +counter.innerText.replace(/,/g, '');
        const inc = Math.ceil(target / speed);
        if (count < target) {
          counter.innerText = (count + inc).toLocaleString();
          setTimeout(updateCount, 15);
        } else {
          counter.innerText = target.toLocaleString();
        }
      };
      updateCount();
    });
  };

  // -------------------------------------------------------------
  // GSAP SCROLLTRIGGER ANIMATION ENGINE (REQUIREMENTS 2 TO 16)
  // -------------------------------------------------------------
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);

    // REQUIREMENT 2: HERO LOAD ANIMATIONS
    const isMobile = window.innerWidth <= 768;
    const heroTimeline = gsap.timeline();
    heroTimeline
      .from('.hero-league-badge-wrap', {
        duration: 1,
        y: -60,
        opacity: 0,
        filter: 'drop-shadow(0 0 25px rgba(255,193,7,0.9))',
        ease: 'power3.out'
      })
      .from('.hero-line-left', {
        duration: 1,
        x: isMobile ? 0 : -120,
        y: isMobile ? 20 : 0,
        opacity: 0,
        scale: 0.9,
        ease: 'power3.out'
      }, '-=0.6')
      .from('.hero-line-right', {
        duration: 1,
        x: isMobile ? 0 : 120,
        y: isMobile ? 20 : 0,
        opacity: 0,
        scale: 1.1,
        ease: 'power3.out'
      }, '-=0.8')
      .from('.hero-subtitle', {
        duration: 0.8,
        y: 30,
        opacity: 0,
        ease: 'power2.out'
      }, '-=0.5')
      .from('.hero-cta-group', {
        duration: 0.8,
        y: 30,
        opacity: 0,
        ease: 'power2.out'
      }, '-=0.6');

    // REQUIREMENT 3: PARALLAX BACKGROUND
    gsap.to('.hero-section', {
      scrollTrigger: {
        trigger: '#hero',
        start: 'top top',
        end: 'bottom top',
        scrub: true
      },
      backgroundPositionY: '40%'
    });


    // STATS STRIP SCROLLTRIGGER
    ScrollTrigger.create({
      trigger: '.stats-counter-strip',
      start: 'top 85%',
      once: true,
      onEnter: () => animateCounters()
    });

    // REQUIREMENT 4: COMPETITIONS STAGGERED ENTRANCE
    const compCards = document.querySelectorAll('.competitions-grid .comp-card');
    compCards.forEach((card, index) => {
      let xOffset = 0;
      let yOffset = 0;
      if (!isMobile) {
        if (index === 0 || index === 2) xOffset = -100;
        else if (index === 1 || index === 3) xOffset = 100;
        else yOffset = 100;
      } else {
        yOffset = 40;
      }

      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top 88%',
          toggleActions: 'play none none reverse'
        },
        duration: 0.9,
        x: xOffset,
        y: yOffset,
        opacity: 0,
        delay: index * 0.1,
        ease: 'power2.out'
      });
    });

    // REQUIREMENT 5: NEWS SECTION ANIMATIONS
    if (document.querySelector('.news-main-card')) {
      gsap.from('.news-main-card', {
        scrollTrigger: {
          trigger: '.news-main-card',
          start: 'top 85%'
        },
        duration: 1,
        scale: 0.8,
        opacity: 0,
        ease: 'power3.out'
      });
    }

    const newsSideCards = document.querySelectorAll('.news-side-card');
    if (newsSideCards.length >= 2) {
      gsap.from(newsSideCards[0], {
        scrollTrigger: {
          trigger: newsSideCards[0],
          start: 'top 85%'
        },
        duration: 0.9,
        x: -100,
        opacity: 0,
        ease: 'power3.out'
      });
      gsap.from(newsSideCards[1], {
        scrollTrigger: {
          trigger: newsSideCards[1],
          start: 'top 85%'
        },
        duration: 0.9,
        x: 100,
        opacity: 0,
        ease: 'power3.out'
      });
    }

    // REQUIREMENT 6: TFF SECTION ANIMATIONS
    if (document.querySelector('.tff-president-card')) {
      gsap.from('.tff-president-card', {
        scrollTrigger: {
          trigger: '.tff-president-card',
          start: 'top 85%'
        },
        duration: 1,
        x: -120,
        opacity: 0,
        ease: 'power3.out'
      });
      gsap.from('.tff-content-box', {
        scrollTrigger: {
          trigger: '.tff-content-box',
          start: 'top 85%'
        },
        duration: 1,
        x: 120,
        opacity: 0,
        ease: 'power3.out'
      });
      gsap.from('.tff-stat-box', {
        scrollTrigger: {
          trigger: '.tff-stats-grid',
          start: 'top 85%'
        },
        duration: 0.8,
        y: 60,
        opacity: 0,
        stagger: 0.15,
        ease: 'back.out(1.5)'
      });
    }

    // REQUIREMENT 7: HONORS & SPOTLIGHTS (RISE & ROTATE)
    const honorsCards = document.querySelectorAll('.honors-card, .spotlight-card-tile');
    honorsCards.forEach((card, i) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top 88%'
        },
        duration: 0.9,
        y: 80,
        rotation: i % 2 === 0 ? -6 : 6,
        opacity: 0,
        ease: 'back.out(1.2)'
      });
    });

    // REQUIREMENT 8: HISTORIC STORIES (LEFT / BOTTOM / RIGHT)
    const historyCards = document.querySelectorAll('.historic-clashes-grid .clash-card-tile');
    if (historyCards.length >= 3) {
      gsap.from(historyCards[0], {
        scrollTrigger: { trigger: historyCards[0], start: 'top 88%' },
        duration: 0.9,
        x: -100,
        opacity: 0,
        ease: 'power3.out'
      });
      gsap.from(historyCards[1], {
        scrollTrigger: { trigger: historyCards[1], start: 'top 88%' },
        duration: 0.9,
        y: 100,
        opacity: 0,
        ease: 'power3.out'
      });
      gsap.from(historyCards[2], {
        scrollTrigger: { trigger: historyCards[2], start: 'top 88%' },
        duration: 0.9,
        x: 100,
        opacity: 0,
        ease: 'power3.out'
      });
    }

    // REQUIREMENT 9: TITLE RACE COMMAND CENTER & PROBABILITY BARS
    if (document.querySelector('.standings-panel')) {
      gsap.from('.standings-panel', {
        scrollTrigger: { trigger: '.standings-panel', start: 'top 85%' },
        duration: 1,
        y: 60,
        opacity: 0,
        ease: 'power3.out'
      });
    }

    const probBars = document.querySelectorAll('.prob-fill-bar');
    probBars.forEach(bar => {
      const targetWidth = bar.style.width;
      gsap.fromTo(bar, 
        { width: '0%' },
        {
          scrollTrigger: { trigger: bar, start: 'top 90%' },
          duration: 1.5,
          width: targetWidth,
          ease: 'power3.out'
        }
      );
    });

    const formBadges = document.querySelectorAll('.form-badges-flex span');
    if (formBadges.length > 0) {
      gsap.from(formBadges, {
        scrollTrigger: { trigger: '.form-badges-flex', start: 'top 90%' },
        duration: 0.5,
        scale: 0,
        opacity: 0,
        stagger: 0.08,
        ease: 'back.out(2)'
      });
    }

    // REQUIREMENT 10: MATCH PREDICTION INPUT FIELDS
    const predGroups = document.querySelectorAll('.pred-input-group');
    predGroups.forEach((group, idx) => {
      gsap.from(group, {
        scrollTrigger: { trigger: '.prediction-form', start: 'top 85%' },
        duration: 0.8,
        x: idx % 2 === 0 ? -60 : 60,
        opacity: 0,
        delay: idx * 0.15,
        ease: 'power3.out'
      });
    });

    // REQUIREMENT 11: GAMES & QUIZZES (PLAYING CARD ENTRANCE)
    const gameTiles = document.querySelectorAll('.game-card-tile');
    gameTiles.forEach((tile, idx) => {
      gsap.from(tile, {
        scrollTrigger: { trigger: tile, start: 'top 88%' },
        duration: 1,
        y: 100,
        scale: 0.8,
        rotation: (idx - 1) * 5,
        opacity: 0,
        delay: idx * 0.15,
        ease: 'back.out(1.5)'
      });
    });

    // REQUIREMENT 12: COMMUNITY GALLERY PARALLAX SCROLLING
    const commCards = document.querySelectorAll('.community-card-item');
    commCards.forEach((card, idx) => {
      const speed = (idx % 3 + 1) * 20;
      gsap.to(card, {
        scrollTrigger: {
          trigger: '.community-gallery-section',
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        },
        y: -speed,
        ease: 'none'
      });
    });

    // REQUIREMENT 16: LIGHTWEIGHT FAST SECTION REVEAL EFFECT
    const sections = document.querySelectorAll('section:not(#hero)');
    sections.forEach(sec => {
      gsap.fromTo(sec, 
        {
          opacity: 0,
          y: 40
        },
        {
          scrollTrigger: {
            trigger: sec,
            start: 'top 92%',
            toggleActions: 'play none none reverse'
          },
          duration: 0.6,
          opacity: 1,
          y: 0,
          ease: 'power2.out'
        }
      );
    });
  }

  // -------------------------------------------------------------
  // RADIUS BSSS MODAL HANDLERS
  // -------------------------------------------------------------
  const modalBackdrop = document.getElementById('radiusModal');
  const openModalBtns = document.querySelectorAll('[data-open-modal="radiusBsss"]');
  const closeModalBtn = document.getElementById('closeModalBtn');

  openModalBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (modalBackdrop) modalBackdrop.classList.add('active');
    });
  });

  if (closeModalBtn && modalBackdrop) {
    closeModalBtn.addEventListener('click', () => modalBackdrop.classList.remove('active'));
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) modalBackdrop.classList.remove('active');
    });
  }

  // -------------------------------------------------------------
  // HERO CANVAS PARTICLES ENGINE (STATIC RENDER - NO DISTRACTING LOOPS)
  // -------------------------------------------------------------
  const canvas = document.getElementById('hero-particles');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    canvas.width = canvas.parentElement.clientWidth;
    canvas.height = canvas.parentElement.clientHeight;
    for (let i = 0; i < 20; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const size = Math.random() * 2 + 1;
      ctx.fillStyle = Math.random() > 0.5 ? 'rgba(251, 191, 36, 0.25)' : 'rgba(0, 212, 255, 0.25)';
      ctx.beginPath();
      ctx.arc(x, y, size, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  // -------------------------------------------------------------
  // HERO BACKGROUND ANIMATED CHANGING SLIDESHOW ENGINE
  // -------------------------------------------------------------
  function initHeroBgSlider() {
    const slides = document.querySelectorAll('.hero-bg-slide');
    if (slides.length <= 1) return;

    let currentSlide = 0;
    setInterval(() => {
      slides[currentSlide].classList.remove('active');
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].classList.add('active');
    }, 4500);
  }
  initHeroBgSlider();

  // HERO CUTOUTS SMOOTH CSS FLOATING ENGINE (Mousemove JS disabled to prevent jitter)

  // -------------------------------------------------------------
  // KARIAKOO DERBY REAL-TIME LIVE TICKING COUNTDOWN TIMER ENGINE
  // -------------------------------------------------------------
  function initDerbyCountdown() {
    const daysEl = document.getElementById('derby-days');
    const hoursEl = document.getElementById('derby-hours');
    const minsEl = document.getElementById('derby-minutes');
    const secsEl = document.getElementById('derby-seconds');

    if (!daysEl || !hoursEl || !minsEl || !secsEl) return;

    // Set match target date to 5 days, 14 hours, 32 mins from now
    const targetTime = Date.now() + (5 * 24 * 60 * 60 * 1000) + (14 * 60 * 60 * 1000) + (32 * 60 * 1000);

    function updateClock() {
      const now = Date.now();
      const diff = targetTime - now;

      if (diff <= 0) {
        daysEl.textContent = '00';
        hoursEl.textContent = '00';
        minsEl.textContent = '00';
        secsEl.textContent = '00';
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const secs = Math.floor((diff % (1000 * 60)) / 1000);

      daysEl.textContent = String(days).padStart(2, '0');
      hoursEl.textContent = String(hours).padStart(2, '0');
      minsEl.textContent = String(mins).padStart(2, '0');
      secsEl.textContent = String(secs).padStart(2, '0');
    }

    updateClock();
    setInterval(updateClock, 1000);
  }

  initDerbyCountdown();



  // -------------------------------------------------------------
  // FIXTURES & RESULTS REAL-TIME PILL FILTER & SEARCH ENGINE
  // -------------------------------------------------------------
  function initFixtureFilterEngine() {
    const filterBtns = document.querySelectorAll('.pill-filter-btn');
    const fixtureCards = document.querySelectorAll('.fixture-card-item');
    const searchInput = document.getElementById('fixtureSearchInput');

    let activeFilter = 'all';

    function applyFixtureFilters() {
      const query = (searchInput ? searchInput.value : '').toLowerCase().trim();

      fixtureCards.forEach(card => {
        const status = (card.getAttribute('data-status') || '').toLowerCase();
        const roundStr = (card.getAttribute('data-round') || '').toLowerCase();
        const roundNum = parseInt(roundStr.replace('rd', ''), 10) || 0;
        const textContent = card.textContent.toLowerCase();

        let matchesFilter = false;

        if (activeFilter === 'all') {
          matchesFilter = true;
        } else if (activeFilter === 'upcoming') {
          matchesFilter = (status === 'upcoming');
        } else if (activeFilter === 'completed') {
          matchesFilter = (status === 'completed' || status === 'ft');
        } else if (activeFilter === 'rd1-5') {
          matchesFilter = (roundNum >= 1 && roundNum <= 5);
        } else if (activeFilter === 'rd6-10') {
          matchesFilter = (roundNum >= 6 && roundNum <= 10);
        } else if (activeFilter === 'rd11-15') {
          matchesFilter = (roundNum >= 11 && roundNum <= 15);
        } else if (activeFilter === 'rd16-20') {
          matchesFilter = (roundNum >= 16 && roundNum <= 20);
        }

        let matchesSearch = !query || textContent.includes(query);

        if (matchesFilter && matchesSearch) {
          card.style.display = 'block';
          card.style.opacity = '1';
          if (typeof gsap !== 'undefined') {
            gsap.fromTo(card, { opacity: 0, scale: 0.96 }, { opacity: 1, scale: 1, duration: 0.3, ease: 'power2.out' });
          }
        } else {
          card.style.display = 'none';
        }
      });
    }

    filterBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        filterBtns.forEach(b => {
          b.classList.remove('active');
          b.style.background = 'rgba(255,255,255,0.06)';
          b.style.color = '#cbd5e1';
          b.style.border = '1px solid rgba(255,255,255,0.1)';
        });

        btn.classList.add('active');
        btn.style.background = 'linear-gradient(135deg, #d97706, #ffd700)';
        btn.style.color = '#000';
        btn.style.border = 'none';

        activeFilter = btn.getAttribute('data-filter') || 'all';
        applyFixtureFilters();
      });
    });

    if (searchInput) {
      searchInput.addEventListener('input', applyFixtureFilters);
    }
  }

  initFixtureFilterEngine();

  // Standings Table Live Search Engine
  ['tableSearchInput', 'wplTableSearchInput', 'tclTableSearchInput', 'eflTableSearchInput', 'fdlTableSearchInput'].forEach(inputId => {
    const input = document.getElementById(inputId);
    if (input) {
      input.addEventListener('input', function() {
        const query = this.value.toLowerCase().trim();
        const table = this.closest('.table-card-container, #tab-overview')?.querySelector('table');
        if (table) {
          const rows = table.querySelectorAll('tbody tr');
          rows.forEach(row => {
            const text = row.textContent.toLowerCase();
            row.style.display = (!query || text.includes(query)) ? '' : 'none';
          });
        }
      });
    }
  });

  // ==========================================================================
  // GSAP SCROLLTRIGGER — PREMIUM SCROLL ANIMATION ENGINE
  // Works on both NBC Premier League & Women's Premier League pages
  // ==========================================================================
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);

    // --------------------------------------------------
    // UTILITY: Create a scroll-triggered reveal animation
    // --------------------------------------------------
    function scrollReveal(selector, vars) {
      const els = document.querySelectorAll(selector);
      if (!els.length) return;
      els.forEach(el => {
        gsap.fromTo(el, vars.from, {
          ...vars.to,
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            toggleActions: 'play none none none',
          }
        });
      });
    }

    function scrollRevealStagger(selector, vars, stagger = 0.12) {
      const containers = document.querySelectorAll(vars.containerSelector || selector);
      if (!containers.length) return;
      containers.forEach(container => {
        const items = container.querySelectorAll(vars.itemSelector || selector);
        if (!items.length) return;
        gsap.fromTo(items, vars.from, {
          ...vars.to,
          stagger,
          scrollTrigger: {
            trigger: container,
            start: 'top 85%',
            toggleActions: 'play none none none',
          }
        });
      });
    }

    // --------------------------------------------------
    // 1. HERO SECTION — slide up + fade in
    // --------------------------------------------------
    const heroTitle = document.querySelector('.league-hero-title');
    const heroSub   = document.querySelector('.league-hero-sub');
    const heroStats = document.querySelector('.league-stats-grid');
    const heroRight = document.querySelector('.wpl-champion-hide, .hero-right-widget');

    if (heroTitle) gsap.fromTo(heroTitle,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', delay: 0.1 }
    );
    if (heroSub) gsap.fromTo(heroSub,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.3 }
    );
    if (heroStats) gsap.fromTo(heroStats.querySelectorAll('.league-stat-card'),
      { opacity: 0, y: 24, scale: 0.92 },
      { opacity: 1, y: 0, scale: 1, duration: 0.65, ease: 'back.out(1.4)', stagger: 0.1, delay: 0.5 }
    );
    if (heroRight) gsap.fromTo(heroRight,
      { opacity: 0, x: 40 },
      { opacity: 1, x: 0, duration: 0.9, ease: 'power3.out', delay: 0.4 }
    );

    // --------------------------------------------------
    // 2. TABS NAV — fade in from top
    // --------------------------------------------------
    const tabsNav = document.querySelector('.league-tabs-nav');
    if (tabsNav) gsap.fromTo(tabsNav,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out',
        scrollTrigger: { trigger: tabsNav, start: 'top 90%' }
      }
    );

    // --------------------------------------------------
    // 3. STANDINGS TABLE ROWS — stagger from left
    // --------------------------------------------------
    const standingsRows = document.querySelectorAll('.league-table tbody tr');
    if (standingsRows.length) {
      gsap.fromTo(standingsRows,
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.45, ease: 'power2.out', stagger: 0.04,
          scrollTrigger: { trigger: '.league-table', start: 'top 82%' }
        }
      );
    }

    // --------------------------------------------------
    // 4. WIDGET GLASS CARDS — scale + fade (sidebar widgets)
    // --------------------------------------------------
    const widgets = document.querySelectorAll('.widget-glass-card');
    widgets.forEach(w => {
      gsap.fromTo(w,
        { opacity: 0, scale: 0.93, y: 20 },
        { opacity: 1, scale: 1, y: 0, duration: 0.6, ease: 'back.out(1.2)',
          scrollTrigger: { trigger: w, start: 'top 88%' }
        }
      );
    });

    // --------------------------------------------------
    // 5. FIXTURE CARDS — slide up stagger
    // --------------------------------------------------
    const fixtureContainers = document.querySelectorAll('#fixtureList, #wplFixtureList');
    fixtureContainers.forEach(container => {
      const cards = container.querySelectorAll('.fixture-card-item');
      if (cards.length) {
        gsap.fromTo(cards,
          { opacity: 0, y: 36 },
          { opacity: 1, y: 0, duration: 0.55, ease: 'power3.out', stagger: 0.08,
            scrollTrigger: { trigger: container, start: 'top 85%' }
          }
        );
      }
    });

    // --------------------------------------------------
    // 6. TEAM / CLUB CARDS — bounce-in grid
    // --------------------------------------------------
    const teamCardGrids = document.querySelectorAll('.clubs-grid, .wpl-club-card');
    teamCardGrids.forEach(el => {
      gsap.fromTo(el,
        { opacity: 0, y: 30, scale: 0.94 },
        { opacity: 1, y: 0, scale: 1, duration: 0.55, ease: 'back.out(1.3)',
          scrollTrigger: { trigger: el, start: 'top 88%' }
        }
      );
    });

    // --------------------------------------------------
    // 7. PLAYER STAT ROWS (Golden Boot & Assists)
    //    leader-hero-card + stat-player-row-card
    // --------------------------------------------------
    const leaderHero = document.querySelectorAll('.leader-hero-card');
    leaderHero.forEach(el => {
      gsap.fromTo(el,
        { opacity: 0, scale: 0.88, y: 20 },
        { opacity: 1, scale: 1, y: 0, duration: 0.7, ease: 'elastic.out(1,0.7)',
          scrollTrigger: { trigger: el, start: 'top 88%' }
        }
      );
    });

    const statRows = document.querySelectorAll('.stat-player-row-card');
    statRows.forEach((el, i) => {
      gsap.fromTo(el,
        { opacity: 0, x: -24 },
        { opacity: 1, x: 0, duration: 0.45, ease: 'power2.out', delay: i * 0.09,
          scrollTrigger: { trigger: el, start: 'top 90%' }
        }
      );
    });

    // --------------------------------------------------
    // 8. PLAYER STATS SECTION HEADER (⭐ Player Statistics)
    // --------------------------------------------------
    const statsWidgetCards = document.querySelectorAll('.player-stats-widget-card');
    statsWidgetCards.forEach((el, i) => {
      gsap.fromTo(el,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', delay: i * 0.15,
          scrollTrigger: { trigger: el, start: 'top 86%' }
        }
      );
    });

    // --------------------------------------------------
    // 9. MATCH ROUNDS SELECTOR TRACK
    // --------------------------------------------------
    const roundsTrack = document.querySelectorAll('.rounds-selector-track');
    roundsTrack.forEach(el => {
      gsap.fromTo(el,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.65, ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 88%' }
        }
      );
      // Stagger the round pills
      const pills = el.querySelectorAll('.round-pill-btn');
      if (pills.length) {
        gsap.fromTo(pills,
          { opacity: 0, scale: 0.8 },
          { opacity: 1, scale: 1, duration: 0.35, ease: 'back.out(1.5)', stagger: 0.025,
            scrollTrigger: { trigger: el, start: 'top 88%' }
          }
        );
      }
    });

    // --------------------------------------------------
    // 10. DERBY / NEXT BIG FIXTURE BANNER
    // --------------------------------------------------
    const derbyBanner = document.querySelector('.derby-banner-card');
    if (derbyBanner) {
      gsap.fromTo(derbyBanner,
        { opacity: 0, scale: 0.95, y: 30 },
        { opacity: 1, scale: 1, y: 0, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: derbyBanner, start: 'top 85%' }
        }
      );
    }

    // --------------------------------------------------
    // 11. SEASON HISTORY CARDS (Roll of Honor)
    // --------------------------------------------------
    const seasonCards = document.querySelectorAll('.wpl-season-card, .season-card-item');
    seasonCards.forEach((el, i) => {
      gsap.fromTo(el,
        { opacity: 0, x: i % 2 === 0 ? -35 : 35, y: 10 },
        { opacity: 1, x: 0, y: 0, duration: 0.6, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 88%' }
        }
      );
    });

    // --------------------------------------------------
    // 12. NEWS CARDS GRID — stagger fade-up
    // --------------------------------------------------
    const newsGrids = document.querySelectorAll('.league-news-grid, .tab-panel #tab-news .widget-glass-card');
    newsGrids.forEach(grid => {
      const cards = grid.querySelectorAll('.league-news-card, .widget-glass-card');
      if (cards.length) {
        gsap.fromTo(cards,
          { opacity: 0, y: 35 },
          { opacity: 1, y: 0, duration: 0.55, ease: 'power3.out', stagger: 0.1,
            scrollTrigger: { trigger: grid, start: 'top 86%' }
          }
        );
      }
    });

    // Also animate news cards directly inside tab-news
    const tabNewsCards = document.querySelectorAll('#tab-news .widget-glass-card');
    if (tabNewsCards.length) {
      gsap.fromTo(tabNewsCards,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out', stagger: 0.1,
          scrollTrigger: { trigger: '#tab-news', start: 'top 86%' }
        }
      );
    }

    // --------------------------------------------------
    // 13. TRANSFER ROWS — slide in from right
    // --------------------------------------------------
    const transferRows = document.querySelectorAll('#tab-transfers [style*="grid-template-columns:auto"]');
    transferRows.forEach((el, i) => {
      gsap.fromTo(el,
        { opacity: 0, x: 30 },
        { opacity: 1, x: 0, duration: 0.5, ease: 'power2.out', delay: i * 0.08,
          scrollTrigger: { trigger: el, start: 'top 90%' }
        }
      );
    });

    // --------------------------------------------------
    // 14. SECTION HEADERS (h2, h3 inside tab panels)
    // --------------------------------------------------
    const sectionHeaders = document.querySelectorAll('.tab-panel h2, .tab-panel h3, .section-header h2');
    sectionHeaders.forEach(el => {
      gsap.fromTo(el,
        { opacity: 0, y: 22 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 90%' }
        }
      );
    });

    // --------------------------------------------------
    // 15. STAT NUMBER COUNTER ANIMATION
    //     Animates .league-stat-num elements on scroll
    // --------------------------------------------------
    document.querySelectorAll('.league-stat-num').forEach(el => {
      const raw = el.textContent.trim().replace(/,/g, '');
      const target = parseFloat(raw);
      if (isNaN(target)) return;
      const isDecimal = raw.includes('.');
      const hasSuffix = el.textContent.trim().replace(String(target), '');

      ScrollTrigger.create({
        trigger: el,
        start: 'top 90%',
        once: true,
        onEnter() {
          let current = { val: 0 };
          gsap.to(current, {
            val: target,
            duration: 1.6,
            ease: 'power1.out',
            onUpdate() {
              const v = isDecimal ? current.val.toFixed(1) : Math.round(current.val);
              el.textContent = Number(v).toLocaleString() + (hasSuffix || '');
            }
          });
        }
      });
    });

    // --------------------------------------------------
    // 16. PARTNERS LOGO SLIDER — fade in
    // --------------------------------------------------
    const partnersSection = document.querySelector('.partners-section');
    if (partnersSection) {
      gsap.fromTo(partnersSection,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out',
          scrollTrigger: { trigger: partnersSection, start: 'top 92%' }
        }
      );
    }

    // --------------------------------------------------
    // 17. FOOTER — slide up
    // --------------------------------------------------
    const footer = document.querySelector('.site-footer');
    if (footer) {
      gsap.fromTo(footer,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out',
          scrollTrigger: { trigger: footer, start: 'top 95%' }
        }
      );
    }

    // --------------------------------------------------
    // 18. GENERIC FALLBACK — any element with data-anim attr
    //     e.g. <div data-anim="fade-up"> or <div data-anim="fade-left">
    // --------------------------------------------------
    document.querySelectorAll('[data-anim]').forEach(el => {
      const type = el.getAttribute('data-anim');
      const fromMap = {
        'fade-up':    { opacity: 0, y: 40 },
        'fade-down':  { opacity: 0, y: -40 },
        'fade-left':  { opacity: 0, x: -40 },
        'fade-right': { opacity: 0, x: 40 },
        'zoom-in':    { opacity: 0, scale: 0.85 },
        'zoom-out':   { opacity: 0, scale: 1.15 },
      };
      const from = fromMap[type] || { opacity: 0, y: 30 };
      gsap.fromTo(el, from,
        { opacity: 1, y: 0, x: 0, scale: 1, duration: 0.7, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 88%' }
        }
      );
    });

  } // end if GSAP + ScrollTrigger available

  // -------------------------------------------------------------
  // HONORS & SPOTLIGHTS INTERACTIVE MODAL POPUP ENGINE
  // -------------------------------------------------------------
  const honorModal = document.getElementById('honorModal');
  const honorModalBody = document.getElementById('honorModalBody');
  const closeHonorModalBtn = document.getElementById('closeHonorModalBtn');
  const spotlightCards = document.querySelectorAll('.spotlight-card');

  const honorData = {
    'aziz-ki': {
      title: 'PLAYER OF THE MONTH',
      name: 'Stephane Aziz Ki',
      team: 'Young Africans SC • Midfield Star',
      image: 'images/stephane-ki-azizi.png',
      badgeColor: '#ffd700',
      stats: [
        { val: '16', lbl: 'Goals Scored' },
        { val: '9', lbl: 'Assists' },
        { val: '8.9', lbl: 'Avg Match Rating' },
        { val: '4', lbl: 'Man of the Match' }
      ],
      quote: '"I want to thank my teammates and coaches at Wananchi. This award is dedicated to all Yanga SC fans across Tanzania!"'
    },
    'coach-beker': {
      title: 'COACH OF THE MONTH',
      name: 'Coach Beker',
      team: 'Tactical Mastermind • Head Coach',
      image: 'images/beker.jpg',
      badgeColor: '#60a5fa',
      stats: [
        { val: '5/5', lbl: 'Matches Won' },
        { val: '14', lbl: 'Goals Scored' },
        { val: '4', lbl: 'Clean Sheets' },
        { val: '+12', lbl: 'Goal Difference' }
      ],
      quote: '"Tactical discipline and hard work in training made this perfect month possible. We remain focused on the league trophy."'
    },
    'feisal-salum': {
      title: 'BEST GOAL OF THE MONTH',
      name: 'Feisal Salum',
      team: 'Azam FC • 35-Yard Thunderstrike',
      image: 'images/feisal-salum.png',
      badgeColor: '#38bdf8',
      stats: [
        { val: '35 Yards', lbl: 'Strike Distance' },
        { val: '115 km/h', lbl: 'Shot Speed' },
        { val: '94\'', lbl: 'Minute Scored' },
        { val: 'Top Corner', lbl: 'Placement' }
      ],
      quote: '"I saw the keeper slightly off his line, took a touch, and let it fly. One of the best strikes of my career!"'
    }
  };

  if (honorModal && honorModalBody) {
    spotlightCards.forEach(card => {
      card.addEventListener('click', () => {
        const key = card.getAttribute('data-honor');
        const data = honorData[key];
        if (!data) return;

        honorModalBody.innerHTML = `
          <div class="honor-modal-header">
            <img src="${data.image}" alt="${data.name}" class="honor-modal-img" style="border-color:${data.badgeColor}">
            <div class="honor-modal-title-box">
              <span class="badge-pill" style="background:rgba(255,193,7,0.15); color:${data.badgeColor}; font-size:0.68rem; margin-bottom:0.3rem;">🏆 ${data.title}</span>
              <h3>${data.name}</h3>
              <div class="honor-modal-subtitle">${data.team}</div>
            </div>
          </div>
          <div class="honor-modal-grid">
            ${data.stats.map(s => `
              <div class="honor-stat-block">
                <div class="honor-stat-val" style="color:${data.badgeColor}">${s.val}</div>
                <div class="honor-stat-lbl">${s.lbl}</div>
              </div>
            `).join('')}
          </div>
          <div class="honor-modal-quote">${data.quote}</div>
        `;
        honorModal.classList.add('active');
      });
    });

    if (closeHonorModalBtn) {
      closeHonorModalBtn.addEventListener('click', () => honorModal.classList.remove('active'));
    }

    honorModal.addEventListener('click', (e) => {
      if (e.target === honorModal) honorModal.classList.remove('active');
    });
  }

  // ==========================================================================
  // HIGH-PERFORMANCE INTERSECTION OBSERVER SCROLL REVEAL ENGINE
  // ==========================================================================
  function initScrollRevealEngine() {
    const revealSelectors = [
      '.reveal-fade-up', '.reveal-fade-left', '.reveal-fade-right', '.reveal-scale-in',
      '.reveal-up', '.reveal-left', '.reveal-right', '.reveal-scale', '[data-reveal]',
      '.comp-card', '.spotlight-card', '.news-card', '.hero-card',
      '.leader-hero-card', '.stat-player-row-card', '.standings-card',
      '.title-race-card', '.club-card', '.player-spotlight-card', '.next-fixture-card',
      '.footer-col', '.section-header', '.hero-title', '.hero-subtitle',
      '.hero-cta-group', '.stats-counter-strip', '.match-card',
      '.live-match-tile', '.live-marquee-card', '.competition-selector-container',
      '.match-filter-card', '.match-detail-section', '.sponsors-showcase-section',
      '.sponsor-white-card', '.comp-badge-item', '.bracket-card-box',
      '.bracket-container', '.widget-glass-card', '.table-card-container'
    ];

    const elementsToReveal = document.querySelectorAll(revealSelectors.join(', '));
    if (elementsToReveal.length === 0) return;

    elementsToReveal.forEach((el) => {
      // Set default animation style if none explicitly assigned
      if (!el.classList.contains('reveal-fade-up') &&
          !el.classList.contains('reveal-fade-left') &&
          !el.classList.contains('reveal-fade-right') &&
          !el.classList.contains('reveal-scale-in') &&
          !el.classList.contains('reveal-up') &&
          !el.classList.contains('reveal-left') &&
          !el.classList.contains('reveal-right') &&
          !el.classList.contains('reveal-scale')) {
        
        if (el.classList.contains('spotlight-card') ||
            el.classList.contains('news-card') ||
            el.classList.contains('comp-card') ||
            el.classList.contains('hero-card') ||
            el.classList.contains('leader-hero-card') ||
            el.classList.contains('club-card') ||
            el.classList.contains('player-spotlight-card') ||
            el.classList.contains('live-match-tile') ||
            el.classList.contains('match-filter-card') ||
            el.classList.contains('sponsor-white-card') ||
            el.classList.contains('comp-badge-item') ||
            el.classList.contains('bracket-card-box') ||
            el.classList.contains('widget-glass-card')) {
          el.classList.add('reveal-scale-in');
        } else if (el.classList.contains('section-header')) {
          el.classList.add('reveal-fade-left');
        } else {
          el.classList.add('reveal-fade-up');
        }
      }

      // Auto stagger delay for siblings inside parent grid
      const parent = el.parentElement;
      if (parent) {
        const siblings = Array.from(parent.children).filter(child => 
          child.classList.contains('reveal-fade-up') ||
          child.classList.contains('reveal-fade-left') ||
          child.classList.contains('reveal-fade-right') ||
          child.classList.contains('reveal-scale-in') ||
          child.classList.contains('reveal-up') ||
          child.classList.contains('reveal-left') ||
          child.classList.contains('reveal-right') ||
          child.classList.contains('reveal-scale')
        );

        if (siblings.length > 1) {
          const index = siblings.indexOf(el);
          if (index >= 0 && index < 8) {
            el.style.transitionDelay = `${index * 80}ms`;
          }
        }
      }
    });

    if ('IntersectionObserver' in window) {
      const observerOptions = {
        root: null,
        rootMargin: '0px 0px -20px 0px',
        threshold: 0.05
      };

      const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed', 'active');
            observer.unobserve(entry.target); // Smooth scroll-down reveal
          }
        });
      }, observerOptions);

      elementsToReveal.forEach(el => revealObserver.observe(el));
    } else {
      elementsToReveal.forEach(el => el.classList.add('revealed', 'active'));
    }
  }

  initScrollRevealEngine();



  // -------------------------------------------------------------
  // DROPDOWN MOUSE HOVER INTENT & STABILITY BUFFER MANAGER
  // -------------------------------------------------------------
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(item => {
    let leaveTimer = null;
    
    item.addEventListener('mouseenter', () => {
      if (leaveTimer) {
        clearTimeout(leaveTimer);
        leaveTimer = null;
      }
      item.classList.add('open');
    });

    item.addEventListener('mouseleave', () => {
      leaveTimer = setTimeout(() => {
        item.classList.remove('open');
      }, 220); // 220ms grace buffer ensures pointer crossing is seamless
    });
  });



  // Slider Arrow Scroll Handlers
  const setupSliderArrows = (prevSelector, nextSelector, containerSelector) => {
    const prevBtn = document.querySelector(prevSelector);
    const nextBtn = document.querySelector(nextSelector);
    const container = document.querySelector(containerSelector);

    if (prevBtn && container) {
      prevBtn.addEventListener('click', (e) => {
        e.preventDefault();
        container.scrollBy({ left: -220, behavior: 'smooth' });
      });
    }
    if (nextBtn && container) {
      nextBtn.addEventListener('click', (e) => {
        e.preventDefault();
        container.scrollBy({ left: 220, behavior: 'smooth' });
      });
    }
  };

  setupSliderArrows('.historic-prev-btn', '.historic-next-btn', '.historic-clashes-grid');
  setupSliderArrows('.spotlight-prev-btn', '.spotlight-next-btn', '.spotlight-cards-grid');

}); // end DOMContentLoaded





