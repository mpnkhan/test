(()=>{
  const { waitUntil, waitForElement, execOnPage,  } =    UserWayWidgetApp.getLib('remediation_util');
  
  waitUntil(() => document.querySelector('h1'),
   (ulEl) => {
     console.log('heading found')
   });

    waitForElement('a.chronolog-popup-link, a.BreitlingWidgetTrigger', (btn) => {
      console.log('HERE', btn)
  });    
  
})();