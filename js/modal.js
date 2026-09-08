/*=========================================================
THINKING ABOUT THINKING

MODAL CONTROLLER

Version 1.0

=========================================================*/


const modal = document.getElementById("activityModal");

const modalBody = document.getElementById("modalBody");



/*=========================================================
OPEN MODAL

=========================================================*/

function openActivity(activity){

    if(!activity) return;

    modalBody.innerHTML = buildActivityHTML(activity);

    modal.classList.add("show");

    document.body.style.overflow="hidden";

}



/*=========================================================
CLOSE MODAL

=========================================================*/

function closeActivity(){

    modal.classList.remove("show");

    document.body.style.overflow="auto";

}



/*=========================================================
BACKGROUND CLICK

=========================================================*/

window.addEventListener(

    "click",

    function(event){

        if(event.target===modal){

            closeActivity();

        }

    }

);



/*=========================================================
ESCAPE KEY

=========================================================*/

document.addEventListener(

    "keydown",

    function(event){

        if(event.key==="Escape"){

            closeActivity();

        }

    }

);
/*=========================================================
BUILD HTML

=========================================================*/

function buildActivityHTML(activity){

return `

<div class="activity-modal">

<h2>${activity.title}</h2>

<p class="theme">

<strong>Theme:</strong>

${activity.theme}

</p>

<hr>

<h3>Objective</h3>

<p>${activity.objective}</p>

<h3>Big Idea</h3>

<p>${activity.bigIdea}</p>

<h3>Self Awareness Focus</h3>

<p>${activity.selfAwarenessFocus}</p>

<h3>Provocation</h3>

<p>

<strong>${activity.provocationTitle}</strong>

</p>

<p>

${activity.provocationDescription}

</p>

${
activity.provocationLink
?

`
<p>

<a href="${activity.provocationLink}"

target="_blank">

Open Resource

</a>

</p>
`

:

""

}

<h3>Worksheet</h3>

<p>

${activity.worksheetOutline}

</p>

<h3>Teacher Preparation</h3>

<p>

${activity.teacherPreparation}

</p>

<h3>Student Instructions</h3>

<p>

${activity.studentInstructions}

</p>

<h3>Thinking Progression</h3>

<p>

${activity.thinkingProgression}

</p>

<h3>Thinking Routine</h3>

<p>

${activity.thinkingRoutine}

</p>

<h3>Critical Thinking</h3>

<ul>

${activity.criticalThinking.map(

item=>`<li>${item}</li>`

).join("")}

</ul>

<h3>ATL Skills</h3>

<ul>

${activity.atlSkills.map(

item=>`<li>${item}</li>`

).join("")}

</ul>

<h3>Learner Profile</h3>

<ul>

${activity.learnerProfile.map(

item=>`<li>${item}</li>`

).join("")}

</ul>

<h3>Assessment</h3>

<p>

${activity.assessment}

</p>

<h3>Reflection Question</h3>

<p>

${activity.reflectionQuestion}

</p>

<h3>Extension</h3>

<p>

${activity.extension}

</p>

</div>

`;

}

/*=========================================================
COPY TO CLIPBOARD

=========================================================*/

function copyActivity(activityID){

    const activity=

    activityByID(activityID);

    if(!activity) return;

    let text="";

    text+=activity.title+"\n\n";

    text+="Objective\n";

    text+=activity.objective+"\n\n";

    text+="Big Idea\n";

    text+=activity.bigIdea+"\n\n";

    text+="Thinking Routine\n";

    text+=activity.thinkingRoutine+"\n\n";

    text+="Reflection Question\n";

    text+=activity.reflectionQuestion;

    navigator.clipboard.writeText(text);

    alert("Activity copied.");

}



/*=========================================================
PRINT

=========================================================*/

function printActivity(activityID){

    const activity=

    activityByID(activityID);

    if(!activity) return;

    openActivity(activity);

    window.print();

}



/*=========================================================
END MODAL.JS

=========================================================*/
