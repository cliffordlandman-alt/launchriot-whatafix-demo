# Making a real client version (internal)
This repo is the neutral demo. The same files serve a real client; only config changes. Nothing below has been done.
1. Copy this repo to a new Pages repo (e.g. launchriot-<slug>-dashboard). Delete demo-api.js.
2. Edit config.js: set mode:'live', demo:false, apiBase:'https://api-<slug>.145-241-118-107.sslip.io' (from `new-client`), remove label/name/bookUrl/bookEmail. Keep or trim `views`.
3. Logo and name: the client company name and logo_url come from GET /profile (PUT /profile to set `{company, logo_url}`, https URL only). The header shows LaunchRiot's logo until a client logo is set. Never alter logo files; use the client's official file.
4. index.html: remove the `demobar` div. Remove `noindex` only if the client wants the page indexed (default: keep it).
5. Tell Khalid the final page URL and origin; he runs `client-admin set-origin <slug> <origin>` and `set-page <slug> <page URL>`.
6. Login: the one-tap link opens `<page>#s=<session>`. boot.js stores it and the app sends `Authorization: Bearer <session>`. Test in Chrome and WebKit at 390 and 1440, delete test rows.
7. Not available in this API: mail inbox, calendar sync, decisions page, VIPs, WhatsApp alerts. Those views are not in `views` by design.
