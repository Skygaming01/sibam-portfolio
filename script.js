// Lightning flash effect every 8 seconds
setInterval(() => {
  document.body.style.backgroundColor = "#1a1a1a";
  setTimeout(() => {
    document.body.style.backgroundColor = "#0f0f0f";
  }, 200);
}, 8000);
