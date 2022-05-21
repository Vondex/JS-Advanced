window.addEventListener('load', solve);

function solve() {
  const typeField = document.getElementById('type-product');
  const descriptionField = document.getElementById('description');
  const nameField = document.getElementById('client-name');
  const phoneField = document.getElementById('client-phone');

  const submitBtn = document.querySelector('#main-container button');
  submitBtn.addEventListener('click', onSubmit);

  function onSubmit(ev) {

    ev.preventDefault();
    if (typeField.value != '' && descriptionField.value != '' && nameField.value != '' && phoneField.value != '') {

      const receivedSection = document.getElementById('received-orders');
      const order = e("div", "", "container");
      const h2 = e('h2', `Product type for repair: ${typeField.value}`);
      const h3 = e('h3', `Client information: ${nameField.value}, ${phoneField.value}`)
      const h4 = e('h4', `Description of the problem: ${descriptionField.value}`)
      const startBtn = e('button', 'Start repair', 'start-btn');
      const finishBtn = e('button', 'Finish repair', 'finish-btn');

      
      order.appendChild(h2);
      order.appendChild(h3);
      order.appendChild(h4);
      order.appendChild(startBtn);
      order.appendChild(finishBtn);

      receivedSection.appendChild(order);


      /*
      order.innerHTML = `
            <h2>Product type for repair: ${typeField.value}</h2>
            <h3>Client information: ${nameField.value}, ${phoneField.value}</h3>
            <h4>Description of the problem: ${descriptionField.value}</h4>
            <button class="start-btn">Start repair</button>
            <button class="finish-btn" disabled>Finish repair</button>  
            `;
            */

      typeField.value = '';
      descriptionField.value = '';
      nameField.value = '';
      phoneField.value = '';

      finishBtn.disabled = true;
      finishBtn.style.background = 'gray';

      startBtn.addEventListener('click', onStart);


      function onStart(ev) {
        ev.preventDefault();
        startBtn.disabled = true;
        startBtn.style.background = 'gray';

        finishBtn.disabled = false;
        finishBtn.style.background = '';


        finishBtn.addEventListener('click', onFinish)

        function onFinish(ev) {
          ev.preventDefault();

          const finishedSection = document.getElementById('completed-orders');
          const finishOrder = e("div", "", "container");


          finishedSection.appendChild(finishOrder);
          finishOrder.appendChild(h2);
          finishOrder.appendChild(h3);
          finishOrder.appendChild(h4);


          /*
          finalOrder.innerHTML = `
                    <h2>Product type for repair: ${typeField.value}</h2>
                    <h3>Client information: ${nameField.value}, ${phoneField.value}</h3>
                    <h4>Description of the problem: ${descriptionField.value}</h4>
                    `;
                    */


          ev.target.parentElement.remove();

          const clearBtn = document.querySelector('.clear-btn');

          clearBtn.addEventListener('click', onClear)
          function onClear(ev) {
            ev.preventDefault();
            const divsClear = document.querySelectorAll('#completed-orders .container');
            Array.from(divsClear).forEach(el => el.remove());


          }

        }


      }

      function e(type, content, className) {
        let element = document.createElement(type);

        if (type === "img") {
          element.src = content;
        } else {
          element.textContent = content;
        }

        if (className) {
          element.className = className;
        }

        return element;
      }

    } else {
      return;
    }
  }

}