var e;"function"!=typeof(e=window.Element.prototype).matches&&(e.matches=e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||function(e){for(var o=this,t=(o.document||o.ownerDocument).querySelectorAll(e),n=0;t[n]&&t[n]!==o;)++n;return Boolean(t[n])}),"function"!=typeof e.closest&&(e.closest=function(e){for(var o=this;o&&1===o.nodeType;){if(o.matches(e))return o;o=o.parentNode}return null}),document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll(".js-modal-open"),o=document.querySelector(".js-modal-overlay"),t=document.querySelectorAll(".js-modal-close");e.forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault();var t=this.getAttribute("data-modal");document.querySelector('.js-modal[data-modal="'+t+'"]').classList.add("is-open"),o.classList.add("is-open")}))})),t.forEach((function(e){e.addEventListener("click",(function(e){this.closest(".js-modal").classList.remove("is-open"),o.classList.remove("is-open")}))})),document.body.addEventListener("keyup",(function(e){27==e.keyCode&&(document.querySelector(".js-modal.is-open").classList.remove("is-open"),document.querySelector(".js-modal-overlay").classList.remove("is-open"))}),!1),o.addEventListener("click",(function(){document.querySelector(".js-modal.is-open").classList.remove("is-open"),this.classList.remove("is-open")}))}));
//# sourceMappingURL=index.b1187e9d.js.map
