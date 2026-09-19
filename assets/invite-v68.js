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

function fitHero1(){
  const box=document.getElementById("hero1");
  const date=box&&box.querySelector(".hero1-date");
  const title=box&&box.querySelector(".hero1-title");
  const lines=title?[...title.querySelectorAll("span")]:[];
  if(!box||!date||!title||!lines.length)return;

  date.style.fontSize="";
  title.style.fontSize="";

  requestAnimationFrame(()=>{
    const maxW=box.clientWidth;
    let ds=parseFloat(getComputedStyle(date).fontSize)||40;
    let ts=parseFloat(getComputedStyle(title).fontSize)||70;
    while(ds>24&&date.scrollWidth>maxW){ds-=1;date.style.fontSize=ds+"px"}
    while(ts>38&&lines.some(l=>l.scrollWidth>maxW)){ts-=1;title.style.fontSize=ts+"px"}
  });
}

function fitProgram(){
  const program=document.querySelector(".program");
  if(!program)return;
  const rows=[...program.querySelectorAll(".program-row")];
  const times=[...program.querySelectorAll(".program-time")];
  const texts=[...program.querySelectorAll(".program-text")];
  if(!rows.length)return;

  times.forEach(el=>el.style.fontSize="");
  texts.forEach(el=>el.style.fontSize="");

  requestAnimationFrame(()=>{
    const maxW=program.parentElement?program.parentElement.clientWidth:window.innerWidth;
    let ts=parseFloat(getComputedStyle(times[0]).fontSize)||30;
    let xs=parseFloat(getComputedStyle(texts[0]).fontSize)||20;
    let guard=0;
    while(rows.some(r=>r.scrollWidth>maxW)&&guard<60&&ts>20&&xs>13){
      ts-=.4; xs-=.35;
      times.forEach(el=>el.style.fontSize=ts+"px");
      texts.forEach(el=>el.style.fontSize=xs+"px");
      guard++;
    }
  });
}

function fitScreen2(){
  const shell=document.querySelector(".screen2-shell");
  if(shell) shell.style.transform="none";
}

function fitAddress(){
  const first=document.querySelector(".address-line:first-child");
  const second=document.querySelector(".address-line:last-child");
  if(!first||!second)return;

  second.style.fontSize="";
  second.style.letterSpacing="";

  requestAnimationFrame(()=>{
    const target=first.getBoundingClientRect().width;
    const current=second.getBoundingClientRect().width;
    const base=parseFloat(getComputedStyle(second).fontSize)||34;

    if(target>0&&current>0){
      let size=base*(target/current);
      size=Math.max(base,Math.min(size,62));
      second.style.fontSize=size.toFixed(2)+"px";

      requestAnimationFrame(()=>{
        const w=second.getBoundingClientRect().width;
        const delta=target-w;
        const chars=Math.max(1,second.textContent.trim().length-1);
        if(Math.abs(delta)>.5){
          const ls=delta/chars;
          second.style.letterSpacing=ls.toFixed(3)+"px";
        }
      });
    }
  });
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
  /* v71.29: automatic start disabled.
     Scroll only by user gesture or explicit "Листай вниз" activation. */
  return;
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

window.addEventListener("load",()=>{fitSalute();fitHero1();fitProgram();fitScreen2();
if(document.fonts&&document.fonts.ready)document.fonts.ready.then(()=>{fitAddress();fitHero1();fitProgram();fitScreen2()});
fitAddress();fitAddress();armAutoScroll()});
window.addEventListener("resize",()=>{fitSalute();fitAddress();fitHero1();fitProgram();fitScreen2()});
window.addEventListener("orientationchange",()=>setTimeout(()=>{fitSalute();fitAddress();fitHero1();fitProgram();fitScreen2()},250));

addEventListener("touchstart",unlock,{once:true,passive:true});
addEventListener("pointerdown",unlock,{once:true,passive:true});
addEventListener("wheel",unlock,{once:true,passive:true});

fitSalute();
fitHero1();
fitProgram();
fitScreen2();
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
;(()=>{
  const q=(s,r=document)=>r.querySelector(s);
  const qa=(s,r=document)=>[...r.querySelectorAll(s)];

  function fitLineGroupCommon(container, lines, minPx, maxPx){
    if(!container||!lines.length)return;
    container.style.fontSize="";
    requestAnimationFrame(()=>{
      const target=container.clientWidth;
      if(!target)return;
      const widths=lines.map(el=>el.getBoundingClientRect().width);
      const widest=Math.max(...widths,1);
      const base=parseFloat(getComputedStyle(container).fontSize)||maxPx;
      let size=base*(target/widest);
      size=Math.max(minPx,Math.min(maxPx,size));
      container.style.fontSize=size.toFixed(2)+"px";
    });
  }

  function fitHeroExact(){
    const box=q("#hero1");
    const date=box&&q(".hero1-date",box);
    const title=box&&q(".hero1-title",box);
    const lines=title?qa("span",title):[];
    if(!box||!date||!title||!lines.length)return;

    title.style.fontSize="";
    requestAnimationFrame(()=>{
      const target=box.clientWidth;
      const widths=lines.map(el=>el.getBoundingClientRect().width);
      const widest=Math.max(...widths,1);
      const base=parseFloat(getComputedStyle(title).fontSize)||72;
      let size=base*(target/widest);
      size=Math.max(34,Math.min(112,size));
      title.style.fontSize=size.toFixed(2)+"px";

      date.style.width="50%";
      date.style.maxWidth="50%";
      let d=parseFloat(getComputedStyle(date).fontSize)||36;
      date.style.fontSize="";
      requestAnimationFrame(()=>{
        const targetDate=box.clientWidth*.5;
        const natural=date.getBoundingClientRect().width||1;
        const baseDate=parseFloat(getComputedStyle(date).fontSize)||36;
        d=baseDate*(targetDate/natural);
        d=Math.max(20,Math.min(58,d));
        date.style.fontSize=d.toFixed(2)+"px";
      });
    });
  }

  function fitSaluteExact(){
    const el=q(".salute");
    if(!el)return;
    fitLineGroupCommon(el,qa(".salute-line",el),24,96);
  }

  function fitAddressExact(){
    const address=q(".address");
    const lines=address?qa(".address-line",address):[];
    if(!address||!lines.length)return;
    const target=address.clientWidth;
    if(!target)return;

    lines.forEach(line=>line.style.fontSize="");
    requestAnimationFrame(()=>{
      lines.forEach((line,i)=>{
        const natural=line.getBoundingClientRect().width||1;
        const base=parseFloat(getComputedStyle(line).fontSize)||(i===0?72:32);
        let size=base*(target/natural);
        size=Math.max(i===0?28:16,Math.min(i===0?124:66,size));
        line.style.fontSize=size.toFixed(2)+"px";
      });
    });
  }

  function fitMiddleEqual(){
    const invite=q(".invite-copy");
    const program=q(".program");
    const shell=q(".screen2-shell");
    if(!invite||!program||!shell)return;

    invite.style.width="max-content";
    program.style.width="max-content";

    requestAnimationFrame(()=>{
      const maxW=shell.clientWidth;
      const width=Math.min(maxW,Math.max(invite.scrollWidth,program.scrollWidth));
      invite.style.width=width+"px";
      program.style.width=width+"px";
    });
  }

  function run(){
    fitHeroExact();
    fitSaluteExact();
    fitAddressExact();
    fitMiddleEqual();
  }

  addEventListener("load",()=>requestAnimationFrame(run));
  addEventListener("resize",()=>requestAnimationFrame(run));
  addEventListener("orientationchange",()=>setTimeout(run,260));
  if(document.fonts&&document.fonts.ready)document.fonts.ready.then(()=>requestAnimationFrame(run));
  requestAnimationFrame(run);
})();
;(()=>{
  function syncProgramTimeColumn(){
    const program=document.querySelector(".program");
    if(!program)return;
    const times=[...program.querySelectorAll(".program-time")];
    if(!times.length)return;

    requestAnimationFrame(()=>{
      const widest=Math.max(...times.map(el=>el.getBoundingClientRect().width),0);
      const pad=parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--program-time-pad"))||18;
      program.style.setProperty("--program-time-col",(widest+pad).toFixed(2)+"px");
    });
  }

  function runV55(){
    syncProgramTimeColumn();
  }

  addEventListener("load",runV55);
  addEventListener("resize",runV55);
  addEventListener("orientationchange",()=>setTimeout(runV55,260));
  if(document.fonts&&document.fonts.ready)document.fonts.ready.then(runV55);
  requestAnimationFrame(runV55);
})();

;(()=>{
  function fitV56(){
    const salute=document.querySelector(".salute");
    const saluteLines=salute?[...salute.querySelectorAll(".salute-line")]:[];
    if(salute&&saluteLines.length){
      salute.style.removeProperty("font-size");
      saluteLines.forEach(el=>{
        el.style.setProperty("width","max-content","important");
        el.style.setProperty("max-width","none","important");
      });

      requestAnimationFrame(()=>{
        const target=salute.clientWidth;
        const natural=Math.max(...saluteLines.map(el=>el.getBoundingClientRect().width),1);
        const base=parseFloat(getComputedStyle(salute).fontSize)||58;
        const size=Math.max(24,Math.min(96,base*(target/natural)));
        salute.style.setProperty("font-size",size.toFixed(2)+"px","important");

        saluteLines.forEach(el=>{
          el.style.setProperty("width","var(--usable-w)","important");
          el.style.setProperty("max-width","var(--usable-w)","important");
        });
      });
    }

    const address=document.querySelector(".address");
    const addressLines=address?[...address.querySelectorAll(".address-line")]:[];
    if(address&&addressLines.length){
      addressLines.forEach(el=>{
        el.style.removeProperty("font-size");
        el.style.setProperty("width","max-content","important");
        el.style.setProperty("max-width","none","important");
      });

      requestAnimationFrame(()=>{
        const target=address.clientWidth;
        addressLines.forEach((el,i)=>{
          const natural=el.getBoundingClientRect().width||1;
          const base=parseFloat(getComputedStyle(el).fontSize)||(i===0?72:32);
          const min=i===0?28:16;
          const max=i===0?140:80;
          const size=Math.max(min,Math.min(max,base*(target/natural)));
          el.style.setProperty("font-size",size.toFixed(2)+"px","important");
          el.style.setProperty("width","var(--usable-w)","important");
          el.style.setProperty("max-width","var(--usable-w)","important");
        });
      });
    }
  }

  addEventListener("load",fitV56);
  addEventListener("resize",fitV56);
  addEventListener("orientationchange",()=>setTimeout(fitV56,260));
  if(document.fonts&&document.fonts.ready)document.fonts.ready.then(fitV56);
  requestAnimationFrame(fitV56);
})();

;(()=>{
  function fitHeroTitleV57(){
    const box=document.getElementById("hero1");
    const title=box&&box.querySelector(".hero1-title");
    const lines=title?[...title.querySelectorAll("span")]:[];
    if(!box||!title||!lines.length)return;

    title.style.removeProperty("font-size");

    requestAnimationFrame(()=>{
      const target=box.clientWidth;
      if(!target)return;

      const base=parseFloat(getComputedStyle(title).fontSize)||72;
      const widest=Math.max(...lines.map(el=>el.getBoundingClientRect().width),1);
      let size=base*(target/widest);
      title.style.setProperty("font-size",size.toFixed(3)+"px","important");

      requestAnimationFrame(()=>{
        const measured=Math.max(...lines.map(el=>el.getBoundingClientRect().width),1);
        if(measured>0){
          size=size*(target/measured);
          title.style.setProperty("font-size",size.toFixed(3)+"px","important");
        }
      });
    });
  }

  addEventListener("load",fitHeroTitleV57);
  addEventListener("resize",fitHeroTitleV57);
  addEventListener("orientationchange",()=>setTimeout(fitHeroTitleV57,260));
  if(document.fonts&&document.fonts.ready)document.fonts.ready.then(fitHeroTitleV57);
  requestAnimationFrame(fitHeroTitleV57);
})();

;(()=>{
  function fitGroupToExactWidth(container, lines, minPx, maxPx){
    if(!container||!lines.length)return;

    container.style.removeProperty("font-size");
    lines.forEach(el=>{
      el.style.setProperty("width","max-content","important");
      el.style.setProperty("max-width","none","important");
    });

    requestAnimationFrame(()=>{
      const target=Math.max(1,window.innerWidth-72);
      const natural=Math.max(...lines.map(el=>el.getBoundingClientRect().width),1);
      const base=parseFloat(getComputedStyle(container).fontSize)||maxPx;
      let size=base*(target/natural);
      size=Math.max(minPx,Math.min(maxPx,size));
      container.style.setProperty("font-size",size.toFixed(2)+"px","important");

      requestAnimationFrame(()=>{
        lines.forEach(el=>{
          el.style.setProperty("width","calc(100vw - 72px)","important");
          el.style.setProperty("max-width","calc(100vw - 72px)","important");
        });
      });
    });
  }

  function fitHeroV58(){
    const hero=document.getElementById("hero1");
    const title=hero&&hero.querySelector(".hero1-title");
    const lines=title?[...title.querySelectorAll("span")]:[];
    if(!hero||!title||!lines.length)return;

    title.style.removeProperty("font-size");
    lines.forEach(el=>{
      el.style.setProperty("width","max-content","important");
      el.style.setProperty("max-width","none","important");
    });

    requestAnimationFrame(()=>{
      const target=Math.max(1,window.innerWidth-72);
      const natural=Math.max(...lines.map(el=>el.getBoundingClientRect().width),1);
      const base=parseFloat(getComputedStyle(title).fontSize)||72;
      let size=base*(target/natural);
      size=Math.max(34,Math.min(120,size));
      title.style.setProperty("font-size",size.toFixed(2)+"px","important");
      title.style.setProperty("width","calc(100vw - 72px)","important");
      title.style.setProperty("max-width","calc(100vw - 72px)","important");
    });
  }

  function fitSaluteV58(){
    const salute=document.querySelector(".salute");
    const lines=salute?[...salute.querySelectorAll(".salute-line")]:[];
    fitGroupToExactWidth(salute,lines,24,100);
  }

  function fitAddressV58(){
    const address=document.querySelector(".address");
    const lines=address?[...address.querySelectorAll(".address-line")]:[];
    if(!address||!lines.length)return;

    lines.forEach(el=>{
      el.style.removeProperty("font-size");
      el.style.setProperty("width","max-content","important");
      el.style.setProperty("max-width","none","important");
    });

    requestAnimationFrame(()=>{
      const target=Math.max(1,window.innerWidth-72);
      lines.forEach((el,i)=>{
        const natural=el.getBoundingClientRect().width||1;
        const base=parseFloat(getComputedStyle(el).fontSize)||(i===0?72:32);
        let size=base*(target/natural);
        size=Math.max(i===0?28:16,Math.min(i===0?140:80,size));
        el.style.setProperty("font-size",size.toFixed(2)+"px","important");
        el.style.setProperty("width","calc(100vw - 72px)","important");
        el.style.setProperty("max-width","calc(100vw - 72px)","important");
      });
    });
  }

  function fitProgramTextV58(){
    const program=document.querySelector(".program");
    if(!program)return;

    const rows=[...program.querySelectorAll(".program-row")];
    const texts=rows.map(r=>r.querySelector(".program-text")).filter(Boolean);
    if(!rows.length||!texts.length)return;

    texts.forEach(el=>el.style.removeProperty("font-size"));

    requestAnimationFrame(()=>{
      let scale=Infinity;

      rows.forEach(row=>{
        const text=row.querySelector(".program-text");
        if(!text)return;

        const rowStyle=getComputedStyle(row);
        const cols=rowStyle.gridTemplateColumns.split(" ");
        const available=text.getBoundingClientRect().width;
        const natural=text.scrollWidth||1;
        if(available>0&&natural>0){
          scale=Math.min(scale,available/natural);
        }
      });

      if(!Number.isFinite(scale))return;

      const base=Math.min(...texts.map(el=>parseFloat(getComputedStyle(el).fontSize)||16));
      let size=base*scale;
      size=Math.max(base,Math.min(size,34));

      texts.forEach(el=>{
        el.style.setProperty("font-size",size.toFixed(2)+"px","important");
        el.textContent=el.textContent.toLocaleLowerCase("ru-RU");
      });
    });
  }

  function runV58(){
    fitHeroV58();
    fitSaluteV58();
    fitAddressV58();
    fitProgramTextV58();
  }

  addEventListener("load",()=>requestAnimationFrame(runV58));
  addEventListener("resize",()=>requestAnimationFrame(runV58));
  addEventListener("orientationchange",()=>setTimeout(runV58,260));
  if(document.fonts&&document.fonts.ready)document.fonts.ready.then(()=>requestAnimationFrame(runV58));
  requestAnimationFrame(runV58);
})();

;(()=>{
  function fitProgramTextMaxV59(){
    const rows=[...document.querySelectorAll(".program-row")];
    if(!rows.length)return;

    rows.forEach(row=>{
      const text=row.querySelector(".program-text");
      if(!text)return;

      text.textContent=text.textContent.toLocaleLowerCase("ru-RU");
      text.style.removeProperty("font-size");

      requestAnimationFrame(()=>{
        const available=text.getBoundingClientRect().width;
        if(!available)return;

        let low=10;
        let high=64;
        let best=low;

        for(let i=0;i<12;i++){
          const mid=(low+high)/2;
          text.style.setProperty("font-size",mid.toFixed(2)+"px","important");

          const fits=text.scrollWidth<=available+0.5 &&
                     text.getBoundingClientRect().width<=available+0.5;

          if(fits){
            best=mid;
            low=mid;
          }else{
            high=mid;
          }
        }

        text.style.setProperty("font-size",best.toFixed(2)+"px","important");
      });
    });
  }

  function runV59(){
    fitProgramTextMaxV59();
  }

  addEventListener("load",()=>requestAnimationFrame(runV59));
  addEventListener("resize",()=>requestAnimationFrame(runV59));
  addEventListener("orientationchange",()=>setTimeout(runV59,260));
  if(document.fonts&&document.fonts.ready)document.fonts.ready.then(()=>requestAnimationFrame(runV59));
  requestAnimationFrame(runV59);
})();

;(()=>{
  function fitHeroDateV60(){
    const hero=document.getElementById("hero1");
    const date=hero&&hero.querySelector(".hero1-date");
    if(!hero||!date)return;

    date.style.removeProperty("font-size");
    date.style.setProperty("width","100%","important");
    date.style.setProperty("max-width","100%","important");

    requestAnimationFrame(()=>{
      const target=hero.clientWidth;
      const natural=date.getBoundingClientRect().width||1;
      const base=parseFloat(getComputedStyle(date).fontSize)||36;
      let size=base*(target/natural);
      size=Math.max(20,Math.min(72,size));
      date.style.setProperty("font-size",size.toFixed(2)+"px","important");

      requestAnimationFrame(()=>{
        const measured=date.scrollWidth||1;
        if(measured>target+0.5){
          size=size*(target/measured);
          date.style.setProperty("font-size",size.toFixed(2)+"px","important");
        }
      });
    });
  }

  function runV60(){
    fitHeroDateV60();
  }

  addEventListener("load",()=>requestAnimationFrame(runV60));
  addEventListener("resize",()=>requestAnimationFrame(runV60));
  addEventListener("orientationchange",()=>setTimeout(runV60,260));
  if(document.fonts&&document.fonts.ready)document.fonts.ready.then(()=>requestAnimationFrame(runV60));
  requestAnimationFrame(runV60);
})();

;(()=>{
  function fitProgramTextUniformV61(){
    const program=document.querySelector(".program");
    if(!program)return;

    const texts=[...program.querySelectorAll(".program-text")];
    if(!texts.length)return;

    texts.forEach(el=>{
      el.textContent=el.textContent.toLocaleLowerCase("ru-RU");
      el.style.removeProperty("font-size");
    });

    requestAnimationFrame(()=>{
      const availableWidths=texts.map(el=>el.getBoundingClientRect().width);
      if(availableWidths.some(w=>w<=0))return;

      let low=10;
      let high=64;
      let best=low;

      for(let i=0;i<14;i++){
        const mid=(low+high)/2;
        texts.forEach(el=>el.style.setProperty("font-size",mid.toFixed(3)+"px","important"));

        const allFit=texts.every((el,idx)=>el.scrollWidth<=availableWidths[idx]+0.5);

        if(allFit){
          best=mid;
          low=mid;
        }else{
          high=mid;
        }
      }

      texts.forEach(el=>el.style.setProperty("font-size",best.toFixed(3)+"px","important"));
    });
  }

  function fitAddressExactV61(){
    const address=document.querySelector(".address");
    const lines=address?[...address.querySelectorAll(".address-line")]:[];
    if(!address||lines.length<2)return;

    const target=Math.max(1,window.innerWidth-72);

    lines.forEach(el=>{
      el.style.removeProperty("font-size");
      el.style.setProperty("width","max-content","important");
      el.style.setProperty("max-width","none","important");
    });

    requestAnimationFrame(()=>{
      lines.forEach((el,i)=>{
        const natural=el.getBoundingClientRect().width||1;
        const base=parseFloat(getComputedStyle(el).fontSize)||(i===0?72:32);
        let size=base*(target/natural);
        size=Math.max(i===0?28:16,Math.min(i===0?150:90,size));
        el.style.setProperty("font-size",size.toFixed(3)+"px","important");
      });

      requestAnimationFrame(()=>{
        lines.forEach(el=>{
          const measured=el.getBoundingClientRect().width||1;
          const current=parseFloat(getComputedStyle(el).fontSize)||32;
          const corrected=current*(target/measured);
          el.style.setProperty("font-size",corrected.toFixed(3)+"px","important");
          el.style.setProperty("width","calc(100vw - 72px)","important");
          el.style.setProperty("max-width","calc(100vw - 72px)","important");
        });
      });
    });
  }

  function runV61(){
    fitProgramTextUniformV61();
    fitAddressExactV61();
  }

  addEventListener("load",()=>requestAnimationFrame(runV61));
  addEventListener("resize",()=>requestAnimationFrame(runV61));
  addEventListener("orientationchange",()=>setTimeout(runV61,260));
  if(document.fonts&&document.fonts.ready)document.fonts.ready.then(()=>requestAnimationFrame(runV61));
  requestAnimationFrame(runV61);
})();

;(()=>{
  const qs=(s,r=document)=>r.querySelector(s);
  const qsa=(s,r=document)=>[...r.querySelectorAll(s)];

  function fitCommonFont(container,lines,minPx,maxPx){
    if(!container||!lines.length)return;
    const target=container.clientWidth;
    if(!target)return;

    container.style.removeProperty("font-size");
    lines.forEach(el=>{
      el.style.setProperty("width","max-content","important");
      el.style.setProperty("max-width","none","important");
    });

    requestAnimationFrame(()=>{
      const natural=Math.max(...lines.map(el=>el.getBoundingClientRect().width),1);
      const base=parseFloat(getComputedStyle(container).fontSize)||maxPx;
      const size=Math.max(minPx,Math.min(maxPx,base*(target/natural)));
      container.style.setProperty("font-size",size.toFixed(3)+"px","important");
      lines.forEach(el=>{
        el.style.setProperty("width","100%","important");
        el.style.setProperty("max-width","100%","important");
      });
    });
  }

  function fitHeroV65(){
    const hero1=qs("#hero1");
    if(!hero1)return;
    const target=hero1.clientWidth;
    if(!target)return;

    const date=qs(".hero1-date",hero1);
    const title=qs(".hero1-title",hero1);
    const titleLines=title?qsa("span",title):[];

    if(title&&titleLines.length){
      title.style.removeProperty("font-size");
      titleLines.forEach(el=>{
        el.style.setProperty("width","max-content","important");
        el.style.setProperty("max-width","none","important");
      });
      requestAnimationFrame(()=>{
        const natural=Math.max(...titleLines.map(el=>el.getBoundingClientRect().width),1);
        const base=parseFloat(getComputedStyle(title).fontSize)||72;
        const size=Math.max(34,Math.min(120,base*(target/natural)));
        title.style.setProperty("font-size",size.toFixed(3)+"px","important");
        title.style.setProperty("width","100%","important");
        title.style.setProperty("max-width","100%","important");
      });
    }

    if(date){
      date.style.removeProperty("font-size");
      date.style.setProperty("width","max-content","important");
      date.style.setProperty("max-width","none","important");
      requestAnimationFrame(()=>{
        const natural=date.getBoundingClientRect().width||1;
        const base=parseFloat(getComputedStyle(date).fontSize)||36;
        const size=Math.max(20,Math.min(72,base*(target/natural)));
        date.style.setProperty("font-size",size.toFixed(3)+"px","important");
        date.style.setProperty("width","100%","important");
        date.style.setProperty("max-width","100%","important");
      });
    }
  }

  function fitSaluteV65(){
    const salute=qs(".salute");
    if(!salute)return;
    fitCommonFont(salute,qsa(".salute-line",salute),24,100);
  }

  function fitAddressV65(){
    const address=qs(".address");
    const lines=address?qsa(".address-line",address):[];
    if(!address||!lines.length)return;
    const target=address.clientWidth;
    if(!target)return;

    lines.forEach(el=>{
      el.style.removeProperty("font-size");
      el.style.setProperty("width","max-content","important");
      el.style.setProperty("max-width","none","important");
    });

    requestAnimationFrame(()=>{
      lines.forEach((el,i)=>{
        const natural=el.getBoundingClientRect().width||1;
        const base=parseFloat(getComputedStyle(el).fontSize)||(i===0?72:32);
        const min=i===0?28:16;
        const max=i===0?150:90;
        const size=Math.max(min,Math.min(max,base*(target/natural)));
        el.style.setProperty("font-size",size.toFixed(3)+"px","important");
        el.style.setProperty("width","100%","important");
        el.style.setProperty("max-width","100%","important");
      });
    });
  }

  function fitProgramV65(){
    const program=qs(".program");
    if(!program)return;
    const times=qsa(".program-time",program);
    const texts=qsa(".program-text",program);
    if(!times.length||!texts.length)return;

    /* Shared first column = widest time + standard 18px gap. */
    requestAnimationFrame(()=>{
      const widest=Math.max(...times.map(el=>el.getBoundingClientRect().width),0);
      program.style.setProperty("--program-time-col",(widest+18).toFixed(2)+"px");

      texts.forEach(el=>{
        el.textContent=el.textContent.toLocaleLowerCase("ru-RU");
        el.style.removeProperty("font-size");
      });

      requestAnimationFrame(()=>{
        const available=texts.map(el=>el.getBoundingClientRect().width);
        let low=10, high=64, best=10;

        for(let i=0;i<14;i++){
          const mid=(low+high)/2;
          texts.forEach(el=>el.style.setProperty("font-size",mid.toFixed(3)+"px","important"));
          const fits=texts.every((el,index)=>el.scrollWidth<=available[index]+.5);
          if(fits){best=mid;low=mid}else{high=mid}
        }

        texts.forEach(el=>el.style.setProperty("font-size",best.toFixed(3)+"px","important"));
      });
    });
  }

  function lockHorizontal(){
    document.documentElement.scrollLeft=0;
    document.body.scrollLeft=0;
  }

  function runV65(){
    lockHorizontal();
    fitHeroV65();
    fitSaluteV65();
    fitProgramV65();
    fitAddressV65();
  }

  addEventListener("load",()=>requestAnimationFrame(runV65));
  addEventListener("resize",()=>requestAnimationFrame(runV65));
  addEventListener("orientationchange",()=>setTimeout(runV65,260));
  if(document.fonts&&document.fonts.ready)document.fonts.ready.then(()=>requestAnimationFrame(runV65));
  requestAnimationFrame(runV65);
})();

;(()=>{
  const q=(s,r=document)=>r.querySelector(s);
  const qa=(s,r=document)=>[...r.querySelectorAll(s)];

  function px(el,prop){
    return parseFloat(getComputedStyle(el)[prop])||0;
  }

  function fitScreen2HeightV68(){
    const shell=q(".screen2-shell");
    const salute=q(".salute");
    const invite=q(".invite-copy");
    const program=q(".program");
    const address=q(".address-footer");
    const divider=q(".screen-divider");
    if(!shell||!salute||!invite||!program||!address||!divider)return;

    /* Reset previous height-fit scaling. Width-fit code remains in control horizontally. */
    [salute,invite].forEach(el=>el.style.removeProperty("--v68-size"));
    qa(".program-time,.program-text,.address-line").forEach(el=>el.style.removeProperty("--v68-size"));

    requestAnimationFrame(()=>{
      const available=shell.clientHeight;
      if(!available)return;

      const blocks=[salute,invite,divider,program,address];
      const contentHeight=blocks.reduce((sum,el)=>sum+el.getBoundingClientRect().height,0);
      const targetGap=14;
      const targetTotal=contentHeight+targetGap*4;

      if(targetTotal<=available)return;

      /* Reduce only typography, preserving every requested width. */
      const ratio=Math.max(.78,Math.min(1,(available-targetGap*4)/Math.max(contentHeight,1)));

      const scaleFont=(el,min)=>{
        const current=parseFloat(getComputedStyle(el).fontSize)||min;
        el.style.setProperty("font-size",Math.max(min,current*ratio).toFixed(2)+"px","important");
      };

      scaleFont(salute,36);
      scaleFont(invite,28);

      qa(".program-time").forEach(el=>scaleFont(el,20));
      qa(".program-text").forEach(el=>scaleFont(el,18));
      const addressLines=qa(".address-line");
      if(addressLines[0])scaleFont(addressLines[0],42);
      if(addressLines[1])scaleFont(addressLines[1],22);
    });
  }

  function runV68(){
    fitScreen2HeightV68();
  }

  addEventListener("load",()=>requestAnimationFrame(runV68));
  addEventListener("resize",()=>requestAnimationFrame(runV68));
  addEventListener("orientationchange",()=>setTimeout(runV68,260));
  if(document.fonts&&document.fonts.ready)document.fonts.ready.then(()=>requestAnimationFrame(runV68));
  requestAnimationFrame(runV68);
})();

;(()=>{
  function chooseStableProfile(){
    const sw=Math.min(screen.width||0,screen.height||0);
    const sh=Math.max(screen.width||0,screen.height||0);
    let p="xl";
    if(sh<=667)p="compact";
    else if(sh<=736)p="small";
    else if(sh<=812)p="medium";
    else if(sh<=852)p="standard";
    else if(sh<=896)p="large";
    document.documentElement.dataset.s2Profile=p;
    document.documentElement.style.setProperty("--device-css-w",sw+"px");
    document.documentElement.style.setProperty("--device-css-h",sh+"px");
  }

  function pxVar(name,fallback){
    const v=parseFloat(getComputedStyle(document.documentElement).getPropertyValue(name));
    return Number.isFinite(v)?v:fallback;
  }

  function fitProgramCommonText(){
    const program=document.querySelector(".program");
    if(!program)return;
    const times=[...program.querySelectorAll(".program-time")];
    const texts=[...program.querySelectorAll(".program-text")];
    if(!times.length||!texts.length)return;

    const widest=Math.max(...times.map(el=>el.getBoundingClientRect().width),0);
    program.style.setProperty("--program-time-col",(widest+18).toFixed(2)+"px");

    texts.forEach(el=>{
      el.textContent=el.textContent.toLocaleLowerCase("ru-RU");
      el.style.removeProperty("font-size");
    });

    requestAnimationFrame(()=>{
      const available=texts.map(el=>el.getBoundingClientRect().width);
      let low=10, high=64, best=10;
      for(let i=0;i<14;i++){
        const mid=(low+high)/2;
        texts.forEach(el=>el.style.setProperty("font-size",mid.toFixed(3)+"px","important"));
        const fits=texts.every((el,index)=>el.scrollWidth<=available[index]+.5);
        if(fits){best=mid;low=mid}else{high=mid}
      }
      texts.forEach(el=>el.style.setProperty("font-size",best.toFixed(3)+"px","important"));
      fitSecondScreenHeight();
    });
  }

  function fitSecondScreenHeight(){
    const screen2=document.querySelector(".screen2");
    const shell=document.querySelector(".screen2-shell");
    const salute=document.querySelector(".salute");
    const invite=document.querySelector(".invite-copy");
    const divider=document.querySelector(".screen-divider");
    const program=document.querySelector(".program");
    const address=document.querySelector(".address-footer");
    if(!screen2||!shell||!salute||!invite||!divider||!program||!address)return;

    screen2.classList.remove("is-tight");
    program.style.removeProperty("--s2-program-h");
    document.documentElement.style.removeProperty("--s2-program-h");

    requestAnimationFrame(()=>{
      const shellH=shell.clientHeight;
      const minGap=pxVar("--s2-gap-min",10);
      const target=pxVar("--s2-program-target",160);

      const fixed=
        salute.getBoundingClientRect().height+
        invite.getBoundingClientRect().height+
        divider.getBoundingClientRect().height+
        address.getBoundingClientRect().height;

      const rows=[...program.querySelectorAll(".program-row")];
      const rowContent=rows.reduce((sum,row)=>sum+row.getBoundingClientRect().height,0);
      const rowSpacing=Math.max(0,(rows.length-1)*4);
      const programFloor=Math.max(92,rowContent+rowSpacing);

      let maxProgram=shellH-fixed-(minGap*4);
      let programH=Math.min(target,maxProgram);
      programH=Math.max(programFloor,programH);

      if(fixed+programH+(minGap*4)>shellH){
        screen2.classList.add("is-tight");
        requestAnimationFrame(()=>{
          const tightGap=pxVar("--s2-gap-min",5);
          const fixedT=
            salute.getBoundingClientRect().height+
            invite.getBoundingClientRect().height+
            divider.getBoundingClientRect().height+
            address.getBoundingClientRect().height;
          const rowsT=[...program.querySelectorAll(".program-row")];
          const contentT=rowsT.reduce((sum,row)=>sum+row.getBoundingClientRect().height,0);
          const floorT=Math.max(82,contentT+Math.max(0,(rowsT.length-1)*3));
          const maxT=Math.max(floorT,shell.clientHeight-fixedT-(tightGap*4));
          const hT=Math.max(floorT,Math.min(target,maxT));
          document.documentElement.style.setProperty("--s2-program-h",hT.toFixed(2)+"px");
          positionAddressRule();
        });
      }else{
        document.documentElement.style.setProperty("--s2-program-h",programH.toFixed(2)+"px");
        requestAnimationFrame(positionAddressRule);
      }
    });
  }

  function positionAddressRule(){
    const program=document.querySelector(".program");
    const address=document.querySelector(".address-footer");
    if(!program||!address)return;
    const gap=address.getBoundingClientRect().top-program.getBoundingClientRect().bottom;
    const top=-Math.max(1,gap/2);
    address.style.setProperty("--address-rule-top",top.toFixed(2)+"px");
  }

  function removeNestedScroll(){
    const screen2=document.querySelector(".screen2");
    const shell=document.querySelector(".screen2-shell");
    if(screen2){
      screen2.scrollTop=0;
      screen2.style.setProperty("overflow","clip","important");
    }
    if(shell) shell.scrollTop=0;
  }

  function runV68(){
    chooseStableProfile();
    removeNestedScroll();
    requestAnimationFrame(()=>{
      fitProgramCommonText();
      fitSecondScreenHeight();
    });
  }

  addEventListener("load",runV68);
  addEventListener("orientationchange",()=>setTimeout(runV68,280));
  /* resize can fire when browser chrome animates; profile stays screen-based,
     only the no-scroll fit is revalidated. */
  addEventListener("resize",()=>requestAnimationFrame(()=>{
    removeNestedScroll();
    fitSecondScreenHeight();
  }));
  if(document.fonts&&document.fonts.ready)document.fonts.ready.then(runV68);
  requestAnimationFrame(runV68);
})();

;(()=>{
  const clamp=(v,a,b)=>Math.min(b,Math.max(a,v));

  function applyV70(){
    const screen2=document.querySelector(".screen2");
    const shell=document.querySelector(".screen2-shell");
    const salute=document.querySelector(".salute");
    const invite=document.querySelector(".invite-copy");
    const address=document.querySelector(".address");
    const lines=address?[...address.querySelectorAll(".address-line")]:[];
    if(!screen2||!shell)return;

    screen2.classList.remove("is-tight");

    /* Slightly reduce the two upper text blocks so the full composition fits naturally. */
    if(salute){
      const size=clamp(window.innerWidth*.095,37,50);
      salute.style.setProperty("font-size",size.toFixed(2)+"px","important");
      salute.style.setProperty("width","100%","important");
      salute.style.setProperty("max-width","100%","important");
    }
    if(invite){
      const size=clamp(window.innerWidth*.073,29,38);
      invite.style.setProperty("font-size",size.toFixed(2)+"px","important");
      invite.style.setProperty("line-height",".97","important");
    }

    if(address&&lines.length>=2){
      const target=Math.max(1,shell.clientWidth);
      address.style.setProperty("width","100%","important");
      address.style.setProperty("max-width","100%","important");

      lines.forEach(el=>{
        el.style.removeProperty("font-size");
        el.style.setProperty("width","max-content","important");
        el.style.setProperty("max-width","none","important");
        el.style.setProperty("white-space","nowrap","important");
        el.style.setProperty("letter-spacing","0","important");
      });

      requestAnimationFrame(()=>{
        lines.forEach((el,i)=>{
          const natural=Math.max(1,el.getBoundingClientRect().width);
          const base=parseFloat(getComputedStyle(el).fontSize)||(i===0?64:30);
          const fitted=base*((target*.985)/natural);
          const min=i===0?44:20;
          const max=i===0?112:48;
          el.style.setProperty("font-size",clamp(fitted,min,max).toFixed(2)+"px","important");
          el.style.setProperty("width","100%","important");
          el.style.setProperty("max-width","100%","important");
        });
      });
    }
  }

  function queueV70(){
    requestAnimationFrame(()=>requestAnimationFrame(applyV70));
    setTimeout(applyV70,120);
  }

  addEventListener("load",queueV70);
  addEventListener("resize",queueV70);
  addEventListener("orientationchange",()=>setTimeout(queueV70,320));
  if(document.fonts&&document.fonts.ready)document.fonts.ready.then(queueV70);
  queueV70();
})();

;(()=>{
  const TOTAL_SIDE_SPACE=76;
  const SIDE=38;
  const q=(s,r=document)=>r.querySelector(s);
  const qa=(s,r=document)=>[...r.querySelectorAll(s)];

  function esc(s){
    return String(s)
      .replaceAll("&","&amp;")
      .replaceAll("<","&lt;")
      .replaceAll(">","&gt;")
      .replaceAll('"',"&quot;")
      .replaceAll("'","&#39;");
  }

  function initialMarkup(word){
    const chars=Array.from(word||"");
    if(!chars.length)return "";
    return '<span class="v71-initial">'+esc(chars[0])+'</span>'+esc(chars.slice(1).join(""));
  }

  function getSaluteParts(){
    const old=q(".screen2 .salute");
    if(!old)return ["Уважаемый","Гость",""];

    /* Legacy layout may already contain separate .salute-line spans.
       Read them individually so textContent cannot concatenate
       "Уважаемый" + "Имя" + "Отчество" into one word. */
    const legacyLines=qa(".salute-line",old)
      .map(el=>(el.textContent||"").replace(/,\s*$/,"").trim())
      .filter(Boolean);

    if(legacyLines.length>=3){
      return [
        legacyLines[0],
        legacyLines[1],
        legacyLines.slice(2).join(" ")
      ];
    }

    const raw=(old.textContent||"Уважаемый Гость").replace(/,\s*$/,"").trim();
    const parts=raw.split(/\s+/).filter(Boolean);

    if(parts.length>=3){
      return [parts[0],parts[1],parts.slice(2).join(" ")];
    }
    if(parts.length===2){
      return [parts[0],parts[1],""];
    }
    return ["Уважаемый",parts[0]||"Гость",""];
  }

  function build(){
    const screen=q(".screen2");
    if(!screen||screen.classList.contains("v71-ready"))return;
    const parts=getSaluteParts();
    const saluteLines=parts.map(w=>'<span class="v71-line">'+initialMarkup(w)+'</span>').join("");
    screen.innerHTML=
      '<div class="v71-shell">'+
        '<section class="v71-salute v71-group" id="v71Salute">'+saluteLines+'</section>'+
        '<section class="v71-invite v71-group" id="v71Invite">'+
          '<span class="v71-line">буду рад</span>'+
          '<span class="v71-line">видеть вас</span>'+
          '<span class="v71-line">на ежегодном</span>'+
          '<span class="v71-line">мероприятии</span>'+
          '<span class="v71-line v71-gold">Октоберфест</span>'+
        '</section>'+
        '<section class="v71-meta-zone">'+
          '<div class="v71-divider" aria-hidden="true"></div>'+
          '<div class="v71-meta" id="v71Meta"><span class="v71-date">7 октября,</span> <span>18:30</span></div>'+
          '<div class="v71-divider" aria-hidden="true"></div>'+
        '</section>'+
        '<section class="v71-address-wrap">'+
          '<div class="v71-address" id="v71Address">'+
            '<a href="https://yandex.ru/maps/?text=%D0%9C%D0%9E%D0%A1%D0%9A%D0%92%D0%90%2C%20%D0%A2%D0%BA%D0%B0%D1%86%D0%BA%D0%B0%D1%8F%20%D1%83%D0%BB.%205%2C%20%D1%81%D1%82.%207" target="_blank" rel="noopener noreferrer">'+
              '<p class="v71-city" id="v71City">МОСКВА</p>'+
              '<p class="v71-street" id="v71Street">Ткацкая ул. 5, ст. 7</p>'+
            '</a>'+
          '</div>'+
        '</section>'+
      '</div>';
    screen.classList.add("v71-ready");
  }

  function pageWidth(){
    const screen=q(".screen2.v71-ready");
    if(!screen)return 393;
    const r=screen.getBoundingClientRect();
    return Math.max(220,r.width||screen.clientWidth||393);
  }
  function safeWidth(){return Math.max(180,pageWidth()-TOTAL_SIDE_SPACE)}
  function setGeometry(){
    const screen=q(".screen2.v71-ready");
    if(!screen)return 317;
    const safe=safeWidth();
    screen.style.setProperty("--v71-side",SIDE+"px");
    screen.style.setProperty("--v71-safe",safe.toFixed(2)+"px");
    return safe;
  }
  function fitBlock(el,selector,target){
    if(!el)return;
    const nodes=selector?qa(selector,el):[el];
    let low=4,high=180;
    for(let i=0;i<18;i++){
      const mid=(low+high)/2;
      el.style.fontSize=mid.toFixed(3)+"px";
      const width=Math.max(...nodes.map(n=>n.getBoundingClientRect().width),1);
      if(width<=target)low=mid;else high=mid;
    }
    el.style.fontSize=low.toFixed(3)+"px";
  }
  function fitLine(el,target){
    if(!el)return;
    let low=4,high=180;
    for(let i=0;i<18;i++){
      const mid=(low+high)/2;
      el.style.fontSize=mid.toFixed(3)+"px";
      const width=Math.max(el.getBoundingClientRect().width,1);
      if(width<=target)low=mid;else high=mid;
    }
    el.style.fontSize=low.toFixed(3)+"px";
  }

  function fitAll(){
    if(!q(".screen2.v71-ready"))build();
    const safe=setGeometry();
    const salute=q("#v71Salute"),invite=q("#v71Invite"),meta=q("#v71Meta"),
          city=q("#v71City"),street=q("#v71Street"),address=q("#v71Address");
    if(!salute||!invite||!meta||!city||!street||!address)return;

    fitBlock(salute,".v71-line",safe*.985);
    fitBlock(meta,null,safe*.965);

    const metaSize=parseFloat(getComputedStyle(meta).fontSize)||32;
    invite.style.fontSize=metaSize.toFixed(3)+"px";
    const inviteWidth=Math.max(...qa(".v71-line",invite).map(n=>n.getBoundingClientRect().width),1);
    if(inviteWidth>safe*.975){
      invite.style.fontSize=(metaSize*(safe*.975)/inviteWidth).toFixed(3)+"px";
    }

    fitLine(city,safe*.985);
    fitLine(street,safe*.985);
    const aw=Math.max(city.getBoundingClientRect().width,street.getBoundingClientRect().width);
    address.style.width=Math.min(aw,safe).toFixed(2)+"px";
  }

  let raf=0;
  function schedule(){
    cancelAnimationFrame(raf);
    raf=requestAnimationFrame(()=>requestAnimationFrame(fitAll));
  }

  build();
  schedule();
  addEventListener("load",schedule);
  addEventListener("resize",schedule);
  addEventListener("orientationchange",()=>setTimeout(schedule,180));
  addEventListener("pageshow",schedule);
  const screen=q(".screen2");
  if(screen&&"ResizeObserver" in window)new ResizeObserver(schedule).observe(screen);
  if(document.fonts){
    Promise.all([document.fonts.ready,document.fonts.load('100px "Fortuna Gothic FlorishC"')])
      .then(schedule).catch(schedule);
  }
  setTimeout(schedule,250);
  setTimeout(schedule,900);
})();
