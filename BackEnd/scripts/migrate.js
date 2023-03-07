import Page from "../src/DAO/Page.js"
import Anime from "../src/DAO/Anime.js"
import User from "../src/DAO/User.js"

const migrate = async () => {
    await Page._migrate([
        '"ID" INTEGER PRIMARY KEY NOT NULL',
        '"TITLE" TEXT NOT NULL',
        '"TEXT" TEXT NOT NULL'
    ])
    await Anime._migrate([
        '"ID" INTEGER PRIMARY KEY NOT NULL',
        '"ANIME" TEXT NOT NULL',
        '"ESTUDIO" TEXT NOT NULL',
        '"DIRETOR" TEXT NOT NULL',
        '"ANO_DE_LANCAMENTO" TEXT NOT NULL',
        '"GENERO" TEXT NOT NULL'
    ])
    await User._migrate([
        '"ID" INTEGER PRIMARY KEY NOT NULL',
        '"EMAIL" TEXT NOT NULL',
        '"ENCRYPTED_PASSWORD" TEXT NOT NULL',
        '"AUTH_TOKEN" TEXT'
    ])
}

migrate()