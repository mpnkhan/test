(()=>{
  const { waitForElement, loopThroughElements, execOnPage} =    UserWayWidgetApp.getLib('remediation_util');
   const remediateRadios = (rGrpSel, rGrpLabel) => {
       waitForElement(rGrpSel, (rGrp) => {
           rGrp.setAttribute('role','radiogroup');
           rGrp.setAttribute('aria-label', rGrpLabel);
          loopThroughElements(
             'li',
            listItem => {
              const radio = listItem.querySelector('input')
              radio.setAttribute('aria-label', listItem.querySelector('label').textContent);
                radio.addEventListener('click', () => {
                  setTimeout(() => remediateRadios('#product__available-sizes','Size'), 500);
                });
            },
              { ancestor: rGrp }
            );
        })   
   }
    remediateRadios('#product__available-colors','Color');
    remediateRadios('#product__available-sizes','Size')
    waitForElement('.product__status', (status) => {
       status.setAttribute('role','status')
    })
    
})();