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
  ticketsButton = document.querySelector(".js-tickets");
  aboutButton = document.querySelector(".js-about");
  contactButton = document.querySelectorAll(".js-contact");

  init() {
    this.ticketsButton.addEventListener("click", this.toggleMenu.bind(this));
    this.aboutButton.addEventListener("click", this.toggleMenu.bind(this));
    this.contactButton[0].addEventListener("click", this.toggleMenu.bind(this));
    this.contactButton[1].addEventListener("click", this.toggleMenu.bind(this));
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

    if (component.id === "contact") {
      this.handleContactRoute();
    }
  }

  handleTicketsRoute() {
    const topActionContainer = document.querySelector("#top-actions");
    const ticketDetailsContainer = document.querySelector("#ticket-details");
    const contactContainer = document.querySelector("#contact-form");

    const headingTicketContainer = document.querySelector("#heading-ticket");
    const headingAboutContainer = document.querySelector("#heading-about");
    const headingContactContainer = document.querySelector("#heading-contact");

    const buttonFilters = document.querySelector("#button-filters");

    headingAboutContainer.classList.add("is-hidden");
    headingContactContainer.classList.add("is-hidden");
    buttonFilters.classList.remove("is-hidden");

    topActionContainer.classList.remove("is-hidden");
    ticketDetailsContainer.classList.remove("is-hidden");
    headingTicketContainer.classList.remove("is-hidden");

    const aboutContainer = document.querySelector("#about-park");
    contactContainer.classList.add("is-hidden");
    aboutContainer.classList.add("is-hidden");
  }

  handleAboutRoute() {
    const topActionContainer = document.querySelector("#top-actions");
    const ticketDetailsContainer = document.querySelector("#ticket-details");
    const contactContainer = document.querySelector("#contact-form");

    const headingTicketContainer = document.querySelector("#heading-ticket");
    const headingAboutContainer = document.querySelector("#heading-about");
    const headingContactContainer = document.querySelector("#heading-contact");

    const buttonFilters = document.querySelector("#button-filters");
    buttonFilters.classList.add("is-hidden");

    topActionContainer.classList.add("is-hidden");
    ticketDetailsContainer.classList.add("is-hidden");
    contactContainer.classList.add("is-hidden");

    headingTicketContainer.classList.add("is-hidden");
    headingContactContainer.classList.add("is-hidden");

    const aboutContainer = document.querySelector("#about-park");
    aboutContainer.classList.remove("is-hidden");
    headingAboutContainer.classList.remove("is-hidden");
  }

  handleContactRoute() {
    const topActionContainer = document.querySelector("#top-actions");
    const ticketDetailsContainer = document.querySelector("#ticket-details");
    const aboutContainer = document.querySelector("#about-park");

    const headingTicketContainer = document.querySelector("#heading-ticket");
    const headingAboutContainer = document.querySelector("#heading-about");
    const headingContactContainer = document.querySelector("#heading-contact");
    headingTicketContainer.classList.add("is-hidden");
    headingAboutContainer.classList.add("is-hidden");

    const buttonFilters = document.querySelector("#button-filters");
    buttonFilters.classList.add("is-hidden");

    topActionContainer.classList.add("is-hidden");
    ticketDetailsContainer.classList.add("is-hidden");
    aboutContainer.classList.add("is-hidden");

    const contactContainer = document.querySelector("#contact-form");
    contactContainer.classList.remove("is-hidden");
    headingContactContainer.classList.remove("is-hidden");
  }
}

const appMenu = new AppMenu();
appMenu.init();
