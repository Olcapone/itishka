(() => {
    const menuBtnRef = document.querySelector("[data-menu-button]");
    const mobileMenuRef = document.querySelector("[data-menu]");
    const mobileBtnClose = document.querySelector("[data-menu-close]");
  
    menuBtnRef.addEventListener("click", () => {
      mobileMenuRef.classList.add("is-open");
       mobileMenuRef.classList.add("mobile-menu__item");
    })

    mobileBtnClose.addEventListener('click', () => {
      mobileMenuRef.classList.remove("is-open");
      mobileMenuRef.classList.remove("mobile-menu__item");
    });
  })()