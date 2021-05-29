# Star Wars API - DynamoDB

---

\_Pasamos los datos del endpoint /people a DynamoDB con sus atributos traducidos al español, hacemos peticiones GET, POST

## Deploy 🔧

_Antes que hacer el deploy debemos tener en consideracion algunos pasos previos_

### Pre-requisitos 📋

_Debemos tener un perfil creado en IAM dentro de la consola de AWS ahi debemos otorgar los permisos como AdministradorAccess o AmazonDynamoDBFullAccess aqui es donde obtendremos nuestro KEY y nuestra KEY-SECRET para luego configurar serverless_

_Ahora debemos configurar nuestras credenciales de aws en serverless proporcionamos el KEY y el KEY-SECRET_

```
serverless config credentials --provider aws --key 1234 --secret 5678
```

_Una vez tenemos configurado todo podemos ir a nuestro proyecto y ejecutar las siguientes lineas de codigo:_

_primero creamos una carpeta y clonamos este repositorio_

```
git clone https://github.com/jesbensevi/api-aws.git
```

```
cd api-star-wars
```

```
npm install
```

```
sls deploy
```
