import { defineStore } from 'pinia'
import { ref } from 'vue';
/*

TODO CHOISIR : loading on startup et charger une fois le JSON, ou recharger le JSON à chaque fois




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
    const volunteer = ref(false)
    const isLoading = ref(true)
    const events = ref([])
    const rpgs = ref([])
    
    function changePage(newPage: string) {
        if (PAGES.includes(newPage) && page.value !== newPage) {
            page.value = newPage
        }
        if (page.value === 'events' || page.value === 'rpg') {
            refreshEvents(page.value)
        }
    }

    function becomeVolunteer() {
        volunteer.value = true
    }

    async function refreshEvents(page: string) {
        fetchEvents(page).then((value) => {
            if (page === 'events') {
                events.value = value}
            else if (page === 'rpg') {
                rpgs.value = value
            }    
        })
        

    }

    async function initEvents() {
        await fetchEvents('events').then((value) => events.value = value)
        await fetchEvents('rpg').then((value) => rpgs.value = value)
        isLoading.value = false
    }

    function getEvents() {
        if (page.value === 'events') {
            return events.value
        }
        else if ( page.value === 'rpg')
             {
                return rpgs.value
            }
        return []
        }
    return {
        PAGES,
        page,
        isLoading,
        volunteer,
        getEvents,
        initEvents,
        changePage,
        becomeVolunteer,
    }

})
