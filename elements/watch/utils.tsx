
const preciseTimer = (actionToRepeat: Function , interval: number) => {
  
    const start = new Date().getTime();
    let time = 0;
    
    function instance() {
      time += interval;
      
      actionToRepeat();
      
      const diff = new Date().getTime() - start - time;
      
      setTimeout(instance, interval - diff);
      
    }
    
    setTimeout(instance, interval);
  }

const getTime = () =>  {
    const time = new Date().toTimeString().split(' ')[0].slice(0,5);   
    return time;
}  

export { preciseTimer, getTime }
  