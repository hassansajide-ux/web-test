function setLang(lang, btn) {
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.querySelectorAll('.lang-btn').forEach((b) => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
}

function handleSubmit(btn) {
  const lang = document.documentElement.lang;
  const msgs = {
    en: "✓ Message Sent — We'll Be in Touch",
    fr: "✓ Message envoyé — Nous vous contacterons",
    ar: "✓ تم الإرسال — سنتواصل معك قريباً"
  };
  btn.textContent = msgs[lang] || msgs.en;
  btn.style.background = '#3a7d44';
  btn.style.color = '#fff';
}
