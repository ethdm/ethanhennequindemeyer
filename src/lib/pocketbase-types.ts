/**
* This file was @generated using pocketbase-typegen
*/

import type PocketBase from 'pocketbase'
import type { RecordService } from 'pocketbase'

export enum Collections {
	Authorigins = "_authOrigins",
	Externalauths = "_externalAuths",
	Mfas = "_mfas",
	Otps = "_otps",
	Superusers = "_superusers",
	CardAccueil = "card_accueil",
	CardPProjets = "card_p_projets",
	PageProjetClassique = "page_projet_classique",
	PageProjetPhoto = "page_projet_photo",
	Users = "users",
}

// Alias types for improved usability
export type IsoDateString = string
export type IsoAutoDateString = string & { readonly autodate: unique symbol }
export type RecordIdString = string
export type FileNameString = string & { readonly filename: unique symbol }
export type HTMLString = string

type ExpandType<T> = unknown extends T
	? T extends unknown
		? { expand?: unknown }
		: { expand: T }
	: { expand: T }

// System fields
export type BaseSystemFields<T = unknown> = {
	id: RecordIdString
	collectionId: string
	collectionName: Collections
} & ExpandType<T>

export type AuthSystemFields<T = unknown> = {
	email: string
	emailVisibility: boolean
	username: string
	verified: boolean
} & BaseSystemFields<T>

// Record types for each collection

export type AuthoriginsRecord = {
	collectionRef: string
	created: IsoAutoDateString
	fingerprint: string
	id: string
	recordRef: string
	updated: IsoAutoDateString
}

export type ExternalauthsRecord = {
	collectionRef: string
	created: IsoAutoDateString
	id: string
	provider: string
	providerId: string
	recordRef: string
	updated: IsoAutoDateString
}

export type MfasRecord = {
	collectionRef: string
	created: IsoAutoDateString
	id: string
	method: string
	recordRef: string
	updated: IsoAutoDateString
}

export type OtpsRecord = {
	collectionRef: string
	created: IsoAutoDateString
	id: string
	password: string
	recordRef: string
	sentTo?: string
	updated: IsoAutoDateString
}

export type SuperusersRecord = {
	created: IsoAutoDateString
	email: string
	emailVisibility?: boolean
	id: string
	password: string
	tokenKey: string
	updated: IsoAutoDateString
	verified?: boolean
}

export enum CardAccueilCategorieOptions {
	"Photographie" = "Photographie",
	"Évènementiel" = "Évènementiel",
	"Design UX/UI" = "Design UX/UI",
}
export type CardAccueilRecord = {
	categorie?: CardAccueilCategorieOptions
	created: IsoAutoDateString
	date?: string
	id: string
	img?: FileNameString
	titre?: string
	updated: IsoAutoDateString
}

export enum CardPProjetsCategorieOptions {
	"1. Photographie" = "1. Photographie",
	"2. Audiovisuel" = "2. Audiovisuel",
	"3. Évenementiel" = "3. Évenementiel",
	"4. Design graphique & Com'" = "4. Design graphique & Com'",
	"5. Autre" = "5. Autre",
}

export enum CardPProjetsDescOptions {
	"Étude des publics" = "Étude des publics",
	"Accueil des publics" = "Accueil des publics",
	"Communication audiovisuelle" = "Communication audiovisuelle",
	"Communication visuelle et textuelle" = "Communication visuelle et textuelle",
	"Court métrage" = "Court métrage",
	"MAO" = "MAO",
	"Illustration" = "Illustration",
	"Peinture" = "Peinture",
	"Collection / Galerie photo" = "Collection / Galerie photo",
	"Régis caméra sur un  évènement en salle" = "Régis caméra sur un  évènement en salle",
	"Captation d'un concert & création d'un after movie" = "Captation d'un concert & création d'un after movie",
	"Création d'une identité visuelle" = "Création d'une identité visuelle",
	"Branding" = "Branding",
	"Communication" = "Communication",
}
export type CardPProjetsRecord = {
	categorie?: CardPProjetsCategorieOptions
	created: IsoAutoDateString
	date?: string
	desc?: CardPProjetsDescOptions[]
	id: string
	img?: FileNameString
	page_autre?: RecordIdString
	page_photo?: RecordIdString
	titre?: string
	updated: IsoAutoDateString
}

export type PageProjetClassiqueRecord = {
	contenumulti?: FileNameString
	created: IsoAutoDateString
	desc?: string
	fond?: FileNameString
	hero?: FileNameString
	id: string
	ill1?: FileNameString
	ill2?: FileNameString
	ill3?: FileNameString
	ill4?: FileNameString
	imagef?: FileNameString
	minia?: FileNameString
	subtitle?: string
	title?: string
	txt1?: string
	txt2?: string
	txt3?: string
	txt4?: string
	txtmedia?: string
	updated: IsoAutoDateString
	youtube_url?: string
}

export type PageProjetPhotoRecord = {
	created: IsoAutoDateString
	desc?: string
	desccoll1?: string
	desccoll2?: string
	fond?: FileNameString
	fondcoll1?: FileNameString
	fondcoll2?: FileNameString
	hero?: FileNameString
	id: string
	imagef?: FileNameString
	photos?: FileNameString[]
	seriecoll1?: FileNameString[]
	seriecoll2?: FileNameString[]
	subtitle?: string
	title?: string
	titlecoll1?: string
	titlecoll2?: string
	txtfin?: string
	updated: IsoAutoDateString
}

export type UsersRecord = {
	avatar?: FileNameString
	created: IsoAutoDateString
	email: string
	emailVisibility?: boolean
	id: string
	name?: string
	password: string
	tokenKey: string
	updated: IsoAutoDateString
	verified?: boolean
}

// Response types include system fields and match responses from the PocketBase API
export type AuthoriginsResponse<Texpand = unknown> = Required<AuthoriginsRecord> & BaseSystemFields<Texpand>
export type ExternalauthsResponse<Texpand = unknown> = Required<ExternalauthsRecord> & BaseSystemFields<Texpand>
export type MfasResponse<Texpand = unknown> = Required<MfasRecord> & BaseSystemFields<Texpand>
export type OtpsResponse<Texpand = unknown> = Required<OtpsRecord> & BaseSystemFields<Texpand>
export type SuperusersResponse<Texpand = unknown> = Required<SuperusersRecord> & AuthSystemFields<Texpand>
export type CardAccueilResponse<Texpand = unknown> = Required<CardAccueilRecord> & BaseSystemFields<Texpand>
export type CardPProjetsResponse<Texpand = unknown> = Required<CardPProjetsRecord> & BaseSystemFields<Texpand>
export type PageProjetClassiqueResponse<Texpand = unknown> = Required<PageProjetClassiqueRecord> & BaseSystemFields<Texpand>
export type PageProjetPhotoResponse<Texpand = unknown> = Required<PageProjetPhotoRecord> & BaseSystemFields<Texpand>
export type UsersResponse<Texpand = unknown> = Required<UsersRecord> & AuthSystemFields<Texpand>

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
	_authOrigins: AuthoriginsRecord
	_externalAuths: ExternalauthsRecord
	_mfas: MfasRecord
	_otps: OtpsRecord
	_superusers: SuperusersRecord
	card_accueil: CardAccueilRecord
	card_p_projets: CardPProjetsRecord
	page_projet_classique: PageProjetClassiqueRecord
	page_projet_photo: PageProjetPhotoRecord
	users: UsersRecord
}

export type CollectionResponses = {
	_authOrigins: AuthoriginsResponse
	_externalAuths: ExternalauthsResponse
	_mfas: MfasResponse
	_otps: OtpsResponse
	_superusers: SuperusersResponse
	card_accueil: CardAccueilResponse
	card_p_projets: CardPProjetsResponse
	page_projet_classique: PageProjetClassiqueResponse
	page_projet_photo: PageProjetPhotoResponse
	users: UsersResponse
}

// Utility types for create/update operations

type ProcessCreateAndUpdateFields<T> = Omit<{
	// Omit AutoDate fields
	[K in keyof T as Extract<T[K], IsoAutoDateString> extends never ? K : never]: 
		// Convert FileNameString to File
		T[K] extends infer U ? 
			U extends (FileNameString | FileNameString[]) ? 
				U extends any[] ? File[] : File 
			: U
		: never
}, 'id'>

// Create type for Auth collections
export type CreateAuth<T> = {
	id?: RecordIdString
	email: string
	emailVisibility?: boolean
	password: string
	passwordConfirm: string
	verified?: boolean
} & ProcessCreateAndUpdateFields<T>

// Create type for Base collections
export type CreateBase<T> = {
	id?: RecordIdString
} & ProcessCreateAndUpdateFields<T>

// Update type for Auth collections
export type UpdateAuth<T> = Partial<
	Omit<ProcessCreateAndUpdateFields<T>, keyof AuthSystemFields>
> & {
	email?: string
	emailVisibility?: boolean
	oldPassword?: string
	password?: string
	passwordConfirm?: string
	verified?: boolean
}

// Update type for Base collections
export type UpdateBase<T> = Partial<
	Omit<ProcessCreateAndUpdateFields<T>, keyof BaseSystemFields>
>

// Get the correct create type for any collection
export type Create<T extends keyof CollectionResponses> =
	CollectionResponses[T] extends AuthSystemFields
		? CreateAuth<CollectionRecords[T]>
		: CreateBase<CollectionRecords[T]>

// Get the correct update type for any collection
export type Update<T extends keyof CollectionResponses> =
	CollectionResponses[T] extends AuthSystemFields
		? UpdateAuth<CollectionRecords[T]>
		: UpdateBase<CollectionRecords[T]>

// Type for usage with type asserted PocketBase instance
// https://github.com/pocketbase/js-sdk#specify-typescript-definitions

export type TypedPocketBase = {
	collection<T extends keyof CollectionResponses>(
		idOrName: T
	): RecordService<CollectionResponses[T]>
} & PocketBase
