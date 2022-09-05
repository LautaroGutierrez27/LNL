let val = 0;
let nm;
let slider;
let img1;
let img2;
let img3;
let im4;
let checkbox;
function preload() {
  img1 = loadImage('data:image/jpeg;base64,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');
  img2 = loadImage('https://image.shutterstock.com/image-vector/dna-wrapped-around-eight-histone-260nw-1964429296.jpg')
  img3 = loadImage('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdE33pca9H1l1kWGRbztdWS9kCzSIOhpw6RftfxvsL4IM1l6JqU88s39-VutTxa-RX8YE&usqp=CAU')
  img4 = loadImage('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAhwWc59de0UdLOvjZkhYexoI3wlbGJDtCM7KAziwJSA&s')
}
function setup() {
  
  createCanvas(400, 400);
  background(120)
  slider = createSlider(0, 255, 0, 10);
  slider.position(150, 20);
  slider.style('width', '100px');
   checkbox = createCheckbox('informacion', false);
  checkbox.changed(myCheckedEvent);
  checkbox.position(0,0);
}
function myCheckedEvent() {
  if (checkbox.checked()) {
    console.log('Checking!');
  } else {
    console.log('Unchecking!');
    
    
  }
}
function draw() {
  let val = slider.value();
  if(val > 0 &&  val < 40){
    background(120)
    
    
     if (checkbox.checked()) {
    console.log('Checking!');
  } else {
    textSize(10)
    textAlign(CENTER);
    text("El ácido \n desoxirribonucleico, conocido también por las siglas ADN, \n es un ácido nucleico que contiene las instrucciones genéticas usadas en el desarrollo y funcionamiento de todos los organismos vivos \n y algunos virus; también es responsable de la transmisión hereditaria.", 207, 310)
    textSize(10)
    textAlign(CENTER);
    text("La metilación del ADN \n constituye  un marcador epigenético \n que identifica la cadena molde durante la replicación \n del ADN y el origen parental de regiones improntadas, \n regula a los transposones, la impronta genómica \n y la expresión génica.", 140, 180)

    textSize(12)
    text("la metilacion afecta a la molecula de ADN", 140, 150)
          console.log('Unchecking!');
  }
      image(img1, 270, 100, 120,200);
    textSize(30);
    text("molecula de adn", 200, 80);
    
  }
  if(val > 40 && val < 110){
    background(120)
    if (checkbox.checked()) {
    console.log('Checking!');
  } else {
    
    textSize(10)
    textAlign(CENTER);
    text("El nucleosoma es una estructura que constituye la unidad fundamental \n de la cromatina, que es la forma de organización \n del ADN en las células eucariotas, es decir, la \n unidad básica de repetición de la cromatina eucariótica.", 207, 310)
    console.log('Unchecking!');
  }
     image(img2, 100, 100, 200,200);
    textSize(30);
    text("nucleosoma", 200, 80)
  }
    if(val > 130 && val < 180){
      background(120)
       if (checkbox.checked()) {
    console.log('Checking!');
  } else {
     textSize(10)
      textAlign(CENTER)
      text("Un solenoide es cualquier dispositivo \n  físico capaz de crear un campo magnético sumamente uniforme e intenso en \n su interior, y muy débil en el exterior. Un ejemplo teórico es el de una bobina de hilo conductor aislado y enrollado \n helicoidalmente, de longitud indeterminada.", 207, 310)
       console.log('Unchecking!');
  }
      image(img3, 100, 100, 200,200);
      textSize(30);
      
      text("Solenoide", 200, 80);
    }
    
      if(val > 180 && val < 220){
        background(120)
         if (checkbox.checked()) {
    console.log('Checking!');
  } else {
    
            textSize(10)
      textAlign(CENTER)
      text(" En biología y citogenética, se denomina cromosoma \n a cada una de las estructuras altamente organizadas, formadas por ADN \n y proteínas, que contiene la mayor parte de la información \n genética de un ser vivo." , 207, 310)
    console.log('Unchecking!');
  }
        image(img4, 100,100.200,200);
        textSize(30)
      
        text("cromosoma",200, 80);
      }  
}
