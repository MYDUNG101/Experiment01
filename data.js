var answers_white = {
	1: "If you \"Draw white card\" then you <b><u>cannot</u></b> \"Play black card\".", // Exclude
	2: "You <b><u>can only</u></b> \"Play black card\" once you have \"Draw white card\".", // Condition
	3: "If you were unable to \"Play black card\" before, you can now do so after you \"Draw white card\".", // Include
	4: "If you \"Draw white card\" you <b><u>must</u></b> at some point \"Play black card\"", // Response
	5: "If \"Draw white card\" is required, then in order to \"Play black card\" you <b><u>must</u></b> \"Draw white card\" first.", // Milestone
	6: "No description fits"
}

var answers_purple = {
	1: "If you \"Draw purple card\" then you <b><u>cannot</u></b> \"Play black card\".", // Exclude
	2: "You <b><u>can only</u></b> \"Play black card\" once you have \"Draw purple card\".", // Condition
	3: "If you were unable to \"Play black card\" before, you can now do so after you \"Draw purple card\".", // Include
	4: "If you \"Draw purple card\" you <b><u>must</u></b> at some point \"Play black card\"", // Response
	5: "If \"Draw purple card\" is required, then in order to \"Play black card\" you <b><u>must</u></b> \"Draw purple card\" first.", // Milestone
	6: "No description fits"
}

export var images = {
	1: {
		"image": "1_Response.png",
		"answers": answers_white 
	},
	2: {
		"image": "1_Condition.png",
		"answers": answers_white 
	},
	3: {
		"image": "1_Milestone.png",
		"answers": answers_purple 
	},
	4: {
		"image": "1_Exclude.png",
		"answers": answers_white 
	},
	5: {
		"image": "1_Include.png",
		"answers": answers_white 
	},
	6: {
		"image": "2_Response.png",
		"answers": answers_white 
	},
	7: {
		"image": "2_Condition.png",
		"answers": answers_white 
	},
	8: {
		"image": "2_Milestone.png",
		"answers": answers_purple 
	},
	9: {
		"image": "2_Exclude.png",
		"answers": answers_white 
	},
	10: {
		"image": "2_Include.png",
		"answers": answers_white 
	},

}

// export var answers = {
// 	1: "If you \"Draw card\" then you <b><u>cannot</u></b> \"Play black card\".", // Exclude
// 	2: "In order to \"Play black card\" you <b><u>need</u></b> to \"Draw card\" at least once", // Condition
// 	3: "If you \"Draw card\" then you are able to \"Play black card\"; i.e., if you were unable to \"Play black card\" before, you can now do so after you \"Draw card\".", // Include
// 	4: "If you \"Draw card\" you <b><u>need</u></b> to at some point \"Play black card\"; i.e., \"Play black card\" is now <b><u>required</u></b>", // Response
// 	5: "You can \"Play black card\" <b><u>unless</u></b> \"Draw card\" is required. If \"Draw card\" is required, then in order to \"Play black card\" you need to \"Draw card\" first.", // Milestone
// 	6: "No description fits"
// }

export var pages = {
	"start": {
		"title": "Hi.",
		"button": "CONTINUE"
	},
	"about": {
		"title": "ABOUT",
		"text": "My name is Dung M. T. Trinh and I am a bachelor student at Technical University of Denmark (DTU). <br> <br> As part of my bachelor project, I am conducting a survey as one of my studies. The purpose of this survey is to investigate the understanding of the <b><i>visual representation of relations</i></b> with its intended meaning for Dynamic Condition Response (DCR) graphs. <br> <br>Before the survey you will be provided with an explanation to the concept of DCR. You will also be given instructions on how to complete the survey. The survey will take approximately 15-25 minutes (including reading the explanation and instructions).",

		"text_important": "<br><br><b>Please read the explanation and instructions thoroughly.</b>",
		
		"button": "CONTINUE"
	},
	"dcr": {
		"title": "Dynamic Condition Response (DCR)",
		"text_event": "A DCR graph consists of nodes and edges:<ul><li>A node is called an<b><i>event</i></b>, which is visualized by a rectangle, represents something that can happen. E.g.: \"Draw yellow card\":</li></ul>",

		"text_relation": "<ul><li>A <b><i>relation</i></b> represents a relationship between two events. The relation is indicated by a continuous connection between two events. E.g. the following dashed relation could indicate; <i>if I \"Draw yellow card\" then I can never \"Play black card\"</i>:</li></ul>",

		"text_pre_markings": "An event can be in a state (see figure below). ",

		"text_markings": "<b>Executed event</b>: An executed event is marked with a green check mark and indicates that the event has happened.<br> E.g. If the event is \"Draw yellow card\", then by adding the green check mark, one has indicated that \"Draw yellow card\" has happened. <br><br> <b>Excluded event</b>: An excluded event is marked with a dashed outline and indicates that the event cannot be executed.<br>E.g. If the event is \"Draw yellow card\", then by having the dashed outline, one has indicated that \"Draw yellow card\" cannot happen.<br><br> <b>Pending event</b>: A pending event is marked with a blue exclamation mark and indicates that the event <u>must happen</u> and is therefore now <u>required</u>.<br>E.g. If the event is \"Draw yellow card\", then by adding the blue exclamation mark, one has indicated that \"Draw yellow card\" is <u>required</u> and <u>must happen</u>.<br><br> <b>Default event</b>: The default state of an event is <u>not executed</u>, <u>not excluded</u> (i.e. included), and <u>not pending</u>.", 

		"text_next": "<br><br>Following is the instructions for the survey. By continuing it is assumed that you are familiar with the presented concepts about DCR <b><u>(You can take a screenshot of this page if needed)</u></b>.",
		"button": "CONTINUE"
	},

	"instructions":{
		"title": "INSTRUCTIONS",
		"text":"In a moment, you will be shown an image with one type of relation and four events. Two of the events and the relation between them will be highlighted with red. (See example below)",

		"text_descriptions": "Below the image, you will be shown 6 different descriptions (in no particular order). <br><br><b>The descriptions for the example above are as follows:</b>",

		"text_exclude": "<hr><ul><li>If you \"Draw white card\" then you <b><u>cannot</u></b> \"Play black card\".</li></ul>",
		
		"text_condition": "<hr><ul><li>You <b><u>can only</u></b> \"Play black card\" once you have \"Draw white card\".</li></ul>",

		"text_response": "<hr><ul><li>If you \"Draw white card\" you <b><u>must</u></b> at some point \"Play black card\"</li></ul>",

		"text_include": "<hr><ul><li>If you were unable to \"Play black card\" before, you can now do so after you \"Draw white card\".</li></ul>",

		"text_milestone": "<hr><ul><li>If \"Draw white card\" is required, then in order to \"Play black card\" you <b><u>must</u></b> \"Draw white card\" first.</li></ul>",

		"text_none": "<hr><ul><li>No description fits</li></ul><hr>",

		"text_task": "<br><br>Your task is to choose the description that you consider most accurately describes the highlighted relation shown in the image. If you consider that no description fits, then choose \"No description fits\". You may choose one description for multiple images. The survey does not test your performance (all answers are good answers), but help us identify whether the relations reflects their intended meaning.",

		"button": "CONTINUE"
	},
	"instructions2":{
		"text":"<b>Please, do not interact with other people during this survey. <br><br> Try to answer each question independently of the previous question.</b>",
		"button": "START"
	},
	"questions":{
		"text_task":"Which of the following descriptions most immediately and accurately describes the symbol for the relation in the image?",
		"tooltip":"\"Events\": Something that can happen. <br> <br> \"Relation\": The relationship and connection between two events.",
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