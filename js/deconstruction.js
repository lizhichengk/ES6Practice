{
    let [a,b,c] = [1,2,3];
}
{
    let [foo,[[bar],baz]] = [1,[[2],3]]
}
{
    let [foo,,aaa] = [1,2,3]
    //console.log(aaa)
}
{
    let [foo,...bar] = [1,2,3]
    //console.log(bar)
}
{
    let [x,y,...z] = ['a']
    /* console.log(x)
    console.log(y)
    console.log(z) */
}
{
    let [x,y,z] = new Set(['a','b','c'])
    /*console.log(x)
    console.log(y)
    console.log(z)*/
}
{
    let [foo = true] = []
}
{
    let [x,y = 'b'] = ['a']
}
{
    let [x = 1] = [undefined];
    //x= 1
    let [y= 1] = [null]
    //y = null
}
{
    //结构表达式惰性求值
    function f(){
        return 'aaa'
    }
    let [x = f()] = [1]
    //console.log(x)
    let [y = f()] = []
    //console.log(y)
    //只有在使用才会求值
}
{
    let {foo,bar} = {foo:'aaa','bar':'bbb'}
}
{
    let {foo:bar} = {foo:"aaa"}
    //console.log(bar)
}
{
    let obj = {
        p:[
            'hello',
            {y:'World'}
        ]
    }
    //let { p: [x, { y }] } = obj;
    //console.log(x)
    //console.log(y)
    //这时P是模式不是变量，因此不会被赋值

    let { p, p: [ x, {y}] } = obj
    /* console.log(p)
    console.log(x)
    console.log(y) */
}
{
    const arr = [[1,2],[3,4]].map(([a,b])=>a+b);
    // console.log(arr)
}
{
    var name = 'aaa';
    let obj = {
        name:'bbb',
        detail:{
            name:'ccc',
            foo,
            fo
        },
        foo
    }
    function foo (){
        return ()=>{
            console.log(this.name)
        }
    }
    function fo (){
        return function aaa (){
            console.log(this.name)
        }
    }
    var f = new foo({name:'fff'})
    //f.call({name:'ddd'});
    var ff = new fo({name:'fff'})
    //ff.call({name:'ddd'});
    //foo()();
    //obj.foo()();
    let abc = obj.foo;
    let bcd =obj.detail;
    //abc()();
    //bcd.foo()()
    //bcd.fo()()
}
{
    let name = 'aaa';
    function aaa (){
        var name = 'bbb';
        return function bbb (){
            var name = 'ccc';
            console.log(this.name)
            console.log(window.name)
            console.log(this.name)
        }
    }
    var f = aaa();
    //new f()
    //var f = aaa().call({name:'asdh'});
}
{
    var obj = {
        foo:'bar',
        func:function(){
            var self = this;
            console.log(this.foo)
            console.log(self.foo)
            (function (){
                console.log(this)
                console.log(self.foo)
            }())
        }
    }
     //obj.func()
}
{
    var obj = {
        aaa:111,
        bbb:222,
        ccc:333
    }
    let {...object} = obj
    let aaa = {...obj}
     /*console.log(object.aaa)
    console.log(aaa.aaa) */
}
Function.prototype.bind = function(){
    var self = this;    //这个this 指向调用bind函数，就是保存原函数
    var context = [].shift.call(arguments); //取需要绑定的上下文
    var args = [].slice.call(arguments);    //取剩余参数
    return function (){
        return self.apply(context,[].concat.call(args,[].slice.call(arguments)) )
    }
}
var obj = {
    name : "zhangsan"
}
var foo = function(a,b,c){
    console.log(this.name)
    console.log(a,b,c)
}.bind(obj,1)
/*foo(2,3)*/
