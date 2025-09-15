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
            "Entrée aux 24h incluse dans le coût de l'inscription",
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
            "Rondes suisse suivies d'un Top 8",
            "Maximum 64 joueurs",
            "Proxies autorisés",
            "Frais d'inscriptions de 30 CHF, entrée aux 24h du jeu incluse"
        ]

    }, mtg_legacy_prize: {
        title: "Récompenses",
        prizes: {
            "À 16 joueurs": [
                "1er: 8 Fetch lands",
                "2ème: Chrome Mox",
                "3ème et 4ème: Scalding Tarn zendikar",
                "5ème à 8ème: Un Fetch Land"
            ],
            "À 32 joueurs" :[
                "1er: 1 Plateau",
                "2ème: 1 Boseiju, Who Endures et 1 Chrome Mox",
                "3ème et 4ème: Lotus Petal from the vault",
                "5ème à 8ème: 2 Fetch Lands"
            ],
            "À 48 ou 64 joueurs": [
                "Nous sommes en train de préparer les récompenses pour ces paliers, plus d'informations plus tard"
            ],
        }
    }, mtg_night_format: {
        title: "Informations supplémentaires",
        content: [
            "Le draft se fera avec les trois éditions suivantes : Innistrad Remastered, Duskmourn et Murders at Karlov Manor",
            "Les cartes seront en anglais",
            "3 rondes suisses",
            "Prix de l'inscription de 20 CHF, entrée aux 24h du jeu non-incluse",
        ]
    }, mtg_night_prize: {
        title: "Récompenses",
        prizes: {
            "À Répartir": [
                "8 boosters issus des éditions Innistrad Remastered, duskmourn et Murder at Karlov Manor",
                "Chaque participant repart avec un de ces booster",
            ]
        }
    }

}

export type ActivityObject = {
    title?: string,
    description?: string,
    show_event?: boolean
}

export type AdditionalContent = {
    title?: string,
    content?: String[],
    prizes?: {
    }
}

export const placeHolderActivity: ActivityObject = {
    title: "Le programme est en cours de chargement",
    description: "Le programme des activités sera disponible d'ici quelques secondes, merci de ne pas recharger la page",
    show_event: true,
}
