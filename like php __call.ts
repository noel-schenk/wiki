class ProxyPath{
    static getInstance():any{
        let functions = {
            get(target:any, key:any):any{
                    target().subName.push(key);
                return new Proxy(target, functions);
            },
            apply(target:any, key:any, args:any){
                    args.unshift("args");
                return target().subName.concat(args);
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
console.log(ProxyPath.getInstance().test.done.wow('var'));