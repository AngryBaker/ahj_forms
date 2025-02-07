export default class Popover {
  constructor() {
    this._popovers = [];
    this.activePopovers = [];
    this.popoverHandler = this.popoverHandler.bind(this);
  }

  addHandler(element) {
    element.addEventListener("click", this.popoverHandler);
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

  popoverHandler(e) {
    e.preventDefault();
    const element = e.currentTarget;

    if (this.activePopovers[0]) {
      this.removePopover(this.activePopovers[0]);
      this.activePopovers = [];
    } else {
      const id = this.showPopover(element);
      this.activePopovers.push(id);
      setTimeout(() => {
        this.removePopover(id);
      }, 5000);
    }
  }
}
