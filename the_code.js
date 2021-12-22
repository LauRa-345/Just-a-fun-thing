// &#12353 - &#12543;
var txt_u = [];
var txt_d = [];
var lines = "";
var next = [[],[],[]];
const width = window.innerWidth/17 ;
const length = window.innerHeight/17;
var colour = 0;
for (let y = 0; y < width; y++) {
    next[0].push(5+Math.floor(Math.random() * 25))
    next[1].push(Math.floor(Math.random() * 2))
    next[2].push(Math.floor(Math.random() * 2))
}
time = 0;

function the_numbers() {
    lines = ""
    if (time == 1) {
        backup_u = Array.from(txt_u);
        backup_d = Array.from(txt_d);
        backup_u = backup_u.slice(1);
        backup_u[backup_u.length] = [];
    }
    for (let i = 0; i < length; i ++) {
        if (time == 0) {
            lines += "<tr>";
            txt_u[i] = []
            txt_d[i] = []
        } else {
            lines += "<tr>";
            if (time == 16) {
                console.log(lines,backup_d,backup_u)
            }
        }
        for (let x = 0; x < width; x ++) {
            if ((time == 0) ){
                if (next[1][x] == 1){
                    colour = Math.floor(Math.random() * 120);
                    lines += `<td style="color:rgb(${colour}, ${155+Math.floor(Math.random() * 100)}, ${colour})">`
                    newsymb = 12353+Math.floor(Math.random() * 190)
                    if (next[2][x] == 0){
                        txt_d[i][x] = (`<td style="color:rgb(${colour}, ${155+Math.floor(Math.random() * 100)}, ${colour})">&#${newsymb}`)
                        txt_u[i][x] = 0
                    } else {
                        txt_d[i][x] = 0
                        txt_u[i][x] = (`<td style="color:rgb(${colour}, ${155+Math.floor(Math.random() * 100)}, ${colour})">&#${newsymb}`)
                    }
                    lines += `&#${newsymb}`
                } else {
                    lines += `<td style="color:rgb(${colour}, ${155+Math.floor(Math.random() * 100)}, ${colour})">`
                    if (next[2][x] == 0) {
                        txt_u[i][x] = 0
                        txt_d[i][x] = (`<td>&#10240`)
                    } else {
                        txt_d[i][x] = 0
                        txt_u[i][x] = (`<td style="color:rgb(${colour}, ${155+Math.floor(Math.random() * 100)}, ${colour})">&#10240`)
                    }
                    lines += `&#10240`;
                }
                next[0][x] -= 1;
                if (next[0][x] == 0) {
                    next[1][x] = Math.abs(next[1][x]-1)
                    next[0][x] = (1+Math.floor(Math.random() * 25))
                }
                if (i > length-1) {
                    if (next[2][x] == 0) {
                        if (txt_d[0][x] == "<td>&#10240") {
                            next[1][x] = 0
                            console.log("yes")
                        } else {next[1][x] = 1}
                    }
                }
            } else if (time == 1) {
                if (next[2][x] == 0){
                    if (i+1 > length) {
                        if (next[1][x] == 1){
                            newsymb = 12353+Math.floor(Math.random() * 190)
                            colour = Math.floor(Math.random() * 120);
                            txt_d[0][x] = (`<td style="color:rgb(${colour}, ${155+Math.floor(Math.random() * 100)}, ${colour})">&#${newsymb}`)
                            lines = lines+(`<td style="color:rgb(${colour}, ${155+Math.floor(Math.random() * 100)}, ${colour})">&#${newsymb}`)
                        } else {                            
                            txt_d[0][x] = (`<td style="color:rgb(${colour}, ${155+Math.floor(Math.random() * 100)}, ${colour})">&#10240`)
                            lines = lines+(`<td style="color:rgb(${colour}, ${155+Math.floor(Math.random() * 100)}, ${colour})">&#10240`)}
                    } else {
                        lines = lines+backup_d[i][x]
                        txt_d[txt_d.length-i-1][x] = backup_d[txt_d.length-i-2][x]
                    }
                } else {
                    if (i+1 > length) {
                        newsymb = 12353+Math.floor(Math.random() * 190)
                        colour = Math.floor(Math.random() * 120);
                        if (next[1][x] == 1){
                            txt_u[i][x] = (`<td style="color:rgb(${colour}, ${155+Math.floor(Math.random() * 100)}, ${colour})">&#${newsymb}`)
                            lines += (`<td style="color:rgb(${colour}, ${155+Math.floor(Math.random() * 100)}, ${colour})">&#${newsymb}`)}
                        else {
                            txt_u[i][x] = (`<td style="color:rgb(${colour}, ${155+Math.floor(Math.random() * 100)}, ${colour})">&#10240`)
                            lines += (`<td style="color:rgb(${colour}, ${155+Math.floor(Math.random() * 100)}, ${colour})">&#10240`)
                        }
                    } else {
                        lines += backup_u[i][x]
                        txt_u[i][x] = backup_u[i][x]
                    }
                } 
                if (i+1 > length) {
                    next[0][x] -= 1;
                    if (next[0][x] == 0) {
                        next[1][x] = Math.abs(next[1][x]-1)
                        next[0][x] = (1+Math.floor(Math.random() * 25))
                }}
            }
            lines += "</td>";
        }
        //txt
        lines += "</tr>"
    }
    lines += ""
    document.getElementById('record').innerHTML = `<table class="fixed" style="font-size: xx-small; text-align: center;">${lines}</table>`;
    time = 1
}
setInterval(the_numbers,50)

/*if (next[1][x] == 1){
    colour = Math.floor(Math.random() * 120);
    lines += `<td style="color:rgb(${colour}, ${155+Math.floor(Math.random() * 100)}, ${colour})">`
    lines += `&#${12353+Math.floor(Math.random() * 190)}`
} else {
    lines += `<td style="color:rgb(${colour}, ${155+Math.floor(Math.random() * 100)}, ${colour})">`
    lines += `&#10240`;
}*/