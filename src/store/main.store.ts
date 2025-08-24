import { defineStore } from 'pinia'
import { ref } from 'vue';

// IDEA : keep scroll position so we can return to it.
/*
tournoi échecs et animation échecs / jass / mind bug / magic / one piece
	- inscriptions à l'avance
succès
jeux de rôles:
	- besoin des scénarios
	- inscriptions pour JDR

échecs:
jass :
mind bug:
magic:
One piece:
JDR:


bénévoles sur le site







*/
export const useMainStore = defineStore('main', () => {


    const PAGES = ["home", "program", "rpg", "info", "volunteer"]
    // state
    const page = ref("home")
    function changePage(newPage: string) {
        if (PAGES.includes(newPage) && page.value !== newPage) {
            page.value = newPage
        }
    }
    const volunteer = ref(false)
    function becomeVolunteer() {
        volunteer.value = true
    }

    return {
        PAGES,
        page,
        volunteer,
        changePage,
        becomeVolunteer,
    }

})
