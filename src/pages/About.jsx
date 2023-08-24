import { Box, Typography } from "@mui/material";
const About = () => {
  return (
    <Box
      sx={{
        my: 15,
        textAlign: "center",
        p: 2,
        "& h4": { fontWeight: "bold", my: 2, fontSize: "2rem" },
        "& p": { textAlign: "justify" },
        "@media (max-width:600px)": {
          mt: 0,
        },
      }}
    >
      <Typography variant="h4">Welcome To My Resturant</Typography>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis
        cupiditate ex soluta reprehenderit tempore voluptatum deleniti. In aut
        reiciendis cumque exercitationem maiores facere, dicta amet similique
        sint praesentium dolor culpa ullam sit autem quia nulla, consectetur
        officia. Natus, officia eveniet autem ea eligendi eius. Nihil quam et
        doloremque culpa. Aperiam tenetur dicta hic totam quod sint, adipisci
        soluta reiciendis quos ratione ipsum rerum iste officiis, exercitationem
        expedita ex voluptas saepe consequuntur omnis culpa cupiditate! Quam,
        quasi molestias? Eius, sunt deleniti aliquid odio, perferendis assumenda
        reiciendis dolor eligendi sapiente a saepe quia maxime voluptate cum.
        Minima quae tempore hic libero iure.
      </p>
      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
        molestias voluptatibus ducimus aliquid possimus, est non consectetur
        suscipit porro beatae reiciendis eius assumenda rerum. Hic dolorem
        dolores unde quia nam voluptas fugiat distinctio magni doloremque omnis
        cum accusamus quae temporibus iure blanditiis nisi assumenda provident
        ut, libero rerum maxime cumque placeat. Aperiam sint velit libero itaque
        et perferendis cum debitis sit voluptatibus iste eligendi molestias
        molestiae nobis accusantium pariatur recusandae ab exercitationem, odit
        dolore illum ducimus earum! Perspiciatis assumenda soluta dignissimos,
        beatae quam magnam blanditiis unde minus esse rerum. Laboriosam aliquid
        sit libero laborum ducimus adipisci veritatis perspiciatis ab debitis.
      </p>
    </Box>
  );
};

export default About;
