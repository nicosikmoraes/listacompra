import { Component } from '@angular/core'

//Isso aqui é um decorator, ele é uma classe que altera uma outra classe. Ou seja quando o a Class HelloWorldCompnent recebe esse decorator ela deixa de ser uma classe normal e vira um componente anuglar.
@Component({
        //O selector vai dizer como que vamos acessar esse componente em uma página html
    selector: 'hello-world',
        //O template é basicamente o código html que vai aparecer na tela
    template: '<h1>Hello World</h1>'
})

export class HelloWorldComponent {

}

//Tem que importar esse componente dentro app.component.ts