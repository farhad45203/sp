document.addEventListener("DOMContentLoaded", function () {
  const btns = document.querySelectorAll(".portfolio-menu .btn");
  const portfolioItems = document.querySelectorAll(".filter-item");

  // Add event listener to each button
  btns.forEach(btn => {
      btn.addEventListener("click", function () {
          const filterValue = this.getAttribute("data-filter");

          // Remove active class from all buttons
          btns.forEach(b => b.classList.remove("active"));

          // Add active class to the clicked button
          this.classList.add("active");

          // Show all items if "all" is clicked
          if (filterValue === "all") {
              portfolioItems.forEach(item => {
                  item.style.display = "block";
              });
          } else {
              // Show only the items with the matching category
              portfolioItems.forEach(item => {
                  if (item.classList.contains(filterValue)) {
                      item.style.display = "block";
                  } else {
                      item.style.display = "none";
                  }
              });
          }
      });
  });
});
