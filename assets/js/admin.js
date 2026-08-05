document.addEventListener("keydown", e => {
  if ((e.metaKey || e.ctrlKey) && e.key === "e") {
    e.preventDefault();
    const b = document.body;
    window.open(`${b.dataset.base}/admin/#/collections/${b.dataset.collection}/entries/${b.dataset.entry}/index`, "_blank");
  }
});