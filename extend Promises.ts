class PromiseCapsule<T>{
    readonly promiseExtend:Promise<T>;

    constructor(f:(t:(resolve:T)=>void)=>void){
        this.promiseExtend = new Promise(f);
    }

    //extending promise is not really possible or really hard ... trying this workaround as I'm only using then as of now
    then(f:(t:T)=>void){
        this.promiseExtend.then((t)=>{
            f(t);
        });
    }
}