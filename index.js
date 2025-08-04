// hàm gọi hàm showCircle() khi nhấn button
// button : onclick
// gọi đến hàm showCircle()
const addAnimatedCircle = () => {
  showCircle(150, 150, 100).then((div) => {
    div.classList.add("message-ball");
    div.append("Hello,world");
  });
};
// hàm tạo hình tròn
const showCircle = (x, y, radius) => {
  // tạo hình tròn
  let div = document.createElement("div");
  div.style.width = 0;
  div.style.height = 0;
  div.style.left = x + "px";
  div.style.top = y + "px";
  div.className = "circle";
  // nhét div vào body
  document.body.append(div);
  // tạo animation khi nhaấn button
  // hàm trả ra Promise
  // tạo hình tròn rồi mới in ra Hello World
  return new Promise((resolve) => {
    setTimeout(() => {
      div.style.width = 2 * radius + "px";
      div.style.height = 2 * radius + "px";
      // xóa sự kiện transitioned tránh lặp resolve nhiều lần
      const removeEvent = () => {
        div.removeEventListener("transitionend", removeEvent);
      };
      div.addEventListener("transitionend", removeEvent);
      resolve(div);
    }, 0);
  });
};
