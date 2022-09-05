const mainHTML = document.querySelector("main");
mainHTML.remove();

const newHeader = document.createElement("H1");
newHeader.id = 'victory';
newHeader.textContent = 'is the champion';
document.body.append(newHeader);

