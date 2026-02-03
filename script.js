<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script>
    $(document).ready(function(){
        // Inisialisasi AOS
        AOS.init({ duration: 1000, once: true });

        // LOGIKA SCROLL KHUSUS CODEPEN
        $('nav a[href^="#"]').on('click', function(e) {
            e.preventDefault();
            
            var target = $(this.hash);
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top - 70 // 70 adalah jarak biar gak mentok navbar
                }, 1000, 'swing'); // 1000 adalah durasi (1 detik), 'swing' adalah gaya animasinya
            }
        });

        // NAVBAR SCROLL EFFECT
        $(window).scroll(function() {
            if ($(this).scrollTop() > 50) {
                $('#navbar').addClass('scrolled');
            } else {
                $('#navbar').removeClass('scrolled');
            }
            
            // Parallax Hero
            var scroll = $(this).scrollTop();
            $('#hero-content').css({
                'transform': 'translateY(' + (scroll * 0.3) + 'px)'
            });
        });
    });

    // --- TETAPKAN FUNGSI LAINNYA AGAR TIDAK ERROR ---
    const targetData = {
        1: { t: "Tahfizh Al-Qur'an", d: "Fokus pada kualitas hafalan dengan metode Talaqqi yang mutqin dan makhraj yang benar." },
        2: { t: "Siroh Nabawiyyah", d: "Mempelajari sejarah Rasulullah ﷺ untuk meneladani strategi perjuangan beliau." },
        3: { t: "Adab & Akhlak", d: "Menanamkan karakter islami berdasarkan tuntunan Sunnah para Salafus Shalih." },
        4: { t: "Literasi Dasar", d: "Membekali santri dengan kecakapan baca, tulis, dan hitung yang terintegrasi nilai Islam." }
    };

    function showTarget(id) {
        $('#default-view').addClass('hidden');
        $('#detail-view').removeClass('hidden pop-closing').addClass('pop-active');
        $('#detail-title').text(targetData[id].t);
        $('#detail-body').text(targetData[id].d);
    }

    function hideTarget() {
        $('#detail-view').addClass('pop-closing').removeClass('pop-active');
        setTimeout(function() {
            $('#detail-view').addClass('hidden');
            $('#default-view').removeClass('hidden').addClass('pop-active');
        }, 500);
    }

    function toggleAccordion(element) {
        const $el = $(element);
        const isActive = $el.hasClass('active');
        $('.cost-container').removeClass('active');
        if (!isActive) $el.addClass('active');
    }

    const progInfo = {
        berenang: { t: "Berenang", d: '"Ajarilah anak-anakmu berenang..."', b: "Melatih ketenangan dan memperkuat fisik tubuh." },
        memanah: { t: "Memanah", d: '"Ketahuilah kekuatan itu adalah memanah."', b: "Melatih fokus, konsentrasi, dan kesabaran tinggi." },
        berkuda: { t: "Berkuda", d: '"Kuda itu terikat kebaikan hingga kiamat."', b: "Membangun kepemimpinan dan keseimbangan tubuh." }
    };

    function showPop(key) {
        $('#pop-content').removeClass('hidden pop-closing').addClass('pop-active');
        $('#pop-title').text(progInfo[key].t);
        $('#pop-desc').text(progInfo[key].d);
        $('#pop-benefit').text(progInfo[key].b);
    }

    function hidePop() {
        $('#pop-content').addClass('pop-closing').removeClass('pop-active');
        setTimeout(function() { $('#pop-content').addClass('hidden'); }, 500);
    }
</script>