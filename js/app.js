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
/*=========================================================
PART 3
Filtering Engine
=========================================================*/


/*=========================================================
APPLY FILTERS
=========================================================*/

function applyFilters(){

    const search =
        searchBox.value.trim().toLowerCase();

    const selectedTheme =
        themeFilter.value;

    const selectedGrade =
        gradeFilter.value;

    const selectedATL =
        atlFilter.value;

    const selectedLP =
        lpFilter.value;

    const selectedCT =
        ctFilter.value;

    const selectedRoutine =
        routineFilter.value;

    const selectedProvocation =
        provocationFilter.value;

    const selectedDuration =
        durationFilter.value;


    filteredActivities = activities.filter(activity=>{

        /*---------------------------------------
        SEARCH
        ---------------------------------------*/

        if(search !== ""){

            if(!matchesSearch(activity,search)){

                return false;

            }

        }

        /*---------------------------------------
        THEME
        ---------------------------------------*/

        if(selectedTheme !== ""){

            if(activity.theme !== selectedTheme){

                return false;

            }

        }

        /*---------------------------------------
        GRADE
        ---------------------------------------*/

        if(selectedGrade !== ""){

            if(!activity.grade.includes(Number(selectedGrade))){

                return false;

            }

        }

        /*---------------------------------------
        ATL
        ---------------------------------------*/

        if(selectedATL !== ""){

            if(!activity.atlSkills.includes(selectedATL)){

                return false;

            }

        }

        /*---------------------------------------
        LEARNER PROFILE
        ---------------------------------------*/

        if(selectedLP !== ""){

            if(!activity.learnerProfile.includes(selectedLP)){

                return false;

            }

        }

        /*---------------------------------------
        CRITICAL THINKING
        ---------------------------------------*/

        if(selectedCT !== ""){

            if(!activity.criticalThinking.includes(selectedCT)){

                return false;

            }

        }

        /*---------------------------------------
        THINKING ROUTINE
        ---------------------------------------*/

        if(selectedRoutine !== ""){

            if(activity.thinkingRoutine !== selectedRoutine){

                return false;

            }

        }

        /*---------------------------------------
        PROVOCATION
        ---------------------------------------*/

        if(selectedProvocation !== ""){

            if(activity.provocationType !== selectedProvocation){

                return false;

            }

        }

        /*---------------------------------------
        DURATION
        ---------------------------------------*/

        if(selectedDuration !== ""){

            if(activity.duration !== selectedDuration){

                return false;

            }

        }

        return true;

    });

    renderActivities(filteredActivities);

}



/*=========================================================
CLEAR ALL FILTERS
=========================================================*/

function clearAllFilters(){

    searchBox.value="";

    themeFilter.selectedIndex=0;

    gradeFilter.selectedIndex=0;

    atlFilter.selectedIndex=0;

    lpFilter.selectedIndex=0;

    ctFilter.selectedIndex=0;

    routineFilter.selectedIndex=0;

    provocationFilter.selectedIndex=0;

    durationFilter.selectedIndex=0;

    filteredActivities=[...activities];

    renderActivities(filteredActivities);

}



/*=========================================================
LIVE SEARCH

(Optional alias)

=========================================================*/

function searchActivities(){

    applyFilters();

}



/*=========================================================
UPDATE RESULT COUNTER

=========================================================*/

function updateCounters(){

    resultCount.textContent = filteredActivities.length;

}



/*=========================================================
OVERRIDE RENDER

Update counters automatically

=========================================================*/

const originalRender = renderActivities;

renderActivities = function(list){

    originalRender(list);

    updateCounters();

};



/*=========================================================
END OF PART 3

Append PART 4 Below This Line

=========================================================*/
/*=========================================================
PART 4
Activity Modal
=========================================================*/


/*=========================================================
OPEN ACTIVITY
=========================================================*/

function openActivity(activity){

    modal.style.display="block";

    document.body.style.overflow="hidden";

    modalBody.innerHTML=createActivityHTML(activity);

}



/*=========================================================
CLOSE MODAL
=========================================================*/

function closeActivityModal(){

    modal.style.display="none";

    document.body.style.overflow="auto";

}



/*=========================================================
ESC KEY CLOSE
=========================================================*/

document.addEventListener("keydown",function(event){

    if(event.key==="Escape"){

        closeActivityModal();

    }

});



/*=========================================================
CREATE MODAL HTML
=========================================================*/

function createActivityHTML(activity){

return `

<div class="activity-detail">

<div class="detail-header">

<h1>

Activity ${activity.id}

</h1>

<h2>

${activity.title}

</h2>

<p class="detail-theme">

${activity.theme}

</p>

</div>


<div class="detail-grid">


<section>

<h3>

🎯 Objective

</h3>

<p>

${activity.objective}

</p>

</section>


<section>

<h3>

💡 Big Idea

</h3>

<p>

${activity.bigIdea}

</p>

</section>


<section>

<h3>

⏱ Duration

</h3>

<p>

${activity.duration}

</p>

</section>


<section>

<h3>

👥 Grades

</h3>

<p>

${activity.grade.join(", ")}

</p>

</section>


<section>

<h3>

🧠 Theme

</h3>

<p>

${activity.theme}

</p>

</section>


<section>

<h3>

🎥 Provocation

</h3>

<strong>

${activity.provocationType}

</strong>

<p>

${activity.provocationDescription}

</p>

</section>


<section>

<h3>

📝 Teacher Preparation

</h3>

<p>

${activity.teacherPreparation}

</p>

</section>


<section>

<h3>

📄 Worksheet Outline

</h3>

<p>

${activity.worksheetOutline}

</p>

</section>


<section>

<h3>

👩‍🏫 Student Instructions

</h3>

<p>

${activity.studentInstructions}

</p>

</section>


<section>

<h3>

🧩 Thinking Progression

</h3>

<p>

${activity.thinkingProgression}

</p>

</section>


<section>

<h3>

🪞 Self Awareness Focus

</h3>

<p>

${activity.selfAwarenessFocus}

</p>

</section>


<section>

<h3>

🎓 Assessment Evidence

</h3>

<p>

${activity.assessment}

</p>

</section>


<section>

<h3>

💬 Reflection Question

</h3>

<p>

${activity.reflectionQuestion}

</p>

</section>


<section>

<h3>

🚀 Extension

</h3>

<p>

${activity.extension}

</p>

</section>

</div>



<div class="badge-area">

${buildBadges(activity)}

</div>



<div class="modal-buttons">

<button onclick="window.print()">

🖨 Print

</button>

<button onclick="copyActivity(${activity.id})">

📋 Copy

</button>

<button onclick="closeActivityModal()">

Close

</button>

</div>


</div>

`;

}



/*=========================================================
BUILD BADGES
=========================================================*/

function buildBadges(activity){

let html="";


activity.atlSkills.forEach(item=>{

html+=`

<span class="badge atl">

${item}

</span>

`;

});


activity.learnerProfile.forEach(item=>{

html+=`

<span class="badge lp">

${item}

</span>

`;

});


activity.criticalThinking.forEach(item=>{

html+=`

<span class="badge ct">

${item}

</span>

`;

});


return html;

}



/*=========================================================
COPY ACTIVITY
=========================================================*/

function copyActivity(id){

const activity=

activities.find(a=>a.id===id);

if(!activity) return;

const text=`

Activity ${activity.id}

${activity.title}

Theme:
${activity.theme}

Objective:
${activity.objective}

Reflection:
${activity.reflectionQuestion}

`;

navigator.clipboard.writeText(text);

alert("Activity copied.");

}



/*=========================================================
END OF PART 4

Append PART 5 Below This Line

=========================================================*/
/*=========================================================
PART 5
Advanced Features
=========================================================*/


/*=========================================================
RANDOM ACTIVITY
=========================================================*/

function showRandomActivity(){

    if(activities.length===0) return;

    const randomIndex=Math.floor(
        Math.random()*activities.length
    );

    openActivity(
        activities[randomIndex]
    );

}



/*=========================================================
LOCAL STORAGE
=========================================================*/

function getFavorites(){

    const data=localStorage.getItem("favorites");

    if(!data) return [];

    return JSON.parse(data);

}


function saveFavorites(list){

    localStorage.setItem(
        "favorites",
        JSON.stringify(list)
    );

}


function isFavorite(id){

    return getFavorites().includes(id);

}


function toggleFavorite(id){

    let favorites=getFavorites();

    if(favorites.includes(id)){

        favorites=favorites.filter(
            item=>item!==id
        );

    }else{

        favorites.push(id);

    }

    saveFavorites(favorites);

}



/*=========================================================
OPEN ACTIVITY FROM URL

Example

index.html?activity=17

=========================================================*/

function checkURLActivity(){

    const params=
    new URLSearchParams(
        window.location.search
    );

    const activityID=params.get("activity");

    if(!activityID) return;

    const activity=

    activities.find(

        a=>a.id==activityID

    );

    if(activity){

        openActivity(activity);

    }

}



/*=========================================================
COPY SHARE LINK
=========================================================*/

function copyShareLink(activityID){

    const url=

    window.location.origin+

    window.location.pathname+

    "?activity="+activityID;

    navigator.clipboard.writeText(url);

    alert("Share link copied.");

}



/*=========================================================
UPDATE URL
=========================================================*/

function updateURL(activityID){

    const url=

    window.location.pathname+

    "?activity="+activityID;

    history.replaceState(

        {},

        "",

        url

    );

}



/*=========================================================
CLEAR URL
=========================================================*/

function clearURL(){

    history.replaceState(

        {},

        "",

        window.location.pathname

    );

}



/*=========================================================
OVERRIDE OPEN ACTIVITY

Adds URL support

=========================================================*/

const originalOpenActivity=openActivity;

openActivity=function(activity){

    updateURL(activity.id);

    originalOpenActivity(activity);

};



/*=========================================================
OVERRIDE CLOSE

Removes URL

=========================================================*/

const originalCloseModal=

closeActivityModal;

closeActivityModal=function(){

    clearURL();

    originalCloseModal();

};



/*=========================================================
STATISTICS

=========================================================*/

function generateStatistics(){

    console.log(

        "Activities:",

        activities.length

    );

}



/*=========================================================
INITIALISE EXTRA FEATURES

=========================================================*/

window.addEventListener(

    "load",

    function(){

        checkURLActivity();

        generateStatistics();

    }

);



/*=========================================================
END OF APP.JS

Thinking About Thinking

Version 1.0

=========================================================*/
