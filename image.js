// Wait until the DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  // 1) Handle any <a> that points to an internal HTML file
  const allLinks = document.querySelectorAll("a[href]");

  allLinks.forEach(link => {
    link.addEventListener("click", function(e) {
      const href = this.getAttribute("href");

      // Skip fade for:
      //  - anchors (#something)
      //  - mailto links
      //  - external URLs (http/https)
      if (
        href.startsWith("#") ||
        href.startsWith("mailto:") ||
        href.startsWith("http")
      ) {
        // Let the browser follow these normally
        return;
      }

      // Otherwise: internal page → intercept, fade out, then navigate
      e.preventDefault();
      document.body.classList.add("fade-out");

      setTimeout(() => {
        window.location.href = href;
      }, 500); // Match the CSS transition duration (0.5s)
    });
  });

  // 2) If you still want to support a <button class="get-started"> (instead of <a>),
  //    you can leave it as-is or unify it under the <a> logic above.
  //    But here’s a fallback so that, if your “Get Started” is a button,
  //    it will fade out just like the links do:
  const getStartedBtn = document.querySelector(".get-started");
  if (getStartedBtn) {
    getStartedBtn.addEventListener("click", e => {
      e.preventDefault();
      document.body.classList.add("fade-out");

      setTimeout(() => {
        window.location.href = "papers_or_notes.html";
      }, 500);
    });
  }
});