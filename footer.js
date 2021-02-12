export function render() {
	document.querySelector('.footer').innerHTML=footerAll(data);
}

let data = [
	{
		title: "our relationships",
		content: [
			{
				icon: "people.svg",
				text: "Support the community",
				link: "undefined"
			},
			{
				icon: "badge.svg",
				text: "Become a sponsor",
				link: "undefined"
			},
			{
				icon: "book.svg",
				text: "Our favorite blogs",
				link: "undefined"
			},
			{
				icon: "sunrise.svg",
				text: "What's new",
				link: "undefined"
			}
		]
	},
	{
		title: "resources",
		content: [
			{
				icon: "QA.svg",
				text: "Frequently asked questions",
				link: "undefined"
			},
			{
				icon: "mail.svg",
				text: "Contact",
				link: "undefined"
			},
			{
				icon: "document.svg",
				text: "Terms and conditions",
				link: "undefined"
			},
			{
				icon: "lock.svg",
				text: "Privacy policy",
				link: "undefined"
			}
		]
	},
	{
		title: "our socials",
		content: [
			{
				icon: "camera.svg",
				text: "Instagram",
				link: "https://instagram.com"
			},
			{
				icon: "twitter.png",
				text: "Twitter",
				link: "undefined"
			},
			{
				icon: "facebook.svg",
				text: "Facebook",
				link: "https://www.facebook.com"
			},
			{
				icon: "computer.svg",
				text: "Indiehackers",
				link: "undefined"
			}
		]
	}
]

function smallFooterComponent(data) {
	return `
		<div class="ftSmallComp">
			<img src="footerIcons/${data.icon}">
			<a href=${data.link} class="ftText">${data.text}</a>
		</div>
	`
}

function footerComponent(data) {
	return `
		<div class="ftComp">
			<div class="ftCompTitle">${data.title}</div>
			<div class="ftContent">
				${data.content.map(subData => smallFooterComponent(subData)).join('')}
			</div>
		</div>
	`
}

function footerAll(data) {
	return data.map(subData => footerComponent(subData)).join('');
}


















