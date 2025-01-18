document.addEventListener("DOMContentLoaded", () => {
    const soccerSection = document.querySelector(".bangai");
  
    // スクロールイベントを監視
    window.addEventListener("scroll", () => {
      const rect = soccerSection.getBoundingClientRect();
  
      // 要素が画面内に入っているかを判定
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        soccerSection.classList.add("active");
      } else {
        soccerSection.classList.remove("active");
      }
    });
  });
  document.addEventListener("DOMContentLoaded", () => {
    const soccerSection = document.querySelector(".bangai2");
  
    // スクロールイベントを監視
    window.addEventListener("scroll", () => {
      const rect = soccerSection.getBoundingClientRect();
  
      // 要素が画面内に入っているかを判定
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        soccerSection.classList.add("active");
      } else {
        soccerSection.classList.remove("active");
      }
    });
  });
  document.addEventListener("DOMContentLoaded", () => {
    const soccerSection = document.querySelector(".bangai3");
  
    // スクロールイベントを監視
    window.addEventListener("scroll", () => {
      const rect = soccerSection.getBoundingClientRect();
  
      // 要素が画面内に入っているかを判定
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        soccerSection.classList.add("active");
      } else {
        soccerSection.classList.remove("active");
      }
    });
  });
  document.addEventListener("DOMContentLoaded", () => {
    const title = document.querySelector(".bangai4 h2");

    window.addEventListener("scroll", () => {
        const scrollPosition = window.scrollY;
        const elementPosition = title.parentElement.offsetTop;

        if (scrollPosition > elementPosition - window.innerHeight / 1.2) {
            title.classList.add("animate"); // アニメーションクラスを追加
        } else {
            title.classList.remove("animate"); // 再度非表示状態に戻す
        }
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const title = document.querySelector(".bangai5 h2");

    window.addEventListener("scroll", () => {
        const scrollPosition = window.scrollY;
        const elementPosition = title.parentElement.offsetTop;

        if (scrollPosition > elementPosition - window.innerHeight / 1.2) {
            title.classList.add("animate"); // アニメーションクラスを追加
        } else {
            title.classList.remove("animate"); // 再度非表示状態に戻す
        }
    });
});