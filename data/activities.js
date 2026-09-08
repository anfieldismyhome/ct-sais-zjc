/*=========================================================
THINKING ABOUT THINKING

Activity Database

Activities 1–5

=========================================================*/

const activityDatabase = [

{
    id:1,

    title:"The Choice Behind the Choice",

    theme:"Identity & Values",

    duration:"15 min",

    grade:[9,10,11],

    objective:"Students recognise that personal choices are often driven by underlying values and assumptions.",

    bigIdea:"Every decision reflects something we value, even when we are not consciously aware of it.",

    provocationType:"Image",

    provocationTitle:"Everyday Choices",

    provocationDescription:"Display two contrasting choices (e.g., saving money vs spending, studying vs gaming) and ask students what might motivate each decision.",

    provocationLink:"",

    worksheetOutline:"Students analyse an anonymous decision-making scenario using the thinking routine 'Choice → Reason → Value'. They then apply the same routine to one of their own recent decisions.",

    teacherPreparation:"Prepare the image/scenario and print the worksheet.",

    studentInstructions:"Analyse the scenario, identify the possible reasons behind each choice, infer the values being expressed, then reflect on one of your own choices.",

    thinkingProgression:"Observe → Infer → Connect → Reflect",

    selfAwarenessFocus:"Understanding the values behind personal decisions.",

    criticalThinking:[
        "Reasoning",
        "Decision Making"
    ],

    atlSkills:[
        "Thinking",
        "Self-management"
    ],

    learnerProfile:[
        "Reflective",
        "Principled"
    ],

    thinkingRoutine:"Choice → Reason → Value",

    assessment:"Completed worksheet and class discussion.",

    reflectionQuestion:"What value influenced your decision the most?",

    extension:"Repeat the routine using a more significant life decision.",

    tags:[
        "identity",
        "values",
        "choices"
    ]
},

{
    id:2,

    title:"The Story Behind the Snapshot",

    theme:"Perspective",

    duration:"15 min",

    grade:[9,10,11],

    objective:"Students recognise that images rarely tell the complete story.",

    bigIdea:"Different interpretations emerge because people notice different evidence.",

    provocationType:"Image",

    provocationTitle:"Ambiguous Photograph",

    provocationDescription:"Show a photograph with little context and ask students what they think is happening.",

    provocationLink:"",

    worksheetOutline:"Students complete See → Think → Wonder before receiving additional context and revising their interpretation.",

    teacherPreparation:"Choose a powerful image with ambiguous context.",

    studentInstructions:"Record observations, make inferences, ask questions, then revisit your thinking after receiving more information.",

    thinkingProgression:"Observe → Infer → Question → Revise",

    selfAwarenessFocus:"Recognising assumptions made from limited evidence.",

    criticalThinking:[
        "Inference",
        "Evidence Evaluation"
    ],

    atlSkills:[
        "Thinking",
        "Communication"
    ],

    learnerProfile:[
        "Open-minded",
        "Reflective"
    ],

    thinkingRoutine:"See • Think • Wonder",

    assessment:"Worksheet responses and revised interpretation.",

    reflectionQuestion:"Which assumption changed the most after new evidence?",

    extension:"Compare interpretations across different groups.",

    tags:[
        "perspective",
        "images",
        "evidence"
    ]
},

{
    id:3,

    title:"What Makes You Say That?",

    theme:"Evidence & Reasoning",

    duration:"15 min",

    grade:[9,10,11],

    objective:"Students justify claims using evidence rather than intuition.",

    bigIdea:"Strong thinking is supported by reasons and evidence.",

    provocationType:"Image",

    provocationTitle:"Unexpected Situation",

    provocationDescription:"Display an unusual classroom or social situation and ask students to explain what they think is happening.",

    provocationLink:"",

    worksheetOutline:"Students make a claim, identify supporting evidence, then explain why the evidence supports the claim.",

    teacherPreparation:"Prepare one ambiguous image.",

    studentInstructions:"Avoid guessing. Base your interpretation only on observable evidence.",

    thinkingProgression:"Observe → Claim → Evidence → Justify",

    selfAwarenessFocus:"Recognising when personal opinions are unsupported.",

    criticalThinking:[
        "Reasoning",
        "Evidence"
    ],

    atlSkills:[
        "Thinking"
    ],

    learnerProfile:[
        "Thinker",
        "Reflective"
    ],

    thinkingRoutine:"Claim • Support • Question",

    assessment:"Evidence-based explanation.",

    reflectionQuestion:"How much evidence did you actually have?",

    extension:"Apply the routine to a newspaper headline.",

    tags:[
        "reasoning",
        "claims",
        "evidence"
    ]
},

{
    id:4,

    title:"Changing My Mind",

    theme:"Metacognition",

    duration:"15 min",

    grade:[9,10,11],

    objective:"Students recognise that changing one's mind is a sign of learning.",

    bigIdea:"Learning often involves revising previous beliefs.",

    provocationType:"Video",

    provocationTitle:"Scientific Discovery",

    provocationDescription:"Show a short clip demonstrating how a scientific idea changed over time.",

    provocationLink:"",

    worksheetOutline:"Students identify an opinion they have changed and explain what evidence caused the change.",

    teacherPreparation:"Prepare a 2–3 minute video.",

    studentInstructions:"Reflect on a belief that changed and identify the evidence responsible.",

    thinkingProgression:"Recall → Analyse → Reflect → Apply",

    selfAwarenessFocus:"Becoming comfortable with intellectual flexibility.",

    criticalThinking:[
        "Reflection",
        "Evidence Evaluation"
    ],

    atlSkills:[
        "Thinking",
        "Self-management"
    ],

    learnerProfile:[
        "Reflective",
        "Open-minded"
    ],

    thinkingRoutine:"I Used to Think... Now I Think...",

    assessment:"Completed reflection.",

    reflectionQuestion:"What allowed you to change your mind?",

    extension:"Discuss why people sometimes resist changing their opinions.",

    tags:[
        "metacognition",
        "reflection"
    ]
},

{
    id:5,

    title:"The Iceberg of Identity",

    theme:"Identity & Values",

    duration:"15 min",

    grade:[9,10,11],

    objective:"Students distinguish between visible and invisible aspects of identity.",

    bigIdea:"Much of who we are cannot be seen immediately.",

    provocationType:"Image",

    provocationTitle:"Identity Iceberg",

    provocationDescription:"Display an iceberg diagram showing visible and hidden characteristics.",

    provocationLink:"",

    worksheetOutline:"Students complete an iceberg organiser identifying visible traits above the surface and hidden aspects below.",

    teacherPreparation:"Prepare iceberg graphic.",

    studentInstructions:"Reflect honestly about visible and invisible aspects of your identity.",

    thinkingProgression:"Observe → Categorise → Reflect → Share",

    selfAwarenessFocus:"Developing a richer understanding of personal identity.",

    criticalThinking:[
        "Classification",
        "Reflection"
    ],

    atlSkills:[
        "Thinking",
        "Communication"
    ],

    learnerProfile:[
        "Reflective",
        "Balanced"
    ],

    thinkingRoutine:"Visible • Invisible",

    assessment:"Completed organiser.",

    reflectionQuestion:"Which hidden aspect of yourself most influences your thinking?",

    extension:"Revisit the iceberg at the end of the year to identify changes.",

    tags:[
        "identity",
        "self-awareness"
    ]
},
  ,
{
    id:6,

    title:"The Ladder of Assumptions",

    theme:"Perspective",

    duration:"15 min",

    grade:[9,10,11],

    objective:"Students recognise how quickly assumptions influence conclusions.",

    bigIdea:"People often climb from observation to judgement without realising it.",

    provocationType:"Image",

    provocationTitle:"Ambiguous Classroom Photograph",

    provocationDescription:"Students observe an image and identify what they know versus what they assume.",

    provocationLink:"",

    worksheetOutline:"Students complete a Ladder of Assumptions organiser moving from Observation → Interpretation → Assumption → Conclusion.",

    teacherPreparation:"Prepare one ambiguous image.",

    studentInstructions:"Record only observations first before identifying assumptions.",

    thinkingProgression:"Observe → Infer → Challenge → Reflect",

    selfAwarenessFocus:"Recognising personal assumptions.",

    criticalThinking:[
        "Assumptions",
        "Reasoning"
    ],

    atlSkills:[
        "Thinking"
    ],

    learnerProfile:[
        "Open-minded",
        "Reflective"
    ],

    thinkingRoutine:"Ladder of Assumptions",

    assessment:"Completed organiser.",

    reflectionQuestion:"Where did your first assumption appear?",

    extension:"Apply the ladder to a recent disagreement.",

    tags:[
        "assumptions",
        "perspective"
    ]
},

{
    id:7,

    title:"Circle of Control",

    theme:"Self Awareness",

    duration:"15 min",

    grade:[9,10,11],

    objective:"Students distinguish between factors they can and cannot control.",

    bigIdea:"Energy is better invested in actions we can influence.",

    provocationType:"Image",

    provocationTitle:"Weather Forecast Cartoon",

    provocationDescription:"Discuss why people often worry about uncontrollable events.",

    provocationLink:"",

    worksheetOutline:"Students sort current worries into Control, Influence and Concern.",

    teacherPreparation:"Print Circle of Control worksheet.",

    studentInstructions:"Classify each concern honestly and identify one action within your control.",

    thinkingProgression:"Identify → Categorise → Prioritise → Act",

    selfAwarenessFocus:"Managing emotional responses.",

    criticalThinking:[
        "Decision Making",
        "Reflection"
    ],

    atlSkills:[
        "Self-management",
        "Thinking"
    ],

    learnerProfile:[
        "Balanced",
        "Reflective"
    ],

    thinkingRoutine:"Circle of Control",

    assessment:"Completed worksheet.",

    reflectionQuestion:"What will you stop worrying about?",

    extension:"Repeat during examination periods.",

    tags:[
        "wellbeing",
        "control"
    ]
},

{
    id:8,

    title:"Perspective Switch",

    theme:"Perspective",

    duration:"15 min",

    grade:[9,10,11],

    objective:"Students appreciate multiple viewpoints before forming conclusions.",

    bigIdea:"Understanding increases when we deliberately consider another perspective.",

    provocationType:"Video",

    provocationTitle:"The Blind Men and the Elephant",

    provocationDescription:"Watch a short animation illustrating different perspectives.",

    provocationLink:"",

    worksheetOutline:"Students analyse the same situation from three different viewpoints.",

    teacherPreparation:"Prepare video.",

    studentInstructions:"Complete the Perspective Triangle worksheet.",

    thinkingProgression:"Observe → Compare → Empathise → Reflect",

    selfAwarenessFocus:"Recognising personal perspective.",

    criticalThinking:[
        "Perspective Taking",
        "Empathy"
    ],

    atlSkills:[
        "Communication",
        "Thinking"
    ],

    learnerProfile:[
        "Open-minded",
        "Caring"
    ],

    thinkingRoutine:"Step Inside",

    assessment:"Perspective worksheet.",

    reflectionQuestion:"Which perspective was hardest to understand?",

    extension:"Apply to a historical event.",

    tags:[
        "perspective",
        "empathy"
    ]
},

{
    id:9,

    title:"Fact or Interpretation?",

    theme:"Evidence",

    duration:"15 min",

    grade:[9,10,11],

    objective:"Students distinguish observations from interpretations.",

    bigIdea:"Facts and interpretations are often confused.",

    provocationType:"Image",

    provocationTitle:"Sports Photograph",

    provocationDescription:"Students classify statements as observations or interpretations.",

    provocationLink:"",

    worksheetOutline:"Sort twenty statements into Fact, Interpretation or Opinion.",

    teacherPreparation:"Prepare statement cards.",

    studentInstructions:"Explain why each statement belongs in its category.",

    thinkingProgression:"Observe → Categorise → Justify → Reflect",

    selfAwarenessFocus:"Recognising subjective thinking.",

    criticalThinking:[
        "Evidence",
        "Classification"
    ],

    atlSkills:[
        "Thinking"
    ],

    learnerProfile:[
        "Thinker",
        "Reflective"
    ],

    thinkingRoutine:"Fact • Interpretation • Opinion",

    assessment:"Completed categorisation.",

    reflectionQuestion:"Which statements were most difficult to classify?",

    extension:"Analyse a news article.",

    tags:[
        "evidence",
        "facts"
    ]
},

{
    id:10,

    title:"The Question Behind the Question",

    theme:"Inquiry",

    duration:"15 min",

    grade:[9,10,11],

    objective:"Students recognise how better questions lead to deeper thinking.",

    bigIdea:"The quality of our thinking depends greatly on the quality of our questions.",

    provocationType:"Video",

    provocationTitle:"Curious Kids Asking Questions",

    provocationDescription:"Discuss why children often ask more questions than adults.",

    provocationLink:"",

    worksheetOutline:"Students improve simple questions into increasingly thoughtful inquiry questions.",

    teacherPreparation:"Prepare examples of closed and open questions.",

    studentInstructions:"Rewrite questions using the Question Ladder.",

    thinkingProgression:"Question → Improve → Extend → Reflect",

    selfAwarenessFocus:"Developing curiosity.",

    criticalThinking:[
        "Inquiry",
        "Questioning"
    ],

    atlSkills:[
        "Research",
        "Thinking"
    ],

    learnerProfile:[
        "Inquirer",
        "Thinker"
    ],

    thinkingRoutine:"Question Ladder",

    assessment:"Improved questions.",

    reflectionQuestion:"Which question made you think the hardest?",

    extension:"Use your best question as the opening for a TOK discussion.",

    tags:[
        "questions",
        "inquiry"
    ]
},
  ,
{
    id:11,

    title:"The Invisible Filters",

    theme:"Bias & Perception",

    duration:"15 min",

    grade:[9,10,11],

    objective:"Students recognise how personal experiences influence perception.",

    bigIdea:"We never see situations completely objectively.",

    provocationType:"Advertisement",

    provocationTitle:"Luxury Watch Advertisement",

    provocationDescription:"Students analyse how different audiences may interpret the same advertisement differently.",

    provocationLink:"",

    worksheetOutline:"Students complete a Perception Filter Map identifying experiences, beliefs and emotions influencing interpretation.",

    teacherPreparation:"Prepare one advertisement.",

    studentInstructions:"Analyse the advertisement individually before discussing how others interpreted it differently.",

    thinkingProgression:"Observe → Interpret → Compare → Reflect",

    selfAwarenessFocus:"Recognising personal biases.",

    criticalThinking:[
        "Bias Recognition",
        "Perspective"
    ],

    atlSkills:[
        "Thinking",
        "Communication"
    ],

    learnerProfile:[
        "Open-minded",
        "Reflective"
    ],

    thinkingRoutine:"See • Think • Wonder",

    assessment:"Completed perception map.",

    reflectionQuestion:"Which personal experience most influenced your interpretation?",

    extension:"Compare interpretations across cultures.",

    tags:[
        "bias",
        "perception",
        "advertising"
    ]
},

{
    id:12,

    title:"Labels We Wear",

    theme:"Identity",

    duration:"15 min",

    grade:[9,10,11],

    objective:"Students explore how labels influence identity and behaviour.",

    bigIdea:"Labels simplify people but rarely capture the whole person.",

    provocationType:"Image",

    provocationTitle:"Person Covered with Labels",

    provocationDescription:"Students observe an image showing labels attached to a person and discuss first impressions.",

    provocationLink:"",

    worksheetOutline:"Students identify labels they have received and evaluate which are accurate, inaccurate or limiting.",

    teacherPreparation:"Print worksheet.",

    studentInstructions:"Complete the worksheet privately before discussing voluntarily.",

    thinkingProgression:"Identify → Analyse → Evaluate → Reflect",

    selfAwarenessFocus:"Understanding identity beyond labels.",

    criticalThinking:[
        "Analysis",
        "Reflection"
    ],

    atlSkills:[
        "Self-management",
        "Thinking"
    ],

    learnerProfile:[
        "Reflective",
        "Balanced"
    ],

    thinkingRoutine:"Connect • Extend • Challenge",

    assessment:"Worksheet completion.",

    reflectionQuestion:"Which label has affected you the most?",

    extension:"Create a personal identity map.",

    tags:[
        "identity",
        "labels"
    ]
},

{
    id:13,

    title:"Pause Before You Judge",

    theme:"Judgement",

    duration:"15 min",

    grade:[9,10,11],

    objective:"Students recognise how quickly first impressions form.",

    bigIdea:"Our brains naturally fill gaps with assumptions.",

    provocationType:"Video",

    provocationTitle:"First Impression Social Experiment",

    provocationDescription:"Students watch a short experiment demonstrating inaccurate first impressions.",

    provocationLink:"",

    worksheetOutline:"Students record their first judgement before receiving additional information.",

    teacherPreparation:"Prepare video.",

    studentInstructions:"Record your first judgement honestly before the reveal.",

    thinkingProgression:"Judge → Question → Revise → Reflect",

    selfAwarenessFocus:"Monitoring snap judgements.",

    criticalThinking:[
        "Evidence Evaluation",
        "Bias Recognition"
    ],

    atlSkills:[
        "Thinking"
    ],

    learnerProfile:[
        "Open-minded",
        "Reflective"
    ],

    thinkingRoutine:"Claim • Evidence • Reconsider",

    assessment:"Reflection sheet.",

    reflectionQuestion:"What caused you to change your judgement?",

    extension:"Analyse a real-world media example.",

    tags:[
        "judgement",
        "bias"
    ]
},

{
    id:14,

    title:"Comfort Zone Compass",

    theme:"Growth",

    duration:"15 min",

    grade:[9,10,11],

    objective:"Students identify situations that stretch their comfort zone.",

    bigIdea:"Growth often occurs through manageable discomfort.",

    provocationType:"Image",

    provocationTitle:"Comfort Zone Diagram",

    provocationDescription:"Students examine a diagram showing Comfort, Stretch and Panic zones.",

    provocationLink:"",

    worksheetOutline:"Students classify recent experiences into the three zones and identify one future challenge.",

    teacherPreparation:"Prepare comfort zone graphic.",

    studentInstructions:"Reflect honestly on your current experiences.",

    thinkingProgression:"Recall → Categorise → Plan → Commit",

    selfAwarenessFocus:"Recognising personal growth opportunities.",

    criticalThinking:[
        "Reflection",
        "Decision Making"
    ],

    atlSkills:[
        "Self-management",
        "Thinking"
    ],

    learnerProfile:[
        "Risk-taker",
        "Reflective"
    ],

    thinkingRoutine:"Compass Points",

    assessment:"Completed planner.",

    reflectionQuestion:"What small risk could help you grow this week?",

    extension:"Review progress after one month.",

    tags:[
        "growth",
        "comfort zone"
    ]
},

{
    id:15,

    title:"The Ripple Effect",

    theme:"Decision Making",

    duration:"15 min",

    grade:[9,10,11],

    objective:"Students consider the wider consequences of everyday decisions.",

    bigIdea:"Small actions can have significant long-term impacts.",

    provocationType:"Video",

    provocationTitle:"Ripple Effect Animation",

    provocationDescription:"Students watch a short animation showing how one action influences many people.",

    provocationLink:"",

    worksheetOutline:"Students map the short-term and long-term consequences of one personal decision.",

    teacherPreparation:"Prepare short animation.",

    studentInstructions:"Create a consequence map individually before sharing.",

    thinkingProgression:"Choose → Predict → Evaluate → Reflect",

    selfAwarenessFocus:"Considering consequences before acting.",

    criticalThinking:[
        "Prediction",
        "Decision Making"
    ],

    atlSkills:[
        "Thinking",
        "Self-management"
    ],

    learnerProfile:[
        "Principled",
        "Reflective"
    ],

    thinkingRoutine:"Cause • Effect • Consequence",

    assessment:"Consequence map.",

    reflectionQuestion:"Which consequence surprised you the most?",

    extension:"Apply the routine to a global issue.",

    tags:[
        "decisions",
        "consequences"
    ]
},
{
    id:16,

    title:"The Stories We Tell Ourselves",

    theme:"Self-Talk",

    duration:"15 min",

    grade:[9,10,11],

    objective:"Students identify how internal narratives influence emotions and behaviour.",

    bigIdea:"The stories we tell ourselves shape how we experience situations.",

    provocationType:"Video",

    provocationTitle:"Negative Self Talk Animation",

    provocationDescription:"Watch a short animation illustrating how two people interpret the same event differently because of their internal dialogue.",

    provocationLink:"",

    worksheetOutline:"Students identify an event, their automatic thought, the emotion created, and an alternative interpretation.",

    teacherPreparation:"Prepare a short animation or comic strip.",

    studentInstructions:"Complete the worksheet honestly before discussing alternative interpretations with a partner.",

    thinkingProgression:"Recognise → Analyse → Reframe → Reflect",

    selfAwarenessFocus:"Understanding personal self-talk.",

    criticalThinking:[
        "Reflection",
        "Analysis"
    ],

    atlSkills:[
        "Self-management",
        "Thinking"
    ],

    learnerProfile:[
        "Reflective",
        "Balanced"
    ],

    thinkingRoutine:"Think • Feel • Reframe",

    assessment:"Completed worksheet.",

    reflectionQuestion:"What story do you often tell yourself that may not be completely true?",

    extension:"Track your self-talk for one week.",

    tags:[
        "self-talk",
        "mindset"
    ]
},

{
    id:17,

    title:"The Decision Tree",

    theme:"Decision Making",

    duration:"15 min",

    grade:[9,10,11],

    objective:"Students evaluate possible consequences before making decisions.",

    bigIdea:"Good decisions consider both immediate and long-term outcomes.",

    provocationType:"Image",

    provocationTitle:"Choose Your Own Adventure",

    provocationDescription:"Display a branching decision diagram showing how one decision creates multiple future paths.",

    provocationLink:"",

    worksheetOutline:"Students construct a simple decision tree for a current choice they are facing.",

    teacherPreparation:"Prepare an example decision tree.",

    studentInstructions:"Map at least three possible consequences for each decision.",

    thinkingProgression:"Identify → Predict → Compare → Decide",

    selfAwarenessFocus:"Becoming intentional about decisions.",

    criticalThinking:[
        "Prediction",
        "Decision Making"
    ],

    atlSkills:[
        "Thinking",
        "Self-management"
    ],

    learnerProfile:[
        "Thinker",
        "Principled"
    ],

    thinkingRoutine:"Decision Tree",

    assessment:"Completed decision map.",

    reflectionQuestion:"Which consequence influenced your final decision most?",

    extension:"Compare your decision tree with a partner.",

    tags:[
        "decision making",
        "choices"
    ]
},

{
    id:18,

    title:"Mirror vs Window",

    theme:"Perspective",

    duration:"15 min",

    grade:[9,10,11],

    objective:"Students distinguish between learning about themselves and learning about others.",

    bigIdea:"Experiences can act as mirrors for self-understanding and windows into others' lives.",

    provocationType:"Image",

    provocationTitle:"Mirror and Window Illustration",

    provocationDescription:"Students analyse photographs and determine whether each serves as a mirror, a window, or both.",

    provocationLink:"",

    worksheetOutline:"Students complete a Mirror–Window organiser after analysing three images.",

    teacherPreparation:"Prepare three contrasting images.",

    studentInstructions:"Identify what each image teaches you about yourself and others.",

    thinkingProgression:"Observe → Connect → Compare → Reflect",

    selfAwarenessFocus:"Recognising personal connections to experiences.",

    criticalThinking:[
        "Perspective",
        "Connection"
    ],

    atlSkills:[
        "Thinking",
        "Communication"
    ],

    learnerProfile:[
        "Open-minded",
        "Caring"
    ],

    thinkingRoutine:"Mirror • Window",

    assessment:"Completed organiser.",

    reflectionQuestion:"Which image acted as the strongest mirror for you?",

    extension:"Repeat using a short film clip.",

    tags:[
        "perspective",
        "identity"
    ]
},

{
    id:19,

    title:"Evidence Before Opinion",

    theme:"Reasoning",

    duration:"15 min",

    grade:[9,10,11],

    objective:"Students separate evidence from personal opinion.",

    bigIdea:"Strong opinions require strong evidence.",

    provocationType:"News Headline",

    provocationTitle:"Current Affairs Headline",

    provocationDescription:"Display a headline without the article and discuss initial reactions.",

    provocationLink:"",

    worksheetOutline:"Students identify available evidence, missing evidence and unsupported opinions.",

    teacherPreparation:"Choose an age-appropriate news headline.",

    studentInstructions:"Avoid reading the article until after completing the worksheet.",

    thinkingProgression:"React → Analyse → Evaluate → Revise",

    selfAwarenessFocus:"Recognising when opinions are based on assumptions.",

    criticalThinking:[
        "Evidence",
        "Evaluation"
    ],

    atlSkills:[
        "Thinking",
        "Research"
    ],

    learnerProfile:[
        "Thinker",
        "Reflective"
    ],

    thinkingRoutine:"Claim • Evidence • Question",

    assessment:"Evidence organiser.",

    reflectionQuestion:"How confident were you before seeing the evidence?",

    extension:"Read the article and revisit your conclusions.",

    tags:[
        "evidence",
        "media"
    ]
},

{
    id:20,

    title:"Values Under Pressure",

    theme:"Values",

    duration:"15 min",

    grade:[9,10,11],

    objective:"Students examine whether their values remain consistent under pressure.",

    bigIdea:"Our values are most visible when they are challenged.",

    provocationType:"Scenario",

    provocationTitle:"Peer Pressure Dilemma",

    provocationDescription:"Students read a realistic scenario involving competing values.",

    provocationLink:"",

    worksheetOutline:"Students identify conflicting values, possible actions and justify the response they would choose.",

    teacherPreparation:"Print scenario cards.",

    studentInstructions:"Work individually before discussing in small groups.",

    thinkingProgression:"Identify → Evaluate → Justify → Reflect",

    selfAwarenessFocus:"Recognising core personal values.",

    criticalThinking:[
        "Ethical Reasoning",
        "Decision Making"
    ],

    atlSkills:[
        "Thinking",
        "Social"
    ],

    learnerProfile:[
        "Principled",
        "Reflective"
    ],

    thinkingRoutine:"Values Compass",

    assessment:"Scenario analysis.",

    reflectionQuestion:"Which value was hardest to protect?",

    extension:"Design your own ethical dilemma.",

    tags:[
        "values",
        "ethics",
        "decision making"
    ]
}
,
{
    id:21,

    title:"The Lens I Wear",

    theme:"Perspective",

    duration:"15 min",

    grade:[9,10,11],

    objective:"Students recognise how personal experiences shape interpretation.",

    bigIdea:"Everyone views the world through different personal lenses.",

    provocationType:"Image",

    provocationTitle:"Optical Illusion",

    provocationDescription:"Display an optical illusion that has multiple interpretations before discussing why different people notice different things.",

    provocationLink:"",

    worksheetOutline:"Students identify experiences, beliefs and emotions that may influence how they interpret situations.",

    teacherPreparation:"Prepare an optical illusion image.",

    studentInstructions:"Complete your Personal Lens Map before discussing similarities and differences with classmates.",

    thinkingProgression:"Observe → Interpret → Compare → Reflect",

    selfAwarenessFocus:"Recognising the influence of personal experiences.",

    criticalThinking:[
        "Perspective",
        "Reflection"
    ],

    atlSkills:[
        "Thinking",
        "Communication"
    ],

    learnerProfile:[
        "Open-minded",
        "Reflective"
    ],

    thinkingRoutine:"Circle of Viewpoints",

    assessment:"Completed Personal Lens Map.",

    reflectionQuestion:"Which experience influences your thinking the most?",

    extension:"Apply your lens map to a recent disagreement.",

    tags:[
        "perspective",
        "identity",
        "bias"
    ]
},

{
    id:22,

    title:"When Emotions Think",

    theme:"Emotional Awareness",

    duration:"15 min",

    grade:[9,10,11],

    objective:"Students identify how emotions influence reasoning.",

    bigIdea:"Emotions affect the decisions we make.",

    provocationType:"Video",

    provocationTitle:"Inside Out Emotional Scene",

    provocationDescription:"Watch a short scene showing emotions influencing decisions.",

    provocationLink:"",

    worksheetOutline:"Students analyse a recent decision by separating facts, emotions and actions.",

    teacherPreparation:"Prepare a 2–3 minute video clip.",

    studentInstructions:"Identify the emotion, describe how it influenced your thinking and suggest an alternative response.",

    thinkingProgression:"Recall → Analyse → Separate → Reflect",

    selfAwarenessFocus:"Recognising emotional influences.",

    criticalThinking:[
        "Analysis",
        "Metacognition"
    ],

    atlSkills:[
        "Self-management",
        "Thinking"
    ],

    learnerProfile:[
        "Balanced",
        "Reflective"
    ],

    thinkingRoutine:"Feel • Think • Act",

    assessment:"Completed reflection.",

    reflectionQuestion:"Which emotion most influences your decisions?",

    extension:"Keep an emotion journal for one week.",

    tags:[
        "emotion",
        "self-awareness"
    ]
},

{
    id:23,

    title:"Assumption Detective",

    theme:"Reasoning",

    duration:"15 min",

    grade:[9,10,11],

    objective:"Students identify hidden assumptions within everyday statements.",

    bigIdea:"Every claim contains assumptions that should be examined.",

    provocationType:"Advertisement",

    provocationTitle:"Social Media Advertisement",

    provocationDescription:"Students identify the hidden assumptions made by an advertisement.",

    provocationLink:"",

    worksheetOutline:"Students highlight assumptions, identify supporting evidence and evaluate credibility.",

    teacherPreparation:"Select an advertisement containing persuasive language.",

    studentInstructions:"Underline assumptions before discussing whether evidence supports them.",

    thinkingProgression:"Identify → Analyse → Evaluate → Reflect",

    selfAwarenessFocus:"Recognising assumptions in everyday life.",

    criticalThinking:[
        "Assumptions",
        "Evidence Evaluation"
    ],

    atlSkills:[
        "Thinking",
        "Research"
    ],

    learnerProfile:[
        "Thinker",
        "Reflective"
    ],

    thinkingRoutine:"Claim • Evidence • Assumption",

    assessment:"Completed analysis sheet.",

    reflectionQuestion:"Which assumption seemed most believable at first?",

    extension:"Analyse another advertisement independently.",

    tags:[
        "advertising",
        "assumptions",
        "media"
    ]
},

{
    id:24,

    title:"Identity Timeline",

    theme:"Identity",

    duration:"15 min",

    grade:[9,10,11],

    objective:"Students reflect on experiences that have shaped their identity.",

    bigIdea:"Identity develops through significant experiences.",

    provocationType:"Image",

    provocationTitle:"Life Journey Illustration",

    provocationDescription:"Students examine a visual timeline representing life experiences.",

    provocationLink:"",

    worksheetOutline:"Students construct a simple timeline highlighting experiences that influenced who they are today.",

    teacherPreparation:"Prepare timeline template.",

    studentInstructions:"Include positive and challenging experiences if comfortable.",

    thinkingProgression:"Recall → Connect → Reflect → Share",

    selfAwarenessFocus:"Recognising personal growth.",

    criticalThinking:[
        "Reflection",
        "Connection"
    ],

    atlSkills:[
        "Self-management",
        "Communication"
    ],

    learnerProfile:[
        "Reflective",
        "Balanced"
    ],

    thinkingRoutine:"Connect • Reflect",

    assessment:"Completed identity timeline.",

    reflectionQuestion:"Which experience shaped you the most?",

    extension:"Update the timeline at the end of the school year.",

    tags:[
        "identity",
        "reflection"
    ]
},

{
    id:25,

    title:"Pause • Think • Respond",

    theme:"Decision Making",

    duration:"15 min",

    grade:[9,10,11],

    objective:"Students practise slowing down before reacting.",

    bigIdea:"Thoughtful responses usually produce better outcomes than impulsive reactions.",

    provocationType:"Video",

    provocationTitle:"Impulse Control Social Experiment",

    provocationDescription:"Students watch a short clip where people react impulsively before considering consequences.",

    provocationLink:"",

    worksheetOutline:"Students analyse one situation using the sequence Trigger → Reaction → Better Response.",

    teacherPreparation:"Prepare a suitable video clip.",

    studentInstructions:"Reflect on one recent situation where you reacted quickly and redesign your response.",

    thinkingProgression:"Recall → Analyse → Redesign → Commit",

    selfAwarenessFocus:"Developing response control.",

    criticalThinking:[
        "Decision Making",
        "Reflection"
    ],

    atlSkills:[
        "Self-management",
        "Thinking"
    ],

    learnerProfile:[
        "Balanced",
        "Reflective",
        "Principled"
    ],

    thinkingRoutine:"Pause • Think • Respond",

    assessment:"Completed response planner.",

    reflectionQuestion:"What difference would one minute of thinking have made?",

    extension:"Practise the routine throughout the week and record one success.",

    tags:[
        "decision making",
        "reflection",
        "self-control"
    ]
}
,
{
    id:26,

    title:"The Values Auction",

    theme:"Values",

    duration:"15 min",

    grade:[9,10,11],

    objective:"Students prioritise their personal values by making difficult trade-offs.",

    bigIdea:"Our priorities become clearer when we cannot choose everything.",

    provocationType:"Image",

    provocationTitle:"Auction Paddle",

    provocationDescription:"Display an image of an auction and explain that students have limited 'life points' to spend on values.",

    provocationLink:"",

    worksheetOutline:"Students receive 100 points and distribute them across 15 life values before explaining their choices.",

    teacherPreparation:"Prepare value cards and worksheet.",

    studentInstructions:"Spend your points honestly. You cannot give every value the same importance.",

    thinkingProgression:"Prioritise → Justify → Compare → Reflect",

    selfAwarenessFocus:"Clarifying personal priorities.",

    criticalThinking:[
        "Decision Making",
        "Evaluation"
    ],

    atlSkills:[
        "Thinking",
        "Self-management"
    ],

    learnerProfile:[
        "Reflective",
        "Principled"
    ],

    thinkingRoutine:"Prioritise • Justify",

    assessment:"Completed values allocation sheet.",

    reflectionQuestion:"Which value was hardest to sacrifice?",

    extension:"Repeat the activity at the end of the school year.",

    tags:[
        "values",
        "priorities"
    ]
},

{
    id:27,

    title:"Headline vs Reality",

    theme:"Media Literacy",

    duration:"15 min",

    grade:[9,10,11],

    objective:"Students recognise how headlines influence judgement before evidence is considered.",

    bigIdea:"First impressions are often created by incomplete information.",

    provocationType:"News Headline",

    provocationTitle:"Misleading Headlines",

    provocationDescription:"Display several headlines without revealing the articles.",

    provocationLink:"",

    worksheetOutline:"Students predict the story before reading the article and compare their assumptions with the actual content.",

    teacherPreparation:"Prepare three current headlines.",

    studentInstructions:"Write your interpretation before reading further.",

    thinkingProgression:"Predict → Verify → Compare → Reflect",

    selfAwarenessFocus:"Monitoring snap judgements.",

    criticalThinking:[
        "Evidence",
        "Media Literacy"
    ],

    atlSkills:[
        "Research",
        "Thinking"
    ],

    learnerProfile:[
        "Thinker",
        "Open-minded"
    ],

    thinkingRoutine:"Predict • Verify",

    assessment:"Comparison worksheet.",

    reflectionQuestion:"How different was reality from your expectation?",

    extension:"Find another misleading headline independently.",

    tags:[
        "media",
        "headlines",
        "bias"
    ]
},

{
    id:28,

    title:"Three Possible Futures",

    theme:"Decision Making",

    duration:"15 min",

    grade:[9,10,11],

    objective:"Students explore multiple possible outcomes before acting.",

    bigIdea:"Every decision creates different future possibilities.",

    provocationType:"Video",

    provocationTitle:"Future Paths Animation",

    provocationDescription:"Watch a short animation showing how one decision changes future events.",

    provocationLink:"",

    worksheetOutline:"Students choose one current decision and map the Best Case, Most Likely and Worst Case outcomes.",

    teacherPreparation:"Prepare future pathways template.",

    studentInstructions:"Base your predictions on realistic reasoning rather than optimism.",

    thinkingProgression:"Predict → Evaluate → Decide → Reflect",

    selfAwarenessFocus:"Thinking ahead before acting.",

    criticalThinking:[
        "Prediction",
        "Decision Making"
    ],

    atlSkills:[
        "Thinking"
    ],

    learnerProfile:[
        "Thinker",
        "Reflective"
    ],

    thinkingRoutine:"Future Pathways",

    assessment:"Completed pathway map.",

    reflectionQuestion:"Which future is most likely and why?",

    extension:"Review your prediction one month later.",

    tags:[
        "future",
        "planning"
    ]
},

{
    id:29,

    title:"The Emotion Thermometer",

    theme:"Emotional Awareness",

    duration:"15 min",

    grade:[9,10,11],

    objective:"Students identify emotional intensity before reacting.",

    bigIdea:"Recognising emotions early improves self-regulation.",

    provocationType:"Image",

    provocationTitle:"Emotion Thermometer",

    provocationDescription:"Display a thermometer representing increasing emotional intensity.",

    provocationLink:"",

    worksheetOutline:"Students identify recent situations and rate their emotional intensity before analysing their response.",

    teacherPreparation:"Print thermometer worksheet.",

    studentInstructions:"Rate honestly before discussing strategies for responding differently.",

    thinkingProgression:"Recognise → Rate → Analyse → Improve",

    selfAwarenessFocus:"Building emotional awareness.",

    criticalThinking:[
        "Reflection",
        "Analysis"
    ],

    atlSkills:[
        "Self-management"
    ],

    learnerProfile:[
        "Balanced",
        "Reflective"
    ],

    thinkingRoutine:"Notice • Name • Navigate",

    assessment:"Completed emotional reflection.",

    reflectionQuestion:"At what point could you have changed your response?",

    extension:"Use the thermometer for one week.",

    tags:[
        "emotion",
        "self-management"
    ]
},

{
    id:30,

    title:"What Would Future Me Say?",

    theme:"Reflection",

    duration:"15 min",

    grade:[9,10,11],

    objective:"Students evaluate present decisions from the perspective of their future selves.",

    bigIdea:"Future thinking helps improve present choices.",

    provocationType:"Image",

    provocationTitle:"Older and Younger Self",

    provocationDescription:"Display an image comparing younger and older versions of a person.",

    provocationLink:"",

    worksheetOutline:"Students write advice from the perspective of themselves ten years into the future.",

    teacherPreparation:"Prepare reflection template.",

    studentInstructions:"Write honestly from the viewpoint of your future self.",

    thinkingProgression:"Imagine → Advise → Compare → Commit",

    selfAwarenessFocus:"Connecting present behaviour with future goals.",

    criticalThinking:[
        "Reflection",
        "Prediction"
    ],

    atlSkills:[
        "Thinking",
        "Self-management"
    ],

    learnerProfile:[
        "Reflective",
        "Balanced"
    ],

    thinkingRoutine:"Future Self Reflection",

    assessment:"Written reflection.",

    reflectionQuestion:"What advice surprised you the most?",

    extension:"Seal the reflection in an envelope to revisit next year.",

    tags:[
        "future self",
        "reflection",
        "goals"
    ]
}
,
{
    id:31,

    title:"The Feedback Mirror",

    theme:"Growth Mindset",

    duration:"15 min",

    grade:[9,10,11],

    objective:"Students examine how they respond to feedback and identify patterns in their reactions.",

    bigIdea:"Feedback reveals opportunities for growth when we choose to listen.",

    provocationType:"Video",

    provocationTitle:"Receiving Feedback",

    provocationDescription:"Show a short clip of two people receiving identical feedback but responding differently.",

    provocationLink:"",

    worksheetOutline:"Students recall recent feedback, record their first reaction, identify why they reacted that way and how they could respond differently.",

    teacherPreparation:"Prepare a short video or role-play.",

    studentInstructions:"Complete the reflection individually before discussing strategies with a partner.",

    thinkingProgression:"Recall → Analyse → Reframe → Commit",

    selfAwarenessFocus:"Understanding emotional responses to feedback.",

    criticalThinking:[
        "Reflection",
        "Metacognition"
    ],

    atlSkills:[
        "Self-management",
        "Communication"
    ],

    learnerProfile:[
        "Reflective",
        "Balanced"
    ],

    thinkingRoutine:"Notice • Reflect • Improve",

    assessment:"Completed reflection worksheet.",

    reflectionQuestion:"Why did that feedback affect you so strongly?",

    extension:"Request one new piece of feedback this week.",

    tags:[
        "feedback",
        "growth",
        "reflection"
    ]
},

{
    id:32,

    title:"The Habit Loop",

    theme:"Behaviour",

    duration:"15 min",

    grade:[9,10,11],

    objective:"Students recognise the triggers behind everyday habits.",

    bigIdea:"Habits are created through repeated patterns.",

    provocationType:"Image",

    provocationTitle:"Habit Loop Diagram",

    provocationDescription:"Introduce the Cue → Routine → Reward model using a simple infographic.",

    provocationLink:"",

    worksheetOutline:"Students analyse one personal habit using the Habit Loop framework.",

    teacherPreparation:"Prepare the infographic.",

    studentInstructions:"Choose one positive or negative habit and identify its cue, routine and reward.",

    thinkingProgression:"Identify → Analyse → Improve → Reflect",

    selfAwarenessFocus:"Recognising automatic behaviours.",

    criticalThinking:[
        "Analysis",
        "Reflection"
    ],

    atlSkills:[
        "Self-management",
        "Thinking"
    ],

    learnerProfile:[
        "Balanced",
        "Reflective"
    ],

    thinkingRoutine:"Cue • Routine • Reward",

    assessment:"Completed habit analysis.",

    reflectionQuestion:"Which part of your habit loop is easiest to change?",

    extension:"Track one habit for seven days.",

    tags:[
        "habits",
        "behaviour"
    ]
},

{
    id:33,

    title:"Listening to Understand",

    theme:"Communication",

    duration:"15 min",

    grade:[9,10,11],

    objective:"Students distinguish listening to understand from listening to reply.",

    bigIdea:"Effective communication begins with genuine listening.",

    provocationType:"Video",

    provocationTitle:"Poor Listening Examples",

    provocationDescription:"Watch a short skit demonstrating ineffective listening.",

    provocationLink:"",

    worksheetOutline:"Students identify listening behaviours before practising active listening with a partner.",

    teacherPreparation:"Prepare video and discussion prompts.",

    studentInstructions:"Take turns listening without interrupting before summarising your partner's ideas.",

    thinkingProgression:"Observe → Practise → Reflect → Improve",

    selfAwarenessFocus:"Monitoring personal listening habits.",

    criticalThinking:[
        "Perspective",
        "Communication"
    ],

    atlSkills:[
        "Communication",
        "Social"
    ],

    learnerProfile:[
        "Communicator",
        "Caring"
    ],

    thinkingRoutine:"Listen • Summarise • Clarify",

    assessment:"Peer feedback.",

    reflectionQuestion:"How often were you preparing your response instead of listening?",

    extension:"Practise active listening during another class.",

    tags:[
        "communication",
        "listening"
    ]
},

{
    id:34,

    title:"The Confidence–Competence Matrix",

    theme:"Self Awareness",

    duration:"15 min",

    grade:[9,10,11],

    objective:"Students compare their confidence with their actual competence.",

    bigIdea:"Confidence and ability do not always develop together.",

    provocationType:"Image",

    provocationTitle:"Confidence vs Competence Matrix",

    provocationDescription:"Display a four-quadrant matrix showing confidence and competence.",

    provocationLink:"",

    worksheetOutline:"Students place themselves on the matrix across different skills before planning one improvement.",

    teacherPreparation:"Print matrix template.",

    studentInstructions:"Rate yourself honestly and justify each placement.",

    thinkingProgression:"Assess → Compare → Plan → Reflect",

    selfAwarenessFocus:"Developing accurate self-perception.",

    criticalThinking:[
        "Evaluation",
        "Reflection"
    ],

    atlSkills:[
        "Self-management",
        "Thinking"
    ],

    learnerProfile:[
        "Reflective",
        "Balanced"
    ],

    thinkingRoutine:"Self Assessment Matrix",

    assessment:"Completed matrix.",

    reflectionQuestion:"Where do confidence and competence differ most?",

    extension:"Repeat after one semester.",

    tags:[
        "confidence",
        "competence"
    ]
},

{
    id:35,

    title:"Personal Mission Statement",

    theme:"Purpose",

    duration:"15 min",

    grade:[9,10,11],

    objective:"Students articulate a short personal mission statement.",

    bigIdea:"Knowing your purpose guides future decisions.",

    provocationType:"Quote",

    provocationTitle:"Purpose Quotes",

    provocationDescription:"Display several quotes about purpose from well-known individuals.",

    provocationLink:"",

    worksheetOutline:"Students identify personal strengths, values and aspirations before drafting a one-sentence mission statement.",

    teacherPreparation:"Prepare quotation slides.",

    studentInstructions:"Draft, revise and refine a mission statement that reflects who you want to become.",

    thinkingProgression:"Reflect → Identify → Draft → Refine",

    selfAwarenessFocus:"Clarifying identity and purpose.",

    criticalThinking:[
        "Reflection",
        "Synthesis"
    ],

    atlSkills:[
        "Thinking",
        "Self-management"
    ],

    learnerProfile:[
        "Reflective",
        "Principled"
    ],

    thinkingRoutine:"Identify • Prioritise • Synthesize",

    assessment:"Completed mission statement.",

    reflectionQuestion:"What do you want people to remember about you?",

    extension:"Review and revise your mission statement every semester.",

    tags:[
        "purpose",
        "identity",
        "goals"
    ]
}
,
{
    id:41,

    title:"My Personal Algorithm",

    theme:"Decision Making",

    duration:"15 min",

    grade:[9,10,11],

    objective:"Students identify the hidden process they use when making everyday decisions.",

    bigIdea:"Everyone follows an internal decision-making algorithm, even if they are unaware of it.",

    provocationType:"Video",

    provocationTitle:"Robot Following Instructions",

    provocationDescription:"Show a humorous video of a robot following instructions literally before discussing how humans also follow internal 'algorithms'.",

    provocationLink:"",

    worksheetOutline:"Students map the steps they usually follow before making an important decision and identify where emotions, values and assumptions enter the process.",

    teacherPreparation:"Prepare short robot or AI clip.",

    studentInstructions:"Choose a recent decision and write every thinking step that occurred before acting.",

    thinkingProgression:"Recall → Deconstruct → Analyse → Improve",

    selfAwarenessFocus:"Understanding personal decision-making habits.",

    criticalThinking:[
        "Decision Making",
        "Metacognition"
    ],

    atlSkills:[
        "Thinking",
        "Self-management"
    ],

    learnerProfile:[
        "Thinker",
        "Reflective"
    ],

    thinkingRoutine:"Think Aloud",

    assessment:"Completed decision algorithm.",

    reflectionQuestion:"Which step of your thinking process needs improvement?",

    extension:"Compare algorithms with a partner.",

    tags:[
        "decision making",
        "thinking process",
        "metacognition"
    ]
},

{
    id:42,

    title:"Identity Through Objects",

    theme:"Identity",

    duration:"15 min",

    grade:[9,10,11],

    objective:"Students explore how everyday objects represent aspects of identity.",

    bigIdea:"Objects often reveal values, memories and experiences.",

    provocationType:"Image",

    provocationTitle:"Everyday Backpack Contents",

    provocationDescription:"Display the contents of an anonymous backpack and ask students what they can infer about the owner.",

    provocationLink:"",

    worksheetOutline:"Students choose three personal objects and explain what each reveals about who they are.",

    teacherPreparation:"Prepare backpack photograph.",

    studentInstructions:"Focus on meaning rather than monetary value.",

    thinkingProgression:"Observe → Infer → Connect → Reflect",

    selfAwarenessFocus:"Recognising identity through everyday choices.",

    criticalThinking:[
        "Inference",
        "Reflection"
    ],

    atlSkills:[
        "Communication",
        "Thinking"
    ],

    learnerProfile:[
        "Reflective",
        "Open-minded"
    ],

    thinkingRoutine:"Parts • Purpose • Complexity",

    assessment:"Completed object reflection.",

    reflectionQuestion:"Which object best represents you and why?",

    extension:"Create a digital identity museum.",

    tags:[
        "identity",
        "objects"
    ]
},

{
    id:43,

    title:"My Thinking Traps",

    theme:"Bias",

    duration:"15 min",

    grade:[9,10,11],

    objective:"Students identify common thinking traps they experience.",

    bigIdea:"Recognising cognitive errors improves judgement.",

    provocationType:"Comic",

    provocationTitle:"Funny Thinking Errors",

    provocationDescription:"Students analyse simple comics illustrating common reasoning mistakes.",

    provocationLink:"",

    worksheetOutline:"Students identify which thinking trap appears most frequently in their own thinking.",

    teacherPreparation:"Prepare four simple comics.",

    studentInstructions:"Choose examples honestly without worrying about right or wrong answers.",

    thinkingProgression:"Recognise → Classify → Reflect → Improve",

    selfAwarenessFocus:"Recognising recurring thinking habits.",

    criticalThinking:[
        "Bias Recognition",
        "Metacognition"
    ],

    atlSkills:[
        "Thinking"
    ],

    learnerProfile:[
        "Reflective",
        "Thinker"
    ],

    thinkingRoutine:"Notice • Name • Reflect",

    assessment:"Completed bias profile.",

    reflectionQuestion:"Which thinking trap do you fall into most often?",

    extension:"Track examples during the following week.",

    tags:[
        "bias",
        "thinking traps"
    ]
},

{
    id:44,

    title:"The Influence Timeline",

    theme:"Identity",

    duration:"15 min",

    grade:[9,10,11],

    objective:"Students examine how different influences have shaped their beliefs over time.",

    bigIdea:"Identity develops through continual interaction with people and experiences.",

    provocationType:"Image",

    provocationTitle:"Growing Tree Rings",

    provocationDescription:"Use tree rings as a metaphor for experiences shaping identity over time.",

    provocationLink:"",

    worksheetOutline:"Students build a timeline showing major influences at different stages of life.",

    teacherPreparation:"Prepare timeline template.",

    studentInstructions:"Identify positive and challenging influences.",

    thinkingProgression:"Recall → Sequence → Analyse → Reflect",

    selfAwarenessFocus:"Understanding identity development.",

    criticalThinking:[
        "Analysis",
        "Connection"
    ],

    atlSkills:[
        "Thinking",
        "Communication"
    ],

    learnerProfile:[
        "Reflective",
        "Balanced"
    ],

    thinkingRoutine:"Timeline Reflection",

    assessment:"Completed influence timeline.",

    reflectionQuestion:"Which influence still affects your decisions today?",

    extension:"Update annually.",

    tags:[
        "identity",
        "timeline"
    ]
},

{
    id:45,

    title:"Strengths Under Pressure",

    theme:"Strengths",

    duration:"15 min",

    grade:[9,10,11],

    objective:"Students identify strengths they naturally rely on during challenging situations.",

    bigIdea:"Pressure often reveals our authentic strengths.",

    provocationType:"Video",

    provocationTitle:"Athlete Under Pressure",

    provocationDescription:"Watch a short sporting moment where an athlete performs under pressure.",

    provocationLink:"",

    worksheetOutline:"Students reflect on a difficult situation and identify strengths they demonstrated.",

    teacherPreparation:"Prepare a sports or leadership clip.",

    studentInstructions:"Describe the situation before identifying strengths.",

    thinkingProgression:"Recall → Identify → Evaluate → Appreciate",

    selfAwarenessFocus:"Recognising personal strengths.",

    criticalThinking:[
        "Reflection",
        "Evaluation"
    ],

    atlSkills:[
        "Self-management"
    ],

    learnerProfile:[
        "Balanced",
        "Reflective"
    ],

    thinkingRoutine:"Success Analysis",

    assessment:"Reflection worksheet.",

    reflectionQuestion:"Which strength surprised you the most?",

    extension:"Ask classmates what strengths they see in you.",

    tags:[
        "strengths",
        "reflection"
    ]
},

{
    id:46,

    title:"The Advice I Would Give",

    theme:"Reflection",

    duration:"15 min",

    grade:[9,10,11],

    objective:"Students discover personal wisdom by advising someone else.",

    bigIdea:"Advice we give others often reflects what we need ourselves.",

    provocationType:"Scenario",

    provocationTitle:"Advice Column",

    provocationDescription:"Students read a fictional dilemma from another teenager.",

    provocationLink:"",

    worksheetOutline:"Students write advice before reflecting on whether they follow it themselves.",

    teacherPreparation:"Prepare scenario cards.",

    studentInstructions:"Write advice honestly before completing the self-reflection.",

    thinkingProgression:"Advise → Compare → Reflect → Commit",

    selfAwarenessFocus:"Recognising gaps between beliefs and actions.",

    criticalThinking:[
        "Reflection",
        "Application"
    ],

    atlSkills:[
        "Thinking",
        "Communication"
    ],

    learnerProfile:[
        "Principled",
        "Reflective"
    ],

    thinkingRoutine:"Advice Reflection",

    assessment:"Completed worksheet.",

    reflectionQuestion:"Would you follow your own advice?",

    extension:"Revisit the advice after one month.",

    tags:[
        "reflection",
        "values"
    ]
},

{
    id:47,

    title:"What Really Matters?",

    theme:"Values",

    duration:"15 min",

    grade:[9,10,11],

    objective:"Students distinguish wants from genuine priorities.",

    bigIdea:"Priorities become clearer when resources are limited.",

    provocationType:"Image",

    provocationTitle:"Backpack Before a Journey",

    provocationDescription:"Students imagine they can pack only five things for an unknown journey.",

    provocationLink:"",

    worksheetOutline:"Students justify each item before identifying the underlying value represented.",

    teacherPreparation:"Prepare journey scenario.",

    studentInstructions:"Explain every choice using values rather than usefulness alone.",

    thinkingProgression:"Choose → Justify → Infer → Reflect",

    selfAwarenessFocus:"Clarifying priorities.",

    criticalThinking:[
        "Evaluation",
        "Decision Making"
    ],

    atlSkills:[
        "Thinking"
    ],

    learnerProfile:[
        "Reflective",
        "Principled"
    ],

    thinkingRoutine:"Choose • Justify",

    assessment:"Completed worksheet.",

    reflectionQuestion:"What value appeared most often?",

    extension:"Repeat with different scenarios.",

    tags:[
        "values",
        "priorities"
    ]
},

{
    id:48,

    title:"Rewriting the Narrative",

    theme:"Growth",

    duration:"15 min",

    grade:[9,10,11],

    objective:"Students practise reframing setbacks as learning experiences.",

    bigIdea:"Meaning depends on how we interpret experiences.",

    provocationType:"Video",

    provocationTitle:"Failure Before Success",

    provocationDescription:"Watch a short biography highlighting setbacks before achievement.",

    provocationLink:"",

    worksheetOutline:"Students rewrite one personal setback from a growth perspective.",

    teacherPreparation:"Prepare short biography clip.",

    studentInstructions:"Describe the event, what was learned and how it influenced future actions.",

    thinkingProgression:"Recall → Reframe → Reflect → Apply",

    selfAwarenessFocus:"Developing resilience.",

    criticalThinking:[
        "Reflection",
        "Reframing"
    ],

    atlSkills:[
        "Self-management",
        "Thinking"
    ],

    learnerProfile:[
        "Risk-taker",
        "Reflective"
    ],

    thinkingRoutine:"I Used to Think... Now I Think...",

    assessment:"Written reflection.",

    reflectionQuestion:"How has this experience changed you?",

    extension:"Interview someone about overcoming failure.",

    tags:[
        "growth",
        "mindset"
    ]
},

{
    id:49,

    title:"Personal Compass",

    theme:"Purpose",

    duration:"15 min",

    grade:[9,10,11],

    objective:"Students identify principles that guide everyday decisions.",

    bigIdea:"Strong principles provide direction during uncertainty.",

    provocationType:"Image",

    provocationTitle:"Compass",

    provocationDescription:"Use a compass as a metaphor for personal direction.",

    provocationLink:"",

    worksheetOutline:"Students identify four principles that guide their choices and provide evidence for each.",

    teacherPreparation:"Prepare compass worksheet.",

    studentInstructions:"Support every principle with a real example.",

    thinkingProgression:"Identify → Justify → Reflect → Commit",

    selfAwarenessFocus:"Recognising guiding principles.",

    criticalThinking:[
        "Justification",
        "Reflection"
    ],

    atlSkills:[
        "Thinking",
        "Self-management"
    ],

    learnerProfile:[
        "Principled",
        "Reflective"
    ],

    thinkingRoutine:"Compass Points",

    assessment:"Completed compass.",

    reflectionQuestion:"Which principle is most difficult to follow consistently?",

    extension:"Review your compass every term.",

    tags:[
        "purpose",
        "principles"
    ]
},

{
    id:50,

    title:"The Year in Review",

    theme:"Reflection",

    duration:"15 min",

    grade:[9,10,11],

    objective:"Students synthesise learning about themselves over the course of the year.",

    bigIdea:"Reflection transforms experiences into personal growth.",

    provocationType:"Photo Collage",

    provocationTitle:"Moments from the School Year",

    provocationDescription:"Display a collage of memorable school moments to trigger reflection.",

    provocationLink:"",

    worksheetOutline:"Students complete a structured reflection reviewing challenges, successes, values, habits, relationships and future goals.",

    teacherPreparation:"Collect school photographs or symbolic images.",

    studentInstructions:"Complete every section before writing one commitment for next year.",

    thinkingProgression:"Recall → Analyse → Synthesize → Commit",

    selfAwarenessFocus:"Developing long-term self-awareness.",

    criticalThinking:[
        "Reflection",
        "Synthesis",
        "Evaluation"
    ],

    atlSkills:[
        "Thinking",
        "Self-management",
        "Communication"
    ],

    learnerProfile:[
        "Reflective",
        "Balanced",
        "Principled"
    ],

    thinkingRoutine:"Looking Back • Looking Forward",

    assessment:"End-of-year reflection portfolio.",

    reflectionQuestion:"How have you changed as a thinker this year?",

    extension:"Seal the reflection and revisit it next year.",

    tags:[
        "reflection",
        "growth",
        "self-awareness"
    ]
}

];
