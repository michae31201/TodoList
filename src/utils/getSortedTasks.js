const getSortedTasks = (tasks, sort, sortType) => {
    const sortedTasks = tasks.sort((a,b)=>{
        const aTime = sortType === "deadline"?new Date(`${a.day} ${a.time}`).getTime():a.id;
        const bTime = sortType === "deadline"?new Date(`${b.day} ${b.time}`).getTime():b.id;

        return sort === "min" ? (aTime - bTime) : (bTime - aTime);
    })

    return sortedTasks;
}

export default getSortedTasks;