// Funciones 
const filterMovie1999 = (arrData, range) => {
    return arrData.filter(object => object.Year <= range);
    };
    window.filterMovie1999 = filterMovie1999;

const filterMovie2000 = (arrData, range) => {
    return arrData.filter(object => object.Year >= range);
    };
    window.filterMovie2000 = filterMovie2000;

