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

export class AppMenu {
  ticketsButton = document.querySelector("#tickets");
  aboutButton = document.querySelector("#about");
  contactButton = document.querySelector("#contact");

  init() {
    this.ticketsButton.addEventListener("click", this.toggleMenu.bind(this));
    this.aboutButton.addEventListener("click", this.toggleMenu.bind(this));
    this.contactButton.addEventListener("click", this.toggleMenu.bind(this));
  }

  toggleMenu(event) {
    const component = event.target;
    const navLink = document.querySelector(".js-app-menu-link.active");
    navLink.classList.remove("active");
    component.classList.add("active");

    if (component.id === "tickets") {
      this.handleTicketsRoute();
    }

    if (component.id === "about") {
      this.handleAboutRoute();
    }
  }

  handleTicketsRoute() {
    const topActionContainer = document.querySelector("#top-actions");
    const ticketDetailsContainer = document.querySelector("#ticket-details");
    topActionContainer.classList.remove('is-hidden');
    ticketDetailsContainer.classList.remove('is-hidden');

    const aboutContainer = document.querySelector("#about-park");
    aboutContainer.classList.add('is-hidden');
  }

  handleAboutRoute() {
    const topActionContainer = document.querySelector("#top-actions");
    const ticketDetailsContainer = document.querySelector("#ticket-details");
    topActionContainer.classList.add('is-hidden');
    ticketDetailsContainer.classList.add('is-hidden');

    const aboutContainer = document.querySelector("#about-park");
    aboutContainer.classList.remove('is-hidden');
  }
}

const appMenu = new AppMenu();
appMenu.init();
