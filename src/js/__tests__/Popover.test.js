import Popover from "../Popover/Popover";

/**
 * @jest-environment jsdom
 */

test("popover", () => {
  document.body.innerHTML = `<button class="btn"  title="Внимание" data-content="Вы нажали на большую красную кнопку">Click to toggle popover</button>`;
  const popoverFactory = new Popover();
  const btn = document.querySelector(".btn");
  popoverFactory.showPopover(btn);

  setTimeout(() => {
    const popoverTitle = document.querySelector(".popover-title");
    expect(popoverTitle.innerText).toEqual("Внимание");
    // eslint-disable-next-line no-undef
    done(); // Сообщаем Jest, что тест завершён
  }, 0);
});
