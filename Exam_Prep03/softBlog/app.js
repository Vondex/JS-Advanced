function solve() {
  const authorField = document.getElementById('creator');
  const titleField = document.getElementById('title');
  const categoryField = document.getElementById('category');
  const contentField = document.getElementById('content');

  const posts = document.querySelector('.site-content main section');
  const archiveSection = document.querySelector('.archive-section ol');

  const createBtn = document.querySelector('button[class="btn create"]')
  createBtn.addEventListener('click', createNewPost);

  function createNewPost(e) {
    e.preventDefault();
    const article = document.createElement('article')

    article.innerHTML = 
    `<article>                             
    <h1>${titleField.value}</h1>                                 
    <p>Category:                                    
    <strong>${categoryField.value}</strong>                                  
    </p>                                  
    <p>Creator:                                    
    <strong>${authorField.value}</strong>                                 
    </p>                                 
    <p>${contentField.value}</p>                                 
    <div class="buttons">                                   
    <button class="btn delete">Delete</button>                                    
    <button class="btn archive">Archive</button>                                  
    </div>
    </article>`

    posts.appendChild(article);


    const deleteBtn = document.querySelector(`button[class="btn delete"]`);
    const archiveBtn = document.querySelector(`button[class="btn archive"]`);

    deleteBtn.addEventListener('click', deletePost);
    archiveBtn.addEventListener('click', archivePost);

    function deletePost(e){
      e.target.parentElement.parentElement.remove();
    }


    function archivePost(){

      const li = document.createElement('li');
      li.innerHTML = titleField.value;
      const items = Array.from(archiveSection.querySelectorAll('li'));
      items.sort((a, b) => a.textContent.localeCompare(b.textContent))
      .forEach(el => archiveSection.parentElement.appendChild(el));
      posts.removeChild(article)


    }

  }
}
