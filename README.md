**React DRF Auth**

Este é um projeto que combina React, com Vite no frontend e Django REST Framework (DRF) no backend, tudo empacotado em contêineres Docker para facilitar o desenvolvimento e a implantação. Ele visa fornecer uma estrutura básica para autenticação em uma aplicação web, integrando tanto a parte de frontend quanto de backend.

### Pré-requisitos
- Docker e Docker Compose

### Instalação e Uso

1. **Clone o repositório:**
   ```
   git clone <URL_do_repositório>
   ```

2. **Navegue até o diretório do projeto:**
   ```
   cd react-drf-auth
   ```

3. **Execute o Docker Compose:**
   ```
   docker-compose up --build
   ```

4. **Acesse o frontend:**
   Abra um navegador e acesse `http://localhost:5173`

5. **Acesse a API backend:**
   A API estará disponível em `http://localhost:8000`

6. **Acesse o Swagger da API:**
   O Swagger estará disponível em `http://localhost:8000/swagger`

### Estrutura do Projeto

- **backend/**: Contém o código da API Django REST Framework.
- **frontend/**: Contém o código do projeto React com Vite.

### Docker Compose

O arquivo `docker-compose.yml` define três serviços:

- **backend**: Configurações para a execução do servidor Django.
- **frontend**: Configurações para a execução do servidor de desenvolvimento React com Vite.
- **db**: Usa uma imagem PostgreSQL para fornecer um banco de dados para o backend.

### Configuração

As variáveis de ambiente definidas no `docker-compose.yml` podem ser ajustadas conforme necessário para configurar o banco de dados PostgreSQL.

---