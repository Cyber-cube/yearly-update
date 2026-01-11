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
	async scheduled(controllee, env, ctx) {
		const sendRequest = async (repoName) => {
			await fetch(`https://api.github.com/repos/Cyber-cube/${repoName}/actions/workflows/yearly-update/`, {
				headers: {
					"Accept": "application/vnd.github+json",
					"X-GitHub-Api-Version": "2022-11-28",
					"User-Agent": "Yearly-Updater",
					"Authorization": `Bearer ${env.GH_TOKEN}`,
				}
			})
		}
		const data = {
			1: "13-5",
			2: "0-10",
			3: "30-4",
			4: "12-3",
			5: "14-5",
			18: "21-5",
		}

		const dateAsList = [new Date().getUTCDay(), new Date().getUTCMonth()]
		const date = dateAsList.join("-")

		const keys = Object.keys(data)
		const need = keys.filter(key => data[key] === date)

		if (need.length === 0) {
			return
		}

		need.forEach((repoName) => {
			sendRequest(repoName)
		})

	},
	async fetch(request, env, ctx) {
		const sendRequest = async (repoName) => {
			await fetch(`https://api.github.com/repos/Cyber-cube/${repoName}/actions/workflows/yearly-update/`, {
				headers: {
					"Accept": "application/vnd.github+json",
					"X-GitHub-Api-Version": "2022-11-28",
					"User-Agent": "Yearly-Updater",
					"Authorization": `Bearer ${env.GH_TOKEN}`,
				}
			})
			// return new Response(data)
		}
		const data = {
			1: "13-5",
			2: "0-11",
			3: "30-4",
			4: "12-3",
			5: "14-5",
			18: "21-5",
		}

		const dateAsList = [new Date().getUTCDay(), new Date().getUTCMonth()]
		const date = dateAsList.join("-")

		const keys = Object.keys(data)
		const need = keys.filter(key => data[key] === date)

		if (need.length === 0) {
			return
		}

		need.forEach((repoName) => {
			sendRequest(repoName)
		})
	},
};
