const gridView = document.getElementById('gridView');
const feedView = document.getElementById('feedView');
const gridViewBtn = document.getElementById('gridViewBtn');
const feedViewBtn = document.getElementById('feedViewBtn');
const createBtn = document.getElementById('createBtn');

gridView.classList.add('hide');
feedViewBtn.classList.add('text-primary');

gridViewBtn.addEventListener('click', () => {
    gridView.classList.remove('hide');
    feedView.classList.add('hide');
    feedViewBtn.classList.remove('text-primary');
    gridViewBtn.classList.add('text-primary');
});

feedViewBtn.addEventListener('click', () => {
    feedView.classList.remove('hide');
    gridView.classList.add('hide');
    gridViewBtn.classList.remove('text-primary');
    feedViewBtn.classList.add('text-primary');
});

createBtn.addEventListener('click', function() {
    var createPostModal = new bootstrap.Modal(document.getElementById('createPostModal'));
    createPostModal.show();
});