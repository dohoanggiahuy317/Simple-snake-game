var c = 3;

function main() {

//Controll---------------------------------------------------------------------------------------------->
    const SNAKE_SPEED = 50

    document.onkeydown = checkKey;

    function checkKey(e) {

        e = e || window.event;

        if (e.keyCode == '38') {
            

            function moveUp() {
                let snake = document.getElementById('snake');
                if(snake.style.top=="")
                {
                    var cur_top=0;
                }
                else
                {
                    var cur_top=parseFloat(snake.style.top);
                }



                snake.style.top = (cur_top-SNAKE_SPEED)+'px';
            }

            if (snake.style.top == "0px") {
                return
            }
            else {
                moveUp()
            }
            

        }
        else if (e.keyCode == '40') {
            function moveDown() {
                let snake = document.getElementById('snake');
                if(snake.style.top=="")
                {
                    var cur_top=0;
                } 
                else
                {
                    var cur_top=parseFloat(snake.style.top);
                }
                snake.style.top = (cur_top+SNAKE_SPEED)+'px';
            }
            if (snake.style.top == "850px") {
                return
            }
            else {
                moveDown()
            }
        }

        else if (e.keyCode == '37') {
            function moveLeft() {
                let snake = document.getElementById('snake');
                if(snake.style.left=="")
                {
                    var cur_left=0;
                } 
                else
                {
                    var cur_left=parseFloat(snake.style.left);
                }
                snake.style.left = (cur_left-SNAKE_SPEED)+'px';
            }
            if (snake.style.left == "0px") {
                return
            }
            else {
                moveLeft()
            }

        }

        else if (e.keyCode == '39') {
            function moveRight() {
                let snake = document.getElementById('snake');
                if(snake.style.left=="")
                {
                    var cur_left=0;
                } 
                else
                {
                    var cur_left=parseFloat(snake.style.left);
                }
                snake.style.left = (cur_left+SNAKE_SPEED)+'px';
            }
            if (snake.style.left == "850px") {
                return
            }
            else {
                moveRight()
            }
        }
        

    }

    //Create apple--------------------------------------------------------------------------------------->
    document.getElementById('snake').style.left = 0 +'px';
    document.getElementById('snake').style.top = 0 +'px';

    function createApple() {
        var random_x = (Math.floor(Math.random() * 18)-1)*50;
        var random_y = (Math.floor(Math.random() * 18))*50;
        if (random_x != 0 && random_y != 0) {
            document.getElementById('apple').style.left = random_x +'px';
            document.getElementById('apple').style.top = random_y +'px';
        }
    }
    createApple();

    function createGreenApple() {
        var random_x = (Math.floor(Math.random() * 18)-2)*50;
        var random_y = (Math.floor(Math.random() * 18))*50;
        if (random_x != 0 && random_y != 0) {
            document.getElementById('gr_apple').style.left = random_x +'px';
            document.getElementById('gr_apple').style.top = random_y +'px';
        }
    }
    createGreenApple();

    //Game funtion--------------------------------------------------------------------------------->

    var result;
    var result2;
    var result3;
        function intersectRect() {       
            var r1 = document.getElementById("snake").getBoundingClientRect();    //BOUNDING BOX OF THE FIRST OBJECT
            var r2 = document.getElementById("apple").getBoundingClientRect();    //BOUNDING BOX OF THE SECOND OBJECT
            var r3 = document.getElementById("gr_apple").getBoundingClientRect();    //BOUNDING BOX OF THE SECOND OBJECT

            //Touch red apple
            result = !(r2.left >= r1.right || 
                r2.right <= r1.left || 
                r2.top >= r1.bottom ||
                r2.bottom <= r1.top);

            //Touch green apple
            result2 = !(r3.left >= r1.right || 
                        r3.right <= r1.left || 
                        r3.top >= r1.bottom ||
                        r3.bottom <= r1.top);
            
            //Touch apples
            result3 = !(r3.left >= r2.right || 
                r3.right <= r2.left || 
                r3.top >= r2.bottom ||
                r3.bottom <= r2.top);
            
            //random red apple
            if (result == true) {
                c += 1;
                document.getElementById('score').innerHTML = c;
                function makeApple() {
                    var random_red_x = (Math.floor(Math.random() * 18)-1)*50;
                    var random_red_y = (Math.floor(Math.random() * 18))*50;
                    if (result3 == false) {
                        document.getElementById('apple').style.left = random_red_x +'px';
                        document.getElementById('apple').style.top = random_red_y +'px';
                    }
                    else {
                        document.getElementById('apple').style.left = random_red_x - 50 + 'px';
                        document.getElementById('apple').style.top = random_red_y +'px';
                    }
                }
                makeApple();          
            };

            //random green apple
            if (result2 == true) {
                c -= 1;
                document.getElementById('score').innerHTML = c;
                function makeGreenApple() {
                    var random_green_x = (Math.floor(Math.random() * 18)-2)*50;
                    var random_green_y = (Math.floor(Math.random() * 18))*50;
                    if (result3 == false) {
                        document.getElementById('gr_apple').style.left = random_green_x +'px';
                        document.getElementById('gr_apple').style.top = random_green_y +'px';
                    }
                    else {
                        document.getElementById('gr_apple').style.left = random_green_x - 50 +'px';
                        document.getElementById('gr_apple').style.top = random_green_y +'px';
                    }
                }
                makeGreenApple();
            };

            if (c == 0) {
                TweenMax.to('#end_screen', 0, {display: 'flex'});
                TweenMax.to('#end_screen', 0.2, {opacity: '1'});
                c = 3
                return;
            }
        };
        setInterval(intersectRect, 10);
}

main()


document.getElementById('click_me').addEventListener('click', function(){
    main();
    TweenMax.to('#end_screen', 0, {display: 'none'});
    document.getElementById('score').innerHTML = c;
})
