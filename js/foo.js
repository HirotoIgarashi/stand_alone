/*
 * foo.js
 * ルート名前空間モジュール
*/

/*jslint          browser : true, continue  : true,
  devel   : true, indent  : 2,    maxerr    : 50,
  newcap  : true, nomen   : true, plusplus  : true,
  regexp  : true, sloppy  : true, vars      : true,
  white   : true
*/
/*global foo:true */

foo = (function () {
  'use strict';
  var initModule = function () {

    console.log( 'DOM Content Loaded' );

  };

  return { initModule : initModule };

}());
