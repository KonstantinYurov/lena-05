// Реализация работы слайдера START

document.addEventListener("DOMContentLoaded", () => {
	const sliders = document.querySelectorAll(".slider");
  
	sliders.forEach((slider) => {
	  const slides = slider.querySelectorAll(".slide");
  
	  if (slides.length > 0 && window.innerWidth >= 1200) {
		const maxMultiplier = Math.ceil(slides.length - 4);
		let multiplier = 0;
  
		const updateSliderTransform = () => {
		  const sliderContainer = slider.querySelector(
			".slider__container-field"
		  );
		  const newMultiplier = Math.min(Math.max(multiplier, 0), maxMultiplier);
		  const translation = `calc((-360px + (100vw - 1200px) * -0.333) * ${newMultiplier})`;
		  sliderContainer.style.transform = `translateX(${translation})`;
		};
  
		const updateSliderNavClasses = () => {
		  const prevButton = slider.querySelector(".slider-nav--prev");
		  const nextButton = slider.querySelector(".slider-nav--next");
  
		  prevButton.classList.toggle("slider-nav--prev-active", multiplier > 0);
		  nextButton.classList.toggle(
			"slider-nav--next-hidden",
			multiplier === maxMultiplier
		  );
		};
  
		const onSliderNextClick = () => {
		  if (multiplier < maxMultiplier) {
			multiplier += 1;
			updateSliderTransform();
			updateSliderNavClasses();
		  }
		};
  
		const onSliderPrevClick = () => {
		  if (multiplier > 0) {
			multiplier -= 1;
			updateSliderTransform();
			updateSliderNavClasses();
		  }
		};
  
		const nextButton = slider.querySelector(".slider-nav--next");
		nextButton.addEventListener("click", onSliderNextClick);
  
		const prevButton = slider.querySelector(".slider-nav--prev");
		prevButton.addEventListener("click", onSliderPrevClick);
  
		updateSliderNavClasses();
	  }
	});
  });
// Реализация работы слайдера END
