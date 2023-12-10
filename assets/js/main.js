// Реализация работы кнопки "Ещё" START

document.addEventListener("DOMContentLoaded", () => {
  const portfolioButton = document.querySelector(".button");

  if (portfolioButton) {
    const portfolioElements = document.querySelectorAll(
      ".portfolio__container"
    );

    let counter = 3;

    portfolioButton.addEventListener("click", () => {
      for (
        let i = counter;
        i < counter + 3 && i < portfolioElements.length;
        i++
      ) {
        portfolioElements[i].classList.add("portfolio__container--active");
      }

      counter += 3;
      if (counter >= portfolioElements.length) {
        counter = 3;
        portfolioButton.classList.add("button--hidden");
      }
    });
  }
});

// Реализация работы кнопки "Ещё" категории END

// Реализация поворота стрелки в частых вопросах START

document.addEventListener("DOMContentLoaded", () => {
  const oftenQuestionContainer = document.querySelector(
    ".often-question__container"
  );

  if (oftenQuestionContainer) {
    const summaries = oftenQuestionContainer.querySelectorAll("summary");

    summaries.forEach((summary) => {
      summary.addEventListener("click", () => {
        const iconRightArrow = summary.querySelector(".icon-plus");
        iconRightArrow.classList.toggle("icon-plus--active");
      });
    });
  }
});

// Реализация поворота стрелки в частых вопросах END

// Реализация работы блока с частыми вопросами START

document.addEventListener("DOMContentLoaded", () => {
  const detailsElements = document.querySelectorAll(".often-question__details");

  if (detailsElements.length > 0) {
    const summaries = document.querySelectorAll(".often-question__summary");
    summaries.forEach((summary) => {
      summary.addEventListener("click", () => {
        const details = summary.closest(".often-question__details");
        const isActive = details.classList.contains(
          "often-question__details--active"
        );

        if (isActive) {
          details.classList.remove("often-question__details--active");
        } else {
          details.classList.add("often-question__details--active");
        }
      });
    });
  }
});

// Реализация работы блока с частыми вопросами END

// Реализация работы подцветки меню при прокрутке START

document.addEventListener("DOMContentLoaded", () => {
  const navItems = document.querySelectorAll(".anchor-nav__item");

  if (navItems.length > 0) {
    const isElementInViewport = (elem) => {
      const rect = elem.getBoundingClientRect();
      return rect.top <= 320 && rect.bottom >= 240;
    };

    const toggleActiveClass = (targetId, addActiveClass) => {
      navItems.forEach((item) => {
        const link = item.querySelector("a");
        if (link.getAttribute("href") === "#" + targetId) {
          if (addActiveClass) {
            item.classList.add("anchor-nav__item--active");
          } else {
            item.classList.remove("anchor-nav__item--active");
          }
        }
      });
    };

    const handleScroll = () => {
      const sections = [
        "anchor-one",
        "anchor-two",
        "anchor-three",
        "anchor-four",
        "anchor-five",
        "anchor-six",
        "anchor-seven",
      ];

      sections.forEach((sectionId) => {
        if (document.getElementById(sectionId)) {
          const section = document.getElementById(sectionId);
          if (isElementInViewport(section)) {
            toggleActiveClass(sectionId, true);
          } else {
            toggleActiveClass(sectionId, false);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    window.addEventListener("load", handleScroll);
  }
});

// Реализация работы подцветки меню при прокрутке END
