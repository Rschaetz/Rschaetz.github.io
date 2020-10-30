if (typeof (window.Layout) == "undefined") {
  window.Layout = new Object();
}

(function (Layout) {

  //return
  Layout.Init = Init;

  function Init() {
      InitMainNav();
  }

  function InitMainNav() {
      var mainNav$ = $('#siteNav .mainNav:first');
      var burger$ = $('#mainNavBurger');
      var nodeToggles$ = mainNav$.find('.toggle');
      nodeToggles$.addClass('arrow-down')
      burger$.on('click', function () {
          if ($(this).hasClass('open')) {
              nodeToggles$.removeClass('open');
              burger$.removeClass('open');
              mainNav$.removeClass('open');
          } else {
              burger$.addClass('open');
              mainNav$.addClass('open');
          }
      });
      nodeToggles$.on('click', function (e) { _handleClick(e, false); });
      nodeToggles$.on('keydown', function (e) { _handleClick(e, true); });
    

      function _handleClick(e, isKeyPress) {
          var key = e.keyCode || e.which;
          if (isKeyPress && key !== 13) { return; }
          e.preventDefault();
          var this$ = $(e.currentTarget);
          var sibToggles$ = this$.closest('li').siblings('li').find('.toggle');
          var kidToggles$ = this$.siblings('ul').find('.toggle');
          if (this$.hasClass('open')) {
              this$.addClass('arrow-down')
              this$.removeClass('arrow-up')
              sibToggles$.removeClass('open');
              kidToggles$.removeClass('open');
              this$.removeClass('open');
          } else {
              sibToggles$.not(this$).removeClass('open');
              sibToggles$.not(this$).removeClass('arrow-up');
              sibToggles$.not(this$).addClass('arrow-down');
              kidToggles$.removeClass('open')
              this$.addClass('open');
              this$.removeClass('arrow-down')
              this$.addClass('arrow-up')
          }
      }
  }


})(Layout);

jQuery(document).ready(function () {    
  Layout.Init();
});