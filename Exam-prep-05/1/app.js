window.addEventListener('load', solve);

function solve() {
    const modelField = document.getElementById('model').value;
    const yearField = document.getElementById('year').value;
    const descriptionField = document.getElementById('description').value;
    const priceField = document.getElementById('price').value;

    const addBtn = document.getElementById('add');
    addBtn.addEventListener('click', onSubmit);

    const table = document.getElementById('furniture-list');

    function onSubmit(e){
        e.preventDefault();

        if (modelField != '' && yearField != '' && descriptionField != '' && priceField != ''){

            const tr = document.createElement('tr');
            tr.innerHTML = `
            <tr class="info">
            <td>${modelField}</td>
            <td>${Number(priceField)}</td>
            <td>
            <button class="moreBtn">More Info</button>
            <button class="buyBtn">Buy it</button>
            </td>
            </tr>
            <tr class="hide">
            <td>Year: ${yearField}</td>
            <td colspan="3">Description: ${descriptionField}</td>
            </tr>
        
            `;
    
            tr.appendChild(tr);


            const moreBtn = document.querySelector('.moreBtn');
            const buyBtn = document.querySelector('.buyBtn');

            moreBtn.addEventListener('click', showMore);
            buyBtn.addEventListener('click', buyIt);

            function showMore(e){
                e.preventDefault();
                const div = document.createElement('div');
                div.innerHTML = `
                `



                
            }

            function buyIt(e){
                e.preventDefault();
            }
        } else {
            return;
        }
    }

    
}
