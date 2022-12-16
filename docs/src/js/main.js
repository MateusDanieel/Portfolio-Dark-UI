// animação do texto principal do header
(function() {
    var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };
    
    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];
    
        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }
    
        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
    
        var that = this;
        var delta = 200 - Math.random() * 100;
    
        if (this.isDeleting) { delta /= 2; }
    
        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }
    
        setTimeout(function() {
        that.tick();
        }, delta);
    };
    
    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };
})();

// menu mobile
(function() {
    var btn = document.querySelector('.hamburger');
    var menu = document.querySelector('.navbar .menu');
    var items = document.querySelectorAll('.navbar .menu li a');

    btn.addEventListener('click', function() {
        if(btn.className == 'hamburger hamburger--spin') {
            btn.classList.add("is-active");
            menu.classList.add("is-active");
        } else {
            btn.classList.remove("is-active");
            menu.classList.remove("is-active");
        }
    });

    items.forEach(function(el, i, arr) {
        el.addEventListener('click', function() {
            btn.classList.remove("is-active");
            menu.classList.remove("is-active");
        });
    });

})();

// scroll to top
(function() {
    document.addEventListener('scroll', function() {
        if(document.documentElement.scrollTop > 100) {
            document.querySelector('.scroll-to-top').classList.add('show');
        } else {
            document.querySelector('.scroll-to-top').classList.remove('show');
        }
    });
})();

// portfólio
(function() {
    let menuItems = document.querySelectorAll('.sec-pg-portfolio .lst_menu li');
    let contentItems = document.querySelectorAll('.sec-pg-portfolio .lst_items li');

    if (menuItems && contentItems) {
        menuItems.forEach((el, i, arr) => {
            el.addEventListener('click', () => {
                arr.forEach((arr_el) => {
                    if(arr_el.classList.contains('active')) {
                        arr_el.classList.remove('active')
                    }
                });

                contentItems.forEach((arr_el) => {
                    if(arr_el.classList.contains('active')) {
                        arr_el.classList.remove('active')
                    }
                });

                el.classList.add('active');
                contentItems[i].classList.add('active');

            });
        });
    }
})();

// e-mail

var msgSucess = document.querySelector(".my-form-status.sucess");
var msgError = document.querySelector(".my-form-status.error");
var form = document.getElementById("my-form");

function enviarEmail() { 
    
    async function handleSubmit(event) {
        event.preventDefault();
        var status = document.querySelector(".my-form-status");
        var data = new FormData(event.target);
        fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
        }).then(response => {
        msgSucess.style.display = "block";
        msgError.style.display = "none";
        form.reset()
        }).catch(error => {
            msgSucess.style.display = "none";
            msgError.style.display = "block";
        });
    }
    form.addEventListener("submit", handleSubmit)
}



