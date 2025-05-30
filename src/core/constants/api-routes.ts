const AR_KEYS = {
  AUTH: "auth",
  CEMENTERIO: "cementerio",
  NICHOS: "nichos",
  PROPIETARIOS_NICHOS: "propietarios-nichos",
  PERSON: "personas",
  HUECOS: "huecos-nichos",
  INHUMACIONES: "inhumaciones",
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
  PERSONS: {
    LIST: AR_KEYS.PERSON,
    GET_BY_ID: (id: string) => `${AR_KEYS.PERSON}/${id}`,
    CREATE: AR_KEYS.PERSON,
    UPDATE: (id: string) => `${AR_KEYS.PERSON}/${id}`,
    DELETE: (id: string) => `${AR_KEYS.PERSON}/${id}`,
    SEARCH: (query?: string) => `${AR_KEYS.PERSON}/search?query=${query}`,
  },
  HUECOS: {
    LIST: AR_KEYS.HUECOS,
    GET_BY_ID: (id: string) => `${AR_KEYS.HUECOS}/${id}`,
    GET_BY_NICHO: (idNicho: string) => `${AR_KEYS.HUECOS}/por-nicho/${idNicho}`,
    CREATE: AR_KEYS.HUECOS,
    UPDATE: (id: string) => `${AR_KEYS.HUECOS}/${id}`,
    DELETE: (id: string) => `${AR_KEYS.HUECOS}/${id}`,
  },
  PROPIETARIOS_NICHOS: {
    LIST: AR_KEYS.PROPIETARIOS_NICHOS,
    GET_BY_ID: (id: string) => `${AR_KEYS.PROPIETARIOS_NICHOS}/${id}`,
    GET_BY_NICHO: (idNicho: string) =>
      `${AR_KEYS.PROPIETARIOS_NICHOS}/por-nicho/${idNicho}`,
    GET_BY_PERSONA: (idPersona: string) =>
      `${AR_KEYS.PROPIETARIOS_NICHOS}/persona/${idPersona}`,
    CREATE: AR_KEYS.PROPIETARIOS_NICHOS,
    UPDATE: (id: string) => `${AR_KEYS.PROPIETARIOS_NICHOS}/${id}`,
    DELETE: (id: string) => `${AR_KEYS.PROPIETARIOS_NICHOS}/${id}`,
  },
  INHUMACIONES: {
    LIST: AR_KEYS.INHUMACIONES,
    GET_BY_ID: (id: string) => `${AR_KEYS.INHUMACIONES}/${id}`,
    CREATE: AR_KEYS.INHUMACIONES,
    UPDATE: (id: string) => `${AR_KEYS.INHUMACIONES}/${id}`,
    DELETE: (id: string) => `${AR_KEYS.INHUMACIONES}/${id}`,
  },
};
