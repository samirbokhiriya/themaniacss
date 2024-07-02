const toggleBtn = document.querySelector(".toggle");
const toggleBtnIcon = document.querySelector(".toggle i");
const dropDownMenu = document.querySelector(".dropdown");

function tapee() {
  console.log("ola");
  dropDownMenu.classList.toggle("open");
  const isOpen = dropDownMenu.classList.contains("open");

  toggleBtnIcon.classList = isOpen
    ? "fa-solid fa-xmark"
    : "fa-solid fa-bars-staggered";
}

toggleBtn.addEventListener("click", tapee);

// Function to check screen width and remove open class if necessary
function checkScreenWidth() {
  if (window.innerWidth > 620) {
    dropDownMenu.classList.remove("open");
    toggleBtnIcon.classList = "fa-solid fa-bars-staggered"; // Reset icon
  }
}

// Initial check
checkScreenWidth();

// Add resize event listener
window.addEventListener("resize", checkScreenWidth);
//hero section

document.addEventListener("DOMContentLoaded", () => {
  const interBubble = document.querySelector(".interactive");
  let curX = 0;
  let curY = 0;
  let tgX = 0;
  let tgY = 0;

  function move() {
    curX += (tgX - curX) / 20;
    curY += (tgY - curY) / 20;
    interBubble.style.transform = `translate(${Math.round(
      curX
    )}px, ${Math.round(curY)}px)`;
    requestAnimationFrame(move);
  }

  window.addEventListener("mousemove", (event) => {
    tgX = event.clientX;
    tgY = event.clientY;
  });

  move();
});

function checkWidth() {
  if (window.innerWidth > 620) {
    document.querySelectorAll(".open").forEach(function (element) {
      element.classList.remove("open");
    });
  }
}

window.addEventListener("resize", checkWidth);
checkWidth();
document.addEventListener("DOMContentLoaded", () => {
  const interBubble = document.querySelector(".interactive");
  let curX = 0;
  let curY = 0;
  let tgX = 0;
  let tgY = 0;

  function move() {
    curX += (tgX - curX) / 20;
    curY += (tgY - curY) / 20;
    interBubble.style.transform = `translate(${Math.round(
      curX
    )}px, ${Math.round(curY)}px)`;
    requestAnimationFrame(move);
  }

  window.addEventListener("mousemove", (event) => {
    tgX = event.clientX;
    tgY = event.clientY;
  });

  move();
});
