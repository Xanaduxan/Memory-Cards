const section = document.querySelector('.section');
section?.addEventListener('click', async (event) => {
  const button = event.target.classList.contains('button');
  if (!button) {
    return;
  }
  const roditel = event.target.closest('.topicList');
  const { topicid, id } = roditel.dataset;
  const result = await fetch(`/topics/${topicid}/${id}`, {
    method: 'delete',
  });
  const data = await result.text();
  console.log(data);
  if (data) {
    roditel.remove();
  }
});
