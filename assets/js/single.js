// Реализация копирования ссылки для шеринга START

document.addEventListener("DOMContentLoaded", () => {
  const copyLinkElement = document.querySelector(".copy-link");

  if (copyLinkElement) {
    copyLinkElement.addEventListener("click", () => {
      copyLinkElement.classList.add("copy-link--done");

      const currentLink = window.location.href;

      const tempInput = document.createElement("input");
      document.body.appendChild(tempInput);
      tempInput.value = currentLink;
      tempInput.select();

      document.execCommand("copy");

      document.body.removeChild(tempInput);
    });
  }
});

// Реализация копирования ссылки для шеринга END

// Реализация вывода поп-апа START

document.addEventListener("DOMContentLoaded", function () {
  const buttonSingle = document.querySelector(".button--single");
  const popUpContainer = document.querySelector(".pop-up__container");
  const iconClose = document.querySelector(".icon-close");

  buttonSingle.addEventListener("click", function () {
    popUpContainer.classList.add("pop-up__container--active");
  });

  iconClose.addEventListener("click", function () {
    popUpContainer.classList.remove("pop-up__container--active");
  });
});

// Реализация вывода поп-апа END

// Реализация фиксирования поп-апа START

document.addEventListener("DOMContentLoaded", () => {
  const fixScroll = () => {
    const popupContainer = document.querySelector(".pop-up__container--active");
    const body = document.body;

    body.style.overflow = popupContainer ? "hidden" : "auto";
  };

  fixScroll();

  const observer = new MutationObserver(fixScroll);
  observer.observe(document.body, { attributes: true, subtree: true });

  window.addEventListener("resize", fixScroll);
});

// Реализация фиксирования поп-апа END
