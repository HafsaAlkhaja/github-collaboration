function toggleProfileDropdown() {
  const dropdownMenu = document.getElementById("profileDropdownMenu")
  dropdownMenu.classList.toggle("show")
}

// Dropdown toggle script
document.addEventListener("DOMContentLoaded", function () {
  const adminDropdown = document.getElementById("adminDropdown")
  const dropdownMenu = document.querySelector(".dropdown-menu")

  adminDropdown.addEventListener("click", function (event) {
    dropdownMenu.classList.toggle("show")
  })
})
