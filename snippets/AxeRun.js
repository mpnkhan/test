(async () => {
  const script = document.createElement('script');
  script.src = 'https://unpkg.com/axe-core@latest/axe.min.js';
  document.head.appendChild(script);
  await new Promise(resolve => script.onload = resolve);
  axe.run({ runOnly: { type: "tag", values: ["wcag2a", "wcag2aa"] } }).then(results => console.log(results));
})();