import config from '../config';

const URL_CATEGORIES = `${config.URL_BACKEND_TOP}/categorias`;

async function getAll() {
  return fetch(`${URL_CATEGORIES}`)
    .then(async (respostaDoServidor) => {
      if (respostaDoServidor.ok) {
        const resposta = await respostaDoServidor.json();
        return resposta;
      }

      throw new Error('Não foi possível pegar os dados');
    });
}

async function getAllWithVideos() {
  return fetch(`${URL_CATEGORIES}?_embed=videos`)
    .then(async (respostaDoServidor) => {
      if (respostaDoServidor.ok) {
        const resposta = await respostaDoServidor.json();
        return resposta;
      }

      throw new Error('Não foi possível pegar os dados');
    });
}

async function getCategory(id) {
  return fetch(`${URL_CATEGORIES}/${id}`)
    .then(async (res) => {
      if (res.ok) {
        const response = await res.json();
        return response;
      }
    });
}

async function create(data) {
  return fetch(`${URL_CATEGORIES}?_embed=videos`,
    {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then(async (res) => {
    if (res.ok) {
      const response = await res.json();
      return response;
    }
    throw new Error('Unable to create');
  });
}

async function destroy(id) {
  return fetch(`${URL_CATEGORIES}/${id}`,
    {
      method: 'DELETE',
    })
    .then(async (res) => {
      if (res.ok) {
        const response = await res.json();
        return response;
      }
    });
}

async function update(id, data) {
  return fetch(`${URL_CATEGORIES}/${id}`,
    {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(async (res) => {
      if (res.ok) {
        const response = await res.json();
        return response;
      }
      throw new Error('Can\'t update');
    });
}

export default {
  getAllWithVideos,
  getAll,
  getCategory,
  create,
  destroy,
  update,
};
