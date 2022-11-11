document.querySelector('.addForm')?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const { russian, english, topic } = e.target;
  const res = await fetch('/profile', {
    method: 'post',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({ rus: russian.value, eng: english.value, topic: topic.value }),
  });
  const data = await res.json();

  if (data.message === 1) {
    document.querySelector('.foodResult').innerText = Number(document.querySelector('.foodResult').innerText) + 1;
  }
  if (data.message === 2) {
    document.querySelector('.travelResult').innerText = Number(document.querySelector('.travelResult').innerText) + 1;
  }
  if (data.message === 3) {
    document.querySelector('.animalsResult').innerText = Number(document.querySelector('.animalsResult').innerText) + 1;
  }
});
