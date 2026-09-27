const slides = [
  {type:'cover', eyebrow:'دَلّني Bootcamp × المنتدى السوري', title:'ورشة صناعة البورتفوليو', subtitle:'اليوم الثالث', lead:'من المحتوى الاستراتيجي إلى التصميم النهائي', notes:'ابدأ بالترحيب، ثم وضّح أن اليوم هو لحظة الانتقال من التفكير إلى التنفيذ: سنحوّل المحتوى إلى بنية، ثم إلى واجهة قابلة للعرض.'},
  {type:'agenda', eyebrow:'01 · خريطة اليوم', title:'خارطة الطريق', notes:'أعطِ المتدربين صورة واضحة عن مسار الجلسة: نبدأ بالكلمات والمنطق، ثم ننتقل إلى الأدوات والتصميم.'},
  {type:'question', eyebrow:'02 · كسر الجليد', question:'لو كان البورتفوليو الخاص بك شخصاً… كيف سيقنع العميل بتوظيفك في 10 ثوانٍ؟', micro:'فكّر في البورتفوليو كأداة نطق، لا كملف صامت.', notes:'اطلب من كل متدرب إجابة واحدة بجملة قصيرة. الهدف هو نقل التفكير من «ما الذي صممته؟» إلى «ما القيمة التي أقدّمها؟».'},
  {type:'split', eyebrow:'المحور الأول · المحتوى', title:'البورتفوليو ليس معرض صور', lead:'التصميم يجذب العين، لكن الكلمات هي التي تبيع!', notes:'وضّح أن الواجهة الجميلة لا تكفي. العميل يحتاج أن يفهم المشكلة، القرار، والدور والنتيجة.'},
  {type:'flow', eyebrow:'04 · دراسة الحالة', title:'تشريح المشروع', lead:'العميل يبحث عن حلول لمشاكله، وليس عن شاشات ملوّنة.', steps:[['01','المشكلة','ما الألم أو الهدف الذي بدأ منه المشروع؟'],['02','الحل','ما القرار أو التصميم الذي اتخذته لمعالجة المشكلة؟'],['03','النتيجة','ما الذي تحسّن؟ وما الدليل أو الرقم الذي يثبت ذلك؟']], notes:'أكد على خط السرد: المشكلة ← الحل ← النتيجة. اجعل كل فقرة قصيرة، وركّز على القرارات لا على وصف الأدوات فقط.'},
  {type:'example', eyebrow:'05 · مثال تطبيقي', title:'الوصف العادي × دراسة الحالة', lines:[['وصف عادي','صممت واجهة دفع لمتجر إلكتروني.'],['دراسة حالة','بطء المبيعات ← واجهة دفع بصفحة واحدة ← زيادة 30% في الإتمام.'],['اللقطة البصرية','الرقم 30% يلتقط العين أسرع من فقرة كاملة.']], metric:'30%', notes:'اقرأ المثال بصوت عالٍ. اسأل: أي صياغة تعطي العميل سبباً للاهتمام؟ ركّز على النتيجة الملموسة.'},
  {type:'activity', eyebrow:'06 · نشاط 5 دقائق', title:'وقت التطبيق!', lead:'اكتب دراسة حالة من 3 أسطر لمشروعك الأخير.', notes:'أعطهم خمس دقائق. أثناء الجولة، ساعدهم بتحويل «صممت...» إلى «كانت المشكلة... فاخترت... والنتيجة...».', timerShort:'05:00'},
  {type:'tags', eyebrow:'07 · الدور والأدوات', title:'ما الذي فعلته أنت تحديداً؟', lead:'الشفافية تبني الثقة.', tags:['UX Design','UI Design','Figma','React','Python','Research','Prototype','Testing'], notes:'ذكّرهم بأن العمل الجماعي ليس مشكلة؛ المشكلة أن يكون الدور غامضاً. اذكر مساهمتك الفعلية وما استخدمته لإنجازها.'},
  {type:'microcopy', eyebrow:'08 · Microcopy', title:'مدير التوظيف لا يقرأ… بل يمسح الشاشة!', notes:'اشرح مفهوم المسح البصري: العناوين، الأرقام، الكلمات المميّزة. اجعل أول 5–10 ثوانٍ كافية لفهم المجال والقيمة.'},
  {type:'cta', eyebrow:'09 · CTA', title:'النداء للإجراء', notes:'قارن بين «اتصل بي» وبين CTA توحي بخطوة وقيمة. المطلوب أن يعرف الزائر ماذا يفعل بعد هذه الصفحة.'},
  {type:'channels', eyebrow:'10 · قنوات الاتصال', title:'الجودة > الكمية', notes:'حافظ على قنوات مهنية واضحة. لا تضع عشرات الروابط التي تشتّت المستخدم؛ اختر ما يخدم هدف التواصل.'},
  {type:'form', eyebrow:'11 · Contact Form', title:'حقول أكثر = رسائل أقل', notes:'وضّح أن نموذج التواصل البسيط يخفض الاحتكاك: الاسم، البريد، الرسالة، ثم إرسال.'},
  {type:'footer', eyebrow:'12 · Footer', title:'شبكة الأمان للزائر', notes:'الفوتر يختتم الرحلة ويوفّر حقوق الملكية، روابط سريعة، وقيمة عملية مثل زر العودة إلى الأعلى.'},
  {type:'break', eyebrow:'استراحة · 5 دقائق', title:'نعود بعد 5 دقائق', notes:'أغلق الجزء الأول، واترك العداد ظاهراً. بعد العودة، انتقل مباشرة إلى مرحلة التنفيذ.', timer:'5:00'},
  {type:'flow', eyebrow:'المحور الثاني · التنفيذ', title:'من الكلمات إلى الهيكل البصري', lead:'المحتوى ← الوايرفريم ← التصميم النهائي', steps:[['01','المحتوى','نحدّد الرسالة والأولوية.'],['02','Wireframe','نرتّب الكتل والمسار.'],['03','High-Fidelity','نضيف الهوية والبيانات الحقيقية.']], notes:'هذه السلسلة تقلل إعادة العمل. التصميم النهائي يأتي بعد أن تتضح بنية المحتوى وتجربة المستخدم.'},
  {type:'figma', eyebrow:'14 · الأداة', title:'لماذا Figma؟', lead:'معيار الصناعة · سحابي · تعاوني', notes:'قدّم Figma كمساحة عمل وليست مجرد أداة رسم. أبرز سهولة المشاركة والتعليقات والعمل الجماعي.'},
  {type:'moodboard', eyebrow:'15 · التغذية البصرية', title:'ذاكرة بصرية قوية', lead:'التصميم الجيد يبدأ بجمع المرجع، لا برسم أول مستطيل.', notes:'افتح Dribbble وAwwwards وBehance لاحقاً كمصادر للتغذية البصرية. الهدف ليس النسخ بل تحليل ما يجعل الواجهة تعمل بصرياً.'},
  {type:'wireframe', eyebrow:'16 · Wireframing', title:'Low-Fidelity أولاً', lead:'لا ألوان. لا تفاصيل. فقط توزيع للكتل.', notes:'شبّه الوايرفريم بالمخطط المعماري: تثبيت العلاقات والأحجام قبل مرحلة الإكساء واللون.'},
  {type:'ux', eyebrow:'17 · UX', title:'كيف نوجّه عين الزائر؟', lead:'التسلسل الهرمي البصري = الحجم + التباين + الموضع + المسافة.', notes:'أشر إلى المسار الذي تسلكه العين. ما هو أول شيء تراه؟ هل تعرف ماذا تفعل بعدها؟ استخدم المثال لتوضيح ترتيب الأولويات.'},
  {type:'compare', eyebrow:'18 · High-Fidelity', title:'من الهيكل إلى الروح', lead:'نفس البنية… لكن الآن نضيف الصور والنصوص والألوان والهوية.', notes:'بيّن أن الـHigh-Fidelity ليس بداية التصميم؛ هو نتيجة منطقية للتخطيط السابق.'},
  {type:'brand', eyebrow:'19 · الهوية الشخصية', title:'اختر ألوانك وخطوطك', lead:'لونان أساسيان + عائلة خطوط واحدة + نظام واضح للعناصر.', notes:'أكد أن الهوية الشخصية لا تعني تعقيداً. يكفي نظام صغير ومتّسق يسهّل قرارات التصميم ويحافظ على شخصية البورتفوليو.'},
  {type:'whitespace', eyebrow:'20 · التصميم النظيف', title:'الفراغ هو أكسجين التصميم!', lead:'White Space يبرز المحتوى ولا يضيّعه.', notes:'اعرض المقارنة: الحشو يزيد الضوضاء، بينما المسافات الواضحة تجعل العين تعرف أين تبدأ وأين تنتقل.'},
  {type:'consistency', eyebrow:'21 · التوحيد البصري', title:'التناسق يصنع الاحترافية', lead:'وحّد الأزرار، الخطوط، الحواف، الأيقونات والحالات.', notes:'أشر إلى الحالات الثلاث للزر. نفس اللغة البصرية تساعد المستخدم على التنبؤ بالسلوك وتقلل التشوش.'},
  {type:'responsive', eyebrow:'22 · Responsive', title:'عملاؤك يتصفحون من هواتفهم!', lead:'التصميم المرن يبدأ من الشبكة وAuto Layout.', notes:'بيّن كيف تتحول 3 أعمدة إلى عمود واحد، وكيف يجب أن تبقى الأولويات واضحة على الشاشة الصغيرة.'},
  {type:'demo', eyebrow:'23 · Live Demo · 10–15 دقيقة', title:'لنصمم معاً قسم «تواصل معي»', lead:'من Wireframe بسيط إلى UI زجاجي نظيف.', notes:'هذه لحظة الانتقال إلى Figma. لا تشرح كل شيء؛ نفّذ أمامهم خطوة خطوة: Frame → Auto Layout → styles → components → prototype.'},
  {type:'tasks', eyebrow:'24 · ما بعد الجلسة', title:'المهمة القادمة', notes:'اربط المهمة مباشرة بما تم شرحه. المهم أن يخرج المتدرب بنتيجة ملموسة قبل اللقاء القادم.'},
  {type:'qna', eyebrow:'25 · نقاش', title:'هل لديكم أي أسئلة؟', notes:'افتح المجال للأسئلة، وابدأ بسؤال مساعد: ما أكثر جزء ما زال غير واضح عندك: المحتوى، الوايرفريم، أم الـUI؟'},
  {type:'end', eyebrow:'26 · ختام اليوم', title:'شكراً لوقتكم', subtitle:'عبد الرحمن العظم · مدرب الورشة', notes:'اختتم بدعوة واضحة لمتابعة الحساب أو إرسال الأعمال للتغذية الراجعة. ضع رابطك الفعلي داخل app.js قبل العرض النهائي.', contact:['LinkedIn / Portfolio','Instagram / Professional Work','QR — أضف رابطك في app.js']}
];

const deck=document.getElementById('deck');
const counter=document.getElementById('counter');
const progressBar=document.getElementById('progressBar');
const notesPanel=document.getElementById('notesPanel');
const notesTitle=document.getElementById('notesTitle');
const notesBody=document.getElementById('notesBody');
let current=0; let timerInterval=null; let breakRemaining=600; let paused=false;

const icon = (symbol)=>`<div class="icon">${symbol}</div>`;

function render(s,i){
  const el=document.createElement('section');
  el.className='slide'; el.dataset.index=i;
  const n=String(i+1).padStart(2,'0');
  let html='';
  const base=`<div class="section-number">${n}</div>`;
  switch(s.type){
    case 'cover':
      html=base+`<div class="slide-grid"><div class="content fade-in"><div class="eyebrow">${s.eyebrow}</div><div class="hero-card"><div class="hero-mark">DAY 03</div><div class="subbrand"><span class="subbrand-dot"></span>دلّني Bootcamp · مدعومة من المنتدى السوري</div><h1>${s.title}<br><span class="highlight">${s.subtitle}</span></h1><p class="lead">${s.lead}</p><div class="meta-row"><span class="pill blue">المدرب: عبد الرحمن العظم</span><span class="pill">Content → Wireframe → UI</span></div></div></div><div class="visual"><div class="ring"></div><div class="ring r2"></div><div class="orb"></div></div></div>`; break;
    case 'agenda': html=base+`<div class="content center fade-in"><div class="eyebrow">${s.eyebrow}</div><h2>${s.title}</h2><p class="lead">يومان منطقياً في مسار واحد: نكتب أولاً، ثم نصمّم بقرار.</p><div class="badge-grid" style="max-width:860px;width:100%;margin-top:10px"><div class="badge-card">${icon('01')}<h3>استراتيجية كتابة المحتوى</h3><p>دراسة الحالة، microcopy، CTA، وقنوات التواصل.</p></div><div class="badge-card">${icon('02')}<h3>الانتقال للتنفيذ</h3><p>Figma، moodboard، wireframe، UX، UI وresponsive.</p></div></div></div>`; break;
    case 'question': html=base+`<div class="content center fade-in"><div class="eyebrow">${s.eyebrow}</div><div class="question-card"><div class="question">${s.question}</div><div class="micro">${s.micro}</div></div><div class="stat-row"><div class="stat"><b>10s</b><span>انطباع أول</span></div><div class="stat"><b>1 فكرة</b><span>قيمة واضحة</span></div><div class="stat"><b>0 حشو</b><span>رسالة مركّزة</span></div></div></div>`; break;
    case 'split': html=base+`<div class="content center fade-in"><div class="eyebrow">${s.eyebrow}</div><h2>${s.title}</h2><p class="lead">${s.lead}</p><div class="split-panel"><div class="split-side bad"><div class="marker">×</div><h3>تصميم صامت</h3><p class="mock-copy">صور وشاشات بلا سياق، لا مشكلة واضحة، ولا نتيجة.</p><div class="mock-ui"><div class="mock-line"></div><div class="mock-line short"></div><div class="mock-button" style="opacity:.18"></div></div></div><div class="split-side good"><div class="marker">✓</div><h3>تصميم يشرح القيمة</h3><p class="mock-copy">المشكلة → القرار → النتيجة، بلغة يمكن للعميل مسحها بسرعة.</p><div class="mock-ui"><div class="mock-line"></div><div class="mock-line short"></div><div class="mock-button"></div></div></div></div></div>`; break;
    case 'flow': html=base+`<div class="content center fade-in"><div class="eyebrow">${s.eyebrow}</div><h2>${s.title}</h2><p class="lead">${s.lead}</p><div class="flow">${s.steps.map(x=>`<div class="flow-step"><div class="num">${x[0]}</div><div class="icon-big">◈</div><h3>${x[1]}</h3><p>${x[2]}</p></div>`).join('')}</div></div>`; break;
    case 'example': html=base+`<div class="content center fade-in"><div class="eyebrow">${s.eyebrow}</div><h2>${s.title}</h2><div class="example-card">${s.lines.map((x,j)=>`<div class="example-line"><div class="example-label">${x[0]}</div><div class="example-value">${x[1]}</div></div>`).join('')}</div><div><div class="metric">${s.metric}</div><div class="metric-sub">نتيجة تُرى قبل الفقرة.</div></div></div>`; break;
    case 'activity': html=base+`<div class="content center fade-in"><div class="eyebrow">${s.eyebrow}</div><h2>${s.title}</h2><p class="lead">${s.lead}</p><div class="timer-card"><div class="timer-label">اكتب • راجع • اختصر</div><div class="timer" id="activityTimer">${s.timerShort}</div><div class="timer-controls"><button class="small-btn" onclick="resetActivity()">إعادة</button><button class="small-btn" onclick="toggleActivity(this)">إيقاف</button></div></div></div>`; break;
    case 'tags': html=base+`<div class="slide-grid"><div class="content fade-in"><div class="eyebrow">${s.eyebrow}</div><h2>${s.title}</h2><p class="lead">${s.lead}</p><p class="kicker">اجعل مساهمتك قابلة للقراءة في ثوانٍ، واذكر الأدوات التي استخدمتها فعلاً.</p></div><div class="glass" style="padding:28px"><div class="tags">${s.tags.map((t,i)=>`<span class="tag ${i%4===0?'green':''}">${t}</span>`).join('')}</div><div style="height:140px;margin-top:28px;border-radius:18px;border:1px dashed #70cfff25;display:grid;place-items:center;color:#6f94af;font-size:13px">YOUR ROLE • YOUR TOOLS • YOUR IMPACT</div></div></div>`; break;
    case 'microcopy': html=base+`<div class="content center fade-in" style="position:relative;min-height:470px;overflow:hidden;border-radius:32px"><div class="blur-wall"></div><div class="eyebrow" style="position:relative;z-index:3">${s.eyebrow}</div><h2 style="position:relative;z-index:3">${s.title}</h2><div class="focus-card"><div class="tiny">رأس الصفحة</div><div class="title">أصنع واجهات يفهمها العميل قبل أن يسأل</div><div class="two-lines">UX-first. نتائج واضحة. تفاصيل تخدم الهدف.</div></div></div>`; break;
    case 'cta': html=base+`<div class="content center fade-in"><div class="eyebrow">${s.eyebrow}</div><h2>${s.title}</h2><p class="lead">بدلاً من «اتصل بي»… اجعل الخطوة التالية تبدو كامتداد طبيعي للقيمة.</p><div class="cta-row"><div class="cta">لنبدأ مشروعك القادم</div></div><div class="cta-note">CTA واضح · فائدة مفهومة · خطوة واحدة</div></div>`; break;
    case 'channels': html=base+`<div class="content center fade-in"><div class="eyebrow">${s.eyebrow}</div><h2>${s.title}</h2><p class="lead">اختر القنوات التي تخدم العمل فعلاً، واترك الباقي خارج الواجهة الرئيسية.</p><div class="channel-grid"><div class="channel good-border"><div class="left"><div class="channel-icon">in</div><div><strong>LinkedIn</strong><div class="kicker">حساب مهني</div></div></div><span class="check">✓ أساسي</span></div><div class="channel good-border"><div class="left"><div class="channel-icon">@</div><div><strong>Email</strong><div class="kicker">بريد العمل</div></div></div><span class="check">✓ أساسي</span></div><div class="channel good-border"><div class="left"><div class="channel-icon">CV</div><div><strong>منصة مهنية</strong><div class="kicker">ملف أو سيرة</div></div></div><span class="check">✓ مناسب</span></div><div class="channel bad-border"><div class="left"><div class="channel-icon">◎</div><div><strong>حساب ترفيهي</strong><div class="kicker">لا علاقة له بالعمل</div></div></div><span class="cross">× اختصر</span></div></div></div>`; break;
    case 'form': html=base+`<div class="slide-grid"><div class="content fade-in"><div class="eyebrow">${s.eyebrow}</div><h2>${s.title}</h2><p class="lead">أقل عدد من الحقول، أكبر احتمال للرد.</p><div class="stat-row"><div class="stat"><b>3</b><span>حقول أساسية</span></div><div class="stat"><b>1</b><span>CTA واضح</span></div></div></div><div class="visual"><div class="form-mock"><div class="input">الاسم الكامل</div><div class="input">البريد الإلكتروني</div><div class="input textarea">اكتب رسالتك…</div><div class="send-btn">إرسال الرسالة</div></div></div></div>`; break;
    case 'footer': html=base+`<div class="content center fade-in"><div class="eyebrow">${s.eyebrow}</div><h2>${s.title}</h2><p class="lead">الفوتر يمنع المستخدم من الضياع بعد انتهاء الصفحة.</p><div class="footer-shot"><div class="site-header"><div class="site-dots"><span></span><span></span><span></span></div><div class="arrow-chip">↑ العودة للأعلى</div></div><div class="footer-content"><div><div class="footer-title">عبد الرحمن العظم</div><div class="footer-lines"><span></span><span style="width:110px"></span></div></div><div><div class="footer-title">روابط سريعة</div><div class="footer-lines"><span></span><span></span><span></span></div></div><div><div class="footer-title">تواصل</div><div class="footer-lines"><span style="width:110px"></span><span style="width:60px"></span></div></div></div></div></div>`; break;
    case 'break': html=base+`<div class="content center fade-in"><div class="eyebrow">${s.eyebrow}</div><div class="timer-card"><div class="timer-label">استراحة</div><div class="timer" id="breakTimer">10:00</div><div class="timer-controls"><button class="small-btn" onclick="resetBreak()">إعادة 10 دقائق</button><button class="small-btn" onclick="toggleBreak(this)">إيقاف</button></div></div></div>`; break;
    case 'figma': html=base+`<div class="slide-grid"><div class="content fade-in"><div class="eyebrow">${s.eyebrow}</div><h2>${s.title}</h2><p class="lead">${s.lead}</p><div class="meta-row"><span class="pill">Design Systems</span><span class="pill">Components</span><span class="pill">Auto Layout</span></div></div><div class="visual"><div class="figma-logo"><div class="figma-part fp1"></div><div class="figma-part fp2"></div><div class="figma-part fp3"></div><div class="figma-part fp4"></div><div class="figma-part fp5"></div></div><div class="floating-ui one"><div class="float-line"></div><div class="float-line short"></div><div class="float-line"></div></div><div class="floating-ui two"><div class="float-line short"></div><div class="float-line"></div><div class="float-line short"></div></div></div></div>`; break;
    case 'moodboard': html=base+`<div class="content center fade-in"><div class="eyebrow">${s.eyebrow}</div><h2>${s.title}</h2><p class="lead">${s.lead}</p><div class="moodboard"><div class="mood-card a"></div><div class="mood-card b"></div><div class="mood-card c"></div><div class="mood-card d"></div></div><div class="meta-row"><span class="pill">Dribbble</span><span class="pill">Awwwards</span><span class="pill">Behance</span></div></div>`; break;
    case 'wireframe': html=base+`<div class="content center fade-in"><div class="eyebrow">${s.eyebrow}</div><h2>${s.title}</h2><p class="lead">${s.lead}</p><div class="wireframe-large"><div class="wf-bar"></div><div class="wf-block"></div><div class="wf-small"></div><div class="wf-block"></div><div class="wf-block"></div><div class="wf-small"></div></div></div>`; break;
    case 'ux': html=base+`<div class="content center fade-in"><div class="eyebrow">${s.eyebrow}</div><h2>${s.title}</h2><p class="lead">${s.lead}</p><div class="eye-demo"><div class="eye-grid"><div><div class="eye-box big"></div><div class="eye-line"></div><div class="eye-line" style="width:50%"></div></div><div><div class="eye-box"></div><div class="eye-box" style="margin-top:16px"></div></div></div><div class="eye-path"></div></div></div>`; break;
    case 'compare': html=base+`<div class="content center fade-in"><div class="eyebrow">${s.eyebrow}</div><h2>${s.title}</h2><p class="lead">${s.lead}</p><div class="before-after"><div class="ba-panel"><div class="ba-label">Wireframe</div><div class="wire"><div class="block"></div><div class="block"></div><div class="block"></div><div class="block"></div></div></div><div class="ba-panel"><div class="ba-label">High-Fidelity</div><div class="final-ui"><div class="block"></div><div class="block"></div><div class="block"></div><div class="block"></div></div></div></div></div>`; break;
    case 'brand': html=base+`<div class="slide-grid"><div class="content fade-in"><div class="eyebrow">${s.eyebrow}</div><h2>${s.title}</h2><p class="lead">${s.lead}</p><div class="kicker">الهوية هنا مصممة على أساس لون أزرق كهربائي مع Cyan فاتح وDark Navy.</div></div><div class="content"><div class="palette"><div class="swatch sw1">#06101D</div><div class="swatch sw2">#258DFF</div><div class="swatch sw3">#4DC9FF</div><div class="swatch sw4">#D7F4FF</div></div><div class="brand-demo"><div class="demo-head"><div style="display:flex;align-items:center;gap:10px"><span class="demo-dot"></span><strong>PORTFOLIO</strong></div><div class="demo-btn">Let's build</div></div><div class="mock-ui" style="height:150px"><div class="mock-line" style="width:55%"></div><div class="mock-line short"></div><div class="mock-button"></div></div></div></div></div>`; break;
    case 'whitespace': html=base+`<div class="content center fade-in"><div class="eyebrow">${s.eyebrow}</div><h2>${s.title}</h2><p class="lead">${s.lead}</p><div class="whitespace-grid"><div class="ws-box"><div class="kicker">مزدحم</div><div class="ws-demo dense"><span class="mini-block a"></span><span class="mini-block b"></span><span class="mini-block c"></span><span class="mini-block d"></span></div></div><div class="ws-box"><div class="kicker">مريح</div><div class="ws-demo breathing"><span class="mini-block a"></span><span class="mini-block b"></span><span class="mini-block c"></span><span class="mini-block d"></span></div></div></div></div>`; break;
    case 'consistency': html=base+`<div class="content center fade-in"><div class="eyebrow">${s.eyebrow}</div><h2>${s.title}</h2><p class="lead">${s.lead}</p><div class="button-states"><div class="state-card"><div class="kicker">Default</div><div class="demo-state normal">تواصل</div></div><div class="state-card"><div class="kicker">Hover</div><div class="demo-state hover">تواصل</div></div><div class="state-card"><div class="kicker">Active</div><div class="demo-state active">تواصل</div></div></div></div>`; break;
    case 'responsive': html=base+`<div class="content center fade-in"><div class="eyebrow">${s.eyebrow}</div><h2>${s.title}</h2><p class="lead">${s.lead}</p><div class="device-row"><div class="device desktop"><div class="device-screen"><div class="screen-top"></div><div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px"><div class="screen-card"></div><div class="screen-card"></div><div class="screen-card"></div></div></div></div><div class="device tablet"><div class="device-screen"><div class="screen-top"></div><div class="screen-card"></div><div class="screen-card"></div></div></div><div class="device phone"><div class="device-screen"><div class="screen-top"></div><div class="screen-card"></div><div class="screen-card"></div><div class="screen-card"></div></div></div></div><div class="swipe-bar" style="width:min(760px,80vw)"></div></div>`; break;
    case 'demo': html=base+`<div class="content center fade-in"><div class="eyebrow">${s.eyebrow}</div><h2>${s.title}</h2><p class="lead">${s.lead}</p><div class="glass" style="padding:42px 60px;max-width:850px;width:100%;text-align:center"><div class="kicker">Figma → Frame → Auto Layout → Component → Prototype</div><div style="font-family:Inter,sans-serif;font-size:64px;font-weight:900;margin-top:10px;background:linear-gradient(135deg,#f1fbff,#52c9ff,#288eff);-webkit-background-clip:text;background-clip:text;color:transparent">LIVE</div><div style="color:#8fb0c9;margin-top:4px">وقت التطبيق العملي!</div></div></div>`; break;
    case 'tasks': html=base+`<div class="content center fade-in"><div class="eyebrow">${s.eyebrow}</div><h2>${s.title}</h2><div class="task-list"><div class="task"><div class="task-check">✓</div><div><span>كتابة دراسة حالة لمشروع واحد</span><small>المشكلة → الحل → النتيجة</small></div></div><div class="task"><div class="task-check">✓</div><div><span>رسم الـWireframe لصفحتك الرئيسية</span><small>Low-Fidelity، بدون تفاصيل لونية</small></div></div></div></div>`; break;
    case 'qna': html=base+`<div class="content center fade-in" style="position:relative;min-height:500px"><div class="eyebrow">${s.eyebrow}</div><div class="qmark">?</div><div class="orbit-text"><span>اسأل • ناقش • جرّب</span></div></div>`; break;
    case 'end': html=base+`<div class="content center fade-in"><div class="eyebrow">${s.eyebrow}</div><div class="end-card"><div class="content"><h2>${s.title}</h2><p class="lead">${s.subtitle}</p><div class="contact-row">${s.contact.map(t=>`<span class="contact-chip">${t}</span>`).join('')}</div><p class="kicker">مدرب الورشة: عبد الرحمن العظم</p></div><div class="qr-box"><div class="qr-grid"></div><div class="qr-note">QR PLACEHOLDER</div></div></div></div>`; break;
  }
  el.innerHTML=html;
  deck.appendChild(el);
}
slides.forEach(render);

function show(index,dir=1){
  if(index<0 || index>=slides.length || index===current) return;
  const prev=document.querySelector('.slide.active');
  current=index;
  document.querySelectorAll('.slide').forEach((el,i)=>{
    el.classList.toggle('active',i===current);
    el.classList.toggle('enter-left',dir<0 && i===current);
  });
  counter.textContent=`${String(current+1).padStart(2,'0')} / ${slides.length}`;
  progressBar.style.width=`${((current+1)/slides.length)*100}%`;
  updateNotes();
  resetMiniTimers();
  if(slides[current].type==='break') startBreak();
  if(slides[current].type==='activity') startActivity();
}
function next(){show(Math.min(slides.length-1,current+1),1)}
function prev(){show(Math.max(0,current-1),-1)}
function updateNotes(){const s=slides[current]; notesTitle.textContent=`${String(current+1).padStart(2,'0')} · ${s.title || s.question || 'الشريحة'}`; notesBody.textContent=s.notes||'لا توجد ملاحظات إضافية.'}
function toggleNotes(){notesPanel.classList.toggle('open');notesPanel.setAttribute('aria-hidden',!notesPanel.classList.contains('open'))}
function toggleFullscreen(){if(!document.fullscreenElement) document.documentElement.requestFullscreen?.(); else document.exitFullscreen?.()}

document.getElementById('nextBtn').addEventListener('click',next);
document.getElementById('prevBtn').addEventListener('click',prev);
document.getElementById('notesBtn').addEventListener('click',toggleNotes);
document.getElementById('closeNotes').addEventListener('click',toggleNotes);
document.getElementById('fullscreenBtn').addEventListener('click',toggleFullscreen);

document.addEventListener('keydown',(e)=>{
  if(['INPUT','TEXTAREA'].includes(document.activeElement.tagName)) return;
  if(e.key==='ArrowRight'||e.key===' '){e.preventDefault();next()}
  else if(e.key==='ArrowLeft'){e.preventDefault();prev()}
  else if(e.key==='Home'){e.preventDefault();show(0,-1)}
  else if(e.key==='End'){e.preventDefault();show(slides.length-1,1)}
  else if(e.key.toLowerCase()==='n'){e.preventDefault();toggleNotes()}
  else if(e.key.toLowerCase()==='f'){e.preventDefault();toggleFullscreen()}
  else if(e.key==='Escape' && notesPanel.classList.contains('open')){toggleNotes()}
});

let touchX=0; let touchY=0;
deck.addEventListener('touchstart',e=>{touchX=e.changedTouches[0].screenX;touchY=e.changedTouches[0].screenY},{passive:true});
deck.addEventListener('touchend',e=>{const dx=e.changedTouches[0].screenX-touchX;const dy=e.changedTouches[0].screenY-touchY;if(Math.abs(dx)>50 && Math.abs(dx)>Math.abs(dy)){dx<0?next():prev()}},{passive:true});

function resetMiniTimers(){clearInterval(timerInterval);timerInterval=null;}
let activityRemain=300;let activityPaused=false;
window.startActivity=()=>{resetMiniTimers();activityRemain=300;activityPaused=false;const el=document.getElementById('activityTimer');if(!el)return;el.textContent='05:00';timerInterval=setInterval(()=>{if(activityPaused)return;activityRemain--;el.textContent=fmt(activityRemain);if(activityRemain<=0){clearInterval(timerInterval);timerInterval=null}},1000)};
window.toggleActivity=(btn)=>{activityPaused=!activityPaused;btn.textContent=activityPaused?'استمرار':'إيقاف'};
window.resetActivity=()=>startActivity();

window.startBreak=()=>{resetMiniTimers();breakRemaining=600;paused=false;const el=document.getElementById('breakTimer');if(!el)return;el.textContent='10:00';timerInterval=setInterval(()=>{if(paused)return;breakRemaining--;el.textContent=fmt(breakRemaining);if(breakRemaining<=0){clearInterval(timerInterval);timerInterval=null}},1000)};
window.toggleBreak=(btn)=>{paused=!paused;btn.textContent=paused?'استمرار':'إيقاف'};
window.resetBreak=()=>startBreak();
function fmt(v){v=Math.max(0,v);const m=Math.floor(v/60).toString().padStart(2,'0');const s=(v%60).toString().padStart(2,'0');return `${m}:${s}`}

show(0,1);
updateNotes();
