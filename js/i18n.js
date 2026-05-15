window.translations = {
  pt: window.i18n_pt,
  en: window.i18n_en,
  es: window.i18n_es
};

window.currentLang = 'pt';

function setLang(lang) {
  const tr = window.translations[lang];
  if (!tr) return;
  window.currentLang = lang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (tr[key] !== undefined) el.textContent = tr[key];
  });

  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.dataset.i18nHtml;
    if (tr[key] !== undefined) el.innerHTML = tr[key];
  });

  if (tr['page-title']) document.title = tr['page-title'];

  document.documentElement.lang = { pt: 'pt-BR', en: 'en', es: 'es' }[lang] || lang;

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  const modal = document.getElementById('skill-modal');
  if (modal && modal.classList.contains('open')) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
    const icon = document.getElementById('modal-icon');
    if (icon) icon.style.display = '';
  }

  if (typeof buildSkillsGrid === 'function') buildSkillsGrid();

  localStorage.setItem('lang', lang);
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.dataset.lang));
  });

  const saved = localStorage.getItem('lang');
  if (saved && window.translations[saved]) setLang(saved);
});
