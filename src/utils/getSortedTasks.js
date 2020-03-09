const getSortedTasks = (tasks) => {
    const sortedTasks = tasks.sort((a,b)=>{
            const aTime = new Date(`${a.day} ${a.time}`).getTime();
            const bTime = new Date(`${b.day} ${b.time}`).getTime()

            return aTime - bTime;
        })
    
    return sortedTasks;
}

export default getSortedTasks;