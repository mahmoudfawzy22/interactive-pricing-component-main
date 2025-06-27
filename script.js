function initPricingApp() {
  let card = document.querySelector(".card");
  if (window.innerWidth <= 400) {
    card.innerHTML = `
      <div class="page-view-price-container">
        <p class="pageviews">100K Pageviews</p>
        <input type="range" min="1" max="100" value="50" class="slider" />
        <div class="price">  
          <h1>$16.00<span> / month</span></h1>
        </div>
      </div>
      
      <div class="billing">
        <span>Monthly Billing</span>
        <div class="toggle"></div>
        <span>Yearly Billing <span class="discount">25% discount</span></span>
      </div>

      <div class="features-btn-container">
        <ul class="features">
          <li><i class="fa-solid fa-check"></i> Unlimited websites</li>
          <li><i class="fa-solid fa-check"></i> 100% data ownership</li>
          <li><i class="fa-solid fa-check"></i> Email reports</li>
        </ul>
        <button class="btn">Start my trial</button>
      </div>
    `
    ;
  }
  window.addEventListener("resize", () => {
  if (window.innerWidth <= 400) {
    initPricingApp();
  }
});

  let inputRange = document.querySelector('input[type="range"]');
  let pageviews = document.querySelector('.pageviews');
  let price = document.querySelector('.price');
  let toggle = document.querySelector('.toggle');

  function updateRangeBackground() {
    let value = inputRange.value;
    let max = inputRange.max;
    let percent = (value / max) * 100;

    pageviews.innerHTML = `${value * 2}k pageviews`;
    inputRange.style.background = `linear-gradient(to right, rgb(161, 242, 234) ${percent}%, rgb(236, 242, 252) ${percent}%)`;

    if (toggle.classList.contains("active")) {
      price.innerHTML = `<h1>$${(((32 / 100) * value) * 12).toFixed(2)}<span> / year</span></h1>`;
    } else {
      price.innerHTML = `<h1>$${((32 / 100) * value).toFixed(2)}<span> / month</span></h1>`;
    }
  }

  if (inputRange && toggle) {
    updateRangeBackground();
    inputRange.addEventListener("input", updateRangeBackground);
    toggle.addEventListener("click", () => {
      toggle.classList.toggle("active");
      updateRangeBackground();
    });
  }
}

initPricingApp(); 
