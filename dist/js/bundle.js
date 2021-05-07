/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {

;// CONCATENATED MODULE: ./src/js/slider.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Slider = function Slider() {
  var _this = this;

  _classCallCheck(this, Slider);

  _defineProperty(this, "resize", function () {
    _this.width = _this.slider.offsetWidth;
    _this.sliderLine.style.width = "".concat(_this.width * _this.slides.length, "px");

    _this.slides.forEach(function (slide) {
      slide.style.width = "".concat(_this.width, "px");
      slide.style.height = 'auto';
    });

    _this.rollSlide();
  });

  _defineProperty(this, "prevSlide", function () {
    _this.currentSlide--;

    _this.rollSlide();

    _this.changePagination();

    if (_this.debug) _this.log('prevSlide');
  });

  _defineProperty(this, "nextSlide", function () {
    _this.currentSlide++;

    _this.rollSlide();

    _this.changePagination();

    if (_this.debug) _this.log('nextSlide');
  });

  _defineProperty(this, "createPagination", function () {
    for (var i = 0; i < _this.slides.length; i++) {
      var element = document.createElement('div');
      element.classList.add('slider-pagination-bullet');
      element.setAttribute('data-slide', i);

      if (i === _this.currentSlide) {
        element.classList.add('slider-pagination-bullet-active');
      }

      element.addEventListener('click', function (event) {
        _this.currentSlide = Number(event.target.dataset.slide);

        _this.rollSlide();

        _this.changePagination();
      });

      _this.pagination.append(element);
    }

    if (_this.debug) _this.log('createPagination');
  });

  _defineProperty(this, "changePagination", function () {
    var bullets = _this.pagination.childNodes;
    bullets.forEach(function (bullet, index) {
      bullet.classList.remove('slider-pagination-bullet-active');

      if (index === _this.currentSlide) {
        bullet.classList.add('slider-pagination-bullet-active');
      }
    });
    if (_this.debug) _this.log('changePagination');
  });

  _defineProperty(this, "rollSlide", function () {
    if (_this.currentSlide < 0) {
      _this.currentSlide = _this.slides.length - 1;
    }

    if (_this.currentSlide >= _this.slides.length) {
      _this.currentSlide = 0;
    }

    _this.slides.forEach(function (slide) {
      return slide.classList.remove('slider-active');
    });

    _this.slides[_this.currentSlide].classList.add('slider-active');

    _this.sliderLine.style.transform = "translate3d(-".concat(_this.currentSlide * _this.width, "px, 0px, 0px)");
  });

  _defineProperty(this, "log", function (eventName) {
    if (eventName) console.log('Event', eventName);
    console.log(_this);
  });

  var el;
  var params;

  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  el = args[0];
  params = args[1];
  if (!params) params = null;
  if (!el) throw new Error('Error! Pass the ID argument or DOM object');
  this.slider = typeof el === 'string' ? document.querySelector(el) : el;
  var defaults = {
    btnPrev: null,
    btnNext: null,
    autoplay: false,
    speed: 3000,
    currentSlide: 0,
    slides: 0,
    debug: false,
    pagination: false
  };
  this.btnPrev = document.querySelector(params.btnPrev) || defaults.btnPrev;
  this.btnNext = document.querySelector(params.btnNext) || defaults.btnNext;
  this.autoplay = Boolean(params.autoplay) || defaults.autoplay;
  this.speed = Number(params.speed) || defaults.speed;
  this.currentSlide = Number(params.currentSlide) || defaults.currentSlide;
  this.debug = params.debug || defaults.debug;
  this.pagination = document.querySelector(params.pagination) || defaults.pagination;
  this.sliderLine = this.slider.querySelector('.slider-wrapper');
  this.slides = this.slider.querySelectorAll('.slider-slide');
  this.width = this.slider.offsetWidth;

  if (this.btnPrev) {
    this.btnPrev.onclick = this.prevSlide;
  }

  if (this.btnNext) {
    this.btnNext.onclick = this.nextSlide;
  }

  if (this.autoplay) {
    setInterval(this.nextSlide, this.speed);
  }

  if (this.pagination) {
    this.createPagination();
  }

  this.slides[this.currentSlide].classList.add('slider-active');
  this.resize();
  window.addEventListener('resize', this.resize);
  if (this.debug) this.log('constructor');
};


;// CONCATENATED MODULE: ./src/js/sticky-navbar.js
function sticky_navbar_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function sticky_navbar_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var sticky_navbar_Slider = function Slider() {
  var _this = this;

  sticky_navbar_classCallCheck(this, Slider);

  sticky_navbar_defineProperty(this, "onScroll", function () {
    _this.navbar.classList.toggle(_this.stickyClass, window.scrollY > _this.topOffset);
  });

  var el;
  var params;

  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  el = args[0];
  params = args[1];
  if (!params) params = null;
  if (!el) throw new Error('Error! Pass the ID argument or DOM object');
  this.navbar = typeof el === 'string' ? document.querySelector(el) : el;
  var defaults = {
    topOffset: 1000,
    //px - offset to switch of fixed position
    stickyClass: 'is-fixed'
  };
  this.topOffset = defaults.topOffset;
  this.stickyClass = defaults.stickyClass;
  this.isFixed = false;
  window.addEventListener('scroll', this.onScroll);
};


;// CONCATENATED MODULE: ./src/js/modal.js
function modal_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var modal_Slider = function Slider() {
  modal_classCallCheck(this, Slider);

  var defaults = {
    dataName: '[data-modal]',
    overlayClass: 'modal-overlay',
    activeClass: 'modal-active'
  };

  for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }

  this.modalLinks = document.querySelectorAll(params.dataName) || document.querySelectorAll(defaults.dataName);
  this.modalOverlays = document.querySelectorAll(params.dataName) || document.querySelectorAll(defaults.dataName);
  this.modalOverlays.forEach(function (modalOverlay) {
    modalOverlay.addEventListener('click', function () {
      this.closest('.modal').classList.remove('modal-active');
    });
  });
  this.modalLinks.forEach(function (modalLink) {
    modalLink.addEventListener('click', function () {
      var modal = document.querySelector("#".concat(this.dataset.modal));
      if (!modal) return;
      modal.classList.add('modal-active');
    });
  });
};


;// CONCATENATED MODULE: ./src/js/forms.js
// Form validation
function enableValidation() {
  var inputs = document.querySelectorAll('input[data-rule]');
  inputs.forEach(function (input) {
    input.addEventListener('blur', function () {
      var rule = this.dataset.rule;
      var value = this.value;
      var check;

      switch (rule) {
        case 'name':
          check = /^([a-z]+)(\s)?([a-z]*)/i.test(value);
          break;

        case 'email':
          check = /.+\@.+\..+/.test(value);
          break;
      }

      this.closest('label').classList.remove('invalid');

      if (!check) {
        this.closest('label').classList.add('invalid');
      }
    });
  });
} // Form handler

function enableFormHandler() {
  var forms = document.querySelectorAll('form');
  var url = "".concat(window.location.protocol, "//").concat(window.location.hostname, "/mail.php");
  forms.forEach(function (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault ? event.preventDefault() : event.returnValue = false; // Send request

      var req = new XMLHttpRequest();
      req.open('POST', url, true);

      req.onload = function () {
        if (req.status >= 200 && req.status < 400) {
          var json = JSON.parse(this.response);

          if (json.send) {
            console.log('Form sended');
          } else {
            console.log('Form error JSON');
          }
        } else {
          console.log('Form error', req.status);
        }
      };

      req.onerror = function () {
        return console.log('Form hosting error');
      };

      req.send(new FormData(event.target));
    });
  });
}
;// CONCATENATED MODULE: ./src/js/index.js




document.addEventListener('DOMContentLoaded', function () {
  // Slider
  var slider1 = new Slider('#slider-main', {
    btnPrev: '.slider-prev',
    btnNext: '.slider-next',
    pagination: '.slider-pagination',
    autoplay: true,
    speed: 8000
  }); // Sticky

  var stickyNav = new sticky_navbar_Slider('.navbar'); // Modal

  var modal = new modal_Slider(); //Forms & inputs

  enableValidation();
  enableFormHandler(); // Menu toggle

  var menuBurger = document.querySelector(".menu-icon");
  var mobileMenu = document.querySelector('.mobile-menu');
  menuBurger.addEventListener("click", function () {
    this.classList.toggle("active");
    mobileMenu.classList.toggle("active");
  });
}); // Google Map

window.initMap = function () {
  var image = '../img/icons/map-pin.png';
  var point = {
    lat: 52.40315998103853,
    lng: 16.90997132280444
  };
  var map = new google.maps.Map(document.getElementById('map'), {
    center: point,
    zoom: 17,
    disableDefaultUI: true,
    mapId: '6cb29367d6c907ca'
  });
  var mapMarker = new google.maps.Marker({
    position: point,
    map: map,
    icon: image
  });
};
})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
// extracted by mini-css-extract-plugin

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map