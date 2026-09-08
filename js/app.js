/*=========================================================
THINKING ABOUT THINKING
Main JavaScript

Part 1
Application Setup
=========================================================*/


/*=========================================================
GLOBAL STATE
=========================================================*/

let activities = [];

let filteredActivities = [];



/*=========================================================
DOM ELEMENTS
=========================================================*/

const activityGrid =
document.getElementById("activityGrid");

const searchBox =
document.getElementById("searchBox");

const clearButton =
document.getElementById("clearButton");

const randomButton =
document.getElementById("randomButton");

const activityCount =
document.getElementById("activityCount");

const resultCount =
document.getElementById("resultCount");

const modal =
document.getElementById("activityModal");

const modalBody =
document.getElementById("modalBody");

const closeModal =
document.getElementById("closeModal");



/*=========================================================
FILTERS
=========================================================*/

const themeFilter =
document.getElementById("themeFilter");

const gradeFilter =
document.getElementById("gradeFilter");

const atlFilter =
document.getElementById("atlFilter");

const lpFilter =
document.getElementById("lpFilter");

const ctFilter =
document.getElementById("ctFilter");

const routineFilter =
document.getElementById("routineFilter");

const provocationFilter =
document.getElementById("provocationFilter");

const durationFilter =
document.getElementById("durationFilter");



/*=========================================================
INITIALISE APPLICATION
=========================================================*/

document.addEventListener("DOMContentLoaded", init);

function init(){

    if(typeof activityDatabase === "undefined"){

        console.error(
            "activities.js not loaded."
        );

        return;

    }

    activities = activityDatabase;

    filteredActivities = [...activities];

    activityCount.textContent =
    activities.length;

    populateFilters();

    renderActivities(filteredActivities);

    initialiseEvents();

}



/*=========================================================
INITIALISE EVENTS
=========================================================*/

function initialiseEvents(){

    searchBox.addEventListener(
        "input",
        applyFilters
    );

    themeFilter.addEventListener(
        "change",
        applyFilters
    );

    gradeFilter.addEventListener(
        "change",
        applyFilters
    );

    atlFilter.addEventListener(
        "change",
        applyFilters
    );

    lpFilter.addEventListener(
        "change",
        applyFilters
    );

    ctFilter.addEventListener(
        "change",
        applyFilters
    );

    routineFilter.addEventListener(
        "change",
        applyFilters
    );

    provocationFilter.addEventListener(
        "change",
        applyFilters
    );

    durationFilter.addEventListener(
        "change",
        applyFilters
    );

    clearButton.addEventListener(
        "click",
        clearAllFilters
    );

    randomButton.addEventListener(
        "click",
        showRandomActivity
    );

    closeModal.addEventListener(
        "click",
        closeActivityModal
    );

    window.addEventListener("click",function(e){

        if(e.target===modal){

            closeActivityModal();

        }

    });

}



/*=========================================================
RENDER ACTIVITY CARDS
=========================================================*/

function renderActivities(list){

    activityGrid.innerHTML="";

    resultCount.textContent =
    list.length;

    if(list.length===0){

        activityGrid.innerHTML=`

        <div class="empty-state">

            <h2>No activities found</h2>

            <p>

            Try changing your filters.

            </p>

        </div>

        `;

        return;

    }

    list.forEach(activity=>{

        const card =
        createActivityCard(activity);

        activityGrid.appendChild(card);

    });

}



/*=========================================================
CREATE ACTIVITY CARD
=========================================================*/

function createActivityCard(activity){

    const card =
    document.createElement("div");

    card.className="activity-card";

    card.innerHTML=`

        <div class="activity-header">

            <span class="activity-number">

                Activity ${activity.id}

            </span>

            <span class="duration">

                ${activity.duration}

            </span>

        </div>

        <h2>

            ${activity.title}

        </h2>

        <p class="theme">

            ${activity.theme}

        </p>

        <div class="badges">

            <span>

                ${activity.atlSkills.join(", ")}

            </span>

        </div>

        <button class="open-button">

            Open Activity

        </button>

    `;

    card
    .querySelector(".open-button")
    .addEventListener(

        "click",

        ()=>{

            openActivity(activity);

        }

    );

    return card;

}



/*=========================================================
END OF PART 1

Append Part 2 Below This Line

=========================================================*/
/*=========================================================
PART 2
Populate Filters
Filter Utilities
=========================================================*/


/*=========================================================
POPULATE ALL FILTERS
=========================================================*/

function populateFilters(){

    populateSelect(themeFilter,getUniqueValues("theme"));

    populateSelect(gradeFilter,getUniqueGrades());

    populateSelect(atlFilter,getUniqueArrayValues("atlSkills"));

    populateSelect(lpFilter,getUniqueArrayValues("learnerProfile"));

    populateSelect(ctFilter,getUniqueArrayValues("criticalThinking"));

    populateSelect(routineFilter,getUniqueValues("thinkingRoutine"));

    populateSelect(provocationFilter,getUniqueValues("provocationType"));

    populateSelect(durationFilter,getUniqueValues("duration"));

}



/*=========================================================
POPULATE A DROPDOWN
=========================================================*/

function populateSelect(select,values){

    values.forEach(value=>{

        const option=document.createElement("option");

        option.value=value;

        option.textContent=value;

        select.appendChild(option);

    });

}



/*=========================================================
GET UNIQUE VALUES

For simple text fields
=========================================================*/

function getUniqueValues(field){

    const values=

        [...new Set(

            activities

            .map(activity=>activity[field])

            .filter(Boolean)

        )];

    values.sort();

    return values;

}



/*=========================================================
GET UNIQUE ARRAY VALUES

For ATL

Learner Profile

Critical Thinking

=========================================================*/

function getUniqueArrayValues(field){

    const values=new Set();

    activities.forEach(activity=>{

        if(activity[field]){

            activity[field].forEach(item=>{

                values.add(item);

            });

        }

    });

    return [...values].sort();

}



/*=========================================================
GET UNIQUE GRADES
=========================================================*/

function getUniqueGrades(){

    const values=new Set();

    activities.forEach(activity=>{

        if(activity.grade){

            activity.grade.forEach(g=>{

                values.add(g);

            });

        }

    });

    return [...values].sort((a,b)=>a-b);

}



/*=========================================================
UTILITY

DOES ACTIVITY CONTAIN VALUE

=========================================================*/

function containsValue(array,value){

    if(!array) return false;

    return array.includes(value);

}



/*=========================================================
UTILITY

SAFE TEXT SEARCH

=========================================================*/

function containsText(text,search){

    if(!text) return false;

    return text

    .toLowerCase()

    .includes(

        search.toLowerCase()

    );

}



/*=========================================================
UTILITY

SEARCH MULTIPLE FIELDS

=========================================================*/

function matchesSearch(activity,search){

    if(search==="") return true;

    return (

        containsText(activity.title,search)

        ||

        containsText(activity.theme,search)

        ||

        containsText(activity.objective,search)

        ||

        containsText(activity.bigIdea,search)

        ||

        containsText(activity.selfAwarenessFocus,search)

        ||

        containsText(activity.thinkingRoutine,search)

        ||

        containsText(activity.provocationDescription,search)

    );

}



/*=========================================================
END OF PART 2

Append PART 3 Below This Line

=========================================================*/
