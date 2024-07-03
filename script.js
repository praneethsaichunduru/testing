document.addEventListener("DOMContentLoaded", function () {
    fetch('header-menu.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-menu').innerHTML = data;
        });

    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer').innerHTML = data;
        });
});

function searchPosts() {
    let input = document.getElementById('searchInput').value.toLowerCase();
    let posts = document.getElementsByClassName('post');
    let clearSearch = document.getElementById('clearSearch');
    let clearFilter = document.getElementById('clearFilter');
    let filterApplied = false;

    for (let i = 0; i < posts.length; i++) {
        let post = posts[i];
        let text = post.textContent.toLowerCase();
        if (text.includes(input)) {
            post.style.display = '';
            filterApplied = true;
        } else {
            post.style.display = 'none';
        }
    }

    clearSearch.style.display = input ? 'inline-block' : 'none';
    clearFilter.style.display = filterApplied ? 'inline-block' : 'none';
}

function filterPosts(tag) {
    let posts = document.getElementsByClassName('post');
    let clearFilter = document.getElementById('clearFilter');

    for (let i = 0; i < posts.length; i++) {
        let post = posts[i];
        let tags = post.getElementsByClassName('tag');
        let found = false;
        for (let j = 0; j < tags.length; j++) {
            if (tags[j].textContent === '#' + tag) {
                found = true;
                break;
            }
        }
        post.style.display = found ? '' : 'none';
    }

    clearFilter.style.display = 'inline-block';
}

function clearFilter() {
    let posts = document.getElementsByClassName('post');
    for (let i = 0; i < posts.length; i++) {
        posts[i].style.display = '';
    }

    document.getElementById('clearFilter').style.display = 'none';
}

function clearSearch() {
    document.getElementById('searchInput').value = '';
    document.getElementById('clearSearch').style.display = 'none';
    searchPosts();
}

function jumpToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
