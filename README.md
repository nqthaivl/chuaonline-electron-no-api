# 🌸 TikTok LIVE Chùa Online — Dâng Hương Lễ Phật (9:16 Vertical)

Ứng dụng sân khấu livestream trực tiếp **Chùa Online — Dâng Hương Lễ Phật** theo chuẩn tỉ lệ khung hình dọc **9:16** (chuẩn dọc TikTok LIVE Studio / OBS Studio / Ứng dụng Desktop Electron).

---

## 📸 Các Tính Năng Tâm Linh Đặc Sắc

### 1. Chuẩn Khung Hình Dọc 9:16 (TikTok LIVE & Electron):
- Tỷ lệ khung hình dọc **9:16** (1080x1920 / 540x960), khớp hoàn hảo với giao diện TikTok LIVE trên điện thoại.
- Khởi chạy trực tiếp như ứng dụng Desktop bằng **Electron** hoặc tích hợp vào **OBS Studio / TikTok LIVE Studio**.

### 2. Phật Tử Hướng Về Đức Phật (Trang Nghiêm Chuẩn Mực):
- Tất cả các Phật tử ngồi đối xứng hai bên thảm đỏ đều **hướng mặt lên bàn thờ Đức Phật** (nhìn từ phía sau lưng: tóc búi gọn gàng, bờ vai áo lam chắp tay niệm Phật hướng lên bàn thờ).
- Khi có tiếng chuông, bình luận hoặc dâng lễ, toàn thể Phật tử sẽ **cúi rạp người lạy Phật (Kowtow)** sát đất vô cùng cung kính.

### 3. Hiệu Ứng Dâng Hương: Bước Lên Thảm Đỏ Quỳ Lạy Đức Phật:
- Khi có người xem gửi tặng quà (Hoa hồng 1 xu / Chuông 5 xu / Hoa sen 10+ xu):
  1. Phật tử đó sẽ xuất hiện ở **đầu thảm đỏ** với 3 nén nhang phát sáng trên tay (`devotee_walking.svg`).
  2. Bảng vinh danh hiện lên: `🙏 Phật Tử [Tên] Đang Dâng Nén Tâm Hương Lên Đức Phật 🙏`.
  3. Phật tử **từng bước đi uyển chuyển dọc theo thảm đỏ** tiến thẳng lên trước bàn thờ Phật.
  4. Đến trước lư đồng, Phật tử **quỳ xuống và cúi rạp người lạy Phật** cung kính (`devotee_bowing.svg`).
  5. Lư hương bừng sáng, cột khói trầm dâng cao nghi ngút, **tiếng Đại Hồng Chung** và tiếng gõ mõ ngân vang, toàn thể Phật tử trong chùa cùng đồng loạt lạy theo!
  6. Sau khi dâng hương xong, Phật tử được an tọa về hàng ghế.

---

## 🚀 Cách Khởi Động Ứng Dụng

### 1. Khởi động ứng dụng Desktop Electron (Khung dọc 9:16):
```bash
./start_electron.sh
# Hoặc: ./start.sh
# Hoặc: npm run electron
```
Cửa sổ ứng dụng Electron chuẩn 9:16 sẽ mở lên ngay trên màn hình máy tính của bạn.

---

### 2. Mở trên Trình Duyệt Hoặc OBS Studio / TikTok LIVE Studio:
1. Đảm bảo server đang chạy:
   ```bash
   node server.js
   ```
2. Truy cập trình duyệt: **`http://localhost:3000`**
3. Trong OBS Studio / TikTok LIVE Studio:
   - Thêm nguồn **Browser (Trình duyệt)**.
   - URL: `http://localhost:3000`
   - Kích thước: **Width: 1080**, **Height: 1920** (Khung dọc chuẩn TikTok).

---

## ⚙ Kết Nối Với Kênh TikTok LIVE (Không Cần API):
> **⚡ Kết nối trực tiếp 100%:** Ứng dụng kết nối trực tiếp đến TikTok Live theo giao thức WebSocket/Scraping thế hệ mới, hoàn toàn **không cần API Key**, **không cần Euler Stream API** hay bất kỳ dịch vụ tính phí bên ngoài nào!

1. Bấm nút **⚙ Kết Nối** ở góc trên bên phải giao diện (hoặc thanh tiêu đề).
2. Nhập `@username` hoặc dán thẳng đường link phòng LIVE trên TikTok (ví dụ: `https://www.tiktok.com/@kenh_live/live`).
3. Bấm **Kết Nối** ➜ Tự động đồng bộ thời gian thực:
   - **Vào phòng Live**: Tự động an tọa một vị trí Phật tử áo lam trong Chánh Điện.
   - **Bình luận (Chat / Niệm Phật)**: Phật tử lạy Phật và hiện bong bóng lời cầu nguyện trên đầu, tiếng mõ tụng kinh ngân vang.
   - **Gieo Quẻ / Xin Xăm**: Bình luận chứa từ khóa: *`xin xăm`*, *`gieo quẻ`*, *`rút quẻ`*, *`quẻ`* ➜ Tự động lắc ống xăm tre và mở tờ Giải Quẻ Linh Xăm (Thượng Thượng Cát, Đại Cát...) vinh danh thí chủ.
   - **Thả tim (Like)**: Kích hoạt mưa cánh hoa sen bay lượn trong Chánh Điện.
   - **Dâng lễ / Quà tặng (Gift)**: Kích hoạt hiệu ứng Phật tử bước lên thảm đỏ dâng hương quỳ lạy Đức Phật, tiếng chuông đồng Đại Hồng Chung ngân vang và toàn thể đạo tràng đồng loạt đảnh lễ!
   - **Hòm Công Đức**: Tự động vinh danh Top 10 người dâng cúng nhiều coin nhất trong phiên live.
   - **Bảng Cài Đặt & Kết Nối**: Điều chỉnh âm lượng Nhạc nền Thiền, âm lượng Chuông Mõ, và bảng thử nghiệm mô phỏng toàn diện. Màn hình Chánh Điện được giữ sạch sẽ 100% cho OBS Studio.
