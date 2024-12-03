function attachEvents() {
    const postsURL = 'http://localhost:3030/jsonstore/blog/posts';
    const commentsURL = 'http://localhost:3030/jsonstore/blog/comments';

    const loadButtonEl = document.getElementById('btnLoadPosts');
    const selectPostEl = document.getElementById('posts');
    const viewButtonEl = document.getElementById('btnViewPost');
    const postTitleEl = document.getElementById('post-title');
    const postBodyEl = document.getElementById('post-body');
    const postCommentsEl = document.getElementById('post-comments');


    loadButtonEl.addEventListener('click', () => {
        selectPostEl.innerHTML = '';

        fetch(postsURL)
            .then(response => response.json())
            .then(data => {
                Object.values(data).forEach(post => {
                    const optionEl = document.createElement('option');
                    optionEl.value = post.id;
                    optionEl.textContent = post.title;

                    selectPostEl.appendChild(optionEl);
                });
            })
    });

    viewButtonEl.addEventListener('click', () => {
        const selectedPostId = selectPostEl.value;

        fetch(`${postsURL}/${selectedPostId}`)
            .then(response => response.json())
            .then(data => {
                postTitleEl.textContent = data.title;
                postBodyEl.textContent = data.body;
        });

        fetch(commentsURL)
            .then(response => response.json())
            .then(data => {
               Object.values(data)
                   .filter(comment => comment.postId === selectedPostId)
                   .forEach((comment) => {
                       const liElement = document.createElement('li');
                       liElement.value = comment.id;
                       liElement.textContent = comment.text;

                       postCommentsEl.innerHTML = '';
                       postCommentsEl.appendChild(liElement);
                   })
            });
    });
}

attachEvents();