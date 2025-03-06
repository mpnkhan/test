(()=>{
  const { loopThroughElements } =    UserWayWidgetApp.getLib('remediation_util');
      loopThroughElements('#dm-primary-nav > .navigation__link--category > a', (btn) => {
        btn.setAttribute('role', 'button');
        btn.setAttribute('tabindex', 0);
        btn.setAttribute('aria-expanded', 'false');
        const listitemwithChild = btn.parentElement;
        const level1menu = listitemwithChild.dataset.subcatlevel1;
        let submenu;
        if (level1menu)
          submenu = document.querySelector(
            `.navigation__sub-categories[data-subcatlevel1=${level1menu}]`,
          );
        const closeMenu = () => {
          listitemwithChild.classList.remove('active');
          if (submenu) {
            submenu.classList.remove('active');
            submenu.parentElement.parentElement.classList.remove('active');
          }
          btn.setAttribute('aria-expanded', 'false');
        };
        btn.addEventListener('click', (e) => {
          if (listitemwithChild.classList.contains('active')) {
            closeMenu();
          } else {
            listitemwithChild.classList.add('active');
            if (submenu) {
              submenu.classList.add('active');
              submenu.parentElement.parentElement.classList.add('active');
               submenu.querySelector('a').focus();
            }
            btn.setAttribute('aria-expanded', 'true');
          }
          e.preventDefault();
          e.stopPropagation();
        });
        btn.addEventListener('keydown', (e) => {
          if (e.keyCode === 13 || e.keyCode === 32) {
            e.preventDefault();
            btn.click();
          }
          if (e.keyCode === 27) {
            e.preventDefault();
            closeMenu();
            btn.focus();
          }
        });
        submenu.querySelectorAll('a').forEach((subanchor) => {
          subanchor.addEventListener('keydown', (e) => {
            if (e.keyCode === 27) {
              e.preventDefault();
              closeMenu();
              btn.focus();
            }
          });
        });
      });
})();