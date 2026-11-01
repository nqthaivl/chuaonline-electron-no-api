import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { WebSocketServer, WebSocket } from 'ws';
import { TikTokLiveConnection, WebcastEvent, ControlEvent } from 'tiktok-live-connector';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 3000;
const PUBLIC_DIR = path.join(__dirname, 'public');
const AUDIO_DIR = path.join(__dirname, 'audio');

// MIME types dictionary
const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.mp3': 'audio/mpeg',
  '.wav': 'audio/wav',
  '.ogg': 'audio/ogg',
  '.m4a': 'audio/mp4',
  '.aac': 'audio/aac',
};

// ============================================================================
// BỘ QUẺ LINH XĂM CHÙA ONLINE (FORTUNE STICKS DECK)
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

// Application State
let tiktokConnection = null;
let currentUsername = '';
let isConnected = false;
let viewerCount = 0;
let roomInfo = null;

const giftComboTracker = new Map();

// Helper: Resolve username from raw input (@user, user, or TikTok live URL)
async function resolveTikTokUsername(rawInput) {
  let input = String(rawInput || '').trim();
  if (!input) {
    throw new Error('Vui lòng nhập @username hoặc link TikTok Live cần kết nối');
  }
  if (input.startsWith('http://') || input.startsWith('https://') || input.includes('tiktok.com/')) {
    const urlToFetch = input.startsWith('http') ? input : `https://${input}`;
    const directMatch = urlToFetch.match(/tiktok\.com\/@([^/?#]+)/i);
    if (directMatch && directMatch[1]) {
      return directMatch[1];
    }
    try {
      const resp = await fetch(urlToFetch, { redirect: 'follow' });
      const finalUrl = resp.url || '';
      const resolvedMatch = finalUrl.match(/tiktok\.com\/@([^/?#]+)/i);
      if (resolvedMatch && resolvedMatch[1]) {
        return resolvedMatch[1];
      }
    } catch (e) {
      console.warn('[TikTok URL Resolve Warning]', e.message);
    }
  }
  return input.replace(/^@/, '').split(/[/?#]/)[0].trim();
}

// Helper: Extract clean user profile from incoming TikTok events
function extractUserFromEvent(data) {
  const u = data?.user || data?.userDetails || data || {};
  const uniqueId = u.uniqueId || u.displayId || data?.uniqueId || '';
  const user = u.nickname || uniqueId || data?.nickname || 'Phật tử';
  const avatar =
    u.profilePictureUrl ||
    u.avatarThumb?.urlList?.[0] ||
    u.avatarMedium?.urlList?.[0] ||
    u.avatarLarge?.urlList?.[0] ||
    data?.profilePictureUrl ||
    '';
  return { user, uniqueId, avatar };
}

// HTTP Server
const server = http.createServer((req, res) => {
  const parsedUrl = new URL(req.url, `http://${req.headers.host}`);
  const pathname = parsedUrl.pathname;

  // CORS headers for streaming overlays
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  // API Endpoints
  if (pathname === '/api/status' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      isConnected,
      currentUsername,
      viewerCount,
      roomInfo,
      mode: 'direct_no_api',
      statusMessage: 'Kết nối trực tiếp TikTok (Không dùng API)'
    }));
    return;
  }

  if (pathname === '/api/connect' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', async () => {
      try {
        const { username } = JSON.parse(body || '{}');
        if (!username) {
          res.writeHead(400, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ success: false, message: 'Thiếu TikTok username hoặc link LIVE' }));
          return;
        }

        const cleanUsername = await resolveTikTokUsername(username);
        console.log(`[TikTok] Đang kết nối trực tiếp tới LIVE của @${cleanUsername} (Không dùng API)...`);

        // Disconnect existing connection if any
        if (tiktokConnection) {
          try {
            await tiktokConnection.disconnect();
          } catch (e) {}
          tiktokConnection = null;
        }
        giftComboTracker.clear();

        // Direct TikTok Live Connection (No API key needed)
        tiktokConnection = new TikTokLiveConnection(cleanUsername, {
          processInitialData: true,
          fetchRoomInfoOnConnect: false,
          enableExtendedGiftInfo: false
        });

        setupTikTokEvents(tiktokConnection, cleanUsername);

        const state = await tiktokConnection.connect();
        isConnected = true;
        currentUsername = cleanUsername;
        roomInfo = state;
        viewerCount = state?.viewerCount || 0;

        console.log(`[TikTok] Kết nối thành công tới phòng @${cleanUsername} (roomId: ${state?.roomId || tiktokConnection?.roomId})!`);

        broadcast({
          type: 'connected',
          username: cleanUsername,
          roomId: state?.roomId || tiktokConnection?.roomId,
          viewerCount
        });

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: true, roomId: state?.roomId, viewerCount }));
      } catch (err) {
        console.error('[TikTok] Lỗi kết nối:', err.message);
        isConnected = false;
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
          success: false,
          message: err.message || 'Không thể kết nối. Vui lòng đảm bảo tài khoản đang mở phòng LIVE.'
        }));
      }
    });
    return;
  }

  if (pathname === '/api/disconnect' && req.method === 'POST') {
    if (tiktokConnection) {
      try {
        tiktokConnection.disconnect();
      } catch (e) {}
      tiktokConnection = null;
    }
    giftComboTracker.clear();
    isConnected = false;
    currentUsername = '';
    viewerCount = 0;
    roomInfo = null;

    broadcast({ type: 'disconnected' });

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ success: true }));
    return;
  }

  // Draw Fortune Endpoint (Manual / Simulation trigger)
  if (pathname === '/api/drawFortune' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', () => {
      try {
        const { username } = JSON.parse(body || '{}');
        const fortune = FORTUNE_DECK[Math.floor(Math.random() * FORTUNE_DECK.length)];
        const devotee = {
          nickname: username || 'Phật tử',
          uniqueId: 'draw_' + Date.now(),
          profilePictureUrl: null
        };
        broadcast({
          type: 'drawFortune',
          user: devotee,
          fortune
        });
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: true, fortune }));
      } catch (err) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: false, error: err.message }));
      }
    });
    return;
  }

  // Get Audio Tracks List from /audio folder
  if (pathname === '/api/audioList' && req.method === 'GET') {
    try {
      if (!fs.existsSync(AUDIO_DIR)) {
        fs.mkdirSync(AUDIO_DIR, { recursive: true });
      }
      const files = fs.readdirSync(AUDIO_DIR);
      const audioFiles = files
        .filter(f => f.match(/\.(mp3|wav|ogg|m4a|aac)$/i))
        .map(f => {
          const nameWithoutExt = path.parse(f).name;
          return {
            filename: f,
            title: nameWithoutExt,
            url: `/audio/${encodeURIComponent(f)}`
          };
        });
      res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
      res.end(JSON.stringify({ success: true, tracks: audioFiles }));
    } catch (err) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ success: false, error: err.message }));
    }
    return;
  }

  // Audio Files Serving with Range Requests Support (Instant Seeking & Streaming)
  if (pathname.startsWith('/audio/')) {
    const rawAudioFilename = decodeURIComponent(pathname.slice('/audio/'.length));
    const audioPath = path.join(AUDIO_DIR, rawAudioFilename);

    if (!audioPath.startsWith(AUDIO_DIR)) {
      res.writeHead(403);
      res.end('Forbidden');
      return;
    }

    fs.stat(audioPath, (err, stats) => {
      if (err || !stats.isFile()) {
        res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('Audio file not found');
        return;
      }

      const ext = path.extname(audioPath).toLowerCase();
      const contentType = MIME_TYPES[ext] || 'audio/mpeg';
      const range = req.headers.range;

      if (range) {
        const parts = range.replace(/bytes=/, '').split('-');
        const start = parseInt(parts[0], 10);
        const end = parts[1] ? parseInt(parts[1], 10) : stats.size - 1;
        const chunksize = (end - start) + 1;
        const stream = fs.createReadStream(audioPath, { start, end });
        res.writeHead(206, {
          'Content-Range': `bytes ${start}-${end}/${stats.size}`,
          'Accept-Ranges': 'bytes',
          'Content-Length': chunksize,
          'Content-Type': contentType,
        });
        stream.pipe(res);
      } else {
        res.writeHead(200, {
          'Content-Length': stats.size,
          'Accept-Ranges': 'bytes',
          'Content-Type': contentType,
        });
        fs.createReadStream(audioPath).pipe(res);
      }
    });
    return;
  }

  // Static File Serving
  let filePath = path.join(PUBLIC_DIR, pathname === '/' ? 'index.html' : pathname);

  // Security check to avoid directory traversal
  if (!filePath.startsWith(PUBLIC_DIR)) {
    res.writeHead(403);
    res.end('Forbidden');
    return;
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('404 Not Found');
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    res.writeHead(200, { 'Content-Type': contentType });
    const stream = fs.createReadStream(filePath);
    stream.pipe(res);
  });
});

// WebSocket Server
const wss = new WebSocketServer({ server, path: '/ws' });

wss.on('connection', (ws) => {
  console.log('[WS] Client connected to live overlay stream');

  // Send initial state to newly connected client
  ws.send(JSON.stringify({
    type: 'status',
    isConnected,
    currentUsername,
    viewerCount
  }));

  ws.on('close', () => {
    console.log('[WS] Client disconnected');
  });
});

function broadcast(data) {
  const json = JSON.stringify(data);
  wss.clients.forEach(client => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(json);
    }
  });
}

// Setup TikTok Live Direct Listeners (No API key needed)
function setupTikTokEvents(conn, cleanUsername) {
  conn.on(ControlEvent.CONNECTED, (state) => {
    isConnected = true;
    currentUsername = cleanUsername;
    roomInfo = state;
    viewerCount = state?.viewerCount || 0;
    console.log(`[TikTok] Đã kết nối tới roomId: ${state?.roomId || conn?.roomId}`);
    broadcast({
      type: 'connected',
      username: cleanUsername,
      roomId: state?.roomId || conn?.roomId,
      viewerCount
    });
  });

  conn.on(ControlEvent.DISCONNECTED, () => {
    console.log('[TikTok] Đã ngắt kết nối khỏi TikTok LIVE');
    isConnected = false;
    currentUsername = '';
    viewerCount = 0;
    roomInfo = null;
    broadcast({ type: 'disconnected' });
  });

  conn.on(WebcastEvent.STREAM_END, () => {
    console.log('[TikTok] Phiên LIVE đã kết thúc');
    isConnected = false;
    broadcast({ type: 'disconnected', reason: 'streamEnd' });
  });

  conn.on(ControlEvent.ERROR, (err) => {
    const errMsg = err?.message || err?.info || String(err);
    console.error('[TikTok Warning/Error]', errMsg);
    broadcast({
      type: 'error',
      message: errMsg
    });
  });

  // Khi có người vào phòng LIVE (Người vào lễ chùa)
  conn.on(WebcastEvent.MEMBER, (data) => {
    const { user, uniqueId, avatar } = extractUserFromEvent(data);
    console.log(`[TikTok Member] Phật tử ${user} (${uniqueId}) đã vào phòng lễ`);
    broadcast({
      type: 'member',
      user: {
        uniqueId,
        nickname: user,
        profilePictureUrl: avatar
      }
    });
  });

  // Khi có người gửi bình luận (Niệm Phật, cầu an, xin xăm / gieo quẻ...)
  conn.on(WebcastEvent.CHAT, (data) => {
    const { user, uniqueId, avatar } = extractUserFromEvent(data);
    const comment = data?.content || data?.comment || '';
    console.log(`[TikTok Chat] ${user}: ${comment}`);

    const lower = comment.toLowerCase();
    const isFortune = lower.includes('xin xăm') || lower.includes('xin xam') ||
                      lower.includes('gieo quẻ') || lower.includes('gieo que') ||
                      lower.includes('rút quẻ') || lower.includes('rut que') ||
                      lower.includes('quẻ') || lower.includes('xin que');

    if (isFortune) {
      const fortune = FORTUNE_DECK[Math.floor(Math.random() * FORTUNE_DECK.length)];
      console.log(`[TikTok Linh Xăm] ${user} gieo được Quẻ số ${fortune.number} (${fortune.rank})`);
      broadcast({
        type: 'drawFortune',
        user: {
          uniqueId,
          nickname: user,
          profilePictureUrl: avatar
        },
        fortune,
        comment
      });
    }

    broadcast({
      type: 'chat',
      user: {
        uniqueId,
        nickname: user,
        profilePictureUrl: avatar
      },
      comment
    });
  });

  // Khi có người gửi quà tặng (Dâng hương, Lễ Phật, Hoa sen...)
  conn.on(WebcastEvent.GIFT, (data) => {
    const { user, uniqueId, avatar } = extractUserFromEvent(data);
    const giftObj = data?.gift || data?.giftDetails || {};
    const giftId = String(data?.giftId || giftObj?.id || 'rose');
    const groupId = String(data?.groupId || `${uniqueId}_${giftId}`);
    const repeatCount = Math.max(1, Number(data?.repeatCount || data?.comboCount || 1));

    const prevCount = giftComboTracker.get(groupId) || 0;
    if (repeatCount <= prevCount && data?.repeatEnd) {
      giftComboTracker.delete(groupId);
      return;
    }
    const deltaCount = Math.max(1, repeatCount - prevCount);
    giftComboTracker.set(groupId, repeatCount);
    if (giftComboTracker.size > 500) {
      const firstKey = giftComboTracker.keys().next().value;
      giftComboTracker.delete(firstKey);
    }

    const diamondCount = Math.max(1, Number(giftObj?.diamondCount || data?.diamondCount || 1));
    const totalCoins = diamondCount * deltaCount;
    const rawGiftName = giftObj?.name || data?.giftName || giftObj?.describe || 'Hoa hồng';
    const displayGiftName = deltaCount > 1 ? `${deltaCount}x ${rawGiftName}` : rawGiftName;

    console.log(`[TikTok Gift] ${user} tặng ${displayGiftName} (${totalCoins} coins)`);

    broadcast({
      type: 'gift',
      user: {
        uniqueId,
        nickname: user,
        profilePictureUrl: avatar
      },
      giftName: rawGiftName,
      giftId,
      diamondCount,
      repeatCount: deltaCount,
      totalCoins
    });
  });

  // Khi có người bấm tim (Thả hoa sen / công đức)
  conn.on(WebcastEvent.LIKE, (data) => {
    const { user, uniqueId } = extractUserFromEvent(data);
    const likeCount = Math.min(15, Math.max(1, Number(data?.likeCount ?? data?.count ?? 1)));
    broadcast({
      type: 'like',
      user: {
        uniqueId,
        nickname: user
      },
      likeCount,
      totalLikeCount: Number(data?.totalLikeCount ?? data?.total ?? 0)
    });
  });

  // Khi có người theo dõi hoặc chia sẻ
  conn.on(WebcastEvent.FOLLOW, (data) => {
    const { user, uniqueId, avatar } = extractUserFromEvent(data);
    broadcast({
      type: 'chat',
      user: { uniqueId, nickname: user, profilePictureUrl: avatar },
      comment: 'Đã theo dõi phòng LIVE 🙏 A Di Đà Phật'
    });
  });

  conn.on(WebcastEvent.SHARE, (data) => {
    const { user, uniqueId, avatar } = extractUserFromEvent(data);
    broadcast({
      type: 'chat',
      user: { uniqueId, nickname: user, profilePictureUrl: avatar },
      comment: 'Đã chia sẻ phiên LIVE 🪷 Công đức vô lượng'
    });
  });

  // Cập nhật số người đang xem
  conn.on(WebcastEvent.ROOM_USER, (data) => {
    viewerCount = Number(data?.viewerCount ?? data?.total ?? 0);
    broadcast({
      type: 'roomUser',
      viewerCount
    });
  });
}

// Start Server
server.listen(PORT, () => {
  console.log(`=====================================================`);
  console.log(`🌸 CHÙA ONLINE — TIKTOK LIVE DÂNG HƯƠNG LỄ PHẬT 🌸`);
  console.log(`🌐 Server đang chạy tại: http://localhost:${PORT}`);
  console.log(`⚡ Chế độ: Kết Nối Trực Tiếp (100% Miễn Phí, Không Dùng API)`);
  console.log(`🎥 Dùng cho OBS Browser Source: http://localhost:${PORT}`);
  console.log(`=====================================================`);
});
