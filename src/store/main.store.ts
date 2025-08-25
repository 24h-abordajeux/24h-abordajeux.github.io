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

const scriptUrl = 'https://script.google.com/macros/s/AKfycbzeX6JzaymaT_ApdxDNRO7BCpX2JUkofyQQH-cyR4MdsnSOK27__fB37YZC2P-YVQeytw/exec?'
async function fetchEvents(param: String) {
    const promise = await fetch(scriptUrl + param, {method: 'GET', redirect: 'follow', headers: {origin: '24h.abordajeux.ch'}})
            .then(response => {return response.json()})
            .catch(responseJson => {
                console.log("Could not get response from url:", responseJson);
                return {values: ["shifted"]};
            }) 
        return promise
    }

export const useMainStore = defineStore('main', () => {


    const PAGES = ["home", "events", "rpg", "info", "volunteer"]
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

    const events = ref([])
    const isLoading = ref(false)
    async function getEvents() {
        isLoading.value = true
        await fetchEvents(page.value).then((value) => events.value = value)
        isLoading.value = false
    }

    return {
        PAGES,
        page,
        isLoading,
        volunteer,
        events,
        changePage,
        getEvents,
        becomeVolunteer,
    }

})
