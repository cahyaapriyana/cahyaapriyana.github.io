document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded");
  const fullName = document.getElementById("fullName");
  console.log("fullName element:", fullName);

  fullName.addEventListener("click", () => {
    console.log("Name clicked");
    // ... rest of the click handler ...
  });

  // Animasi fade-in untuk konten utama
  const container = document.querySelector(".container");
  container.style.opacity = 0;
  setTimeout(() => {
    container.style.transition = "opacity 1s ease-in-out";
    container.style.opacity = 1;
  }, 100);

  // Efek hover untuk info-table
  const tableRows = document.querySelectorAll(".info-table tr");
  tableRows.forEach((row) => {
    row.addEventListener("mouseenter", () => {
      row.style.transition = "transform 0.3s ease-in-out";
      row.style.transform = "scale(1.05)";
    });
    row.addEventListener("mouseleave", () => {
      row.style.transform = "scale(1)";
    });
  });

  // Animasi ketik untuk paragraf "About"
  const aboutParagraph = document.querySelector(".about p");
  const text = aboutParagraph.textContent;
  aboutParagraph.textContent = "";
  let index = 0;

  function typeWriter() {
    if (index < text.length) {
      aboutParagraph.textContent += text.charAt(index);
      index++;
      setTimeout(typeWriter, 30);
    }
  }

  typeWriter();

  // Smooth scroll untuk link internal
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Dark mode toggle
  const darkModeToggle = document.createElement("button");
  darkModeToggle.textContent = "🌙";
  darkModeToggle.classList.add("dark-mode-toggle");
  document.body.appendChild(darkModeToggle);

  darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    darkModeToggle.textContent = document.body.classList.contains("dark-mode")
      ? "☀️"
      : "🌙";
  });

  // Fungsi untuk menampilkan daftar semester dalam pop-up
  const semesterPopup = document.getElementById("semesterPopup");
  const semesterList = document.getElementById("semesterList");
  const closePopup = document.getElementById("closePopup");

  const semesters = [
    { name: "Semester 1", link: "/list-semester/semester-1.html" },
    { name: "Semester 2", link: "/semester2.html" },
    { name: "Semester 3", link: "/semester3.html" },
    { name: "Semester 4", link: "/semester4.html" },
    { name: "Semester 5", link: "/semester5.html" },
    { name: "Semester 6", link: "/semester6.html" },
    { name: "Semester 7", link: "/semester7.html" },
    { name: "Semester 8", link: "/semester8.html" },
  ];

  fullName.addEventListener("click", () => {
    semesterList.innerHTML = semesters
      .map(
        (semester) =>
          `<li><a href="${semester.link}" class="text-blue-500 hover:text-blue-700 transition-colors">${semester.name}</a></li>`
      )
      .join("");

    semesterPopup.classList.remove("hidden");
    setTimeout(() => {
      semesterPopup.querySelector("div").classList.add("scale-100");
    }, 10);
  });

  closePopup.addEventListener("click", () => {
    semesterPopup.querySelector("div").classList.remove("scale-100");
    setTimeout(() => {
      semesterPopup.classList.add("hidden");
    }, 300);
  });

  semesterPopup.addEventListener("click", (e) => {
    if (e.target === semesterPopup) {
      closePopup.click();
    }
  });
});
