

var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["2a4bd413-2953-4f3d-834d-eacd5471599c","a6a124e2-f704-48c1-b42e-07c3c9b50405","b0d2635a-5190-458c-9672-3857c816cdcf","f19b93a5-6bfd-420b-b2d1-efd648afca36","826951d4-de38-4d3b-ad6c-fa16f01a04be","15c1c01f-dc78-46dc-91fa-494c0f564f14","ddcd7646-2794-4ee0-9d2e-0072de0e8853"],"propsByKey":{"2a4bd413-2953-4f3d-834d-eacd5471599c":{"name":"bg1","sourceUrl":"assets/api/v1/animation-library/gamelab/HTm.whWJkR5t0Kf4BGlyLT8QtC3EN356/category_backgrounds/gradient_10.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"HTm.whWJkR5t0Kf4BGlyLT8QtC3EN356","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/HTm.whWJkR5t0Kf4BGlyLT8QtC3EN356/category_backgrounds/gradient_10.png"},"a6a124e2-f704-48c1-b42e-07c3c9b50405":{"name":"poop","sourceUrl":null,"frameSize":{"x":80,"y":80},"frameCount":1,"looping":true,"frameDelay":12,"version":"NdW7Gm8VHmZ6h8IXoTACiCjiO9A4FUUK","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":80,"y":80},"rootRelativePath":"assets/a6a124e2-f704-48c1-b42e-07c3c9b50405.png"},"b0d2635a-5190-458c-9672-3857c816cdcf":{"name":"feed","sourceUrl":"assets/api/v1/animation-library/gamelab/.uhRrRsrbkYr5RW1NETgh8NrYZNQkRmB/category_icons/play.png","frameSize":{"x":384,"y":384},"frameCount":1,"looping":true,"frameDelay":2,"version":".uhRrRsrbkYr5RW1NETgh8NrYZNQkRmB","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":384,"y":384},"rootRelativePath":"assets/api/v1/animation-library/gamelab/.uhRrRsrbkYr5RW1NETgh8NrYZNQkRmB/category_icons/play.png"},"f19b93a5-6bfd-420b-b2d1-efd648afca36":{"name":"omelette","sourceUrl":null,"frameSize":{"x":253,"y":226},"frameCount":1,"looping":true,"frameDelay":12,"version":"sjTs9iaKrYPC8QNX3ccDK1cvrp8Cb3Yi","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":253,"y":226},"rootRelativePath":"assets/f19b93a5-6bfd-420b-b2d1-efd648afca36.png"},"826951d4-de38-4d3b-ad6c-fa16f01a04be":{"name":"pet","sourceUrl":null,"frameSize":{"x":371,"y":317},"frameCount":4,"looping":true,"frameDelay":12,"version":"tmPPV.bduTx_5bUkep8EwVHlrQEcEAGa","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":742,"y":634},"rootRelativePath":"assets/826951d4-de38-4d3b-ad6c-fa16f01a04be.png"},"15c1c01f-dc78-46dc-91fa-494c0f564f14":{"name":"pet2","sourceUrl":null,"frameSize":{"x":445,"y":319},"frameCount":9,"looping":true,"frameDelay":12,"version":"MQi5rSKxpFvot10RaMNGigran20bJGhF","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":1335,"y":957},"rootRelativePath":"assets/15c1c01f-dc78-46dc-91fa-494c0f564f14.png"},"ddcd7646-2794-4ee0-9d2e-0072de0e8853":{"name":"pet3","sourceUrl":null,"frameSize":{"x":445,"y":319},"frameCount":15,"looping":true,"frameDelay":12,"version":"EnNKx92ZsslJ623pCWw8InzyLKcgNZKl","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":1335,"y":1595},"rootRelativePath":"assets/ddcd7646-2794-4ee0-9d2e-0072de0e8853.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var bg = createSprite(200, 200);
bg.setAnimation("bg1");

var poop = createSprite(100, 200);
poop.setAnimation("poop");
poop.visible = false;
var poop1 = createSprite(100, 200);
poop1.setAnimation("poop");
poop1.visible = false;
var poop2 = createSprite(100, 200);
poop2.setAnimation("poop");
poop2.visible = false;
var poop3 = createSprite(100, 200);
poop3.setAnimation("poop");
poop3.visible = false;
var poop4 = createSprite(100, 200);
poop4.setAnimation("poop");
poop4.visible = false;
var poop5 = createSprite(100, 200);
poop5.setAnimation("poop");
poop5.visible = false;
var poop6 = createSprite(100, 200);
poop6.setAnimation("poop");
poop6.visible = false;
var poop7 = createSprite(100, 200);
poop7.setAnimation("poop");
poop7.visible = false;
var poop8 = createSprite(100, 200);
poop8.setAnimation("poop");
poop8.visible = false;

var pet = createSprite(200, 200);
pet.setAnimation("pet");
pet.scale = 0.3;
pet.velocityX = 2;
pet.velocityY = 1.5;
pet.setCollider("rectangle");

var pet2 = createSprite();
pet2.setAnimation("pet2");
pet2.scale = 0.3;
pet2.velocityX = 2;
pet2.velocityY = 2.5;
pet2.visible = false;
pet2.setCollider("rectangle");

var pet3 = createSprite();
pet3.setAnimation("pet3");
pet3.scale = 0.3;
pet3.velocityX = 2.5;
pet3.velocityY = 2;
pet3.visible = false;
pet3.setCollider("rectangle");


var feed = createSprite(200, 340);
feed.setAnimation("feed");
feed.scale = 0.1;

var omelette = createSprite(250, 300);
omelette.setAnimation("omelette");
omelette.scale = 0.2;
omelette.visible = false;


World.frameRate = 15;



function run(sprt) {
  if (sprt.x > 390 || sprt.x < 10) {
    sprt.velocityX = -sprt.velocityX * 1.1;
  }
  if (sprt.y > 390 || sprt.y < 10) {
    sprt.velocityY = -sprt.velocityY*1.1;
  }
  sprt.x += sprt.velocityX;
  sprt.y += sprt.velocityY;
  
  if (sprt.velocityX < 10) {
    sprt.velocityX += randomNumber(0.2, 0.5);
  }
  if (sprt.velocityY < 10) {
    sprt.velocityY += randomNumber(0.2, 0.5);
  }
}

function pet2appear() {
  pet2.visible = true;
  pet2.x = pet.x + 10;
  pet2.y = pet.y;
}

function pet3appear() {
  pet3.visible = true;
  pet3.x = pet2.x + 30;
  pet3.y = pet2.y; 
}


setTimeout(pet2appear, 3000);
setTimeout(pet3appear, 6000);

setTimeout(function() {
  poop.visible = true;
  poop.x = pet.x;
  poop.y = pet.y;
}, 1000);

setTimeout(function() {
  poop1.visible = true;
  poop1.x = pet.x;
  poop1.y = pet.y;
}, 2500);

setTimeout(function() {
  poop2.visible = true;
  poop2.x = pet2.x;
  poop2.y = pet2.y;
}, 3500);


timedLoop(2000, function(){
  poop2.visible = true;
  poop2.x = pet.x;
  poop2.y = pet.y;
});

timedLoop(3000, function(){
  poop3.visible = true;
  poop3.x = pet3.x;
  poop3.y = pet3.y;
});

timedLoop(4000, function(){
  poop4.visible = true;
  poop4.x = pet2.x;
  poop4.y = pet2.y;
});

timedLoop(2000, function(){
  poop5.visible = true;
  poop5.x = pet3.x;
  poop5.y = pet3.y;
});

timedLoop(3000, function(){
  poop6.visible = true;
  poop6.x = pet.x;
  poop6.y = pet.y;
});

timedLoop(3000, function(){
  poop7.visible = true;
  poop7.x = pet2.x;
  poop7.y = pet2.y;
});

timedLoop(3000, function(){
  poop8.visible = true;
  poop8.x = pet3.x;
  poop8.y = pet3.y;
});


setTimeout(function() {text("Even if you clean, poop will still not go away.", 100, 60)}, 30000);

function draw() {
  run(pet);
 
  if (mousePressedOver(feed)) {
    omelette.visible = true;
  }
  if (omelette) {
    omelette.x = World.mouseX;
    omelette.y = World.mouseY;
  }
  if (omelette.isTouching(pet) || omelette.isTouching(pet2) || omelette.isTouching(pet3)) {
    omelette.visible = false;
  } 
  
  if (omelette.isTouching(pet)) {
    if (poop.visible) {
      poop.visible = false;
    } else {
      poop3.visible = false;
    }
  } else if (omelette.isTouching(pet2)) {
    if (poop1.visible) {
      poop.visible = false;
    } else {
      poop4.visible = false;
    }
  } else if (omelette.isTouching(pet3)) {
    if (poop2.visible) {
      poop.visible = false;
    } else {
      poop5.visible = false;
    }
  }
  
  
  if (pet2.visible) {
    run(pet2);
  }
  if (pet3.visible) {
    run(pet3);
  }

  
  drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
