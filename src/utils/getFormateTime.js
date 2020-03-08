const getFormateTime = (date) => {
    let time = date.toTimeString().split(" ")[0];
    return time.slice(0,-3);
}

export default getFormateTime;