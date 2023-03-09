import { hashSync } from "bcrypt"

import Page from "../src/DAO/Page.js"
import Anime from "../src/DAO/AnimeDAO.js"
import User from "../src/DAO/User.js"

const models = [
    Page, Anime, User
]

const seed = async () => {
    models.forEach(model => model.configurar())


    const animes = []
    const database = [
        {
          "id": 1,
          "anime": "One Piece",
          "estudio": "Toei Animation",
          "diretor": "Kounosuke Uda",
          "ano_de_lancamento": "1999",
          "genero": "Ação,Aventura,Comédia"
        },
        {
          "id": 2,
          "anime": "Naruto",
          "estudio": "Studio Pierrot",
          "diretor": "Hayato Date",
          "ano_de_lancamento": "2002",
          "genero": "Ação,Aventura,Drama"
        },
        {
          "id": 3,
          "anime": "Attack on Titan",
          "estudio": "Wit Studio",
          "diretor": "Tetsuro Araki",
          "ano_de_lancamento": "2013",
          "genero": "Ação,Fantasia,Horror"
        },
        {
          "id": 4,
          "anime": "Death Note",
          "estudio": "Madhouse",
          "diretor": "Tetsuro Araki",
          "ano_de_lancamento": "2006",
          "genero": "Mistério,Suspense,Sobrenatural"
        },
        {
          "id": 5,
          "anime": "Fullmetal Alchemist",
          "estudio": "Studio Bones",
          "diretor": "Seiji Mizushima",
          "ano_de_lancamento": "2003",
          "genero": "Ação,Aventura,Fantasia"
        },
        {
          "id": 6,
          "anime": "Sailor Moon",
          "estudio": "Toei Animation",
          "diretor": "Junichi Sato",
          "ano_de_lancamento": "1992",
          "genero": "Ação,Magia,Romance"
        },
        {
          "id": 7,
          "anime": "Dragon Ball Z",
          "estudio": "Toei Animation",
          "diretor": "Daisuke Nishio",
          "ano_de_lancamento": "1989",
          "genero": "Ação,Aventura,Artes Marciais"
        },
        {
          "id": 8,
          "anime": "Bleach",
          "estudio": "Studio Pierrot",
          "diretor": "Noriyuki Abe",
          "ano_de_lancamento": "2004",
          "genero": "Ação,Aventura,Sobrenatural"
        },
        {
          "id": 9,
          "anime": "Neon Genesis Evangelion",
          "estudio": "Gainax",
          "diretor": "Hideaki Anno",
          "ano_de_lancamento": "1995",
          "genero": "Ação,Drama,Mecha"
        },
        {
          "id": 10,
          "anime": "Cowboy Bebop",
          "estudio": "Sunrise",
          "diretor": "Shinichirō Watanabe",
          "ano_de_lancamento": "1998",
          "genero": "Ação,Aventura,Ficção científica"
        },
        {
          "id": 11,
          "anime": "Code Geass",
          "estudio": "Sunrise",
          "diretor": "Gorō Taniguchi",
          "ano_de_lancamento": "2006",
          "genero": "Ação,Mecha,Drama"
        },
        {
          "id": 12,
          "anime": "Yu-Gi-Oh!",
          "estudio": "Studio Gallop",
          "diretor": "Kunihisa Sugishima",
          "ano_de_lancamento": "1998",
          "genero": "Ação,Fantasia,Jogos"
        },
        {
          "id": 13,
          "anime": "Hunter x Hunter",
          "estudio": "Madhouse",
          "diretor": "Hiroshi Kōjina",
          "ano_de_lancamento": "2011",
          "genero": "Ação,Aventura,Fantasia"
        },
        {
          "id": 14,
          "anime": "JoJo's Bizarre Adventure",
          "estudio": "David Production",
          "diretor": "Naokatsu Tsuda",
          "ano_de_lancamento": "2012",
          "genero": "Ação,Aventura,Sobrenatural"
        },
        {
          "id": 15,
          "anime": "Fairy Tail",
          "estudio": "A-1 Pictures, Satelight",
          "diretor": "Shinji Ishihira",
          "ano_de_lancamento": "2009",
          "genero": "Ação,Aventura,Fantasia"
        },
        {
          "id": 16,
          "anime": "My Hero Academia",
          "estudio": "Bones",
          "diretor": "Kenji Nagasaki",
          "ano_de_lancamento": "2016",
          "genero": "Ação,Superpoderes"
        },
        {
          "id": 17,
          "anime": "Haikyu!!",
          "estudio": "Production I.G",
          "diretor": "Susumu Mitsunaka",
          "ano_de_lancamento": "2014",
          "genero": "Esporte,Drama,Comédia"
        },
        {
          "id": 18,
          "anime": "Demon Slayer: Kimetsu no Yaiba",
          "estudio": "Ufotable",
          "diretor": "Haruo Sotozaki",
          "ano_de_lancamento": "2019",
          "genero": "Ação,Fantasia,Sobrenatural"
        },
        {
          "id": 19,
          "anime": "Sword Art Online",
          "estudio": "A-1 Pictures",
          "diretor": "Tomohiko Itō",
          "ano_de_lancamento": "2012",
          "genero": "Ação,Aventura,Fantasia"
        },
        {
          "id": 20,
          "anime": "Re:Zero - Starting Life in Another World",
          "estudio": "White Fox",
          "diretor": "Masaharu Watanabe",
          "ano_de_lancamento": "2016",
          "genero": "Ação,Aventura,Fantasia"
        },
        {
          "id": 21,
          "anime": "Yu Yu Hakusho",
          "estudio": "Pierrot",
          "diretor": "Noriyuki Abe",
          "ano_de_lancamento": "1992",
          "genero": "Ação,Aventura,Sobrenatural"
        },
        {
          "id": 22,
          "anime": "Inuyasha",
          "estudio": "Sunrise",
          "diretor": "Masashi Ikeda",
          "ano_de_lancamento": "2000",
          "genero": "Ação,Aventura,Fantasia"
        },
        {
          "id": 23,
          "anime": "Black Clover",
          "estudio": "Pierrot",
          "diretor": "Tatsuya Yoshihara",
          "ano_de_lancamento": "2017",
          "genero": "Ação,Aventura,Fantasia"
        },
        {
          "id": 24,
          "anime": "Gintama",
          "estudio": "Sunrise",
          "diretor": "Shinji Takamatsu",
          "ano_de_lancamento": "2006",
          "genero": "Ação,Comédia,Paródia"
        },
        {
          "id": 25,
          "anime": "Kuroko's Basketball",
          "estudio": "Production I.G",
          "diretor": "Shunsuke Tada",
          "ano_de_lancamento": "2012",
          "genero": "Esporte,Drama,Comédia"
        },
        {
          "id": 26,
          "anime": "Fullmetal Alchemist",
          "estudio": "Bones",
          "diretor": "Seiji Mizushima",
          "ano_de_lancamento": "2003",
          "genero": "Ação,Aventura,Fantasia"
        },
        {
          "id": 27,
          "anime": "Code Geass: Lelouch of the Rebellion",
          "estudio": "Sunrise",
          "diretor": "Gorō Taniguchi",
          "ano_de_lancamento": "2006",
          "genero": "Ação,Mecha,Drama"
        },
        {
          "id": 28,
          "anime": "Tokyo Revengers",
          "estudio": "Liden Films",
          "diretor": "Koichi Hatsumi",
          "ano_de_lancamento": "2021",
          "genero": "Ação, Drama"
        },
        {
          "id": 29,
          "anime": "Demon Slayer: Kimetsu no Yaiba",
          "estudio": "ufotable",
          "diretor": "Haruo Sotozaki",
          "ano_de_lancamento": "2019",
          "genero": "Ação, Drama, Fantasia"
        },
        {
          "id": 30,
          "anime": "Jujutsu Kaisen",
          "estudio": "MAPPA",
          "diretor": "Sunghoo Park",
          "ano_de_lancamento": "2020",
          "genero": "Ação, Sobrenatural"
        },
        {
          "id": 31,
          "anime": "My Next Life as a Villainess: All Routes Lead to Doom!",
          "estudio": "Silver Link",
          "diretor": "Keisuke Inoue",
          "ano_de_lancamento": "2020",
          "genero": "Comédia, Romance"
        },
        {
          "id": 32,
          "anime": "The Promised Neverland",
          "estudio": "CloverWorks",
          "diretor": "Mamoru Kanbe",
          "ano_de_lancamento": "2019",
          "genero": "Mistério, Suspense, Drama"
        },
        {
          "id": 33,
          "anime": "A Silent Voice",
          "estudio": "Kyoto Animation",
          "diretor": "Naoko Yamada",
          "ano_de_lancamento": "2016",
          "genero": "Drama, Romance"
        },
        {
          "id": 34,
          "anime": "Your Lie in April",
          "estudio": "A-1 Pictures",
          "diretor": "Kyōhei Ishiguro",
          "ano_de_lancamento": "2014",
          "genero": "Drama, Romance, Música"
        },
        {
          "id": 35,
          "anime": "One-Punch Man",
          "estudio": "Madhouse",
          "diretor": "Shingo Natsume",
          "ano_de_lancamento": "2015",
          "genero": "Ação, Comédia, Superpoderes"
        },
        {
          "id": 36,
          "anime": "Steins;Gate",
          "estudio": "White Fox",
          "diretor": "Hiroshi Hamasaki, Takuya Satō",
          "ano_de_lancamento": "2011",
          "genero": "Ficção científica, Thriller"
        },
        {
          "id": 37,
          "anime": "Great Pretender",
          "estudio": "Wit Studio",
          "diretor": "Hiro Kaburagi",
          "ano_de_lancamento": "2020",
          "genero": "Comédia, Crime, Drama"
        },
        {
          "id": 38,
          "anime": "Gintama",
          "estudio": "Sunrise",
          "diretor": "Shinji Takamatsu",
          "ano_de_lancamento": "2006",
          "genero": "Comédia, Ação"
        }
      ]

    for (let i = 0; i < database.length; i++) {
        const prod = new Anime()
        prod.title = database[i].titulo
        prod.description = database[i].descricao
        animes.push(prod)
    }

    const admin = new User()
    admin.email = "admin@case2.com"
    admin.encryptedPassword = hashSync('12345678', 10)
    const users = [admin]

    await Page._seed(pages)
    await Anime._seed(animes)
    await User._seed(users)
}

seed()