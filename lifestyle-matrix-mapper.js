const lifeStyleArticles = [
  {
    link: "Weaving-Timelines-The-Seeds-Sow-Deeper-Than-We-Know",
    image:
      "https://freight.cargo.site/t/original/i/90c4091c13064f059f3bf4d85e437e847215dd8dd72c9e26ce616e42510c6569/Thumbnail-hero-min.png",
    type: "Spotlight On",
    name: "Weaving Timelines: The Seeds Sow Deeper Than We Know",
    description: 'Visual artist Marshall Hoang threads together past and present in this stunning photo series. ',
  },
  {
    link: "The-Sixth-Love-Language",
    image:
      "https://freight.cargo.site/t/original/i/194c93624c054c3e8159621ae16670acd062be9e6f76f25095d39afceec230b6/thumbnail2.jpg",
    type: "Spotlight On",
    name: "The Sixth Love Language",
    description: 'Writer Linh S. Nguyễn on how she learned to love in the language of food.',
  },
  {
    link: "The-Tokyo-Aesthetic-Dispatches-from-the-Streets-of-Fashion-Week",
    image:
      "https://freight.cargo.site/t/original/i/1bc340c6cac4e3520e2b65e1a5ebef1cfb2831803ba0188689ef398ea174b00a/For-Sticky-7.jpg",
    type: "Spotlight On",
    name: "The Tokyo Aesthetic: Dispatches from the Streets of Fashion Week",
    description: `Photographer Jean-Guillaume Bastin reminisces on his years spent chronicling Tokyo's celebrated October Fashion Week.`,
  },
  {
    link: "Drawing-Strength-from-Within-Perspectives-from-Mixed-Martial-Arts",
    image:
      "https://freight.cargo.site/t/original/i/099402d6f230b46dc26804b637818be0d9a03944007e1a7e0f6dfb8762cbe196/Stickyrice_MMA_homepage.jpg",
    type: "Interview",
    name: "Drawing Strength from Within: Perspectives from Mixed Martial Arts Fighters",
    description: `Celebrated coach and trainer Christian Hip reflects on the art of MMA, and sits down with some of the best fighters (and coaches) in the field.`,
  },
  {
    link: "The-Sun-Sets-at-Six-A-Conversation-with-Antares-Yee",
    image:
      "https://freight.cargo.site/t/original/i/1987ced17fdfc81db52b0023b81c2ae04589bffade63ae3aeef41d74a0d445f5/antares_07-min.jpg",
    type: "Interview",
    name: "The Sun Sets at Six: A Conversation with Antares Yee",
    description: `Using the sun mao (榫卯) technique to design his furniture, the creative director or Sun at Six discusses what it's like to create functional works of art in the era of Trump.`,
  },
  {
    link: "Une-invitation-aux-asiatiques-a-prendre-la-vie-doucement",
    image:
      "https://freight.cargo.site/t/original/i/d33d7ca23c5baf46eef56a0764e248563f0044cb54f4707c2aeece34f38db925/Laura-Color-3.JPG",
    type: "Entrevue",
    name: "Une invitation aux asiatiques a prendre la vie doucement",
    description: `Une conversation avec Laura Nhem qui a lancé le podcast Asiate Imparfaite, des entrevues avec des asiatiques qui sont, tout comme Laura, imparfaits.`,
  },
  {
    link: "To-Harness-Your-Inner-Light-Up-Close-with-LIA",
    image:
      "https://freight.cargo.site/t/original/i/51febf1738a1048927c7166bd5c93b5d6c3bcd79f538b3693814165821bdc1a2/1.jpg",
    type: "Interview",
    name: "To Harness Your Inner Light - Up Close with LIA",
    description: `In her latest EP Vasilia, LIA’s sultry voice hums over bell sounds and shuffling noises as she tells a story of resilience inspired by a Slavic fairytale.`,
  },
  {
    link: "Art-Versus-Injustice-Catching-Up-With-Albert-Nguyen",
    image:
      "https://freight.cargo.site/t/original/i/fd49ed92ae342fb055b74f8318cbc8b1990db3b1e7c9bff4e2caf9cd09b13c9d/Thumbnail-picture-1.jpg",
    type: "Interview",
    name: "Art versus Injustice: an Interview with Albert Nguyen",
    description: `Art director and graphic design Albert Nguyen on his contribution to the Sticky Rice pagoda fundraiser, the creative process, and everything in between.`,
  },
  {
    link: "The-Wisdom-of-Style-A-Mix-of-Colours-Prints-and-Eras",
    image:
      "https://freight.cargo.site/t/original/i/2557c1b920d067cb757d01a0c6d7b673ecf4c413e8f42acf28d758e6c3190c21/Image-2-min.jpg",
    type: "Interview",
    name: "The Wisdom of Style: A Mix of Colours, Prints and Eras",
    description: `Everyone who's been to a major city's Chinatown knows about the amazing food. But, if you are truly paying attention, this neighbourhood is home to some the most creative fashion choices spearheaded by local seniors.`,
  },
  {
    link: "Cheryl-Sim-Curating-a-Life-Through-Art",
    image:
      "https://freight.cargo.site/w/450/i/8200ecbd510d8ef20c72ad80403885ed552841a1b28ea298f37403a8f7007d4c/thumbnail.jpg",
    type: "Spotlight On",
    name: "Cheryl Sim: Curating a Life Through Art",
    description: `A conversation with Cheryl Sim; the accessible, informed, and dynamic face of the Montreal’s Phi Foundation
for Contemporary Art`,
  },
  {
    link: "Back-to-school-A-teacher-s-thoughts-and-worries",
    image:
      "https://freight.cargo.site/t/original/i/ebea07c9b8e04a6fc411b265a9352c72aad2788aa9a62c2bfc9d1d08db1aa5f4/SR_BackToSchool4-1.png",
    type: "Spotlight On",
    name: "Back-to-School: A Teacher's Thoughts and Worries",
    description: `There have been mixed-feelings about this year’s back-to-school season. Sticky Rice’s Lifestyle editor and educator, Kevin Ah-Sen, shares his concern on the matter and those of concerned teachers and parents.`,
  },
  {
    link: "For-The-Love-Of-Pho",
    image:
      "https://freight.cargo.site/t/original/i/aeceba3eea3d0953cad1f160437291351b983b85f49c8a896001db2db6de7b03/ezgif.com-optimize-4.gif",
    type: "Spotlight On",
    name: "For the Love of Pho",
    description: `Inspired by the local mobilization from the Vietnamese community last week, we sat down with Julie Tran to discuss last week’s controversy over the Pho King Bon restaurant’s problematic marketing strategy that involved the use of Quebecer slang words and sexually explicit puns to name the various Vietnamese dishes on its menu.`,
  },
  {
    link: "For-the-Love-of-Food-Bridging-the-Gap-Between-Two-Worlds",
    image:
      "https://freight.cargo.site/t/original/i/2e7489ce0ecedd83eaa5827cdfd89b6f58d7082b44a54528845eddd833cba710/Yatai_AffichesRGB_20200805a_OC-02.jpg",
    type: "Interview",
    name: "For the Love of Food: Bridging the Gap Between Two Worlds",
    description: `A conversation with Cheryl Sim; the accessible, informed, and dynamic face of the Montreal’s Phi Foundation
for Contemporary Art`,
  },
  {
    link: "Radical-Compassion-In-The-Face-Of-Violence",
    image:
      "https://freight.cargo.site/t/original/i/3ecbef7a6d878cefc6a94cfb6977af76cf5d404a22e6a05ff85aa91c9b2b2b5b/CQA_LAM0985-min-1_TMB.jpg",
    type: "Spotlight On",
    name: "Radical Compassion in the Face of Violence",
    description: `To bookend our crowdfunding campaign to replace vandalized statues at the Chùa Quan Âm Buddhist pagoda, members of the Sticky Rice team sat down with two of its monks to discuss what it means to be truly compassionate.`,
  },
  {
    link: "Catching-Up-With-Friends-Family-1-0",
    image:
      "https://freight.cargo.site/t/original/i/cec42400d7657c74bd696a4365edf722bacf685031be2dd881f2b79e3a686e22/1080x1350_00057.jpg",
    type: "Interview",
    name: "Catching Up With Friends & Family 1.0",
    description: `You may recognize them from our first issue’s cover. We caught up with our friends to find out what being Asian-Canadian meant for them.`,
  },
  {
    link: "The-Asiancy",
    image:
      "https://freight.cargo.site/t/original/i/33e73765bc203cad27ca3d5d2a092955be457ec095e0ed2f1a9503252548cb9b/LS-A1-crop.jpg",
    type: "Spotlight On",
    name: "The Asiancy",
    description: `A little over a year ago, a small group of Asian creatives decided to create a Facebook group that would make
    it easier for them to connect over food.`,
  },
  {
    link: "Lunar-Traditions",
    image:
      "https://freight.cargo.site/t/original/i/4e7be84ccd06fe7b1e716f6dc3262966cf7262fc6c62266b7b3cb16814fd439f/RedPocket_01_00000.jpg",
    type: "Spotlight On",
    name: "Lunar Traditions",
    description: `Lunar New Year, according to the Chinese calendar, begins on the second full moon after the Winter Solstice
    and is considered one of the most important and longest holidays.`,
  },
];

let html = "";

for (let i = 0; i < lifeStyleArticles.length; i++) {
  const article = lifeStyleArticles[i];

  // If article is the first of the row, add the grid
  // open grid 0, 3, 6
  if (i % 3 === 0) {
    html += `<div grid-row="" grid-pad="2" grid-gutter="4" grid-responsive="">`;
  }

  html += `
  <div grid-col="x10" grid-pad="2">
  <a href="${article.link}" rel="history" class="a-gen"
    ><img
      src="${article.image}"
      style="width: 100%"
      border="0"
      alt="Thumbnail image for ${article.name}"
    /><br />
    <div class="lifestyle-description--padding">
      <b>${article.type}</b><br />${article.name}
    </div>
    <br /><span
      class="lifestyle-description--padding lifestyle-description--font"
      >${article.description}</span
    ></a
  >
</div>`;

  // close the div if it's the last article in row
  // close grid 2, 5, 8,

  if ((i + 1) % 3 === 0 || (i + 1) === lifeStyleArticles.length) {
    html += `</div><br/>`;
  }
}

console.log(html);
