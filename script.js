
document.addEventListener("DOMContentLoaded", function() {
 const tabs = document.querySelectorAll(".tab");
 const tabContents = document.querySelectorAll(".tab-content");
 let currentIndex = 0;

 // Initialize Hammer.js on the container of the tabs
 const hammer = new Hammer(document.querySelector("body"));

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
 hammer.on("swiperight", function() {
  if (currentIndex > 0) {
   currentIndex -= 1;
   setActiveTab(currentIndex);
  }
 });

 hammer.on("swipeleft", function() {
  if (currentIndex < tabs.length - 1) {
   currentIndex += 1;
   setActiveTab(currentIndex);
  }
 });

 // Add click event listener for tabs
 tabs.forEach((tab, idx) => {
  tab.addEventListener("click", function() {
   currentIndex = idx;
   setActiveTab(currentIndex);
  });
 });
});



/***** dark mode *****/
document.addEventListener("DOMContentLoaded", () => {
 // كل الأكواد الخاصة بك تكتب هنا

 const enableDarkMode = () => {
  document.body.classList.add("dark-mode");
  localStorage.setItem("darkMode", "enabled");
 };

 const disableDarkMode = () => {
  document.body.classList.remove("dark-mode");
  localStorage.setItem("darkMode", "disabled");
 };

 if (localStorage.getItem("darkMode") === "enabled") {
  enableDarkMode();
 }

 document.getElementById("toggle-dark-mode").addEventListener("click", () => {
  if (document.body.classList.contains("dark-mode")) {
   disableDarkMode();
  } else {
   enableDarkMode();
  }
 });
});

/*********** search ****** */
const suggestions = [
  "Apple",
  "Banana",
  "Cherry",
  "Date",
  "Elderberry",
  "Fig",
  "Grape",
  "Honeydew",
  "Kiwi",
  "Lemon",
  "Mango",
  "Nectarine",
  "Orange",
  "Papaya",
  "Quince",
  "Raspberry",
  "Strawberry",
  "Tangerine",
  "Ugli fruit",
  "Vanilla",
  "Watermelon",
  "Xigua",
  "Yellow passion fruit",
  "Zucchini",
  "mohammed",
  "saber",
  "ahmad",
  "naser",
  "mv mohammed",
  "kareem",
  "Ibrahim",
  "football",
  "karata",
  "boxing",
  "pc",
  "hdd",
  "ssd",
  "pc fan",
  "pc power supply",
  "motherboard",
  "cpu",
  "gpu",
  "pc cooler",
  "Free Palestine",
  "ksm Israel",
  "Samsung",
  "egypt",
  "The code is executed after all HTML elements are present",
];

// Elements
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

/****** search-box ******/
function handleKeyDown(event) {
 // Check if the "Enter" or "Go" key is pressed
 if (event.key === "Enter") {
  alert("لسة عاوزة موال ربنا يعنا 😁");
 }
}

