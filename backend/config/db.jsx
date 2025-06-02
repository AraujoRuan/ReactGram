const mongoose = require("mongoose");
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;

const conn = async () => {
    try {
        await mongoose.connect(
            `mongodb+srv://${dbUser}:${dbPassword}@cluster0.jni1zxh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            }
        );

        console.log("Conectou ao banco!");
        
        return mongoose.connection;
    } catch (error) {
        console.log(error);
        throw error; // É importante propagar o erro para quem chamar a função
    }
};

// Não chame conn() aqui se você está exportando a função
// Em vez disso, chame onde você realmente precisa da conexão

module.exports = conn;