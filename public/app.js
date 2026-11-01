// TikTok LIVE Chùa Online — 9:16 Vertical Engine
// Phật tử hướng về Đức Phật & Hiệu ứng Dâng Hương đi lên quỳ lạy

// ============================================================================
// BỘ 10 QUẺ LINH XĂM CHÙA ONLINE (FORTUNE STICKS DECK)
// ============================================================================
const FORTUNE_DECK = [
  {
    number: 1,
    rank: 'Thượng Thượng Cát',
    title: 'Nhật Xuất Đông Phương — Mặt Trời Mọc Phương Đông',
    poem: 'Đông phương nhật xuất chiếu Càn Khôn\nHoa nở đầy cành rạng sắc xuân\nCông danh tài lộc đều viên mãn\nGia đạo bình an phúc lộc tồn.',
    meaning: 'Mọi sự mưu cầu đều đại cát đại lợi. Công việc hanh thông, quý nhân phù trợ, gia đình hòa thuận ấm êm, vận may rực rỡ như bình minh tỏa sáng.'
  },
  {
    number: 8,
    rank: 'Thượng Cát',
    title: 'Kim Liên Khai Nở — Sen Vàng Tỏa Ngát',
    poem: 'Sen vàng nở rộ giữa hồ trong\nHương thơm lan tỏa khắp non sông\nLòng thành thắp nén nhang cầu nguyện\nTrời Phật chứng tri thỏa ước mong.',
    meaning: 'Tâm thiện lành ắt gặp phước báu nhiệm màu. Cầu tài đắc tài, cầu bình an đắc bình an, bệnh tật tiêu trừ, mọi điều ước nguyện đều thành hiện thực.'
  },
  {
    number: 12,
    rank: 'Đại Cát',
    title: 'Long Vân Tương Hội — Rồng Mây Gặp Gỡ',
    poem: 'Rồng thiêng gặp hội tầng mây xanh\nVượt Vũ Môn Quan rạng rỡ danh\nThí chủ kiên tâm hành thiện đạo\nPhúc dày lộc vượng khắp gia đình.',
    meaning: 'Thời vận đang lên mạnh mẽ. Thi cử đỗ đạt, sự nghiệp thăng hoa, kinh doanh buôn bán thu nhiều lợi lạc, có quý nhân dẫn lối chỉ đường.'
  },
  {
    number: 18,
    rank: 'Thượng Cát',
    title: 'Xuân Phong Đắc Ý — Gió Xuân Thuận Buồm',
    poem: 'Thuận buồm xuôi gió vượt trùng khơi\nBến giác bình yên nắng rạng ngời\nTài lộc dồi dào nhân duyên tốt\nBốn mùa hưng thịnh rộn niềm vui.',
    meaning: 'Mọi sự đi xa đều gặp may mắn, buôn bán hanh thông thuận lợi, tình duyên êm đẹp, người thân mạnh khỏe an khang.'
  },
  {
    number: 24,
    rank: 'Trung Cát',
    title: 'Vũ Quá Thiên Thanh — Mưa Tạnh Trời Trong',
    poem: 'Mưa qua trời lại sáng trong ngần\nGian khó lùi xa đón phúc phần\nGiữ vững lòng thành đừng nản chí\nHoa thơm trái ngọt đến mười phân.',
    meaning: 'Mọi khó khăn ách tắc thời gian qua sắp kết thúc, vận sáng mới đang tới. Hãy kiên nhẫn, giữ tâm bình an và chánh niệm.'
  },
  {
    number: 36,
    rank: 'Thượng Thượng Cát',
    title: 'Phúc Tinh Cao Chiếu — Sao Phúc Chiếu Mệnh',
    poem: 'Phúc tinh rực sáng giữa đêm rằm\nTừ bi Phật độ suốt quanh năm\nTài lộc tự nhiên về gõ cửa\nTrăm điều như ý vạn điều lành.',
    meaning: 'Sao Phúc chiếu mạng, tai qua nạn khỏi, tiền tài sung túc, gia đạo hưng long, muôn điều may mắn tự nhiên tìm đến.'
  },
  {
    number: 52,
    rank: 'Thượng Cát',
    title: 'Ngọc Xuất Côn Sơn — Ngọc Quý Phát Sáng',
    poem: 'Ngọc quý Côn Sơn tỏa ánh ngời\nBấy lâu rèn giũa nay gặp thời\nTri âm tương ngộ cùng nâng đỡ\nSự nghiệp thăng hoa rạng rỡ đời.',
    meaning: 'Công sức nỗ lực bấy lâu nay sắp được đền đáp xứng đáng. Được bạn bè tri âm và cấp trên nâng đỡ, sự nghiệp tiến bước dài.'
  },
  {
    number: 68,
    rank: 'Đại Cát',
    title: 'Lộc Mã Đồng Hương — Lộc Tài Cùng Tới',
    poem: 'Lộc Mã song hành đến tận nhà\nLàm ăn buôn bán nở như hoa\nTâm thành bố thí thêm công đức\nPhú quý vinh hoa khắp một nhà.',
    meaning: 'Quẻ đại lợi về đường tiền tài và kinh doanh. Nên mở lòng từ bi làm nhiều việc thiện để phúc lộc càng thêm trường tồn bền vững.'
  },
  {
    number: 81,
    rank: 'Thượng Cát',
    title: 'Nguyệt Nhập Trung Thiên — Trăng Rằm Giữa Đỉnh',
    poem: 'Trăng tròn vằng vặc giữa trời thu\nSoi sáng muôn phương sạch mây mù\nTình duyên viên mãn gia đình thuận\nTâm an vạn sự chẳng ưu tư.',
    meaning: 'Tình duyên và gia đạo vô cùng hòa hợp, tốt đẹp. Người độc thân dễ gặp duyên lành như ý, gia đình đón nhận tin vui hỷ sự.'
  },
  {
    number: 99,
    rank: 'Thượng Thượng Cát',
    title: 'Vạn Sự Viên Thành — Cửu Cửu Đại Cát',
    poem: 'Chín tầng mây trắng ánh hào quang\nTừ bi Phật Tổ độ nhân gian\nThí chủ lòng thành dâng lễ bái\nTrọn đời trường thọ hưởng vinh khang.',
    meaning: 'Quẻ tối thượng cát tường. Thân tâm an lạc, sức khỏe dồi dào, thọ khang vô lượng, vạn sự mưu cầu đều viên mãn trọn vẹn.'
  }
];

class ChuaOnlineApp {
  constructor() {
    this.seats = [];
    this.totalSeats = 48; // 24 left, 24 right (6 rows x 4 cols per side)
    this.devoteesMap = new Map(); // uniqueId -> { seatIndex, user, score, lastActive }
    this.leaderboard = []; // sorted top donors

    this.ws = null;
    this.isConnected = false;
    this.currentUsername = '';
    this.viewerCount = 0;

    this.isSimulating = false;
    this.simulationInterval = null;

    this.isCeremonyActive = false;
    this.recentGiftTimer = null;

    this.initDOM();
    this.initSeats();
    this.initParticleEngine();
    this.initAudioAndControls();
    this.initWebSocket();
    this.loadInitialDevotees();

    if (window.location.search.includes('modal')) {
      this.toggleModal(true);
    }
    if (window.location.search.includes('test') || window.location.search.includes('danghuong')) {
      setTimeout(() => {
        this.simulateGift(1);
      }, 400);
    }
  }

  initDOM() {
    this.sanctuaryEl = document.getElementById('devotees-sanctuary');
    this.statusActionEl = document.getElementById('status-action-text');
    this.statusDotEl = document.getElementById('status-indicator-dot');
    this.statusBadgeEl = document.getElementById('status-right-badge');
    this.viewerCountEl = document.getElementById('viewer-count');
    this.giftFeedEl = document.getElementById('left-gift-feed');
    this.centerPopupEl = document.getElementById('center-gift-popup');
    this.popupIconEl = document.getElementById('popup-gift-icon');
    this.popupCountEl = document.getElementById('popup-combo-text');
    this.popupBadgeEl = document.getElementById('popup-badge-pill');
    this.leaderboardListEl = document.getElementById('leaderboard-list');

    // Dâng hương walking actor & toast
    this.walkingActor = document.getElementById('walking-devotee');
    this.walkingSpriteImg = document.getElementById('walking-sprite-img');
    this.walkingNametag = document.getElementById('walking-nametag');
    this.ceremonyToast = document.getElementById('ceremony-toast');

    // Modals & Toolbar buttons
    this.connectModal = document.getElementById('connect-modal');
    this.tiktokInput = document.getElementById('tiktok-username-input');
    this.btnConnect = document.getElementById('btn-connect-tiktok');
    this.btnDisconnect = document.getElementById('btn-disconnect-tiktok');
    this.connectionStatusBadge = document.getElementById('modal-conn-status');

    // Fortune Oracle Modal elements
    this.fortuneModal = document.getElementById('fortune-modal');
    this.fortuneRankBadge = document.getElementById('fortune-rank-badge');
    this.fortuneTitle = document.getElementById('fortune-title');
    this.fortuneDevotee = document.getElementById('fortune-devotee');
    this.fortunePoem = document.getElementById('fortune-poem');
    this.fortuneMeaning = document.getElementById('fortune-meaning');
    this.btnCloseFortune = document.getElementById('btn-close-fortune');
    this.fortuneCloseTimer = null;

    // Audio & Volume controls in settings modal
    this.btnCfgAudio = document.getElementById('btn-cfg-audio');
    this.btnCfgAmbient = document.getElementById('btn-cfg-ambient');
    this.sliderSfxVol = document.getElementById('slider-sfx-vol');
    this.valSfxVol = document.getElementById('val-sfx-vol');
    this.sliderAmbientVol = document.getElementById('slider-ambient-vol');
    this.valAmbientVol = document.getElementById('val-ambient-vol');
    this.selectAudioTrack = document.getElementById('select-audio-track');
    this.btnTryFortune = document.getElementById('btn-try-fortune');
    this.btnCfgSim = document.getElementById('btn-cfg-sim');
  }

  // Pre-calculate realistic perspective seat positions in 9:16 Vertical Pagoda Hall
  // Devotees sit symmetrically on left and right sides of the red carpet, FACING FORWARD TOWARDS THE BUDDHA
  initSeats() {
    this.seats = [];
    const rows = 6;
    const colsPerSide = 4;

    // y spans from 64% (near altar base) to 93% (front foreground)
    // Symmetrical columns left of red carpet: 6% to 40%
    // Symmetrical columns right of red carpet: 60% to 94%
    for (let r = 0; r < rows; r++) {
      const rowProgress = r / (rows - 1); // 0 (back near altar) to 1 (front)
      // Perspective scale from 0.48 at back to 1.02 at front
      const scale = 0.48 + Math.pow(rowProgress, 1.2) * 0.54;
      const y = 64 + rowProgress * 29; // 64% to 93%

      // Left Wing (Facing Buddha Altar)
      for (let c = 0; c < colsPerSide; c++) {
        const colProgress = c / (colsPerSide - 1);
        const leftMin = 13 - rowProgress * 7;  // 13% to 6%
        const leftMax = 42 - rowProgress * 2;  // 42% to 40%
        const x = leftMin + colProgress * (leftMax - leftMin);

        this.seats.push({
          id: `L_${r}_${c}`,
          side: 'left',
          row: r,
          col: c,
          x,
          y,
          scale,
          occupiedBy: null,
          element: null
        });
      }

      // Right Wing (Facing Buddha Altar)
      for (let c = 0; c < colsPerSide; c++) {
        const colProgress = c / (colsPerSide - 1);
        const rightMin = 58 + rowProgress * 2; // 58% to 60%
        const rightMax = 87 + rowProgress * 7; // 87% to 94%
        const x = rightMin + colProgress * (rightMax - rightMin);

        this.seats.push({
          id: `R_${r}_${c}`,
          side: 'right',
          row: r,
          col: c,
          x,
          y,
          scale,
          occupiedBy: null,
          element: null
        });
      }
    }

    // Render DOM elements for seats
    this.sanctuaryEl.innerHTML = '';
    this.seats.forEach((seat, idx) => {
      const el = document.createElement('div');
      el.className = 'devotee-seat';
      el.id = `seat-${idx}`;
      el.style.left = `${seat.x}%`;
      el.style.top = `${seat.y}%`;
      el.style.zIndex = Math.round(seat.y * 10);
      el.style.transform = `translate(-50%, -100%) scale(${seat.scale.toFixed(2)})`;
      el.style.display = 'none';

      // DEVOTEES FACE FORWARD TOWARDS THE BUDDHA (assets/devotee.png)
      el.innerHTML = `
        <div class="devotee-sprite-wrap">
          <img class="devotee-sprite-img" src="assets/devotee.png" alt="Phật tử hướng Phật" />
        </div>
        <div class="devotee-name-badge">
          <div class="devotee-badge-avatar">TA</div>
          <span class="devotee-badge-name">Phật tử</span>
        </div>
      `;

      seat.element = el;
      this.sanctuaryEl.appendChild(el);
    });
  }

  initParticleEngine() {
    const canvas = document.getElementById('particle-canvas');
    if (canvas && window.ParticleSystem) {
      this.particles = new window.ParticleSystem(canvas);
    }
  }

  initAudioAndControls() {
    document.getElementById('btn-open-connect')?.addEventListener('click', () => this.toggleModal(true));
    document.getElementById('btn-close-modal')?.addEventListener('click', () => this.toggleModal(false));
    this.connectModal?.addEventListener('click', (e) => {
      if (e.target === this.connectModal) this.toggleModal(false);
    });

    // Close fortune modal
    this.btnCloseFortune?.addEventListener('click', () => {
      this.fortuneModal?.classList.remove('visible');
    });
    this.fortuneModal?.addEventListener('click', (e) => {
      if (e.target === this.fortuneModal) {
        this.fortuneModal.classList.remove('visible');
      }
    });

    // Audio SFX Toggle in Settings Modal
    if (this.btnCfgAudio) {
      const isSfxOn = window.templeAudio?.sfxEnabled !== false;
      this.btnCfgAudio.textContent = isSfxOn ? '🔔 Âm Thanh: BẬT' : '🔇 Âm Thanh: TẮT';
      this.btnCfgAudio.classList.toggle('active', isSfxOn);
      this.btnCfgAudio.addEventListener('click', () => {
        const next = !window.templeAudio?.sfxEnabled;
        window.templeAudio?.setSfxEnabled(next);
        this.btnCfgAudio.textContent = next ? '🔔 Âm Thanh: BẬT' : '🔇 Âm Thanh: TẮT';
        this.btnCfgAudio.classList.toggle('active', next);
      });
    }

    // SFX Volume Slider
    if (this.sliderSfxVol && this.valSfxVol) {
      const sfxPct = Math.round((window.templeAudio?.sfxVolume || 0.85) * 100);
      this.sliderSfxVol.value = String(sfxPct);
      this.valSfxVol.textContent = `${sfxPct}%`;
      this.sliderSfxVol.addEventListener('input', (e) => {
        const val = Number(e.target.value);
        this.valSfxVol.textContent = `${val}%`;
        window.templeAudio?.setSfxVolume(val / 100);
      });
    }

    // Ambient Meditation Music Toggle in Settings Modal
    if (this.btnCfgAmbient) {
      const isAmbOn = Boolean(window.templeAudio?.bgMusicEnabled);
      this.btnCfgAmbient.textContent = isAmbOn ? '🪷 Nhạc Thiền: BẬT' : '🪷 Nhạc Thiền: TẮT';
      this.btnCfgAmbient.classList.toggle('active', isAmbOn);
      this.btnCfgAmbient.addEventListener('click', () => {
        const next = !window.templeAudio?.bgMusicEnabled;
        window.templeAudio?.setMusicEnabled(next);
        this.btnCfgAmbient.textContent = next ? '🪷 Nhạc Thiền: BẬT' : '🪷 Nhạc Thiền: TẮT';
        this.btnCfgAmbient.classList.toggle('active', next);
      });
    }

    // Ambient Meditation Music Volume Slider
    if (this.sliderAmbientVol && this.valAmbientVol) {
      const ambPct = Math.round((window.templeAudio?.bgMusicVolume || 0.60) * 100);
      this.sliderAmbientVol.value = String(ambPct);
      this.valAmbientVol.textContent = `${ambPct}%`;
      this.sliderAmbientVol.addEventListener('input', (e) => {
        const val = Number(e.target.value);
        this.valAmbientVol.textContent = `${val}%`;
        window.templeAudio?.setMusicVolume(val / 100);
      });
    }

    // Chọn bài nhạc nền từ thư mục audio
    if (this.selectAudioTrack) {
      window.templeAudio?.loadAudioTracks().then(tracks => {
        if (!tracks || tracks.length === 0) {
          this.selectAudioTrack.innerHTML = '<option value="">(Không có file trong thư mục audio/)</option>';
          return;
        }

        const currentUrl = window.templeAudio.currentTrackUrl;
        this.selectAudioTrack.innerHTML = tracks.map(t => {
          const selected = t.url === currentUrl ? 'selected' : '';
          return `<option value="${t.url}" data-title="${t.title}" ${selected}>🎵 ${t.title}</option>`;
        }).join('');

        const isSynthetic = currentUrl === 'zen_synthetic' ? 'selected' : '';
        this.selectAudioTrack.innerHTML += `<option value="zen_synthetic" data-title="Chuông Bát Thiền Tây Tạng (Tự sinh)" ${isSynthetic}>🪷 Chuông Bát Thiền Tây Tạng (Tự sinh)</option>`;
      });

      this.selectAudioTrack.addEventListener('change', (e) => {
        const opt = e.target.selectedOptions[0];
        const url = opt ? opt.value : '';
        const title = opt ? opt.getAttribute('data-title') : '';
        window.templeAudio?.selectTrack(url, title);
      });
    }

    // Mở khóa âm thanh khi người dùng click lần đầu
    const unlockAudio = () => {
      window.templeAudio?.init();
      window.removeEventListener('pointerdown', unlockAudio);
    };
    window.addEventListener('pointerdown', unlockAudio, { once: true });

    // Fortune Test CTA Button
    this.btnTryFortune?.addEventListener('click', () => {
      this.simulateFortune();
    });

    // Auto Simulation Toggle Button in Settings Modal
    this.btnCfgSim?.addEventListener('click', () => this.toggleSimulation());

    // Fullscreen Button
    const btnFullscreen = document.getElementById('btn-fullscreen');
    btnFullscreen?.addEventListener('click', () => {
      const container = document.querySelector('.stage-container');
      if (!document.fullscreenElement) {
        container.requestFullscreen().catch(() => {});
        container.classList.add('fullscreen');
      } else {
        document.exitFullscreen().catch(() => {});
        container.classList.remove('fullscreen');
      }
    });

    // TikTok Connection Buttons
    this.btnConnect?.addEventListener('click', () => this.connectTikTok());
    this.btnDisconnect?.addEventListener('click', () => this.disconnectTikTok());
    this.tiktokInput?.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') this.connectTikTok();
    });

    // Simulation Grid Buttons
    document.getElementById('sim-add-user')?.addEventListener('click', () => this.simulateUserJoin());
    document.getElementById('sim-chat')?.addEventListener('click', () => this.simulateChat());
    document.getElementById('sim-gift-1')?.addEventListener('click', () => this.simulateGift(1));
    document.getElementById('sim-gift-5')?.addEventListener('click', () => this.simulateGift(5));
    document.getElementById('sim-gift-10')?.addEventListener('click', () => this.simulateGift(10));
    document.getElementById('sim-fortune')?.addEventListener('click', () => this.simulateFortune());
  }

  toggleModal(open) {
    if (this.connectModal) {
      this.connectModal.classList.toggle('open', open);
    }
  }

  loadInitialDevotees() {
    const initialNames = [
      'Trang Anh', 'Hải Ngọc', 'Tuấn Giang', 'Quang Anh',
      'Lan Nam', 'Ngọc Ngọc', 'Thảo Anh', 'Thảo Phương',
      'Tổng Đài', 'Minh Anh', 'Bảo Tiên', 'Hải Anh',
      'Tuấn Nhi', 'Thành Đài', 'Thảo Long', 'Quách Trường',
      'Bảo Giang', 'Hoàng Nam', 'Trang Phương', 'Hoàng',
      'Quỳnh Như', 'Thanh Trúc', 'Bảo An', 'Kim Liên',
      'Hữu Phước', 'Đức Huy', 'Gia Bảo', 'Thanh Tâm',
      'Hồng Phúc', 'Kim Ngân', 'Đăng Khoa', 'Khánh Linh',
      'Phương Nam', 'Ngọc Lan', 'Hoài An', 'Bảo Ngọc',
      'Văn Thắng', 'Ánh Tuyết', 'Mai Chi', 'Việt Anh'
    ];

    initialNames.forEach((name, idx) => {
      if (idx < this.seats.length) {
        this.assignDevoteeToSeat(idx, {
          uniqueId: `user_${idx}`,
          nickname: name,
          profilePictureUrl: null
        });
      }
    });

    // Show initial prayer bubbles
    setTimeout(() => {
      const seat1 = this.seats.findIndex(s => s.occupiedBy?.nickname === 'Minh Anh');
      if (seat1 !== -1) this.showSpeechBubble(seat1, 'con xin vía học giỏi ạ', 60000);

      const seat2 = this.seats.findIndex(s => s.occupiedBy?.nickname === 'Quách Trường');
      if (seat2 !== -1) this.showSpeechBubble(seat2, 'Nam mô A Di Đà Phật', 60000);

      const seat3 = this.seats.findIndex(s => s.occupiedBy?.nickname === 'Thảo Long');
      if (seat3 !== -1) this.showSpeechBubble(seat3, 'ADĐP 🙏', 60000);
    }, 400);

    // Initial Leaderboard "HÒM CÔNG ĐỨC" - Không có sẵn tên khi khởi động
    this.leaderboard = [];
    this.renderLeaderboard();

    // Initial Left Gift Alerts
    this.addGiftAlert({
      nickname: 'Tuấn Nhi',
      initials: 'TN',
      giftName: 'Hoa hồng',
      giftIcon: '🌹',
      count: 1
    });
    this.addGiftAlert({
      nickname: 'Hải Anh',
      initials: 'HA',
      giftName: 'Hoa hồng',
      giftIcon: '🌹',
      count: 1
    });
    this.addGiftAlert({
      nickname: 'Bảo Tiên',
      initials: 'BT',
      giftName: 'Hoa hồng',
      giftIcon: '🌹',
      count: 1
    });
  }

  getInitials(name) {
    if (!name) return 'PT';
    const parts = name.trim().split(/\s+/);
    if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }

  assignDevoteeToSeat(seatIndex, user) {
    const seat = this.seats[seatIndex];
    if (!seat) return;

    seat.occupiedBy = user;
    this.devoteesMap.set(user.uniqueId, {
      seatIndex,
      user,
      lastActive: Date.now()
    });

    const el = seat.element;
    const nameEl = el.querySelector('.devotee-badge-name');
    const avatarEl = el.querySelector('.devotee-badge-avatar');

    nameEl.textContent = user.nickname || user.uniqueId;
    if (user.profilePictureUrl) {
      avatarEl.innerHTML = `<img src="${user.profilePictureUrl}" alt="${user.nickname}" />`;
    } else {
      avatarEl.textContent = this.getInitials(user.nickname || user.uniqueId);
    }

    el.style.display = 'flex';
  }

  getAvailableSeat(user) {
    if (this.devoteesMap.has(user.uniqueId)) {
      const data = this.devoteesMap.get(user.uniqueId);
      data.lastActive = Date.now();
      return data.seatIndex;
    }

    for (let i = 0; i < this.seats.length; i++) {
      if (!this.seats[i].occupiedBy) {
        return i;
      }
    }

    let oldestIndex = 0;
    let oldestTime = Infinity;

    for (const [uid, data] of this.devoteesMap.entries()) {
      if (data.lastActive < oldestTime) {
        oldestTime = data.lastActive;
        oldestIndex = data.seatIndex;
      }
    }

    for (const [uid, data] of this.devoteesMap.entries()) {
      if (data.seatIndex === oldestIndex) {
        this.devoteesMap.delete(uid);
        break;
      }
    }

    return oldestIndex;
  }

  handleUserJoin(user) {
    const seatIndex = this.getAvailableSeat(user);
    this.assignDevoteeToSeat(seatIndex, user);

    this.bowSeat(seatIndex);
    this.showSpeechBubble(seatIndex, 'A Di Đà Phật 🙏');
    this.updateStatusText(`${user.nickname || user.uniqueId} - Vào lễ Phật`);
  }

  handleUserChat(user, comment) {
    const seatIndex = this.getAvailableSeat(user);
    this.assignDevoteeToSeat(seatIndex, user);

    this.bowSeat(seatIndex);
    window.templeAudio?.playWoodenFish();
    this.showSpeechBubble(seatIndex, comment);
  }

  // =========================================================================
  // HIỆU ỨNG DÂNG HƯƠNG: ĐI LÊN THẢM ĐỎ & QUỲ LẠY ĐỨC PHẬT (9:16 VERTICAL)
  // =========================================================================
  triggerIncenseWalkingCeremony(user, giftData) {
    if (!this.walkingActor) return;

    const nickname = user.nickname || user.uniqueId;
    const count = giftData.repeatCount || 1;
    const coins = (giftData.diamondCount || 1) * count;

    this.walkingNametag.textContent = `${nickname} — Dâng Hương`;
    if (this.ceremonyToast) {
      this.ceremonyToast.textContent = `🙏 Phật Tử ${nickname} Đang Dâng Nén Tâm Hương Lên Đức Phật 🙏`;
      this.ceremonyToast.classList.add('show');
    }

    // Step 1: Place devotee at bottom of red carpet runner
    this.walkingActor.style.display = 'flex';
    this.walkingActor.style.opacity = '1';
    this.walkingActor.style.top = '93%';
    this.walkingActor.style.transform = 'translate(-50%, -100%) scale(1.02)';
    this.walkingSpriteImg.src = 'assets/devotee_walk.png'; // walking holding glowing incense sticks
    this.walkingActor.classList.add('is-walking');

    window.templeAudio?.playIncenseChime();

    // Step 2: Smoothly walk up the red carpet towards the incense burner at top: 58%
    setTimeout(() => {
      this.walkingActor.style.top = '58%'; // Arrive right before the bronze incense urn
      this.walkingActor.style.transform = 'translate(-50%, -100%) scale(0.68)';
    }, 50);

    // Step 3: Arrive at Altar (after ~3.2s) -> Kneel down & Prostrate / Lạy Phật
    setTimeout(() => {
      this.walkingActor.classList.remove('is-walking');
      // Devotee kneels facing Buddha
      this.walkingSpriteImg.src = 'assets/devotee.png';

      setTimeout(() => {
        // Devotee prostrates / bows deeply to Buddha (Kowtow)
        this.walkingSpriteImg.src = 'assets/devotee_bow.png';
        this.walkingActor.classList.add('bowing');

        // Incense urn bursts with sacred smoke & golden sparks!
        this.particles?.boostIncense(6000);
        window.templeAudio?.playBell(coins >= 5 ? 0.9 : 1.0);
        window.templeAudio?.playWoodenFish();

        // Trigger center gift popup
        this.triggerCenterPopup(coins >= 10 ? '🪷' : (coins >= 5 ? '🔔' : '🌹'), count, `Phật Tử ${nickname} Dâng Hương`);

        // Other devotees bow together in reverence
        this.bowAllDevotees();

        // Step 4: Rise back up to prayer pose after bowing
        setTimeout(() => {
          this.walkingSpriteImg.src = 'assets/devotee.png';
          this.walkingActor.classList.remove('bowing');

          // Devotee is blessed, fade out smoothly
          setTimeout(() => {
            this.walkingActor.style.transition = 'opacity 1.2s, top 3.4s';
            this.walkingActor.style.opacity = '0';
            if (this.ceremonyToast) this.ceremonyToast.classList.remove('show');
            setTimeout(() => {
              this.walkingActor.style.display = 'none';
              this.walkingActor.style.transition = 'top 3.4s cubic-bezier(0.25, 0.1, 0.25, 1)';
            }, 1300);
          }, 2400);

        }, 1800);

      }, 500);

    }, 3300);
  }

  handleUserGift(user, giftData) {
    const seatIndex = this.getAvailableSeat(user);
    this.assignDevoteeToSeat(seatIndex, user);

    const diamondCount = giftData.diamondCount || 1;
    const repeatCount = giftData.repeatCount || 1;
    const totalCoins = diamondCount * repeatCount;

    // HIỆU ỨNG ĐI LÊN THẢM ĐỎ VÀ QUỲ LẠY ĐỨC PHẬT
    this.triggerIncenseWalkingCeremony(user, giftData);

    this.updateStatusText(`${user.nickname} - Dâng hương lễ Phật`);

    this.addGiftAlert({
      nickname: user.nickname || user.uniqueId,
      initials: this.getInitials(user.nickname || user.uniqueId),
      giftName: giftData.giftName || 'Hoa hồng',
      giftIcon: totalCoins >= 10 ? '🪷' : (totalCoins >= 5 ? '🔔' : '🌹'),
      count: repeatCount
    });

    this.updateLeaderboard(user, totalCoins);
  }

  bowSeat(seatIndex) {
    const seat = this.seats[seatIndex];
    if (seat && seat.element) {
      const img = seat.element.querySelector('.devotee-sprite-img');
      if (img) img.src = 'assets/devotee_bow.png'; // switch to bowing SVG
      seat.element.classList.remove('bowing');
      void seat.element.offsetWidth;
      seat.element.classList.add('bowing');

      setTimeout(() => {
        if (img) img.src = 'assets/devotee.png'; // switch back to prayer pose
        seat.element.classList.remove('bowing');
      }, 1600);
    }
  }

  bowAllDevotees() {
    this.seats.forEach((seat, idx) => {
      if (seat.occupiedBy) {
        setTimeout(() => this.bowSeat(idx), (seat.row * 80) + (Math.random() * 70));
      }
    });
  }

  showSpeechBubble(seatIndex, text, durationMs = 5000) {
    const seat = this.seats[seatIndex];
    if (!seat || !seat.element) return;

    const oldBubble = seat.element.querySelector('.speech-bubble');
    if (oldBubble) oldBubble.remove();

    const bubble = document.createElement('div');
    bubble.className = 'speech-bubble';
    const displayComment = text.length > 32 ? text.substring(0, 30) + '...' : text;
    bubble.textContent = displayComment;

    seat.element.appendChild(bubble);

    setTimeout(() => {
      bubble.remove();
    }, durationMs);
  }

  updateStatusText(text) {
    if (this.statusActionEl) {
      this.statusActionEl.textContent = text;
    }
  }

  addGiftAlert(item) {
    if (!this.giftFeedEl) return;

    const card = document.createElement('div');
    card.className = 'gift-alert-card';
    card.innerHTML = `
      <div class="gift-alert-user">
        <div class="gift-alert-avatar">${item.initials}</div>
        <div class="gift-alert-text">
          <span class="gift-user-name">${item.nickname}</span>
          <span class="gift-action-desc">đã gửi ${item.giftName}</span>
        </div>
      </div>
      <div class="gift-alert-icon-count">
        <span>${item.giftIcon}</span>
        <span class="combo-x">x${item.count}</span>
      </div>
    `;

    this.giftFeedEl.appendChild(card);

    while (this.giftFeedEl.children.length > 3) {
      this.giftFeedEl.removeChild(this.giftFeedEl.firstChild);
    }

    setTimeout(() => {
      card.style.transition = 'opacity 0.4s, transform 0.4s';
      card.style.opacity = '0';
      card.style.transform = 'translateY(-10px)';
      setTimeout(() => card.remove(), 400);
    }, 5000);
  }

  triggerCenterPopup(icon, count, badgeText) {
    if (!this.centerPopupEl) return;

    this.popupIconEl.textContent = icon;
    this.popupCountEl.textContent = `x${count}`;
    this.popupBadgeEl.textContent = badgeText;

    this.centerPopupEl.classList.add('show');

    clearTimeout(this.recentGiftTimer);
    this.recentGiftTimer = setTimeout(() => {
      this.centerPopupEl.classList.remove('show');
    }, 3200);
  }

  updateLeaderboard(user, coins) {
    const uniqueId = user.uniqueId || '';
    const nickname = user.nickname || uniqueId || 'Phật tử';
    const existing = this.leaderboard.find(item =>
      (uniqueId && item.uniqueId === uniqueId) || item.nickname === nickname
    );
    if (existing) {
      existing.score += coins;
      if (nickname && nickname !== existing.nickname) {
        existing.nickname = nickname;
        existing.initials = this.getInitials(nickname);
      }
    } else {
      this.leaderboard.push({
        uniqueId: uniqueId,
        nickname: nickname,
        initials: this.getInitials(nickname),
        score: coins
      });
    }

    this.leaderboard.sort((a, b) => b.score - a.score);
    this.renderLeaderboard();
  }

  resetLeaderboard() {
    this.leaderboard = [];
    this.renderLeaderboard();
  }

  renderLeaderboard() {
    if (!this.leaderboardListEl) return;
    this.leaderboardListEl.innerHTML = '';

    if (this.leaderboard.length === 0) {
      const emptyLi = document.createElement('li');
      emptyLi.className = 'leaderboard-empty';
      emptyLi.textContent = 'Chưa có người dâng lễ';
      this.leaderboardListEl.appendChild(emptyLi);
      return;
    }

    const top10 = this.leaderboard.slice(0, 10);
    top10.forEach((item, index) => {
      const rank = index + 1;
      const li = document.createElement('li');
      li.className = `leaderboard-item rank-${rank}`;
      li.innerHTML = `
        <div class="rank-left">
          <span class="rank-num-badge">${rank}</span>
          <span class="rank-avatar-initials">${item.initials}</span>
          <span class="rank-username" title="${item.nickname}">${item.nickname}</span>
        </div>
        <span class="rank-score">${item.score}🪙</span>
      `;
      this.leaderboardListEl.appendChild(li);
    });
  }

  initWebSocket() {
    const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
    const wsUrl = `${protocol}//${window.location.host}/ws`;

    try {
      this.ws = new WebSocket(wsUrl);

      this.ws.onopen = () => {
        console.log('Connected to Pagoda Live Backend Server');
        this.fetchServerStatus();
      };

      this.ws.onmessage = (event) => {
        try {
          const msg = JSON.parse(event.data);
          this.handleServerEvent(msg);
        } catch (e) {
          console.error('Error parsing WS message', e);
        }
      };

      this.ws.onclose = () => {
        setTimeout(() => this.initWebSocket(), 3000);
      };
    } catch (e) {
      console.error('WebSocket connection error:', e);
    }
  }

  async fetchServerStatus() {
    try {
      const res = await fetch('/api/status');
      const data = await res.json();
      this.updateConnectionState(data.isConnected, data.currentUsername, data.viewerCount);
      const badge = document.getElementById('conn-mode-badge') || document.getElementById('euler-api-badge');
      if (badge) {
        badge.textContent = '🟢 Trực Tiếp (Không Cần API)';
      }
    } catch (e) {}
  }

  handleServerEvent(msg) {
    switch (msg.type) {
      case 'status':
        this.updateConnectionState(msg.isConnected, msg.currentUsername, msg.viewerCount);
        break;

      case 'connected':
        this.updateConnectionState(true, msg.username, msg.viewerCount || 1);
        this.updateStatusText(`Đã kết nối LIVE: @${msg.username}`);
        window.templeAudio?.playBell(1.0);
        this.resetLeaderboard();
        break;

      case 'disconnected':
        this.updateConnectionState(false, '', 0);
        this.updateStatusText('Chưa kết nối TikTok');
        this.resetLeaderboard();
        break;

      case 'roomUser':
        this.setViewerCount(msg.viewerCount);
        break;

      case 'member':
        this.handleUserJoin(msg.user);
        break;

      case 'chat':
        this.handleUserChat(msg.user, msg.comment);
        break;

      case 'gift':
        this.handleUserGift(msg.user, msg);
        break;

      case 'like':
        this.particles?.burstLotusShower(3);
        break;

      case 'drawFortune':
        this.triggerFortuneCeremony(msg.user, msg.fortune);
        break;
    }
  }

  updateConnectionState(isConnected, username, viewerCount = 0) {
    this.isConnected = isConnected;
    this.currentUsername = username || '';
    this.setViewerCount(viewerCount);

    if (isConnected) {
      this.statusDotEl?.classList.remove('offline');
      this.statusBadgeEl?.classList.add('live');
      this.statusBadgeEl.innerHTML = `<span class="badge-dot"></span> LIVE <span id="viewer-count">${this.viewerCount}</span>`;

      if (this.connectionStatusBadge) {
        this.connectionStatusBadge.className = 'status-badge-live';
        this.connectionStatusBadge.textContent = `● Đang Kết Nối: @${username}`;
      }
      if (this.btnConnect) this.btnConnect.style.display = 'none';
      if (this.btnDisconnect) this.btnDisconnect.style.display = 'block';
    } else {
      this.statusDotEl?.classList.add('offline');
      this.statusBadgeEl?.classList.remove('live');
      this.statusBadgeEl.innerHTML = `<span class="badge-dot"></span> OFFLINE <span id="viewer-count">0</span>`;

      if (this.connectionStatusBadge) {
        this.connectionStatusBadge.className = 'status-badge-offline';
        this.connectionStatusBadge.textContent = `● Chưa Kết Nối`;
      }
      if (this.btnConnect) this.btnConnect.style.display = 'block';
      if (this.btnDisconnect) this.btnDisconnect.style.display = 'none';
    }
  }

  setViewerCount(count) {
    this.viewerCount = count || 0;
    const el = document.getElementById('viewer-count');
    if (el) el.textContent = this.viewerCount;
  }

  async connectTikTok() {
    let username = this.tiktokInput?.value.trim();
    if (!username) {
      alert('Vui lòng nhập TikTok username hoặc link LIVE (ví dụ: @chuaonline hoặc dán link phòng LIVE)');
      return;
    }

    this.btnConnect.disabled = true;
    this.btnConnect.textContent = 'Đang kết nối...';

    try {
      const res = await fetch('/api/connect', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username })
      });
      const data = await res.json();
      if (data.success) {
        this.resetLeaderboard();
        this.toggleModal(false);
      } else {
        alert('Lỗi kết nối: ' + (data.message || 'Không thể kết nối tới phòng Live'));
      }
    } catch (e) {
      alert('Không thể gửi yêu cầu kết nối tới máy chủ');
    } finally {
      this.btnConnect.disabled = false;
      this.btnConnect.textContent = 'Kết Nối';
    }
  }

  async disconnectTikTok() {
    try {
      await fetch('/api/disconnect', { method: 'POST' });
    } catch (e) {}
    this.resetLeaderboard();
  }

  toggleSimulation() {
    this.isSimulating = !this.isSimulating;

    if (this.btnCfgSim) {
      this.btnCfgSim.textContent = this.isSimulating
        ? '🤖 Tự Động Mô Phỏng: ĐANG BẬT'
        : '🤖 Tự Động Mô Phỏng: TẮT';
      this.btnCfgSim.classList.toggle('active', this.isSimulating);
    }

    if (this.isSimulating) {
      this.updateStatusText('Đang chạy Chế độ Mô phỏng Live');
      this.setViewerCount(Math.floor(50 + Math.random() * 80));

      this.simulationInterval = setInterval(() => {
        const rand = Math.random();
        if (rand < 0.25) {
          this.simulateUserJoin();
        } else if (rand < 0.55) {
          this.simulateChat();
        } else if (rand < 0.78) {
          const coinTiers = [1, 1, 1, 5, 5, 10];
          const coins = coinTiers[Math.floor(Math.random() * coinTiers.length)];
          this.simulateGift(coins);
        } else {
          this.simulateFortune();
        }
      }, 4000);
    } else {
      if (this.simulationInterval) {
        clearInterval(this.simulationInterval);
        this.simulationInterval = null;
      }
    }
  }

  // =========================================================================
  // NGHI THỨC XIN XĂM / GIEO QUẺ LINH XĂM (FORTUNE ORACLE CEREMONY)
  // =========================================================================
  triggerFortuneCeremony(user, fortune) {
    if (!fortune) {
      fortune = FORTUNE_DECK[Math.floor(Math.random() * FORTUNE_DECK.length)];
    }

    const nickname = user?.nickname || user?.uniqueId || 'Phật tử';

    // 1. Tiếng lắc ống xăm tre liên hoàn + tiếng chuông ngọc
    window.templeAudio?.playFortuneShake();
    setTimeout(() => {
      window.templeAudio?.playIncenseChime();
    }, 650);

    // 2. An tọa và lạy Phật
    const seatIndex = this.getAvailableSeat(user);
    this.assignDevoteeToSeat(seatIndex, user);
    this.bowSeat(seatIndex);
    this.showSpeechBubble(seatIndex, `🎋 Xin xăm: Quẻ số ${fortune.number} (${fortune.rank})`, 8000);

    // 3. Banner thông báo dâng hương & quẻ
    if (this.ceremonyToast) {
      this.ceremonyToast.textContent = `🎋 Phật Tử ${nickname} Gieo Được Quẻ Số ${fortune.number} — ${fortune.rank} 🎋`;
      this.ceremonyToast.classList.add('show');
      setTimeout(() => {
        if (!this.isCeremonyActive) this.ceremonyToast.classList.remove('show');
      }, 7000);
    }

    // 4. Mở Modal Tờ Giải Quẻ Linh Xăm
    if (this.fortuneModal) {
      if (this.fortuneRankBadge) this.fortuneRankBadge.textContent = fortune.rank.toUpperCase();
      if (this.fortuneTitle) this.fortuneTitle.textContent = `Quẻ Số ${fortune.number} — ${fortune.title}`;
      if (this.fortuneDevotee) this.fortuneDevotee.textContent = `Thí chủ cầu quẻ: ${nickname}`;
      if (this.fortunePoem) this.fortunePoem.textContent = fortune.poem;
      if (this.fortuneMeaning) this.fortuneMeaning.textContent = `Lời giải: ${fortune.meaning}`;

      this.fortuneModal.classList.add('visible');

      // Tự động đóng sau 11 giây
      clearTimeout(this.fortuneCloseTimer);
      this.fortuneCloseTimer = setTimeout(() => {
        this.fortuneModal.classList.remove('visible');
      }, 11000);
    }

    this.updateStatusText(`${nickname} - Gieo quẻ Linh Xăm`);
  }

  simulateFortune() {
    const user = this.getRandomSimulatedUser();
    const fortune = FORTUNE_DECK[Math.floor(Math.random() * FORTUNE_DECK.length)];
    this.triggerFortuneCeremony(user, fortune);
  }

  getRandomSimulatedUser() {
    const names = [
      'Ánh Tuyết', 'Hữu Phước', 'Quỳnh Trang', 'Đức Huy',
      'Mai Linh', 'Gia Bảo', 'Thanh Tâm', 'Hồng Phúc',
      'Kim Ngân', 'Đăng Khoa', 'Khánh Linh', 'Phương Nam',
      'Ngọc Lan', 'Hoài An', 'Bảo Ngọc', 'Văn Thắng'
    ];
    const name = names[Math.floor(Math.random() * names.length)];
    return {
      uniqueId: 'sim_' + name.toLowerCase().replace(/\s+/g, '_'),
      nickname: name,
      profilePictureUrl: null
    };
  }

  simulateUserJoin() {
    const user = this.getRandomSimulatedUser();
    this.handleUserJoin(user);
    this.setViewerCount(this.viewerCount + 1);
  }

  simulateChat() {
    const prayers = [
      'Nam mô A Di Đà Phật 🙏',
      'ADĐP 🙏',
      'Cầu gia đạo bình an mạnh khỏe',
      'Con xin vía thi tốt đỗ đạt ạ',
      'Nam mô Bổn Sư Thích Ca Mâu Ni Phật',
      'Cầu công danh sự nghiệp hanh thông',
      'Cầu cho cha mẹ sống lâu trăm tuổi',
      'Tùy hỷ công đức 🙏',
      'Con sám hối mọi lỗi lầm 🙏',
      'Cầu quốc thái dân an'
    ];
    const user = this.getRandomSimulatedUser();
    const comment = prayers[Math.floor(Math.random() * prayers.length)];
    this.handleUserChat(user, comment);
  }

  simulateGift(coins = 1) {
    const user = this.getRandomSimulatedUser();
    let giftName = 'Hoa hồng';
    if (coins >= 10) giftName = 'Hoa sen vàng';
    else if (coins >= 5) giftName = 'Chuông đồng';

    this.handleUserGift(user, {
      giftName,
      diamondCount: coins,
      repeatCount: 1
    });
  }
}

// Start application on page load
window.addEventListener('DOMContentLoaded', () => {
  window.chuaApp = new ChuaOnlineApp();
});
