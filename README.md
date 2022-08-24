<p align="center">
  <img src="https://github.com/deviobr/code-patterns/blob/main/images/devio.webp?raw=true" />
  <h1 align="center">Devio Chanllege</h1>
</p>

</br>

## O Desafio 🔎
Um restaurante precisa poder registrar suas vendas de forma fácil e rápida, este trabalha com preparo de comidas rápidas e o método atual por comanda deixa o processo como um todo mais lento. O restaurante gostaria de ter um ambiente intuitivo listando os produtos mais vendidos e possibilitando a fácil inserção desses no checkout, ele também gostaria de um visual simples, porém moderno.

</br>

## Planejamento 🧠

Frente ao desafio, e com o tempo curto de execução, realizei um planejamento das tarefas seguindo a execução de toda a parte visual e em seguida fazendo a lógica por trás de tudo.
E para isso utilizei as seguintes ferramentas :

* [Vite](https://vitejs.dev/) - Ferramenta que traz o React da forma mais enxuta possível.
* [Tailwind](https://tailwindcss.com/) - Framework de estilização que permite um maior controle e rapidez na estilização da página
* [React Router Dom](https://reactrouter.com/en/v6.3.0) - Biblioteca para fazer o roteamento das páginas da sua aplicação de forma dinâmica.
* [Supabase](https://supabase.com/) - Ferramenta que inclui um banco de dados e outros serviços, facilitando a otimização do back-end.


##### Arquitetura do projeto 🏗 : 

  




</br>
</br>

#### Mãos a obra 👷‍ : 
 Devido ao tempo proposto e por não ter trabalhado com nada parecido, consegui realizar as seguintes funcionalidades:
 
* ✅ O usuário poderá ver uma pequena quantidade de produtos na tela para seleção rápida
* ✅ O usuário terá a opção de digitar o nome ou código para encontrar o produto.
* ❌ O usuário irá poder adicionar/remover itens e acompanhar o resumo do pedido.
* ❌ O usuário poderá ver o total e o troco.
* ✅ Deverá poder incluir o nome do cliente para ser entregue o pedido.
* ❌ Ao finalizar o pedido este deverá ser impresso em uma via para o cliente (impressora térmica), liberando a tela para o próximo pedido
* ✅ O pedido deverá aparecer para a cozinha junto ao nome do cliente.
* ✅ A cozinha poderá dar baixa nos pedidos concluídos.
* ✅ Os pedidos devem aparecer para a cozinha em tempo real.
* ✅ O usuário poderá incluir uma observação a cozinha.
* ❌ O usuário poderá atribuir múltiplas formas de pagamento na finalização do pedido.
* ✅ Os pedidos baixados devem aparecer em uma tela com o nome do cliente, apitando para ser feito a retirada.

</br>

#### Fluxo da Funcionalidade 🌀 :
```
 Usuário podera pesquisar seu pedido (pedido único) >> 
 
    Podera escolher a quantidade e verá o preço a pagar >> 
    
        Podera adicionar observação >> Devera clicar em "finalizar pedido" >> 
        
            Sera redirecionado para página de pagamento >> Deverá adicionar seu nome >> 
            
                pedido ira para um banco de dados >> Cozinha irá receber em tempo real seu pedido >> 
                
                    Cozinha podera dar baixa em seu pedido (Podendo ser visualizado na página de "Retirada")
```

#### Observações 🧐 :

Tenho a compreensão de que o projeto não está rodando perfeitamente, existem vários detalhes que gostaria de adicionar, como o usuário pode fazer mais de um pedido, um sistema de pagamento adequado, gostaria também de implementar algum tipo de feedback para o usuário como um toast para entender melhor oque está acontecendo. Mas independente de tudo, estou satisfeito com a entrega pois a minha intenção era entregar um MVP (produto minimamente viável), onde o cliente possa ter a noção do produto e assim fazer as features necessárias. Pois um código que não ajuda ninguem são apenas linhas fúteis.

#### Dificuldades 😱 :

* Implementar o visual - Logo de cara tive a dificuldade de implementar o visual que era proposto, pois não tinha exatamente os detalhes da parte visual como fonte, cor, tamanho; então tentei aproximar o máximo póssivel com base na comparação.

* Usuário conseguir fazer mais de um pedido - Estava implementando essa funcionalidade, porém percebi que estava perdendo muito tempo nela, então decidi não continuar insistindo, e deixar o usuário apenas podendo fazer um único pedido, mas tendo uma jornada completa.

* Guardar os Pedidos - Outra dificuldade, pois queria guardar as informações dos pedidos, mas como ? pensei em guardar localmente, e fui a pesquisa para ver como fazer, mas não estava chegando a algo concreto. Então pensei em criar um backend, porém iria demorar muito e com certeza não conseguiria entregar algo. Então procurei plataformas que tivessem esse objetivo, e testei algumas como o Firebase, Back4App, mas o que mais me atendeu foi o Supabase, que é uma implementação super simples.

#### Aprendizados 🤓 :

- Manipulação de dados do usuário - Em projetos anteriores já trabalhei com informações do usuário, e geralmente utilizava um "state" do React para cada informação, porém nesse projeto tinha muitas informações manipulaveis, e na metade do projeto ví que já estava com uns 8 "state", e estava me perdendo em próprio códgio. Desse modo, decidi refatorar e deixar as informações em um único "state", isso que ocasinou o usuário poder fazer somente um pedido. 

- Guardas os Pedidos - Foi uma dificuldade encontrar uma forma de fazer ? Foi, mas com isso tive a experiência de testar diversos serviços de back-end, passar pela difuldade de implementar cada um, e assim percebo que tive esse aprendizado de buscar um serviço, entender esse serviço, implentar e etc.

</br>
</br>

## Expressões de gratidão 🎁 

* Estou muito grato não só a finalização, mas também a todo aprendizado obtido 🤓
* Obrigado publicamente 💙

