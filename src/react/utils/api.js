import Prismic from 'prismic-javascript';

import { BASE_URL } from '../../config/api';

const api = async () => {
    const api = await Prismic.getApi(BASE_URL);

    return api;
}

export default api