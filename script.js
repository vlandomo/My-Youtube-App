// // Popup functionality
// const popup = document.getElementById("popup-menu");
// const openPopupBtns = document.querySelectorAll(".open-popup");

// // Show popup and disable scroll when any button is clicked
// openPopupBtns.forEach((button) => {
//   button.addEventListener("click", () => {
//     popup.style.display = "flex";
//     document.body.style.overflow = "hidden"; // Disable scroll
//   });
// });

// // Hide popup and re-enable scroll when clicking outside the box
// popup.addEventListener("click", (e) => {
//   if (e.target === popup) {
//     popup.style.display = "none";
//     document.body.style.overflow = "auto"; // Re-enable scroll
//   }
// });

/*****************/


// Tab functionality with Hammer.js swipe support
document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab");
  const tabContents = document.querySelectorAll(".tab-content");
  let currentIndex = 0;

  // Initialize Hammer.js on the container of the tabs
  const hammer = new Hammer(document.body);

  // Function to set active tab and content
  function setActiveTab(index) {
    tabs.forEach((tab, idx) => {
      if (idx === index) {
        tab.classList.add("active");
        tabContents[idx].classList.add("active");
      } else {
        tab.classList.remove("active");
        tabContents[idx].classList.remove("active");
      }
    });
  }

  // Initial activation
  setActiveTab(currentIndex);

  // Listen for swipe events
  hammer.on("swiperight", () => {
    if (currentIndex > 0) {
      currentIndex -= 1;
      setActiveTab(currentIndex);
    }
  });

  hammer.on("swipeleft", () => {
    if (currentIndex < tabs.length - 1) {
      currentIndex += 1;
      setActiveTab(currentIndex);
    }
  });

  // Add click event listener for tabs
  tabs.forEach((tab, idx) => {
    tab.addEventListener("click", () => {
      currentIndex = idx;
      setActiveTab(currentIndex);
    });
  });
});

/***** Dark mode toggle *****/
document.addEventListener("DOMContentLoaded", () => {
  const enableDarkMode = () => {
    document.body.classList.add("dark-mode");
    localStorage.setItem("darkMode", "enabled");
  };

  const disableDarkMode = () => {
    document.body.classList.remove("dark-mode");
    localStorage.setItem("darkMode", "disabled");
  };

  // Check for dark mode preference in local storage
  if (localStorage.getItem("darkMode") === "enabled") {
    enableDarkMode();
  }

  // Toggle dark mode on button click
  document.getElementById("toggle-dark-mode").addEventListener("click", () => {
    if (document.body.classList.contains("dark-mode")) {
      disableDarkMode();
    } else {
      enableDarkMode();
    }
  });
});

/*********** Search functionality ***********/
const suggestions = [
  "Apple", "Banana", "Cherry", "Date", "Elderberry", "Fig", "Grape", "Honeydew", 
  "Kiwi", "Lemon", "Mango", "Nectarine", "Orange", "Papaya", "Quince", "Raspberry", 
  "Strawberry", "Tangerine", "Ugli fruit", "Vanilla", "Watermelon", "Xigua", 
  "Yellow passion fruit", "Zucchini", "Mohammed", "Saber", "Ahmad", "Naser", 
  "MV Mohammed", "Kareem", "Ibrahim", "Football", "Karata", "Boxing", "PC", "HDD", 
  "SSD", "PC fan", "PC power supply", "Motherboard", "CPU", "GPU", "PC cooler", 
  "Free Palestine", "KSM Israel", "Samsung", "Egypt" ,"يلعن ميتين ام اسرائل"
];

// Elements for search box and suggestions
const searchBox = document.getElementById("search-box");
const suggestionsBox = document.getElementById("suggestions");

// Event listener for search box input
searchBox.addEventListener("input", () => {
  const input = searchBox.value.toLowerCase();
  suggestionsBox.innerHTML = "";
  if (input) {
    const filteredSuggestions = suggestions.filter((item) =>
      item.toLowerCase().includes(input)
    );
    filteredSuggestions.forEach((suggestion) => {
      const suggestionItem = document.createElement("div");
      suggestionItem.textContent = suggestion;
      suggestionItem.classList.add("suggestion-item");
      suggestionItem.addEventListener("click", () => {
        searchBox.value = suggestion;
        suggestionsBox.innerHTML = "";
      });
      suggestionsBox.appendChild(suggestionItem);
    });
  }
});

/****** Handle "Enter" or "Go" keypress in search box ******/
function handleKeyDown(event) {
  if (event.key === "Enter") {
    alert("لسة عاوزة موال ربنا يعنا 😁");
  }
}

// Add event listener to search box for keydown events
searchBox.addEventListener("keydown", handleKeyDown);
