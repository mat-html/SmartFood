function includeHTML() {
    // Loop through all elements with the data-include attribute
    const elements = document.querySelectorAll('[data-include]');
    elements.forEach(element => {
        const file = element.getAttribute('data-include');
        console.log(file);
        fetch(`./${file}`)
            .then(response => response.text())
            .then(data => element.innerHTML = data)
            .catch(error => console.error(`Not available: ${file}`, error));
    });

    // Fetch and inject content based on the 'page' query parameter
    const params = new URLSearchParams(window.location.search);
    const page = params.get('page') || 'index';  // Default to 'index' if no page param is found

    fetch(`${page}.html`)
        .then(response => response.text())
        .then(data => document.getElementById('content').innerHTML = data)
        .catch(error => console.error(`Page not available: ${page}.html`, error));
}

window.onload = includeHTML;
