/* ==========================================
   GO FAR — Content Data Store
   Centralized data for admin + main site
   ========================================== */

const GOFAR_DATA = {

    destinations: [
        {
            id: 'dest-ha-giang',
            title: 'Hà Giang',
            category: 'mountain',
            tags: ['🔥 Hot', 'Đông Bắc'],
            desc: 'Cung đường đẹp nhất Việt Nam. Mã Pì Lèng, Đồng Văn, Lũng Cú — mỗi khúc cua là một bức tranh.',
            img: 'images/hero.png',
            rating: 4.9,
            stars: '★★★★★',
            reviews: 234,
            size: 'large',
            modalId: 'ha-giang'
        },
        {
            id: 'dest-ta-xua',
            title: 'Tà Xùa',
            category: 'mountain',
            tags: ['☁️ Săn mây'],
            desc: 'Thiên đường mây hạ giới. Sống lưng khủng long nổi tiếng.',
            img: 'images/taxua.png',
            rating: 4.9,
            stars: '★★★★★',
            reviews: 189,
            size: 'normal',
            modalId: 'ta-xua'
        },
        {
            id: 'dest-sapa',
            title: 'Sapa',
            category: 'mountain',
            tags: ['Núi rừng', 'Sương mù'],
            desc: 'Thung lũng Mường Hoa xanh mướt, đỉnh Fansipan sương phủ trắng xóa quanh năm.',
            img: 'images/sapa_hero.jpg',
            rating: 4.6,
            stars: '★★★★★',
            reviews: 312,
            size: 'normal',
            modalId: null
        },
        {
            id: 'dest-da-lat',
            title: 'Đà Lạt',
            category: 'mountain',
            tags: ['Núi rừng', 'Sương mù'],
            desc: 'Thành phố ngàn hoa ẩn mình dưới đồi thông quanh năm bao phủ sương mờ.',
            img: 'images/dalat_hero.jpg',
            rating: 4.6,
            stars: '★★★★★',
            reviews: 412,
            size: 'normal',
            modalId: null
        },
        {
            id: 'dest-quy-nhon',
            title: 'Quy Nhơn',
            category: 'beach',
            tags: ['Biển đảo', 'Hoang sơ'],
            desc: 'Vịnh biển hoang sơ tuyệt mỹ với bãi biển Kỳ Co, Kỳ quan Eo Gió cát vàng biển xanh.',
            img: 'images/quynhon_hero.jpg',
            rating: 4.6,
            stars: '★★★★★',
            reviews: 328,
            size: 'normal',
            modalId: null
        },
        {
            id: 'dest-ha-long',
            title: 'Vịnh Hạ Long',
            category: 'beach',
            tags: ['UNESCO'],
            desc: 'Kỳ quan thiên nhiên thế giới với hàng ngàn đảo đá vôi.',
            img: 'images/halong.png',
            rating: 4.8,
            stars: '★★★★☆',
            reviews: 312,
            size: 'normal',
            modalId: 'ha-long'
        },
        {
            id: 'dest-hoi-an',
            title: 'Hội An',
            category: 'heritage',
            tags: ['Di sản', 'Phố cổ'],
            desc: 'Phố cổ đèn lồng, nơi thời gian ngừng trôi.',
            img: 'images/hoian.png',
            rating: 4.9,
            stars: '★★★★★',
            reviews: 278,
            size: 'normal',
            modalId: null
        },
        {
            id: 'dest-da-nang',
            title: 'Đà Nẵng',
            category: 'city',
            tags: ['Phố thị'],
            desc: 'Thành phố đáng sống nhất Việt Nam, biển Mỹ Khê tuyệt đẹp.',
            img: 'images/danang.png',
            rating: 4.7,
            stars: '★★★★★',
            reviews: 156,
            size: 'normal',
            modalId: null
        },
        {
            id: 'dest-ninh-binh',
            title: 'Ninh Bình',
            category: 'heritage',
            tags: ['🔥 Hot', 'Di sản'],
            desc: 'Hạ Long trên cạn. Tràng An, Tam Cốc, Hang Múa — non nước hữu tình lung linh.',
            img: 'images/ninh_binh_hero_1783439944952.png',
            rating: 4.8,
            stars: '★★★★★',
            reviews: 245,
            size: 'normal',
            modalId: null
        }
    ],

    reviews: [
        {
            id: 'rev-ha-giang',
            destination: 'Hà Giang',
            destImg: 'images/hero.png',
            stars: '★★★★★',
            date: '15/02/2026',
            text: '"4 ngày 3 đêm trên cung đường Hà Giang. Mỗi sáng tỉnh dậy là một khung cảnh khác. Đèo Mã Pì Lèng lúc 6h sáng, sương mù cuộn dưới chân — đời này phải đi một lần."',
            authorName: 'Hoàng Nam',
            authorInitials: 'HN',
            authorType: 'Dân phượt',
            likes: 234,
            type: 'review'
        },
        {
            id: 'rev-phu-quoc',
            destination: 'Phú Quốc',
            destImg: 'images/phuquoc.png',
            stars: '★★★★☆',
            date: '08/01/2026',
            text: '"Bãi Sao đẹp thật nhưng đông kinh khủng. Mẹo: đi Bãi Khem hoặc Gành Dầu — vắng, hoang sơ, nước trong veo. Tối thuê xe chạy ra chợ đêm, ăn nhum biển tươi rói 50k/con."',
            authorName: 'Thanh Lan',
            authorInitials: 'TL',
            authorType: 'Travel blogger',
            likes: 189,
            type: 'review'
        },
        {
            id: 'rev-sapa',
            destination: 'Sapa',
            destImg: 'images/sapa.png',
            stars: '★★★★★',
            date: '22/12/2025',
            text: '"Ở homestay nhà chị Mẩy, người H\'Mông. Tối ngồi sưởi lửa, nghe chị kể chuyện bản làng. Sáng ra ruộng bậc thang phủ sương trắng xoá. Đây không phải du lịch — đây là sống."',
            authorName: 'Quốc Anh',
            authorInitials: 'QA',
            authorType: 'Backpacker',
            likes: 312,
            type: 'review'
        },
        {
            id: 'rev-quote',
            text: 'Người ta hay nói "đi để trở về". Nhưng có những nơi, đến rồi thì không muốn về nữa.',
            source: '— Một backpacker vô danh, Đà Lạt 2025',
            type: 'quote'
        },
        {
            id: 'rev-da-nang',
            destination: 'Đà Nẵng',
            destImg: 'images/danang.png',
            stars: '★★★★★',
            date: '05/03/2026',
            text: '"Ở Đà Nẵng 1 tuần mà không muốn đi. Sáng chạy dọc Mỹ Khê, trưa ăn mì Quảng bà Vị, chiều lên Bà Nà, tối ngồi cầu Rồng chờ phun lửa. Thành phố này có nhịp sống rất riêng."',
            authorName: 'Hải Linh',
            authorInitials: 'HL',
            authorType: 'Digital nomad',
            likes: 156,
            type: 'review'
        },
        {
            id: 'rev-ha-long',
            destination: 'Vịnh Hạ Long',
            destImg: 'images/halong.png',
            stars: '★★★★☆',
            date: '18/11/2025',
            text: '"Đi du thuyền 2 ngày 1 đêm. Buổi tối nằm trên boong ngắm sao giữa vịnh — im lặng tuyệt đối, chỉ có tiếng sóng vỗ nhẹ vào mạn thuyền. Khoảnh khắc đó đáng giá mọi thứ."',
            authorName: 'Phương Thảo',
            authorInitials: 'PT',
            authorType: 'Couple traveler',
            likes: 278,
            type: 'review'
        }
    ],

    tips: [
        {
            id: 'tip-xe-may',
            icon: '🏍️',
            title: 'Xe máy là vua',
            text: 'Thuê xe máy (150-200k/ngày) là cách tốt nhất khám phá. Đi tour thì đẹp nhưng không "tự do". Nhớ kiểm tra phanh, đèn trước khi thuê.',
            tag: 'Di chuyển'
        },
        {
            id: 'tip-homestay',
            icon: '🏠',
            title: 'Homestay > Khách sạn',
            text: 'Muốn trải nghiệm thật thì ở homestay. 150-300k/đêm, được ăn cơm với gia đình, nghe chuyện vùng miền. Booking có nhưng hỏi trực tiếp thường rẻ hơn.',
            tag: 'Lưu trú'
        },
        {
            id: 'tip-an-uong',
            icon: '🍜',
            title: 'Ăn quán vỉa hè',
            text: 'Quán nào đông người địa phương = quán ngon. Đừng ngại ngồi ghế nhựa. Phở 30k, bún chả 35k, bánh mì 15k — ngon hơn nhà hàng.',
            tag: 'Ẩm thực'
        },
        {
            id: 'tip-sim-4g',
            icon: '📱',
            title: 'SIM 4G tại chỗ',
            text: 'Mua SIM Viettel ngay sân bay, 100k cho 30GB/tháng. Không cần WiFi khách sạn. Google Maps + SIM là đủ đi khắp nơi.',
            tag: 'Thông tin'
        },
        {
            id: 'tip-mua',
            icon: '☀️',
            title: 'Chọn mùa khôn',
            text: 'Miền Bắc: tránh tháng 7-8 (mưa lũ). Miền Trung: tránh tháng 10-11. Miền Nam: mưa tháng 5-10 nhưng thường mưa chiều, sáng vẫn đi được.',
            tag: 'Thời tiết'
        },
        {
            id: 'tip-budget',
            icon: '💰',
            title: 'Budget 500k/ngày',
            text: 'Hoàn toàn khả thi: homestay 200k, ăn 150k (3 bữa), xăng/di chuyển 100k, café 50k. Muốn tiết kiệm hơn thì cắm trại + nấu ăn.',
            tag: 'Chi phí'
        }
    ]
};

// ===== CONTENT VISIBILITY MANAGER =====
const ContentManager = {
    STORAGE_KEY: 'gofar_hidden_content',

    getHiddenIds() {
        try {
            return JSON.parse(localStorage.getItem(this.STORAGE_KEY)) || [];
        } catch {
            return [];
        }
    },

    isHidden(id) {
        return this.getHiddenIds().includes(id);
    },

    hide(id) {
        const hidden = this.getHiddenIds();
        if (!hidden.includes(id)) {
            hidden.push(id);
            localStorage.setItem(this.STORAGE_KEY, JSON.stringify(hidden));
        }
    },

    show(id) {
        const hidden = this.getHiddenIds().filter(h => h !== id);
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(hidden));
    },

    toggle(id) {
        if (this.isHidden(id)) {
            this.show(id);
        } else {
            this.hide(id);
        }
    },

    getVisibleItems(items) {
        return items.filter(item => !this.isHidden(item.id));
    }
};
