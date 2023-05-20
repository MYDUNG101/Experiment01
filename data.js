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

export var answers = [
	"If <b><i>A</i></b> is executed then <b><i>B</i></b> cannot be executed.",
	"If <b><i>A</i></b> is executed then <b><i>B</i></b> can also be executed.",
	"If <b><i>A</i></b> is executed then <b><i>B</i></b> must eventually also be executed. Until then, <b><i>B</i></b> is pending.",
	"Only if <b><i>A</i></b> is executed then <b><i>B</i></b> can be executed.",
	"If <b><i>A</i></b> is pending then <b><i>B</i></b> cannot be executed.",
	"No description fits"
]

export var pages = {
	"start": {
		"title": "Hi.",
		"button": "CONTINUE"
	},
	"about": {
		"title": "ABOUT",
		"text": "My name is Dung M. T. Trinh and I am a bachelor student at Technical University of Denmark (DTU). I am working under the supervision of my supervisor Associate Professor Hugo A. López and co-supervisor PostDoctoral Researcher Amine A. Andaloussi. <br> <br> As part of my bachelor project, <i>Representations of Relations in Declarative Process Models: Semiotic Considerations and Exploration of Their Impact in Model Understanding.</i>, I am conducting a survey as one of my studies. The purpose of this survey is to investigate the understanding of the <b><i>visual representation of relations</i></b> with its intended meaning.",
		"button": "CONTINUE"
	},
	"instructions": {
		"title": "INSTRUCTIONS",
		"text": "Before the survey begins you will need to know about <b><i>events</i></b> and <b><i>relations</i></b>.<ul><li>An <b><i>event</i></b>, which is visualized by a rounded square, represents something that can happen.</li><li>A <b><i>relation</i></b> represents a relationship between two events.</li></ul>In a moment, you will be shown an image of a relation between two events (As the image below). Furthermore, you will be shown 6 different descriptions. Your task is to choose the description that you think most accurately describes the relation in the image. If no description fits, then click \"No description fits\".",
		"text_events":"To easier refer to an event, the descriptions will refer to one event as <b><i>A</i></b> and the other event as <b><i>B</i></b>. A description can therefore look like <i>\"If A ... then B...\"</i><br>The events shown in the image will not be referred to as A or B, but instead as two icons (spades and diamond) (i.e. the icons in the events has no meaning. They only indicate that the two events are different from each other).",
		"button": "CONTINUE"
	},
	"instructions2":{
		"text":"<b>Please, do not speak or otherwise interact with other people during this survey. <br> <br>It is important to know that a description can be applied to several relations. <br><br> Try to answer each question independently of the previous question.</b>",
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
		"label":"AGE",
		"type":"text",
		"placeholder": "21",
		"required": true,
		"regex":/^100$|^[1-9]\d?$|^$/
	},
	{
		"label":"GENDER",
		"type":"radio",
		"options":["Male", "Female", "Other"],
		"required": true
	},
	{
		"label":"ETHNICITY",
		"type":"text",
		"placeholder":"Danish and Vietnamese",
		"required": true,
		"tooltip":"Country of cultural membership"
	},
	{
		"label":"NATIONALITY",
		"type":"text",
		"placeholder":"Denmark",
		"required": true,
		"tooltip":"Country of citizenship"
	},
	{
		"label":"EDUCATION",
		"type":"text",
		"placeholder":"BSc in Software Technology",
		"required": true,
		"tooltip":"Current program attending or highest degree achieved"
	},
	{
		"label":"OCCUPATION",
		"type":"text",
		"placeholder":"Engineering student",
		"required": true,
		"tooltip":"Professional field and title"
	}
]