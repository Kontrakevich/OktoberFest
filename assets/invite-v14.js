(()=>{const names={"Саркисян-АА":"Уважаемый Альберт Аргенович,","Клименов-ОА":"Уважаемый Олег Александрович,","Кочешкова-ЕВ":"Уважаемая Елена Викторовна,","Дагестанская-СИ":"Уважаемая Светлана Игоревна,","Рогачев-ДН":"Уважаемый Дмитрий Николаевич,","Юдинцев-АА":"Уважаемый Андрей Андреевич,","Панфилов-ДН":"Уважаемый Дмитрий Николаевич,","Оганезов-ГЕ":"Уважаемый Георгий Ервандович,","Переверзев-МВ":"Уважаемый Марк Владимирович,","Куликов-АА":"Уважаемый Альберт Александрович,","Засыпкина-ЮВ":"Уважаемая Юлия Валерьевна,","Балаев-ОВ":"Уважаемый Олег Вячеславович,","Бекишев-КВ":"Уважаемый Константин Владимирович,","Бельцина-ВБ":"Уважаемая Виктория Борисовна,","Борзыкин-АВ":"Уважаемый Алексей Валерьевич,","Вартик-СА":"Уважаемый Сергей Алексеевич,","Волков-АЮ":"Уважаемый Александр Юрьевич,","Воротынцев-АС":"Уважаемый Александр Стефанович,","Гаврилов-ВН":"Уважаемый Вадим Николаевич,","Герасимов-КВ":"Уважаемый Константин Вадимович,","Гомзиков-СЛ":"Уважаемый Сергей Львович,","Гришко-МА":"Уважаемая Мария Александровна,","Денисенко-НВ":"Уважаемая Наталья Владимировна,","Дюмина-АЮ":"Уважаемая Анастасия Юрьевна,","Калинина-СА":"Уважаемая Светлана Александровна,","Капанина-ЮО":"Уважаемая Юлия Олеговна,","Князев-ПЛ":"Уважаемый Павел Леонидович,","Константинов-АС":"Уважаемый Андрей Сергеевич,","Контракевич-МЮ":"Уважаемый Михаил Юрьевич,","Кочетова-ОН":"Уважаемая Оксана Николаевна,","Кочуева-ТН":"Уважаемая Тамара Николаевна,","Кулагина-ОС":"Уважаемая Оксана Сергеевна,","Кумирова-НВ":"Уважаемая Надежда Вячеславовна,","Ларионова-ЖВ":"Уважаемая Жанна Вячеславовна,","Латыпова-ЭИ":"Уважаемая Эмилия Ивановна,","Левашов-АИ":"Уважаемый Александр Иванович,","Левит-ГВ":"Уважаемый Григорий Владимирович,","Мешков-ДН":"Уважаемый Дмитрий Николаевич,","Милованов-ДС":"Уважаемый Дмитрий Сергеевич,","Науменко-АА":"Уважаемый Андрей Анатольевич,","Новожилов-МЛ":"Уважаемый Михаил Леонидович,","Поляков-МЮ":"Уважаемый Максим Юрьевич,","Пылаев-НС":"Уважаемый Николай Сергеевич,","Саманов-СВ":"Уважаемый Сергей Викторович,","Сапунов-ИС":"Уважаемый Илья Сергеевич,","Сараева-АГ":"Уважаемая Анна Григорьевна,","Селезнева-ЛГ":"Уважаемая Лидия Геннадьевна,","Смирнов-СВ":"Уважаемый Сергей Владимирович,","Сорокина-ЕВ":"Уважаемая Елена Викторовна,","Сторчак-РВ":"Уважаемый Роман Владимирович,","Тихонов-ЕА":"Уважаемый Евгений Александрович,","Толмачев-СА":"Уважаемый Сергей Александрович,","Ушаков-ДН":"Уважаемый Дмитрий Николаевич,","Фадеев-ВА":"Уважаемый Василий Александрович,","Фатеев-ДА":"Уважаемый Дмитрий Анатольевич,","Фокин-ПГ":"Уважаемый Павел Геннадьевич,","Хрипков-АВ":"Уважаемый Андрей Владимирович,","Хрущев-ЮВ":"Уважаемый Юрий Викторович,","Шкунова-ТН":"Уважаемая Татьяна Николаевна,","Щербаков-АИ":"Уважаемый Алексей Иванович,","Юрлов-СС":"Уважаемый Сергей Сергеевич,","Якушенокс-ЛМ":"Уважаемая Лиана Михайловна,"};const parts=location.pathname.split("/").filter(Boolean).map(decodeURIComponent);const key=parts[parts.length-1]==="index.html"?parts[parts.length-2]:parts[parts.length-1];
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
  const sectionTitle=document.querySelector(".section-title");
  const target=sectionTitle?parseFloat(getComputedStyle(sectionTitle).fontSize):(innerWidth>=900?80:48);
  let size=target;
  const min=innerWidth>=900?40:28;
  salute.style.fontSize=size+"px";
  while(size>min&&lines.some(l=>l.scrollWidth>salute.clientWidth)){
    size-=1;
    salute.style.fontSize=size+"px";
  }
}
function capFirst(el){if(!el)return;const walker=document.createTreeWalker(el,NodeFilter.SHOW_TEXT);let n;while((n=walker.nextNode())){const t=n.nodeValue;const i=t.search(/[А-ЯЁA-Z]/);if(i>=0){const frag=document.createDocumentFragment();if(i>0)frag.appendChild(document.createTextNode(t.slice(0,i)));const span=document.createElement("span");span.className="cap";span.textContent=t[i];frag.appendChild(span);if(i+1<t.length)frag.appendChild(document.createTextNode(t.slice(i+1)));n.parentNode.replaceChild(frag,n);break;}}}const scene=document.getElementById("scene"),video=document.getElementById("heroVideo"),shade=document.getElementById("shade"),hero1=document.getElementById("hero1"),hero2=document.getElementById("hero2"),hint=document.getElementById("hint"),topFade=document.getElementById("heroTopFade"),bottomFade=document.getElementById("heroBottomFade");if(!scene||!video)return;
const clamp=(v,a=0,b=1)=>Math.min(b,Math.max(a,v)),ease=t=>1-Math.pow(1-t,3),easeIO=t=>t<.5?2*t*t:1-Math.pow(-2*t+2,2)/2;let duration=5.06,target=0,visual=0,unlocked=false;
function unlock(){if(unlocked)return;unlocked=true;const p=video.play();if(p&&p.then)p.then(()=>{video.pause();video.currentTime=target}).catch(()=>{})}
function progress(){const r=scene.getBoundingClientRect(),travel=scene.offsetHeight-innerHeight;return clamp((-r.top)/Math.max(1,travel))}
function autoScroll(){unlock();window.scrollTo({top:scene.offsetTop+scene.offsetHeight-innerHeight,behavior:"smooth"})}
if(hint)hint.addEventListener("click",autoScroll);
function render(){const p=progress();target=clamp(p/.78)*duration;visual+=(target-visual)*.22;if(video.readyState>=2&&Math.abs(video.currentTime-visual)>.008){try{video.currentTime=visual}catch(e){}}
const exit=clamp(p/.14),e=ease(exit);if(hero1){hero1.style.opacity=String(1-e);hero1.style.transform='translateY('+(-90*e)+'px)'}if(hint){hint.style.opacity=String(1-e);hint.style.transform='translate3d(-50%,'+(-36*e)+'px,0)'}
const h2in=ease(clamp((p-.56)/.18)),h2=h2in;if(hero2){hero2.style.opacity=String(h2);hero2.style.transform='translateY('+(42*(1-h2in))+'px)'}if(bottomFade)bottomFade.style.opacity=String(Math.max(.58,h2));if(topFade)topFade.style.opacity=String(Math.max(.42,1-exit*.55));
const d=easeIO(clamp((p-.72)/.28));if(shade)shade.style.opacity=String(d*.9);requestAnimationFrame(render)}
video.addEventListener("loadedmetadata",()=>{if(Number.isFinite(video.duration)&&video.duration>0)duration=video.duration;video.pause();try{video.currentTime=0}catch(e){}});
addEventListener("touchstart",unlock,{once:true,passive:true});addEventListener("pointerdown",unlock,{once:true,passive:true});addEventListener("wheel",unlock,{once:true,passive:true});addEventListener("resize",fitSalute);addEventListener("orientationchange",()=>setTimeout(fitSalute,250));fitSalute();document.querySelectorAll(".salute-line").forEach(capFirst);capFirst(document.querySelector(".section-title"));capFirst(document.querySelector(".address a"));requestAnimationFrame(render)})();