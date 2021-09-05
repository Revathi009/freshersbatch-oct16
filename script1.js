var flip = prompt('Enter array of strings');
var array = flip.split(" ");
document.write("array: ",array);
document.write("*************<br>");
for(i=0;i<array.length;i++){
    document.write("*",array[i],"*<br>");
}
document.write("*************");
