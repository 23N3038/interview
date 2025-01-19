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
            title.classList.add("animate");
        } else {
            title.classList.remove("animate");
        }
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const title = document.querySelector(".bangai5 h2");

    window.addEventListener("scroll", () => {
        const scrollPosition = window.scrollY;
        const elementPosition = title.parentElement.offsetTop;

        if (scrollPosition > elementPosition - window.innerHeight / 1.2) {
            title.classList.add("animate");
        } else {
            title.classList.remove("animate");
        }
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const target = document.querySelector(".message-bubble1");

    if (target) {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        target.classList.add("animate");
                    } else {
                        // 繰り返しアニメーションを行う場合、クラスを削除
                        target.classList.remove("animate");
                    }
                });
            },
            {
                threshold: 0.5, // 要素が50%見えるとアニメーションを開始
            }
        );

        observer.observe(target);
    }
});
document.addEventListener("DOMContentLoaded", () => {
    const target = document.querySelector(".message-bubble2");

    if (target) {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        target.classList.add("animate");
                    } else {
                        // 繰り返しアニメーションを行う場合、クラスを削除
                        target.classList.remove("animate");
                    }
                });
            },
            {
                threshold: 0.5, // 要素が50%見えるとアニメーションを開始
            }
        );

        observer.observe(target);
    }
});document.addEventListener("DOMContentLoaded", () => {
    const target = document.querySelector(".message-bubble3");

    if (target) {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        target.classList.add("animate");
                    } else {
                        // 繰り返しアニメーションを行う場合、クラスを削除
                        target.classList.remove("animate");
                    }
                });
            },
            {
                threshold: 0.5, // 要素が50%見えるとアニメーションを開始
            }
        );

        observer.observe(target);
    }
});document.addEventListener("DOMContentLoaded", () => {
    const target = document.querySelector(".message-bubble4");

    if (target) {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        target.classList.add("animate");
                    } else {
                        // 繰り返しアニメーションを行う場合、クラスを削除
                        target.classList.remove("animate");
                    }
                });
            },
            {
                threshold: 0.5, // 要素が50%見えるとアニメーションを開始
            }
        );

        observer.observe(target);
    }
});document.addEventListener("DOMContentLoaded", () => {
    const target = document.querySelector(".message-bubble5");

    if (target) {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        target.classList.add("animate");
                    } else {
                        // 繰り返しアニメーションを行う場合、クラスを削除
                        target.classList.remove("animate");
                    }
                });
            },
            {
                threshold: 0.5, // 要素が50%見えるとアニメーションを開始
            }
        );

        observer.observe(target);
    }
});document.addEventListener("DOMContentLoaded", () => {
    const target = document.querySelector(".message-bubble6");

    if (target) {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        target.classList.add("animate");
                    } else {
                        // 繰り返しアニメーションを行う場合、クラスを削除
                        target.classList.remove("animate");
                    }
                });
            },
            {
                threshold: 0.5, // 要素が50%見えるとアニメーションを開始
            }
        );

        observer.observe(target);
    }
});document.addEventListener("DOMContentLoaded", () => {
    const target = document.querySelector(".message-bubble7");

    if (target) {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        target.classList.add("animate");
                    } else {
                        // 繰り返しアニメーションを行う場合、クラスを削除
                        target.classList.remove("animate");
                    }
                });
            },
            {
                threshold: 0.5, // 要素が50%見えるとアニメーションを開始
            }
        );

        observer.observe(target);
    }
});document.addEventListener("DOMContentLoaded", () => {
    const target = document.querySelector(".message-bubble8");

    if (target) {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        target.classList.add("animate");
                    } else {
                        // 繰り返しアニメーションを行う場合、クラスを削除
                        target.classList.remove("animate");
                    }
                });
            },
            {
                threshold: 0.5, // 要素が50%見えるとアニメーションを開始
            }
        );

        observer.observe(target);
    }
});document.addEventListener("DOMContentLoaded", () => {
    const target = document.querySelector(".message-bubble9");

    if (target) {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        target.classList.add("animate");
                    } else {
                        // 繰り返しアニメーションを行う場合、クラスを削除
                        target.classList.remove("animate");
                    }
                });
            },
            {
                threshold: 0.5, // 要素が50%見えるとアニメーションを開始
            }
        );

        observer.observe(target);
    }
});document.addEventListener("DOMContentLoaded", () => {
    const target = document.querySelector(".message-bubble10");

    if (target) {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        target.classList.add("animate");
                    } else {
                        // 繰り返しアニメーションを行う場合、クラスを削除
                        target.classList.remove("animate");
                    }
                });
            },
            {
                threshold: 0.5, // 要素が50%見えるとアニメーションを開始
            }
        );

        observer.observe(target);
    }
});document.addEventListener("DOMContentLoaded", () => {
    const target = document.querySelector(".message-bubble11");

    if (target) {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        target.classList.add("animate");
                    } else {
                        // 繰り返しアニメーションを行う場合、クラスを削除
                        target.classList.remove("animate");
                    }
                });
            },
            {
                threshold: 0.5, // 要素が50%見えるとアニメーションを開始
            }
        );

        observer.observe(target);
    }
});document.addEventListener("DOMContentLoaded", () => {
    const target = document.querySelector(".message-bubble12");

    if (target) {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        target.classList.add("animate");
                    } else {
                        // 繰り返しアニメーションを行う場合、クラスを削除
                        target.classList.remove("animate");
                    }
                });
            },
            {
                threshold: 0.5, // 要素が50%見えるとアニメーションを開始
            }
        );

        observer.observe(target);
    }
});
document.addEventListener("DOMContentLoaded", () => {
    const title = document.querySelector(".bangai6 h2");

    window.addEventListener("scroll", () => {
        const scrollPosition = window.scrollY;
        const elementPosition = title.parentElement.offsetTop;

        if (scrollPosition > elementPosition - window.innerHeight / 1.2) {
            title.classList.add("animate");
        } else {
            title.classList.remove("animate");
        }
    });
});
gsap.registerPlugin(ScrollTrigger);

const imageContainer = document.querySelector('.image-container');
const imageContainer2 = document.querySelector('.image-container2');

// 初期設定
gsap.set('#midori, #papa1, #ball1, #ball2, #ball3, #papa2, #exclamation1, #exclamation2', { opacity: 0 });
gsap.set('#gakusi, #sasaeru', { opacity: 0 });

// 最初のコンテナのアニメーション
ScrollTrigger.create({
  trigger: imageContainer,
  start: 'top top',
  end: '+=1200',
  pin: true,
  scrub: true,
  onUpdate: (self) => {
    const progress = self.progress;

    if (progress < 0.2) {
      // midoriを表示
      gsap.to('#midori', { opacity: 1 });
      gsap.to('#papa1, #ball1, #ball2, #ball3, #papa2, #exclamation1, #exclamation2', { opacity: 0 });
    } else if (progress >= 0.2 && progress < 0.4) {
      // papa1を表示
      gsap.to('#midori, #papa1', { opacity: 1 });
      gsap.to('#ball1, #ball2, #ball3, #papa2, #exclamation1, #exclamation2', { opacity: 0 });
    } else if (progress >= 0.4 && progress < 0.6) {
      // ball1を表示
      gsap.to('#midori, #papa1, #ball1', { opacity: 1 });
      gsap.to('#ball2, #ball3, #papa2, #exclamation1, #exclamation2', { opacity: 0 });
    } else if (progress >= 0.6 && progress < 0.8) {
      // ball2を表示
      gsap.to('#midori, #papa1, #ball1, #ball2', { opacity: 1 });
      gsap.to('#ball3, #papa2, #exclamation1, #exclamation2', { opacity: 0 });
    } else if (progress >= 0.8 && progress < 0.9) {
      // ball3を表示
      gsap.to('#midori, #papa1, #ball1, #ball2, #ball3', { opacity: 1 });
      gsap.to('#papa2, #exclamation1, #exclamation2', { opacity: 0 });
    } else if (progress >= 0.9) {
      // papa2, !, !!を表示
      gsap.to('#midori, #papa1, #ball1, #ball2, #ball3, #papa2', { opacity: 1 });
      gsap.to('#exclamation1, #exclamation2', { opacity: 1 });
    }
  },
});

// 2番目のコンテナのアニメーション
ScrollTrigger.create({
  trigger: imageContainer2,
  start: 'top top',
  end: '+=1000',
  pin: true,
  scrub: true,
  onUpdate: (self) => {
    const progress = self.progress;

    if (progress < 0.5) {
      // gakusiを表示
      gsap.to('#gakusi', { opacity: 1 });
      gsap.to('#sasaeru', { opacity: 0 });
    } else {
      // sasaeruを表示
      gsap.to('#gakusi', { opacity: 1 });
      gsap.to('#sasaeru', { opacity: 1 });
    }
  },
});