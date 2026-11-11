// ===== PRATIK: change only these lines =====
var NTFY_TOPIC='pscinematic-a6ab51ea2402';
var PRICES=[
 {name:'Short video (up to 1 min)',price:199,detail:'Cuts, captions, music sync',icon:'✂️'},
 {name:'Reel / Short with effects',price:299,detail:'Beat-sync, colour grade, captions',icon:'🔥'},
 {name:'YouTube video (up to 5 min)',price:499,detail:'Full edit, captions, sound clean-up',icon:'▶️'},
 {name:'Kinetic typography video',price:399,detail:'Animated text edit',icon:'🔤'}];
// ===========================================
var $=function(i){return document.getElementById(i)};
function esc(s){return String(s).replace(/[<>&]/g,'')}

/* ----- packages & order form ----- */
$('prices').innerHTML=PRICES.map(function(p){return '<div class="p"><div class="ic">'+p.icon+'</div><div class="t"><b>'+p.name+'</b><small>'+p.detail+'</small></div><div class="pr">Rs '+p.price+'</div></div>'}).join('');
$('edit').innerHTML=PRICES.map(function(p,i){return '<option value="'+i+'">'+p.name+' - Rs '+p.price+'</option>'}).join('');
function upd(){$('go').textContent='Send order - Rs '+PRICES[$('edit').value].price}upd();$('edit').onchange=upd;
/* keep the number field digits-only */
$('contact').addEventListener('input',function(){this.value=this.value.replace(/[^0-9]/g,'')});
$('go').onclick=function(){
 var n=$('name').value.trim(),c=$('contact').value.trim(),g=$('ig').value.trim(),l=$('link').value.trim(),m=$('msg');
 if(!n||!c||!l){m.className='err';m.textContent='Please fill name, WhatsApp number and video link.';return}
 if(c.length<10){m.className='err';m.textContent='Please enter a valid 10-digit WhatsApp number.';return}
 var e=PRICES[$('edit').value];$('go').disabled=true;$('go').textContent='Sending...';
 var body='Name: '+n+'\nWhatsApp: '+c+(g?'\nInstagram: '+g:'')+'\nVideo link: '+l+'\nEdit: '+e.name+' - Rs '+e.price+'\nNotes: '+($('notes').value.trim()||'-');
 fetch('https://ntfy.sh/'+NTFY_TOPIC,{method:'POST',body:body,headers:{Title:'New edit order - '+n,Tags:'clapper,moneybag',Priority:'4'}})
 .then(function(r){if(!r.ok)throw 0;
  saveOrder({date:new Date().toLocaleDateString('en-IN',{day:'numeric',month:'short'}),pack:e.name,price:e.price});
  renderHist();
  $('box').innerHTML='<p class="ok">🎉 Order sent! Thank you '+esc(n)+'. I will contact you soon.</p>'})
 .catch(function(){$('go').disabled=false;upd();m.className='err';m.textContent='Could not send. Check internet and try again.'})};

/* ----- profile (saved on this device only) ----- */
function getProf(){try{return JSON.parse(localStorage.getItem('psc_profile')||'null')}catch(e){return null}}
function setProf(p){if(p)localStorage.setItem('psc_profile',JSON.stringify(p));else localStorage.removeItem('psc_profile')}
function getOrders(){try{return JSON.parse(localStorage.getItem('psc_orders')||'[]')}catch(e){return[]}}
function saveOrder(o){var a=getOrders();a.unshift(o);try{localStorage.setItem('psc_orders',JSON.stringify(a.slice(0,50)))}catch(e){}}

function renderProf(){
 var p=getProf(),b=$('profbox');
 if(!p){
  b.innerHTML='<div class="hello"><span class="mini">👤</span><span class="t"><b>Login / My profile</b><small>Save your name and number once, order faster.</small></span></div>'
  +'<label>Your name<input id="pfname" placeholder="e.g. Rahul"></label>'
  +'<label>WhatsApp number<input id="pfnum" type="tel" inputmode="numeric" pattern="[0-9]*" maxlength="15" placeholder="10-digit number"></label>'
  +'<button id="pfsave" style="margin-top:14px">Save profile</button>'
  +'<p class="mini-note">Saved only in this phone\'s browser. No password needed. Clearing browser data removes it.</p>';
  $('pfnum').addEventListener('input',function(){this.value=this.value.replace(/[^0-9]/g,'')});
  $('pfsave').onclick=function(){
   var n=$('pfname').value.trim(),c=$('pfnum').value.trim();
   if(!n){alert('Please enter your name.');return}
   if(c.length<10){alert('Please enter a valid 10-digit WhatsApp number.');return}
   setProf({name:n,num:c});renderProf();fillForm();renderHist();
  };
 }else{
  b.innerHTML='<div class="hello"><span class="mini">'+esc(p.name.charAt(0).toUpperCase())+'</span><span class="t"><b>Hi, '+esc(p.name)+'!</b><small>'+esc(p.num)+' · profile on this device</small></span><button class="linkbtn" id="pfout">Log out</button></div>';
  $('pfout').onclick=function(){if(confirm('Log out from this device? Your order history stays saved.')){setProf(null);renderProf();fillForm();renderHist()}};
 }
}
function fillForm(){
 var p=getProf();
 if(p){$('name').value=p.name;$('contact').value=p.num}
}
function renderHist(){
 var a=getOrders(),b=$('histbox'),p=getProf(),html='<b style="font-size:15px">🧾 My orders '+(p?'':'(this device)')+'</b>';
 if(!a.length){html+='<p class="empty">No orders yet from this device.<br>Your orders will show here after you place one.</p>'}
 else{html+=a.map(function(o){return '<div class="hist"><span class="d">'+esc(o.date)+'</span><span class="t">'+esc(o.pack)+'</span><span class="pr">Rs '+esc(o.price)+'</span></div>'}).join('')}
 if(a.length){html+='<div style="text-align:right;margin-top:8px"><button class="linkbtn" id="histclr">Clear my order history</button></div>'}
 b.innerHTML=html;
 var c=$('histclr');if(c)c.onclick=function(){if(confirm('Delete all saved orders from this device?')){localStorage.removeItem('psc_orders');renderHist()}};
}

/* ----- helper chat bot (runs fully on this device) ----- */
var BOT_RULES=[
 {k:['price','cost','charge','kitna','rate','paisa'],r:'Here are my packages:\n✂️ Short video (up to 1 min) - Rs 199\n🔥 Reel / Short with effects - Rs 299\n▶️ YouTube video (up to 5 min) - Rs 499\n🔤 Kinetic typography - Rs 399\n\nPrice can be lowered too! Message me on Instagram @challenger_editor_'},
 {k:['package','pack','edit type','types'],r:'I do 4 types of edits:\n✂️ Short video (up to 1 min) - Rs 199\n🔥 Reel / Short with effects - Rs 299\n▶️ YouTube video (up to 5 min) - Rs 499\n🔤 Kinetic typography - Rs 399\n\nSee the Packages page for details.'},
 {k:['order','buy','book','kaise','how'],r:'Ordering is easy:\n1. Go to the Order page\n2. Paste your video link (Google Drive / YouTube)\n3. Pick your edit type and send\n\nI will contact you on WhatsApp or Instagram.'},
 {k:['delivery','time',' kab','when','fast','urgent','long'],r:'Delivery time depends on the edit type and how much work is in queue. I confirm the time with you after you order. For urgent work, DM me on Instagram @challenger_editor_.'},
 {k:['discount','lower','cheap','less','reduce','kam'],r:'Yes! Price can be lowered too. Just message me on Instagram @challenger_editor_ and we can talk.'},
 {k:['challenge','55','55000','s25','samsung'],r:'I am doing a ₹55,000 Editing Challenge: earn ₹55,000 in 5-6 months only by editing videos, to buy a Samsung Galaxy S25. I post the journey daily on YouTube. Check the Challenge page to follow along!'},
 {k:['contact','number','phone','whatsapp','call'],r:'You can reach me here:\n📞 Call / WhatsApp: +91 94050 50230\n📸 Instagram: @challenger_editor_\n▶️ YouTube: @Challenger_editor'},
 {k:['instagram','insta','dm'],r:'My Instagram is @challenger_editor_ - DM me there anytime.'},
 {k:['youtube','channel','video','subscribe'],r:'My YouTube channel is @Challenger_editor. I post the daily challenge journey there - Day 1, Day 2, Day 3...'},
 {k:['hi','hello','hey','namaste','hii'],r:'Hi! I am the PS CINEMATIC helper. Ask me about packages, prices, how to order, delivery, the ₹55,000 Challenge, or how to contact Pratik.'}
];
function botReply(q){
 var s=q.toLowerCase();
 for(var i=0;i<BOT_RULES.length;i++){
  for(var j=0;j<BOT_RULES[i].k.length;j++){
   if(s.indexOf(BOT_RULES[i].k[j])>-1)return BOT_RULES[i].r;
  }
 }
 return 'I can help with packages, prices, how to order, delivery, the ₹55,000 Challenge and contact details.\n\nFor anything else, DM @challenger_editor_ on Instagram.';
}
function addBub(text,me){
 var d=document.createElement('div');d.className='bub '+(me?'me':'bot');d.textContent=text;
 $('chatlog').appendChild(d);$('chatlog').scrollTop=$('chatlog').scrollHeight;
}
function askBot(q){if(!q.trim())return;addBub(q,true);setTimeout(function(){addBub(botReply(q),false)},350)}
$('chatfab').onclick=function(){
 var p=$('chatpanel');p.classList.toggle('open');
 if(p.classList.contains('open')&&!$('chatlog').children.length){
  addBub('Hi! I am the PS CINEMATIC helper 🤖 Ask me anything, or tap a question below.',false);
 }
};
$('chatx').onclick=function(){$('chatpanel').classList.remove('open')};
$('chatsend').onclick=function(){askBot($('chatq').value);$('chatq').value=''};
$('chatq').addEventListener('keydown',function(e){if(e.key==='Enter'){askBot(this.value);this.value=''}});
[['Packages','packages'],['Prices','price'],['How to order','how to order'],['Delivery','delivery time'],['Challenge','challenge'],['Contact','contact']].forEach(function(c){
 var b=document.createElement('button');b.className='chip';b.textContent=c[0];
 b.onclick=function(){askBot(c[1])};$('chips').appendChild(b);
});

renderProf();fillForm();renderHist();
// PSC v7 END OK app.js - scroll to the bottom and check this line before saving
  
