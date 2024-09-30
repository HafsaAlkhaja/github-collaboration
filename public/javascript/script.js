function toggleProfileDropdown() {
  const dropdown = document.getElementById("profileDropdownMenu")
  dropdown.classList.toggle("show")
}
function toggleBurgerMenu() {
  const burgerDropdown = document.getElementById("burgerDropdownMenu")
  burgerDropdown.classList.toggle("show")
  const burgerIcon = document.getElementById("burgerIcon")
  const closeIcon = document.getElementById("closeIcon")
  burgerIcon.classList.toggle("hidden")
  closeIcon.classList.toggle("hidden")
}