class ApiService {
    _api = 'https://yalantis-react-school-api.yalantis.com';

    async getResource(url) {
        const res = await fetch(`${this._api}${url}`);
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` +
                `, received ${res.status}`);
        }
        return await res.json();
    }

    async getUsers () {
        return await this.getResource('/api/task0/users/');
    }
}

export default new ApiService();
