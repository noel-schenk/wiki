class ProxyPath{
    static getInstance(cb:(subNameCallArray:Array<string>)=>any):any{
        let functions = {
            get(target:any, key:any):any{
                target().subName.push(key);
                return new Proxy(target, functions);
            },
            apply(target:any, key:any, args:any){
                args.unshift("args");
                return cb(target().subName.concat(args)); //whatever cb is returning will be send back
            }
        };
        let save = new ProxyPath.Save([]);
        return new Proxy(()=>{return save.load(save)}, functions);
    }
    static Save = class{
        subName:any;
      constructor(subName:any){
          this.subName = subName;
      }
      load(instance:this){
        return instance;
      }
    }
}
console.log(ProxyPath.getInstance((subNameCallArray)=>{return subNameCallArray}).test.done.wow('var'));