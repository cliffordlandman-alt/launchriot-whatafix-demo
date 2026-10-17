// ONE place that decides demo vs real client. See README-REAL-CLIENT.md.
// DEMO (this repo): sample data only, no network, nothing real.
window.WN_CFG={
  mode:'demo', demo:true,
  title:'Executive Dashboard | Example',
  label:'Example with sample data',
  name:'Sam',                      // greeting in the demo
  apiBase:'https://demo.invalid',  // never contacted: demo-api.js answers every call in the browser
  bookUrl:'https://wa.me/971586444285', bookEmail:'mailto:hello@launchriot.online',
  views:['home','tasks','calendar','notes','contacts','followups','documents','projects','activity','search']
};
/* REAL CLIENT (do not enable in the demo). Replace the block above with:
window.WN_CFG={
  mode:'live', demo:false,
  title:'Executive Dashboard',
  apiBase:'https://<client API host from the runbook>',   // from the client runbook
  views:['home','tasks','calendar','notes','contacts','followups','documents','projects','activity','search']
};
In live mode boot.js reads #s=<session> as the Bearer token and takes the company name and logo from GET /profile. */
