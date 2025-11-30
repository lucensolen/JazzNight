
document.querySelectorAll('[data-scroll]').forEach((btn) => {
  btn.addEventListener('click', () => {
    const targetId = btn.getAttribute('data-scroll');
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

const reserveForm = document.getElementById('reserveForm');
const reserveStatus = document.getElementById('reserveStatus');

if (reserveForm && reserveStatus) {
  reserveForm.addEventListener('submit', (e) => {
    e.preventDefault();
    reserveStatus.textContent = "Request saved. In a real deployment, this would send straight to your booking inbox.";
    reserveStatus.style.color = "#ffddb0";
  });
}
