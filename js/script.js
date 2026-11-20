const S=[["Corte na máquina",25],["Corte na tesoura",30],["Barba",15]];
const B=["Sem preferência"];
const H=["08:00","09:00","10:00","11:00","13:00","14:00","15:00","16:00","17:00","18:00"];
const st={s:null,b:0,h:null};
const $=i=>document.getElementById(i);
const addr=encodeURIComponent("Av. Piauí, 20, Junco, Picos, PI");
$("mp").href="https://www.google.com/maps/search/?api=1&query="+addr;
$("rt").href="https://www.google.com/maps/dir/?api=1&destination="+addr;
$("rb").href="https://wa.me/558994394624?text="+encodeURIComponent("Olá! Fui atendido na New Barbearia e quero deixar minha avaliação:");
const g=document.querySelectorAll("#g img");if(g.length)$("hb").src=g[g.length-1].src;
const d=$("d"),t=new Date();
d.min=t.getFullYear()+"-"+String(t.getMonth()+1).padStart(2,"0")+"-"+String(t.getDate()).padStart(2,"0");
const R=n=>"R$ "+n;
function draw(){
$("s").innerHTML=S.map((x,i)=>`<button type="button" data-s="${i}" aria-pressed="${st.s===i}">${x[0]} · ${R(x[1])}</button>`).join("");
$("b").innerHTML=B.map((x,i)=>`<button type="button" data-b="${i}" aria-pressed="${st.b===i}">${x}</button>`).join("");
$("t").innerHTML=H.map(x=>`<button type="button" data-h="${x}" aria-pressed="${st.h===x}">${x}</button>`).join("");
$("rs").textContent=st.s===null?"Escolha um serviço":S[st.s][0];
$("tot").textContent=st.s===null?"":R(S[st.s][1]);
$("go").disabled=!(st.s!==null&&st.h&&d.value);
}
document.addEventListener("click",e=>{const b=e.target.closest("button");if(!b)return;const k=b.dataset;
if(k.s!==undefined){st.s=+k.s;draw()}else if(k.b!==undefined){st.b=+k.b;draw()}else if(k.h){st.h=k.h;draw()}});
d.addEventListener("input",draw);
$("f").addEventListener("submit",e=>{e.preventDefault();
const [y,m,dd]=d.value.split("-"),n=$("n").value.trim(),s=S[st.s];
const wd=new Date(+y,+m-1,+dd).toLocaleDateString("pt-BR",{weekday:"long"});
const msg=`Olá! Tudo bem? ${n?"Me chamo "+n+" e gostaria":"Gostaria"} de agendar um horário.\n\n• Serviço: ${s[0]}\n\n• Barbeiro: ${B[st.b]}\n\n• Data: ${dd}/${m}/${y} (${wd})\n\n• Horário: ${st.h.replace(":","h")}\n\nGostaria de saber se há disponibilidade nesse horário e, caso esteja disponível, confirmar o agendamento.`;
const url="https://wa.me/558994394624?text="+encodeURIComponent(msg);
let w=null;try{w=window.open(url,"_blank")}catch(_){}
if(!w){try{window.top.location.href=url}catch(_){location.href=url}}
let fb=$("wl");if(!fb){fb=document.createElement("a");fb.id="wl";fb.target="_blank";fb.rel="noopener";fb.style.cssText="display:block;margin-top:12px;text-align:center;text-decoration:underline";fb.textContent="O WhatsApp não abriu? Toque aqui";$("go").after(fb)}
fb.href=url;});
const hd=$("h");addEventListener("scroll",()=>hd.classList.toggle("s",scrollY>40),{passive:true});
$("mn").onclick=()=>$("nv").classList.toggle("o");
$("nv").onclick=e=>{if(e.target.tagName==="A")$("nv").classList.remove("o")};
const io=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.classList.add("on");io.unobserve(x.target)}}),{threshold:.12});
document.querySelectorAll(".rv").forEach(x=>io.observe(x));
draw();
