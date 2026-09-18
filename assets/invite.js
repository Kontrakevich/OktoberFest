(()=>{
const cap=s=>s.replace(/^([А-ЯЁA-Z])/, '<span class="cap2">$1</span>');
const parts=location.pathname.split("/").filter(Boolean).map(decodeURIComponent);
const key=parts[parts.length-1]==="index.html"?parts[parts.length-2]:parts[parts.length-1];
const names={"Саркисян-АА":"Уважаемый Альберт Аргенович,","Клименов-ОА":"Уважаемый Олег Александрович,","Кочешкова-ЕВ":"Уважаемая Елена Викторовна,","Дагестанская-СИ":"Уважаемая Светлана Игоревна,","Рогачев-ДН":"Уважаемый Дмитрий Николаевич,","Юдинцев-АА":"Уважаемый Андрей Андреевич,","Панфилов-ДН":"Уважаемый Дмитрий Николаевич,","Оганезов-ГЕ":"Уважаемый Георгий Ервандович,","Переверзев-МВ":"Уважаемый Марк Владимирович,","Куликов-АА":"Уважаемый Альберт Александрович,","Засыпкина-ЮВ":"Уважаемая Юлия Валерьевна,","Балаев-ОВ":"Уважаемый Олег Вячеславович,","Бекишев-КВ":"Уважаемый Константин Владимирович,","Бельцина-ВБ":"Уважаемая Виктория Борисовна,","Борзыкин-АВ":"Уважаемый Алексей Валерьевич,","Вартик-СА":"Уважаемый Сергей Алексеевич,","Волков-АЮ":"Уважаемый Александр Юрьевич,","Воротынцев-АС":"Уважаемый Александр Стефанович,","Гаврилов-ВН":"Уважаемый Вадим Николаевич,","Герасимов-КВ":"Уважаемый Константин Вадимович,","Гомзиков-СЛ":"Уважаемый Сергей Львович,","Гришко-МА":"Уважаемая Мария Александровна,","Денисенко-НВ":"Уважаемая Наталья Владимировна,","Дюмина-АЮ":"Уважаемая Анастасия Юрьевна,","Калинина-СА":"Уважаемая Светлана Александровна,","Капанина-ЮО":"Уважаемая Юлия Олеговна,","Князев-ПЛ":"Уважаемый Павел Леонидович,","Константинов-АС":"Уважаемый Андрей Сергеевич,","Контракевич-МЮ":"Уважаемый Михаил Юрьевич,","Кочетова-ОН":"Уважаемая Оксана Николаевна,","Кочуева-ТН":"Уважаемая Тамара Николаевна,","Кулагина-ОС":"Уважаемая Оксана Сергеевна,","Кумирова-НВ":"Уважаемая Надежда Вячеславовна,","Ларионова-ЖВ":"Уважаемая Жанна Вячеславовна,","Латыпова-ЭИ":"Уважаемая Эмилия Ивановна,","Левашов-АИ":"Уважаемый Александр Иванович,","Левит-ГВ":"Уважаемый Григорий Владимирович,","Мешков-ДН":"Уважаемый Дмитрий Николаевич,","Милованов-ДС":"Уважаемый Дмитрий Сергеевич,","Науменко-АА":"Уважаемый Андрей Анатольевич,","Новожилов-МЛ":"Уважаемый Михаил Леонидович,","Поляков-МЮ":"Уважаемый Максим Юрьевич,","Пылаев-НС":"Уважаемый Николай Сергеевич,","Саманов-СВ":"Уважаемый Сергей Викторович,","Сапунов-ИС":"Уважаемый Илья Сергеевич,","Сараева-АГ":"Уважаемая Анна Григорьевна,","Селезнева-ЛГ":"Уважаемая Лидия Геннадьевна,","Смирнов-СВ":"Уважаемый Сергей Владимирович,","Сорокина-ЕВ":"Уважаемая Елена Викторовна,","Сторчак-РВ":"Уважаемый Роман Владимирович,","Тихонов-ЕА":"Уважаемый Евгений Александрович,","Толмачев-СА":"Уважаемый Сергей Александрович,","Ушаков-ДН":"Уважаемый Дмитрий Николаевич,","Фадеев-ВА":"Уважаемый Василий Александрович,","Фатеев-ДА":"Уважаемый Дмитрий Анатольевич,","Фокин-ПГ":"Уважаемый Павел Геннадьевич,","Хрипков-АВ":"Уважаемый Андрей Владимирович,","Хрущев-ЮВ":"Уважаемый Юрий Викторович,","Шкунова-ТН":"Уважаемая Татьяна Николаевна,","Щербаков-АИ":"Уважаемый Алексей Иванович,","Юрлов-СС":"Уважаемый Сергей Сергеевич,","Якушенокс-ЛМ":"Уважаемая Лиана Михайловна,"};
const salute=document.querySelector(".salute");
if(salute){
  const full=names[key]||salute.textContent.trim();
  const m=full.match(/^(Уважаем(?:ый|ая))\s+(.+),$/);
  if(m){
    const person=m[2].split(/\s+/);
    const namePart=person.map(cap).join(" ");
    salute.innerHTML='<span class="salute-line">'+cap(m[1])+'</span><span class="salute-line">'+namePart+',</span>';
  }
}
const inviteCopy=document.querySelector(".invite-copy");
if(inviteCopy){
  inviteCopy.innerHTML='<span class="invite-line">буду счастлив видеть</span><span class="invite-line">'+cap("Вас")+' на ежегодном</span><span class="invite-line">мероприятии «'+cap("Октоберфест")+'»</span>';
}
const date=document.querySelector(".date-big");
if(date) date.textContent="7.10 — 18:30";
const heroTime=document.querySelector(".hero-time");
if(heroTime) heroTime.remove();
const hint=document.getElementById("hint");
if(hint) hint.textContent="Листай вниз";
const address=document.querySelector(".address");
if(address){
  address.innerHTML='<strong>Адрес:</strong> <a href="https://yandex.ru/maps/?text='+encodeURIComponent("Москва, ул. Ткацкая 5, ст. 7")+'" target="_blank" rel="noopener noreferrer">Москва, ул. Ткацкая 5, ст. 7</a>';
}

const scene=document.getElementById("scene"),video=document.getElementById("heroVideo"),shade=document.getElementById("shade"),content=document.getElementById("content");
if(!scene||!video)return;
const clamp=(v,a=0,b=1)=>Math.min(b,Math.max(a,v)),ease=t=>1-Math.pow(1-t,3),easeIO=t=>t<.5?2*t*t:1-Math.pow(-2*t+2,2)/2;
let duration=5.06195,target=0,visual=0,unlocked=false,userMoved=false,autoStarted=false;
function progress(){const r=scene.getBoundingClientRect(),travel=scene.offsetHeight-innerHeight;return clamp((-r.top)/Math.max(1,travel))}
function unlock(){if(unlocked)return;unlocked=true;const p=video.play();if(p&&p.then)p.then(()=>{video.pause();video.currentTime=target}).catch(()=>{})}
function markUser(){userMoved=true}
["touchstart","pointerdown","wheel","keydown"].forEach(ev=>addEventListener(ev,markUser,{once:true,passive:true}));
addEventListener("scroll",()=>{if(!autoStarted&&scrollY>8)userMoved=true},{passive:true});
setTimeout(()=>{
  if(userMoved||scrollY>8)return;
  autoStarted=true;
  const end=scene.offsetTop+scene.offsetHeight-innerHeight;
  window.scrollTo({top:end,behavior:"smooth"});
},1000);
function render(){
  const p=progress();
  target=clamp(p/.78)*duration;
  visual+=(target-visual)*.22;
  if(video.readyState>=2&&Math.abs(video.currentTime-visual)>.008){try{video.currentTime=visual}catch(e){}}
  const d=easeIO(clamp((p-.72)/.28)),t=ease(clamp((p-.79)/.21));
  shade.style.opacity=String(d*.94);
  if(content){content.style.opacity=String(t);content.style.transform=`translate3d(0,${72*(1-t)}px,0)`;}
  if(hint) hint.style.opacity=String(clamp(.75*(1-p/.10)));
  requestAnimationFrame(render);
}
video.addEventListener("loadedmetadata",()=>{if(Number.isFinite(video.duration)&&video.duration>0)duration=video.duration;video.pause();try{video.currentTime=0}catch(e){}});
addEventListener("touchstart",unlock,{once:true,passive:true});
addEventListener("pointerdown",unlock,{once:true,passive:true});
addEventListener("wheel",unlock,{once:true,passive:true});
requestAnimationFrame(render);
})();