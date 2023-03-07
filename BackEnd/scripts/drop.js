import Page from "../src/DAO/Page.js"
import Anime from "../src/DAO/Anime.js"
import User from "../src/DAO/User.js"

const models = [
    Page, Anime, User
]

const drop = async () => {
    await Promise.all(models.map(model => model._drop()))
}

drop()