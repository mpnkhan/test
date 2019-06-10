(function() {
  "use strict";

	var modals = document.querySelectorAll('[data-toggle="modal"]'),
    closeBtns = document.querySelectorAll('[data-dismiss="modal"]'),
    Modal = function() {};

	NodeList.prototype.forEach = function(callback) {
		Array.prototype.forEach.call(this, callback);
	}

	Modal.prototype = {
		dialog: null,
		lastFocus: null,
		focusLt: null,
		showDialog: function(e) {
			var btn = e.target,
				target = btn.dataset.target || (btn.getAttribute('href') && btn.getAttribute('href').replace(/.*(?=#[^\s]+$)/, '')),
				backdrop = document.createElement('div'),
				that = this
				this.lastFocus = document.activeElement
				this.dialog = document.getElementById(target)
				this.options = document.getElementById('options').getElementsByTagName('li')
				e.preventDefault();

			this.dialog.classList.remove("hide")
			this.dialog.classList.add("in")
			this.dialog.focus()
			console.log(this.options);
			for(var i=0, j=this.options.length; i<j ; i++){
				this.options[i].setAttribute('tabIndex','-1');
				this.options[i].setAttribute('role','option');
			}

			// this.options.forEach(function(option){
				// option.setAttribute(tabIndex,'-1');
				// option.setAttribute(role,'option');

			// })

			this.dialog.setAttribute('aria-hidden', false)
			backdrop.setAttribute("id", "modalBackdrop")
			backdrop.classList.add('modal-backdrop')
			backdrop.classList.add('fade')
			backdrop.classList.add('in')
			document.body.appendChild(backdrop)
			this.enforceFocus();
			document.addEventListener("keydown", function(event) {
				if (that.dialog.classList.contains("in") && event.keyCode == 27) {
					that.hideDialog(e);
				}
			}, true);
		},
		enforceFocus: function() {
			var dialog = this.dialog,
				that = this
				this.focusLt = function(e) {
					if (dialog.classList.contains("in") && !dialog.contains(e.target)) {
						e.stopPropagation();
						dialog.focus();
					}
				}
			document.addEventListener("focus", function(e) {
				that.focusLt(e)
			}, true);
		},
		hideDialog: function(e) {
			var that = this
			this.dialog.classList.add("hide")
			this.dialog.classList.remove("in")
			this.dialog.setAttribute('aria-hidden', true)
			var backdrop = document.getElementById('modalBackdrop')
			backdrop.parentNode.removeChild(backdrop);
			document.removeEventListener("focus", this.focusLt, true);
			this.lastFocus.focus();
		}
	}

	modals.forEach(function(modalBtn) {
		modalBtn.addEventListener('click', function(e) {
			Modal.prototype.showDialog(e)
		}, false);
	});
	closeBtns.forEach(function(closeBtn) {
		closeBtn.addEventListener('click', function(e) {
			Modal.prototype.hideDialog(e)
		}, false);
	});
}());