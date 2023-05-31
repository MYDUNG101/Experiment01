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
	1: "If you \"Draw card\" then you <b><u>cannot</u></b> \"Play black card\".",
	2: "In order to \"Play black card\" you <b><u>need</u></b> to \"Draw card\" at least once",
	3: "If you \"Draw card\" then you are able to \"Play black card\"; i.e., if you were unable to \"Play black card\" before, you can now do so after you \"Draw card\".",
	4: "If you \"Draw card\" you <b><u>need</u></b> to at some point \"Play black card\"; i.e., \"Play black card\" is now <b><u>required</u></b>",
	5: "You can \"Play black card\" <b><u>unless</u></b> \"Draw card\" is required. If \"Draw card\" is required, then in order to \"Play black card\" you need to \"Draw card\" first.",
	6: "No description fits"
}

export var pages = {
	"start": {
		"title": "Hi.",
		"button": "CONTINUE"
	},
	"about": {
		"title": "ABOUT",
		"text": "My name is Dung M. T. Trinh and I am a bachelor student at Technical University of Denmark (DTU). <br> <br> As part of my bachelor project, I am conducting a survey as one of my studies. The purpose of this survey is to investigate the understanding of the <b><i>visual representation of relations</i></b> with its semantic meaning for Dynamic Condition Response (DCR) graphs. <br> <br>Before the survey you will be provided with an explanation and an example of the use of DCR relations. You will also be given instructions on how to complete the survey <br> <br><b>Please read the explanation and instructions thoroughly.</b>.",
		"button": "CONTINUE"
	},
	"dcr": {
		"title": "Dynamic Condition Response (DCR)",
		"text_event": "There are two types of nodes in DCR grpahs:<ul><li>An <b><i>event</i></b>, which is visualized by a rectangle, represents something that can happen. E.g.: \"Draw yellow card\":</li></ul>",

		"text_relation": "<ul><li>A <b><i>relation</i></b> represents a relationship between two events. The relations in DCR are like constraints that you can apply to the events. The relation is indicated by the continuous connection between the two events:</li></ul>",

		"text_pre_markings": "An event can be in a state. The default state of an event is <b><i>not executed</i></b>, <b><i>not pending</i></b>, and <b><i>included</i></b> (see figure below). ",

		"text_markings": "<b>Executed event</b>: An executed event is marked with a green check mark and indicates that the event has happened.<br> E.g. If the event is \"Draw yellow card\", then by adding the green check mark, one has indicated that \"Draw yellow card\" has happened. <br><br> <b>Excluded event</b>: An excluded event is marked with a dashed outline and indicates that the event cannot be executed.<br>E.g. If the event is \"Draw yellow card\", then by having the dashed outline, one has indicated that \"Draw yellow card\" cannot happen.<br><br> <b>Pending event</b>: A pending event is marked with a blue exclamation mark and indicates that the event <u>needs to happen at some point</u> and is therefore now <u>required</u>.<br>E.g. If the event is \"Draw yellow card\", then by adding the blue exclamation mark, one has indicated that \"Draw yellow card\" is <u>required</u> and <u>needs to happen at some point</u>.", 

		"text_next": "<br><br>Following is the instructions for the survey. By continuing it is assumed that you are familiar with the presented concepts about DCR <b><u>(You can take a screenshot if needed)</u></b>.",
		"button": "CONTINUE"
	},
	"example": {
		"title": "EXAMPLE",
		"text": "In the following you will be presented 5 descriptions. The descriptions explains a type of relation between two events: \"Draw card\" and \"Play black card\".<br><br><br>" ,


		"text_next": "<br><br> Following is the instructions for the survey.",
		"button": "CONTINUE"
	},
	"instructions":{
		"title": "INSTRUCTIONS",
		"text":"In a moment, you will be shown an image with one type of relation and four events. Two of the events and the relation between them will be highlighted with red. (See example below)",

		"text_descriptions": "Below the image, you will be shown 6 different descriptions (in no particular order). The text \"Draw card\" in the descriptions is a generic text that applies to all of the events that includes something about drawing a card. However, you should replace \"Draw card\" with the specific text on the highlighted event. For example, in the above image example \"Draw white card\" is highlighted which means that \"Draw card\" in the following descriptions should be replaced with \"Draw white card\".<br><br><b>The descriptions are as follows:</b>",

		"text_exclude": "<hr><ul><li>If you \"Draw card\" then you <b><u>cannot</u></b> \"Play black card\".</li></ul>",
		
		"text_condition": "<hr><ul><li>In order to \"Play black card\" you <b><u>need</u></b> to \"Draw card\" at least once</li></ul>",

		"text_response": "<hr><ul><li>If you \"Draw card\" you <b><u>need</u></b> to at some point \"Play black card\"; i.e., \"Play black card\" is now <b><u>required</u></b></li></ul>",

		"text_include": "<hr><ul><li>If you \"Draw card\" then you are able to \"Play black card\"; i.e., if you were unable to \"Play black card\" before, you can now do so after you \"Draw card\".</li></ul>",

		"text_milestone": "<hr><ul><li>You can \"Play black card\" <b><u>unless</u></b> \"Draw card\" is required. If \"Draw card\" is required, then in order to \"Play black card\" you need to \"Draw card\".</li></ul>",

		"text_none": "<hr><ul><li>No description fits</li></ul><hr>",

		"text_task": "<br><br>Your task is to choose the description that you consider most accurately describes the highlighted relation shown in the image. If you consider that no description fits, then choose \"No description fits\". You may choose one description for multiple relations. The survey does not test your performance (all answers are good answers), but help us identify whether the relations reflects their intended meaning.",

		"button": "CONTINUE"
	},
	"instructions2":{
		"text":"<b>Please, do not interact with other people during this survey. <br><br> Try to answer each question independently of the previous question.</b>",
		"button": "START"
	},
	"questions":{
		"text_task":"Which of the following descriptions most immediately and accurately describes the symbol for the relation in the image?<br><i>(\"Draw card\" is a general term used to generalize the highlighted event that draws a colored card.)</i>",
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