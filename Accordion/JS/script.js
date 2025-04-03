const headers = document.querySelectorAll(".accordion-header");

headers.forEach(header => {
  header.addEventListener("click", () => {
    const openItem = document.querySelector(".accordion-content.active");

    if (openItem && openItem !== header.nextElementSibling) {
      openItem.classList.remove("active");
    }

    header.nextElementSibling.classList.toggle("active");
  });
});
