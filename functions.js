gsap.registerPlugin(ScrollTrigger);

const imageContainer = document.querySelector('.image-container');
const layers = document.querySelectorAll('.image > *');

// 初期状態を設定
gsap.set(layers, { opacity: 0 });
gsap.set('#layer01', { opacity: 1 });

ScrollTrigger.create({
    trigger: imageContainer,
    start: 'top top',
    end: '+=3000', // スクロール全体の長さを調整
    pin: true,
    scrub: true,

    onUpdate: (self) => {
        if (self.progress < 0.2) {
            // #layer01を表示、それ以外は非表示
            gsap.to('#layer01', { opacity: 1, duration: 1 });
            gsap.to('#layer02, #layer03, #layer04', { opacity: 0, duration: 1 });
        } else if (self.progress >= 0.2 && self.progress < 0.5) {
            // #layer02を長い間表示（#layer01はそのまま）
            gsap.to('#layer01', { opacity: 1, duration: 1 });
            gsap.to('#layer02', { opacity: 1, duration: 1 });
            gsap.to('#layer03, #layer04', { opacity: 0, duration: 1 });
        } else if (self.progress >= 0.5 && self.progress < 0.75) {
            // #layer03をゆっくり表示（#layer01, #layer02はそのまま）
            gsap.to('#layer01, #layer02', { opacity: 1, duration: 1 });
            gsap.to('#layer03', { opacity: 1, duration: 4 }); // ゆっくり表示
            gsap.to('#layer04', { opacity: 0, duration: 1 });
        } else {
            // すべてのレイヤーを表示
            gsap.to('#layer01, #layer02, #layer03, #layer04', { opacity: 1, duration: 1 });
        }
    },
});