(()=>{
  const { waitForElement, execOnPage, keys } =    UserWayWidgetApp.getLib('remediation_util');

   const remediateRadios = (rGrpSel, rGrpLabel) => {
        waitForElement(rGrpSel, (rGrp) => {
           // console.log(rGrpSel, rGrp)
            rGrp.setAttribute('role','radiogroup')
            rGrp.setAttribute('aria-label', rGrpLabel)
            const radios = rGrp.querySelectorAll('li');
            let prevRadio = null;
          
            radios.forEach((radio, index) => {
              radio.setAttribute('role', 'radio');
              radio.setAttribute('aria-label', radio.querySelector('label').textContent);
              radio.querySelector('input').setAttribute('tabindex','-1');
              if(radio.className.includes('active')){
                radio.setAttribute('tabindex', '0');
                radio.setAttribute('aria-checked','true');
                prevRadio =radio;
              }else{
                radio.setAttribute('tabindex', '-1');
                radio.setAttribute('aria-checked','false');
              } //end else
            radio.addEventListener('keydown', (e) => {
              let radioToFocusIndex = null;
              if (keys.isArrowLeft(e) || keys.isArrowUp(e)) {
                radioToFocusIndex = index - 1;
              } else if (keys.isArrowRight(e) || keys.isArrowDown(e)) {
                radioToFocusIndex = index + 1;
              } else if (!keys.isEnter(e)) {
                return;
              }

              e.preventDefault();
              e.stopImmediatePropagation();

              if (radioToFocusIndex !== null) {
                if (radioToFocusIndex < 0) {
                  radioToFocusIndex = radios.length - 1;
                } else if (radioToFocusIndex > radios.length - 1) {
                  radioToFocusIndex = 0;
                }
                console.log('radioToFocusIndex', radioToFocusIndex, radios[radioToFocusIndex]);
                const currRadio= radios[radioToFocusIndex];
                if (currRadio) {
                  prevRadio.setAttribute('tabindex', '-1');
                  prevRadio.setAttribute('aria-checked', 'false');
                  currRadio.setAttribute('tabindex', '0');
                  currRadio.setAttribute('aria-checked', 'true');
                  prevRadio = currRadio;
                  //currRadio.click();
                  currRadio.focus();
                  currRadio?.querySelector('input')?.click();
                  setTimeout(() => remediateRadios('#product__available-sizes','Size'),1000);
                }
              }
            });               
            });
          
        });       
   }

    remediateRadios('#product__available-colors','Color');
    remediateRadios('#product__available-sizes','Size')
    waitForElement('.product__status', (status) => {
       status.setAttribute('role','status')
    })
     
    

})();