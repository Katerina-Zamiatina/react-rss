function createWrapper(id: string) {
  const element = document.createElement('div');
  element.setAttribute('id', id);
  document.body.appendChild(element);
  return element;
}

export default createWrapper;
