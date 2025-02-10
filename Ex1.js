var A, B, C, hyp, longAB, longAC;

A = prompt('Donnez un nombre');
B = prompt('Donnez un deuxieme nombre');
C = prompt('Donnez un troisieme nombre')

A = parseFloat(A);
B = parseFloat(B);
C = parseFloat(C);
longAB = (A * A) + (B * B);
longAC = (A * A) + (C * C);
h = longAB + longAC
hyp = Math.sqrt((A * A) + (B * B))
alert('Hypothenuse = ' + hyp);



