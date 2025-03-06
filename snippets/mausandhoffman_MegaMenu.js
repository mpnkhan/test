(() => {
   //https://mausandhoffman.com/
  const {
    loopThroughElements,
    waitForElement,
    clickOnSpace,
    clickOnEnter,
    injectStylesheet,
  } = UserWayWidgetApp.getLib('remediation_util');
  const HOVERED_LINK_CLASS = 'uw-csr-hovered';

  injectStylesheet(`
        .header__nav li.open .nav__mega-menu {
          transform: none ;
          opacity: 1;
          visibility: visible;
        } 
        .nav__mega-menu a:focus-visible, .nav__mega-menu a:focus-visible img{
         outline: 2px solid blue !important;
         outline-offset: -3px !important; 
        }
   `);

  waitForElement('.header__nav', (nav) => {
    loopThroughElements(
      'a.nav__item',
      (menuItem) => {
        menuItem.addEventListener('mouseenter', () => menuItem.classList.add(HOVERED_LINK_CLASS));
        menuItem.addEventListener('mouseleave', () =>
          menuItem.classList.remove(HOVERED_LINK_CLASS),
        );
        menuItem.setAttribute('role', 'button');
        menuItem.setAttribute('aria-expanded', 'false');

        const li = menuItem.parentElement;
        const subMenu = li.querySelector('.nav__mega-menu');
        console.log(subMenu)
        const toggle = () => {
          if (li.classList.contains('open')) {
            li.classList.remove('open');
            console.log('menuItem', menuItem)
            menuItem.setAttribute('aria-expanded', 'false');
            menuItem?.focus();
          } else {
            li.classList.add('open');
            menuItem.setAttribute('aria-expanded', 'true');
            const firstItem = subMenu?.querySelector('a');
            setTimeout(() => {
             console.log('firstItem', subMenu, firstItem)
              firstItem?.focus();
            }, 100);               
            
          }
        };
        menuItem.addEventListener('click', (e) => {
          if (menuItem.classList.contains(HOVERED_LINK_CLASS)) return;
          e.preventDefault();
          e.stopPropagation();
          toggle();
        });
        clickOnSpace(menuItem);
        clickOnEnter(menuItem);

        subMenu?.querySelectorAll('li a').forEach((subanchor) => {
          subanchor.addEventListener('keydown', (e) => {
            if (e.keyCode === 27) {
              e.preventDefault();
            //  toggle();
            li.classList.remove('open');
            console.log('menuItem', menuItem)
            menuItem.setAttribute('aria-expanded', 'false');
            menuItem?.focus();                
            }
          });
        });
      },
      { ancestor: nav },
    );
  });
})();