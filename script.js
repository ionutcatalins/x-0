let a = 1;
let matrix = [];
for (let i = 1; i <= 3; ++i) {
    matrix[i] = [];
    for(let j = 1; j <= 3; ++j){
        matrix[i][j] = 0;    
        console.log(matrix[i][j]);    
    }
}

function change(event, buton) {
    let p;   
   let line = Math.round(buton / 10);   
   let column = buton % 10;     
    if(matrix[line][column] == 0) {
        if (a % 2 == 0) {
            p = "x.png";
        } else {
            p = "0.png"
        }  
        document.getElementById(buton).src = p; 
        ++a; 
        matrix[line][column] = a;       
        
     //   console.log(matrix[line,column])
    }
    console.log("start: ")
    for (let i = 1; i <= 3; ++i) {
        if(matrix[i][i] % 2 == 0) {
         
        }
    }
    //console.log(line,column);
    
    
}


