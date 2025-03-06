(Host.InspectorFrontendHost || InspectorFrontendHost).getPreferences(async r => {
  for (const {name, content} of JSON.parse(r.scriptSnippets || '[]')) {
    const a = document.createElement('a');
    const url = URL.createObjectURL(new Blob([content], {type: 'text/plain'}));
    a.href = url;
    a.download = name + '.txt';
    a.dispatchEvent(new MouseEvent('click'));
    console.log(name + '...');
    await new Promise(resolve => setTimeout(resolve, 150));
    URL.revokeObjectURL(url);
  }
});