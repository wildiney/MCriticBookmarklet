(()=>{"use strict";const e=new class{constructor(e){this.url=e}getTextSelectionOrPrompt(){const e=window.getSelection()?.toString().trim();if(null!=e&&""!==e)return e;{const e=prompt("Enter game name:");return null!==e?e.trim():""}}getFullURLFor(e){const t=encodeURI(e.replaceAll("&","").replaceAll("?","").replaceAll(":","").replaceAll("'","").replaceAll(" ","-").replaceAll("--","-").toLowerCase());return`${this.url}${t}`}openInBrowser(e){window.open(e)}}("https://www.metacritic.com/game/playstation-4/"),t=e.getTextSelectionOrPrompt(),r=e.getFullURLFor(t);e.openInBrowser(r)})();