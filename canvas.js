document.addEventListener('DOMContentLoaded', function() {

    const canvas = document.querySelector('#canvas');


    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const c = canvas.getContext('2d');
    const numberOfCircles = 14;

    class Circle {
        constructor(x, y, dx, dy, radius) {
            this.x = x;
            this.y = y;
            this.dx = dx;
            this.dy = dy;
            this.radius = radius;
        }

        draw () {
            c.beginPath();
            c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            c.strokeStyle= `rgb(71, 47, 116)`;
            c.stroke();

        }

        update () {
            this.x += this.dx;
            // this.y += this.dy;

            this.draw();

        }


    }

        let circleArr= [];


            for (let i = 0; i < numberOfCircles; i++) {

                    const radius = 60;
                    let x = -50 ;
                    let y =10 * i * dy;
                    let dx = radius;
                    let dy = 5 ;


                circleArr.push(new Circle(x, y, dx, dy, radius));

            }




    for (var i = 0; i < 22; i++) {
        for (let i = 0; i < circleArr.length; i++) {
            circleArr[i].update();
        }

    }






});
