import Popover from "./Popover/Popover";

const popoverFactory = new Popover();
const btn = document.querySelector(".btn");
popoverFactory.addHandler(btn);

// btn.addEventListener("click", (e) => {
//   e.preventDefault();

//   if (activePopovers[0]) {
//     // activePopovers.forEach((id) => popoverFactory.removePopover(id));
//     popoverFactory.removePopover(activePopovers[0]);
//     activePopovers = [];
//   } else {
//     const id = popoverFactory.showPopover(btn);
//     activePopovers.push(id);
//     setTimeout(() => {
//       popoverFactory.removePopover(id);
//     }, 5000);
//   }
// });
