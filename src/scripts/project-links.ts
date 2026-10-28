const isIOS = /iPad|iPhone|iPod/i.test(navigator.userAgent)
  || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
const store = isIOS ? "app-store" : /Android/i.test(navigator.userAgent) ? "google-play" : null;

if (store) {
  document.querySelectorAll<HTMLElement>("[data-project-row]").forEach((row) => {
    const primary = row.querySelector<HTMLAnchorElement>("[data-project-primary]");
    const preferred = row.querySelector<HTMLAnchorElement>(`[data-project-link="${store}"]`);
    if (!primary || !preferred) return;

    primary.href = preferred.href;
    primary.title = preferred.title;
    row.querySelectorAll<HTMLAnchorElement>("[data-project-link]").forEach((link) => {
      link.toggleAttribute("data-project-default", link === preferred);
    });
  });
}
