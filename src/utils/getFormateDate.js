const getFormateDate = (date) => {
    let dateArray = date.toLocaleDateString().split("/");
    let month = dateArray[1];
    let day = dateArray[2];
    if(month < 10){
        dateArray[1] = '0'+ month;
    }
    if(day < 10){
        dateArray[2] = '0'+day;
    }
    
    return dateArray.join("-");
}

export default getFormateDate;