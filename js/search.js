/*=========================================================
THINKING ABOUT THINKING

SEARCH ENGINE

Version 1.0

=========================================================*/


let filteredActivities = [];



/*=========================================================
INITIALISE SEARCH

=========================================================*/

function initialiseSearch(){

    filteredActivities = [...activityDatabase];

    populateFilters();

    attachSearchEvents();

    renderActivities(filteredActivities);

}



/*=========================================================
POPULATE FILTERS

=========================================================*/

function populateFilters(){

    populateSelect("filterATL", config.atlSkills);

    populateSelect("filterLP", config.learnerProfiles);

    populateSelect("filterCT", config.criticalThinking);

    populateSelect("filterTheme", config.themes);

    populateSelect("filterRoutine", config.thinkingRoutines);

    populateSelect("filterProvocation", config.provocationTypes);

}



/*=========================================================
POPULATE SELECT

=========================================================*/

function populateSelect(id, values){

    const select = document.getElementById(id);

    if(!select) return;

    values.forEach(value=>{

        const option=document.createElement("option");

        option.value=value;

        option.textContent=value;

        select.appendChild(option);

    });

}



/*=========================================================
EVENT LISTENERS

=========================================================*/

function attachSearchEvents(){

    document
    .getElementById("searchBox")
    .addEventListener(
        "input",
        filterActivities
    );



    document
    .querySelectorAll(".search-filter")
    .forEach(filter=>{

        filter.addEventListener(
            "change",
            filterActivities
        );

    });

}



/*=========================================================
END PART 1

=========================================================*/
/*=========================================================
PART 2

FILTER ENGINE

=========================================================*/

function filterActivities(){

    const searchText=

    document
    .getElementById("searchBox")
    .value
    .toLowerCase()
    .trim();



    const atl=

    document
    .getElementById("filterATL")
    .value;



    const lp=

    document
    .getElementById("filterLP")
    .value;



    const ct=

    document
    .getElementById("filterCT")
    .value;



    const theme=

    document
    .getElementById("filterTheme")
    .value;



    const routine=

    document
    .getElementById("filterRoutine")
    .value;



    const provocation=

    document
    .getElementById("filterProvocation")
    .value;



    filteredActivities=

    activityDatabase.filter(activity=>{



        const matchesSearch=

            searchMatches(

                activity,

                searchText

            );



        const matchesATL=

            atl===""

            ||

            activity.atlSkills.includes(atl);



        const matchesLP=

            lp===""

            ||

            activity.learnerProfile.includes(lp);



        const matchesCT=

            ct===""

            ||

            activity.criticalThinking.includes(ct);



        const matchesTheme=

            theme===""

            ||

            activity.theme===theme;



        const matchesRoutine=

            routine===""

            ||

            activity.thinkingRoutine===routine;



        const matchesProvocation=

            provocation===""

            ||

            activity.provocationType===provocation;



        return

            matchesSearch

            &&

            matchesATL

            &&

            matchesLP

            &&

            matchesCT

            &&

            matchesTheme

            &&

            matchesRoutine

            &&

            matchesProvocation;

    });



    renderActivities(filteredActivities);

    updateResultCount();

}





/*=========================================================
TEXT SEARCH

=========================================================*/

function searchMatches(

    activity,

    searchText

){

    if(searchText==="")

        return true;



    const searchable=[

        activity.title,

        activity.theme,

        activity.objective,

        activity.bigIdea,

        activity.selfAwarenessFocus,

        activity.worksheetOutline,

        activity.teacherPreparation,

        activity.studentInstructions,

        activity.thinkingRoutine,

        activity.assessment,

        activity.reflectionQuestion,

        activity.extension,

        ...(activity.tags||[]),

        ...(activity.atlSkills||[]),

        ...(activity.learnerProfile||[]),

        ...(activity.criticalThinking||[])

    ]

    .join(" ")

    .toLowerCase();



    return searchable.includes(searchText);

}





/*=========================================================
RESULT COUNT

=========================================================*/

function updateResultCount(){

    const counter=

    document.getElementById("resultCount");



    if(!counter)

        return;



    counter.textContent=

        filteredActivities.length+

        " activities found";

}





/*=========================================================
END PART 2

=========================================================*/
/*=========================================================
PART 3

UTILITIES
SORTING
CLEAR FILTERS
RANDOM ACTIVITY
EXPORT
INITIALISE

=========================================================*/


/*=========================================================
CLEAR FILTERS

=========================================================*/

function clearFilters(){

    document.getElementById("searchBox").value="";

    document.getElementById("filterATL").value="";

    document.getElementById("filterLP").value="";

    document.getElementById("filterCT").value="";

    document.getElementById("filterTheme").value="";

    document.getElementById("filterRoutine").value="";

    document.getElementById("filterProvocation").value="";

    filteredActivities=[...activityDatabase];

    renderActivities(filteredActivities);

    updateResultCount();

}



/*=========================================================
SORTING

=========================================================*/

function sortActivities(type){

    switch(type){

        case "title":

            filteredActivities.sort((a,b)=>

                a.title.localeCompare(b.title)

            );

            break;



        case "duration":

            filteredActivities.sort((a,b)=>

                parseInt(a.duration)-

                parseInt(b.duration)

            );

            break;



        case "grade":

            filteredActivities.sort((a,b)=>

                a.grade[0]-b.grade[0]

            );

            break;

    }

    renderActivities(filteredActivities);

}



/*=========================================================
RANDOM FROM CURRENT FILTER

=========================================================*/

function randomFilteredActivity(){

    if(filteredActivities.length===0){

        alert("No activities match your filters.");

        return;

    }

    const random=

    filteredActivities[

        Math.floor(

            Math.random()*

            filteredActivities.length

        )

    ];

    openActivity(random);

}



/*=========================================================
EXPORT FILTERED LIST

=========================================================*/

function exportFilteredActivities(){

    let text="";

    filteredActivities.forEach(activity=>{

        text+=

        activity.id+

        ". "+

        activity.title+

        "\n";

    });



    const blob=

    new Blob(

        [text],

        {

            type:"text/plain"

        }

    );



    const link=

    document.createElement("a");



    link.href=

    URL.createObjectURL(blob);



    link.download=

    "ThinkingActivities.txt";



    link.click();

}



/*=========================================================
HELPERS

=========================================================*/

function activityByID(id){

    return activityDatabase.find(

        activity=>activity.id===id

    );

}



function totalActivities(){

    return activityDatabase.length;

}



function totalFilteredActivities(){

    return filteredActivities.length;

}



/*=========================================================
INITIALISE

=========================================================*/

window.addEventListener(

    "load",

    ()=>{

        initialiseSearch();

        updateResultCount();

    }

);



/*=========================================================
END SEARCH.JS

=========================================================*/
