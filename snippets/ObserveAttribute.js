(()=>{
  const { injectStylesheet, waitForElement} =    UserWayWidgetApp.getLib('remediation_util');
       injectStylesheet(`
          .unified-homepage .floating-menu .bottom-links .links-name{
            color: rgb(252, 255, 60) !important;
          }
        `);
    waitForElement('html', (html) => {
      // console.log(html.classList.contains('userway-s3-2'))
/** /      
       const callback = (mutationsList) => {
        let runOnce = false;
        for(let mutation of mutationsList) {
          if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
            if (html.classList.contains('userway-s3-2')) {
                console.log('contains');
                 document.querySelectorAll('.bottom-links a').forEach(leftLink=>{
                  leftLink.style.background
                })
                runOnce=true;
                observer.disconnect();
            }
           }
         }
        };

        const observer = new MutationObserver(callback);
        observer.observe(html, {attributes: true, attributeFilter: ['class'] });
/**/        
      
    });
  
  
})();