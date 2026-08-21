# DÀN BÀI: MỘC CHÂU

> Khớp khuôn mẫu `destination-ta-xua.html`. Mục tiêu **1.200–1.400 từ**
> (Tà Xùa hiện 1.156 từ — nên nhỉnh hơn một chút vì Mộc Châu nhiều điểm hơn).

---

## 1. Thông số kỹ thuật

| Trường | Giá trị |
|---|---|
| Tên file | `destination-moc-chau.html` |
| Slug (điền vào `script.js`) | `moc-chau` |
| `<title>` | `Mộc Châu — Cao nguyên hoa mận & đồi chè trái tim \| GO FAR` |
| `<meta description>` | `Cẩm nang du lịch Mộc Châu chi tiết: đồi chè trái tim, thác Dải Yếm, đỉnh Pha Luông, cầu kính Bạch Long. Lịch trình, đi lại, đặc sản bê chao.` |
| `<h1>` | `Mộc Châu — Cao nguyên hoa mận trắng` |
| Schema | `TouristAttraction` (giống 21 trang còn lại) |
| `category` trong `script.js` | `mountain` |
| `region` | `Miền Bắc` |

### Sidebar "📌 Thông tin nhanh"

- 📍 **Vị trí:** Cao nguyên Mộc Châu, tỉnh Sơn La — cách Hà Nội ~180km
- ⏱️ **Thời gian gợi ý:** 2 – 3 ngày
- ⭐ **Mùa đẹp nhất:** Tháng 11 – 3 (hoa cải, hoa mận, hoa ban)

---

## 2. 📋 Tổng quan *(~150 từ)*

Góc kể chuyện đề xuất — **tương phản với Tà Xùa**, vì hai trang sẽ nằm cạnh nhau:

> Tà Xùa là nơi bạn *leo* để tìm mây. Mộc Châu là nơi mây *tìm đến bạn* — một cao nguyên rộng, thoải, đi lại dễ, hợp cả người mới lẫn gia đình.

Ý cần có:
- Cao nguyên ở độ cao ~1.050m, khí hậu ôn hòa quanh năm
- Là cao nguyên rộng lớn chứ không phải một đỉnh núi — điều này quyết định cách đi
- Nổi tiếng về **bốn mùa hoa** và **ngành sữa bò** — hai thứ tạo nên bản sắc riêng
- Dễ tiếp cận nhất trong nhóm điểm săn mây Tây Bắc — nêu rõ đây là lợi thế cho người đi lần đầu

---

## 3. 📸 Tọa độ Check-in Nổi bật — **8 thẻ**

Mỗi thẻ là `<div class="dest-card">` kèm `data-legend` (như 4 thẻ trên trang Tà Xùa).

| # | Điểm | Nội dung chính | Gợi ý `data-legend` |
|---|---|---|---|
| 1 | **Đồi chè trái tim** | Biểu tượng nhận diện của Mộc Châu. Nêu rõ nằm ở nông trường chè Mộc Sương/Tân Lập | Đồi chè do nông trường quy hoạch từ thời bao cấp, hình trái tim là kết quả của cách trồng theo đường đồng mức chống xói mòn — vẻ đẹp sinh ra từ kỹ thuật canh tác, không phải dàn dựng du lịch |
| 2 | **Thác Dải Yếm** | Còn gọi thác Nàng, thác Bản Vặt. Đẹp nhất mùa mưa (t4–t9) | Tên gọi từ truyền thuyết dải yếm của cô gái thả xuống cứu chàng trai — đặt đúng vào mảng **kể chuyện truyền thuyết** là thế mạnh của kênh |
| 3 | **Đỉnh Pha Luông** | ~2.000m, giáp biên giới Việt–Lào. Điểm săn mây thực thụ, cần thể lực | Nhắc tới câu thơ Quang Dũng *"Nhà ai Pha Luông mưa xa khơi"* trong bài Tây Tiến — gắn địa danh với ký ức văn học |
| 4 | **Cầu kính Bạch Long** | Cầu kính đi bộ, từng giữ kỷ lục dài nhất thế giới khi khai trương 2022 | Điểm nhân tạo duy nhất trong danh sách — nêu thẳng để người đọc tự chọn |
| 5 | **Thung lũng mận Nà Ka** | Trung tâm mùa hoa mận trắng tháng 1–2 | |
| 6 | **Rừng thông bản Áng** | Hồ nước + rừng thông, nơi tập trung homestay | |
| 7 | **Bản Pa Phách** | Bản người H'Mông trên cao, view thung lũng | |
| 8 | **Ngũ động bản Ôn** | Hệ thống 5 hang động, ít khách, hợp người thích vắng | |

> **Nguyên tắc viết `data-legend`:** ưu tiên gốc tích, lịch sử, truyền thuyết — đúng định
> hướng kênh, và ảnh AI là *lợi thế* khi minh họa những thứ này chứ không phải điểm yếu.

---

## 4. 🚗 Di chuyển & Chi phí

**1. Phương tiện đến Mộc Châu**
- Xe khách Hà Nội → Mộc Châu: Mỹ Đình / Giáp Bát, ~4–5 tiếng
- Xe máy: theo QL6 qua Hòa Bình — đèo Thung Khe ("đèo Đá Trắng") là chặng đáng nhớ
- Xe cá nhân: đường tốt, phù hợp gia đình có trẻ nhỏ — **đây là điểm Mộc Châu hơn hẳn Tà Xùa**

**2. Di chuyển tại Mộc Châu**
- Nhấn mạnh: các điểm **cách xa nhau hàng chục km**, không đi bộ được. Bắt buộc có xe
- Thuê xe máy tại thị trấn
- Lưu ý đường lên Pha Luông rất khác đường trong thị trấn — không đánh đồng

**3. Giá vé tham quan**
- Lập bảng cho: đồi chè, thác Dải Yếm, cầu kính Bạch Long, Ngũ động bản Ôn

> ⚠️ **Bắt buộc:** ghi rõ *"Giá tham khảo, cập nhật tháng __/2026"* dưới bảng.
> Số liệu giá là thứ hỏng nhanh nhất và làm mất uy tín nhanh nhất.

---

## 5. 🏨 Lưu trú & Ẩm thực

**1. Lưu trú** — chia 3 nhóm: homestay bản Áng · khách sạn thị trấn · resort/nghỉ dưỡng. Nêu khoảng giá cho từng nhóm.

**2. Ẩm thực** — đây là chỗ Mộc Châu **mạnh nhất**, viết kỹ:
- **Bê chao Mộc Châu** — món phải thử, gắn với nghề nuôi bò sữa
- **Sữa Mộc Châu** — thương hiệu quốc gia, giải thích vì sao cao nguyên này nuôi bò sữa được
- Cá suối nướng · thịt trâu gác bếp · nậm pịa (cảnh báo trước: không hợp khẩu vị số đông)

---

## 6. 🗓️ Thời điểm vàng & Lưu ý

**1. Lịch mùa** — làm thành bảng, đây là phần có giá trị tra cứu cao nhất:

| Thời gian | Cảnh |
|---|---|
| Tháng 11 – 12 | Hoa cải trắng |
| Tháng 1 – 2 | **Hoa mận trắng** (cao điểm) |
| Tháng 3 | Hoa ban |
| Tháng 5 – 6 | Mùa mận chín, hái mận tại vườn |
| Tháng 9 – 11 | Săn mây đẹp, trời trong |

**2. Lưu ý**
- Cuối tuần mùa hoa mận **cực kỳ đông** — đặt phòng trước
- Nhiều đồi chè/vườn mận là đất tư — thu phí chụp ảnh, hỏi trước khi vào
- Đêm lạnh sâu kể cả mùa hè
- Đường lên Pha Luông cần thể lực và thời tiết tốt

---

## 7. Ảnh cần chuẩn bị

**Đã có:** `images/mocchau_clouds.webp` *(1 ảnh)*

**Cần tạo thêm ~10 ảnh** để đủ chuẩn trang điểm đến (trang Tà Xùa dùng 11 ảnh):

```
mocchau_hero.webp            — ảnh bìa, ngang
mocchau_doi_che_trai_tim.webp
mocchau_thac_dai_yem.webp
mocchau_pha_luong.webp
mocchau_cau_kinh_bach_long.webp
mocchau_na_ka_hoa_man.webp
mocchau_rung_thong_ban_ang.webp
mocchau_pa_phach.webp
mocchau_ngu_dong_ban_on.webp
mocchau_be_chao.webp
```

> 💡 Tạo thêm **1 bản dọc 896×1200** cho mỗi điểm chính để đăng Pinterest —
> làm luôn một lượt sẽ nhanh hơn quay lại làm sau.

---

## 8. Việc phải làm sau khi viết xong

1. Thêm thẻ `<a class="dest-card" href="destination-moc-chau.html" ...>` vào `index.html`
2. Đổi `slug: null` → `slug: 'moc-chau'` trong `script.js` *(nhãn "SẮP CÓ" tự biến mất)*
3. Thêm URL vào `sitemap.xml`
4. Thêm link chéo từ **Tà Xùa** và **Sapa** sang Mộc Châu *(cùng chủ đề săn mây)*
5. Submit URL trong Search Console → Request Indexing
