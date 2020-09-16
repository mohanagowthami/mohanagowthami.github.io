
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

export default function pdfGeneration(props) {
    console.log(props, "props")
    const { personalDetails: { name, mobileNumber, email, dateOfBirth, gender, location, }, educationDetails: { college, year, marks, } } = props

    var docDefinition = {
        content: [

            {
                text: 'PERSONAL DETAILS:',
                style: 'subheader'
            },

            `name:  ${name} `,
            `email:  ${email}`,
            `dateOfBirth: ${dateOfBirth}`,
            `gender:  ${gender}`,
            `location: ${location}`,
            {
                text: 'Education Details:',
                style: 'subheader'
            },
            `college: ${college}`,

            `year:  ${year}`,
            `marks:  ${marks}`,






        ],
        styles: {
            header: {
                fontSize: 18,
                bold: true
            },
            subheader: {
                fontSize: 15,
                bold: true
            },
            quote: {
                italics: true
            },
            small: {
                fontSize: 8
            }
        }
    };

    pdfMake.createPdf(docDefinition).open();
}