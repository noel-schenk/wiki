export function map<T>(a:Array<T>,f:(a:T,i:number,arr:Array<T>)=>T){
    let aMod = <any>a;
    for(let i=0;i<a.length;i++){
        aMod[i] = f(a[i],i,a);
    }
    return aMod;
}