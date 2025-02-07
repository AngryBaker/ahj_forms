import Popover from "../Popover/Popover";

/**
 * @jest-environment jsdom
 */

test("popover", () => {
  document.body.innerHTML = `<button class="btn"  title="Внимание" data-content="Вы нажали на большую красную кнопку">Click to toggle popover</button>`;
  const popoverFactory = new Popover();
  const btn = document.querySelector(".btn");
  popoverFactory.addHandler(btn);
  btn.click();

  setTimeout(() => {
    const popoverTitle = document.querySelector(".popover-title");
    expect(popoverTitle.innerText).toEqual("Внимание");
    // eslint-disable-next-line no-undef
    done(); // Сообщаем Jest, что тест завершён
  }, 0);
});

test("popover should be closed", () => {
  document.body.innerHTML = `<button class="btn"  title="Внимание" data-content="Вы нажали на большую красную кнопку">Click to toggle popover</button>`;
  const popoverFactory = new Popover();
  const btn = document.querySelector(".btn");
  popoverFactory.addHandler(btn);
  btn.click();

  setTimeout(() => {
    expect(document.querySelector(".popover-title")).not.toBeNull();

    // Второй клик - скрыть поповер
    btn.click();

    setTimeout(() => {
      expect(document.querySelector(".popover-title")).toBeNull();
      // eslint-disable-next-line no-undef
      done();
    }, 0);
  }, 0);
});
