function attachEvents() {
    const postsURL = 'http://localhost:3030/jsonstore/blog/posts';
    const commentsURL = 'http://localhost:3030/jsonstore/blog/comments';

    let allPosts = [];

    const loadButtonEl = document.getElementById('btnLoadPosts');
    const selectPostEl = document.getElementById('posts');
    const viewButtonEl = document.getElementById('btnViewPost');
    const postTitleEl = document.getElementById('post-title');
    const postBodyEl = document.getElementById('post-body');
    const postCommentsEl = document.getElementById('post-comments');


    loadButtonEl.addEventListener('click', () => {
        selectPostEl.innerHTML = ''
        allPosts = [];

        fetch(postsURL)
            .then(response => response.json())
            .then(data => {
                Object.values(data).forEach(post => {
                    //Add do Array because of Judge...
                    const currentPost = {id: post.id, title: post.title, body: post.body};
                    allPosts.push(currentPost);

                    const optionEl = document.createElement('option');
                    optionEl.value = post.id;
                    optionEl.textContent = post.title;

                    selectPostEl.appendChild(optionEl);
                });
            })
    });

    viewButtonEl.addEventListener('click', () => {
        postCommentsEl.innerHTML = '';
        const selectedPostId = selectPostEl.value;

        if (!selectedPostId) return;

        const matchPost = allPosts.find(post => post.id === selectedPostId);
        postTitleEl.textContent = matchPost.title;
        postBodyEl.textContent = matchPost.body;


        fetch(commentsURL)
            .then(response => response.json())
            .then(data => {
                Object.values(data)
                    .filter(comment => comment.postId === selectedPostId)
                    .forEach((comment) => {
                        const liElement = document.createElement('li');
                        liElement.setAttribute('value', comment.id);
                        liElement.textContent = comment.text;

                        postCommentsEl.appendChild(liElement);
                    })
            });
    });
}

attachEvents();