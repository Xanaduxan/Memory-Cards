document.querySelector('.addForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  //   console.log(e.target.russian.value);
  const { russian, english, topic } = e.target;
  //   console.log(russian.value, english.value, e.target.topics.value);
  const res = await fetch('/profile', {
    method: 'post',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({ rus: russian.value, eng: english.value, topic: topic.value }),
  });
  const data = await res.json();

  if (data.message === 'ok') {

  }
});
