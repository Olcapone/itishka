(() => {
    const menuBtnRef = document.querySelector("[data-menu-button]");
    const mobileMenuRef = document.querySelector("[data-menu]");
    const mobileBtnClose = document.querySelector("[data-menu-close]");

  
    menuBtnRef.addEventListener("click", () => {

      mobileMenuRef.classList.add("is-open");
 
    })

    mobileBtnClose.addEventListener('click', () => {
      mobileMenuRef.classList.remove("is-open");
    
    });
  })()