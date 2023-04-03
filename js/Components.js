let previewContainer = document.querySelector('.products-preview');
let previewBox = previewContainer.querySelectorAll('.preview');
const product = document.querySelectorAll('.prducts-container .product')
document.querySelectorAll('.prducts-container .product .more-btn').forEach(btn => {
    btn.onclick = () => {
        previewContainer.style.display = 'flex';
        let name = btn.getAttribute('data-name');
        previewBox.forEach(preview => {
            let target = preview.getAttribute('data-target');
            if (name === target){
                preview.classList.add('active');
            }
        })
    }
})


previewBox.forEach(close => {
    close.querySelector('.close').onclick = () => {
        close.classList.remove('active');
        previewContainer.style.display = 'none';

    }
})