const AR_KEYS = {
  AUTH: "auth",
  CEMENTERIO: "cementerio",
  NICHOS: "nichos",
  PROPIETARIOS_NICHOS: "propietarios-nichos",
  PERSON: "personas",
};

export const API_ROUTES = {
  AUTH: {
    SIGNIN: `${AR_KEYS.AUTH}/login`,
    SIGNUP: `${AR_KEYS.AUTH}/register`,
  },
  CEMENTERIO: {
    LIST: AR_KEYS.CEMENTERIO,
    GET_BY_ID: (id: string) => `${AR_KEYS.CEMENTERIO}/${id}`,
    GET_BY_NAME: (nombre: string) => `${AR_KEYS.CEMENTERIO}/nombre/${nombre}`,
    CREATE: AR_KEYS.CEMENTERIO,
    UPDATE: (id: string) => `${AR_KEYS.CEMENTERIO}/${id}`,
    DELETE: (id: string) => `${AR_KEYS.CEMENTERIO}/${id}`,
  },
  NICHOS: {
    LIST: AR_KEYS.NICHOS,
    GET_BY_ID: (id: string) => `${AR_KEYS.NICHOS}/${id}`,
    CREATE: AR_KEYS.NICHOS,
    UPDATE: (id: string) => `${AR_KEYS.NICHOS}/${id}`,
    DELETE: (id: string) => `${AR_KEYS.NICHOS}/${id}`,
  },
  PROPIETARIOS_NICHOS: {
    LIST: AR_KEYS.PROPIETARIOS_NICHOS,
    GET_BY_ID: (id: string) => `${AR_KEYS.PROPIETARIOS_NICHOS}/${id}`,
    CREATE: AR_KEYS.PROPIETARIOS_NICHOS,
  },
  PERSONS: {
    LIST: AR_KEYS.PERSON,
    GET_BY_ID: (id: string) => `${AR_KEYS.PERSON}/${id}`,
    CREATE: AR_KEYS.PERSON,
    UPDATE: (id: string) => `${AR_KEYS.PERSON}/${id}`,
    DELETE: (id: string) => `${AR_KEYS.PERSON}/${id}`,
  },
};
