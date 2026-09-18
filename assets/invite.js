(()=>{
const names={"Саркисян-АА":"Уважаемый Альберт Аргенович,","Клименов-ОА":"Уважаемый Олег Александрович,","Кочешкова-ЕВ":"Уважаемая Елена Викторовна,","Дагестанская-СИ":"Уважаемая Светлана Игоревна,","Рогачев-ДН":"Уважаемый Дмитрий Николаевич,","Юдинцев-АА":"Уважаемый Андрей Андреевич,","Панфилов-ДН":"Уважаемый Дмитрий Николаевич,","Оганезов-ГЕ":"Уважаемый Георгий Ервандович,","Переверзев-МВ":"Уважаемый Марк Владимирович,","Куликов-АА":"Уважаемый Альберт Александрович,","Засыпкина-ЮВ":"Уважаемая Юлия Валерьевна,","Балаев-ОВ":"Уважаемый Олег Вячеславович,","Бекишев-КВ":"Уважаемый Константин Владимирович,","Бельцина-ВБ":"Уважаемая Виктория Борисовна,","Борзыкин-АВ":"Уважаемый Алексей Валерьевич,","Вартик-СА":"Уважаемый Сергей Алексеевич,","Волков-АЮ":"Уважаемый Александр Юрьевич,","Воротынцев-АС":"Уважаемый Александр Стефанович,","Гаврилов-ВН":"Уважаемый Вадим Николаевич,","Герасимов-КВ":"Уважаемый Константин Вадимович,","Гомзиков-СЛ":"Уважаемый Сергей Львович,","Гришко-МА":"Уважаемая Мария Александровна,","Денисенко-НВ":"Уважаемая Наталья Владимировна,","Дюмина-АЮ":"Уважаемая Анастасия Юрьевна,","Калинина-СА":"Уважаемая Светлана Александровна,","Капанина-ЮО":"Уважаемая Юлия Олеговна,","Князев-ПЛ":"Уважаемый Павел Леонидович,","Константинов-АС":"Уважаемый Андрей Сергеевич,","Контракевич-МЮ":"Уважаемый Михаил Юрьевич,","Кочетова-ОН":"Уважаемая Оксана Николаевна,","Кочуева-ТН":"Уважаемая Тамара Николаевна,","Кулагина-ОС":"Уважаемая Оксана Сергеевна,","Кумирова-НВ":"Уважаемая Надежда Вячеславовна,","Ларионова-ЖВ":"Уважаемая Жанна Вячеславовна,","Латыпова-ЭИ":"Уважаемая Эмилия Ивановна,","Левашов-АИ":"Уважаемый Александр Иванович,","Левит-ГВ":"Уважаемый Григорий Владимирович,","Мешков-ДН":"Уважаемый Дмитрий Николаевич,","Милованов-ДС":"Уважаемый Дмитрий Сергеевич,","Науменко-АА":"Уважаемый Андрей Анатольевич,","Новожилов-МЛ":"Уважаемый Михаил Леонидович,","Поляков-МЮ":"Уважаемый Максим Юрьевич,","Пылаев-НС":"Уважаемый Николай Сергеевич,","Саманов-СВ":"Уважаемый Сергей Викторович,","Сапунов-ИС":"Уважаемый Илья Сергеевич,","Сараева-АГ":"Уважаемая Анна Григорьевна,","Селезнева-ЛГ":"Уважаемая Лидия Геннадьевна,","Смирнов-СВ":"Уважаемый Сергей Владимирович,","Сорокина-ЕВ":"Уважаемая Елена Викторовна,","Сторчак-РВ":"Уважаемый Роман Владимирович,","Тихонов-ЕА":"Уважаемый Евгений Александрович,","Толмачев-СА":"Уважаемый Сергей Александрович,","Ушаков-ДН":"Уважаемый Дмитрий Николаевич,","Фадеев-ВА":"Уважаемый Василий Александрович,","Фатеев-ДА":"Уважаемый Дмитрий Анатольевич,","Фокин-ПГ":"Уважаемый Павел Геннадьевич,","Хрипков-АВ":"Уважаемый Андрей Владимирович,","Хрущев-ЮВ":"Уважаемый Юрий Викторович,","Шкунова-ТН":"Уважаемая Татьяна Николаевна,","Щербаков-АИ":"Уважаемый Алексей Иванович,","Юрлов-СС":"Уважаемый Сергей Сергеевич,","Якушенокс-ЛМ":"Уважаемая Лиана Михайловна,"};

const parts=location.pathname.split("/").filter(Boolean).map(decodeURIComponent);
const key=parts[parts.length-1]==="index.html"?parts[parts.length-2]:parts[parts.length-1];
const salute=document.querySelector(".salute");

function fitSalute(){
  if(!salute)return;
  const lines=[...salute.querySelectorAll(".salute-line")];
  if(!lines.length)return;
  const desktop=window.innerWidth>=900;
  let size=desktop?92:62;
  const min=desktop?48:30;
  salute.style.fontSize=size+"px";
  while(size>min && lines.some(line=>line.scrollWidth>salute.clientWidth)){
    size-=1;
    salute.style.fontSize=size+"px";
  }
}

if(salute){
  const full=(names[key]||salute.textContent.trim()).replace(/,$/,"");
  const m=full.match(/^(Уважаем(?:ый|ая))\s+(.+)$/);
  if(m){
    salute.innerHTML='<span class="salute-line">'+m[1]+'</span><span class="salute-line">'+m[2]+',</span>';
  }
}

const inviteCopy=document.querySelector(".invite-copy");
if(inviteCopy){
  inviteCopy.innerHTML=
    '<span class="invite-line">буду счастлив видеть</span>'+
    '<span class="invite-line">Вас на ежегодном</span>'+
    '<span class="invite-line">мероприятии «Октоберфест»</span>';
}

const date=document.querySelector(".date-big");
if(date)date.textContent="7.10 — 18:30";

const heroTime=document.querySelector(".hero-time");
if(heroTime)heroTime.remove();

const content=document.getElementById("content");
const heroTypo=content?content.querySelector(".hero-typo"):null;

const hero=document.querySelector(".hero");
let bottomFade=document.getElementById("heroBottomFade");
if(hero&&!bottomFade){
  bottomFade=document.createElement("div");
  bottomFade.className="hero-bottom-fade";
  bottomFade.id="heroBottomFade";
  hero.appendChild(bottomFade);
}

const hint=document.getElementById("hint");
if(hint)hint.textContent="Листай вниз";

const address=document.querySelector(".address");
const notice=document.querySelector(".notice");
if(address){
  address.innerHTML='<a href="https://yandex.ru/maps/?text='+encodeURIComponent("Москва, ул. Ткацкая 5, ст. 7")+'" target="_blank" rel="noopener noreferrer">Москва, ул. Ткацкая 5, ст. 7</a>';
}
if(address&&notice&&notice.parentNode){
  notice.parentNode.insertBefore(address,notice);
}

const scene=document.getElementById("scene");
const video=document.getElementById("heroVideo");
const shade=document.getElementById("shade");
if(!scene||!video)return;

const clamp=(v,a=0,b=1)=>Math.min(b,Math.max(a,v));
const easeOut=t=>1-Math.pow(1-t,3);
const easeInOut=t=>t<.5?2*t*t:1-Math.pow(-2*t+2,2)/2;

let duration=5.06195;
let target=0;
let visual=0;
let unlocked=false;
let userInteracted=false;
let autoStarted=false;
let autoTimerStarted=false;

function unlock(){
  if(unlocked)return;
  unlocked=true;
  const p=video.play();
  if(p&&p.then){
    p.then(()=>{video.pause();video.currentTime=target}).catch(()=>{});
  }
}

function progress(){
  const r=scene.getBoundingClientRect();
  const travel=scene.offsetHeight-innerHeight;
  return clamp((-r.top)/Math.max(1,travel));
}

function markInteraction(){
  userInteracted=true;
}

["touchstart","pointerdown","wheel","keydown"].forEach(ev=>{
  addEventListener(ev,markInteraction,{once:true,passive:true});
});

addEventListener("scroll",()=>{
  if(!autoStarted&&scrollY>8)userInteracted=true;
},{passive:true});

function armAutoScroll(){
  if(autoTimerStarted)return;
  autoTimerStarted=true;
  setTimeout(()=>{
    if(userInteracted||scrollY>8)return;
    autoStarted=true;
    unlock();
    const targetY=scene.offsetTop+scene.offsetHeight-innerHeight;
    window.scrollTo({top:targetY,behavior:"smooth"});
  },3000);
}

function render(){
  const p=progress();

  target=clamp(p/.78)*duration;
  visual+=(target-visual)*.22;
  if(video.readyState>=2&&Math.abs(video.currentTime-visual)>.008){
    try{video.currentTime=visual}catch(e){}
  }

  const d=easeInOut(clamp((p-.72)/.28));
  shade.style.opacity=String(d*.94);

  const heroExit=clamp(p/.14);
  const heroShift=heroExit*120;
  const heroOpacity=1-easeOut(heroExit);

  if(heroTypo){
    heroTypo.style.transform='translate3d(0,'+(-heroShift)+'px,0)';
    heroTypo.style.opacity=String(heroOpacity);
  }

  const hintExit=clamp(p/.12);
  const hintShift=hintExit*70;
  const hintOpacity=1-easeOut(hintExit);

  if(hint){
    hint.style.transform='translate3d(-50%,'+(-hintShift)+'px,0)';
    hint.style.opacity=String(hintOpacity);
  }

  if(bottomFade){
    bottomFade.style.transform='translate3d(0,'+(-hintShift)+'px,0)';
    bottomFade.style.opacity=String(hintOpacity);
  }

  requestAnimationFrame(render);
}

video.addEventListener("loadedmetadata",()=>{
  if(Number.isFinite(video.duration)&&video.duration>0)duration=video.duration;
  video.pause();
  try{video.currentTime=0}catch(e){}
});

window.addEventListener("load",()=>{
  fitSalute();
  armAutoScroll();
});

window.addEventListener("resize",fitSalute);
window.addEventListener("orientationchange",()=>setTimeout(fitSalute,250));

addEventListener("touchstart",unlock,{once:true,passive:true});
addEventListener("pointerdown",unlock,{once:true,passive:true});
addEventListener("wheel",unlock,{once:true,passive:true});

if(document.readyState==="complete"){
  fitSalute();
  armAutoScroll();
}

requestAnimationFrame(render);
})();