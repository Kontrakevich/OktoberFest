(()=>{
const names={"Саркисян-АА":"Уважаемый Альберт Аргенович,","Клименов-ОА":"Уважаемый Олег Александрович,","Кочешкова-ЕВ":"Уважаемая Елена Викторовна,","Дагестанская-СИ":"Уважаемая Светлана Игоревна,","Рогачев-ДН":"Уважаемый Дмитрий Николаевич,","Юдинцев-АА":"Уважаемый Андрей Андреевич,","Панфилов-ДН":"Уважаемый Дмитрий Николаевич,","Оганезов-ГЕ":"Уважаемый Георгий Ервандович,","Переверзев-МВ":"Уважаемый Марк Владимирович,","Куликов-АА":"Уважаемый Альберт Александрович,","Засыпкина-ЮВ":"Уважаемая Юлия Валерьевна,","Балаев-ОВ":"Уважаемый Олег Вячеславович,","Бекишев-КВ":"Уважаемый Константин Владимирович,","Бельцина-ВБ":"Уважаемая Виктория Борисовна,","Борзыкин-АВ":"Уважаемый Алексей Валерьевич,","Вартик-СА":"Уважаемый Сергей Алексеевич,","Волков-АЮ":"Уважаемый Александр Юрьевич,","Воротынцев-АС":"Уважаемый Александр Стефанович,","Гаврилов-ВН":"Уважаемый Вадим Николаевич,","Герасимов-КВ":"Уважаемый Константин Вадимович,","Гомзиков-СЛ":"Уважаемый Сергей Львович,","Гришко-МА":"Уважаемая Мария Александровна,","Денисенко-НВ":"Уважаемая Наталья Владимировна,","Дюмина-АЮ":"Уважаемая Анастасия Юрьевна,","Калинина-СА":"Уважаемая Светлана Александровна,","Капанина-ЮО":"Уважаемая Юлия Олеговна,","Князев-ПЛ":"Уважаемый Павел Леонидович,","Константинов-АС":"Уважаемый Андрей Сергеевич,","Контракевич-МЮ":"Уважаемый Михаил Юрьевич,","Кочетова-ОН":"Уважаемая Оксана Николаевна,","Кочуева-ТН":"Уважаемая Тамара Николаевна,","Кулагина-ОС":"Уважаемая Оксана Сергеевна,","Кумирова-НВ":"Уважаемая Надежда Вячеславовна,","Ларионова-ЖВ":"Уважаемая Жанна Вячеславовна,","Латыпова-ЭИ":"Уважаемая Эмилия Ивановна,","Левашов-АИ":"Уважаемый Александр Иванович,","Левит-ГВ":"Уважаемый Григорий Владимирович,","Мешков-ДН":"Уважаемый Дмитрий Николаевич,","Милованов-ДС":"Уважаемый Дмитрий Сергеевич,","Науменко-АА":"Уважаемый Андрей Анатольевич,","Новожилов-МЛ":"Уважаемый Михаил Леонидович,","Поляков-МЮ":"Уважаемый Максим Юрьевич,","Пылаев-НС":"Уважаемый Николай Сергеевич,","Саманов-СВ":"Уважаемый Сергей Викторович,","Сапунов-ИС":"Уважаемый Илья Сергеевич,","Сараева-АГ":"Уважаемая Анна Григорьевна,","Селезнева-ЛГ":"Уважаемая Лидия Геннадьевна,","Смирнов-СВ":"Уважаемый Сергей Владимирович,","Сорокина-ЕВ":"Уважаемая Елена Викторовна,","Сторчак-РВ":"Уважаемый Роман Владимирович,","Тихонов-ЕА":"Уважаемый Евгений Александрович,","Толмачев-СА":"Уважаемый Сергей Александрович,","Ушаков-ДН":"Уважаемый Дмитрий Николаевич,","Фадеев-ВА":"Уважаемый Василий Александрович,","Фатеев-ДА":"Уважаемый Дмитрий Анатольевич,","Фокин-ПГ":"Уважаемый Павел Геннадьевич,","Хрипков-АВ":"Уважаемый Андрей Владимирович,","Хрущев-ЮВ":"Уважаемый Юрий Викторович,","Шкунова-ТН":"Уважаемая Татьяна Николаевна,","Щербаков-АИ":"Уважаемый Алексей Иванович,","Юрлов-СС":"Уважаемый Сергей Сергеевич,","Якушенокс-ЛМ":"Уважаемая Лиана Михайловна,"};

const parts=location.pathname.split("/").filter(Boolean).map(decodeURIComponent);
const key=parts[parts.length-1]==="index.html"?parts[parts.length-2]:parts[parts.length-1];

const salute=document.querySelector(".salute");
if(salute){
  const full=(names[key]||salute.textContent.trim()).replace(/,$/,"");
  const m=full.match(/^(Уважаем(?:ый|ая))\s+([^\s]+)\s+(.+)$/);
  if(m){
    salute.innerHTML=
      '<span class="salute-line">'+m[1]+'</span>'+
      '<span class="salute-line">'+m[2]+'</span>'+
      '<span class="salute-line">'+m[3]+'</span>';
  }
}

function fitSalute(){
  if(!salute)return;
  const lines=[...salute.querySelectorAll(".salute-line")];
  if(!lines.length)return;
  let size=58;
  const min=28;
  salute.style.fontSize=size+"px";
  while(size>min&&lines.some(l=>l.scrollWidth>salute.clientWidth)){
    size-=1;
    salute.style.fontSize=size+"px";
  }
}

function capFirst(el){
  if(!el)return;
  const walker=document.createTreeWalker(el,NodeFilter.SHOW_TEXT);
  let n;
  while((n=walker.nextNode())){
    const t=n.nodeValue;
    const i=t.search(/[А-ЯЁA-Z]/);
    if(i>=0){
      const frag=document.createDocumentFragment();
      if(i>0)frag.appendChild(document.createTextNode(t.slice(0,i)));
      const span=document.createElement("span");
      span.className="cap";
      span.textContent=t[i];
      frag.appendChild(span);
      if(i+1<t.length)frag.appendChild(document.createTextNode(t.slice(i+1)));
      n.parentNode.replaceChild(frag,n);
      break;
    }
  }
}

const scene=document.getElementById("scene");
const video=document.getElementById("heroVideo");
const shade=document.getElementById("shade");
const hero1=document.getElementById("hero1");
const hint=document.getElementById("hint");
const bottomFade=document.getElementById("heroBottomFade");

if(!scene||!video)return;

const clamp=(v,a=0,b=1)=>Math.min(b,Math.max(a,v));
const easeOut=t=>1-Math.pow(1-t,3);
const easeInOut=t=>t<.5?2*t*t:1-Math.pow(-2*t+2,2)/2;
const easeInAccel=t=>Math.pow(t,2.35);
const VIDEO_END=.75;

let duration=5.06195;
let target=0;
let visual=0;
let unlocked=false;
let userInteracted=false;
let autoStarted=false;
let autoTimerStarted=false;
let handoffTriggered=false;
let handoffRaf=null;
let playRaf=null;
let autoplayRunning=false;

function unlock(){
  if(unlocked)return;
  unlocked=true;
  const p=video.play();
  if(p&&p.then)p.then(()=>{video.pause();video.currentTime=target}).catch(()=>{});
}

function progress(){
  const r=scene.getBoundingClientRect();
  const travel=Math.max(1,scene.scrollHeight-innerHeight);
  return clamp((-r.top)/travel);
}

function markInteraction(){userInteracted=true}
["touchstart","pointerdown","wheel","keydown"].forEach(ev=>{
  addEventListener(ev,markInteraction,{once:true,passive:true});
});
addEventListener("scroll",()=>{
  if(!autoStarted&&scrollY>8)userInteracted=true;
},{passive:true});

function runHandoffToInvite(){
  const firstSection=document.querySelector(".scroll-scene + .section");
  if(!firstSection)return;

  if(handoffRaf){
    cancelAnimationFrame(handoffRaf);
    handoffRaf=null;
  }

  const startY=window.scrollY;
  const targetY=firstSection.offsetTop;
  const distance=targetY-startY;
  const started=performance.now();
  const totalMs=1440;

  function step(now){
    const t=clamp((now-started)/totalMs);
    const k=easeInOut(t);
    window.scrollTo(0,startY+distance*k);
    if(t<1){
      handoffRaf=requestAnimationFrame(step);
    }else{
      window.scrollTo(0,targetY);
      handoffRaf=null;
      autoplayRunning=false;
    }
  }

  handoffRaf=requestAnimationFrame(step);
}

function playFromHint(){
  unlock();
  if(hint)hint.classList.add("is-fading");
  userInteracted=true;
  handoffTriggered=false;
  autoplayRunning=true;

  if(playRaf){
    cancelAnimationFrame(playRaf);
    playRaf=null;
  }
  if(handoffRaf){
    cancelAnimationFrame(handoffRaf);
    handoffRaf=null;
  }

  const travel=Math.max(1,scene.scrollHeight-innerHeight);
  const startP=progress();
  const endP=VIDEO_END;
  const startY=window.scrollY;
  const endY=scene.offsetTop+travel*endP;
  const remaining=Math.max(.001,endP-startP);

  // Slightly longer from the top, shorter if the user already advanced.
  const totalMs=Math.max(900,4300*(remaining/VIDEO_END));
  const started=performance.now();

  function step(now){
    const t=clamp((now-started)/totalMs);
    // Slow launch, strong acceleration toward the end.
    const k=easeInAccel(t);
    const y=startY+(endY-startY)*k;
    window.scrollTo(0,y);

    if(t<1){
      playRaf=requestAnimationFrame(step);
    }else{
      window.scrollTo(0,endY);
      playRaf=null;
      handoffTriggered=true;
      // No hold on final frame: continue on the same frame into the invite.
      runHandoffToInvite();
    }
  }

  playRaf=requestAnimationFrame(step);
}

function armAutoScroll(){
  if(autoTimerStarted)return;
  autoTimerStarted=true;
  setTimeout(()=>{
    if(userInteracted||scrollY>8)return;
    autoStarted=true;
    playFromHint();
  },3000);
}

function render(){
  const p=progress();

  if(hint){
    if(p>.006)hint.classList.add("is-fading");
    else if(!autoplayRunning)hint.classList.remove("is-fading");
  }

  // v36: 5-screen scene = 4 viewport-heights of travel; first 3 screens play video, final screen transitions.
  target=clamp(p/VIDEO_END)*duration;
  visual+=(target-visual)*.22;
  if(video.readyState>=2&&Math.abs(video.currentTime-visual)>.008){
    try{video.currentTime=visual}catch(e){}
  }

  const heroDim=easeInOut(clamp((p-(VIDEO_END-.10))/.10));
  if(hero1){
    hero1.style.opacity='1';
    hero1.style.filter='none';
    hero1.style.transform='none';
  }

  if(hint){
    hint.style.transform='translate3d(-50%,0,0)';
    hint.style.filter='none';
  }

  if(bottomFade){
    bottomFade.style.transform='none';
    bottomFade.style.opacity='1';
  }

  // Same darkening as root.
  const d=easeInOut(clamp((p-(VIDEO_END-.08))/.08));
  if(shade)shade.style.opacity=String(d*.94);

  if(p>=VIDEO_END && !handoffTriggered && !autoplayRunning){
    handoffTriggered=true;
    runHandoffToInvite();
  }
  if(p<VIDEO_END-.12)handoffTriggered=false;

  requestAnimationFrame(render);
}

video.addEventListener("loadedmetadata",()=>{
  if(Number.isFinite(video.duration)&&video.duration>0)duration=video.duration;
  video.pause();
  try{video.currentTime=0}catch(e){}
});

window.addEventListener("load",()=>{fitSalute();armAutoScroll()});
window.addEventListener("resize",fitSalute);
window.addEventListener("orientationchange",()=>setTimeout(fitSalute,250));

addEventListener("touchstart",unlock,{once:true,passive:true});
addEventListener("pointerdown",unlock,{once:true,passive:true});
addEventListener("wheel",unlock,{once:true,passive:true});

fitSalute();
document.querySelectorAll(".salute-line").forEach(capFirst);
capFirst(document.querySelector(".section-title"));
if(hint){
  hint.addEventListener("click",()=>{
    playFromHint();
  });
  hint.addEventListener("keydown",(e)=>{
    if(e.key==="Enter"||e.key===" "){
      e.preventDefault();
      playFromHint();
    }
  });
}

if(document.readyState==="complete")armAutoScroll();

requestAnimationFrame(render);
})();