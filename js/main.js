const member1 = document.getElementById('member1');
const member2 = document.getElementById('member2');
const member3 = document.getElementById('member3');
let currentDescription;

const createDescription = (descriptionText) => {
  const description = document.createElement('div');
  description.classList.add('description');
  description.innerHTML = descriptionText;
  return description;
};

const showDescription = (member, descriptionText) => {
  const description = createDescription(descriptionText);
  member.parentNode.appendChild(description);
  currentDescription = description;
};

member1.addEventListener('click', () => {
  const descriptionText = 'Nana is the best mascot ever. However, she always try to eat one of our members: The Nut.';
  if (currentDescription) {
    currentDescription.remove();
  }
  showDescription(member1, descriptionText);
});

member2.addEventListener('click', () => {
  const descriptionText = 'MJ is the designer and developer of our rebrand.';
  if (currentDescription) {
    currentDescription.remove();
  }
  showDescription(member2, descriptionText);
});

member3.addEventListener('click', () => {
  const descriptionText = 'Nut, the Nut Gonzales is the marketing "person" in charge of the marketing stuff.';
  if (currentDescription) {
    currentDescription.remove();
  }
  showDescription(member3, descriptionText);
});
