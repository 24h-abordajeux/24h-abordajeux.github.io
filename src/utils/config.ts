export const PAGES = ["home", "events", "rpg", "info", "volunteer"]

export type AllowedKeys = 'one_piece_format' | 'one_piece_prize' | 'mtg_legacy_format' | 'mtg_legacy_prize' | 'mtg_night_format' | 'mtg_night_prize'

export const EXTRAINFOS = {
    one_piece_format: {
        title: "Format du tournoi",
        content: [
            "Ronde suisse suivie d'un Top Cut avec les 8 meilleurs joueurs",
            "Maximum 64 joueurs",
            "Chaque participant reçoit 3 boosters PRB02 et 1 booster promo",
            "Les 8 meilleurs joueurs repartiront avec des récompenses supplémentaires !",
        ],
    },
    one_piece_prize: {
        title: "Récompenses",
        prizes: {
            "Dès 24 Participants": [
                "1er: 1 Display PRB02",
                "2ème: 1 Display PRB02",
            ],
            "Dès 48 Participants": [
                "1er: 3 Displays PRB02",
                "2ème: 1 Display PRB02",
            ],
            "Dès 64 Participants": [
                "1er: 3 Display PRB02",
                "2ème: 2 Display PRB02",
            ],
            "Top 3 à 8": [
                "Partage de boosters supplémentaires selon le nombre de participants."
            ],
            "Chaque participant":["3 boosters PRB02 et 1 booster promo."],
        }
    }, mtg_legacy_format: {
        title: "Informations supplémentaires",
        content: [
            "Le tournoi est un legacy SUL Regional",
            "REL: Competitive et decklist requise",
            "Ronde suisse suivie d'un Top 8",
            "Maximum 64 joueurs",
            "Proxies autorisés",
            "Frais d'inscriptions de 30 CHF, entrée aux 24h du jeu incluse"
        ]

    }, mtg_legacy_prize: {
        title: "Récompenses",
        prizes: {
            "32 joueurs ou moins": [
                "1er: Un truc",
                "2eme: Un autre truc",
                "3-4: c'est pas mal ça",
                "5-8: un peu moins bien",
                "9-12: c'est le geste qui compte",
            ],
            "48 joueurs": [
                "Chaque entrée, c'est du budget pour des prix en plus :3"
            ],
            "64 joueurs": [
                "ça se voit que c'est pas encore défini ?"
            ]
        }
    }, mtg_night_format: {
        title: "Informations supplémentaires",
        content: [
            "Le draft se fera avec les trois éditions suivantes : Innistrad Remastered, Duskmourne et Murders at Karlov's manor",
            "Les cartes seront en anglais",
            "3 rondes suisses",
            "Prix de l'inscription de 20 CHF, entrée aux 24h du jeu non-incluse"
        ]
    }, mtg_night_prize: {
        title: "Récompenses",
        prizes: {
            "À Répartir": [
                "3 boosters Innistrad Remastered, 3 boosters duskmourne, 2 boosters Murder at Karlov's Manor",
                "Chaque participant repart avec un de ces booster",
                "Pick order des boosters selon le classement du draft"
            ]
        }
    }

}

export type ActivityObject = {
    title?: string,
    description?: string,
    show_event?: string
}

export type AdditionalContent = {
    title?: string,
    content?: String[],
    prizes?: {
    }
}
