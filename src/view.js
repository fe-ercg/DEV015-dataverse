export const renderItems = (data) => {
  
  const element = document.createElement('ul');
  
  for(let i=0; i< data.length; i++){
    const texto = document.createElement('li');
    element.appendChild(texto);
  }
  return element;
  
};


