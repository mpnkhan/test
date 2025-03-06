(()=>{
  const { loopThroughElements } =    UserWayWidgetApp.getLib('remediation_util');
  loopThroughElements(
     '#ss-why-heading-content > div > h1, [id*="home-featured-blogs"] .spt-container .spt-text-center.spt-cym-h-1-sm',
    (heading) => {
      heading.setAttribute('role', 'heading');
      heading.setAttribute('aria-level', 2);
    },
  );
})();