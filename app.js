// ===== PRATIK: change only these lines =====
var NTFY_TOPIC='pscinematic-a6ab51ea2402';
// price:null means "ask price on Instagram DM" (real rates not set yet)
var SERVICES=[
 {icon:'✂️',price:199,name:{en:'Short / Reel edit',hi:'शॉर्ट / रील एडिट',mr:'शॉर्ट / रील एडिट'},detail:{en:'Cuts, captions, music sync',hi:'कट्स, कैप्शन, म्यूज़िक सिंक',mr:'कट्स, कॅप्शन, म्युझिक सिंक'}},
 {icon:'▶️',price:499,name:{en:'YouTube video edit',hi:'YouTube वीडियो एडिट',mr:'YouTube व्हिडिओ एडिट'},detail:{en:'Full edit, captions, sound clean-up',hi:'फुल एडिट, कैप्शन, साउंड क्लीन-अप',mr:'फुल एडिट, कॅप्शन, साउंड क्लीन-अप'}},
 {icon:'🎥',price:null,name:{en:'Vlog edit',hi:'व्लॉग एडिट',mr:'व्ह्लॉग एडिट'},detail:{en:'Story cuts, SFX, music',hi:'स्टोरी कट्स, SFX, म्यूज़िक',mr:'स्टोरी कट्स, SFX, म्युझिक'}},
 {icon:'🔥',price:299,name:{en:'Beat-sync edit',hi:'बीट-सिंक एडिट',mr:'बीट-सिंक एडिट'},detail:{en:'Cuts exactly on the beat',hi:'हर कट बीट पर',mr:'प्रत्येक कट बीटवर'}},
 {icon:'🎮',price:null,name:{en:'Gaming montage',hi:'गेमिंग मॉन्टेज',mr:'गेमिंग माँटेज'},detail:{en:'Kills, sync, effects',hi:'किल्स, सिंक, इफ़ेक्ट्स',mr:'किल्स, सिंक, इफेक्ट्स'}},
 {icon:'🎙️',price:null,name:{en:'Podcast clips',hi:'पॉडकास्ट क्लिप्स',mr:'पॉडकास्ट क्लिप्स'},detail:{en:'Short clips from long episodes',hi:'लंबे एपिसोड से छोटी क्लिप्स',mr:'मोठ्या एपिसोडमधून छोट्या क्लिप्स'}},
 {icon:'📣',price:null,name:{en:'Promo / ad video',hi:'प्रोमो / ऐड वीडियो',mr:'प्रोमो / अॅड व्हिडिओ'},detail:{en:'For your brand or page',hi:'आपके ब्रांड या पेज के लिए',mr:'तुमच्या ब्रँड किंवा पेजसाठी'}},
 {icon:'📦',price:null,name:{en:'Product video',hi:'प्रोडक्ट वीडियो',mr:'प्रोडक्ट व्हिडिओ'},detail:{en:'Show your product in style',hi:'प्रोडक्ट को स्टाइल में दिखाएं',mr:'प्रोडक्ट स्टाइलमध्ये दाखवा'}},
 {icon:'💍',price:null,name:{en:'Event / wedding highlight',hi:'इवेंट / वेडिंग हाइलाइट',mr:'इव्हेंट / वेडिंग हायलाइट'},detail:{en:'Best moments, cinematic feel',hi:'बेस्ट पल, सिनेमैटिक फील',mr:'बेस्ट क्षण, सिनेमॅटिक फील'}},
 {icon:'🖼️',price:null,name:{en:'Thumbnail design',hi:'थंबनेल डिज़ाइन',mr:'थंबनेल डिझाइन'},detail:{en:'YouTube and reel thumbnails',hi:'YouTube और रील थंबनेल',mr:'YouTube आणि रील थंबनेल'}},
 {icon:'🎨',price:null,name:{en:'Logo design',hi:'लोगो डिज़ाइन',mr:'लोगो डिझाइन'},detail:{en:'Simple, clean logos',hi:'सिंपल, क्लीन लोगो',mr:'सिंपल, क्लीन लोगो'}},
 {icon:'📄',price:null,name:{en:'Poster',hi:'पोस्टर',mr:'पोस्टर'},detail:{en:'Events, offers, announcements',hi:'इवेंट, ऑफर, अनाउंसमेंट',mr:'इव्हेंट, ऑफर, अनाउन्समेंट'}},
 {icon:'🪧',price:null,name:{en:'Banner',hi:'बैनर',mr:'बॅनर'},detail:{en:'Channel and page banners',hi:'चैनल और पेज बैनर',mr:'चॅनल आणि पेज बॅनर'}},
 {icon:'📱',price:null,name:{en:'Social media post',hi:'सोशल मीडिया पोस्ट',mr:'सोशल मीडिया पोस्ट'},detail:{en:'Posts for Insta and more',hi:'इंस्टा वगैरे के लिए पोस्ट',mr:'इंस्टा इत्यादींसाठी पोस्ट'}},
 {icon:'💬',price:null,name:{en:'English word-sync captions',hi:'इंग्लिश वर्ड-सिंक कैप्शन',mr:'इंग्लिश वर्ड-सिंक कॅप्शन'},detail:{en:'Word-by-word English captions',hi:'शब्द-दर-शब्द इंग्लिश कैप्शन',mr:'शब्दाशब्द इंग्लिश कॅप्शन'}},
 {icon:'🔤',price:null,name:{en:'Subtitles',hi:'सबटाइटल',mr:'सबटायटल'},detail:{en:'Hindi, Marathi, English',hi:'हिंदी, मराठी, इंग्लिश',mr:'हिंदी, मराठी, इंग्लिश'}},
 {icon:'🎬',price:null,name:{en:'Intro / Outro',hi:'इंट्रो / आउट्रो',mr:'इंट्रो / आउट्रो'},detail:{en:'Channel intro and outro',hi:'चैनल इंट्रो और आउट्रो',mr:'चॅनल इंट्रो आणि आउट्रो'}},
 {icon:'🎞️',price:null,name:{en:'Color grading',hi:'कलर ग्रेडिंग',mr:'कलर ग्रेडिंग'},detail:{en:'Cinematic colours',hi:'सिनेमैटिक रंग',mr:'सिनेमॅटिक रंग'}},
 {icon:'🎤',price:null,name:{en:'Hindi voiceover',hi:'हिंदी वॉयसओवर',mr:'हिंदी व्हॉइसओव्हर'},detail:{en:'Clear Hindi voice for videos',hi:'वीडियो के लिए साफ़ हिंदी आवाज़',mr:'व्हिडिओसाठी स्पष्ट हिंदी आवाज'}}];
// ===========================================
var $=function(i){return document.getElementById(i)};
function esc(s){return String(s).replace(/[<>&]/g,'')}

var T={
en:{nav_home:'Home',nav_services:'Services',nav_order:'Order',nav_challenge:'Challenge',nav_about:'About',
hero_pill:'🎬 Official editing studio',hero_t1:'Your videos,',hero_t2:'edited like cinema.',
hero_sub:'Beat-synced cuts, word-by-word captions, clean grading. By a young editor on a mission.',
cta_order:'Order your edit',cta_chal:'See the ₹55,000 challenge',
stat1:'Beat-sync',stat2:'Fast delivery',stat3:'Colour grading',
home_strip_t:'What I edit',how_t:'How it works',
s1t:'Send your video',s1d:'Drive link, set to "Anyone with the link"',s2t:'Tell me the style',s2d:'Reel, vlog, long video',
s3t:'I edit it',s3d:'Hook, cuts, captions, SFX',s4t:'You get it back',s4d:'Review and ask for changes',
home_see:'✨ See services & prices',
sv_pill:'What I edit',sv_h1:'Pick your edit',sv_sub:'Simple prices, no hidden charges. Students and new creators welcome.',
notebar:'💬 Price can be lowered too! Message me on Instagram',sv_order:'📝 Order now',
or_pill:'Order',or_h1:'Order in 1 minute',or_sub:'Fill this and I will contact you on WhatsApp or Instagram.',
f_name:'Your name',f_name_ph:'e.g. Rahul',f_num:'WhatsApp number',f_num_ph:'10-digit number',f_opt:'(optional)',
f_link:'Link to your video (Google Drive / YouTube)',f_link_ph:'Paste link here',f_link_hint:'Tip: set the Drive link to "Anyone with the link".',
f_type:'Edit type',f_notes:'Notes (style, music, deadline)',f_notes_ph:'Anything I should know',
ch_pill:'🏆 The challenge',ch_h1:'₹55,000 Editing Challenge',ch_sub:'One student. One goal. Every edit counts.',
ch_goal:'THE GOAL',ch_goal2:'in 5-6 months, earned only by editing videos for creators',ch_what:'📖 What is this?',
ch_s1:'I am Pratik, a 10th-grade student. My challenge: earn ₹55,000 in 5-6 months by editing videos for other creators at student-friendly prices. The goal at the end: a Samsung Galaxy S25, bought fully from editing work.',
ch_s2:'I post the journey daily - Day 1, Day 2, Day 3... - on my YouTube channel and Instagram. Every order on this website takes the challenge one step forward.',
ch_help:'🙌 How you can be part of it',ch_b1:'Order an edit',ch_b2:'Watch the Days',ch_b3:'Share the site',
ch_yt:'▶️ Follow the challenge on YouTube',ch_support:'🎬 Support me - order an edit',
ab_pill:'👤 About',ab_h1:'About me',ab_sub:'The person behind PS CINEMATIC.',
ab_bio:'PS CINEMATIC is run by Pratik - beat-sync edits, reels, YouTube videos and kinetic typography at prices students and new creators can afford.',
ab_call:'Call or WhatsApp',ab_ig:'DM on Instagram',ab_yt:'YouTube channel',ab_see:'🏆 See my ₹55,000 Challenge',
lang_l:'Language:',bot_sub:'Ask about packages, prices, orders',bot_ph:'Type your question...',bot_send:'Send',
dm_price:'Ask price on Instagram DM',send:'Send order',send_p:'Send order - ₹',sending:'Sending...',
err_fill:'Please fill name, WhatsApp number and video link.',err_num:'Please enter a valid 10-digit WhatsApp number.',
err_fail:'Could not send. Check internet and try again.',ok_sent:'🎉 Order sent! Thank you ',
ok_sent2:'. I will contact you soon.',
pf_title:'Login / My profile',pf_sub:'Save your name and number once, order faster.',pf_save:'Save profile',
pf_note:"Saved only in this phone's browser. No password needed. Clearing browser data removes it.",
pf_alert_name:'Please enter your name.',pf_alert_num:'Please enter a valid 10-digit WhatsApp number.',
pf_hi:'Hi, ',pf_dev:'profile on this device',pf_out:'Log out',
pf_out_c:'Log out from this device? Your order history stays saved.',
h_title:'🧾 My orders',h_dev:'(this device)',h_empty:'No orders yet from this device.<br>Your orders will show here after you place one.',
h_clear:'Clear my order history',h_clear_c:'Delete all saved orders from this device?',
chips:['Packages','Price','How to order','Delivery','Challenge','Contact']},
hi:{nav_home:'होम',nav_services:'सेवाएं',nav_order:'ऑर्डर',nav_challenge:'चैलेंज',nav_about:'परिचय',
hero_pill:'🎬 ऑफिशियल एडिटिंग स्टूडियो',hero_t1:'आपके वीडियो,',hero_t2:'सिनेमा जैसे एडिट।',
hero_sub:'बीट-सिंक कट्स, शब्द-दर-शब्द कैप्शन, क्लीन ग्रेडिंग। एक युवा एडिटर का मिशन।',
cta_order:'अपना एडिट ऑर्डर करें',cta_chal:'₹55,000 चैलेंज देखें',
stat1:'बीट-सिंक',stat2:'तेज़ डिलीवरी',stat3:'कलर ग्रेडिंग',
home_strip_t:'मैं क्या एडिट करता हूँ',how_t:'कैसे काम करता है',
s1t:'वीडियो भेजें',s1d:'Drive लिंक, "Anyone with the link" पर सेट करें',s2t:'स्टाइल बताएं',s2d:'रील, व्लॉग, लंबा वीडियो',
s3t:'मैं एडिट करता हूँ',s3d:'हुक, कट्स, कैप्शन, SFX',s4t:'एडिट वापस पाएं',s4d:'देखें और बदलाव बताएं',
home_see:'✨ सेवाएं और कीमतें देखें',
sv_pill:'मैं क्या एडिट करता हूँ',sv_h1:'अपना एडिट चुनें',sv_sub:'सीधी कीमतें, कोई छिपा चार्ज नहीं। स्टूडेंट और नए क्रिएटर स्वागत।',
notebar:'💬 कीमत कम भी हो सकती है! Instagram पर मैसेज करें',sv_order:'📝 अभी ऑर्डर करें',
or_pill:'ऑर्डर',or_h1:'1 मिनट में ऑर्डर',or_sub:'यह भरें, मैं WhatsApp या Instagram पर संपर्क करूँगा।',
f_name:'आपका नाम',f_name_ph:'जैसे Rahul',f_num:'WhatsApp नंबर',f_num_ph:'10 अंकों का नंबर',f_opt:'(ऐच्छिक)',
f_link:'वीडियो की लिंक (Google Drive / YouTube)',f_link_ph:'लिंक यहाँ पेस्ट करें',f_link_hint:'टिप: Drive लिंक को "Anyone with the link" पर सेट करें।',
f_type:'एडिट टाइप',f_notes:'नोट्स (स्टाइल, म्यूज़िक, डेडलाइन)',f_notes_ph:'कोई खास बात हो तो लिखें',
ch_pill:'🏆 चैलेंज',ch_h1:'₹55,000 एडिटिंग चैलेंज',ch_sub:'एक स्टूडेंट। एक गोल। हर एडिट मायने रखता है।',
ch_goal:'गोल',ch_goal2:'5-6 महीने में, सिर्फ क्रिएटर्स के वीडियो एडिट करके कमाई',ch_what:'📖 यह क्या है?',
ch_s1:'मैं प्रतीक, 10वीं का स्टूडेंट। मेरा चैलेंज: 5-6 महीनों में ₹55,000 कमाना, दूसरे क्रिएटर्स के वीडियो एडिट करके, स्टूडेंट-फ्रेंडली कीमतों पर। आखिरी गोल: Samsung Galaxy S25, पूरी तरह एडिटिंग की कमाई से।',
ch_s2:'मैं सफर रोज़ डालता हूँ - Day 1, Day 2, Day 3... - अपने YouTube चैनल और Instagram पर। इस वेबसाइट का हर ऑर्डर चैलेंज को एक कदम आगे ले जाता है।',
ch_help:'🙌 आप कैसे जुड़ सकते हैं',ch_b1:'एडिट ऑर्डर करें',ch_b2:'Days देखें',ch_b3:'साइट शेयर करें',
ch_yt:'▶️ YouTube पर चैलेंज फॉलो करें',ch_support:'🎬 सपोर्ट करें - एडिट ऑर्डर करें',
ab_pill:'👤 परिचय',ab_h1:'मेरे बारे में',ab_sub:'PS CINEMATIC के पीछे का इंसान।',
ab_bio:'PS CINEMATIC चलाता है प्रतीक - बीट-सिंक एडिट्स, रील्स, YouTube वीडियो और काइनेटिक टाइपोग्राफी, ऐसी कीमतों पर जो स्टूडेंट और नए क्रिएटर दे सकें।',
ab_call:'कॉल या WhatsApp',ab_ig:'Instagram पर DM',ab_yt:'YouTube चैनल',ab_see:'🏆 मेरा ₹55,000 चैलेंज देखें',
lang_l:'भाषा:',bot_sub:'पैकेज, कीमत, ऑर्डर पूछें',bot_ph:'अपना सवाल लिखें...',bot_send:'भेजें',
dm_price:'कीमत Instagram DM पर पूछें',send:'ऑर्डर भेजें',send_p:'ऑर्डर भेजें - ₹',sending:'भेजा जा रहा है...',
err_fill:'कृपया नाम, WhatsApp नंबर और वीडियो लिंक भरें।',err_num:'कृपया सही 10 अंकों का WhatsApp नंबर डालें।',
err_fail:'भेजा नहीं जा सका। इंटरनेट देखकर फिर कोशिश करें।',ok_sent:'🎉 ऑर्डर भेज दिया! धन्यवाद ',
ok_sent2:'। मैं जल्दी संपर्क करूँगा।',
pf_title:'लॉगिन / मेरी प्रोफाइल',pf_sub:'नाम और नंबर एक बार सेव करें, ऑर्डर जल्दी होगा।',pf_save:'प्रोफाइल सेव करें',
pf_note:'यह सिर्फ इस फोन के ब्राउज़र में सेव होता है। पासवर्ड नहीं चाहिए। ब्राउज़र डेटा साफ़ करने से हट जाएगा।',
pf_alert_name:'कृपया अपना नाम डालें।',pf_alert_num:'कृपया सही 10 अंकों का WhatsApp नंबर डालें।',
pf_hi:'नमस्ते, ',pf_dev:'इस डिवाइस की प्रोफाइल',pf_out:'लॉग आउट',
pf_out_c:'इस डिवाइस से लॉग आउट करें? आपकी ऑर्डर हिस्ट्री सेव रहेगी।',
h_title:'🧾 मेरे ऑर्डर',h_dev:'(इस डिवाइस)',h_empty:'इस डिवाइस से अभी कोई ऑर्डर नहीं।<br>ऑर्डर करने के बाद यहाँ दिखेगा।',
h_clear:'मेरी ऑर्डर हिस्ट्री मिटाएं',h_clear_c:'इस डिवाइस के सभी सेव ऑर्डर मिटाएं?',
chips:['पैकेज','कीमत','ऑर्डर कैसे','डिलीवरी','चैलेंज','संपर्क']},
mr:{nav_home:'होम',nav_services:'सेवा',nav_order:'ऑर्डर',nav_challenge:'चॅलेंज',nav_about:'परिचय',
hero_pill:'🎬 ऑफिशियल एडिटिंग स्टुडिओ',hero_t1:'तुमचे व्हिडिओ,',hero_t2:'सिनेमासारखे एडिट.',
hero_sub:'बीट-सिंक कट्स, शब्दाशब्द कॅप्शन, क्लीन ग्रेडिंग. एका तरुण एडिटरचं मिशन.',
cta_order:'तुमचा एडिट ऑर्डर करा',cta_chal:'₹55,000 चॅलेंज पाहा',
stat1:'बीट-सिंक',stat2:'जलद डिलिव्हरी',stat3:'कलर ग्रेडिंग',
home_strip_t:'मी काय एडिट करतो',how_t:'कसं काम करतं',
s1t:'व्हिडिओ पाठवा',s1d:'Drive लिंक, "Anyone with the link" वर सेट करा',s2t:'स्टाइल सांगा',s2d:'रील, व्ह्लॉग, मोठा व्हिडिओ',
s3t:'मी एडिट करतो',s3d:'हुक, कट्स, कॅप्शन, SFX',s4t:'एडिट परत मिळेल',s4d:'पाहा आणि बदल सांगा',
home_see:'✨ सेवा आणि किमती पाहा',
sv_pill:'मी काय एडिट करतो',sv_h1:'तुमचा एडिट निवडा',sv_sub:'सोप्या किमती, लपलेले चार्ज नाही. विद्यार्थी आणि नवे क्रिएटर स्वागत.',
notebar:'💬 किंमत कमी पण होऊ शकते! Instagram वर मेसेज करा',sv_order:'📝 आता ऑर्डर करा',
or_pill:'ऑर्डर',or_h1:'1 मिनिटात ऑर्डर',or_sub:'हे भरा, मी WhatsApp किंवा Instagram वर संपर्क करेन.',
f_name:'तुमचं नाव',f_name_ph:'उदा. Rahul',f_num:'WhatsApp नंबर',f_num_ph:'10 अंकी नंबर',f_opt:'(ऐच्छिक)',
f_link:'व्हिडिओची लिंक (Google Drive / YouTube)',f_link_ph:'लिंक इथे पेस्ट करा',f_link_hint:'टीप: Drive लिंक "Anyone with the link" वर सेट करा.',
f_type:'एडिटचा प्रकार',f_notes:'नोट्स (स्टाइल, म्युझिक, डेडलाइन)',f_notes_ph:'काही खास असल्यास लिहा',
ch_pill:'🏆 चॅलेंज',ch_h1:'₹55,000 एडिटिंग चॅलेंज',ch_sub:'एक विद्यार्थी. एक गोल. प्रत्येक एडिट मोलाचा.',
ch_goal:'गोल',ch_goal2:'5-6 महिन्यांत, फक्त क्रिएटर्सचे व्हिडिओ एडिट करून कमाई',ch_what:'📖 हे काय आहे?',
ch_s1:'मी प्रतिक, दहावीचा विद्यार्थी. माझं चॅलेंज: 5-6 महिन्यांत ₹55,000 कमवायचे, इतर क्रिएटर्सचे व्हिडिओ स्वस्त किमतीत एडिट करून. शेवटचा गोल: Samsung Galaxy S25, पूर्णपणे एडिटिंगच्या कमाईतून.',
ch_s2:'मी प्रवास रोज टाकतो - Day 1, Day 2, Day 3... - माझ्या YouTube चॅनल आणि Instagram वर. या वेबसाइटवरील प्रत्येक ऑर्डर चॅलेंज एक पाऊल पुढे नेते.',
ch_help:'🙌 तुम्ही कसे सहभागी व्हाल',ch_b1:'एडिट ऑर्डर करा',ch_b2:'Days पाहा',ch_b3:'साइट शेअर करा',
ch_yt:'▶️ YouTube वर चॅलेंज फॉलो करा',ch_support:'🎬 सपोर्ट करा - एडिट ऑर्डर करा',
ab_pill:'👤 परिचय',ab_h1:'माझ्याबद्दल',ab_sub:'PS CINEMATIC मागची व्यक्ती.',
ab_bio:'PS CINEMATIC चालवतो प्रतिक - बीट-सिंक एडिट्स, रील्स, YouTube व्हिडिओ आणि कायनेटिक टायपोग्राफी, विद्यार्थी आणि नव्या क्रिएटर्सना परवडणाऱ्या किमतीत.',
ab_call:'कॉल किंवा WhatsApp',ab_ig:'Instagram वर DM',ab_yt:'YouTube चॅनल',ab_see:'🏆 माझं ₹55,000 चॅलेंज पाहा',
lang_l:'भाषा:',bot_sub:'पॅकेज, किंमत, ऑर्डर विचारा',bot_ph:'तुमचा प्रश्न लिहा...',bot_send:'पाठवा',
dm_price:'किंमत Instagram DM वर विचारा',send:'ऑर्डर पाठवा',send_p:'ऑर्डर पाठवा - ₹',sending:'पाठवत आहे...',
err_fill:'कृपया नाव, WhatsApp नंबर आणि व्हिडिओ लिंक भरा.',err_num:'कृपया बरोबर 10 अंकी WhatsApp नंबर टाका.',
err_fail:'पाठवता आले नाही. इंटरनेट तपासून पुन्हा प्रयत्न करा.',ok_sent:'🎉 ऑर्डर पाठवली! धन्यवाद ',
ok_sent2:'. मी लवकरच संपर्क करेन.',
pf_title:'लॉगिन / माझी प्रोफाइल',pf_sub:'नाव आणि नंबर एकदा सेव्ह करा, ऑर्डर लवकर होईल.',pf_save:'प्रोफाइल सेव्ह करा',
pf_note:'हे फक्त या फोनच्या ब्राउझरमध्ये सेव्ह होतं. पासवर्ड लागत नाही. ब्राउझर डेटा पुसल्यास हे ही जाईल.',
pf_alert_name:'कृपया तुमचं नाव टाका.',pf_alert_num:'कृपया बरोबर 10 अंकी WhatsApp नंबर टाका.',
pf_hi:'नमस्कार, ',pf_dev:'या डिव्हाइसची प्रोफाइल',pf_out:'लॉग आउट',
pf_out_c:'या डिव्हाइसवरून लॉग आउट करायचं? तुमची ऑर्डर हिस्ट्री सेव्ह राहील.',
h_title:'🧾 माझे ऑर्डर',h_dev:'(हे डिव्हाइस)',h_empty:'या डिव्हाइसवरून अजून ऑर्डर नाही.<br>ऑर्डर केल्यावर इथे दिसेल.',
h_clear:'माझी ऑर्डर हिस्ट्री पुसा',h_clear_c:'या डिव्हाइसवरील सर्व सेव्ह ऑर्डर पुसायच्या?',
chips:['पॅकेज','किंमत','ऑर्डर कसं','डिलिव्हरी','चॅलेंज','संपर्क']}};

// ===== part 2: language engine + UI logic =====
var LATEST_DAY=8; // PRATIK: change when you post a new Day video
var T2={
en:{nav_helper:'🤖 Helper',wel_sub:'Choose your language',wel_login:'Login (optional) - save your name and number for faster orders',wel_go:'Enter the site →',
why_t:'Why PS CINEMATIC',w1t:'Student prices',w1d:'Fits a student or new creator budget',w2t:'Direct chat',w2d:'You talk to the editor himself',w3t:'Fast delivery',w3d:'Quick turnaround on every order',w4t:'Beat-sync specialist',w4d:'Cuts that land exactly on the beat',
samp_t:'See the difference',ba_raw:'RAW',ba_edit:'EDITED ✨',samp_note:'Effect demo - real work samples are on my YouTube channel.',
quote_t:'🧮 Quote calculator',quote_total:'Estimated total',quote_order:'📝 Order selected',quote_dm:'Services without a price are quoted on Instagram DM.',quote_note:'Starting prices. Final price is fixed on chat before work starts.',
faq_t:'❓ FAQ',f1q:'How long does an edit take?',f1a:'Short edits are usually quick - I confirm the exact time after you order. Urgent? DM me on Instagram.',f2q:'How do I pay?',f2a:'Placing an order is free. We fix the final price and payment on WhatsApp or Instagram after you order.',f3q:'Can I ask for changes?',f3a:'Yes - watch the edit and tell me what to change.',f4q:'Which languages do you work in?',f4a:'Editing, captions and subtitles in Hindi, Marathi and English.',
day_t:'📅 Challenge days',day_latest:'Latest',day_note:'New Day videos come on YouTube and Instagram. The amount earned so far is shared in the Day videos, not here.',
hp_h1:'Ask PS Helper',hp_sub:'Questions about editing, prices, orders - or just say hi.',hp_note:'PS Helper is a small on-page bot (not a full AI). If it cannot answer, WhatsApp or DM Pratik.',
img_sorry:'I got your image, but I cannot see images yet. Please describe it, or send it to Pratik on WhatsApp +91 94050 50230 or Instagram @challenger_editor_.',order_here:'Order →'},
hi:{nav_helper:'🤖 हेल्पर',wel_sub:'अपनी भाषा चुनें',wel_login:'लॉगिन (ऐच्छिक) - तेज़ ऑर्डर के लिए नाम और नंबर सेव करें',wel_go:'साइट में जाएं →',
why_t:'PS CINEMATIC क्यों',w1t:'स्टूडेंट कीमतें',w1d:'स्टूडेंट या नए क्रिएटर के बजट में',w2t:'सीधी बात',w2d:'आप खुद एडिटर से बात करते हैं',w3t:'तेज़ डिलीवरी',w3d:'हर ऑर्डर जल्दी वापस',w4t:'बीट-सिंक स्पेशलिस्ट',w4d:'हर कट ठीक बीट पर',
samp_t:'फ़र्क खुद देखें',ba_raw:'RAW',ba_edit:'EDITED ✨',samp_note:'यह इफ़ेक्ट डेमो है - असली काम के सैंपल मेरे YouTube चैनल पर हैं।',
quote_t:'🧮 कोट कैलकुलेटर',quote_total:'अनुमानित कुल',quote_order:'📝 चुना हुआ ऑर्डर करें',quote_dm:'बिना कीमत वाली सेवाओं का रेट Instagram DM पर बताया जाता है।',quote_note:'ये शुरुआती कीमतें हैं। असली कीमत काम शुरू होने से पहले चैट पर तय होती है।',
faq_t:'❓ सवाल-जवाब',f1q:'एडिट में कितना समय लगता है?',f1a:'छोटे एडिट जल्दी हो जाते हैं - ऑर्डर के बाद सही समय बता दूँगा। जल्दी है तो Instagram पर DM करें।',f2q:'पेमेंट कैसे करूँ?',f2a:'ऑर्डर करना फ्री है। असली कीमत और पेमेंट ऑर्डर के बाद WhatsApp या Instagram पर तय होती है।',f3q:'बदलाव करवा सकता हूँ?',f3a:'हाँ - एडिट देखें और बताएं क्या बदलना है।',f4q:'कौन सी भाषाओं में काम करते हो?',f4a:'हिंदी, मराठी और इंग्लिश में एडिटिंग, कैप्शन और सबटाइटल।',
day_t:'📅 चैलेंज के दिन',day_latest:'ताज़ा',day_note:'नए Day वीडियो YouTube और Instagram पर आते हैं। अब तक की कमाई Day वीडियो में बताई जाती है, यहाँ नहीं।',
hp_h1:'PS Helper से पूछें',hp_sub:'एडिटिंग, कीमत, ऑर्डर के सवाल - या बस हाय बोलें।',hp_note:'PS Helper एक छोटा ऑन-पेज बॉट है (पूरा AI नहीं)। जो न बता सके, उसके लिए प्रतीक को WhatsApp या DM करें।',
img_sorry:'आपकी फोटो मिल गई, पर मैं अभी फोटो देख नहीं सकता। कृपया उसके बारे में लिखें, या प्रतीक को WhatsApp +91 94050 50230 या Instagram @challenger_editor_ पर भेजें।',order_here:'ऑर्डर →'},
mr:{nav_helper:'🤖 हेल्पर',wel_sub:'तुमची भाषा निवडा',wel_login:'लॉगिन (ऐच्छिक) - जलद ऑर्डरसाठी नाव आणि नंबर सेव्ह करा',wel_go:'साइटमध्ये जा →',
why_t:'PS CINEMATIC का',w1t:'विद्यार्थी किमती',w1d:'विद्यार्थी किंवा नव्या क्रिएटरच्या बजेटमध्ये',w2t:'थेट संवाद',w2d:'तुम्ही थेट एडिटरशी बोलता',w3t:'जलद डिलिव्हरी',w3d:'प्रत्येक ऑर्डर लवकर परत',w4t:'बीट-सिंक स्पेशलिस्ट',w4d:'प्रत्येक कट अगदी बीटवर',
samp_t:'फरक स्वतः पाहा',ba_raw:'RAW',ba_edit:'EDITED ✨',samp_note:'हा इफेक्ट डेमो आहे - खरे काम माझ्या YouTube चॅनलवर आहे.',
quote_t:'🧮 कोट कॅलक्युलेटर',quote_total:'अंदाजे एकूण',quote_order:'📝 निवडलेले ऑर्डर करा',quote_dm:'किंमत नसलेल्या सेवांचा रेट Instagram DM वर सांगितला जातो.',quote_note:'ह्या सुरुवातीच्या किमती आहेत. अंतिम किंमत काम सुरू होण्याआधी चॅटवर ठरते.',
faq_t:'❓ प्रश्न-उत्तरे',f1q:'एडिटला किती वेळ लागतो?',f1a:'छोटे एडिट लवकर होतात - ऑर्डरनंतर अचूक वेळ सांगेन. घाई असल्यास Instagram वर DM करा.',f2q:'पेमेंट कसं करायचं?',f2a:'ऑर्डर करणं फ्री आहे. अंतिम किंमत आणि पेमेंट ऑर्डरनंतर WhatsApp किंवा Instagram वर ठरते.',f3q:'बदल करता येतात का?',f3a:'हो - एडिट पाहा आणि काय बदलायचं ते सांगा.',f4q:'कोणकोणत्या भाषांत काम करतो?',f4a:'हिंदी, मराठी आणि इंग्लिशमध्ये एडिटिंग, कॅप्शन आणि सबटायटल.',
day_t:'📅 चॅलेंजचे दिवस',day_latest:'ताजा',day_note:'नवे Day व्हिडिओ YouTube आणि Instagram वर येतात. आतापर्यंतची कमाई Day व्हिडिओमध्ये सांगितली जाते, इथे नाही.',
hp_h1:'PS Helper ला विचारा',hp_sub:'एडिटिंग, किंमत, ऑर्डरचे प्रश्न - किंवा फक्त हाय म्हणा.',hp_note:'PS Helper हा छोटा ऑन-पेज बॉट आहे (पूर्ण AI नाही). जे सांगू शकत नाही त्यासाठी प्रतिकला WhatsApp किंवा DM करा.',
img_sorry:'तुमचा फोटो मिळाला, पण मी अजून फोटो पाहू शकत नाही. कृपया त्याबद्दल लिहा, किंवा प्रतिकला WhatsApp +91 94050 50230 किंवा Instagram @challenger_editor_ वर पाठवा.',order_here:'ऑर्डर →'}};
for(var L in T2){for(var k in T2[L]){T[L][k]=T2[L][k]}}

var LANG=localStorage.getItem('psc_lang')||'en';
function t(k){return (T[LANG]&&T[LANG][k])||T.en[k]||k}
function setLang(l){
 LANG=T[l]?l:'en';try{localStorage.setItem('psc_lang',LANG)}catch(e){}
 document.documentElement.lang=LANG;syncBLANG();
 var els=document.querySelectorAll('[data-i18n]');
 for(var i=0;i<els.length;i++){var k=els[i].getAttribute('data-i18n');if(t(k))els[i].textContent=t(k)}
 var ph=document.querySelectorAll('[data-i18n-ph]');
 for(var j=0;j<ph.length;j++){var k2=ph[j].getAttribute('data-i18n-ph');if(t(k2))ph[j].placeholder=t(k2)}
 var lb=document.querySelectorAll('.langbtn');
 for(var m=0;m<lb.length;m++)lb[m].classList.toggle('cur',lb[m].getAttribute('data-lang')===LANG);
 renderServices();renderQuote();renderFaq();renderDays();renderReel();renderProf();renderHist();renderOpts();renderOwn();fillForm();upd();buildChips();
}
document.addEventListener('click',function(e){
 var b=e.target.closest('.langbtn');if(b)setLang(b.getAttribute('data-lang'));
});

/* ----- services grid + order select ----- */
function svcPriceHtml(s){
 if(s.price)return '<div class="pr">₹'+s.price+'</div>';
 return '<div class="pr dm">'+t('dm_price')+'</div>';
}
function renderServices(){
 $('prices').innerHTML=SERVICES.map(function(s,i){
  return '<div class="svc"><div class="ic">'+s.icon+'</div><b>'+esc(s.name[LANG]||s.name.en)+'</b><small>'+esc(s.detail[LANG]||s.detail.en)+'</small>'+svcPriceHtml(s)
  +'<a class="linkbtn svcgo" data-svc="'+i+'" href="#order">'+t('order_here')+'</a></div>'}).join('');
 var links=document.querySelectorAll('.svcgo');
 for(var i=0;i<links.length;i++)links[i].onclick=(function(n){return function(){$('edit').value=n;upd()}})(i);
 $('edit').innerHTML=SERVICES.map(function(s,i){
  return '<option value="'+i+'">'+esc(s.name[LANG]||s.name.en)+(s.price?' - ₹'+s.price:' - DM')+'</option>'}).join('');
}
function priceStr(s){return s.price?'₹'+s.price:'DM'}

/* ----- quote calculator ----- */
var QP=[0,1,3]; // indexes of priced services
function renderQuote(){
 var h=QP.map(function(i){var s=SERVICES[i];
  return '<label class="qrow"><input type="checkbox" class="qchk" value="'+i+'"><span class="t">'+s.icon+' '+esc(s.name[LANG]||s.name.en)+'</span><span class="pr">₹'+s.price+'</span></label>'}).join('');
 h+='<div class="qtot"><span>'+t('quote_total')+'</span><b id="qsum">₹0</b></div>';
 h+='<p class="qnote">'+t('quote_note')+' '+t('quote_dm')+'</p>';
 h+='<button id="qorder">'+t('quote_order')+'</button>';
 $('quotebox').innerHTML=h;
 var c=document.querySelectorAll('.qchk');
 function sum(){var tot=0;for(var i=0;i<c.length;i++)if(c[i].checked)tot+=SERVICES[+c[i].value].price;$('qsum').textContent='₹'+tot}
 for(var j=0;j<c.length;j++)c[j].onchange=sum;
 $('qorder').onclick=function(){
  var first=-1,names=[];
  for(var i=0;i<c.length;i++)if(c[i].checked){var s=SERVICES[+c[i].value];names.push(s.name.en);if(first<0)first=+c[i].value}
  if(first>=0){$('edit').value=first;upd();
   if(names.length>1)$('notes').value='Quote calculator: '+names.join(' + ');
   location.hash='#order'}
 };
}

/* ----- FAQ ----- */
function renderFaq(){
 var h='';
 for(var i=1;i<=4;i++)h+='<details class="faq"><summary>'+t('f'+i+'q')+'</summary><p>'+t('f'+i+'a')+'</p></details>';
 $('faqbox').innerHTML=h;
}

/* ----- challenge day grid ----- */
function renderDays(){
 var h='';
 for(var d=1;d<=LATEST_DAY;d++){
  h+='<a class="daychip'+(d===LATEST_DAY?' latest':'')+'" href="https://www.youtube.com/@Challenger_editor" target="_blank" rel="noopener">Day '+d+(d===LATEST_DAY?' • '+t('day_latest'):'')+'</a>'}
 $('daygrid').innerHTML=h;
}

/* ----- home reel marquee ----- */
function renderReel(){
 var f=SERVICES.map(function(s,i){return '<div class="reelframe'+(i%4===1?' red':'')+'"><i>'+s.icon+'</i><b>'+esc(s.name[LANG]||s.name.en)+'</b></div>'}).join('');
 $('reeltrack').innerHTML=f+f;
}

/* ----- order form ----- */
function upd(){var s=SERVICES[$('edit').value];$('go').textContent=s&&s.price?t('send_p')+s.price:t('send')}
$('edit').onchange=upd;
$('contact').addEventListener('input',function(){this.value=this.value.replace(/[^0-9]/g,'')});
$('go').onclick=function(){
 var n=$('name').value.trim(),c=$('contact').value.trim(),g=$('ig').value.trim(),l=$('link').value.trim(),m=$('msg');
 if(!n||!c||!l){m.className='err';m.textContent=t('err_fill');return}
 if(c.length<10){m.className='err';m.textContent=t('err_num');return}
 var s=SERVICES[$('edit').value];$('go').disabled=true;$('go').textContent=t('sending');
 var oid='PSC-'+Date.now().toString(36).toUpperCase().slice(-6);
 var olines=collectOptLines();
 var body='Name: '+n+'\nWhatsApp: '+c+(g?'\nInstagram: '+g:'')+'\nVideo link: '+l+'\nEdit: '+s.name.en+' - '+(s.price?'Rs '+s.price:'price on DM')+'\nOrder ID: '+oid+(olines.length?'\n'+olines.join('\n'):'')+'\nNotes: '+($('notes').value.trim()||'-');
 fetch('https://ntfy.sh/'+NTFY_TOPIC,{method:'POST',body:body,headers:{Title:'New edit order - '+n,Tags:'clapper,moneybag',Priority:'4'}})
 .then(function(r){if(!r.ok)throw 0;
  saveOrder({id:oid,iso:new Date().toISOString().slice(0,10),date:new Date().toLocaleDateString('en-IN',{day:'numeric',month:'short'}),pack:s.name[LANG]||s.name.en,price:priceStr(s)});
  renderHist();
  $('box').innerHTML='<p class="ok">'+t('ok_sent')+esc(n)+t('ok_sent2')+'</p><p class="ok okid">'+t('ok_id')+' <b>'+oid+'</b><br><small>'+t('ok_save')+'</small></p>'})
 .catch(function(){$('go').disabled=false;upd();m.className='err';m.textContent=t('err_fail')})};

/* ----- profile (saved on this device only) ----- */
function getProf(){try{return JSON.parse(localStorage.getItem('psc_profile')||'null')}catch(e){return null}}
function setProf(p){if(p)localStorage.setItem('psc_profile',JSON.stringify(p));else localStorage.removeItem('psc_profile')}
function getOrders(){try{return JSON.parse(localStorage.getItem('psc_orders')||'[]')}catch(e){return[]}}
function saveOrder(o){var a=getOrders();a.unshift(o);try{localStorage.setItem('psc_orders',JSON.stringify(a.slice(0,50)))}catch(e){}}

function renderProf(){
 var p=getProf(),b=$('profbox');
 if(!p){
  b.innerHTML='<div class="hello"><span class="mini">👤</span><span class="t"><b>'+t('pf_title')+'</b><small>'+t('pf_sub')+'</small></span></div>'
  +'<label><span>'+t('f_name')+'</span><input id="pfname" placeholder="'+esc(t('f_name_ph'))+'"></label>'
  +'<label><span>'+t('f_num')+'</span><input id="pfnum" type="tel" inputmode="numeric" pattern="[0-9]*" maxlength="15" placeholder="'+esc(t('f_num_ph'))+'"></label>'
  +'<button id="pfsave">'+t('pf_save')+'</button>'
  +'<p class="mini-note">'+t('pf_note')+'</p>';
  $('pfnum').addEventListener('input',function(){this.value=this.value.replace(/[^0-9]/g,'')});
  $('pfsave').onclick=function(){
   var n=$('pfname').value.trim(),c=$('pfnum').value.trim();
   if(!n){alert(t('pf_alert_name'));return}
   if(c.length<10){alert(t('pf_alert_num'));return}
   setProf({name:n,num:c});renderProf();fillForm();renderHist();
  };
 }else{
  b.innerHTML='<div class="hello"><span class="mini">'+esc(p.name.charAt(0).toUpperCase())+'</span><span class="t"><b>'+t('pf_hi')+esc(p.name)+'!</b><small>'+esc(p.num)+' · '+t('pf_dev')+'</small></span><button class="linkbtn" id="pfout">'+t('pf_out')+'</button></div>';
  $('pfout').onclick=function(){if(confirm(t('pf_out_c'))){setProf(null);renderProf();fillForm();renderHist()}};
 }
}
function fillForm(){
 var p=getProf();
 if(p){$('name').value=p.name;$('contact').value=p.num}
}
function renderHist(){
 var a=getOrders(),b=$('histbox'),p=getProf(),html='<b style="font-size:15px">'+t('h_title')+' '+(p?'':t('h_dev'))+'</b>';
 if(!a.length){html+='<p class="empty">'+t('h_empty')+'</p>'}
 else{html+=a.map(function(o){var ago=o.iso?fmtAgo(o.iso):'';return '<div class="hist"><span class="d">'+esc(o.date)+'</span><span class="t">'+esc(o.pack)+(o.id?'<small class="hid">'+esc(o.id)+(ago?' · '+ago:'')+'</small>':'')+'</span><span class="pr">'+esc(o.price)+'</span></div>'}).join('')}
 if(a.length){html+='<div style="text-align:right;margin-top:8px"><button class="linkbtn" id="histclr">'+t('h_clear')+'</button></div>'}
 b.innerHTML=html;
 var c=$('histclr');if(c)c.onclick=function(){if(confirm(t('h_clear_c'))){localStorage.removeItem('psc_orders');renderHist()}};
}

/* ----- welcome overlay ----- */
(function(){
 var w=$('welcome');
 try{if(localStorage.getItem('psc_welcomed'))return}catch(e){}
 w.classList.add('show');
 var wl=document.querySelectorAll('.wellang');
 for(var i=0;i<wl.length;i++)wl[i].onclick=function(){
  for(var j=0;j<wl.length;j++)wl[j].classList.remove('cur');
  this.classList.add('cur');setLang(this.getAttribute('data-wlang'));
 };
 for(var k=0;k<wl.length;k++)if(wl[k].getAttribute('data-wlang')===LANG)wl[k].classList.add('cur');
 $('welnum').addEventListener('input',function(){this.value=this.value.replace(/[^0-9]/g,'')});
 $('welgo').onclick=function(){
  var n=$('welname').value.trim(),c=$('welnum').value.trim();
  if(n&&c.length>=10)setProf({name:n,num:c});
  try{localStorage.setItem('psc_welcomed','1')}catch(e){}
  w.classList.remove('show');renderProf();fillForm();renderHist();
 };
})();

/* ----- before/after demo slider ----- */
$('barange').addEventListener('input',function(){$('baafter').style.clipPath='inset(0 0 0 '+this.value+'%)'});

// ===== part 3: PS Helper chatbot (on-device, rules; EN/HI/MR) =====
function plist(){return SERVICES.map(function(s){return s.icon+' '+s.name.en+' - '+(s.price?'Rs '+s.price:'DM')}).join('\n')}
var C='\n📞 WhatsApp: +91 94050 50230\n📸 Instagram: @challenger_editor_';
var BOT_RULES=[
 {k:['who made','who built','who created','who are you','your creator','developer','made you','built you','कौन','कोण','बनाया','बनवल','banaya','banavla','banvla','kaun','kon '],
  e:'I was made by Pratik, when he was 16 years old. I am the PS CINEMATIC helper bot.',
  h:'मुझे प्रतीक ने बनाया है, जब वह 16 साल का था। मैं PS CINEMATIC का हेल्पर बॉट हूँ।',
  m:'मला प्रतिक ने बनवलंय, सोळा वर्षांचा असताना. मी PS CINEMATIC चा हेल्पर बॉट आहे.'},
 {k:['sad','udaas','dukhi','upset','tension','tensed','worried','chinta','angry','gussa','rag','tired','thak','bored','उदास','दुखी','टेंशन','चिंता','राग','थकल','थकान','कोंट्र्या','दुख'],
  e:'I am sorry you feel that way. Things get better - and if a good edit can cheer you up, you know where to find me. 😊',
  h:'ऐसा महसूस हो रहा है तो दुख हुआ। सब ठीक हो जाएगा - और एक अच्छा एडिट मूड बना सके, तो मैं यहीं हूँ। 😊',
  m:'असं वाटतंय तर वाईट वाटलं. सब ठीक होईल - आणि छान एडिटने मूड बनवायचा असेल तर मी इथेच आहे. 😊'},
 {k:['happy','khush','excited','mast','badhiya','anand','खुश','आनंद','मस्त','बढ़िया','छान'],
  e:'That is great to hear! 😊 Anything I can help you with - packages, prices, orders?',
  h:'सुनकर खुशी हुई! 😊 कुछ मदद करूँ - पैकेज, कीमत, ऑर्डर?',
  m:'ऐकून भारी वाटलं! 😊 काही मदत करू - पॅकेज, किंमत, ऑर्डर?'},
 {k:['thank','thx','shukriya','dhanyavad','aabhar','धन्यवाद','शुक्रिया','आभार','थँक'],
  e:'You are welcome! 😊 Ask me anything else about editing orders.',
  h:'आपका स्वागत है! 😊 एडिटिंग ऑर्डर के बारे में कुछ और पूछना हो तो पूछें।',
  m:'तुमचं स्वागत आहे! 😊 एडिटिंग ऑर्डरबद्दल आणखी काही विचारायचं असल्यास विचारा.'},
 {k:['how are you','kaise ho','kaisa hai','kasa aahes','kase aahat','कैसे हो','कसा आहेस','कसे आहात'],
  e:'I am good, thanks! How can I help you?',h:'मैं ठीक हूँ, धन्यवाद! बताइए, क्या मदद करूँ?',m:'मी मस्त आहे, धन्यवाद! सांगा, काय मदत करू?'},
 {k:['what can you','help','madat','madad','robot','ai ','bot ','kya kar','मदद','मदत','रोबोट','क्या कर'],
  e:'I am a small rule-based helper bot (not a full AI). I can tell you about services, prices, how to order, delivery, the Challenge and contact details.',
  h:'मैं एक छोटा रूल-बेस्ड हेल्पर बॉट हूँ (पूरा AI नहीं)। सेवाएं, कीमत, ऑर्डर, डिलीवरी, चैलेंज और संपर्क बता सकता हूँ।',
  m:'मी एक छोटा रूल-बेस्ड हेल्पर बॉट आहे (पूर्ण AI नाही). सेवा, किंमत, ऑर्डर, डिलिव्हरी, चॅलेंज आणि संपर्क सांगू शकतो.'},
 {k:['delivery','time','kab','when','urgent','fast','kadhi','vel','डिलीव','डिलिव','समय','वेळ','कब','कधी','लगेग','लागे'],
  e:'Delivery time depends on the edit and the queue. I confirm after you order. Urgent? DM @challenger_editor_ on Instagram.',
  h:'डिलीवरी का समय एडिट और कतार पर निर्भर है। ऑर्डर के बाद बता दूँगा। जल्दी हो तो Instagram पर @challenger_editor_ को DM करें।',
  m:'डिलिव्हरीची वेळ एडिट आणि रांगेवर ठरते. ऑर्डरनंतर सांगेन. घाई असल्यास Instagram वर @challenger_editor_ ला DM करा.'},
 {k:['price','cost','rate','kitn','kiti','kim','daam','dam','paise','paisa','much','package','pack','discount','cheap','lower','कीमत','किंमत','दाम','भाव','पैसे','कितन','किती','पैकेज','पॅकेज','कम','सस्त','स्वस्त'],
  e:'My services:\n#\n\nPrice can be lowered too! Message me on Instagram @challenger_editor_.',
  h:'मेरी सेवाएं:\n#\n\nकीमत कम भी हो सकती है! Instagram पर @challenger_editor_ को मैसेज करें।',
  m:'माझ्या सेवा:\n#\n\nकिंमत कमी पण होऊ शकते! Instagram वर @challenger_editor_ ला मेसेज करा.'},
 {k:['service','what do you do','kya karte','kay karte','काय करत','क्या करत','सेवा'],
  e:'My services:\n#\n\nTap any service card on the Services page to order it directly.',
  h:'मेरी सेवाएं:\n#\n\nServices पेज पर किसी भी कार्ड के "ऑर्डर" से सीधे ऑर्डर करें।',
  m:'माझ्या सेवा:\n#\n\nServices पेजवर कोणत्याही कार्डच्या "ऑर्डर" ने थेट ऑर्डर करा.'},
 {k:['order','buy','book','how','kaise','kase','kasa','ऑर्डर','कैसे','कसे','कशी','कसा','मागव'],
  e:'Ordering is easy:\n1. Open the Order page\n2. Paste your video link (Google Drive / YouTube)\n3. Pick the edit type and send\n\nI will contact you on WhatsApp or Instagram.',
  h:'ऑर्डर करना आसान है:\n1. Order पेज खोलें\n2. वीडियो का लिंक (Google Drive / YouTube) डालें\n3. एडिट टाइप चुनकर भेजें\n\nमैं WhatsApp या Instagram पर संपर्क करूँगा।',
  m:'ऑर्डर करणे सोपे आहे:\n1. Order पेज उघडा\n2. व्हिडिओची लिंक (Google Drive / YouTube) टाका\n3. एडिटचा प्रकार निवडून पाठवा\n\nमी WhatsApp किंवा Instagram वर संपर्क करतो.'},
 {k:['challenge','55','s25','samsung','चैलेंज','चॅलेंज','सैमसंग'],
  e:'I am on the Rs 55,000 editing challenge: earn it in 5-6 months only by editing videos, and buy a Samsung Galaxy S25. The journey is daily on YouTube. See the Challenge page!',
  h:'मैं ₹55,000 एडिटिंग चैलेंज कर रहा हूँ: 5-6 महीनों में सिर्फ वीडियो एडिट करके कमाकर Samsung Galaxy S25 लेना। सफर रोज़ YouTube पर। Challenge पेज देखें!',
  m:'मी ₹55,000 एडिटिंग चॅलेंज करत आहे: 5-6 महिन्यांत फक्त व्हिडिओ एडिट करून कमवून Samsung Galaxy S25 घेणे. प्रवास रोज YouTube वर. Challenge पेज पाहा!'},
 {k:['contact','number','phone','whatsapp','call','insta','youtube','channel','dm','sampark','संपर्क','नंबर','फोन','कॉल','इंस्टा','यूट्यूब','युट्यूब','चैनल','चॅनल'],
  e:'Contact me:'+C+'\n▶️ YouTube: @Challenger_editor',h:'संपर्क करें / करा:'+C+'\n▶️ YouTube: @Challenger_editor',m:'संपर्क करा:'+C+'\n▶️ YouTube: @Challenger_editor'}
];
var GREET=/(^|[^a-z])(hi+|hello|hey|namaste|namaskar)([^a-z]|$)|नमस्ते|नमस्कार|हाय|हैलो|हॅलो|हेलो/i;
var MR=/[^a-z](aahe|ahe|kay|kiti|kase|kasa|mala|tumhi|pahije|havay|kuthe|kadhi|maza|majha|kara|ka)[^a-z]|आहे|काय|किती|कसे|कशी|कसा|मला|तुम्ही|माझ|पाहिजे|हवे|कुठे|कधी|करा|मी |लागेल|आणि|ॲ|ॅ|ऑ|कोण|बनवल/;
var EN=/(^|[^a-z])(the|what|who|are|you|your|is|do|can|thanks?|thank|hi+|hello|hey|made|how|much|order|price|delivery|contact)([^a-z]|$)/;
var FALL={e:'Sorry, I do not know that one. I am a small bot and can help with services, prices, ordering, delivery and the Challenge. For anything else, WhatsApp or DM Pratik:'+C,
 h:'माफ़ कीजिए, यह मुझे नहीं पता। मैं छोटा बॉट हूँ और सेवाएं, कीमत, ऑर्डर, डिलीवरी और चैलेंज में मदद कर सकता हूँ। बाकी के लिए प्रतीक को WhatsApp या DM करें:'+C,
 m:'माफ करा, हे मला माहीत नाही. मी छोटा बॉट आहे आणि सेवा, किंमत, ऑर्डर, डिलिव्हरी आणि चॅलेंजबद्दल मदत करू शकतो. बाकीसाठी प्रतिकला WhatsApp किंवा DM करा:'+C};
var HI={e:'Hi! I am the PS CINEMATIC helper 🤖 Ask about services, prices, ordering, delivery, the Challenge or contact.',
 h:'नमस्ते! मैं PS CINEMATIC हेल्पर हूँ 🤖 सेवाएं, कीमत, ऑर्डर, डिलीवरी, चैलेंज या संपर्क पूछें।',
 m:'नमस्कार! मी PS CINEMATIC हेल्पर आहे 🤖 सेवा, किंमत, ऑर्डर, डिलिव्हरी, चॅलेंज किंवा संपर्क विचारा.'};
var BLANG=(LANG==='hi'?'h':(LANG==='mr'?'m':'e'));
function syncBLANG(){BLANG=(LANG==='hi'?'h':(LANG==='mr'?'m':'e'))}
function botReply(q){
 var s=' '+q.toLowerCase()+' ';
 if(MR.test(s))BLANG='m';else if(/[\u0900-\u097f]|kitn|kaise|kab|hai|kya|kaun|kisne|tumhe/.test(s))BLANG='h';else if(EN.test(s))BLANG='e';
 else BLANG=(LANG==='en'?'e':LANG==='hi'?'h':'m');
 for(var i=0;i<BOT_RULES.length;i++){
  for(var j=0;j<BOT_RULES[i].k.length;j++){
   if(s.indexOf(BOT_RULES[i].k[j])>-1)return (BOT_RULES[i][BLANG]||BOT_RULES[i].h).replace('#',plist());
  }
 }
 return GREET.test(s)?HI[BLANG]:FALL[BLANG];
}
function addBub(text,me,img){
 var d=document.createElement('div');d.className='bub '+(me?'me':'bot');
 if(img){var im=document.createElement('img');im.src=img;im.className='chatimgprev';d.appendChild(im)}
 if(text)d.appendChild(document.createTextNode(text));
 $('chatlog').appendChild(d);$('chatlog').scrollTop=$('chatlog').scrollHeight;
}
function askBot(q){if(!q.trim())return;addBub(q,true);setTimeout(function(){addBub(botReply(q),false)},350)}
$('chatsend').onclick=function(){askBot($('chatq').value);$('chatq').value=''};
$('chatq').addEventListener('keydown',function(e){if(e.key==='Enter'){askBot(this.value);this.value=''}});
$('chatimg').onclick=function(){$('chatfile').click()};
$('chatfile').addEventListener('change',function(){
 var f=this.files&&this.files[0];if(!f)return;
 var r=new FileReader();
 r.onload=function(){
  addBub('',true,r.result);
  setTimeout(function(){addBub(t('img_sorry'),false)},400);
 };
 r.readAsDataURL(f);this.value='';
});
function buildChips(){
 var ch=$('chips');ch.innerHTML='';
 t('chips').forEach(function(c){
  var b=document.createElement('button');b.className='chip';b.textContent=c;
  b.onclick=function(){askBot(c)};ch.appendChild(b);
 });
}
// greet once when the helper page is opened
var _greeted=false;
window.addEventListener('hashchange',function(){
 if(location.hash==='#helper'&&!_greeted){_greeted=true;addBub(HI[BLANG],false)}
});


// ===== part 4: option groups + order tracking =====
var T3={
en:{nav_track:'📦 Track',
og_addons:'Add-ons',og_style:'Editing style',og_platform:'Platform',og_music:'Music mood',og_ratio:'Video shape',og_length:'Video length',
choose_any:'choose any',choose_one:'choose one',
ad1:'Word-sync captions (English)',ad2:'Color grading',ad3:'SFX (sound effects)',ad4:'Thumbnail',ad5:'Intro / Outro',ad6:'Vertical + horizontal cut',ad7:'Extra revision',ad8:'Fast delivery',
st1:'Beat-sync',st2:'Cinematic',st3:'Fast cuts',st4:'Smooth & chill',st5:'Funny / memes',
pf1:'Instagram Reel',pf2:'YouTube video',pf3:'YouTube Shorts',pf4:'Other',
mu1:'Trending / hype',mu2:'Emotional',mu3:'Lo-fi / chill',mu4:'My own song',
ra1:'Vertical (9:16)',ra2:'Horizontal (16:9)',ra3:'Both',
le1:'Under 1 min',le2:'1-5 min',le3:'More than 5 min',
ok_id:'Your order ID:',ok_save:'Save it - use it on the Track page to see your order status.',
tr_pill:'📦 Track',tr_h1:'Track your order',tr_sub:'Enter your order ID or WhatsApp number.',tr_id:'Order ID',tr_id_ph:'e.g. PSC-SAMPLE',tr_or:'or',tr_ph:'WhatsApp number',tr_btn:'Check status',tr_check:'Checking...',
tr_nf:'Order not found. Check the ID or number, or ask on Instagram @challenger_editor_.',tr_fail:'Could not check right now. Please try again in a bit.',tr_enter:'Please enter an order ID or WhatsApp number first.',
tr_ordered:'Ordered on',tr_ago:'days ago',tr_today:'today',tr_exp:'Expected delivery',tr_days:'days',tr_left:'about',tr_left2:'left',
st_pending:'Pending',st_progress:'In progress',st_done:'Done',
tr_own:'Your orders on this device',tr_none:'No orders on this device yet.'},
hi:{nav_track:'📦 ट्रैक',
og_addons:'ऐड-ऑन',og_style:'एडिटिंग स्टाइल',og_platform:'प्लैटफ़ॉर्म',og_music:'म्यूज़िक मूड',og_ratio:'वीडियो शेप',og_length:'वीडियो की लंबाई',
choose_any:'जो चाहें चुनें',choose_one:'एक चुनें',
ad1:'वर्ड-सिंक कैप्शन (इंग्लिश)',ad2:'कलर ग्रेडिंग',ad3:'SFX (साउंड इफ़ेक्ट्स)',ad4:'थंबनेल',ad5:'इंट्रो / आउट्रो',ad6:'वर्टिकल + हॉरिज़ॉन्टल कट',ad7:'एक्स्ट्रा रिविज़न',ad8:'फास्ट डिलीवरी',
st1:'बीट-सिंक',st2:'सिनेमैटिक',st3:'फास्ट कट्स',st4:'स्मूद / चिल',st5:'फनी / मीम्स',
pf1:'Instagram Reel',pf2:'YouTube वीडियो',pf3:'YouTube Shorts',pf4:'अन्य',
mu1:'ट्रेंडिंग / हाइप',mu2:'इमोशनल',mu3:'लो-फाई / चिल',mu4:'मेरा अपना गाना',
ra1:'वर्टिकल (9:16)',ra2:'हॉरिज़ॉन्टल (16:9)',ra3:'दोनों',
le1:'1 मिनट से कम',le2:'1-5 मिनट',le3:'5 मिनट से ज़्यादा',
ok_id:'आपका ऑर्डर ID:',ok_save:'इसे सेव करें - Track पेज पर इससे ऑर्डर स्टेटस देखें।',
tr_pill:'📦 ट्रैक',tr_h1:'अपना ऑर्डर ट्रैक करें',tr_sub:'ऑर्डर ID या WhatsApp नंबर डालें।',tr_id:'ऑर्डर ID',tr_id_ph:'जैसे PSC-SAMPLE',tr_or:'या',tr_ph:'WhatsApp नंबर',tr_btn:'स्टेटस देखें',tr_check:'देखा जा रहा है...',
tr_nf:'ऑर्डर नहीं मिला। ID या नंबर जांचें, या Instagram @challenger_editor_ पर पूछें।',tr_fail:'अभी चेक नहीं हो सका। थोड़ी देर में फिर कोशिश करें।',tr_enter:'पहले ऑर्डर ID या WhatsApp नंबर डालें।',
tr_ordered:'ऑर्डर दिनांक',tr_ago:'दिन पहले',tr_today:'आज',tr_exp:'उम्मीद डिलीवरी',tr_days:'दिन',tr_left:'करीब',tr_left2:'बाकी',
st_pending:'पेंडिंग',st_progress:'चल रहा है',st_done:'पूरा हुआ',
tr_own:'इस डिवाइस के आपके ऑर्डर',tr_none:'इस डिवाइस पर अभी कोई ऑर्डर नहीं।'},
mr:{nav_track:'📦 ट्रॅक',
og_addons:'अॅड-ऑन',og_style:'एडिटिंग स्टाइल',og_platform:'प्लॅटफॉर्म',og_music:'म्युझिक मूड',og_ratio:'व्हिडिओ शेप',og_length:'व्हिडिओची लांबी',
choose_any:'हवे ते निवडा',choose_one:'एक निवडा',
ad1:'वर्ड-सिंक कॅप्शन (इंग्लिश)',ad2:'कलर ग्रेडिंग',ad3:'SFX (साउंड इफेक्ट्स)',ad4:'थंबनेल',ad5:'इंट्रो / आउट्रो',ad6:'व्हर्टिकल + हॉरिझॉन्टल कट',ad7:'एक्स्ट्रा रिव्हिजन',ad8:'फास्ट डिलिव्हरी',
st1:'बीट-सिंक',st2:'सिनेमॅटिक',st3:'फास्ट कट्स',st4:'स्मूद / चिल',st5:'फनी / मीम्स',
pf1:'Instagram Reel',pf2:'YouTube व्हिडिओ',pf3:'YouTube Shorts',pf4:'इतर',
mu1:'ट्रेंडिंग / हाइप',mu2:'इमोशनल',mu3:'लो-फाय / चिल',mu4:'माझं स्वतःचं गाणं',
ra1:'व्हर्टिकल (9:16)',ra2:'हॉरिझॉन्टल (16:9)',ra3:'दोन्ही',
le1:'1 मिनिटाहून कमी',le2:'1-5 मिनिटं',le3:'5 मिनिटांहून जास्त',
ok_id:'तुमचा ऑर्डर ID:',ok_save:'हे सेव्ह करा - Track पेजवर याने ऑर्डर स्टेटस पाहा.',
tr_pill:'📦 ट्रॅक',tr_h1:'तुमची ऑर्डर ट्रॅक करा',tr_sub:'ऑर्डर ID किंवा WhatsApp नंबर टाका.',tr_id:'ऑर्डर ID',tr_id_ph:'उदा. PSC-SAMPLE',tr_or:'किंवा',tr_ph:'WhatsApp नंबर',tr_btn:'स्टेटस पाहा',tr_check:'तपासत आहे...',
tr_nf:'ऑर्डर सापडली नाही. ID किंवा नंबर तपासा, किंवा Instagram @challenger_editor_ वर विचारा.',tr_fail:'आत्ता तपासता आले नाही. थोड्या वेळाने पुन्हा प्रयत्न करा.',tr_enter:'आधी ऑर्डर ID किंवा WhatsApp नंबर टाका.',
tr_ordered:'ऑर्डर तारीख',tr_ago:'दिवसांपूर्वी',tr_today:'आज',tr_exp:'अपेक्षित डिलिव्हरी',tr_days:'दिवस',tr_left:'सुमारे',tr_left2:'बाकी',
st_pending:'पेंडिंग',st_progress:'सुरू आहे',st_done:'पूर्ण झाली',
tr_own:'या डिव्हाइसवरील तुमच्या ऑर्डर',tr_none:'या डिव्हाइसवर अजून ऑर्डर नाही.'}};
for(var L3 in T3){for(var k3 in T3[L3]){T[L3][k3]=T3[L3][k3]}}

/* ----- option groups: tap chips, multi or single ----- */
var OGROUPS=[
 {key:'addons',title:'og_addons',multi:true,items:[['ad1','Word-sync captions'],['ad2','Color grading'],['ad3','SFX'],['ad4','Thumbnail'],['ad5','Intro/Outro'],['ad6','Vertical+horizontal cut'],['ad7','Extra revision'],['ad8','Fast delivery']]},
 {key:'style',title:'og_style',multi:true,items:[['st1','Beat-sync'],['st2','Cinematic'],['st3','Fast cuts'],['st4','Smooth & chill'],['st5','Funny/memes']]},
 {key:'platform',title:'og_platform',multi:false,items:[['pf1','Instagram Reel'],['pf2','YouTube video'],['pf3','YouTube Shorts'],['pf4','Other']]},
 {key:'music',title:'og_music',multi:false,items:[['mu1','Trending/hype'],['mu2','Emotional'],['mu3','Lo-fi/chill'],['mu4','My own song']]},
 {key:'ratio',title:'og_ratio',multi:false,items:[['ra1','Vertical 9:16'],['ra2','Horizontal 16:9'],['ra3','Both']]},
 {key:'length',title:'og_length',multi:false,items:[['le1','Under 1 min'],['le2','1-5 min'],['le3','Over 5 min']]}];
var OPT_SEL={};
function renderOpts(){
 $('optgroups').innerHTML=OGROUPS.map(function(g,gi){
  return '<p class="ogtitle">'+t(g.title)+' <small>('+(g.multi?t('choose_any'):t('choose_one'))+')</small></p>'
  +'<div class="chips2">'+g.items.map(function(it,ii){
   var on=OPT_SEL[gi]&&OPT_SEL[gi].indexOf(ii)>-1;
   return '<button type="button" class="optchip'+(on?' on':'')+'" data-g="'+gi+'" data-i="'+ii+'">'+t(it[0])+'</button>'}).join('')+'</div>'}).join('');
 var chips=document.querySelectorAll('.optchip');
 for(var i=0;i<chips.length;i++)chips[i].onclick=function(){
  var g=+this.getAttribute('data-g'),ii=+this.getAttribute('data-i');
  if(!OPT_SEL[g])OPT_SEL[g]=[];
  var pos=OPT_SEL[g].indexOf(ii);
  if(OGROUPS[g].multi){if(pos>-1)OPT_SEL[g].splice(pos,1);else OPT_SEL[g].push(ii)}
  else{OPT_SEL[g]=(pos>-1?[]:[ii])}
  renderOpts();
 };
}
function collectOptLines(){
 var lines=[];
 for(var gi=0;gi<OGROUPS.length;gi++){
  var sel=OPT_SEL[gi]||[];if(!sel.length)continue;
  var names=sel.map(function(ii){return OGROUPS[gi].items[ii][1]});
  lines.push(OGROUPS[gi].key.charAt(0).toUpperCase()+OGROUPS[gi].key.slice(1)+': '+names.join(', '));
 }
 return lines;
}

/* ----- date helpers ----- */
function daysSinceNum(iso){
 var d=new Date(iso+'T00:00:00');if(isNaN(d))return null;
 return Math.max(0,Math.floor((Date.now()-d.getTime())/86400000));
}
function fmtAgo(iso){
 var n=daysSinceNum(iso);if(n===null)return '';
 return n===0?t('tr_today'):n+' '+t('tr_ago');
}

/* ----- order tracking (reads orders.json from this repo) ----- */
$('trnum').addEventListener('input',function(){this.value=this.value.replace(/[^0-9]/g,'')});
function statusInfo(s){
 s=String(s||'').toLowerCase();
 if(s==='done')return{cls:'st-done',label:t('st_done')};
 if(s==='in progress'||s==='progress')return{cls:'st-progress',label:t('st_progress')};
 return{cls:'st-pending',label:t('st_pending')};
}
function showTrackResult(o){
 var st=statusInfo(o.status),h='<div class="trcard">';
 h+='<div class="trtop"><span class="stbadge '+st.cls+'">'+st.label+'</span><b class="trid">'+esc(o.id||'')+'</b></div>';
 if(o.date){var ago=fmtAgo(o.date);h+='<p class="trline">📅 '+t('tr_ordered')+': <b>'+esc(o.date)+'</b>'+(ago?' ('+ago+')':'')+'</p>'}
 if(o.days&&String(o.status).toLowerCase()!=='done'){
  var n=daysSinceNum(o.date),left=n===null?null:(+o.days-n);
  h+='<p class="trline">⏳ '+t('tr_exp')+': <b>'+esc(o.days)+' '+t('tr_days')+'</b>'+(left!==null?' · '+t('tr_left')+' '+Math.max(0,left)+' '+t('tr_days')+' '+t('tr_left2'):'')+'</p>';
 }
 $('trresult').innerHTML=h+'</div>';
}
$('trgo').onclick=function(){
 var id=$('trid').value.trim().toUpperCase(),ph=$('trnum').value.trim(),m=$('trmsg');
 $('trresult').innerHTML='';
 if(!id&&!ph){m.className='err';m.textContent=t('tr_enter');return}
 m.className='err';m.textContent=t('tr_check');
 fetch('orders.json?cb='+Date.now()).then(function(r){if(!r.ok)throw 0;return r.json()}).then(function(list){
  var o=null,i;
  if(id)for(i=0;i<list.length;i++)if(String(list[i].id||'').toUpperCase()===id){o=list[i];break}
  if(!o&&ph)for(i=0;i<list.length;i++)if(String(list[i].phone||'')===ph){o=list[i];break}
  if(!o){m.className='err';m.textContent=t('tr_nf');return}
  m.textContent='';showTrackResult(o);
 }).catch(function(){m.className='err';m.textContent=t('tr_fail')});
};

/* ----- this device's orders on the track page ----- */
function renderOwn(){
 var a=getOrders(),h='<b style="font-size:15px">📱 '+t('tr_own')+'</b>';
 if(!a.length){h+='<p class="empty">'+t('tr_none')+'</p>'}
 else{h+=a.map(function(o){
  var ago=o.iso?fmtAgo(o.iso):'';
  return '<div class="hist"><span class="d">'+esc(o.date)+'</span><span class="t">'+esc(o.pack)+(o.id?'<small class="hid">'+esc(o.id)+(ago?' · '+ago:'')+'</small>':'')+'</span><span class="pr">'+esc(o.price)+'</span></div>'}).join('')}
 $('trown').innerHTML=h;
}

/* ----- init ----- */
setLang(LANG);
if(location.hash==='#helper'&&!_greeted){_greeted=true;addBub(HI[BLANG],false)}
// PSC v10 END OK app.js - scroll to the bottom and check this line before saving
