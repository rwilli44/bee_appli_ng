export interface Hive {
    id: number,
    name: string,
    status: string,
    species: string,
    beeyard_id: number,
    beekeeper_id?: number,
}

export interface HivesResponse {
    results: Hive[] | any;
    next: string | null;
    previous: string | null;
}
