
const enterBtn = document.querySelector(".closeWindow button");
const closeWindow = document.querySelector(".closeWindow");

const modalOverlay = document.getElementById("modalOverlay");
const passwordInput = document.getElementById("passwordInput");
const unlockBtn = document.getElementById("unlockBtn");
const cancelBtn = document.getElementById("cancelBtn");
const errorMsg = document.getElementById("errorMsg");

const correctPassword = "1234"; // apna password rakhna

// 1) Enter Password click => show modal
enterBtn.addEventListener("click", () => {
  modalOverlay.classList.add("active");
  closeWindow.classList.add("blurScreen");

  passwordInput.value = "";
  errorMsg.textContent = "";
  passwordInput.focus();
});

// 2) Cancel => close modal
cancelBtn.addEventListener("click", () => {
  modalOverlay.classList.remove("active");
  closeWindow.classList.remove("blurScreen");
});

// 3) unlock logic
unlockBtn.addEventListener("click", () => {
  const userPass = passwordInput.value;

  if (userPass === correctPassword) {
    // unlock
    modalOverlay.classList.remove("active");
    closeWindow.classList.remove("blurScreen");

    closeWindow.style.display = "none";
    alert("✅ Window Unlocked!");
  } else {
    errorMsg.textContent = "Wrong password ❌ Try again!";
  }
});

// 4) Enter press inside input => unlock
passwordInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    unlockBtn.click();
  }
});

// 5) Click outside modal => close
modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) {
    modalOverlay.classList.remove("active");
    closeWindow.classList.remove("blurScreen");
  }
});
