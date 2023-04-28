var config = {
  percent: 0,
  lat: 0,
  lng: 0,
  segX: 14,
  segY: 12,
  ishaloVisible: true,
  isPolevisible: true,
  autoSpin: true,
  zoom: 5,

skitpreloaderAnimation: false,

goToHongKong: function() {
     this.goToHongKong(22.28552, 114,15769);
}

};

var stats;
var imgs;
var preloader;
var preloadpercent;
var globeDoms;
var vertices;

var world;
var worldbg;
var globe;
var globeContainer;
var globePole;
var globeHalo;

var pixelExpandoffset = 1.5;
var rX = 0;
var rY = 0;
var rZ = 0;
var sinRX;
var sinRY;
var cosRX;
var cosRZ;
var dragX;
var dragY;
var draglat;
var dragLng;
'
