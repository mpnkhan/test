(()=>{
    //Template
const injectStyles = (css) => {
	const style = document.createElement('style');
	style.innerHTML = css;
	document.head.appendChild(style);
	return style;
};
injectStyles(`
    .langSpan{
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
    } else {
        document.querySelectorAll('th').forEach(tbl =>{
            
            
        })
        
    }
    
})();


Jquery to Vanilla JS
1. Before
$(this).before("<div>New Element</div>") => this.insertAdjacentHTML('beforebegin', '<div>New Element</div>');

2. After
$(this).after("<span>"); => this.insertAdjacentHTML('afterend', '<div>New Element</div>');

3. Prepend
$('body').prepend('<div>New Element</div>') => document.body.insertAdjacentHTML('afterbegin', '<div>New Element</div>');

4. Append
$(this).append("<div>New Element</div>") => this.insertAdjacentHTML('beforeend', '<div>New Element</div>');