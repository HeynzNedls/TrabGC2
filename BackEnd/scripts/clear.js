import Page from "../src/DAO/Page.js"
import Anime from "../src/DAO/AnimeDAO.js"
import User from "../src/DAO/User.js"

const models = [
    Page, Anime, User
]

const clear = async () => {
    await Promise.all(models.map(model => model._clear()))
}

clear()