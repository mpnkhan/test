(function () {
  const { waitUntil, keys} =    UserWayWidgetApp.getLib('remediation_util');
  
  			const isDate = function(obj){
        		return (/Date/).test(Object.prototype.toString.call(obj)) && !isNaN(obj.getTime());
    		}
			const getDate =  (fld) => {
            	return new Date(new Date(fld.value).getTime())
        	}
        	const setToStartOfDay = (date) => {
        		if (isDate(date)) date.setHours(0,0,0,0);
    		}
			const dateFormat = (date, format) => {
			    date = date.toJSON().split(/[:/.TZ-]/);
			    return format.replace(/[ymdhis]/g, function (letter) {
			        return parseInt(date['ymdhis'.indexOf(letter)]);
			    });
			}
        	  const setDate =  (fld, date, min) => {
				console.log(date)
	            if (typeof date === 'string') {
	                date = new Date(Date.parse(date));
	            }
		        if (!isDate(date)) {
		            return;
		        }
	            if (isDate(min) && date < min) {
	                date = min;
	            }
            	let d = new Date(date.getTime());
            	setToStartOfDay(d);
				$(fld).pikaday('gotoDate', d)
            	fld.value = d.toString();
				// fld.value = dateFormat(d,'mm/dd/yyyy')
				 
        	}

	        const adjustDate = (sign, days, fld) => {
	            var day = getDate(fld) || new Date();
				//console.log('hi', dateFormat(day,'mm/dd-yyyy'));
	            
	            // console.log('hi', picker.getDate(),' :t: ', getDate(fld));
	            var difference = parseInt(days)*24*60*60*1000;
	            var newDay;

	            if (sign === 'add') {
	                newDay = new Date(day.valueOf() + difference);
	            } else if (sign === 'subtract') {
	                newDay = new Date(day.valueOf() - difference);
	            }
				//console.log($(fld))
				 // $(fld).pikaday('setDate', newDay).pikaday('show')
	             setDate(fld, newDay);
	        }
	        const navigateDates =(e) =>{
	        	const fld = e.currentTarget;
		   		if (keys.isArrowDown(e)) {
		   			adjustDate('add', 7, fld);
                    e.stopPropagation(); e.preventDefault();
		   		}else if(keys.isArrowUp(e)){
		   			adjustDate('subtract', 7, fld);
                    e.stopPropagation(); e.preventDefault();
		   		} else if(keys.isArrowLeft(e)){
		   			adjustDate('subtract', 1, fld);
                   e.stopPropagation(); e.preventDefault();
		   		} else if(keys.isArrowRight(e)){
		   			adjustDate('add', 1, fld);
                   e.stopPropagation(); e.preventDefault();
		   		} else if(keys.isEnter(e) || keys.isEsc(e)){
		   			fld.blur();
		   		}

	        }

		   	waitUntil(() => document.querySelector('#arrive-date'),
		   	(arriveDate) => {
				// $(arriveDate).pikaday('show')
		   		arriveDate.addEventListener('keydown', navigateDates)
		   	});
		   	waitUntil(() => document.querySelector('#depart-date'),
		   	(departDate) => {
		   		departDate.addEventListener('keydown', navigateDates)
		   	});
  
})();