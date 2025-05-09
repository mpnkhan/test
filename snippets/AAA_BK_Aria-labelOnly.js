(()=>{
    //Template
const injectStyles = (css) => {
	const style = document.createElement('style');
	style.innerHTML = css;
	document.head.appendChild(style);
	return style;
};
injectStyles(`
    .ariaLabelSpan{
        color:black;font-weight:bold;font-family:sans-serif;font-size:small;background-color:yellow;outline:orange 2px dashed;margin:0 2px; padding:2px;speak:literal-punctuation;
    }
    .outlineGreen{
        outline:green 2px solid;padding:2px;
    }
    .outlineRed{
        outline: red 2px solid;padding:2px;
    }    
`)      
  const divs=document.querySelectorAll('.langSpan');
    if(divs.length>0){
        divs.forEach(div=>div.remove())
        document.querySelectorAll('.outlineGreen,.outlineOlive,.outlineOrange').forEach(outlineTemp=>{
            outlineTemp.classList.remove('outlineGreen')
        });           
    } else {
        document.querySelectorAll('a').forEach(elem =>{
            elem.classList.add('outlineGreen');
            const ariaLabel = elem.getAttribute("aria-label");
            if (ariaLabel) {
                spanTxt = `aria-label="${ariaLabel}"`
                elem.insertAdjacentHTML('afterend', `
                    <span class="ariaLabelSpan">${spanTxt}</span>
                `);                
            }      
            
            
        })
        
    }
    
})();