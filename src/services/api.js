import http from '../httpsCommon';

const getAll = () => {
    return http.get(`/`);
};

const create = data => {
    return http.post("/", data);
};

const get = id => {
    return http.get(`/${id}` )
};

const update = (id, data) => {
    return http.put(`/${id}`, data);
};
  
const remove = id => {
    return http.delete(`/${id}`)
}

const exportedObject = {
    getAll,
    create,
    get,
    update,
    remove,
};

export default exportedObject;
  