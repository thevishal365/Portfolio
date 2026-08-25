/**
 * GoatCounter page-view tracking for https://vishalkumar.goatcounter.com
 *
 * Loads GoatCounter's official count.js tracker (no API token required —
 * counting visits is a public operation). The script is injected here
 * rather than in index.html so it stays bundled with the SPA lifecycle.
 *
 * Note: the FOOTER DISPLAY of the visitor total additionally requires a
 * read-only API token in .env.local — see src/hooks/useVisitorCount.ts.
 */
const GOATCOUNTER_SITE = 'https://vishalkumar.goatcounter.com/count';

const script = document.createElement('script');
script.async = true;
script.src = 'https://gc.zgo.at/count.js';
script.setAttribute('data-goatcounter', GOATCOUNTER_SITE);
document.head.appendChild(script);
