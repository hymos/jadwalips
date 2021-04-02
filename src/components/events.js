import * as hello from '../helloo.js'

//ripple
window.createRipple = () => {
  const button = event.currentTarget;
  const circle = document.createElement("span");
  const diameter = Math.max(button.clientWidth, button.clientHeight);

  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${event.clientX - button.offsetLeft - diameter/2}px`;
  circle.style.top = `${event.clientY - button.offsetTop - diameter/2}px`;
  circle.classList.add("ripple");

  const ripple = button.getElementsByClassName("ripple")[0];
  if (ripple) {
    ripple.remove();
  }
  button.appendChild(circle);
};
hello.style`
  span.ripple {
    position: absolute;
    border-radius: 50%;
    transform: scale(0);
    animation: ripple 600ms linear;
    background-color: #4f65ea;
  } ---
  @keyframes ripple {
    to {
      transform: scale(4);
      opacity: 0;
    }
  } ---`

