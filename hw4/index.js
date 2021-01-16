const postAPI = (() => {
    const baseURL = 'https://jsonplaceholder.typicode.com';
    const postPath = 'posts';

    const getAllPosts = () => fetch([baseURL, postPath].join('/'))
        .then(response => response.json())

    //Delete request is not used and it's interrupting script execution
    // const deletePost = () => fetch([baseURL, postPath]).join('/'), {
    //     method: 'DELETE',
    // });

    return {
        getAllPosts,
        // deletePost
    }

})();

const View = (() => {
    const domString = {
        postcotent: 'post-content',
        removeBtn: 'remove-btn'
    }
    const render = (element, htmlTemplate) => {
        element.innerHTML = htmlTemplate;
    }
    const setPostTemplate = (postArray) => {
        let template = `<tr><th>ID</th><th>Title</th><th>Body</th><th>Delete</th></tr>`
        postArray.forEach(post => {
            template += `<tr>
            <td>${post.id}</td>
            <td>${post.title}</td>
            <td>${post.body}</td>
            <td class="button-cell"><button class="remove-btn" id="${post.id}">Delete</button></td>
            </tr>`
        })
        return template;
    }

    return {
        domString,
        render,
        setPostTemplate
    }
})();


const Model = ((view, api) => {
    class Post {
        constructor(userId, id, title, body) {
            this.userId = userId;
            this.id = id;
            this.title = title;
            this.body = body;
        }
    }

    const getAllPosts = api.getAllPosts;
    // const deletePost = postAPI.deletePost;

    class State {
        #allposts = [];

        get allposts() {
            return this.#allposts
        }
        set allposts(newposts) {
            this.#allposts = newposts;
            const tableElement = document.getElementById(view.domString.postcotent);
            const template = view.setPostTemplate(this.#allposts);
            view.render(tableElement, template);
        }
    }

    return {
        Post,
        getAllPosts,
        // deletePost,
        State
    }
})(View, postAPI);






const Controller = ((view, model) => {
    const state = new model.State();

    //delete post
    const addListnerOnRemove = () => {
        const postcontentTable = document.querySelector("#" + view.domString.postcotent);
        postcontentTable.addEventListener('click', (event) => {
            if (event.target.className === view.domString.removeBtn) {
                console.log(event.target);
                state.allposts = state.allposts.filter(post => {
                    if (+event.target.id === +post.id) {
                        console.log(event.target, post);
                    } else {
                        return post
                    }
                    // return post.id !== event.target.id;
                })
            }
        })
    }


    const initPostView = () => {
        model.getAllPosts().then(posts => {
            state.allposts = posts;
            addListnerOnRemove();
        })
    };

    const init = () => {
        console.log('init');
        initPostView();
    }
    return {
        init,
        addEventListener
    }
})(View, Model);

Controller.init();