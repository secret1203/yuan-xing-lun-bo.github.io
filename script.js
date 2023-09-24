const slider = document.querySelector(".shell");
const slides = document.querySelectorAll(".item");
const button = document.querySelectorAll(".button");
let current = 0; // 当前图片的索引
let prev = 4; // 前一张图片的索引
let next = 1; // 后一张图片的索引
// 给所有按钮添加点击事件监听器
for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", () => i == 0 ? gotoPrev() : gotoNext());
}
// 切换到前一张图片
const gotoPrev = () => current > 0 ? gotoNum(current - 1) : gotoNum(slides.length - 1);
// 切换到后一张图片
const gotoNext = () => current < 3 ? gotoNum(current + 1) : gotoNum(0);
// 切换到指定索引的图片
const gotoNum = number => {
    current = number;
    prev = current - 1;
    next = current + 1;
    // 移除所有图片的类名
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
        slides[i].classList.remove("prev");
        slides[i].classList.remove("next");
    }
    // 如果后一张图片的索引超过了图片数量，将其重置为0
    if (next == 4) {
        next = 0;
    }
    // 如果前一张图片的索引小于0，将其重置为4
    if (prev == -1) {
        prev = 3;
    }
    // 给当前、前一张、后一张图片添加对应的类名
    slides[current].classList.add("active");
    slides[prev].classList.add("prev");
    slides[next].classList.add("next");
}

// 该代码用于实现一个图片轮播的功能，首先获取到轮播容器的DO
// M元素和所有的图片元素，以及左右切换按钮的DOM元素。然后定义
// 了三个变量current、prev、next，分别用于记录当前显示图片的索
// 引、前一张图片的索引和后一张图片的索引。接着给左右切换按钮
// 添加点击事件监听器，当点击左按钮时执行gotoPrev函数，当点击
// 右按钮时执行gotoNext函数。gotoPrev和gotoNext函数用于切换到
// 前一张或后一张图片，gotoNum函数用于切换到指定索引的图片。
// 在gotoNum函数中，首先更新current、prev、next变量的值，然后
// 移除所有图片元素的类名，最后给当前、前一张和后一张图片添加
// 对应的类名，用于控制它们的显示和隐藏。