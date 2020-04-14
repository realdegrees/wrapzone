import { Cookie } from "../@types/cookie";

class Cookies {
    // Default cookies
    private readonly cookie: Cookie = {};

    public atkn = '';
    public rtkn = '';

    public set(key: string, value: string) {
        this.cookie[key] = value;
    }

    public toString() {
        const ret: string[] = [];
        for (let [key, value] of Object.entries(this.cookie)) {
            ret.push(`${key}=${value}`);
        }
        return ret.join(';');
    }
}
export default Cookies;