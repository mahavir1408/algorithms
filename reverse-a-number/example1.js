let n = 5781;
let d = '';
while(n > 0) {
  d += n%10;
  n = parseInt(n/10);
}
console.log(d);
