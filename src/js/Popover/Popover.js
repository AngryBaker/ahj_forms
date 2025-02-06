export default class Popover {
  constructor() {
    this._popovers = [];
  }

  showPopover(element) {
    const popoverEl = document.createElement("div");
    popoverEl.classList.add("popover");
    const title = element.title;
    const content = element.dataset.content;
    popoverEl.innerHTML = `<div class="popover-title">${title}</div>
                           <div class="popover-content">${content}</div>`;
    const id = performance.now();
    this._popovers.push({
      id,
      element: popoverEl,
    });

    document.body.appendChild(popoverEl);

    const { left, top } = element.getBoundingClientRect();

    popoverEl.style.left =
      left + element.offsetWidth / 2 - popoverEl.offsetWidth / 2 + "px";
    popoverEl.style.top = top - popoverEl.offsetHeight - 5 + "px";

    return id;
  }

  removePopover(id) {
    const popover = this._popovers.find((p) => p.id === id);

    popover.element.remove();
    this._popovers.filter((p) => p.id !== id);
  }
}
