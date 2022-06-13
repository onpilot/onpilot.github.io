export const toggleHidden = (id: string) => {
  const idx = `#${id}`;
  const portfolioBtnGroup = document.querySelector(idx);
  portfolioBtnGroup!.classList.toggle('hidden');
};

export const enter = (id: string) => toggleHidden(id);
export const leave = (id: string) => toggleHidden(id);
