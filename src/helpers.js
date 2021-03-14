export function getFilename(url) {
  const d = new Date();
  let month = `00${d.getMonth()+1}`.substr(-2);
  let day = `00${d.getDay()+1}`.substr(-2);
  let hh = `00${d.getHours()}`.substr(-2);
  let mm = `00${d.getMinutes()}`.substr(-2);
  let ss = `00${d.getSeconds()}`.substr(-2);

  let hostname = new URL(url).hostname;

  return `cap-${hostname.substr(0,6)}-${d.getFullYear()}${month}${day}-${hh}${mm}${ss}.png`;
}