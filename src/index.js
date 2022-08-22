document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector('#create-task-form');
  let newArray = [];





  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let inputValue = document.getElementById('new-task-description').value;
    const ul = document.querySelector('#tasks');
    const li = document.createElement('li');
    const btn = document.createElement('button');


    li.textContent = `${inputValue} `;
    btn.textContent = ' X';
    btn.className = 'button';
    btn.style.margin = 'auto';
    btn.style.borderRadius = '10px';

    const colors = ['red', 'yellow', 'green'];
    const priorityList = ['High', 'Medium', 'Low']
    const select = document.createElement('select');
    for (let i = 0; i < colors.length; i++) {
      const option = document.createElement('option');
      option.value = colors[i];
      option.text = `${colors[i]} - ${priorityList[i]} `;
      select.appendChild(option)
    }

    li.appendChild(select);
    li.appendChild(btn);
    li.appendChild(select);
    ul.append(li);
    newArray.push(li);
    e.target.reset();

    select.addEventListener('click', (e) => {
      const color = `${e.target.value}`;
      li.style.color = color;
    });

    const buttons = document.getElementsByClassName('button');

    //delete functionality call
    deleteButton(buttons)

  });

});

//delete function 
function deleteButton(buttons) {
  for (const button of buttons) {
    button.addEventListener('click', (e) =>
      e.target.parentNode.remove())
  }
}

