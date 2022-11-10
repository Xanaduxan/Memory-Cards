document.querySelector('.addForm')?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const { russian, english, topic } = e.target;
  const res = await fetch('/profile', {
    method: 'post',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({ rus: russian.value, eng: english.value, topic: topic.value }),
  });
  const data = await res.json();

  if (typeof data.message === 'number') {
    document.querySelector('.foodResult').innerText = Number(document.querySelector('.foodResult').innerText) + 1;
  }
});
