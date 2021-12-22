export type AuthFunction = (email: string, password: string) => void;

// reference: /src/supabase/queries.ts: select property
// Can't use the autogenerated types since I have complex queries.
export type Element = "Anemo" | "Geo" | "Electro" | "Hydro" | "Cryo" | "Pyro" | "Dendro";
export type WeaponType = "Sword" | "Claymore" | "Spear" | "Catalyst" | "Bow";

export type StatValue = { value: number, stat: { abbreviation: string }, };
export type Ascension = 0 | 1 | 2 | 3 | 4 | 5 | 6 ;
export type AscensionValue = { stat?: StatValue, values: number[], };
export type AscensionValueFactor = { ascension?: Ascension, factor: number, };
export type AscensionMultipler = { ascension?: Ascension, multiplier: 0 | 1 | 2 | 3 | 4 };
export type LevelMultiplier = { regression_factors: number[], };

export type Character = {
	id: number,
	name: string,
	rarity: 4 | 5,
	element: Element,
	weapon_type: WeaponType,
	base_hp: StatValue,
	base_atk: StatValue,
	base_def: StatValue,
	ascension_base: StatValue,
	hp_ascension_value: AscensionValue,
	atk_ascension_value: AscensionValue,
	def_ascension_value: AscensionValue,
	level_multiplier: LevelMultiplier,
};

export type Build = { name: string, description: string, };
export type Constellations = 0 | 1 | 2 | 3 | 4 | 5 | 6 ;
export type CharacterCopy = {
	id: number,
	ascension: Ascension,
	level: number,
	constellations: Constellations,
	default_build?: Build,
	copy_of: Character,
};

export type Weapon = {
	id: number,
	name: string,
	description: string,
	rarity: 1 | 2 | 3 | 4 | 5,
	type: WeaponType,
	base_atk: StatValue,
	atk_multiplier: LevelMultiplier,
	atk_ascension: AscensionValue,
	ascension_base: StatValue,
	ascension_level_multiplier: LevelMultiplier,
};

export type Refinement = 1 | 2 | 3 | 4 | 5;
export type WeaponCopy = {
	id: number,
	level: number,
	ascension: Ascension,
	refinement: Refinement,
	copy_of: Weapon,
};

export type Store = {
	// reference: /src/supabase/queries.ts: table property
	Characters: Character[],
	CharacterCopies: CharacterCopy[],
	AscensionValueFactors: AscensionValueFactor[],
	AscensionMultipliers: AscensionMultipler[],
	Weapons: Weapon[],
	WeaponCopies: WeaponCopy[],
};
