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
	1: "At first, you decide to cook a dish without using oil; i.e., you decide to <b><u>exclude</u></b> using oil.",
	2: "You <b><u>need</u></b> to prepare the ingredients <b><u>before</u></b> cooking the dish.",
	3: "Once you have prepared the ingredients, cooking the dish becomes <b><u>a goal </u></b>that you <b><u>must eventually</u></b> do.",
	4: "The pan you are using is an old pan, and you decide to use oil after all; i.e., you decide to <b><u>include</u></b> using oil.",
	5: "If another person is using the stove then that is <b><u>a goal</u></b> that <b><u>must</u></b> be done before you can start cooking.",
	6: "No description fits"
}

export var pages = {
	"start": {
		"title": "Hi.",
		"button": "CONTINUE"
	},
	"about": {
		"title": "ABOUT",
		"text": "My name is Dung M. T. Trinh and I am a bachelor student at Technical University of Denmark (DTU). <br> <br> As part of my bachelor project, I am conducting a survey as one of my studies. The purpose of this survey is to investigate the understanding of the <b><i>visual representation of relations</i></b> with its intended meaning for Dynamic Condition Response (DCR) graphs. <br> <br>Before the survey you will be provided with an explanation and an example of the use of DCR relations. You will also be given instructions on how to complete the survey <br> <br><b>Please read the explanation, example of use and instructions thoroughly.</b>.",
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
		"text": "There are two types of nodes in DCR grpahs:<ul><li>An <b><i>event</i></b>, which is visualized by a rectangle, represents something that can happen.</li><li>A <b><i>relation</i></b> represents a relationship between two events. The relations in DCR are like constraints that you can apply to the events. </li></ul> In the image below, the <b><i>events</i></b> are indicated as rectangles with the symbols of a spade and a diamond. The symbols do not have any meaning, but signify that the two events are different from each other. The <b><i>relation</i></b> is indicated by the continuous connection between the two events. ",
		"text_image": "Following is an example of the use of DCR relations.",
		"button": "CONTINUE"
	},
	"example": {
		"title": "EXAMPLE",
		"text": "Imagine you are getting ready to cook dinner. These are the 5 constraints you are applying.<br><br><br>" ,

		"text_exclude": "<hr>At first, you decide to cook a dish without using oil; i.e., you decide to <b><u>exclude</u></b> using oil.",
		
		"text_condition": "<hr>Before cooking the dish, you need to prepare the ingredients; i.e., you <b><u>need</u></b> to prepare the ingredients <b><u>before</u></b> cooking the dish.",

		"text_response": "<hr>Once you have prepared the ingredients, cooking the dish becomes <b><u>a goal </u></b>that you <b><u>must eventually</u></b> do.",

		"text_include": "<hr>The pan you are using is an old pan, and you decide to use oil after all; i.e., you decide to <b><u>include</u></b> using oil.",

		"text_milestone": "<hr>For cooking the dish, you can always use the stove unless someone else is using it, then you must wait until the they are done using the it; i.e., if another person is using the stove then that is <b><u>a goal</u></b> that <b><u>must</u></b> be done before you can start cooking.<hr>",
		"text_next": "<br><br> Following is the instructions for the survey.",
		"button": "CONTINUE"
	},
	"instructions":{
		"title": "INSTRUCTIONS",
		"text":"In a moment, you will be shown an image of a relation between two events (like the image above). Below the image, you will be shown 6 different descriptions similar to the ones in the example. Your task is to choose the description that you consider most accurately describes the relation shown in the image. If you consider that no description fits, then choose \"No description fits\". You may choose one description for multiple relations.<br><br>The descriptions are expressed in terms of concrete situations, but try to think of them in a more general sense.",
		"button": "CONTINUE"
	},
	"instructions2":{
		"text":"<b>Please, interact with other people during this survey. <br><br> Try to answer each question independently of the previous question.</b>",
		"button": "START"
	},
	"questions":{
		"text_task":"Imagine you are getting ready to cook dinner.<br>Which of the following descriptions most accurately describes the relation in the image?",
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