const fond2 = new Proxy({"src":"/_astro/fond2.Bs96LYuP.webp","width":1728,"height":1117,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Ethan/Documents/MMI2/Portfolio/ethanhennequindemeyer/src/assets/fond2.webp";
							}
							
							return target[name];
						}
					});

export { fond2 as f };
