/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */


export default {
	async scheduled(controller, env, ctx) {
		const token = env.GH_TOKEN
		const sendRequest = async (repoName, i) => {
			console.log("Hehehehehe")
			await fetch(`https://api.github.com/repos/Cyber-cube/${repoName}/actions/workflows/yearly-update.yml/dispatches`, {
				method: "POST",
				headers: {
					"Accept": "application/vnd.github+json",
					"X-GitHub-Api-Version": "2022-11-28",
					"User-Agent": "Yearly-Updater",
					"Authorization": `Bearer ${token}`,
				},
				body: JSON.stringify({
					ref: "main"
				})
			})
			console.log("Hehehehe2")
			console.log(i, repoName, `https://api.github.com/repos/Cyber-cube/${repoName}/actions/workflows/yearly-update.yml/dispatches`)
			/* const output = await response.text()
			if (response.ok) {
				console.log(output)
			} else {
				console.log(response.status)
			} */
			// console.log(output)
		}
		const data = {
			1: "13-5",
			2: "6-10",
			3: "30-4",
			4: "12-3",
			5: "14-5",
			6: "10-6",
			7: "13-7",
			8: "5-11",
			9: "1-8",
			10: "25-8",
			11: "14-8",
			12: "27-5",
			13: "17-4",
			14: "25-7",
			15: "16-8",
			16: "6-3",
			17: "24-3",
			18: "21-5",
			19: "4-10"
		}

		const dateAsList = [new Date().getUTCDate(), new Date().getUTCMonth()]
		const date = dateAsList.join("-")

		const keys = Object.keys(data)
		const need = keys.filter(key => data[key] === date)
		console.log(need, typeof need, need.length)
		// console.log("Meow", need, date)
		/* if (need.length === 0) {
			return
		} */


		/* const response = await fetch(`https://api.github.com/repos/Cyber-cube/16/actions/workflows/yearly-update.yml/dispatches`, {
			method: "POST",
			headers: {
				"Accept": "application/vnd.github+json",
				"X-GitHub-Api-Version": "2022-11-28",
				"User-Agent": "Yearly-Updater",
				"Authorization": `Bearer ${env.GH_TOKEN}`,
			},
			body: JSON.stringify({
				ref: "main"
			})
		})
		if (response.ok) {
			const output = await response.text()
			console.log(output)
		} else {
			console.log(response.status)
		} */
		need.forEach((repoName, i) => {
			sendRequest(repoName, i)
			console.log("Meow", i, sendRequest, repoName)
		})


	},
	async fetch(request, env, ctx) {
		return new Response("Hello World!")
	},
};
