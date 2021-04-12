# 💻 Sobre o desafio

Nesse desafio, você deverá criar uma aplicação para treinar o que aprendeu até agora no Node.js!

Essa será uma aplicação de listagem e cadastro de usuários. Para que a listagem de usuários funcione, o usuário que solicita a listagem deve ser um admin (mais detalhes ao longo da descrição).

Rotas da Aplicação

### POST `/users`

A rota deve receber `name`, e `email` dentro do corpo da requisição para que seja possível cadastrar um usuário.

### PATCH `/users/:user_id/admin`

A rota deve receber, nos parâmetros da rota, o `id` de um usuário e transformar esse usuário em admin.

### GET `/users/:user_id`

A rota deve receber, nos parâmetros da rota, o `id` de um usuário e devolver as informações do usuário encontrado pelo corpo da resposta.

### GET `/users`

A rota deve receber, pelo header da requisição, uma propriedade `user_id` contendo o `id` do usuário e retornar uma lista com todos os usuários cadastrados. O `id` deverá ser usado para validar se o usuário que está solicitando a listagem é um admin. O retorno da lista deve ser feito apenas se o usuário for admin.


https://www.notion.so/Desafio-01-Introdu-o-ao-SOLID-3b9be286fac0482ca3b275473ddd2d72
