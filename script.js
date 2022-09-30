//fecha numerica dia, mes y año, dando como resultado si el dia es laborale o no.

let dia;

function calendario(day, month, year, result){
    let dayOfWeek;

    if (day.value < 1 || day.value > 31 || day.value == "" || year.value == "" || year.value < 1){
        alert("Fecha inválida");   
        return; 
    }
    dia = new Date(month.value + "/" + day.value + "/" + year.value).getDay();
    switch (dia){
        case 0:
            dayOfWeek="Domingo - día no laboral";
            break;
        case 1:
            dayOfWeek="Lunes - día laboral";
            break;
        case 2:
            dayOfWeek="Martes - día laboral";
            break;
        case 3:
            dayOfWeek="Miércoles - día laboral";
            break;
        case 4:
            dayOfWeek="Jueves - día laboral";
            break;
        case 5:
            dayOfWeek="Viernes - día laboral";
            break;
        case 6:
            dayOfWeek="Sábado - día no laboral";
            break;               
    }
    result.value= dayOfWeek;
}

