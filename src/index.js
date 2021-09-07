import x from './x.js'
import png from './assets/1.png'  //这里是加载文件路径，而不是内容

console.log(png)

const div = document.getElementById('app')
div.innerHTML = `<img src="${png}" />`

const button = document.createElement('button')
button.innerText = '懒加载'

button.onclick = () => {
    const promise = import('./lazy')//导入得到的是一个延迟对象，异步操作
    promise.then(
        (module) => { //成功的时候,得到的是一个模块
            const fn = module.default //得到模块的默认值,也就是lazy.js里导出的那个默认函数
            fn()
        },
        () => { })
}
div.appendChild(button)