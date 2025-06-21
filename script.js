const container = document.getElementById('data-container');
const loader = document.getElementById('loader');
let page = 1;
let loading = false;

async function fetchData(pageNum) {
    loading = true;
    loader.style.display = 'block';
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${pageNum}`);
    const data = await res.json();
    data.forEach(item => {
        const div = document.createElement('div');
        div.className = 'item';
        div.innerHTML = `<h3>${item.title}</h3><p>${item.body}</p>`;
        container.appendChild(div);
    });
    loader.style.display = 'none';
    loading = false;
}

function handleScroll() {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100 && !loading) {
        page++;
        fetchData(page);
    }
}

window.addEventListener('scroll', handleScroll);

// Initial load
fetchData(page);
