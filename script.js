const checkbox = document.querySelector('#toggle');
const html = document.querySelector('html');
const tutup = document.querySelector('#close')

checkbox.addEventListener('click', function () {
    checkbox.checked ? html.classList.add('dark') : html.classList.remove('dark');
})

tutup.addEventListener("click", function () {
    // alert('halo')
    tutup.parentElement.style.display = 'none'
})