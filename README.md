# Ps-cinematic-
Editor 
<!doctype html>
<html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>PS CINEMATIC - Video Editing at Student Prices</title>
<style>
*{box-sizing:border-box}
html{scroll-behavior:smooth}
body{margin:0;font-family:system-ui,-apple-system,"Segoe UI",Roboto,Arial,sans-serif;color:#fff;min-height:100vh;
background:linear-gradient(135deg,#3b0a7a,#c2185b,#ff6f00,#6a11cb);background-size:400% 400%;animation:bg 14s ease infinite;overflow-x:hidden}
@keyframes bg{0%{background-position:0 50%}50%{background-position:100% 50%}100%{background-position:0 50%}}
.blob{position:fixed;border-radius:50%;filter:blur(60px);opacity:.45;z-index:0;animation:fl 9s ease-in-out infinite}
.b1{width:260px;height:260px;background:#00e5ff;top:-60px;left:-60px}
.b2{width:300px;height:300px;background:#ffd700;bottom:-80px;right:-80px;animation-delay:-4s}
@keyframes fl{50%{transform:translate(30px,40px) scale(1.15)}}
.w{position:relative;z-index:1;max-width:680px;margin:0 auto;padding:28px 16px 48px}
.hero{text-align:center;padding:18px 0 6px}
.pill{display:inline-block;padding:6px 14px;border-radius:99px;background:rgba(255,255,255,.18);border:1px solid rgba(255,255,255,.35);font-size:13px;letter-spacing:1px;backdrop-filter:blur(8px)}
h1{font-size:clamp(38px,11vw,64px);margin:14px 0 6px;font-weight:900;letter-spacing:2px;line-height:1;
background:linear-gradient(90deg,#fff,#ffe082,#fff);background-size:200% auto;-webkit-background-clip:text;background-clip:text;color:transparent;animation:sh 4s linear infinite;filter:drop-shadow(0 4px 18px rgba(0,0,0,.35))}
@keyframes sh{to{background-position:200% center}}
.sub{font-size:17px;opacity:.95;margin:6px auto 16px;max-width:480px;line-height:1.45}
.ig{display:inline-block;color:#fff;text-decoration:none;font-weight:700;padding:10px 20px;border-radius:99px;background:linear-gradient(45deg,#f09433,#dc2743,#bc1888);box-shadow:0 6px 22px rgba(220,39,67,.5)}
.cta{display:block;width:fit-content;margin:18px auto 0;padding:13px 28px;border-radius:12px;background:#ffd700;color:#2a1250;font-weight:800;text-decoration:none;animation:pulse 2s infinite}
@keyframes pulse{0%,100%{transform:scale(1)}50%{transform:scale(1.06)}}
.stats{display:flex;gap:10px;margin:22px 0}
.stat{flex:1;text-align:center;padding:12px 6px;border-radius:14px;background:rgba(255,255,255,.14);border:1px solid rgba(255,255,255,.25);backdrop-filter:blur(8px);font-size:12px}
.stat b{display:block;font-size:20px}
h2{font-size:22px;margin:28px 0 10px}
.card{background:rgba(255,255,255,.14);border:1px solid rgba(255,255,255,.3);border-radius:20px;padding:14px 16px;backdrop-filter:blur(12px);box-shadow:0 10px 30px rgba(0,0,0,.25)}
.p{display:flex;align-items:center;gap:12px;padding:12px 0;border-bottom:1px solid rgba(255,255,255,.2)}
.p:last-child{border:0}
.ic{font-size:26px;width:44px;height:44px;border-radius:12px;background:rgba(255,255,255,.2);display:flex;align-items:center;justify-content:center;flex:none}
.p div.t{flex:1}.p b{display:block;font-size:16px}.p small{opacity:.85}
.pr{font-weight:800;font-size:18px;background:#ffd700;color:#2a1250;padding:6px 12px;border-radius:10px;white-space:nowrap}
label{display:block;margin-top:14px;font-size:14px;font-weight:600}
input,select,textarea{width:100%;padding:13px;margin-top:6px;font:inherit;font-size:16px;border-radius:12px;border:1px solid rgba(255,255,255,.4);background:rgba(20,5,45,.55);color:#fff;outline:0}
input:focus,select:focus,textarea:focus{border-color:#ffd700;box-shadow:0 0 0 3px rgba(255,215,0,.3)}
input::placeholder,textarea::placeholder{color:rgba(255,255,255,.5)}
button{margin-top:20px;width:100%;padding:16px;font-size:18px;font-weight:800;border:0;border-radius:14px;color:#2a1250;background:linear-gradient(90deg,#ffd700,#ff9800);box-shadow:0 8px 24px rgba(255,152,0,.5);cursor:pointer}
button:disabled{opacity:.6}
.ok{font-weight:700;font-size:18px;text-align:center;padding:20px 0}.err{color:#ffd0d0;font-weight:600}
.steps{display:flex;gap:10px}.step{flex:1;text-align:center;font-size:13px;padding:14px 6px;border-radius:16px;background:rgba(255,255,255,.14);border:1px solid rgba(255,255,255,.25)}
.step i{display:block;font-style:normal;font-size:28px;margin-bottom:4px}
.by{text-align:center;opacity:.85;margin-top:30px;font-size:14px}
</style></head><body>
<div class="blob b1"></div><div class="blob b2"></div>
<div class="w">
<div class="hero">
<span class="pill">🎬 OFFICIAL EDITING STUDIO</span>
<h1>PS CINEMATIC</h1>
<p class="sub">Premium video editing at student prices. Beat-sync, transitions, captions and colour grading, made to make your content stand out.</p>
<a class="ig" href="https://instagram.com/challenger_editor_" target="_blank" rel="noopener">📸 @challenger_editor_</a>
<a class="cta" href="#order">Order Now ↓</a>
</div>
<div class="stats">
<div class="stat"><b>🔥</b>Beat-sync</div>
<div class="stat"><b>⚡</b>Fast delivery</div>
<div class="stat"><b>🎨</b>Colour grading</div>
</div>
<h2>✨ Packages</h2>
<div class="card"><div id="prices"></div></div>
<p style="text-align:center;font-weight:700;margin:12px 4px;opacity:.95">💬 Price can be lowered too! Message me on Instagram @challenger_editor_</p>
<h2>🚀 How it works</h2>
<div class="steps">
<div class="step"><i>🔗</i>Paste your video link</div>
<div class="step"><i>🎞️</i>Pick edit type</div>
<div class="step"><i>✅</i>I contact you</div>
</div>
<h2 id="order">📝 Place your order</h2>
<div class="card" id="box">
<label>Your name<input id="name" placeholder="e.g. Rahul"></label>
<label>WhatsApp number or Instagram<input id="contact" placeholder="+91... or @username"></label>
<label>Link to your video (Google Drive / YouTube)<input id="link" placeholder="Paste link here"></label>
<label>Edit type<select id="edit"></select></label>
<label>Notes (style, music, deadline)<textarea id="notes" rows="3" placeholder="Anything I should know"></textarea></label>
<button id="go">Send order</button><p id="msg"></p></div>
<p class="by">Made by Pratik</p></div>
<script>
// ===== PRATIK: change only these lines =====
var NTFY_TOPIC='pscinematic-a6ab51ea2402';
var PRICES=[
 {name:'Short video (up to 1 min)',price:199,detail:'Cuts, captions, music sync',icon:'✂️'},
 {name:'Reel / Short with effects',price:299,detail:'Beat-sync, colour grade, captions',icon:'🔥'},
 {name:'YouTube video (up to 5 min)',price:499,detail:'Full edit, captions, sound clean-up',icon:'▶️'},
 {name:'Kinetic typography video',price:399,detail:'Animated text edit',icon:'🔤'}];
// ===========================================
var $=function(i){return document.getElementById(i)};
$('prices').innerHTML=PRICES.map(function(p){return '<div class="p"><div class="ic">'+p.icon+'</div><div class="t"><b>'+p.name+'</b><small>'+p.detail+'</small></div><div class="pr">Rs '+p.price+'</div></div>'}).join('');
$('edit').innerHTML=PRICES.map(function(p,i){return '<option value="'+i+'">'+p.name+' - Rs '+p.price+'</option>'}).join('');
function upd(){$('go').textContent='Send order - Rs '+PRICES[$('edit').value].price}upd();$('edit').onchange=upd;
$('go').onclick=function(){
 var n=$('name').value.trim(),c=$('contact').value.trim(),l=$('link').value.trim(),m=$('msg');
 if(!n||!c||!l){m.className='err';m.textContent='Please fill name, contact and video link.';return}
 var e=PRICES[$('edit').value];$('go').disabled=true;$('go').textContent='Sending...';
 var body='Name: '+n+'\nContact: '+c+'\nVideo link: '+l+'\nEdit: '+e.name+' - Rs '+e.price+'\nNotes: '+($('notes').value.trim()||'-');
 fetch('https://ntfy.sh/'+NTFY_TOPIC,{method:'POST',body:body,headers:{Title:'New edit order - '+n,Tags:'clapper,moneybag',Priority:'4'}})
 .then(function(r){if(!r.ok)throw 0;$('box').innerHTML='<p class="ok">🎉 Order sent! Thank you '+n.replace(/[<>&]/g,'')+'. I will contact you soon.</p>'})
 .catch(function(){$('go').disabled=false;upd();m.className='err';m.textContent='Could not send. Check internet and try again.'})};
</script></body></html>
