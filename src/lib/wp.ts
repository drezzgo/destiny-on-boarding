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
        acf: {paragraph_card_1_how_it_works},
        acf: {title_wpas},
        acf: {paragraph_wpas},
        acf: {paragraph_testimonial_1_wpas},
        acf: {paragraph_testimonial_2_wpas},
        acf: {paragraph_testimonial_3_wpas},
        acf: {name_1_wpas},
        acf: {name_2_wpas},
        acf: {name_3_wpas},
        acf: {job_1_wpas},
        acf: {job_2_wpas},
        acf: {job_3_wpas}
    } = data;
    console.log(data);

    return { title, hero_paragraph, button, text1_how_it_works, subtitle_how_it_works, text_how_it_works, title_card_1_how_it_works, paragraph_card_1_how_it_works, title_wpas, paragraph_wpas, paragraph_testimonial_1_wpas, paragraph_testimonial_2_wpas, paragraph_testimonial_3_wpas, name_1_wpas, name_2_wpas, name_3_wpas, job_1_wpas, job_2_wpas, job_3_wpas };
}