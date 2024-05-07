document.addEventListener('mousemove', function(e) {
    let dot = document.createElement('div');
    dot.className = 'dot';
    document.body.appendChild(dot);

    
    dot.style.left = (e.pageX - 5) + 'px';
    dot.style.top = (e.pageY - 5) + 'px';
    dot.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;

    
    dot.style.animation = 'fade 1s forwards';

 
    dot.addEventListener('animationend', function() {
        dot.remove();
    });
});
