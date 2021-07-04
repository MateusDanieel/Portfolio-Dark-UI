// ano/idade dinamico

(function() {
    var today = new Date();
    var year = today.getFullYear();
    var age = document.getElementById("js-age");
    var yearCopy = document.getElementById("js-year");
    
    age.innerHTML = year - 1997;
    yearCopy.innerHTML = year;

})();

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

// e-mail

var msg = document.getElementById("my-form-status");
var form = document.getElementById("my-form");

function enviarEmail() {
    
    async function handleSubmit(event) {
        event.preventDefault();
        var status = document.getElementById("my-form-status");
        var data = new FormData(event.target);
        fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
        }).then(response => {
        msg.style.display = "block";
        status.innerHTML = "Mensagem enviada com sucesso!";
        form.reset()
        }).catch(error => {
        msg.style.display = "block";
        status.innerHTML = "Oops! Não foi possível enviar sua mensagem, tente novamente mais tarde."
        });
    }
    form.addEventListener("submit", handleSubmit)
}



