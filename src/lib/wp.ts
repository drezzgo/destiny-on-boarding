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
        acf: {paragraph_testimonial_1},
        acf: {name_testimonial_1},
        acf: {job_testimonial_1},
        acf: {paragraph_testimonial_2},
        acf: {name_testimonial_2},
        acf: {job_testimonial_2},
        acf: {paragraph_testimonial_3},
        acf: {name_testimonial_3},
        acf: {job_testimonial_3},
        acf: {title_pp},
        acf: {paragraph_pp},
        acf: {name_program_1},
        acf: {paragraph_program_1},
        acf: {extend_paragraph_program_1},
        acf: {name_program_2},
        acf: {paragraph_program_2},
        acf: {extend_paragraph_program_2},
        acf: {name_program_3},
        acf: {paragraph_program_3},
        acf: {extend_paragraph_program_3},
        acf: {name_program_4},
        acf: {paragraph_program_4},
        acf: {extend_paragraph_program_4},
        acf: {title_au},
        acf: {paragraph_1_au},
        acf: {paragraph_2_au},
        acf: {paragraph_3_au},
        acf: {text_1_au},
        acf: {text_2_au},
        acf: {text_bold_au},
        acf: {button_au},
    } = data;
    console.log(data);

    return { title, hero_paragraph, button, text1_how_it_works, subtitle_how_it_works, text_how_it_works, title_card_1_how_it_works, paragraph_card_1_how_it_works, title_wpas, paragraph_wpas, paragraph_testimonial_1, name_testimonial_1, job_testimonial_1, paragraph_testimonial_2, name_testimonial_2, job_testimonial_2, paragraph_testimonial_3, name_testimonial_3, job_testimonial_3, title_pp, paragraph_pp, name_program_1, paragraph_program_1, extend_paragraph_program_1, name_program_2, paragraph_program_2, extend_paragraph_program_2, name_program_3, paragraph_program_3, extend_paragraph_program_3, name_program_4, paragraph_program_4, extend_paragraph_program_4, title_au, paragraph_1_au, paragraph_2_au, paragraph_3_au, text_1_au, text_2_au, text_bold_au, button_au};
}