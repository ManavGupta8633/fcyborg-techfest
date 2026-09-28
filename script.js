const $=s=>document.querySelector(s), $$=s=>document.querySelectorAll(s);

// Preloader
let n=0;const load=$("#load"),track=$(".loader-track i");
const timer=setInterval(()=>{n+=Math.floor(Math.random()*10)+5;if(n>=100){n=100;clearInterval(timer);setTimeout(()=>$("#loader").classList.add("hide"),350)}load.textContent=String(n).padStart(2,"0")+"%";track.style.width=n+"%"},85);

// Cursor
const dot=$(".cursor-dot"),ring=$(".cursor-ring");
window.addEventListener("pointermove",e=>{dot.style.left=e.clientX+"px";dot.style.top=e.clientY+"px";ring.style.left=e.clientX+"px";ring.style.top=e.clientY+"px"});
$$("a,.btn,button").forEach(el=>el.addEventListener("mouseenter",()=>{ring.style.width="48px";ring.style.height="48px"}));
$$("a,.btn,button").forEach(el=>el.addEventListener("mouseleave",()=>{ring.style.width="31px";ring.style.height="31px"}));

// Mobile navigation
$(".menu").addEventListener("click",()=>document.querySelector("nav").classList.toggle("open"));

// Scroll reveal
const reveal=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")}),{threshold:.12});
$$(".reveal").forEach(el=>reveal.observe(el));

// Smooth navigation
$$('a[href^="#"]').forEach(a=>a.addEventListener("click",e=>{const t=document.querySelector(a.getAttribute("href"));if(t){e.preventDefault();t.scrollIntoView({behavior:"smooth"});document.querySelector("nav").classList.remove("open")}}));

// Active navigation
const sections=$$("main section[id]"),links=$$("nav a");
const active=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)links.forEach(a=>a.classList.toggle("active",a.getAttribute("href")==="#"+e.target.id))}),{rootMargin:"-40% 0px -50% 0px"});
sections.forEach(s=>active.observe(s));

// Magnetic buttons
$$(".magnetic").forEach(btn=>{
  btn.addEventListener("pointermove",e=>{const r=btn.getBoundingClientRect();btn.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.08}px,${(e.clientY-r.top-r.height/2)*.08}px)`});
  btn.addEventListener("pointerleave",()=>btn.style.transform="");
});

// Demo interaction
$(".security-copy .btn").addEventListener("click",()=>{});
document.querySelectorAll(".primary").forEach(btn=>btn.addEventListener("click",()=>{
  if(btn.classList.contains("magnetic"))return;
  $(".toast").classList.add("show");
  setTimeout(()=>$(".toast").classList.remove("show"),2600);
}));
