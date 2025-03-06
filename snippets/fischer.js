(()=>{
  const { injectStylesheet} =    UserWayWidgetApp.getLib('remediation_util');
       injectStylesheet(`
.order-status-details .btn.secondary:focus,
.order-status-details input[type="button"].secondary:focus,
.order-status-details input[type="submit"].btn.secondary:focus {
  color: #FFFFFF !important; 
  background: #0071D0 !important;
}
.order-status-details .btn.secondary:active,
.order-status-details input[type="button"].secondary:active,
.order-status-details input[type="submit"].btn.secondary:active {
  color: #FFFFFF !important; 
  background: #005DAA !important;
}

.order-status-details .btn.secondary:focus-visible,
.order-status-details input[type="button"].secondary:focus-visible,
.order-status-details input[type="submit"].btn.secondary:focus-visible {
  color: #FFFFFF !important; 
  background: #005DAA !important;
}
          
        `);
})();