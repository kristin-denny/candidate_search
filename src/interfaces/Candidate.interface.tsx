// TODO: Create an interface for the Candidate objects returned by the API
export default interface Candidate {
    readonly Login: string | null;
    readonly Location: string | null;
    readonly Email: string | null;
    readonly Company: string | null;
    readonly Bio: string | null;
    readonly Avatar_url: string | null;
}
