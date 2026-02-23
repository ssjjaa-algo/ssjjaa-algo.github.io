(() => {
  const root = document.documentElement;
  const button = document.getElementById("theme-toggle");
  if (!button) return;

  const saved = localStorage.getItem("theme");
  const preferred = saved || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

  const apply = (theme) => {
    root.setAttribute("data-theme", theme);
    button.textContent = theme === "dark" ? "☀️" : "🌙";
    localStorage.setItem("theme", theme);
  };

  apply(preferred);
  button.addEventListener("click", () => apply(root.getAttribute("data-theme") === "dark" ? "light" : "dark"));
})();
