import Popover from "./Popover/Popover";

const popoverFactory = new Popover();
const btn = document.querySelector(".btn");
let activePopovers = [];

btn.addEventListener("click", (e) => {
  e.preventDefault();

  activePopovers.forEach((id) => popoverFactory.removePopover(id));
  activePopovers = [];
  const id = popoverFactory.showPopover(btn);
  activePopovers.push(id);
  setTimeout(() => {
    popoverFactory.removePopover(id);
  }, 5000);
});
