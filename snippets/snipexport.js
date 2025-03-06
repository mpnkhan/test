InspectorFrontendHost.getPreferences((prefs) => {
  const snippets = JSON.parse(prefs['script-snippets'] || '[]');
  console.log(snippets);
  copy(JSON.stringify(snippets, null, 2));
});
