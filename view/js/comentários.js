const inputNome = document.getElementById('nomeComentario');
const textComment = document.getElementById('comentario');
const form = document.getElementById('formulario');
const commentPost = document.getElementById('commentPost');

form.addEventListener('submit', (event) =>{
    event.preventDefault();

    let p = document.createElement('p');
    p.classList = 'paragrafo';
    p.innerHTML = `<strong> ${inputNome.value}: </strong> &nbsp ${textComment.value}`;
    commentPost.appendChild(p);
    inputNome.value='';
    textComment.value='';
    inputNome.focus();
});