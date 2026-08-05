/* ==========================================
   GO FAR — JavaScript
   Interactions, animations, search, filtering
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {

    // ===== ADMIN CONTENT VISIBILITY =====
    // Hide content that admin has marked as hidden
    if (typeof ContentManager !== 'undefined') {
        const hiddenIds = ContentManager.getHiddenIds();
        if (hiddenIds.length > 0) {
            // Hide destination cards
            document.querySelectorAll('.dest-card[data-content-id]').forEach(card => {
                if (hiddenIds.includes(card.dataset.contentId)) {
                    card.style.display = 'none';
                }
            });
            // Hide review cards
            document.querySelectorAll('.review-card[data-content-id]').forEach(card => {
                if (hiddenIds.includes(card.dataset.contentId)) {
                    card.style.display = 'none';
                }
            });
            // Hide tip cards
            document.querySelectorAll('.tip-card[data-content-id]').forEach(card => {
                if (hiddenIds.includes(card.dataset.contentId)) {
                    card.style.display = 'none';
                }
            });
        }
    }

    // ===== CURSOR GLOW =====
    const cursorGlow = document.getElementById('cursorGlow');
    let mouseX = 0, mouseY = 0;
    let glowX = 0, glowY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animateCursor() {
        glowX += (mouseX - glowX) * 0.08;
        glowY += (mouseY - glowY) * 0.08;
        cursorGlow.style.left = glowX + 'px';
        cursorGlow.style.top = glowY + 'px';
        requestAnimationFrame(animateCursor);
    }
    animateCursor();

    // ===== NAVBAR SCROLL =====
    const nav = document.getElementById('nav');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 80) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // ===== MOBILE MENU =====
    const btnMenu = document.getElementById('btnMenu');
    const navLinks = document.getElementById('navLinks');

    btnMenu.addEventListener('click', () => {
        btnMenu.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close mobile menu on link click
    navLinks.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            btnMenu.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // ===== SEARCH MODAL =====
    const btnSearch = document.getElementById('btnSearch');
    const searchModal = document.getElementById('searchModal');
    const searchClose = document.getElementById('searchClose');
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');


    const destinations = [
        { name: 'Hà Giang', category: 'mountain', rating: '4.9', img: 'images/hero.png', desc: 'Cung đường đẹp nhất Việt Nam', region: 'Miền Bắc' },
        { name: 'Vịnh Hạ Long', category: 'beach', rating: '4.8', img: 'images/halong.png', desc: 'Kỳ quan thiên nhiên thế giới', region: 'Miền Bắc' },
        { name: 'Hội An', category: 'heritage', rating: '4.9', img: 'images/hoian.png', desc: 'Phố cổ lồng đèn', region: 'Miền Trung' },
        { name: 'Sapa', category: 'mountain', rating: '4.6', img: 'images/sapa.png', desc: 'Ruộng bậc thang mây mù', region: 'Miền Bắc' },
        { name: 'Phú Quốc', category: 'beach', rating: '4.5', img: 'images/phuquoc.png', desc: 'Đảo ngọc phương Nam', region: 'Miền Nam' },
        { name: 'Đà Nẵng', category: 'city', rating: '4.7', img: 'images/danang_hero.jpg', desc: 'Thành phố đáng sống nhất', region: 'Miền Trung' },
        { name: 'Ninh Bình', category: 'heritage', rating: '4.8', img: 'images/ninh_binh_hero_1783439944952.png', desc: 'Tràng An, Bái Đính, Tam Cốc, Hang Múa', region: 'Miền Bắc' },
        { name: 'Tràng An (Ninh Bình)', category: 'heritage', rating: '4.9', img: 'images/ninh_binh_hero_1783439944952.png', desc: 'Hành trình thuyền nan xuyên hang thạch nhũ', region: 'Miền Bắc' },
        { name: 'Hang Múa (Ninh Bình)', category: 'heritage', rating: '4.8', img: 'images/hang_mua_peak_1783441917217.png', desc: 'Chinh phục 500 bậc đá ngắm hoàng hôn', region: 'Miền Bắc' },
        { name: 'Tam Cốc (Ninh Bình)', category: 'heritage', rating: '4.8', img: 'images/tam_coc_river_1783441927501.png', desc: 'Ngắm dải lụa sông Ngô Đồng mùa lúa chín', region: 'Miền Bắc' },
        { name: 'Chùa Bái Đính (Ninh Bình)', category: 'heritage', rating: '4.8', img: 'images/bai_dinh_pagoda_1783443686667.png', desc: 'Hành lang La Hán dài nhất Đông Nam Á', region: 'Miền Bắc' },
        { name: 'Cố đô Hoa Lư (Ninh Bình)', category: 'heritage', rating: '4.7', img: 'images/hoa_lu_temple_1783443696229.png', desc: 'Đền thờ vua Đinh, vua Lê rêu phong', region: 'Miền Bắc' },
        { name: 'Đầm Vân Long (Ninh Bình)', category: 'heritage', rating: '4.8', img: 'images/van_long_wetland_1783443704949.png', desc: 'Vùng đầm ngập nước sinh thái hoang sơ', region: 'Miền Bắc' },
        { name: 'Đà Lạt', category: 'mountain', rating: '4.6', img: 'images/dalat_hero.jpg', desc: 'Thành phố sương mù', region: 'Tây Nguyên' },
        { name: 'Nha Trang', category: 'beach', rating: '4.4', img: 'images/phuquoc.png', desc: 'Biển xanh, nắng vàng', region: 'Miền Trung' },
        { name: 'Huế', category: 'heritage', rating: '4.5', img: 'images/hoian.png', desc: 'Cố đô xưa', region: 'Miền Trung' },
        { name: 'Quy Nhơn', category: 'beach', rating: '4.6', img: 'images/quynhon_hero.jpg', desc: 'Biển hoang sơ bí ẩn', region: 'Miền Trung' },
        { name: 'Mộc Châu', category: 'mountain', rating: '4.5', img: 'images/sapa.png', desc: 'Cao nguyên hoa mận trắng', region: 'Miền Bắc' },
    ];

    let activeFilter = 'all';

    btnSearch.addEventListener('click', () => {
        searchModal.classList.add('active');
        setTimeout(() => searchInput.focus(), 300);
    });

    // Region Links in Footer
    document.querySelectorAll('.region-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const region = link.getAttribute('data-region');
            if (region) {
                searchModal.classList.add('active');
                activeFilter = 'all';
                document.querySelectorAll('.filter-tag').forEach(t => {
                    if (t.dataset.filter === 'all') t.classList.add('active');
                    else t.classList.remove('active');
                });
                searchInput.value = region;
                filterSearch();
                setTimeout(() => searchInput.focus(), 300);
            }
        });
    });

    searchClose.addEventListener('click', () => {
        searchModal.classList.remove('active');
    });

    searchModal.addEventListener('click', (e) => {
        if (e.target === searchModal) {
            searchModal.classList.remove('active');
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') searchModal.classList.remove('active');
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            searchModal.classList.add('active');
            setTimeout(() => searchInput.focus(), 300);
        }
    });

    // Search filter tags
    document.querySelectorAll('.filter-tag').forEach(tag => {
        tag.addEventListener('click', () => {
            document.querySelectorAll('.filter-tag').forEach(t => t.classList.remove('active'));
            tag.classList.add('active');
            activeFilter = tag.dataset.filter;
            filterSearch();
        });
    });

    searchInput.addEventListener('input', filterSearch);

    function filterSearch() {
        const query = searchInput.value.toLowerCase().trim();
        let results = destinations;

        if (activeFilter !== 'all') {
            results = results.filter(d => d.category === activeFilter);
        }

        if (query) {
            results = results.filter(d =>
                d.name.toLowerCase().includes(query) ||
                d.desc.toLowerCase().includes(query) ||
                (d.region && d.region.toLowerCase().includes(query))
            );
        }

        renderSearchResults(results);
    }

    function renderSearchResults(results) {
        if (results.length === 0) {
            searchResults.innerHTML = '<p style="color: var(--text-muted); padding: 2rem 0; text-align: center;">Không tìm thấy điểm đến nào.</p>';
            return;
        }

        searchResults.innerHTML = results.map(d => {
            let onclickAction = `document.getElementById('searchModal').classList.remove('active');`;
            const nameLower = d.name.toLowerCase();
            if (nameLower.includes('tràng an')) {
                onclickAction += `window.location.href = 'destination-trang-an.html';`;
            } else if (nameLower.includes('hang múa')) {
                onclickAction += `window.location.href = 'destination-hang-mua.html';`;
            } else if (nameLower.includes('tam cốc')) {
                onclickAction += `window.location.href = 'destination-tam-coc.html';`;
            } else if (nameLower.includes('bái đính')) {
                onclickAction += `window.location.href = 'destination-bai-dinh.html';`;
            } else if (nameLower.includes('hoa lư')) {
                onclickAction += `window.location.href = 'destination-hoa-lu.html';`;
            } else if (nameLower.includes('vân long')) {
                onclickAction += `window.location.href = 'destination-van-long.html';`;
            } else if (nameLower.includes('ninh bình')) {
                onclickAction += `window.location.href = 'destination-ninh-binh.html';`;
            } else if (nameLower.includes('hà giang')) {
                onclickAction += `window.location.href = 'destination-ha-giang.html';`;
            } else if (nameLower.includes('tà xùa')) {
                onclickAction += `window.location.href = 'destination-ta-xua.html';`;
            } else if (nameLower.includes('hạ long')) {
                onclickAction += `window.location.href = 'destination-ha-long.html';`;
            } else if (nameLower.includes('hội an')) {
                onclickAction += `window.location.href = 'destination-hoi-an.html';`;
            } else if (nameLower.includes('đà nẵng')) {
                onclickAction += `window.location.href = 'destination-da-nang.html';`;
            } else if (nameLower.includes('sapa')) {
                onclickAction += `window.location.href = 'destination-sapa.html';`;
            } else if (nameLower.includes('đà lạt')) {
                onclickAction += `window.location.href = 'destination-da-lat.html';`;
            } else if (nameLower.includes('quy nhơn')) {
                onclickAction += `window.location.href = 'destination-quy-nhon.html';`;
            }
            return `
                <div class="search-result-item" onclick="${onclickAction}">
                    <img src="${d.img}" alt="${d.name}">
                    <div>
                        <h4>${d.name}</h4>
                        <span>★ ${d.rating} · ${d.desc}</span>
                    </div>
                </div>
            `;
        }).join('');
    }

    // ===== CATEGORY TABS (Destinations) =====
    const categoryTabs = document.querySelectorAll('.cat-tab');
    const destCards = document.querySelectorAll('.dest-card');

    categoryTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            categoryTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            const category = tab.dataset.category;

            destCards.forEach(card => {
                if (category === 'all' || card.dataset.category === category) {
                    card.style.display = '';
                    card.style.animation = 'fadeInUp 0.5s ease forwards';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // ===== SCROLL ANIMATIONS =====
    const scrollElements = document.querySelectorAll('[data-scroll]');

    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                scrollObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -60px 0px'
    });

    scrollElements.forEach(el => scrollObserver.observe(el));

    // (Dead code removed: hero animations, counter, parallax — targets not in HTML)

    // ===== HELPFUL BUTTON INTERACTION =====
    document.querySelectorAll('.btn-helpful').forEach(btn => {
        btn.addEventListener('click', function () {
            const text = this.textContent;
            const match = text.match(/(\d+)/);
            if (match) {
                const count = parseInt(match[1]);
                if (this.classList.contains('liked')) {
                    this.textContent = `♥ ${count - 1}`;
                    this.classList.remove('liked');
                    this.style.color = '';
                    this.style.borderColor = '';
                    this.style.background = '';
                } else {
                    this.textContent = `♥ ${count + 1}`;
                    this.classList.add('liked');
                    this.style.color = '#e8734a';
                    this.style.borderColor = '#e8734a';
                    this.style.background = 'rgba(232, 115, 74, 0.1)';
                }
            }
        });
    });

    // ===== NEWSLETTER FORM =====
    const newsletterForm = document.querySelector('.newsletter-hero-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const input = newsletterForm.querySelector('input');
            if (input && input.value) {
                const btn = newsletterForm.querySelector('.hero-btn');
                btn.innerHTML = '<span>✓ Đã đăng ký!</span>';
                btn.style.background = 'linear-gradient(135deg, #3dbda7, #2a9d8f)';
                input.value = '';
                setTimeout(() => {
                    btn.innerHTML = '<span>Đăng ký</span><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>';
                    btn.style.background = '';
                }, 3000);
            }
        });
    }

    // ===== SMOOTH SCROLL =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offset = 80;
                const top = target.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({ top, behavior: 'smooth' });
            }
        });
    });

    // ===== FADE IN UP ANIMATION CSS =====
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(style);

    // ===== TIPS CAROUSEL =====
    const tipsCarousel = document.getElementById('tipsCarousel');
    const tipsPrev = document.getElementById('tipsPrev');
    const tipsNext = document.getElementById('tipsNext');

    if (tipsCarousel && tipsPrev && tipsNext) {
        const scrollAmount = 370; // card width + gap
        
        tipsNext.addEventListener('click', () => {
            tipsCarousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        });
        
        tipsPrev.addEventListener('click', () => {
            tipsCarousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        });
    }

    // ===== SHOWCASE HERO LOGIC =====
    const heroSlider = document.getElementById('heroSlider');
    const heroItems = document.querySelectorAll('.showcase-item');
    const heroPrev = document.getElementById('heroPrev');
    const heroNext = document.getElementById('heroNext');
    const heroDots = document.getElementById('heroDots');

    if (heroSlider && heroItems.length > 0) {
        // Create pagination dots
        heroItems.forEach((_, i) => {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            if (i === 0) dot.classList.add('active');
            dot.addEventListener('click', () => {
                heroSlider.scrollTo({
                    left: heroSlider.offsetWidth * i,
                    behavior: 'smooth'
                });
            });
            heroDots.appendChild(dot);
        });

        const dots = heroDots.querySelectorAll('.dot');

        // Update active states on scroll
        heroSlider.addEventListener('scroll', () => {
            const index = Math.round(heroSlider.scrollLeft / heroSlider.offsetWidth);
            heroItems.forEach((item, i) => {
                item.classList.toggle('active', i === index);
            });
            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === index);
            });
        }, { passive: true });

        // Arrow navigation
        heroPrev.addEventListener('click', () => {
            heroSlider.scrollBy({ left: -heroSlider.offsetWidth, behavior: 'smooth' });
        });
        heroNext.addEventListener('click', () => {
            heroSlider.scrollBy({ left: heroSlider.offsetWidth, behavior: 'smooth' });
        });
    }

    // ===== CONTENT DATABASE =====
    const contentMap = {
        'ha-giang': {
            title: 'Hà Giang',
            tag: 'Mountain',
            location: 'Đông Bắc Việt Nam',
            rating: '★ 4.9',
            img: 'images/hero.png',
            review: '4 ngày 3 đêm trên cung đường Hà Giang. Mỗi sáng tỉnh dậy là một khung cảnh khác. Đèo Mã Pì Lèng lúc 6h sáng, sương mù cuộn dưới chân — đời này phải đi một lần. Những khúc cua tay áo hiểm trở, những bản làng người H\'Mông nép mình bên vách đá, và lòng hiếu khách của người dân bản địa sẽ khiến bạn không bao giờ quên.',
            tips: 'Nên thuê xe máy tại TP Hà Giang để tự do khám phá. Luôn kiểm tra phanh và xăng trước khi vượt đèo.'
        },
        'ta-xua': {
            title: 'Tà Xùa',
            tag: 'Hot · Săn mây',
            location: 'Sơn La',
            rating: '★ 4.9',
            img: 'images/taxua.png',
            review: 'Thiên đường mây hạ giới. Nếu có một nơi khiến bạn thấy mình thật nhỏ bé trước thiên nhiên, đó chính là Tà Xùa. 5h30 sáng tại Sống Lưng Khủng Long, khi nắng vàng bắt đầu rọi xuống biển mây dày đặc, bạn sẽ hiểu vì sao người ta gọi đây là chốn tiên cảnh. Không khí trong lành, gió lạnh len lỏi, và cả một biển mây bồng bềnh cuộn trào ngay dưới chân.',
            tips: 'Nên đi vào tháng 10 - tháng 4. Mang theo áo khoác thật dày vì nhiệt độ ban đêm có thể xuống dưới 10 độ.'
        },
        'ha-long': {
            title: 'Vịnh Hạ Long',
            tag: 'UNESCO',
            location: 'Quảng Ninh',
            rating: '★ 4.8',
            img: 'images/halong.png',
            review: 'Kỳ quan thiên nhiên thế giới với hàng ngàn đảo đá vôi nhô lên từ làn nước xanh ngọc. Trải nghiệm ngủ đêm trên du thuyền giữa vịnh là khoảnh khắc bình yên nhất. Buổi tối ngắm sao trên boong tàu, sáng sớm tập Taichi đón bình minh giữa đại dương.',
            tips: 'Nên đặt tour du thuyền 2 ngày 1 đêm để trải nghiệm trọn vẹn. Tránh đi vào cuối tuần mùa hè nếu không muốn chen chúc.'
        },
        'hoi-an': {
            title: 'Hội An',
            tag: 'Di sản · Phố cổ',
            location: 'Quảng Nam',
            rating: '★ 4.9',
            img: 'images/hoian.png',
            review: 'Phố cổ đèn lồng, nơi thời gian ngừng trôi. Đi dọc con phố nhỏ lúc hoàng hôn, ánh đèn lồng vàng ấm chiếu xuống mặt nước sông Hoài — đó là khoảnh khắc Hội An chinh phục mọi trái tim. Ẩm thực nơi đây cũng đặc sắc không kém: cao lầu, mì Quảng, bánh mì Phượng.',
            tips: 'Nên đi vào tháng 2-4 (ít mưa). Thuê xe đạp dạo phố cổ. Tối 14 âm lịch hàng tháng có Đêm Hội An — phố tắt đèn, thắp nến lung linh.'
        },
        'da-nang': {
            title: 'Đà Nẵng',
            tag: 'Phố thị',
            location: 'Đà Nẵng',
            rating: '★ 4.7',
            img: 'images/danang.png',
            review: 'Thành phố đáng sống nhất Việt Nam, nơi biển Mỹ Khê tuyệt đẹp trải dài tít tắp. Sáng chạy bộ dọc bờ biển, trưa ăn mì Quảng bà Vị, chiều lên Bà Nà ngắm Cầu Vàng, tối ngồi cầu Rồng chờ phun lửa. Đà Nẵng có nhịp sống rất riêng — vừa năng động, vừa bình yên.',
            tips: 'Nên đi tháng 3-8. Thuê xe máy khám phá bán đảo Sơn Trà (voọc chà vá, cảnh biển tuyệt đẹp). Ăn bánh tráng cuốn thịt heo là must-try.'
        },
        'sapa': {
            title: 'Sapa',
            tag: 'Tây Bắc',
            location: 'Lào Cai',
            rating: '★ 4.6',
            img: 'images/sapa.png',
            review: 'Ruộng bậc thang mùa lúa chín vàng rực, homestay bản làng ấm cúng, sương mù huyền ảo bao phủ thung lũng. Ở homestay nhà chị Mẩy, người H\'Mông — tối ngồi sưởi lửa, nghe chuyện bản làng. Sáng ra ruộng bậc thang phủ sương trắng xoá. Đây không phải du lịch — đây là sống.',
            tips: 'Mùa lúa chín (tháng 9-10) là đẹp nhất. Trek Tả Phìn hoặc Tả Van để trải nghiệm bản làng. Mang giày trek và áo ấm — nhiệt độ ban đêm có thể xuống 5°C.'
        }
    };

    // ===== ARTICLE MODAL LOGIC =====
    const articleModal = document.getElementById('articleModal');
    const modalImg = document.getElementById('modalImg');
    const modalTag = document.getElementById('modalTag');
    const modalTitle = document.getElementById('modalTitle');
    const modalRating = document.getElementById('modalRating');
    const modalLocation = document.getElementById('modalLocation');
    const modalReview = document.getElementById('modalReview');
    const modalTips = document.getElementById('modalTips');
    
    const modalClose = document.getElementById('modalClose');
    const modalOverlay = document.getElementById('modalOverlay');

    function openModal(id) {
        const data = contentMap[id];
        if (!data) return;

        modalImg.src = data.img;
        modalTag.textContent = data.tag;
        modalTitle.textContent = data.title;
        modalRating.textContent = data.rating;
        modalLocation.textContent = data.location;
        modalReview.textContent = data.review;
        modalTips.textContent = data.tips;

        articleModal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Lock scroll
    }

    function closeModal() {
        articleModal.classList.remove('active');
        document.body.style.overflow = ''; // Unlock scroll
    }

    if (modalClose) modalClose.addEventListener('click', closeModal);
    if (modalOverlay) modalOverlay.addEventListener('click', closeModal);

    // Escape to close
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });

    // Global click listener for cards & showcase buttons
    document.addEventListener('click', (e) => {
        const showcaseBtn = e.target.closest('.btn-showcase-view');
        const reviewBtn = e.target.closest('.btn-text');
        const destCard = e.target.closest('.dest-card');
        
        if (showcaseBtn) {
            const id = showcaseBtn.getAttribute('data-id');
            if (id) {
                e.preventDefault();
                if (id === 'ninh-binh') {
                    window.location.href = 'destination-ninh-binh.html';
                } else if (id === 'da-nang') {
                    window.location.href = 'destination-da-nang.html';
                } else if (id === 'ha-giang') {
                    window.location.href = 'destination-ha-giang.html';
                } else if (id === 'ta-xua') {
                    window.location.href = 'destination-ta-xua.html';
                } else if (id === 'ha-long') {
                    window.location.href = 'destination-ha-long.html';
                } else if (id === 'hoi-an') {
                    window.location.href = 'destination-hoi-an.html';
                } else {
                    openModal(id);
                }
            }
            return;
        }

        if (reviewBtn || destCard) {
            // Find ID from title slug
            const card = destCard || reviewBtn.closest('.dest-card');
            const titleElement = card.querySelector('.dest-card-title');
            if (titleElement) {
                const title = titleElement.textContent.trim().toLowerCase();
                
                if (title.includes('ninh bình')) {
                    e.preventDefault();
                    window.location.href = 'destination-ninh-binh.html';
                    return;
                } else if (title.includes('đà nẵng')) {
                    e.preventDefault();
                    window.location.href = 'destination-da-nang.html';
                    return;
                } else if (title.includes('hà giang')) {
                    e.preventDefault();
                    window.location.href = 'destination-ha-giang.html';
                    return;
                } else if (title.includes('tà xùa')) {
                    e.preventDefault();
                    window.location.href = 'destination-ta-xua.html';
                    return;
                } else if (title.includes('hạ long')) {
                    e.preventDefault();
                    window.location.href = 'destination-ha-long.html';
                    return;
                } else if (title.includes('hội an')) {
                    e.preventDefault();
                    window.location.href = 'destination-hoi-an.html';
                    return;
                } else if (title.includes('sapa')) {
                    e.preventDefault();
                    window.location.href = 'destination-sapa.html';
                    return;
                } else if (title.includes('đà lạt')) {
                    e.preventDefault();
                    window.location.href = 'destination-da-lat.html';
                    return;
                } else if (title.includes('quy nhơn')) {
                    e.preventDefault();
                    window.location.href = 'destination-quy-nhon.html';
                    return;
                }
                
                let id = '';
                if (title.includes('đà nẵng')) id = 'da-nang';
                
                if (id) {
                    e.preventDefault();
                    openModal(id);
                }
            }
        }
    });

    // ===== PAGE LOADER =====
    const pageLoader = document.getElementById('pageLoader');
    if (pageLoader) {
        setTimeout(() => {
            pageLoader.classList.add('hidden');
        }, 1500);
    }

    // ===== HERO AUTO-SLIDE =====
    if (heroSlider && heroItems.length > 1) {
        let autoSlideInterval;
        let currentSlideIndex = 0;

        function startAutoSlide() {
            autoSlideInterval = setInterval(() => {
                currentSlideIndex = (currentSlideIndex + 1) % heroItems.length;
                heroSlider.scrollTo({
                    left: heroSlider.offsetWidth * currentSlideIndex,
                    behavior: 'smooth'
                });
            }, 5000);
        }

        function stopAutoSlide() {
            clearInterval(autoSlideInterval);
        }

        startAutoSlide();

        // Pause on hover
        heroSlider.addEventListener('mouseenter', stopAutoSlide);
        heroSlider.addEventListener('mouseleave', startAutoSlide);

        // Sync currentSlideIndex with manual scroll
        heroSlider.addEventListener('scroll', () => {
            currentSlideIndex = Math.round(heroSlider.scrollLeft / heroSlider.offsetWidth);
        }, { passive: true });
    }

    // ===== BACK TO TOP =====
    const backToTop = document.getElementById('backToTop');
    if (backToTop) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        }, { passive: true });

        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // ===== FLOATING PARTICLES =====
    const heroParticles = document.getElementById('heroParticles');
    if (heroParticles) {
        for (let i = 0; i < 15; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            
            const size = Math.random() * 6 + 2;
            const x = Math.random() * 100;
            const y = Math.random() * 100;
            const duration = Math.random() * 8 + 5;
            const delay = Math.random() * 5;
            const tx = (Math.random() - 0.5) * 150;
            const ty = -(Math.random() * 200 + 50);
            const opacity = Math.random() * 0.3 + 0.15;

            particle.style.cssText = `
                left: ${x}%;
                top: ${y}%;
                --size: ${size}px;
                --duration: ${duration}s;
                --delay: ${delay}s;
                --tx: ${tx}px;
                --ty: ${ty}px;
                --opacity: ${opacity};
            `;

            heroParticles.appendChild(particle);
        }
    }

});

