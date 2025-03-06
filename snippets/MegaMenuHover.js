(() => {
   //https://www.westgateresorts.com/hotels/new-york/midtown-manhattan/westgate-new-york-grand-central/
  const {
    loopThroughElements,
    waitForElement,
    clickOnSpace,
    clickOnEnter,
    injectStylesheet,
  } = UserWayWidgetApp.getLib('remediation_util');
  const HOVERED_LINK_CLASS = 'uw-csr-hovered';

  injectStylesheet(`
        li.main-nav__list-item.open .main-nav__dropdown {
            display: block;
        }   
.intro .vault-link-button:focus-visible {
    outline: 2px solid white !important
}  
.two-column-cards__button:focus-visible{
 outline: 2px solid yellow !important
}
   `);

  waitForElement('.main-nav', (nav) => {
    loopThroughElements(
      'a.main-nav__has-dropdown',
      (menuItem) => {
        menuItem.addEventListener('mouseenter', () => menuItem.classList.add(HOVERED_LINK_CLASS));
        menuItem.addEventListener('mouseleave', () =>
          menuItem.classList.remove(HOVERED_LINK_CLASS),
        );
        menuItem.setAttribute('role', 'button');
        menuItem.setAttribute('aria-expanded', 'false');

        const li = menuItem.parentElement;
        const subMenu = li.querySelector('ul.main-nav__dropdown');
        const toggle = () => {
          if (li.classList.contains('open')) {
            li.classList.remove('open');
            menuItem.setAttribute('aria-expanded', 'false');
            menuItem?.focus();
          } else {
            li.classList.add('open');
            menuItem.setAttribute('aria-expanded', 'true');
            const firstItem = subMenu.querySelector('li:not(.main-nav__mobile-only) >a');
            firstItem?.focus();
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

        subMenu.querySelectorAll('li:not(.main-nav__mobile-only) >a').forEach((subanchor) => {
          subanchor.addEventListener('keydown', (e) => {
            if (e.keyCode === 27) {
              e.preventDefault();
              toggle();
            }
          });
        });
      },
      { ancestor: nav },
    );
  });
  waitForElement('#js-mobile-nav-trigger', (mobileNav) => {
    mobileNav.setAttribute('role', 'button');
    mobileNav.setAttribute('tabindex', '0');
    clickOnSpace(mobileNav);
    clickOnEnter(mobileNav);
  });
})();