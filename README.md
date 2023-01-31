This is a micro Javascript Library for DOM.

```javascript

<script src="path/to/jLib.js"> </script>


<script>

//Note:
//here you can select class with . (dot) => .class-name
//here you can select id with # (hash) => #id-name
//here you can select element(tag) with > (greater than symbol) => >div

//event handeling

//syntax
jLib.on('selector','event-name', callback function(){
  //action...
});

//example
jLib.on('>button','click',() => {

  alert('jLib loaded successfully...!!!');

});

jLib.on('>button','load',() => {

  alert('jLib loaded successfully...!!!');

});

jLib.on('>input','keyup',() => {

  alert('jLib loaded successfully...!!!');

});

jLib.on('>input','change',() => {

  alert('jLib loaded successfully...!!!');

});

//show-hide methods

jLib.on('.on','click',() => {

  jLib.select('.some-image').show();

});

jLib.on('.off','click',() => {

  jLib.select('.some-image').hide();

});

//change css or get element's css


jLib.select('>button').style(); //gets you all styles of all button element
jLib.select('>button').style(5); //gets you all styles of 5th button element
jLib.select('>button').style('background-color'); //gets you background-color of all button element
jLib.select('>button').style([3,'background-color']); //gets you background-color of 3rd button element


//debugging methods

jLib.log(arg1, arg2, arg3 ....);
jLib.print(arg1, arg2, arg3 ....);
jLib.error(arg1, arg2, arg3 ....);
jLib.warning(arg1, arg2, arg3 ....);

</script>

```
