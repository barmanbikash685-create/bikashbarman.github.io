const menuBtn=document.querySelector('.menu-btn');
const nav=document.querySelector('#navLinks');
menuBtn.addEventListener('click',()=>{nav.style.display=nav.style.display==='flex'?'none':'flex'});
document.querySelectorAll('#navLinks a').forEach(a=>a.addEventListener('click',()=>{if(window.innerWidth<=800)nav.style.display='none'}));
document.getElementById('year').textContent=new Date().getFullYear();
