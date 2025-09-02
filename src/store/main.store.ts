import { defineStore } from 'pinia'
import { ref, type Ref } from 'vue';
import { EXTRAINFOS, PAGES, type ActivityObject, type AdditionalContent, type AllowedKeys } from '../utils/config';

const scriptUrl = 'https://script.google.com/macros/s/AKfycbzeX6JzaymaT_ApdxDNRO7BCpX2JUkofyQQH-cyR4MdsnSOK27__fB37YZC2P-YVQeytw/exec?'
async function fetchActivities(param: String) {
    const promise = await fetch(scriptUrl + param, {method: 'GET', redirect: 'follow', headers: {origin: '24h.abordajeux.ch'}})
            .then(response => {return response.json()})
            .catch(responseJson => {
                console.log("Could not get response from url:", responseJson);
                return {values: ["shifted"]};
            })
        return promise
    }

export const useMainStore = defineStore('main', () => {
    // state
    const page = ref("home")
    const volunteer = ref(false)
    const isLoading = ref(true)
    const activities = ref([])
    const rpgs = ref([])
    const tournamentExtraInfo: Ref<AdditionalContent>= ref({})

    function setTournamentInfo(identifier: AllowedKeys | null) {
        if (!identifier){
            tournamentExtraInfo.value = {}
        }
        else {
            tournamentExtraInfo.value = EXTRAINFOS[identifier]
        }
    }

    function changePage(newPage: string) {
        if (PAGES.includes(newPage) && page.value !== newPage) {
            page.value = newPage
        }
        if (page.value === 'events' || page.value === 'rpg') {
            refreshactivities(page.value)
        }
    }

    function becomeVolunteer() {
        volunteer.value = true
    }

    async function refreshactivities(page: string) {
        fetchActivities(page).then((value) => {
            if (page === 'events') {
                activities.value = value}
            else if (page === 'rpg') {
                rpgs.value = value
            }
        })


    }

    async function initActivities() {
        await fetchActivities('events').then((value) => activities.value = value)
        await fetchActivities('rpg').then((value) => rpgs.value = value)
        isLoading.value = false
    }

    function getActivities(): ActivityObject[] {
        if (page.value === 'events') {
            return activities.value
        }
        else if ( page.value === 'rpg')
             {
                return rpgs.value
            }
        return []
        }



    return {
        page,
        isLoading,
        volunteer,
        tournamentExtraInfo,
        getActivities,
        initActivities,
        changePage,
        becomeVolunteer,
        setTournamentInfo,
    }

})
