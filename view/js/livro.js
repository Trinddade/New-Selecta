
var star = document.querySelectorAll('.star-icon');

    document.addEventListener('click', function(e){
        var classStar = e.target.classList;
        if(!classStar.contains('ativo')){
            star.forEach(function(star){
                star.classList.remove('ativo');
            });
            classStar.add('ativo');
        }
    });