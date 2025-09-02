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
        }
    }, mtg_legacy_format: {

    }, mtg_legacy_prize: {

    }, mtg_night_format: {

    }, mtg_night_prize: {

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
