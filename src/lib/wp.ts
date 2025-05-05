const domain = import.meta.env.WP_DOMAIN;
const apiUrl = `${domain}/wp-json/wp/v2`; // Cambiado a backticks
const apiUrlAcf = `${domain}/wp-json/acf/v3`;

export const getPageInfo = async (slug: string) => {
    const response = await fetch(`${apiUrl}/pages?slug=${slug}`);
    if (!response.ok) throw new Error('Failed to fetch page info');

    const [data] = await response.json();
    const { 
        title: { rendered: title },
        acf: {hero_parrafo},
        acf: {boton},
        acf: {texto_cm},
        acf: {subtitulo_cm},
        acf: {parrafo_cm},
        acf: {titulo_card_1},
        acf: {texto_card_1},
    } = data;
    console.log(data);

    return { title, hero_parrafo, boton, texto_cm, subtitulo_cm, parrafo_cm, titulo_card_1, texto_card_1};
};