import React from 'react';
import Description from '../Description';



const AboutUs = (props) => {
  const title = `<h1>Sobre nós</h1>`;
  const text = `
    <h2>Ministério Pastoral</h2>
    <h3>Pr. Nilton Melo</h3>
    Pastor titular da 1° Igreja Batista em Augusto Franco.
Casado com Carlinha, é Bacharel em Teologia pelo SETEBASE/UNICESUMAR, economista e doutor em Ciência da Propriedade Intelectual pela UFS. É professor de Economia do Instituto Federal de Sergipe (IFS). Serviu como presidente da Juventude Batista de Sergipe (JUBASE), 1º vice-presidente da Convenção Batista Sergipana e assessor auxiliar da Aliança Bíblica Universitária do Brasil (ABUB).
  `;

  
  return (
        <Description title={title} text={text} />
  );
};

export default AboutUs;