<h1 align="center">
    <img alt="locacao-equipamentos" title="locacao-equipamentos" src=".github/lc.png" width="450px" />
</h1>

## 💻 Project

Esse projeto é uma locação de equipamentos, aqui os produtos são divulgados na página web. Já na aplicação
mobile, o usuário pode adquirir esses produtos.


## Tecnologias

<p align="left">
<code><img height="30" src="https://cdn2.iconfinder.com/data/icons/nodejs-1/256/nodejs-256.png"></code>
<code><img height="30" src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-256.png"></code>
<code><img height="30" src="https://blog.kakaocdn.net/dn/boEOmm/btqvGB4mL53/kNRQ8zVot3RJfeahOFFrdK/img.png"></code>
<code><img height="30" src="https://cdn.changelog.com/uploads/icons/topics/YXL/icon_large.png?v=63682389432"></code>
<code><img height="30" src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/275351/31c25858-5327-5d80-dd29-2aae50ad94dc.png"></code>
</p>

## Como usar

Para clonar e executar este aplicativo, você precisará do [Git](https://git-scm.com), [Node.js][nodejs] + [Yarn][yarn] instalado no seu computador.

Na linha de comando:

### Install API 

```bash
# Clone este repositório
$ git clone https://github.com/mardesonLemos/locacaoDeEquipamentos

# Vá para o repositório
$ cd locacaoDeEquipamentos/backend

# Instale dependências
$ yarn install

# Run Migrates
$ yarn knex:migrate

# Run Seeds
$ yarn knex:seed

# Start server
$ yarn dev

# executando na porta 3333
```

### Install Front-end

```bash
# Clone este repositório
$ git clone https://github.com/mardesonLemos/locacaoDeEquipamentos

# Vá para o repositório
$ cd locacaoDeEquipamentos/frontent

# Instale dependências
$ yarn install

# execute
$ yarn start

# rodando na porta 3000
```

### Install Mobile

```bash
# Clone este repositório
$ git clone https://github.com/mardesonLemos/locacaoDeEquipamentos

# Vá para o repositório
$ cd locacaoDeEquipamentos/mobile

# Instale dependências
$ yarn install

# execute
$ yarn start

# A Expo abrirá, basta escanear o QRcode no terminal ou na página da Expo

# Se houver algum problema com as fontes, execute:
$ expo install expo-font @expo-google-fonts/ubuntu @expo-google-fonts/roboto

```

