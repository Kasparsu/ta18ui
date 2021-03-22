function deg2rad(deg){
    return deg * (Math.PI / 180);
}
function rad2deg(rad){
    return rad * (180/ Math.PI);
}

window.addEventListener('load', (event) => {
    let el = document.querySelector('#canvas');
    el.width = window.innerWidth;
    el.height = window.innerHeight;
    let ctx = el.getContext('2d');

    let orbs = [];
    for(let i = 0; i<300; i++){
        let x = Math.floor(Math.random() *el.width);
        let y = Math.floor(Math.random() *el.height);
        let angle = Math.floor(Math.random() *360);
        orbs.push({x: x, y:y, angle: angle})
    }
    setInterval(()=> {

        ctx.clearRect(0,0, el.width, el.height);
        orbs.forEach((orb) => {
            ctx.beginPath();
            ctx.arc(orb.x, orb.y, 5, 0, 2 * Math.PI);
            orb.x += Math.cos(deg2rad(orb.angle))/3;
            orb.y += Math.sin(deg2rad(orb.angle))/3;
            ctx.fillStyle = '#fff';
            ctx.fill();
            ctx.closePath();
            if(orb.x <0 || orb.y < 0 || orb.x > el.width || orb.y > el.height) {
                orb.angle += 90;
                orb.angle %= 360;
            }
            orbs.forEach((other)=> {
                // c2 = a2 + b2
                let dist = Math.sqrt(Math.pow(orb.x - other.x, 2) + Math.pow(orb.y - other.y, 2));
                if(dist < 100){
                    ctx.beginPath();
                    ctx.moveTo(orb.x, orb.y);
                    ctx.lineTo(other.x, other.y);
                    ctx.strokeStyle = '#fff';
                    ctx.stroke();
                    ctx.closePath();
                }
            });
        });

    })
});
