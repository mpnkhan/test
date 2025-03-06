(()=>{
  const { waitUntil, waitForElement, loopThroughElements, execOnPage,  } =    UserWayWidgetApp.getLib('remediation_util');
 const remediate=()=>{       
    loopThroughElements('label[role=radio]', (radio) => {
       radio.addEventListener('click',()=>console.log('Radio: '+radio.getAttribute('aria-label')+' clicked')) 
    });
   }
    remediate();

waitForElement('#cart-charity-container', (divEl) => {
    console.log('HERE1',divEl)
    const observer = new MutationObserver(()=>{
        console.log('HERE2')
        remediate();
    })
    observer.observe(divEl, {subtree: true, childList: true});
});
  
})(); 