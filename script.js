const items = document.querySelectorAll('[data-reveal]');
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target);} });
},{threshold:.15});
items.forEach(i=>io.observe(i));

document.querySelectorAll('[data-lead-form]').forEach((form)=>{
  form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const name=form.querySelector('input[name="name"]')?.value?.trim();
    const phone=form.querySelector('input[name="phone"]')?.value?.trim();
    const msg=form.querySelector('textarea[name="msg"]')?.value?.trim();
    const out=form.querySelector('.form-msg');
    if(!name || !phone || !msg){
      out.textContent='Bitte Name, Telefon und Anliegen ausfüllen.';
      out.style.color='#b91c1c';
      return;
    }
    out.textContent='Danke! Anfrage gespeichert. Wir melden uns kurzfristig zurück.';
    out.style.color='#0f766e';
    form.reset();
  });
});
