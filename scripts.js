document.addEventListener('DOMContentLoaded', () => {
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('.header-container').innerHTML = data;
        });

    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('.footer-container').innerHTML = data;
        });
});

function searchPosts() {
    var input = document.getElementById('searchInput').value.toLowerCase();
    var posts = document.getElementsByClassName('post');
    var clearSearch = document.getElementById('clearSearch');
    
    if (input) {
        clearSearch.style.display = 'block';
    } else {
        clearSearch.style.display = 'none';
    }

    for (var i = 0; i < posts.length; i++) {
        var name = posts[i].getAttribute('data-name').toLowerCase();
        var categories = posts[i].getAttribute('data-categories').toLowerCase();
        
        if (name.includes(input) || categories.includes(input)) {
            posts[i].style.display = '';
        } else {
            posts[i].style.display = 'none';
        }
    }
}

function filterByTag(tag) {
    var posts = document.getElementsByClassName('post');
    
    for (var i = 0; i < posts.length; i++) {
        var categories = posts[i].getAttribute('data-categories').toLowerCase();
        
        if (categories.includes(tag.toLowerCase())) {
            posts[i].style.display = '';
        } else {
            posts[i].style.display = 'none';
        }
    }
}

function clearSearch() {
    document.getElementById('searchInput').value = '';
    document.getElementById('clearSearch').style.display = 'none';
    searchPosts();
}
