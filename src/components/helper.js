export function openUrlInNewTab(url) {
  if (url !== undefined) {
    var win = window.open(url, '_blank');
    win.focus();
  }
}
