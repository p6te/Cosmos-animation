document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".anim-bg");

  document.addEventListener("mousemove", (e) => {
    const { clientX, clientY } = e;
    const centerX = window.innerHeight / 2;
    const centerY = window.innerWidth / 2;

    elements.forEach((element) => {
      const ratioX = element.getAttribute("ratioX");
      const ratioY = element.getAttribute("ratioY");

      const moveX = - (clientX - centerX) * ratioX;
      const moveY = - ( clientY - centerY) * ratioY;
      console.log(moveX, moveY);

      element.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
  });
  console.log(elements);
});
