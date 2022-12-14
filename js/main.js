if(document.querySelector(".jobs__accordion")) {
    $(".jobs__accordion .btn").click(function() {
        $(this).toggleClass("active");
    });
};
$(".header__burgir").click(function() {
    $(this).toggleClass("active");
    $(".header__navbar").toggleClass("active");
});
if(document.querySelector(".open-modal")) {
    $(".open-modal").click(function() {
        $(".modal").addClass("open");
    });
    $(".modal__close").click(function() {
        $(".modal").removeClass("open");
    });
};
if(document.querySelector(".where_buy_clear")) {
    $(".where_buy_clear").click(function() {
        $(this).addClass("none");
        $(".map_search .item").removeClass("active");
        $(".where_buy__left svg path").removeClass("active");
        $(".inside_wrap").removeClass("active");
        $(".main_wrap").addClass("active");

        if(document.querySelector(".map_search")) {
            function mapSearch (nameItem) {
                $("#" + nameItem).click(function() {
                    $(".where_buy__left svg path").removeClass("active");
                    $(".where_buy__left ." + nameItem).addClass("active");
                });
            };
            mapSearch("novosibirskaya");
            mapSearch("kemerovskaya");
            mapSearch("altai");
            mapSearch("tiva");
            mapSearch("buryatiya");
            mapSearch("irkutskaya");
            mapSearch("krasnoyarskiy");
            mapSearch("omskaya");
            mapSearch("tumenskaya");
        };
        
    });
    $(".main_wrap .item").click(function() {
        $(".where_buy_clear").removeClass("none");
        $(".inside_wrap").addClass("active");
        $(".main_wrap").removeClass("active");
    });
};

if(document.querySelector('.input_phone')) {
    window.addEventListener("DOMContentLoaded", function() {
        [].forEach.call( document.querySelectorAll('.tel'), function(input) {
        var keyCode;
        function mask(event) {
            event.keyCode && (keyCode = event.keyCode);
            var pos = this.selectionStart;
            if (pos < 3) event.preventDefault();
            var matrix = "+7 (___) ___ ____",
                i = 0,
                def = matrix.replace(/\D/g, ""),
                val = this.value.replace(/\D/g, ""),
                new_value = matrix.replace(/[_\d]/g, function(a) {
                    return i < val.length ? val.charAt(i++) || def.charAt(i) : a
                });
            i = new_value.indexOf("_");
            if (i != -1) {
                i < 5 && (i = 3);
                new_value = new_value.slice(0, i)
            }
            var reg = matrix.substr(0, this.value.length).replace(/_+/g,
                function(a) {
                    return "\\d{1," + a.length + "}"
                }).replace(/[+()]/g, "\\$&");
            reg = new RegExp("^" + reg + "$");
            if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
            if (event.type == "blur" && this.value.length < 5)  this.value = ""
        }
    
        input.addEventListener("input", mask, false);
        input.addEventListener("focus", mask, false);
        input.addEventListener("blur", mask, false);
        input.addEventListener("keydown", mask, false)
    
      });
    
    });
};
