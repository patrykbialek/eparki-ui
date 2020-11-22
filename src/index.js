// import '../assets/css/styles.css';

const topActionsFilters = document.querySelector("#top-actions-filters");
const moreLessTrigger = document.querySelector("#more-less-trigger");
moreLessTrigger.addEventListener("click", toggleTopActionsFilters);

function toggleTopActionsFilters() {
  if (topActionsFilters.classList.contains("more")) {
    topActionsFilters.classList.remove("more");
    moreLessTrigger.classList.remove("more");
  } else {
    topActionsFilters.classList.add("more");
    moreLessTrigger.classList.add("more");
  }
}
