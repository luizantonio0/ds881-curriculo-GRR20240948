# Currículo Profissional

O currículo está disponível publicamente e pode ser acessado por meio do link abaixo:

https://luizantonio0.github.io/ds881-curriculo-GRR20240948/

# Execução Local com Docker

Para executar o projeto localmente, certifique-se de estar na raiz do repositório e siga os passos abaixo:

## 1. Construir a imagem Docker
docker build -t site-curriculo .
## 2. Executar o container
docker run -d -p 8080:80 site-curriculo

Após a inicialização do container, a aplicação estará disponível em:

http://localhost:8080
# Proteção da Branch main

O repositório está configurado para impedir pushes diretos na branch main. Todas as alterações devem ser realizadas por meio de Pull Requests (PRs).

Além disso, a conclusão de um merge está condicionada à aprovação das verificações automatizadas da pipeline de CI/CD, incluindo validações de lint e build. Essa estratégia contribui para a manutenção da qualidade, estabilidade e integridade das versões publicadas em produção.