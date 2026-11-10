---
name: GO FAR Temple Pilgrimage Format
description: Quy chuẩn kiến trúc & format giao diện chiêm bái chi tiết các chùa theo chuẩn Chùa Bái Đính (destination-bai-dinh.html)
---

# ⛩️ GO FAR Temple Pilgrimage Format — Quy Chuẩn Chi Tiết Các Cổ Tự

## 1. Mục Đích & Chuẩn Mực Tuyệt Đối
Kỹ năng này quy định tiêu chuẩn thiết kế kiến trúc giao diện, hệ sinh thái âm thanh Web Audio, mô hình dữ liệu và mã nguồn chuẩn hóa cho **tất cả các trang chiêm bái chi tiết từng ngôi chùa (Temple Detail Destination Page)** trong dự án **GO FAR — Go Straight Ahead**.

Trang mẫu gốc chuẩn mực tuyệt đối để đối chiếu là:
**`https://gofarvietnam.com/destination-bai-dinh.html`** (`destination-bai-dinh.html` — 145KB, 3.090 dòng).

Mọi trang chi tiết chùa mới (như `destination-yen-tu.html`, `destination-chua-huong.html`, `destination-thien-mu.html`, `destination-linh-ung.html`, v.v.) **BẮT BUỘC PHẢI SAO CHÉP VÀ TUÂN THỦ 100% CẤU TRÚC, COMPONENT VÀ CƠ CHẾ TƯƠNG TÁC ĐƯỢC MÔ TẢ TRONG SKILL NÀY**.

---

## 2. Hệ Thống 36 ID Bắt Buộc Của Cấu Trúc Bái Đính
Mỗi trang chi tiết cổ tự phải chứa đầy đủ 36 thẻ ID chuẩn mực sau:
```
1. tong-quan                 13. stageMantraQuote           25. stagePrayerTextBox
2. nghi-thuc-chung           14. stageRitualsColumn         26. btnReadPrayerOnline
3. lo-trinh-hanh-le          15. stageHeritageSection       27. readPrayerIcon
4. pilgrimageExperience      16. stageStationDesc           28. readPrayerText
5. pilgrimageMapWrap         17. stageGuideBox1             29. btnPilgrimPrev
6. pilgrimAvatar             18. stageGuideTitle1           30. stageNavHint
7. mapNode1 ... mapNodeN     19. stageGuideList1            31. btnPilgrimNext
8. pilgrimRitualStage        20. stageGuideBox2             32. pilgrimCompletionModal
9. stageBadgeNum             21. stageGuideTitle2           33. compBows
10. stageStationTitle        22. stageGuideList2            34. compIncense
11. stageProgressFill        23. prayerPilgrimSim           35. compMerit
12. stagePhotoImg            24. prayerUpperBody            36. lich-trinh, lightboxModal, zenToast
```

---

## 3. Kiến Trúc 4 Khối Nội Dung Bắt Buộc

### 🧭 Khối 1: Tổng Quan Quần Thể (`#tong-quan`)
- **Vị trí địa lý & Niên đại:** Tọa độ, độ cao, địa giới hành chính, năm khởi dựng.
- **Vị Tổ Sư / Vua Khai Sơn:** Ví dụ Đức Vua Trần Nhân Tông (Yên Tử), Thiền sư Nguyễn Minh Không (Bái Đính), Thiền sư Viên Quang (Chùa Hương).
- **Tinh hoa kiến trúc cổ truyền:** Nhà gỗ tứ thiết, hang động đá vôi kỳ vĩ, chùa đồng nguyên khối.
- **Trích đoạn thi ca / Kệ thiền cổ:** Đoạn trích tôn vinh vẻ đẹp trầm mặc ngàn năm.

### 📜 Khối 2: Quy Chuẩn Thắp Hương & Nghi Thức Chuẩn Mực (`#nghi-thuc-chung`)
Bố cục 3 thẻ lớn (`principles-grid`):
1. **Giữ thân tâm thanh tịnh & Trang phục trang nghiêm:** Áo lam Phật tử, kín đáo, lịch sự.
2. **Mỗi ban chỉ thắp đúng 1 nén tâm hương lộ thiên:** Tuyệt đối không thắp hương trong chánh điện, chùa gỗ hoặc hang đá.
3. **Đọc văn khấn chánh niệm — Không mê tín dị đoan:** Cầu an lành, hiếu thuận, tu nhân tích đức; không rải tiền lẻ lên tượng hay mái chùa.

### ⛩️ Khối 3: Sân Khấu Hành Lễ Tương Tác & Lộ Trình Tuần Tự (`#lo-trinh-hanh-le`, `#pilgrimageExperience`)
Đây là **linh hồn công nghệ và trải nghiệm thiền định** của trang web:
1. **Bản đồ Serpentine SVG & Avatar Hành Giả Di Chuyển (`#pilgrimageMapWrap`):**
   - Silhouette núi non / sông nước lớp nền (`pilgrimage-mountain-svg`).
   - Đường mòn kim quang nối kết các trạm (`pilgrimage-trail-base`, `pilgrimage-trail-glow`).
   - Các điểm Waypoint (`mapNode1`, `mapNode2`, ...) có hiệu ứng phát sáng `active` khi chọn và `completed` khi đã đi qua.
   - **Avatar Hành Giả di động (`#pilgrimAvatar`):**
     * Nhân vật áo lam, nón lá, hào quang sen vàng.
     * Tự động trượt mượt mà đến tọa độ `pctX%`, `pctY%` của trạm khi người dùng chuyển trạm.
2. **Sân Khấu Hành Lễ Chánh Điện (`#pilgrimRitualStage`):**
   - **Thanh chỉ số trạm & Tiến độ:** `#stageBadgeNum` (`Trạm 01 / 09`), `#stageStationTitle`, thanh tiến độ chạy % thực tế (`#stageProgressFill`).
   - **Khung ảnh di sản:** `#stagePhotoImg` độ nét cao, nhấp để phóng to toàn màn hình trong Lightbox Modal, kèm huy hiệu và câu chú tâm niệm (`#stageMantraQuote`).
   - **3 Thẻ Hành Động Tương Tác Từng Ban (`#stageRitualsColumn`):**
     * Nút 1: *Lễ Bái / Nhập Cổng / Xuống Thuyền*.
     * Nút 2: *Đảnh Lễ / Thỉnh Chuông / Chiêm Ngưỡng*.
     * Nút 3: *Dâng Nén Tâm Hương*.
     * Mỗi hành động đều kích hoạt âm thanh Web Audio (mõ, chuông, dâng hương) và bay chữ chúc phúc (*Blessing Fly Text*).
   - **Hộp Hướng Dẫn Di Sản Kép (`stage-guides-grid`):**
     * Hộp 1 (`#stageGuideBox1`): *Nghi Thức Lối Đi / Hành Lễ / Thanh Tẩy*.
     * Hộp 2 (`#stageGuideBox2`): *Ý Nghĩa Thờ Tự / Lịch Sử & Kiến Trúc*.
   - **Mô Phỏng Cúi Lạy 3 Lạy Chánh Niệm Bằng SVG (`#prayerPilgrimSim`):**
     * Hình ảnh vector Hành Giả áo lam quỳ trên bồ đoàn sen vàng, trước mặt là lư trầm khói tỏa nghi ngút.
     * Khi bấm: Phần thân trên (`#prayerUpperBody`) tự động cúi gập 3 lần (`@keyframes pilgrimDeepBow`), đồng thời tiếng mõ nhịp nhàng vang lên, hiển thị bộ đếm lạy `Lạy thứ 1/3 -> 2/3 -> 3/3`.
   - **Toàn Văn Bài Văn Khấn Chuẩn Mực (`#stagePrayerTextBox`):**
     * Toàn văn bài khấn cổ truyền tôn nghiêm từng ban.
     * Nút **"Đọc Văn Khấn Online"** (`#btnReadPrayerOnline`) tích hợp chuông mõ tụng niệm.
     * Nút **"Sao Chép Bài Khấn"** copy vào clipboard ngay lập tức.
   - **Thanh Điều Hướng:** Nút `← Trạm Trước` và `Trạm Kế Tiếp →`. Khi đến trạm cuối, nút chuyển thành `🌟 Nhận Chứng Nhận`.
3. **Modal Chứng Nhận Công Đức Hành Hương Viên Mãn (`#pilgrimCompletionModal`):**
   - Bảng vàng chúc mừng hoàn thành viên mãn chuyến hành hương.
   - Thống kê tự động: Tổng số lạy đảnh lễ, tổng số nén tâm hương, điểm phước đức tích lũy.
   - Nút chia sẻ phúc lành lên Zalo / Facebook.

### 🧭 Khối 4: Lịch Trình 1 Ngày Tối Ưu (`#lich-trinh`)
- Timeline chi tiết từng mốc giờ (06:00 đến 17:30).
- Kết hợp cung đường cáp treo và tản bộ thư thái.
- Gợi ý ẩm thực chay thanh đạm và sản vật địa phương (chè lam, măng trúc, rau sắng, bánh khảo).

---

## 4. Cấu Trúc Dữ Liệu JavaScript Mẫu Chuẩn
Mỗi trang khai báo mảng `STATIONS` theo đúng mẫu:
```javascript
const STATIONS = [
    {
        id: 1,
        name: "Tên Trạm Lễ",
        sub: "Phụ đề / Khẩu hiệu chánh niệm",
        img: "images/{ten_anh}.webp",
        mantra: "Câu niệm chánh niệm",
        desc: "Thuyết minh di sản chi tiết...",
        actions: [
            { icon: "🚪", title: "Tên hành động 1", sub: "Mô tả ngắn", btn: "Tên nút", type: "water|bow|gate|view" },
            { icon: "🙏", title: "Tên hành động 2", sub: "Mô tả ngắn", btn: "Đảnh Lễ", type: "bow" },
            { icon: "🕯️", title: "Dâng Nén Tâm Hương", sub: "Thắp 1 nén hương ngoài lư đá", btn: "Dâng Hương", type: "incense" }
        ],
        guide1: {
            title: "🚪 Nghi Thức Lối Đi & Thanh Tẩy",
            items: [
                "Hướng dẫn 1...",
                "Hướng dẫn 2...",
                "Hướng dẫn 3..."
            ]
        },
        guide2: {
            title: "🙏 Ý Nghĩa Thờ Tự & Trầm Tích Lịch Sử",
            items: [
                "Ý nghĩa 1...",
                "Ý nghĩa 2...",
                "Ý nghĩa 3..."
            ]
        },
        prayerText: "Nam mô A Di Đà Phật! (3 lần, 3 lạy)\\n\\nToàn văn bài văn khấn..."
    }
];

// Mảng tọa độ các trạm trên bản đồ SVG (ViewBox 1000 x 240)
const STATION_COORDS = [
    { x: 70, y: 195 },
    { x: 190, y: 175 },
    // ...
];
```

---

## 5. Quy Chuẩn Đồng Bộ Ngược Lại `tam-linh.html`
1. **Thẻ chùa trong danh sách `#templesGrid`:**
   - Link tiêu đề: `<h3 class="temple-name"><a href="destination-{slug}.html">...</a></h3>`
   - Đoạn mô tả `.temple-desc` viết đủ ý trong đúng 3 dòng (`height: 4.8em; line-height: 1.6;`).
   - Nút lộ trình chuẩn UI:
     ```html
     <a href="destination-{slug}.html" class="temple-route-btn">
         <span>⛩️ Xem lộ trình {N} ban/trạm & văn khấn</span>
         <span class="route-arrow">→</span>
     </a>
     ```
   - Nút phải có `margin-top: auto;` và `min-height: 52px;` để **tất cả các nút trên cùng một hàng ngang luôn căn thẳng tăm tắp**.
   - **LƯU Ý QUAN TRỌNG:** `onclick="openLightbox(...)"` CHỈ ĐƯỢC ĐẶT TRÊN `.temple-img-wrap`, TUYỆT ĐỐI KHÔNG ĐẶT TRÊN `.temple-card` để tránh việc click vào nút/tiêu đề bị kích hoạt lightbox ngoài ý muốn.

---

## 6. QA Checklist Nghiêm Ngặt Trước Khi Xuất Bản
- [ ] File HTML hoàn chỉnh có dung lượng tương đương chuẩn Bái Đính (~140KB - 146KB).
- [ ] Chứa đủ 36 thẻ ID quy định tại Mục 2.
- [ ] Avatar Hành Giả lướt mượt mà dọc theo các trạm trên bản đồ SVG.
- [ ] Mô phỏng cúi lạy 3 lạy chánh niệm (`#prayerPilgrimSim`) cử động mượt mà kèm tiếng mõ ấm áp.
- [ ] Hộp thuyết minh hiển thị song song 2 Box Hướng dẫn (`guide1` và `guide2`).
- [ ] Bài văn khấn đầy đủ, có nút Đọc Online và nút Sao Chép hoạt động tốt.
- [ ] Modal chứng nhận hành hương viên mãn hiển thị đúng số lạy và nén hương tích lũy.
- [ ] Kiểm tra cú pháp JavaScript: `node --check` không có lỗi.
- [ ] Tất cả thẻ HTML đóng/mở cân bằng 100%.
- [ ] 100% hình ảnh là ảnh AI chuẩn 16:9 WebP sắc nét, giàu tính văn hóa dân tộc.
- [ ] Đã commit và push an toàn lên kho GitHub chính thức.
