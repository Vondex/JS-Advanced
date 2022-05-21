window.addEventListener('load', solve);
function solve() {
    const genreField = document.getElementById('genre');
    const nameField = document.getElementById('name');
    const authorField = document.getElementById('author');
    const dateField = document.getElementById('date');

    const addBtn = document.getElementById('add-btn');
    addBtn.addEventListener('click', addSong);

    const collectionSongs = document.querySelector('.all-hits-container');

    

    function addSong(e){
        e.preventDefault();

        if (genreField.value != '' && nameField.value != '' && authorField.value != '' && dateField.value != ''){

            const div = document.createElement('div');
            div.innerHTML = `<div class="hits-info">
            <img src="./static/img/img.png">
            <h2>Genre: ${genreField.value}</h2>
            <h2>Name: ${nameField.value}</h2>
            <h2>Author: ${authorField.value}</h2>
            <h3>Date: ${dateField.value}</h3>
            <button class="save-btn">Save song</button>
            <button class="like-btn">Like song</button>
            <button class="delete-btn">Delete</button>
            </div>`

            collectionSongs.appendChild(div);

            genreField.value = '';
            nameField.value = '';
            authorField.value = '';
            dateField.value = '';

            const likeBtn = document.querySelector('.like-btn');
            const saveBtn = document.querySelector('.save-btn');
            const deleteBtn = document.querySelector('.delete-btn')
            likeBtn.addEventListener('click', likeSong);
            saveBtn.addEventListener('click', saveSong);
            deleteBtn.addEventListener('click', deleteSong);


            function likeSong(e){
                e.target.style.background = 'gray';
                e.target.disabled = true;
                

                const likes = document.querySelector('.likes').firstElementChild;
                
                
            }

            function saveSong(e){

                const savedField = document.querySelector('.saved-container');
                const div = document.createElement('div');
                div.innerHTML = `<div class="hits-info">
                <img src="./static/img/img.png">
                <h2>Genre: ${genreField.value}</h2>
                <h2>Name: ${nameField.value}</h2>
                <h2>Author: ${authorField.value}</h2>
                <h3>Date: ${dateField.value}</h3>
                <button class="delete-btn">Delete</button>
                </div>`
                savedField.appendChild(div);
                e.target.parentElement.remove();

                const delBTN = document.querySelector('.delete-btn');
                delBTN.addEventListener('click', deleteFromSaved);

                function deleteFromSaved(e){
                    e.target.parentElement.remove();
                }
   
            }
            function deleteSong(e){
                e.target.parentElement.remove();
            }
           
        } else {
            return;
        }
    }
  
}