---
name: GO FAR Temple Pilgrimage Format
description: Quy chuẩn kiến trúc & format giao diện chiêm bái chi tiết các chùa theo chuẩn Chùa Bái Đính (destination-bai-dinh.html)
---

# ⛩️ GO FAR Temple Pilgrimage Format — Quy Chuẩn Chi Tiết Các Chùa

## 1. Mục Đích & Phạm Vi Ứng Dụng
Kỹ năng này quy định tiêu chuẩn thiết kế, cấu trúc giao diện, hệ thống âm thanh Web Audio, cấu trúc dữ liệu và quy trình xuất bản cho **mọi trang chiêm bái chi tiết cổ tự (Temple Destination Page)** trong dự án **GO FAR — Go Straight Ahead**.

Trang mẫu chuẩn mực tuyệt đối để đối chiếu là:
**`https://gofarvietnam.com/destination-bai-dinh.html`** (`destination-bai-dinh.html`)

Mọi trang chi tiết chùa mới (như `destination-yen-tu.html`, `destination-chua-huong.html`, `destination-thien-mu.html`, `destination-linh-ung.html`, v.v.) **BẮT BUỘC PHẢI TUÂN THỦ 100% CẤU TRÚC VÀ TÍNH NĂNG ĐƯỢC MÔ TẢ TRONG SKILL NÀY**.

---

## 2. Quy Chuẩn Kỹ Thuật & Design Tokens

### 🎨 Bảng Mã Màu Tâm Linh Chánh Niệm
```css
:root {
    --bg-primary: #0D1F2D;       /* Xanh đêm thiền môn trầm mặc */
    --bg-secondary: #132D42;     /* Xanh lam sâu thẳm */
    --bg-card: rgba(19, 45, 66, 0.9);
    --bg-glass: rgba(255, 255, 255, 0.05);

    --text-primary: #f8fafc;     /* Trắng thanh tịnh */
    --text-secondary: #cbd5e1;   /* Xám tro nhạt */
    --text-muted: #94a3b8;

    --accent-gold: #fbbf24;      /* Vàng kim Tam Bảo / Hoàng cung */
    --accent-warm: #f59e0b;      /* Vàng đồng / Ánh nến */
    --accent-lotus: #f472b6;     /* Hồng hoa sen thanh khiết */
    --accent-green: #10B981;     /* Xanh ngọc / Cây bồ đề di sản */

    --font-main: 'Space Grotesk', sans-serif;
    --font-serif: 'Playfair Display', serif; /* Bắt buộc cho tiêu đề & văn khấn */
    --font-body: 'Inter', sans-serif;

    --radius-sm: 8px;
    --radius-md: 16px;
    --radius-lg: 24px;
    --radius-full: 9999px;
    --border-subtle: 1px solid rgba(255, 255, 255, 0.1);
}
```

### 🏷️ Meta & Header Chuẩn
- **Tên file:** `destination-{slug-ten-chua}.html` (ví dụ: `destination-bai-dinh.html`, `destination-yen-tu.html`, `destination-chua-huong.html`).
- **Canonical URL:** `https://gofarvietnam.com/destination-{slug}.html`
- **Author:** `Sửu nhi — GO FAR`
- **Tiêu đề trang (`<title>`):** `{Tên Chùa} — Lộ Trình {N} Ban/Trạm Chiêm Bái, Cách Thắp Hương & Văn Khấn | GO FAR`

---

## 3. Cấu Trúc Bắt Buộc 5 Phần Của Một Trang Chi Tiết Chùa

Mỗi trang chi tiết cổ tự phải bao gồm tuần tự đầy đủ 5 phần nội dung:

### 🌟 Header & Hero Section
1. **Thanh điều hướng (`nav`):**
   - Logo GO FAR và tên danh lam.
   - Nút hồi chuyển về Chuyên Mục Tâm Linh (`tam-linh.html`).
   - Nút liên kết chéo sang các đại tự nổi tiếng khác (Bái Đính, Yên Tử, Chùa Hương).
   - Nút bật/tắt **Âm Thanh Thiền 432Hz / Tiếng Mõ & Tụng Kinh** (`#btnAmbientSound`).
2. **Hero Banner:**
   - Ảnh nền AI 16:9 WebP độ phân giải cao toàn cảnh danh thắng (`images/{slug}_hero.webp`).
   - Huy hiệu di sản (`hero-badge-wrap`): Di sản UNESCO / Kỷ lục / Tổ đình thiền phái.
   - Tiêu đề chính font Serif gradient vàng ấm: `Quần Thể Chùa...`.
   - Lời tựa dẫn lối thanh tịnh, trầm mặc, tôn vinh trầm tích ngàn năm.
   - 4 Quick-Chips thông số nhanh: Vị trí tọa lạc, Độ cao/Quy mô, Niên đại & Vị sáng lập, Điểm nhấn độc bản.

---

### 🏛️ Phần 1: Tổng Quan Di Sản & Trầm Tích Lịch Sử (`#tong-quan`)
Bố cục 2 thẻ lớn (`overview-grid`):
- **Thẻ 1 — Thông Tin Hành Hương Cần Biết:**
  - Địa chỉ hành chính cụ thể.
  - Giờ mở cửa & lịch vận hành phương tiện (đò/cáp treo/xe điện).
  - Thời lượng chiêm bái trọn vẹn (tiếng).
  - Trang phục chuẩn mực: Áo lam / pháp phục / trang nhã kín đáo.
  - Thời điểm hành hương đẹp nhất trong năm.
- **Thẻ 2 — Giá Trị Di Sản Độc Bản:**
  - Huyền tích lịch sử, nhân vật lịch sử gắn liền (vua Trần Nhân Tông, Thiền sư Nguyễn Minh Không, Bồ Tát Quán Thế Âm...).
  - Các kỷ lục văn hóa / bảo vật quốc gia tôn trí tại chùa.
  - Kiến trúc cổ truyền độc đáo (nhà gỗ tứ thiết, hang động đá vôi, chùa đồng...).

---

### 🕯️ Phần 2: Nguyên Tắc Hành Lễ & Quy Chuẩn Dâng Hương (`#quy-tac-thap-huong`)
4 nguyên tắc ứng xử văn minh và bảo tồn di sản (`rules-grid`):
1. **Chỉ thắp đúng 1 nén hương tại lư hương chính ngoài trời:** Tuyệt đối không thắp hương bên trong chánh điện, chùa gỗ hoặc trong lòng hang kín để phòng chống cháy nổ và bảo vệ di sản.
2. **Tuyệt đối không xoa tiền lẻ lên tượng Phật/Chùa/Thạch nhũ:** Không nhét tiền vào tay chân tượng hay vách đá làm hoen ố, oxy hóa di sản; bỏ tiền giọt dầu trực tiếp vào Hòm Công Đức.
3. **Lễ vật thuần chay thanh tịnh:** Hoa tươi, quả ngọt, oản phẩm, xôi chè thanh đạm; nghiêm cấm đồ mặn, rượu thịt dâng cửa Phật.
4. **Thiền hành chánh niệm & giữ vệ sinh:** Bước đi vững vàng trong tĩnh lặng, không xô đẩy, giữ sạch cảnh quan rừng di sản.

---

### ⛩️ Phần 3: Lộ Trình Hành Lễ Tuần Tự & Trải Nghiệm Chánh Niệm Tương Tác (`#lo-trinh-hanh-le`)
Đây là **linh hồn tương tác đặc sắc nhất** của trang chi tiết cổ tự:

1. **Thanh chỉ số trạm (`pilgrim-header-bar`):**
   - Badge hiển thị số trạm: `Trạm 01 / {Total}`.
   - Tên trạm hiện tại font Serif lớn.
   - Chỉ số độ cao / khoảng cách địa lý thực tế.
2. **Sơ đồ lộ trình tương tác SVG (`route-map-svg`):**
   - Đường cong nối kết tuần tự từ Trạm 01 đến Trạm cuối cùng.
   - Mỗi trạm là một nút tròn SVG có thể click (`selectStation(i)`), tự động highlight trạng thái `active`.
3. **Sân khấu hành lễ đa phương tiện (`stage-grid`):**
   - **Khung hình ảnh & di sản (Bên trái):**
     * Ảnh AI 16:9 WebP độc bản của trạm lễ.
     * Tag đặc trưng trạm (ví dụ: *Cửa Ngõ Hành Hương*, *Bảo Vật Quốc Gia*, *Trọng Tâm Linh Thiêng*).
     * Câu niệm chánh niệm (*Mantra Quote*) trong ngoặc kép vàng rực.
     * Đoạn văn thuyết minh trầm tích lịch sử & ý nghĩa tâm linh của trạm.
   - **Bảng tương tác & Văn khấn cổ truyền (Bên phải):**
     * **3 Nút hành động tâm linh tương tác:**
       - Nút 1: *Lễ Bái / Nhập Cổng / Hạ Thuyền / Thiền Hành* (Kèm icon tương ứng).
       - Nút 2: *Dâng Tâm Hương / Dâng Hoa Sen / Thắp Nến*.
       - Nút 3: *Đảnh Lễ / Thỉnh Chuông / Chiêm Ngưỡng*.
       - Khi bấm: Phát âm thanh Web Audio chân thực (tiếng mõ gỗ, tiếng chuông bát 432Hz), hiển thị Toast thông báo và chữ bay chúc phúc (*Blessing Fly Text*).
     * **Khung bài văn khấn cổ truyền (`prayer-container`):**
       - Tiêu đề kèm nút **"Đọc Văn Khấn Online"** (`btn-read-prayer`) — sử dụng `SpeechSynthesisUtterance` đọc bài khấn bằng giọng chuẩn Việt trang nghiêm, tốc độ chậm rãi (`rate: 0.82`), có thể bật/tắt linh hoạt.
       - Toàn văn bài văn khấn cổ truyền chuẩn mực (chữ Quốc ngữ kết hợp âm hưởng Nôm cổ), chừa chỗ điền họ tên, ngày tháng, ngụ tại.
4. **Thanh điều khiển tiến trình (`stage-nav-bar`):**
   - Nút `← Trạm Trước` và `Trạm Tiếp Theo →`.
   - Bộ đếm tiến trình hiển thị rõ ràng: `Trạm X / Y: {Tên trạm}`.

---

### 🧭 Phần 4: Lịch Trình Chiêm Bái Tối Ưu (`#lich-trinh`)
Phân tách tối thiểu 2 phương án trải nghiệm:
- **Phương án 1 — Tuyến Thảnh Thơi (Cáp treo / Xe điện / Thuyền):** Dành cho gia đình, người cao tuổi, tối ưu hóa thời gian (4 – 5 tiếng).
- **Phương án 2 — Tuyến Thiền Hành Khổ Hạnh (Leo bộ đường đá cổ):** Dành cho hành giả rèn luyện thân tâm, đi qua từng bậc đá lịch sử của tiền nhân (7 – 9 tiếng).
- Timeline chi tiết từng mốc giờ (Sáng xuất phát, Trưa thụ trai chay tịnh, Chiều xuống núi).

---

### 🍃 Phần 5: Footer & Liên Kết Điều Hướng
- Tôn vinh thương hiệu: `GO FAR — Non Sông Nước Việt & Trầm Tích Di Sản Ngàn Năm`.
- Khẳng định nguồn tư liệu: *Biên soạn đối chiếu theo nghi thức Phật giáo cổ truyền và quy định bảo tồn di sản Nhà nước*.
- Hai liên kết hồi chuyển:
  - `← Quay lại Chuyên Mục Tâm Linh & Chánh Niệm` (`tam-linh.html`).
  - `Xem Lộ Trình Cổ Tự Khác →` (`destination-{slug-khac}.html`).

---

## 4. Hệ Thống Âm Thanh Web Audio Synthesizer Chuẩn Mực

Mọi trang chi tiết cổ tự phải tích hợp Web Audio Synthesizer độc lập (không phụ thuộc file âm thanh ngoài):

### 1. Tiếng Mõ Mộc Ngư (`playMoSound`)
```javascript
function strikeChantMo(ctx, time) {
    const osc1 = ctx.createOscillator();
    const g1 = ctx.createGain();
    osc1.type = 'triangle';
    osc1.frequency.setValueAtTime(750, time);
    osc1.frequency.exponentialRampToValueAtTime(360, time + 0.07);
    g1.gain.setValueAtTime(0.85, time);
    g1.gain.exponentialRampToValueAtTime(0.001, time + 0.12);

    const osc2 = ctx.createOscillator();
    const g2 = ctx.createGain();
    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(460, time);
    osc2.frequency.exponentialRampToValueAtTime(390, time + 0.15);
    g2.gain.setValueAtTime(0.70, time);
    g2.gain.exponentialRampToValueAtTime(0.001, time + 0.16);

    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(580, time);
    filter.Q.setValueAtTime(2.0, time);

    osc1.connect(g1);
    osc2.connect(g2);
    g1.connect(filter);
    g2.connect(filter);
    filter.connect(ctx.destination);

    osc1.start(time);
    osc2.start(time);
    osc1.stop(time + 0.15);
    osc2.stop(time + 0.18);
}
```

### 2. Âm Hưởng Tụng Kinh Niệm Phật (`strikeChantVocal`)
Sử dụng bộ lọc nguyên âm kép (Formant Filter 450Hz & 1050Hz) mô phỏng đại chúng tụng niệm 6 chữ hồng danh (*Nam Mô A Di Đà Phật*) theo ngũ cung:
- E3 (164.8Hz) `Nam`
- G3 (196.0Hz) `Mô`
- A3 (220.0Hz) `A`
- G3 (196.0Hz) `Di`
- E3 (164.8Hz) `Đà`
- D3 (146.8Hz) `Phật` (kéo dài 2.7s kết hợp chuông bát).

### 3. Tiếng Chuông Bát Đồng (`strikeChantBell`)
Hòa âm 3 tần số vàng: 540Hz, 864Hz, 1296Hz với thời gian phân rã tự nhiên dài 5.5 giây, ngân vang thanh tịnh tại chữ cuối của câu niệm.

---

## 5. Cấu Trúc Dữ Liệu JavaScript Mẫu (`STATIONS_DATA`)

```javascript
const STATIONS_DATA = [
    {
        name: "Tên Trạm Lễ",
        elevation: "⛰️ Độ cao hoặc thông số vị trí",
        tag: "Phân loại di tích",
        img: "images/{slug_tram}.webp",
        mantra: "Câu Niệm Chánh Niệm Thiền Định",
        desc: "Thuyết minh chi tiết về lịch sử, nhân vật, kiến trúc và ý nghĩa tâm linh.",
        act1: {
            icon: "🚪",
            title: "Tên hành động 1",
            sub: "Chỉ dẫn ý nghĩa ngắn",
            btn: "Tên nút",
            toast: "Thông báo khi thực hiện",
            fly: "Chữ bay chúc phúc"
        },
        act2: {
            icon: "🕯️",
            title: "Tên hành động 2 (thường là Dâng Hương)",
            sub: "Chỉ dẫn dâng hương chánh niệm",
            btn: "Dâng Hương",
            toast: "Đã dâng nén tâm hương thanh tịnh",
            fly: "Tâm Hương Tỏa Ngát"
        },
        act3: {
            icon: "🙏",
            title: "Tên hành động 3 (Đảnh Lễ / Thỉnh Chuông)",
            sub: "Chỉ dẫn đảnh lễ",
            btn: "Đảnh Lễ",
            toast: "Thành kính đảnh lễ Tam Bảo",
            fly: "Vạn Sự Cát Tường"
        },
        prayer: `Nam mô A Di Đà Phật! (3 lần, 3 lạy)
Con kính lạy...
Hôm nay ngày... tháng... năm...
Tín chủ con là: ... Ngụ tại: ...
Một lòng thành kính...
Nam mô A Di Đà Phật! (3 lạy)`
    }
];
```

---

## 6. Quy Chuẩn Đồng Bộ Ngược Lại Trang Chủ `tam-linh.html`

Khi hoàn thành một trang chi tiết cổ tự mới, **BẮT BUỘC** phải cập nhật đồng bộ lại [tam-linh.html](file:///f:/MAI_AI/GO_FAR/tam-linh.html):

1. **Cập nhật thẻ chùa trong danh sách `#templesGrid`:**
   - Đặt ảnh đại diện 16:9 WebP chuẩn mực.
   - Thêm liên kết vào tiêu đề: `<h3 class="temple-name"><a href="destination-{slug}.html">...</a></h3>`
   - Đoạn mô tả `.temple-desc` viết gãy gọn, đủ nghĩa trong **đúng 3 dòng** (khống chế bằng CSS `height: 4.8em;`).
   - Thêm nút lộ trình chuẩn UI:
     ```html
     <a href="destination-{slug}.html" class="temple-route-btn">
         <span>⛩️ Xem lộ trình {N} ban/trạm & văn khấn chuẩn</span>
         <span class="route-arrow">→</span>
     </a>
     ```
   - Nút phải sử dụng class `.temple-route-btn` với `margin-top: auto;` và `min-height: 52px;` để **tất cả các nút trên cùng một hàng ngang luôn căn thẳng hàng tuyệt đối**.

2. **Cập nhật mảng tìm kiếm `templeSearchData`:**
   - Cập nhật `detailUrl: 'destination-{slug}.html'`.
   - Cập nhật `hasDetailedAltars: true`.
   - Đảm bảo khi người dùng gõ tìm kiếm hoặc click chip nhanh trên Hero, hệ thống hiển thị đường link trỏ thẳng vào cẩm nang chi tiết.

---

## 7. Checklist Kiểm Thử Trước Khi Bàn Giao (QA Checklist)

Mọi trang tạo mới theo Skill này phải vượt qua toàn bộ checklist sau:
- [ ] Cú pháp JavaScript hợp lệ 100% (`node --check` không có bất kỳ SyntaxError nào).
- [ ] Tất cả các thẻ HTML mở và đóng cân bằng tuyệt đối (số lượng `<section>`, `<div>`, `<button>`, `<span>`, `<a>` mở và đóng bằng nhau, diff = 0).
- [ ] Nút âm thanh gõ mõ & tụng kinh hoạt động trơn tru, không có tiếng rè/ù sub-bass.
- [ ] Nút Đọc Văn Khấn Online hoạt động tốt, dừng lại khi chuyển trạm hoặc bấm dừng.
- [ ] Bản đồ SVG hiển thị đúng số trạm và click chuyển trạm mượt mà.
- [ ] Trên `tam-linh.html`, các nút bấm của các thẻ chùa trên cùng hàng ngang **căn thẳng hàng tăm tắp**.
- [ ] Đoạn mô tả không bị cắt xén nửa thân chữ.
- [ ] Ảnh đại diện và các ảnh trạm 100% là ảnh AI chuẩn 16:9 WebP sắc nét.
- [ ] Đã commit và push an toàn lên kho GitHub chính thức.
