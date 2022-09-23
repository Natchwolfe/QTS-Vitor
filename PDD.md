Gherkin – Park Manager

Funcionalidade: Login
Como funcionario cadastrado no sistema
x quer entrar no sistema
para que ele usufrua do sistema

Contexto: x possui uma conta no sistema

Cenário: Valido
Dado que x tenha uma conta
E ele preenche as credenciais válidas
Quando ele aciona a opção de login
Então ele deve ser redirecionado para a página Home

Cenário: Inválido
Dado que x não tenha uma conta
E ele erra as credenciais
Quando ele aciona a opção de login
Então ele é orientado a contatar a empresa

Funcionalidade: Registro de carro
Como um funcionário credenciado
x quer cadastrar um carro
Para registrar seu ganho

Contexto: x irá usar o recurso de estacionar do sistema

Cenário: Registro com sucesso
Dado que x quer registrar um carro
E ele acessa a página de estacionar
E ele preenche as informações requeridas
Quando ele aciona o botão de registro
Então o carro será registrado na vaga

Cenário: registro não sucedido
Dado que x quer registrar um carro
E ele acessa a página de estacionar
E ele não preenche as informações requeridas
Quando x acionar o botão de registro
Então o carro não será registrado e x será guiado a fornecer as informações

Funcionalidade:  Pagamento
x quer realizar um pagamento
para retirar o carro

Contexto: x irá usar o recurso de pagar do sistema

Cenário: Pagamento efetuado
Dado que x esteja na página de pagamento
E ele aciona a ação de pagar
E ele adiciona as informações de cobrança
E ele dá as credenciais de pagamento requerido
E ele aciona a função pagar
Então x será redirecionado para a tabela de estacionados 
E o registro apresentará a função excluir

Cenário: falha no pagamento
Dado que x esteja na página de pagamento
E ele aciona a ação de pagar
E ele adiciona as informações de cobrança
E ele não dá as credenciais de pagamento requeridos
E ele aciona a função pagar
Então o sistema mostrará uma mensagem de erro de credenciais

Funcionalidade: Retirar o carro da tabela de estacionados

Contexto: o carro estacionado liberou a vaga

Cenário: remoção do carro
Dado que x esteja na página de estacionar
E ele aciona a função de excluir 
Então o registro do carro é apagado

Cenário: erro da remoção
Dado que x esteja na página de estacionar
E ele não acionou anteriormente a função pagar
Então x será redirecionado para a página de pagamento

Funcionalidade: Cadastro de mensalista

Contexto: x quer registrar um mensalista

Cenário: registro feito
Dado que x está na página de registro de mensalistas
E ele preenche as informações requeridas
E ele aciona a função de registro
Então o mensalista será registrado

Cenário: erro no registro
Dado que x está na página de registro de mensalistas
E ele preenche as informações incompletas
E ele aciona a função de registro
Então x será guiado para preencher as informações completas
