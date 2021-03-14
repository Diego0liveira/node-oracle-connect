# node-oracle-connect

<h1>Configurações de conexão do Banco de dados Oracle em uma aplicação Node.js</h1>

<ol>
<li><h3>Fazer o dowload do instantcliente de acordo com o SO e versão do Oracle através da segunite URL:</h3></li>
https://www.oracle.com/br/database/technologies/instant-client/downloads.html

<b>OBS:</b> Precisam ser feitos os dowloads dos pacotes BASIC e SDK e extrair ambos em um diretório do tipo: "C:\oracle\instantclient"

<li><h3>Criar as seguintes variáveis de ambiente:</h3>

- [x] OCI_INC_DIR=C:\oracle\instantclient\sdk\include

- [x] OCI_LIB_DIR=C:\oracle\instantclient\sdk\lib\msvc

- [x] incluir na variável path: C:\Oracle\instantclient\

<b>OBS:</b> Se possui alguma declaração no path referente ao oracle essa nossa configuração precisa estar antes.

<li><h3>executar os seguintes comandos no terminal do VSCode aberto na raiz do projeto:</h3></li>

- [x] export OCI_INC_DIR="caminho declarado na variavel de ambiente"
echo $OCI_INC_DIR

- [x] export OCI_LIB_DIR="caminho declarado na variavel de ambiente"
echo $OCI_LIB_DIR

- [x] export LD_LIBRARY_PATH="caminha da raiz instantcliente"
echo $LD_LIBRARY_PATH

<li><h3>executar o comando npm install ou yarn add</h3></li>

<b>OBS:</b> A instalação dos pacotes referentes ao oracledb somente devem ser feitas após a execução de todos os processos descritos acima.
</ol>
