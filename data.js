export var images = {
	1: {
		"image": "1_Response.png"
	},
	2: {
		"image": "1_Condition.png"
	},
	3: {
		"image": "1_Milestone.png"
	},
	4: {
		"image": "1_Exclude.png"
	},
	5: {
		"image": "1_Include.png"
	},
	6: {
		"image": "2_Response.png"
	},
	7: {
		"image": "2_Condition.png"
	},
	8: {
		"image": "2_Milestone.png"
	},
	9: {
		"image": "2_Exclude.png"
	},
	10: {
		"image": "2_Include.png"
	},

}

var imagesIndex = Object.keys(images);
export var shuffledImages = imagesIndex.sort((a, b) => 0.5 - Math.random());

export var answers = {
	1: "Initially you decide to cook a dish without using oil. I.e. you decide to <b><u>exclude</u></b> using oil.",
	2: "Before cooking the dish, you need to prepare the ingredients. I.e. <b><u>You need</u></b> to prepare the ingredients first <b><u>before</u></b> cooking the dish.",
	3: "Once you have prepared the ingredients, cooking the dish becomes <b><u>a goal that you must eventually do</u></b>.",
	4: "The pan you are using is an old pan, and you decide to use oil after all. I.e. you decide to <b><u>include</u></b> using oil.",
	5: "You can <b><u>initially</u></b> start to cook. If another person is using the stove then that is a <b><u>goal that must be done</u></b> before you can start cooking.",
	6: "No description fits"
}

export var pages = {
	"start": {
		"title": "Hi.",
		"button": "CONTINUE"
	},
	"about": {
		"title": "ABOUT",
		"text": "My name is Dung M. T. Trinh and I am a bachelor student at Technical University of Denmark (DTU). <br> <br> As part of my bachelor project, I am conducting a survey as one of my studies. The purpose of this survey is to investigate the understanding of the <b><i>visual representation of relations</i></b> with its intended meaning for Dynamic Condition Response (DCR) graphs.",
		"button": "CONTINUE"
	},
	// "instructions": {
	// 	"title": "INSTRUCTIONS",
	// 	"text": "Before the survey begins you will need to know about <b><i>events</i></b> and <b><i>relations</i></b>.<ul><li>An <b><i>event</i></b>, which is visualized by a rounded square, represents something that can happen.</li><li>A <b><i>relation</i></b> represents a relationship between two events.</li></ul>In a moment, you will be shown an image of a relation between two events (As the image below). Furthermore, you will be shown 6 different descriptions. Your task is to choose the description that you think most accurately describes the relation in the image. If no description fits, then click \"No description fits\".",
	// 	"text_events":"To easier refer to an event, the descriptions will refer to one event as <b><i>A</i></b> and the other event as <b><i>B</i></b>. A description can therefore look like <i>\"If A ... then B...\"</i><br>The events shown in the image will not be referred to as A or B, but instead as two icons (spades and diamond) (i.e. the icons in the events has no meaning. They only indicate that the two events are different from each other).",
	// 	"button": "CONTINUE"
	// },
	"dcr": {
		"title": "Dynamic Condition Response (DCR)",
		"text": "Before the survey begins you will need to know about <b><i>events</i></b> and <b><i>relations</i></b> in DCR.<ul><li>An <b><i>event</i></b>, which is visualized by a rounded square, represents something that can happen.</li><li>A <b><i>relation</i></b> represents a relationship between two events. The relations in DCR are like constraints that you can apply to the events in order to remove undesired behavior in a process. </li></ul>",
		"text_image": "In the image above the <b><i>events</i></b> are indicated as a spade and a diamond. The icons in itself do not have any meaning, but indicate that the two events are different from each other.<br>The <b><i>relation</i></b> is indicated by the continuous connection between the two events. <br><br> To easier understand the concept of DCR relations, let us use an example.",
		"button": "CONTINUE"
	},
	"example": {
		"title": "EXAMPLE",
		"text": "<b>Please read the following carefully and thoroughly</b>.<br><br> Imagine you are getting ready to cook dinner. These are the 5 constraints you are applying.<br><br><br>" ,
		// "text_events":"To easier refer to an event, the descriptions will refer to one event as <b><i>A</i></b> and the other event as <b><i>B</i></b>. A description can therefore look like <i>\"If A ... then B...\"</i><br>The events shown in the image will not be referred to as A or B, but instead as two icons (spades and diamond) (i.e. the icons in the events has no meaning. They only indicate that the two events are different from each other).",

		"text_exclude": "<hr>- Initially you decide to cook a dish without using oil. I.e. you decide to <b><u>exclude</u></b> using oil.",
		"text_condition": "<hr>- Before cooking the dish, you need to prepare the ingredients. I.e. <b><u>You need</u></b> to prepare the ingredients first <b><u>before</u></b> cooking the dish.",
		"text_response": "<hr>- Once you have prepared the ingredients, cooking the dish becomes <b><u>a goal that you must eventually do</u></b>.",
		"text_include": "<hr>- The pan you are using is an old pan, and you decide to use oil after all. I.e. you decide to <b><u>include</u></b> using oil.",
		"text_milestone": "<hr>- You can <b><u>initially</u></b> start to cook, but if someone else is using the stove, then you cannot start cooking until they are done with the stove. I.e. If another person is using the stove then that is a <b><u>goal that must be done</u></b> before you can start cooking.<hr>",
		// "text_relations": "<ul><li>You decide to cook a dish without using oil. I.e. you decide to <b><u>exclude</u></b> using oil.</li><li>Before cooking the dish, you need to prepare the ingredients. I.e. <b><u>You need</u></b> to prepare the ingredients first <b><u>before</u></b> cooking the dish.</li><li>Once you have prepared the ingredients, cooking the dish becomes <b><u>a goal that you must eventually do</u></b>.</li><li>The pan you are using is an old pan, and you decide to use oil after all. I.e. you decide to <b><u>include</u></b> using oil.</li><li>You can initially start to cook, but if someone else is using the stove, then you cannot start cooking until they are done with the stove.</li></ul>",

		"text_end": "In a moment, you will be shown an image of a relation between two events (As the image below). Furthermore, you will be shown 6 different descriptions. Your task is to choose the description that you think most accurately describes the relation in the image. If no description fits, then click \"No description fits\".",
		"button": "CONTINUE"
	},
	"instructions":{
		"title": "INSTRUCTIONS",
		"text":"In a moment, you will be shown an image of a relation between two events (As the image above). Furthermore, you will be shown 6 different descriptions where 5 of them are as the previous example. Your task is to choose the description that you think most accurately describes the relation in the image. If no description fits, then click \"No description fits\". <br><br>Remember that the descriptions are based on an example but try to think of these in a more general sense. <br> <br>It is important to know that there are in total 10 relations, which means that a description can be applied to several relations.",
		"button": "CONTINUE"
	},
	"instructions2":{
		"text":"<b>Please, do not speak or otherwise interact with other people during this survey. <br><br> Try to answer each question independently of the previous question.</b>",
		"button": "START"
	},
	"questions":{
		"text_task":"Which of the following descriptions most accurately describes the relation in the image?",
		"tooltip":"\"Events\": Something that can happen (The two rounded squares). <br> <br> \"Relation\": The relationship and connection between the two events.",
		"button": "Next"
	},
	"demographics":{
		"text":"<b>For the purpose of this research, please fill in the demographics information below.",
		"button": "SUBMIT"
	},
	"thanks":{
		"title": "THANK YOU",
		"text":"<b>Your answers have been submitted.",
	},
}

export var demographics_form = [
	{
		"label":"E-mail",
		"type":"email",
		"placeholder":"abc@mail.com",
		"required": true,
		"tooltip":"This will only be used for statistical purposes. It will not be used for marketing or communication"
	},
	{
		"label":"Age",
		"type":"text",
		"placeholder": "21",
		"required": true,
		"regex":/^100$|^[1-9]\d?$|^$/
	},
	{
		"label":"Gender",
		"type":"radio",
		"options":["Male", "Female", "Other"],
		"required": true
	},
	{
		"label":"Ethnicity",
		"type":"text",
		"placeholder":"Danish and Vietnamese",
		"required": true,
		"tooltip":"Country of cultural membership"
	},
	{
		"label":"Nationality",
		"type":"text",
		"placeholder":"Denmark",
		"required": true,
		"tooltip":"Country of citizenship"
	},
	{
		"label":"Education",
		"type":"text",
		"placeholder":"BSc in Software Technology",
		"required": true,
		"tooltip":"Current program attending or highest degree achieved"
	},
	{
		"label":"Occupation",
		"type":"text",
		"placeholder":"Engineering student",
		"required": true,
		"tooltip":"Professional field and title"
	}
]