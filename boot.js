// Boot: applies config, loads the in-browser sample API in demo mode, or the session + profile in real mode.
(function(){'use strict';const C=window.WN_CFG||{};document.body.setAttribute('data-mode',C.demo?'demo':'live');if(C.title)document.title=C.title;
 const brand=document.getElementById('brandimg');
 if(C.demo){window.WN_NAME=C.name;document.write('<script src="demo-api.js"><\/script>');
  const bar=document.getElementById('demobar');bar.hidden=false;bar.innerHTML='<b>'+C.label+'.</b> Everything here is made up to show what your dashboard could look like. <a href="'+C.bookUrl+'" target="_blank" rel="noopener" style="color:#82e6ba">Book a demo</a> · <button type="button" id="demo-reset">Reset sample data</button>';
  document.getElementById('foot').innerHTML='<img src="launchriot-logo.png" alt="LaunchRiot"><span>'+C.label+'. Nothing here is real and nothing is sent.</span><a class="cta" href="'+C.bookUrl+'" target="_blank" rel="noopener">Book a demo</a><a href="'+C.bookEmail+'">hello@launchriot.online</a>';
  document.addEventListener('click',e=>{if(e.target.id=='demo-reset'){try{localStorage.removeItem('lr-demo-v1')}catch(x){}location.hash='#/home';location.reload()}});
  return}
 // ---- real client mode ----
 const TK='wn-tok',m=location.hash.match(/^#s=([A-Za-z0-9._~-]{8,200})/);
 if(m){try{localStorage.setItem(TK,m[1])}catch(e){}history.replaceState(null,'',location.pathname+location.search+'#/home')}
 document.getElementById('foot').innerHTML='Powered by <a href="https://launchriot.online" target="_blank" rel="noopener"><img src="launchriot-logo.png" alt="LaunchRiot"></a><span>Private workspace. Nothing is sent from here.</span>';
 let tok='';try{tok=localStorage.getItem(TK)||''}catch(e){}
 window.WN_READY=tok?fetch(C.apiBase+'/profile',{headers:{Authorization:'Bearer '+tok},credentials:'include'}).then(r=>r.ok?r.json():null).then(p=>{if(!p)return;const pr=p.profile||p;
   if(pr.name||pr.company){window.WN_NAME=(pr.owner_name||pr.name||pr.company);const t=document.querySelector('.tagp');if(t&&pr.company)t.textContent=pr.company}
   if(typeof pr.logo_url=='string'&&/^https:\/\//.test(pr.logo_url)){brand.src=pr.logo_url;brand.alt=pr.company||'Logo'}}).catch(()=>{}):Promise.resolve();
})();
