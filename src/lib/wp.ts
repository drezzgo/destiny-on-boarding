const domain = import.meta.env.WP_DOMAIN;
const apiUrl = `https://destinyonboard.com/wp-json/wp/v2`; // Cambiado a backticks
const apiUrlAcf = `${domain}/wp-json/acf/v3`;

export const getPageInfo = async (slug: string) => {
    const response = await fetch(`${apiUrl}/pages?slug=${slug}`);
    if (!response.ok) throw new Error('Failed to fetch page info');
    const [data] = await response.json();
    const { 
        title: {rendered: title },
        acf: {hero_paragraph},
        acf: {button},
        acf: {text1_how_it_works},
        acf: {subtitle_how_it_works},
        acf: {text_how_it_works},
        acf: {title_card_1_how_it_works},
        acf: {paragraph_card_1_how_it_works}
    } = data;
    console.log(data);

    return { title, hero_paragraph, button, text1_how_it_works, subtitle_how_it_works, text_how_it_works, title_card_1_how_it_works, paragraph_card_1_how_it_works };
}