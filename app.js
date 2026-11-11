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

/* ----- helper chat bot: Hindi / Marathi / English, runs on this device ----- */
function plist(){return PRICES.map(function(p){return p.icon+' '+p.name+' - Rs '+p.price}).join('\n')}
var C='\n📞 WhatsApp: +91 94050 50230\n📸 Instagram: @challenger_editor_';
var BOT_RULES=[
 {k:['who made','who built','who created','who are you','who r u','your creator','developer','made you','built you','कौन','कोण','बनाया','बनवल','banaya','banavla','banvla','kaun','kon ','kone'],
  e:'I was made by Pratik, when he was 16 years old. I am the PS CINEMATIC helper bot.',
  h:'मुझे प्रतीक ने बनाया है, जब वह 16 साल का था। मैं PS CINEMATIC का हेल्पर बॉट हूँ।',
  m:'मला प्रतिक ने बनवलंय, सोळा वर्षांचा असताना. मी PS CINEMATIC चा हेल्पर बॉट आहे.'},
 {k:['thank','thx','shukriya','dhanyavad','aabhar','धन्यवाद','शुक्रिया','आभार','थँक'],
  e:'You are welcome! 😊 Ask me anything else about editing orders.',
  h:'आपका स्वागत है! 😊 एडिटिंग ऑर्डर के बारे में कुछ और पूछना हो तो पूछें।'},

 {k:['how are you','kaise ho','kaisa hai','kasa aahes','kase aahat','कैसे हो','कसा आहेस','कसे आहात'],
  e:'I am good, thanks! How can I help you?',h:'मैं ठीक हूँ, धन्यवाद! बताइए, क्या मदद करूँ?',m:'मी मस्त आहे, धन्यवाद! सांगा, काय मदत करू?'},
 {k:['what can you','help','madat','madad','robot','ai ','bot ','kya kar','मदद','मदत','रोबोट','क्या कर'],
  e:'I am a small rule-based helper bot (not a full AI). I can tell you about packages, prices, how to order, delivery, the Challenge and contact details.',
  h:'मैं एक छोटा रूल-बेस्ड हेल्पर बॉट हूँ (पूरा AI नहीं)। पैकेज, कीमत, ऑर्डर, डिलीवरी, चैलेंज और संपर्क बता सकता हूँ।'},
 {k:['delivery','time','kab','when','urgent','fast','kadhi','vel','डिलीव','डिलिव','समय','वेळ','कब','कधी','लगेग','लागे'],
  h:'डिलीवरी का समय एडिट और कतार पर निर्भर है। ऑर्डर के बाद बता दूँगा। जल्दी हो तो Instagram पर @challenger_editor_ को DM करें।'},
 {k:['price','cost','rate','kitn','kiti','kim','daam','dam','paise','paisa','much','package','pack','discount','kam','cheap','lower','कीमत','किंमत','दाम','भाव','पैसे','कितन','किती','पैकेज','पॅकेज','कम','सस्त','स्वस्त'],
  e:'My packages:\n#\n\nPrice can be lowered too! Message me on Instagram @challenger_editor_.',
  h:'मेरे पैकेज:\n#\n\nकीमत कम भी हो सकती है! Instagram पर @challenger_editor_ को मैसेज करें।',
  m:'माझे पॅकेज:\n#\n\nकिंमत कमी पण होऊ शकते! Instagram वर @challenger_editor_ ला मेसेज करा.'},
 {k:['order','buy','book','how','kaise','kase','kasa','ऑर्डर','कैसे','कसे','कशी','कसा','मागव'],
  h:'ऑर्डर करना आसान है:\n1. Order पेज खोलें\n2. वीडियो का लिंक (Google Drive / YouTube) डालें\n3. एडिट टाइप चुनकर भेजें\n\nमैं WhatsApp या Instagram पर संपर्क करूँगा।',
  m:'ऑर्डर करणे सोपे आहे:\n1. Order पेज उघडा\n2. व्हिडिओची लिंक (Google Drive / YouTube) टाका\n3. एडिटचा प्रकार निवडून पाठवा\n\nमी WhatsApp किंवा Instagram वर संपर्क करतो.'},
 {k:['challenge','55','s25','samsung','चैलेंज','चॅलेंज','सैमसंग'],
  h:'मैं ₹55,000 एडिटिंग चैलेंज कर रहा हूँ: 5-6 महीनों में सिर्फ वीडियो एडिट करके कमाकर Samsung Galaxy S25 लेना। सफर रोज़ YouTube पर। Challenge पेज देखें!'},

 {k:['contact','number','phone','whatsapp','call','insta','youtube','channel','dm','sampark','संपर्क','नंबर','फोन','कॉल','इंस्टा','यूट्यूब','युट्यूब','चैनल','चॅनल'],
  e:'Contact me:'+C+'\n▶️ YouTube: @Challenger_editor',h:'संपर्क करें / करा:'+C+'\n▶️ YouTube: @Challenger_editor'}
];
var GREET=/(^|[^a-z])(hi+|hello|hey|namaste|namaskar)([^a-z]|$)|नमस्ते|नमस्कार|हाय|हैलो|हॅलो|हेलो/i;
var MR=/[^a-z](aahe|ahe|kay|kiti|kase|kasa|mala|tumhi|pahije|havay|kuthe|kadhi|maza|majha|kara|ka)[^a-z]|आहे|काय|किती|कसे|कशी|कसा|मला|तुम्ही|माझ|पाहिजे|हवे|कुठे|कधी|करा|मी |लागेल|आणि|ॲ|ॅ|ऑ|कोण|बनवल/;
var EN=/(^|[^a-z])(the|what|who|are|you|your|is|do|can|thanks?|thank|hi+|hello|hey|made|how|much|order|price|delivery|contact)([^a-z]|$)/;
var FALL={e:'Sorry, I do not know that one. I can help with packages, prices, ordering, delivery and the Challenge. For anything else, WhatsApp or DM Pratik:'+C,
 h:'माफ़ कीजिए, यह मुझे नहीं पता। मैं पैकेज, कीमत, ऑर्डर, डिलीवरी और चैलेंज में मदद कर सकता हूँ। बाकी के लिए प्रतीक को WhatsApp या DM करें:'+C,
 m:'माफ करा, हे मला माहीत नाही. मी पॅकेज, किंमत, ऑर्डर, डिलिव्हरी आणि चॅलेंजबद्दल मदत करू शकतो. बाकीसाठी प्रतिकला WhatsApp किंवा DM करा:'+C};
var HI={e:'Hi! I am the PS CINEMATIC helper 🤖 Ask about packages, prices, ordering, delivery, the Challenge or contact.',
 h:'नमस्ते! मैं PS CINEMATIC हेल्पर हूँ 🤖 पैकेज, कीमत, ऑर्डर, डिलीवरी, चैलेंज या संपर्क पूछें।',
 m:'नमस्कार! मी PS CINEMATIC हेल्पर आहे 🤖 पॅकेज, किंमत, ऑर्डर, डिलिव्हरी, चॅलेंज किंवा संपर्क विचारा.'};
var LANG='m';
function botReply(q){
 var s=' '+q.toLowerCase()+' ';
 if(MR.test(s))LANG='m';else if(/[\u0900-\u097f]|kitn|kaise|kab|hai|kya|kaun|kisne|tumhe/.test(s))LANG='h';else if(EN.test(s))LANG='e';
 for(var i=0;i<BOT_RULES.length;i++){
  for(var j=0;j<BOT_RULES[i].k.length;j++){
   if(s.indexOf(BOT_RULES[i].k[j])>-1)return (BOT_RULES[i][LANG]||BOT_RULES[i].h).replace('#',plist());
  }
 }
 return GREET.test(s)?HI[LANG]:FALL[LANG];
}
function addBub(text,me){
 var d=document.createElement('div');d.className='bub '+(me?'me':'bot');d.textContent=text;
 $('chatlog').appendChild(d);$('chatlog').scrollTop=$('chatlog').scrollHeight;
}
function askBot(q){if(!q.trim())return;addBub(q,true);setTimeout(function(){addBub(botReply(q),false)},350)}
$('chatfab').onclick=function(){
 var p=$('chatpanel');p.classList.toggle('open');
 if(p.classList.contains('open')&&!$('chatlog').children.length)addBub(HI.m,false);
};
$('chatx').onclick=function(){$('chatpanel').classList.remove('open')};
$('chatsend').onclick=function(){askBot($('chatq').value);$('chatq').value=''};
$('chatq').addEventListener('keydown',function(e){if(e.key==='Enter'){askBot(this.value);this.value=''}});
['पैकेज','कीमत','ऑर्डर कैसे','डिलीवरी','चैलेंज','संपर्क'].forEach(function(c){
 var b=document.createElement('button');b.className='chip';b.textContent=c;
 b.onclick=function(){askBot(c)};$('chips').appendChild(b);
});

renderProf();fillForm();renderHist();
// PSC v9 END OK app.js - scroll to the bottom and check this line before saving
 
