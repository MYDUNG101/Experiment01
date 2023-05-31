// export var images = {
// 	1: {
// 		"image": "1_Response.png"
// 	},
// 	2: {
// 		"image": "1_Condition.png"
// 	},
// 	3: {
// 		"image": "1_Milestone.png"
// 	},
// 	4: {
// 		"image": "1_Exclude.png"
// 	},
// 	5: {
// 		"image": "1_Include.png"
// 	},
// 	6: {
// 		"image": "2_Response.png"
// 	},
// 	7: {
// 		"image": "2_Condition.png"
// 	},
// 	8: {
// 		"image": "2_Milestone.png"
// 	},
// 	9: {
// 		"image": "2_Exclude.png"
// 	},
// 	10: {
// 		"image": "2_Include.png"
// 	},

// }

export var images = {
	1: {
		"image": "test_include.png"
	},
	2: {
		"image": "test_exclude.png"
	},
	3: {
		"image": "test_condition.png"
	},
	4: {
		"image": "test_milestone.png"
	},
	5: {
		"image": "test_response.png"
	},
	6: {
		"image": "test_include.png"
	},
	7: {
		"image": "test_exclude.png"
	},
	8: {
		"image": "test_condition.png"
	},
	9: {
		"image": "test_milestone.png"
	},
	10: {
		"image": "test_response.png"
	},

}

var imagesIndex = Object.keys(images);
export var shuffledImages = imagesIndex.sort((a, b) => 0.5 - Math.random());

export var answers = {
	1: "If you \"Draw card\" then you <b><u>cannot</u></b> \"Eat cake\".",
	2: "In order to \"Eat cake\" you <b><u>need</u></b> to \"Draw card\" at least once",
	3: "If you \"Draw card\" then you are able to \"Eat cake\"; i.e., if you were not able to \"Eat cake\" before and \"Draw card\", then you <b><u>can</u></b> \"Eat cake\" now.",
	4: "If you \"Draw card\" you <b><u>need</u></b> to at some point \"Eat cake\"; i.e., \"Eat cake\" is now <b><u>required</u></b>",
	5: "You can \"Eat cake\" <b><u>unless</u></b> \"Draw card\" is required. If \"Draw card\" is required, then in order to \"Eat cake\" you need to \"Draw card\".",
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
		"text": "There are two types of nodes in DCR grpahs:<ul><li>An <b><i>event</i></b>, which is visualized by a rectangle, represents something that can happen.</li><li>A <b><i>relation</i></b> represents a relationship between two events. The relations in DCR are like constraints that you can apply to the events. </li></ul> In the image example below, the <b><i>events</i></b> are indicated as rectangles, where one event represents \"Drink water\" and the other event represents \"Eat food\". The <b><i>relation</i></b> is indicated by the continuous connection between the two events.",

		"text_pre_markings": "An event can be in a state. The default state of an event is <i>not executed</i>, <i>not pending</i>, and <i>included</i> (see figure below). ",

		"text_markings": "<b>Executed event</b>: An executed event is marked with a green check mark and indicates that the event has happened.<br> E.g. If the event is \"Drink water\", then by adding the green check mark, one has indicated that \"Drink water\" has happened. <br><br> <b>Excluded event</b>: An excluded event is marked with a dashed outline and indicates that the event cannot be executed.<br>E.g. If the event is \"Drink water\", then by having the dashed outline, one has indicated that \"Drink water\" cannot happen.<br><br> <b>Pending event</b>: A pending event is marked with a blue exclamation mark and indicates that the event must eventually happen and is therefore now required.<br>E.g. If the event is \"Drink water\", then by adding the blue exclamation mark, one has indicated that \"Drink water\" must eventually happen.", 

		"text_next": "Following is an example of the use of DCR relations.",
		"button": "CONTINUE"
	},
	"example": {
		"title": "EXAMPLE",
		"text": "In the following you will be presented 5 descriptions. The descriptions explains a type of relation between two events: \"Draw card\" and \"Eat cake\".<br><br><br>" ,

		"text_exclude": "<hr>If you \"Draw card\" then you <b><u>cannot</u></b> \"Eat cake\".",
		
		"text_condition": "<hr>In order to \"Eat cake\" you <b><u>need</u></b> to \"Draw card\" at least once",

		"text_response": "<hr>If you \"Draw card\" you <b><u>need</u></b> to at some point \"Eat cake\"; i.e., \"Eat cake\" is now <b><u>required</u></b>",

		"text_include": "<hr>If you \"Draw card\" then you are able to \"Eat cake\"; i.e., if you were not able to \"Eat cake\" before and \"Draw card\", then you <b><u>can</u></b> \"Eat cake\" now.",

		"text_milestone": "<hr>You can \"Eat cake\" <b><u>unless</u></b> \"Draw card\" is required. If \"Draw card\" is required, then in order to \"Eat cake\" you need to \"Draw card\".<hr>",
		"text_next": "<br><br> Following is the instructions for the survey.",
		"button": "CONTINUE"
	},
	"instructions":{
		"title": "INSTRUCTIONS",
		// "text":"In a moment, you will be shown an image of a relation between two events (like the image above). Below the image, you will be shown 6 different descriptions similar to the ones in the example. Your task is to choose the description that you consider most accurately describes the relation shown in the image. If you consider that no description fits, then choose \"No description fits\". You may choose one description for multiple relations.<br><br>The descriptions are expressed in terms of concrete situations, but try to think of them in a more general sense.",
		"text":"In a moment, you will be shown an image of one type of relation an event and three other events. The three other events may have markings (like the image above).  Below the image, you will be shown 6 different descriptions similar to the ones in the example. Each image will have a highlighted event (red) which is the event that is refered to in the descriptions. Your task is to choose the description that you consider most accurately describes the relation shown in the image. If you consider that no description fits, then choose \"No description fits\". You may choose one description for multiple relations.<br><br>The descriptions are expressed in terms of concrete situations, but try to think of them in a more general sense.",
		"button": "CONTINUE"
	},
	"instructions2":{
		"text":"<b>Please, do not interact with other people during this survey. <br><br> Try to answer each question independently of the previous question.</b>",
		"button": "START"
	},
	"questions":{
		"text_task":"Which of the following descriptions most immediately and accurately describes the symbol for the relation in the image?<br><i>(\"Draw card\" is a general term used to generalize one of the three leftmost events)</i>",
		"tooltip":"\"Events\": Something that can happen (The two rectangles). <br> <br> \"Relation\": The relationship and connection between the two events.",
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